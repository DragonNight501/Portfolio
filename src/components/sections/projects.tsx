import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import ProjectCard from "@/components/ui/project-card";
import Reveal from "@/components/ui/reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            index="04"
            eyebrow="Projects"
            title="Theory, applied."
            description="Deployed applications where the fundamentals show up in practice — for each one, the concepts that did the real work."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.05}>
              <ProjectCard index={index} {...project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
