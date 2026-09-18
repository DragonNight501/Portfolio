import type { Dictionary } from "@/i18n/dictionaries/en";

export type ProjectId = keyof Dictionary["projects"]["items"];

/** Locale-independent project facts; titles and descriptions live in the dictionaries. */
export type ProjectMeta = {
  id: ProjectId;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  /** Full-page screenshot; the showcase scrolls through it on hover. */
  image: string;
};

export const projects: ProjectMeta[] = [
  {
    id: "fintrack",
    tags: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"],
    // Opens straight into demo mode — no account needed.
    liveUrl: "https://mohamad-dashboard.vercel.app/demo",
    githubUrl: "https://github.com/DragonNight501/dashboard-app",
    image: "/projects/fintrack.jpg",
  },
  {
    id: "taskwise",
    tags: ["Next.js 16", "TypeScript", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://mohamad-hadi-taskwise-ai.vercel.app",
    githubUrl: "https://github.com/DragonNight501/taskwise-ai",
    image: "/projects/taskwise.jpg",
  },
  {
    id: "taskManager",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://mohamad-dabbah-task.vercel.app",
    githubUrl: "https://github.com/DragonNight501/task-management-system",
    image: "/projects/task-manager.jpg",
  },
];

export function domainOf(url: string) {
  return new URL(url).hostname;
}
