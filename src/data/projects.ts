import type { Dictionary } from "@/i18n/dictionaries/en";

export type ProjectId = keyof Dictionary["projects"]["items"];

/** Locale-independent project facts; titles and descriptions live in the dictionaries. */
export type ProjectMeta = {
  id: ProjectId;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
};

export const projects: ProjectMeta[] = [
  {
    id: "fintrack",
    tags: ["Next.js", "TypeScript", "Supabase", "Recharts"],
    liveUrl: "https://mohamad-dashboard.vercel.app",
    githubUrl: "https://github.com/DragonNight501/dashboard-app",
    image: "/projects/table.png",
  },
  {
    id: "taskManager",
    tags: ["Next.js", "TypeScript", "Drag & Drop"],
    liveUrl: "https://mohamad-dabbah-task.vercel.app",
    githubUrl: "https://github.com/DragonNight501/task-management-system",
    image: "/projects/task-manger.png",
  },
  {
    id: "taskwise",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    liveUrl: "https://mohamad-hadi-taskwise-ai.vercel.app",
    githubUrl: "https://github.com/DragonNight501/taskwise-ai",
    image: "/projects/Taskwise.png",
  },
];
