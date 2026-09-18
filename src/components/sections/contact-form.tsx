"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);

  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully.",
      });

      setForm(emptyForm);
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="rounded-xl border border-line bg-surface-2/60 p-4 transition focus-within:border-accent/60 focus-within:bg-surface">
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full bg-transparent text-fg outline-none placeholder:text-faint"
        />
      </div>

      <div className="rounded-xl border border-line bg-surface-2/60 p-4 transition focus-within:border-accent/60 focus-within:bg-surface">
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full bg-transparent text-fg outline-none placeholder:text-faint"
        />
      </div>

      <div className="rounded-xl border border-line bg-surface-2/60 p-4 transition focus-within:border-accent/60 focus-within:bg-surface">
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          className="w-full resize-none bg-transparent text-fg outline-none placeholder:text-faint"
        />
      </div>

      {/* Honeypot: hidden from humans, usually filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div className="pt-2">
        <Button className="w-full" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </div>

      <div role="status" aria-live="polite">
        {status.type !== "idle" ? (
          <div
            className={`rounded-xl border p-4 text-sm ${
              status.type === "success"
                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                : "border-red-300 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        ) : null}
      </div>
    </form>
  );
}
