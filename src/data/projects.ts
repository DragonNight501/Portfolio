export type Project = {
  title: string;
  description: string;
  concepts: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "FinTrack Dashboard",
    description:
      "A full-stack finance dashboard with authentication, transactions, budgets, charts, CSV export, Excel import and dark/light mode.",
    concepts: [
      "Authentication & session handling",
      "Relational data modeling (PostgreSQL)",
      "Aggregating data for visualization",
      "Parsing CSV and Excel files",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Recharts"],
    liveUrl: "https://mohamad-dashboard.vercel.app",
    githubUrl: "https://github.com/DragonNight501/dashboard-app",
    image: "/projects/table.png",
  },
  {
    title: "Task Manager App",
    description:
      "A task management application with creating, editing and deleting tasks, a drag-and-drop workflow and a responsive interface.",
    concepts: [
      "CRUD operations & data flow",
      "Client-side state management",
      "Ordered lists & reordering logic",
      "Responsive layout",
    ],
    tags: ["Next.js", "TypeScript", "Drag & Drop"],
    liveUrl: "https://mohamad-dabbah-task.vercel.app",
    githubUrl: "https://github.com/DragonNight501/task-management-system",
    image: "/projects/task-manger.png",
  },
  {
    title: "Taskwise AI",
    description:
      "An AI productivity app that turns a goal into an organized plan of tasks using AI-generated planning.",
    concepts: [
      "Integrating an external LLM API",
      "Structured output from prompts",
      "Asynchronous request handling",
      "Problem decomposition",
    ],
    tags: ["Next.js", "TypeScript", "OpenAI"],
    liveUrl: "https://mohamad-hadi-taskwise-ai.vercel.app",
    githubUrl: "https://github.com/DragonNight501/taskwise-ai",
    image: "/projects/Taskwise.png",
  },
];
