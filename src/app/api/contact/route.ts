import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

export async function POST(request: Request) {
  try {
    const limit = rateLimit(`contact:${getClientIp(request)}`, {
      limit: 3,
      windowMs: 10 * 60 * 1000,
    });

    if (!limit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages. Please try again later.",
        },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
      );
    }

    const body = await request.json();

    // Honeypot: hidden field that only bots fill in.
    if (String(body.company || "").trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully.",
      });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    if (
      name.length > MAX_NAME_LENGTH ||
      email.length > MAX_EMAIL_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        { success: false, message: "One of the fields is too long." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 10 characters." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      // Strip newlines so a crafted name cannot inject extra mail headers.
      subject: `New portfolio message from ${name.replace(/[\r\n]+/g, " ")}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #111827;">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="line-height: 1.6;">${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND_ERROR:", error);

      return NextResponse.json(
        { success: false, message: "Failed to send message." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT_ROUTE_ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
