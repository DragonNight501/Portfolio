"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

type FormState = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<{
        type: "idle" | "success" | "error";
        message: string;
    }>({
        type: "idle",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

            setForm({
                name: "",
                email: "",
                message: "",
            });
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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-[var(--text-secondary)]"
                >
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent text-white outline-none placeholder:text-[var(--text-secondary)]"
                />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-[var(--text-secondary)]"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-white outline-none placeholder:text-[var(--text-secondary)]"
                />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-[var(--text-secondary)]"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full resize-none bg-transparent text-white outline-none placeholder:text-[var(--text-secondary)]"
                />
            </div>

            <div className="pt-2">
                <Button className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                </Button>
            </div>

            {status.type !== "idle" ? (
                <div
                    className={`rounded-2xl border p-4 text-sm ${status.type === "success"
                            ? "border-green-500/30 bg-green-500/10 text-green-300"
                            : "border-red-500/30 bg-red-500/10 text-red-300"
                        }`}
                >
                    {status.message}
                </div>
            ) : null}
        </form>
    );
}