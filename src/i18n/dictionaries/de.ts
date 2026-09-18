import type { Dictionary } from "@/i18n/dictionaries/en";

/*
 * German copy. Conventions:
 * - Formal "Sie" throughout — the primary audience is recruiters and hiring managers.
 * - German typography: spaced en dash (" – "), ellipsis "…".
 * - Module names follow German university curricula (Rechnernetze,
 *   Softwaretechnik, Theoretische Informatik); established English IT terms
 *   (Scheduling, Caching, Routing, Deadlocks) stay English, as they do in German practice.
 */
export const de: Dictionary = {
  meta: {
    title: "Informatik · Full-Stack-Entwickler",
    description:
      "Informatik-Hintergrund, Full-Stack in der Praxis. Ich verstehe, wie Systeme von Ende zu Ende funktionieren – Netzwerke, Betriebssysteme, Datenbanken und Sicherheit – und baue damit Webanwendungen, die auch unter realen Bedingungen zuverlässig laufen.",
    keywords: [
      "Informatik",
      "Full-Stack-Entwickler",
      "Rechnernetze",
      "Datenbanken",
      "Next.js",
      "TypeScript",
      "React",
    ],
    ogTagline: "Netzwerke · Betriebssysteme · Datenbanken · Web",
  },

  common: {
    skipToContent: "Zum Inhalt springen",
  },

  nav: {
    mainLabel: "Hauptnavigation",
    mobileLabel: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    cta: "Kontakt aufnehmen",
    languageLabel: "Sprache",
    links: {
      about: "Über mich",
      foundations: "Grundlagen",
      systems: "Systeme",
      projects: "Projekte",
      contact: "Kontakt",
    },
  },

  hero: {
    status: "Offen für neue Herausforderungen",
    titleStart: "Ich verstehe das ganze System –",
    titleAccent: "nicht nur den Code.",
    primaryCta: "Meine Grundlagen ansehen",
    secondaryCta: "Projekte ansehen",
    githubLabel: "GitHub-Profil",
    stats: {
      areas: "Kernbereiche der Informatik",
      layers: "Systemschichten",
      projects: "veröffentlichte Projekte",
    },
    stackFooter: "vom Transistor bis zur Oberfläche – jede Schicht zählt",
    layers: [
      { name: "Oberfläche", detail: "UI, Barrierefreiheit, Interaktionsdesign", tools: "React · Tailwind" },
      { name: "Anwendung", detail: "Geschäftslogik, APIs, Authentifizierung", tools: "Next.js · Node.js" },
      { name: "Daten", detail: "Modellierung, SQL, Indizes, Transaktionen", tools: "PostgreSQL · Supabase" },
      { name: "Netzwerk", detail: "HTTP, DNS, TCP/IP, TLS", tools: "OSI- · TCP/IP-Modell" },
      { name: "Betriebssystem", detail: "Prozesse, Speicher, Scheduling, Dateisysteme", tools: "Linux · Shell" },
      { name: "Hardware", detail: "CPU, Speicherhierarchie, Digitallogik", tools: "Rechnerarchitektur" },
    ],
  },

  about: {
    eyebrow: "Über mich",
    title: "Ein Informatiker, der für das Web entwickelt.",
    intro: {
      before: "Ich komme aus der ",
      highlight: "Informatik",
      after:
        ". Deshalb sehe ich Software als Teil eines größeren Systems: Daten, die durch Netzwerke wandern, Prozesse, die sich Speicher teilen, Abfragen, die auf Indizes treffen – und am anderen Ende Menschen, die all das nutzen.",
    },
    reason: {
      before:
        "Programmieren ist mein Werkzeug. Zu verstehen, wie Computer, Netzwerke und Datenbanken tatsächlich funktionieren, erlaubt mir zu erkennen, ",
      highlight: "warum",
      after:
        " etwas langsam, unsicher oder fehleranfällig ist – und die Ursache zu beheben statt nur das Symptom.",
    },
    principles: [
      {
        title: "Grundlagen zuerst",
        text: "Frameworks wechseln alle paar Jahre. Komplexität, Nebenläufigkeit, Netzwerke und Datenmodellierung bleiben – deshalb investiere ich genau dort.",
      },
      {
        title: "Systemdenken",
        text: "Eine langsame Seite ist selten nur eine langsame Komponente. Ich verfolge Probleme über alle Schichten hinweg: Abfragepläne, Netzwerk-Roundtrips, Caching, Rendering.",
      },
      {
        title: "Klare Kommunikation",
        text: "Ein System zu verstehen, nützt nur, wenn man es auch erklären kann – dem Team, den Nutzern und den Menschen, die Entscheidungen treffen.",
      },
    ],
  },

  foundations: {
    eyebrow: "Grundlagen",
    title: "Die Informatik hinter dem Code.",
    description:
      "Die Bereiche, die ich im Studium vertieft habe. Sie sind der Grund, warum ich mich sicher zwischen den Schichten bewege – vom Index einer Tabelle bis zum TLS-Handshake –, ohne irgendetwas davon für Magie zu halten.",
    areas: [
      {
        title: "Algorithmen & Datenstrukturen",
        summary: "Die passende Struktur wählen und den Aufwand abschätzen, bevor die erste Zeile Code entsteht.",
        concepts: ["Big-O-Analyse", "Bäume & Graphen", "Sortieren & Suchen", "Dynamische Programmierung"],
      },
      {
        title: "Betriebssysteme",
        summary: "Was unter jedem Programm passiert: Prozesse, die um CPU und Speicher konkurrieren.",
        concepts: ["Prozesse & Threads", "Scheduling", "Virtueller Speicher", "Nebenläufigkeit & Deadlocks"],
      },
      {
        title: "Rechnernetze",
        summary: "Wie Daten tatsächlich zwischen Rechnern übertragen werden – Schicht für Schicht.",
        concepts: ["OSI & TCP/IP", "Routing & IP", "DNS & HTTP", "TLS"],
      },
      {
        title: "Datenbanken",
        summary: "Daten korrekt modellieren und auch unter Last konsistent halten.",
        concepts: ["Relationale Modellierung", "SQL & Normalisierung", "Indizierung", "ACID-Transaktionen"],
      },
      {
        title: "Rechnerarchitektur",
        summary: "Das Hardwaremodell, auf dem jede Software letztlich läuft.",
        concepts: ["CPU & Befehlssätze", "Speicherhierarchie", "Binärsystem & Logikgatter", "Caching"],
      },
      {
        title: "Softwaretechnik",
        summary: "Anforderungen im Team in wartbare Systeme übersetzen.",
        concepts: ["Anforderungen & UML", "Entwurfsmuster", "Testen", "Versionsverwaltung"],
      },
      {
        title: "IT-Sicherheit",
        summary: "Von Anfang an mit Angreifern rechnen, statt hinterher nachzubessern.",
        concepts: [
          "Authentifizierung",
          "Grundlagen der Kryptografie",
          "OWASP Top 10",
          "Least-Privilege-Prinzip",
        ],
      },
      {
        title: "Theoretische Informatik & Mathematik",
        summary: "Die formalen Werkzeuge hinter Korrektheit und Berechenbarkeit.",
        concepts: [
          "Diskrete Mathematik",
          "Logik",
          "Automaten & formale Sprachen",
          "Wahrscheinlichkeitsrechnung",
        ],
      },
    ],
  },

  systems: {
    eyebrow: "Systeme",
    titleStart: "Was passiert eigentlich, wenn Sie ",
    titleAccent: "eine Website öffnen?",
    description:
      "Eine klassische Frage im Vorstellungsgespräch – und ein guter Test, ob jemand das Gesamtbild versteht. Hier ist eine einzige Anfrage, verfolgt durch jede Schicht.",
    tablistLabel: "Schritte einer Web-Anfrage",
    stepLabel: "Schritt",
    conceptsLabel: "Beteiligte Konzepte",
    previous: "Zurück",
    next: "Nächster Schritt",
    restart: "Von vorn",
    steps: [
      {
        title: "URL & Browser-Cache",
        layer: "Anwendungsschicht",
        where: "Browser",
        explanation:
          "Der Browser zerlegt die URL in Schema, Host und Pfad, prüft HSTS-Regeln, um HTTPS zu erzwingen, und sucht nach einer zwischengespeicherten Antwort, die er wiederverwenden kann – noch bevor er das Netzwerk nutzt.",
        concepts: ["URL-Aufbau", "HSTS", "HTTP-Caching"],
      },
      {
        title: "DNS-Auflösung",
        layer: "Anwendungsschicht · DNS",
        where: "Resolver → Root → TLD → autoritativer Server",
        explanation:
          "Der Hostname muss in eine IP-Adresse übersetzt werden. Der Resolver des Betriebssystems fragt einen rekursiven DNS-Server, der die Hierarchie von den Root-Servern bis zum autoritativen Server der Domain durchläuft. Jede Antwort wird gemäß ihrer TTL zwischengespeichert.",
        concepts: ["Rekursive Auflösung", "A- / AAAA-Records", "TTL-Caching"],
      },
      {
        title: "TCP-Verbindung",
        layer: "Transportschicht",
        where: "Client ↔ Server, Port 443",
        explanation:
          "Ein Drei-Wege-Handshake (SYN, SYN-ACK, ACK) öffnet einen zuverlässigen, geordneten Bytestrom. TCP übernimmt Neuübertragung, Flusskontrolle und Überlastkontrolle, sodass die Anwendung verlorene Pakete nie zu sehen bekommt.",
        concepts: ["Drei-Wege-Handshake", "Ports", "Überlastkontrolle"],
      },
      {
        title: "TLS-Handshake",
        layer: "Sicherheit",
        where: "Client ↔ Server",
        explanation:
          "Der Server weist seine Identität mit einem Zertifikat nach, das von einer vertrauenswürdigen Zertifizierungsstelle signiert ist. Beide Seiten handeln mithilfe asymmetrischer Kryptografie Schlüssel aus und wechseln dann für den Rest der Sitzung zu schneller symmetrischer Verschlüsselung.",
        concepts: ["Zertifikate & CAs", "Schlüsselaustausch", "Symmetrische Verschlüsselung"],
      },
      {
        title: "HTTP-Anfrage",
        layer: "Anwendungsschicht",
        where: "Client → Server",
        explanation:
          "Der Browser sendet eine Anfragezeile (GET /path), Header wie Host, Accept und Cookies sowie optional einen Body. Mit HTTP/2 teilen sich viele Anfragen parallel eine einzige Verbindung.",
        concepts: ["Methoden & Statuscodes", "Header & Cookies", "HTTP/2-Multiplexing"],
      },
      {
        title: "Serverlogik",
        layer: "Anwendungsschicht",
        where: "Serverprozess",
        explanation:
          "Ein Serverprozess – vom Betriebssystem eingeplant wie jeder andere Prozess – leitet die Anfrage weiter, prüft die Sitzung, setzt Berechtigungen durch und führt die Geschäftslogik aus.",
        concepts: ["Routing", "Sitzungen & Authentifizierung", "Prozesse & Threads"],
      },
      {
        title: "Datenbankabfrage",
        layer: "Datenschicht",
        where: "Datenbankserver",
        explanation:
          "Die Anwendung fragt die Datenbank ab. Der Query-Planer nutzt einen Index, statt jede Zeile zu durchsuchen, und eine Transaktion stellt sicher, dass die Daten auch bei gleichzeitigen Schreibzugriffen konsistent bleiben.",
        concepts: ["Abfrageplanung", "Indizes (B-Bäume)", "Transaktionen & Isolation"],
      },
      {
        title: "Antwort & Rendering",
        layer: "Darstellung",
        where: "Browser",
        explanation:
          "Die Antwort wird zurückgestreamt. Der Browser baut DOM und CSSOM auf, berechnet das Layout, zeichnet die Pixel und führt JavaScript aus, um die Seite interaktiv zu machen – wo möglich auf der GPU.",
        concepts: ["DOM & CSSOM", "Layout & Paint", "Hydration"],
      },
    ],
  },

  projects: {
    eyebrow: "Projekte",
    title: "Theorie, angewandt.",
    description:
      "Live geschaltete Anwendungen, in denen die Grundlagen in der Praxis sichtbar werden – jeweils mit den Konzepten, die die eigentliche Arbeit leisten.",
    underTheHood: "Unter der Haube",
    liveDemo: "Live-Demo",
    source: "Quellcode",
    screenshotAlt: "Screenshot von {title}",
    liveDemoLabel: "Live-Demo von {title} öffnen",
    sourceLabel: "Quellcode von {title} auf GitHub öffnen",
    items: {
      fintrack: {
        title: "FinTrack Dashboard",
        description:
          "Ein Full-Stack-Finanz-Dashboard mit Authentifizierung, Transaktionen, Budgets, Diagrammen, CSV-Export, Excel-Import sowie hellem und dunklem Modus.",
        concepts: [
          "Authentifizierung & Sitzungsverwaltung",
          "Relationale Datenmodellierung (PostgreSQL)",
          "Datenaggregation für Visualisierungen",
          "Einlesen von CSV- und Excel-Dateien",
        ],
      },
      taskManager: {
        title: "Task Manager App",
        description:
          "Eine Aufgabenverwaltung zum Anlegen, Bearbeiten und Löschen von Aufgaben – mit Drag-and-Drop-Workflow und responsiver Oberfläche.",
        concepts: [
          "CRUD-Operationen & Datenfluss",
          "Clientseitiges State-Management",
          "Geordnete Listen & Sortierlogik",
          "Responsives Layout",
        ],
      },
      taskwise: {
        title: "Taskwise AI",
        description:
          "Eine KI-gestützte Produktivitäts-App, die aus einem Ziel einen strukturierten Aufgabenplan erstellt.",
        concepts: [
          "Anbindung einer externen LLM-API",
          "Strukturierte Ausgaben aus Prompts",
          "Asynchrone Verarbeitung von Anfragen",
          "Zerlegung komplexer Probleme",
        ],
      },
    },
  },

  toolbox: {
    eyebrow: "Werkzeuge",
    title: "Werkzeuge ändern sich. Grundlagen bleiben.",
    description:
      "Die Technologien, die ich aktuell einsetze. Weil sie auf Konzepten aufbauen, die ich bereits verstehe, ist die nächste Technologie eine Frage der Syntax – kein Neuanfang.",
    groups: [
      { title: "Sprachen", items: ["TypeScript", "JavaScript", "SQL", "HTML & CSS"] },
      {
        title: "Web & Backend",
        items: ["React", "Next.js", "Node.js", "REST-APIs", "Supabase", "Tailwind CSS"],
      },
      {
        title: "Systeme & Infrastruktur",
        items: ["Linux & Shell", "Git & GitHub", "Vercel", "HTTP / DNS / TLS"],
      },
      {
        title: "Arbeitsweise",
        items: [
          "Grundlagen des Systemdesigns",
          "Debugging über Schichten hinweg",
          "Security by Design",
          "Dokumentation",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns über Ihr System sprechen.",
    description:
      "Ob Stelle, Projekt oder technische Frage – ich freue mich auf Ihre Nachricht und antworte in der Regel innerhalb von ein bis zwei Tagen.",
    emailLabel: "E-Mail",
    githubLabel: "GitHub",
    form: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "sie@beispiel.de",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir von Ihrem Vorhaben …",
      submit: "Nachricht senden",
      sending: "Wird gesendet …",
      status: {
        success: "Ihre Nachricht wurde erfolgreich gesendet.",
        required: "Bitte füllen Sie alle Felder aus.",
        too_long: "Eines der Felder ist zu lang.",
        invalid_email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        message_too_short: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
        rate_limited: "Zu viele Nachrichten. Bitte versuchen Sie es später erneut.",
        not_configured: "Der E-Mail-Dienst ist derzeit nicht eingerichtet.",
        send_failed: "Die Nachricht konnte nicht gesendet werden.",
        unknown: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        network:
          "Die Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
      },
    },
  },

  footer: {
    builtWith: "Next.js · TypeScript · Tailwind CSS – gehostet auf Vercel",
  },

  error: {
    eyebrow: "Fehler",
    title: "Etwas ist schiefgelaufen",
    description: "Beim Laden dieser Seite ist ein unerwarteter Fehler aufgetreten.",
    retry: "Erneut versuchen",
  },
};
