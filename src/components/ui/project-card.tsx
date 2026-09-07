import Image from "next/image";
import { buttonStyles } from "@/components/ui/button";
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
    <div className="project-card group rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
      {image ? (
        <div className="project-image-wrap mb-6 overflow-hidden rounded-[24px] border border-[var(--border)]">
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            width={640}
            height={384}
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
            className="project-image h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="mb-6 flex h-48 items-end rounded-[24px] bg-gradient-to-br from-[var(--accent)]/20 to-white/5 p-5 transition duration-300 group-hover:from-[var(--accent)]/30">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              Featured Project
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>

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
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the live demo of ${title}`}
              className={buttonStyles("primary", "gap-2")}
            >
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}

          {hasGithubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the source code of ${title} on GitHub`}
              className={buttonStyles("secondary", "gap-2")}
            >
              GitHub
              <Code className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
