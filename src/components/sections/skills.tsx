import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "API Routes", "Server Actions", "Databases", "Authentication"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <Reveal className="mb-14">
          <SectionTitle
            eyebrow="Skills"
            title="Technologies I am learning and building with"
            description="I am focusing on modern fullstack tools that help me build fast, scalable, and polished web experiences."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                <h3 className="mb-5 text-xl font-semibold">{group.title}</h3>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-black/20 px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-white/20 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}