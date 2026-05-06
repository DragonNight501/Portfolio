import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}