export type JourneyStep = {
  title: string;
  layer: string;
  where: string;
  explanation: string;
  concepts: string[];
};

/** "What happens when you open a website?" — one request, end to end. */
export const requestJourney: JourneyStep[] = [
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
];
