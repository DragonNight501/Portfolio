import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/ui/github-icon";
import type { Project } from "@/data/projects";

type ProjectCardProps = Project & {
  index: number;
};

export default function ProjectCard({
  index,
  title,
  description,
  concepts,
  tags,
  liveUrl,
  githubUrl,
  image,
}: ProjectCardProps) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:border-line-strong md:grid-cols-[1.05fr_1fr]">
      <div className="relative overflow-hidden border-b border-line bg-ink md:border-r md:border-b-0">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            width={960}
            height={600}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full min-h-60 w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          />
        ) : (
          <div className="bg-grid h-full min-h-60" />
        )}
        <span className="absolute top-4 left-4 rounded-md border border-line-strong bg-ink/80 px-2 py-1 font-mono text-xs text-muted backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col p-6 md:p-8">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 leading-7 text-muted">{description}</p>

        <div className="mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Under the hood
          </p>
          <ul className="mt-3 space-y-2">
            {concepts.map((concept) => (
              <li key={concept} className="flex gap-3 text-sm text-fg/90">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {concept}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-line bg-ink/60 px-2 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-5 pt-8 text-sm font-medium">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the live demo of ${title}`}
              className="inline-flex items-center gap-1.5 text-accent transition hover:text-fg"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the source code of ${title} on GitHub`}
              className="inline-flex items-center gap-1.5 text-muted transition hover:text-fg"
            >
              <GithubIcon className="h-4 w-4" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
