import type { ReactNode } from "react";

type SectionTitleProps = {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export default function SectionTitle({
  index,
  eyebrow,
  title,
  description,
  children,
}: SectionTitleProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {index ? <span className="text-muted">{index}</span> : null}
          <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
