import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import ProjectCard from "@/components/ui/project-card";
import Reveal from "@/components/ui/reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <Reveal className="mb-14">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work and practice projects"
            description="These projects reflect my current learning journey in fullstack development, modern UI building, and structured project organization."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}