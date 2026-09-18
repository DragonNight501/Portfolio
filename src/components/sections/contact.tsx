import { Mail } from "lucide-react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import GithubIcon from "@/components/ui/github-icon";
import ContactForm from "@/components/sections/contact-form";
import { siteConfig } from "@/data/site";

export default function Contact() {
  const channels = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: <Mail className="h-4 w-4" />,
    },
    {
      label: "GitHub",
      value: siteConfig.github.replace("https://", ""),
      href: siteConfig.github,
      icon: <GithubIcon className="h-4 w-4" />,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div
        className="pointer-events-none absolute -bottom-52 left-1/2 h-[460px] w-[820px] -translate-x-1/2 animate-[drift_20s_ease-in-out_infinite] rounded-full bg-accent/12 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              index="06"
              eyebrow="Contact"
              title="Let's talk about your system."
              description="Whether it is a role, a project or a technical question, I am happy to hear about it. I usually reply within a day or two."
            />

            <ul className="mt-10 space-y-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.label === "GitHub" ? "_blank" : undefined}
                    rel={channel.label === "GitHub" ? "noreferrer" : undefined}
                    className="card flex items-center gap-4 rounded-xl p-4 transition hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <span className="inlay grid h-10 w-10 place-items-center rounded-lg text-white">
                      {channel.icon}
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] tracking-tight text-faint">
                        {channel.label}
                      </span>
                      <span className="block text-fg">{channel.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card rounded-2xl p-6 md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
