import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  Bot,
  Building2,
  CalendarCheck,
  ChartColumn,
  Code,
  Coins,
  Compass,
  Cpu,
  Droplet,
  Euro,
  Factory,
  Gauge,
  Globe,
  HeartPulse,
  House,
  Languages,
  Layers,
  Leaf,
  Map,
  MessageCircle,
  Network,
  Newspaper,
  Phone,
  Presentation,
  Radar,
  Recycle,
  Route,
  Scale,
  ShieldCheck,
  Smile,
  Stethoscope,
  Store,
  Sun,
  Telescope,
  Users,
  Video,
  Waves,
  Workflow,
} from "lucide-react";
import type { FilterId } from "./filters";

/**
 * One entry per project. Card fields come from the write-ups in the
 * "Believe in yourself" project (portfolio/NN-*.md).
 *
 * `story` holds the five short sections of the pop-up spread. They are
 * empty for now: we distil them project by project (≈400 words in total,
 * so the whole spread stays under a 2-minute read).
 */
export type Project = {
  slug: string;
  number: number;
  title: string;
  /** Shorter name used on small tiles */
  tileTitle?: string;
  type: string;
  location: string;
  year: string;
  filters: FilterId[];
  hook: string;
  about: string;
  results: string[];
  skills: string[];
  /** Icons shown in the squares when the tile subdivides on hover */
  icons: LucideIcon[];
  story: {
    problem?: string;
    context?: string;
    approach?: string;
    solution?: string;
    results?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "visual-bypass",
    number: 1,
    title: "Visual Bypass",
    type: "Graduation project (MSc thesis)",
    location: "TU Delft, Netherlands",
    year: "2026",
    filters: ["research", "ai", "service-design", "programming", "strategy"],
    hook: "Can the way we ask AI a question make it fairer for non-English speakers?",
    about:
      "People who ask AI questions in Hindi or Arabic pay more than English speakers for the exact same question. I measured this hidden “token tax” and designed MedQuery, a visual way to ask health questions that reduces it.",
    results: [
      "9,000 test queries showed Hindi and Arabic health questions cost 15–27% more than the same questions in English",
      "MedQuery cut the cost per question by about 60% on Google’s Gemini models",
      "Turned 1,000 real health questions into a simple framework: 6 question types, 12 sliders and open keywords",
      "Found the same design cost 4× more on GPT-5.4, and traced the cause to how that provider reuses stored instructions",
    ],
    skills: ["Research design", "Systems thinking", "Interaction design", "Statistical analysis", "Python", "Gemini & OpenAI APIs", "Prompt design", "Figma"],
    icons: [Languages, Coins, HeartPulse, Radar, Code, ChartColumn],
    story: {},
  },
  {
    slug: "livenworld",
    number: 2,
    title: "LivenWorld",
    type: "AI product for newcomers",
    location: "Amsterdam AI Factory, Netherlands",
    year: "2025",
    filters: ["ai", "service-design", "strategy"],
    hook: "What if the path to a new country came with a guide, not a library?",
    about:
      "Newcomers to the Netherlands, from refugees to expats, are drowning in scattered information. I led the design of LivenChat, an AI companion that turns the confusing path to residence into a clear, step-by-step roadmap, with every answer backed by official sources.",
    results: [
      "Led the culmination project of my internship, from first brainstorm to MVP, in a 6-week sprint",
      "Mapped the invisible 5-step asylum process into a visual “Integration Roadmap” so users always know where they stand",
      "Designed trust into the AI: answers cite official sources (IND, COA) to prevent made-up information",
      "Led the development team and presented the final pitch, framing LivenChat as a “Universal Companion”",
    ],
    skills: ["Project leadership", "System architecture", "Service design", "Trust & transparency design", "RAG", "Pitching"],
    icons: [Route, Map, ShieldCheck, MessageCircle, Users, Compass],
    story: {},
  },
  {
    slug: "careconnect",
    number: 3,
    title: "CareConnect",
    type: "Systemic service design for Erasmus MC & Juvoly",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["service-design", "strategy", "programming", "ai", "research"],
    hook: "Why do good health-tech tools never reach the doctors who need them?",
    about:
      "Dutch family doctors (GPs) are buried in paperwork, yet the digital tools that could help them rarely get past the pilot stage. We designed CareConnect, a platform where GPs find, test and review health-tech tools by the problem they want to solve. I led the team’s AI-supported process and built the clickable prototype and concept video.",
    results: [
      "Designed for a real problem: 80% of Dutch GPs say admin overload hurts the care they give",
      "Planned a 3-stage roadmap over 7 years, starting with a launch of 10 tools and 50 GPs",
      "Built a working clickable prototype from text prompts in a matter of hours, then tested it with a GP",
      "Set up a team AI workflow: a 3-part prompt structure and cross-checking answers across up to 6 AI tools",
    ],
    skills: ["Systems thinking", "Service blueprint", "Roadmapping", "Hypothesis-driven design", "Stakeholder mapping", "AI-assisted prototyping"],
    icons: [Stethoscope, Network, Workflow, Users, Layers, Code],
    story: {},
  },
  {
    slug: "ksia",
    number: 4,
    title: "KSIA × Flight Case: futures of chip-making equipment",
    tileTitle: "KSIA: chip-making futures",
    type: "Strategic foresight for the Korea Semiconductor Industry Association",
    location: "TU Delft, Netherlands & Seoul, South Korea",
    year: "2025",
    filters: ["strategy", "research"],
    hook: "What will the machines that make our chips look like in a world short on water, and trust?",
    about:
      "Chips are reaching their physical limits, chip factories use huge amounts of water, and global politics is splitting supply chains. We built four future scenarios to help KSIA prepare for more than one possible future. I worked on the research and strategy, designed the prompt framework for our AI visuals, and presented the strategy to KSIA in Seoul.",
    results: [
      "Researched 6 forces shaping the industry, from supply chains and talent to water use and lithography",
      "Clustered trends with 4 project groups into 5 key drivers, and chose sustainability and geopolitics",
      "Built 4 future scenarios on a 2×2 matrix, combined into 2 visual futures",
      "Designed a 3-part prompt framework to visualise each future with AI, then presented the strategy to KSIA in Seoul",
    ],
    skills: ["Strategic foresight", "Scenario planning", "Signal and trend research", "Industry analysis", "AI image generation", "Visual storytelling"],
    icons: [Cpu, Droplet, Globe, Telescope, Factory, Users],
    story: {},
  },
  {
    slug: "toto-stream",
    number: 5,
    title: "TOTO × Flight Case: the STREAM toolbox",
    tileTitle: "TOTO: the STREAM toolbox",
    type: "Smart home strategy for TOTO",
    location: "TU Delft, Netherlands & Tokyo, Japan",
    year: "2025",
    filters: ["service-design", "strategy", "research", "ai"],
    hook: "How can a smart toilet become a quiet partner in your everyday health?",
    about:
      "TOTO’s smart toilets already have sensors, but how can that data create real value at home? We designed STREAM, a six-step toolbox for turning sensor data into wellness features, and used it to create two concepts. I designed the tech service blueprint, worked on the research and strategy, and joined the case phase at TOTO in Tokyo.",
    results: [
      "Designed a repeatable 6-step toolbox: Scan, Target, Research, Empathise, Activate, Map",
      "Assessed 4 age groups on strategic fit and chose adults as the main target",
      "Created 4 personas and turned each into concrete features, mapped in a 5-phase service blueprint",
      "Delivered 2 concepts plus a privacy model where users choose what to share",
    ],
    skills: ["Design toolbox creation", "Service blueprint", "Personas", "Journey mapping", "Privacy-by-design", "Smart home & IoT"],
    icons: [Droplet, HeartPulse, House, Users, ShieldCheck, Workflow],
    story: {},
  },
  {
    slug: "sampoorna",
    number: 6,
    title: "Sampoorna",
    type: "B.Arch thesis",
    location: "Indore, India",
    year: "2023",
    filters: ["architecture", "research", "strategy", "service-design"],
    hook: "What if housing for the poor was designed to grow, instead of to be replaced?",
    about:
      "Most informal workers in Indian cities live in slums that get demolished or “rehoused” far from where they work. Sampoorna redesigns an Indore settlement as flexible housing clusters that families can grow over time, keeping their community and their livelihoods in place.",
    results: [
      "Selected among the Top 10 Best Theses of my batch",
      "Designed 1 flexible cluster in 4 types, mixing homes, shops and high-rise cores",
      "Planned homes that grow from a 1-room unit to a 2-bedroom unit as a family’s needs change",
      "Proposed fast, low-cost GFRG panel construction: a house in 60 days at up to 30% lower cost",
    ],
    skills: ["Site surveys", "Urban design", "Housing design", "Incremental design", "Universal design", "Revit"],
    icons: [House, Building2, Users, Sun, Leaf, Layers],
    story: {},
  },
  {
    slug: "unlearn",
    number: 7,
    title: "Unlearn: a speculative future of AI in schools",
    tileTitle: "Unlearn",
    type: "Responsible AI · speculative design",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["ai", "research"],
    hook: "What happens to a society when an algorithm decides who’s “at risk”?",
    about:
      "A school AI that flags “at-risk” students sounds helpful. But what happens when it goes national? We mapped everyone it affects, then jumped to 2032, where an activist movement fights back with graffiti, and brought that future to life with a fictional news site and a staged video. I built the website and co-created the stakeholder map and the story.",
    results: [
      "Mapped 16 stakeholders across 3 rings (core, direct, indirect), each with their values, benefits and harms",
      "Identified 4 key value conflicts, plus 4 harms affecting almost everyone",
      "Built a fictional 2035 news website: a homepage and a full article",
      "Staged and filmed the “Unlearn” graffiti action as if it were happening in that future",
    ],
    skills: ["Value sensitive design", "Stakeholder mapping", "Speculative design", "Design fiction", "Web page design", "Video production"],
    icons: [Scale, Users, Newspaper, Video, Telescope, ShieldCheck],
    story: {},
  },
  {
    slug: "ava",
    number: 8,
    title: "AVA: the invisible receptionist",
    tileTitle: "AVA",
    type: "AI voice agent for salons",
    location: "Amsterdam AI Factory, Netherlands",
    year: "2025",
    filters: ["agent", "ai", "research"],
    hook: "How do you design an experience that has no screen?",
    about:
      "Salon owners lose bookings because they can’t answer the phone while cutting hair. AVA is an AI receptionist that picks up and schedules appointments by itself. I interviewed salon owners, helped launch the website and marketing, and designed the survey to test pricing.",
    results: [
      "Interviewed salon owners and found they don’t care about “AI”; they care about peace of mind",
      "Helped take AVA live: published website with a demo and AI audio, plus a LinkedIn marketing funnel",
      "Designed a feedback survey to test two price points (€75 vs. €325 a month)",
      "Designed an experience with no screen at all, where trust comes from a reliable conversation",
    ],
    skills: ["User interviews", "Voice & conversation design", "Go-to-market", "Website deployment", "Survey design", "Pricing validation"],
    icons: [Phone, AudioLines, CalendarCheck, Bot, Euro, MessageCircle],
    story: {},
  },
  {
    slug: "onevibe",
    number: 9,
    title: "OneVibe: culture you can measure",
    tileTitle: "OneVibe",
    type: "AI for HR & company culture",
    location: "Amsterdam AI Factory, Netherlands",
    year: "2025",
    filters: ["service-design", "strategy", "ai"],
    hook: "What if a company could feel its own pulse?",
    about:
      "Companies are flying blind on how their people feel: surveys are too slow and gut feeling is too risky. OneVibe is an AI loop that asks, analyses and acts on team morale. I mapped its service blueprint, prototyped the Mood Dashboard and helped reshape the investor pitch.",
    results: [
      "Mapped the full data flow, from an employee’s phone to the HR dashboard, with privacy at the centre",
      "Prototyped a Mood Dashboard that turns feelings into clear next steps for managers",
      "Co-created the investor deck, reframing OneVibe from a “survey tool” to a “Culture Co-Pilot”",
      "Delivered in a 4-week sprint, my first at the venture builder",
    ],
    skills: ["Service blueprint", "Privacy-by-design", "Rapid prototyping", "Dashboard design", "Data storytelling", "Investor deck"],
    icons: [Smile, Gauge, Users, ShieldCheck, ChartColumn, Presentation],
    story: {},
  },
  {
    slug: "umang",
    number: 10,
    title: "Umang",
    type: "Urban revitalisation",
    location: "Howrah, India",
    year: "2019",
    filters: ["architecture", "strategy", "research", "service-design"],
    hook: "Can a city improve without pushing its poorest people out?",
    about:
      "Howrah, across the river from Kolkata, is dense, polluted and slowly being gentrified, pushing out the people who live there. Our team proposed a revitalisation that works at three scales, from the riverfront down to a single home, so the community stays and the city improves.",
    results: [
      "National winner of the NASA India Zonal Design Competition (ZNDC) 2019",
      "Designed at 3 scales: the riverfront, neighbourhood modules and a living unit",
      "Designed 4 plug-in neighbourhood modules: rainwater, shade, a safety box and a fruit vendor stall",
      "Showed the approach could work in 6 other dense cities, from Delhi to Hong Kong",
    ],
    skills: ["Urban research", "Mapping", "Systems thinking", "Urban design", "Modular design", "Hand sketching"],
    icons: [Waves, Droplet, Store, Recycle, Building2, Users],
    story: {},
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const STORY_SECTIONS = [
  { key: "problem", label: "Problem", budget: 60 },
  { key: "context", label: "Context", budget: 60 },
  { key: "approach", label: "Approach", budget: 80 },
  { key: "solution", label: "Solution", budget: 80 },
  { key: "results", label: "Results", budget: 60 },
] as const;
