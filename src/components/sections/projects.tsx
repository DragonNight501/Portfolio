import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import ProjectCard from "@/components/ui/project-card";
import Reveal from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/i18n/get-dictionary";

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <section id="projects" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            index="04"
            eyebrow={dict.eyebrow}
            title={dict.title}
            description={dict.description}
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.05}>
              <ProjectCard
                index={index}
                project={project}
                content={dict.items[project.id]}
                labels={dict}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
