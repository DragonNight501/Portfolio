import Button from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  image,
}: ProjectCardProps) {
  const hasLiveUrl = liveUrl.trim().length > 0;
  const hasGithubUrl = githubUrl.trim().length > 0;

  return (
    <div className="group rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
      {image ? (
        <div className="mb-6 overflow-hidden rounded-[24px] border border-[var(--border)]">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="mb-6 flex h-48 items-end rounded-[24px] bg-gradient-to-br from-[var(--accent)]/20 to-white/5 p-5 transition duration-300 group-hover:from-[var(--accent)]/30">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">Featured Project</p>
            <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <p className="leading-8 text-[var(--text-secondary)]">{description}</p>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-black/20 px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-white/20 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {hasLiveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer">
              <Button className="gap-2">
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          ) : (
            <Button className="gap-2 opacity-60">
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}

          {hasGithubUrl ? (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="gap-2">
                GitHub
                <Code className="h-4 w-4" />
              </Button>
            </a>
          ) : (
            <Button variant="secondary" className="gap-2 opacity-60">
              GitHub
              <Code className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}