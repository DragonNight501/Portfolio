/** Locale-independent facts. All visible copy lives in src/i18n/dictionaries. */
export const siteConfig = {
  name: "Mohamad Hadi Dabbah Aljimal",
  shortName: "MHD",
  url: "https://portfolio-mohamad-dabbah.vercel.app",
  email: "hadi.90.h@gmail.com",
  github: "https://github.com/DragonNight501",
};

export const sections = ["about", "foundations", "systems", "projects", "contact"] as const;

export type SectionId = (typeof sections)[number];
