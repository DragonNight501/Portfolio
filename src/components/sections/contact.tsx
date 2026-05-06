import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/sections/contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <Reveal>
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <SectionTitle
                  eyebrow="Contact"
                  title="Let’s build something great together"
                  description="If you want a modern website, a clean frontend, or a fullstack project with a polished user experience, let’s connect."
                />

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                    <p className="text-sm text-[var(--text-secondary)]">Email</p>
                    <p className="mt-2 text-lg font-medium">{siteConfig.email}</p>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                    <p className="text-sm text-[var(--text-secondary)]">GitHub</p>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-lg font-medium hover:text-[var(--accent)]"
                    >
                      {siteConfig.github.replace("https://", "")}
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}