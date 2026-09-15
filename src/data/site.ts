export const siteConfig = {
  name: "Mohamad Hadi Dabbah Aljimal",
  shortName: "MHD",
  title: "Computer Science · Full-Stack Developer",
  role: "Computer Science background, full-stack in practice",
  description:
    "Computer Science background with a full-stack practice. I understand how systems work end to end — networks, operating systems, databases and security — and use that to build web applications that hold up.",

  url: "https://portfolio-mohamad-dabbah.vercel.app",

  email: "hadi.90.h@gmail.com",
  github: "https://github.com/DragonNight501",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Foundations", href: "#foundations" },
  { label: "Systems", href: "#systems" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/** The layers of a computer system, top (closest to the user) to bottom. */
export const systemLayers = [
  {
    name: "Interface",
    detail: "UI, accessibility, interaction design",
    tools: "React · Tailwind",
  },
  {
    name: "Application",
    detail: "Business logic, APIs, authentication",
    tools: "Next.js · Node.js",
  },
  {
    name: "Data",
    detail: "Modeling, SQL, indexing, transactions",
    tools: "PostgreSQL · Supabase",
  },
  {
    name: "Network",
    detail: "HTTP, DNS, TCP/IP, TLS",
    tools: "OSI · TCP/IP model",
  },
  {
    name: "Operating System",
    detail: "Processes, memory, scheduling, file systems",
    tools: "Linux · shell",
  },
  {
    name: "Hardware",
    detail: "CPU, memory hierarchy, digital logic",
    tools: "Architecture",
  },
];

export const principles = [
  {
    title: "Fundamentals first",
    text: "Frameworks change every few years. Complexity, concurrency, networking and data modeling do not — so that is where I invest.",
  },
  {
    title: "Systems thinking",
    text: "A slow page is rarely just a slow component. I trace problems across layers: query plans, network round-trips, caching, rendering.",
  },
  {
    title: "Clear communication",
    text: "Understanding a system is only useful if you can explain it — to teammates, to users, and to the people making decisions.",
  },
];
