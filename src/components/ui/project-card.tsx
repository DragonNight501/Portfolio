import Image from "next/image";
import { ArrowUpRight, Lock, Sparkles } from "lucide-react";
import GithubIcon from "@/components/ui/github-icon";
import { buttonStyles } from "@/components/ui/button";
import { domainOf } from "@/data/projects";
import type { ProjectMeta } from "@/data/projects";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn, format } from "@/lib/utils";

type ProjectCardProps = {
  index: number;
  project: ProjectMeta;
  content: Dictionary["projects"]["items"][ProjectMeta["id"]];
  labels: Dictionary["projects"];
};

/**
 * One project as a browser window next to its case study. The preview holds a
 * full-page screenshot that scrolls from top to bottom while hovered; rows
 * alternate sides on large screens.
 */
export default function ProjectCard({ index, project, content, labels }: ProjectCardProps) {
  const { tags, liveUrl, githubUrl, image } = project;
  const { title, category, highlight, description, concepts } = content;
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14 [&>*]:min-w-0">
      <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={format(labels.liveDemoLabel, { title })}
          className="group/preview block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div className="panel overflow-hidden rounded-2xl transition duration-500 group-hover/preview:-translate-y-1 group-hover/preview:shadow-[0_40px_80px_-40px_rgb(13_17_23/0.45)]">
            <div className="flex items-center gap-3 border-b border-line bg-surface-2/70 px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              </div>
              <div className="mx-auto flex min-w-0 items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted">
                <Lock className="h-3 w-3 shrink-0 text-faint" aria-hidden="true" />
                <span className="truncate">{domainOf(liveUrl)}</span>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-faint transition group-hover/preview:text-accent"
                aria-hidden="true"
              />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
              <Image
                src={image}
                alt={format(labels.screenshotAlt, { title })}
                fill
                sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
                className="object-cover object-top transition-[object-position] duration-[6000ms] ease-in-out group-hover/preview:object-bottom"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface/70 to-transparent transition-opacity duration-500 group-hover/preview:opacity-0"
                aria-hidden="true"
              />
            </div>
          </div>
        </a>
        <p className="mt-3 hidden font-mono text-[11px] text-faint lg:block">{labels.previewHint}</p>
      </div>

      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em]">
          <span className="text-faint">{number}</span>
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          <span className="text-accent">{category}</span>
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{title}</h3>

        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {highlight}
        </p>

        <p className="mt-5 leading-7 text-muted">{description}</p>

        <div className="mt-6 border-t border-line pt-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{labels.underTheHood}</p>
          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {concepts.map((concept) => (
              <li key={concept} className="flex gap-3 text-sm text-fg">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {concept}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[10px] tracking-tight text-muted">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={format(labels.liveDemoLabel, { title })}
            className={buttonStyles("primary")}
          >
            {labels.liveDemo}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={format(labels.sourceLabel, { title })}
            className={buttonStyles("secondary")}
          >
            <GithubIcon className="h-4 w-4" />
            {labels.source}
          </a>
        </div>
      </div>
    </article>
  );
}
