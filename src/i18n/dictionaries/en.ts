export const en = {
  meta: {
    title: "Computer Science · Full-Stack Developer",
    description:
      "Computer Science background with a full-stack practice. I understand how systems work end to end — networks, operating systems, databases and security — and use that to build web applications that hold up.",
    keywords: [
      "Computer Science",
      "Full-Stack Developer",
      "Networks",
      "Databases",
      "Next.js",
      "TypeScript",
      "React",
    ],
    ogTagline: "Networks · Operating Systems · Databases · Web",
  },

  common: {
    skipToContent: "Skip to content",
  },

  nav: {
    mainLabel: "Main",
    mobileLabel: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cta: "Get in touch",
    languageLabel: "Language",
    links: {
      about: "About",
      foundations: "Foundations",
      systems: "Systems",
      projects: "Projects",
      contact: "Contact",
    },
  },

  hero: {
    status: "Open to opportunities",
    titleStart: "I understand the whole system,",
    titleAccent: "not just the code.",
    primaryCta: "Explore my foundations",
    secondaryCta: "View projects",
    githubLabel: "GitHub profile",
    stats: {
      areas: "core CS areas",
      layers: "system layers",
      projects: "deployed projects",
    },
    stackFooter: "from transistors to interfaces — every layer matters",
    layers: [
      { name: "Interface", detail: "UI, accessibility, interaction design", tools: "React · Tailwind" },
      { name: "Application", detail: "Business logic, APIs, authentication", tools: "Next.js · Node.js" },
      { name: "Data", detail: "Modeling, SQL, indexing, transactions", tools: "PostgreSQL · Supabase" },
      { name: "Network", detail: "HTTP, DNS, TCP/IP, TLS", tools: "OSI · TCP/IP model" },
      { name: "Operating System", detail: "Processes, memory, scheduling, file systems", tools: "Linux · shell" },
      { name: "Hardware", detail: "CPU, memory hierarchy, digital logic", tools: "Architecture" },
    ],
  },

  about: {
    eyebrow: "About",
    title: "A computer scientist who builds for the web.",
    intro: {
      before: "My background is in ",
      highlight: "Computer Science",
      after:
        ", so I see software as one part of a larger system: data travelling through networks, processes sharing memory, queries hitting indexes, and users on the other end of it all.",
    },
    reason: {
      before:
        "Programming is how I build things. Understanding how computers, networks and databases actually work is what lets me reason about ",
      highlight: "why",
      after:
        " something is slow, insecure or fragile — and fix the cause instead of the symptom.",
    },
    principles: [
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
    ],
  },

  foundations: {
    eyebrow: "Foundations",
    title: "The Computer Science behind the code.",
    description:
      "The areas I studied in depth. They are the reason I can move between layers — from an index on a table to a TLS handshake — without treating any of them as magic.",
    areas: [
      {
        title: "Algorithms & Data Structures",
        summary: "Choosing the right structure and reasoning about cost before writing code.",
        concepts: ["Big-O analysis", "Trees & graphs", "Sorting & searching", "Dynamic programming"],
      },
      {
        title: "Operating Systems",
        summary: "What happens beneath every program: processes competing for CPU and memory.",
        concepts: ["Processes & threads", "Scheduling", "Virtual memory", "Concurrency & deadlocks"],
      },
      {
        title: "Computer Networks",
        summary: "How data actually moves between machines, layer by layer.",
        concepts: ["OSI & TCP/IP", "Routing & IP", "DNS & HTTP", "TLS"],
      },
      {
        title: "Databases",
        summary: "Modeling data correctly and keeping it consistent under load.",
        concepts: ["Relational modeling", "SQL & normalization", "Indexing", "ACID transactions"],
      },
      {
        title: "Computer Architecture",
        summary: "The hardware model every piece of software ultimately runs on.",
        concepts: ["CPU & instruction sets", "Memory hierarchy", "Binary & logic gates", "Caching"],
      },
      {
        title: "Software Engineering",
        summary: "Turning requirements into maintainable systems, as a team.",
        concepts: ["Requirements & UML", "Design patterns", "Testing", "Version control"],
      },
      {
        title: "IT Security",
        summary: "Designing with attackers in mind instead of patching afterwards.",
        concepts: ["Authentication", "Cryptography basics", "OWASP Top 10", "Least privilege"],
      },
      {
        title: "Theory & Mathematics",
        summary: "The formal tools behind correctness and computability.",
        concepts: ["Discrete math", "Logic", "Automata & languages", "Probability"],
      },
    ],
  },

  systems: {
    eyebrow: "Systems",
    titleStart: "What actually happens when you ",
    titleAccent: "open a website?",
    description:
      "A classic interview question — and a good test of whether someone understands the whole picture. Here is one request, followed through every layer.",
    tablistLabel: "Steps of a web request",
    stepLabel: "step",
    conceptsLabel: "Concepts involved",
    previous: "Previous",
    next: "Next step",
    restart: "Start over",
    steps: [
      {
        title: "URL & browser cache",
        layer: "Application",
        where: "Browser",
        explanation:
          "The browser parses the URL into scheme, host and path, checks HSTS rules to force HTTPS, and looks for a cached response it may reuse before touching the network.",
        concepts: ["URL structure", "HSTS", "HTTP caching"],
      },
      {
        title: "DNS resolution",
        layer: "Application · DNS",
        where: "Resolver → root → TLD → authoritative",
        explanation:
          "The hostname has to become an IP address. The OS resolver asks a recursive DNS server, which walks the hierarchy from the root servers down to the domain's authoritative server. Every step is cached with a TTL.",
        concepts: ["Recursive resolution", "A / AAAA records", "TTL caching"],
      },
      {
        title: "TCP connection",
        layer: "Transport",
        where: "Client ↔ server, port 443",
        explanation:
          "A three-way handshake (SYN, SYN-ACK, ACK) opens a reliable, ordered byte stream. TCP handles retransmission, flow control and congestion control so the application never sees lost packets.",
        concepts: ["Three-way handshake", "Ports", "Congestion control"],
      },
      {
        title: "TLS handshake",
        layer: "Security",
        where: "Client ↔ server",
        explanation:
          "The server proves its identity with a certificate signed by a trusted authority. Both sides agree on keys through asymmetric cryptography, then switch to fast symmetric encryption for the rest of the session.",
        concepts: ["Certificates & CAs", "Key exchange", "Symmetric encryption"],
      },
      {
        title: "HTTP request",
        layer: "Application",
        where: "Client → server",
        explanation:
          "The browser sends a request line (GET /path), headers such as Host, Accept and cookies, and optionally a body. With HTTP/2 many requests share one connection in parallel.",
        concepts: ["Methods & status codes", "Headers & cookies", "HTTP/2 multiplexing"],
      },
      {
        title: "Server logic",
        layer: "Application",
        where: "Server process",
        explanation:
          "A server process — scheduled by the OS like any other — routes the request, validates the session, enforces authorization and runs the business logic.",
        concepts: ["Routing", "Sessions & auth", "Processes & threads"],
      },
      {
        title: "Database query",
        layer: "Data",
        where: "Database server",
        explanation:
          "The application queries the database. The query planner picks an index instead of scanning every row, and a transaction guarantees the data stays consistent even with concurrent writers.",
        concepts: ["Query planning", "Indexes (B-trees)", "Transactions & isolation"],
      },
      {
        title: "Response & rendering",
        layer: "Presentation",
        where: "Browser",
        explanation:
          "The response streams back. The browser builds the DOM and CSSOM, computes layout, paints pixels and runs JavaScript to make the page interactive — on the GPU where it can.",
        concepts: ["DOM & CSSOM", "Layout & paint", "Hydration"],
      },
    ],
  },

  projects: {
    eyebrow: "Projects",
    title: "Theory, applied.",
    description:
      "Deployed applications where the fundamentals show up in practice — for each one, the concepts that did the real work.",
    underTheHood: "Under the hood",
    liveDemo: "Live demo",
    source: "Source code",
    previewHint: "Hover the preview to scroll through the page",
    screenshotAlt: "Screenshot of {title}",
    liveDemoLabel: "Open the live demo of {title}",
    sourceLabel: "Open the source code of {title} on GitHub",
    items: {
      fintrack: {
        title: "FinTrack",
        category: "Full-stack · Finance",
        highlight: "Try it without an account",
        description:
          "A finance dashboard with cash-flow and category charts, monthly budgets, Excel and CSV import and export — plus a demo mode that runs entirely in the browser.",
        concepts: [
          "Authentication & row-level security (Supabase)",
          "Relational data modeling (PostgreSQL)",
          "Parsing spreadsheets: dates, locales, validation",
          "Aggregating monthly cash flow for charts",
        ],
      },
      taskwise: {
        title: "Taskwise AI",
        category: "AI · Productivity",
        highlight: "Powered by Google Gemini",
        description:
          "Describe a goal and Gemini turns it into an ordered plan of concrete tasks — in the language of the goal — on a board you can work through.",
        concepts: [
          "LLM integration with structured JSON output",
          "Prompt design & input validation",
          "Rate limiting a paid API",
          "Graceful fallback when the model is unavailable",
        ],
      },
      taskManager: {
        title: "Task Management System",
        category: "Frontend · Productivity",
        highlight: "Keyboard- and touch-friendly",
        description:
          "A Kanban board with drag and drop, arrow controls for touch screens, undo for destructive actions, search and live progress — saved in the browser.",
        concepts: [
          "Client state with useSyncExternalStore",
          "Persisting and migrating local data",
          "Accessible alternatives to drag and drop",
          "Undo instead of confirmation dialogs",
        ],
      },
    },
  },

  toolbox: {
    eyebrow: "Toolbox",
    title: "Tools change. Fundamentals transfer.",
    description:
      "The technologies I currently use. Because they sit on concepts I already understand, picking up the next one is a matter of syntax, not starting over.",
    groups: [
      { title: "Languages", items: ["TypeScript", "JavaScript", "SQL", "HTML & CSS"] },
      {
        title: "Web & Backend",
        items: ["React", "Next.js", "Node.js", "REST APIs", "Supabase", "Tailwind CSS"],
      },
      {
        title: "Systems & Infrastructure",
        items: ["Linux & shell", "Git & GitHub", "Vercel", "HTTP / DNS / TLS"],
      },
      {
        title: "Practices",
        items: [
          "System design basics",
          "Debugging across layers",
          "Security by design",
          "Documentation",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your system.",
    description:
      "Whether it is a role, a project or a technical question, I am happy to hear about it. I usually reply within a day or two.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project…",
      submit: "Send message",
      sending: "Sending…",
      status: {
        success: "Message sent successfully.",
        required: "All fields are required.",
        too_long: "One of the fields is too long.",
        invalid_email: "Please enter a valid email address.",
        message_too_short: "Message must be at least 10 characters.",
        rate_limited: "Too many messages. Please try again later.",
        not_configured: "Email service is not configured.",
        send_failed: "Failed to send message.",
        unknown: "Something went wrong. Please try again.",
        network: "Unable to send message. Please check your connection and try again.",
      },
    },
  },

  footer: {
    builtWith: "Next.js · TypeScript · Tailwind CSS — deployed on Vercel",
  },

  error: {
    eyebrow: "Error",
    title: "Something went wrong",
    description: "An unexpected error occurred while rendering this page.",
    retry: "Try again",
  },
};

export type Dictionary = typeof en;

export type ContactStatusCode = keyof Dictionary["contact"]["form"]["status"];
