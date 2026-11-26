// All the words on the landing page live here, so copy can change
// without touching components. Text below is the Figma lo-fi copy.

export const site = {
  name: "Prabhanshu Sharma",
  nameLines: ["Prabhanshu", "Sharma"],
  initials: "ps.",
  year: 2026,
  tagline: "A personal edge of the internet",
  status: "Open for product + service design roles",
  /** The CV PDF lives in public/ — replace the file to update it */
  cv: "/Prabhanshu-Sharma-CV.pdf",
  description:
    "Service designer working on AI products and services, innovation and strategy. MSc Strategic Product Design, TU Delft.",

  indexTitle: "The living index",
  indexVolume: "Vol. 01 — Always in progress",
  heroKicker: "Designer. Maker. Curious human.",
  intro: "A collection of things I make, things I do, and things that make me, me.",
  introFoot: "Based on Earth. Thinking everywhere.",
  filterNote: "A little work. A little life.",

  reminder: { kicker: "A small reminder", lines: ["Make things.", "Feel things."], foot: "Repeat." },
  status2: { kicker: "Current status", lines: ["Less scroll.", "More soul."], foot: "Offline is a nice place, too." },
  behind: {
    kicker: "Behind the grid",
    body: ["Independent designer.", "Collector of small moments.", "Always a work in progress."],
    foot: "A little bit of everything.",
  },
  talk: { kicker: "Got something in mind?", lines: ["Let’s", "talk."] },

  indexFootLeft: "Work + life + the space between.",
  indexFootRight: "Empty squares = room for what’s next.",
  footerLeft: "Made with intention.",
  footerRight: "Not a finished product. A living one.",

  // TODO: fill these in before launch
  email: "",
  links: [
    { label: "Instagram", href: "" },
    { label: "LinkedIn", href: "" },
  ],
};

export const contactHref = site.email ? `mailto:${site.email}` : "#contact";
