import type { FilterId } from "./filters";
import type { PartnerId } from "./partners";

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
  /** Organisations worked with (ids from partners.ts) */
  partners: PartnerId[];
  /** Shows the "Now featured" sticker. Put it on the topmost project. */
  featured?: boolean;
  /**
   * Cover graphic revealed when the tile is hovered, and shown at the top of
   * the spread. Defaults to /covers/<slug>.svg (a placeholder until replaced).
   */
  cover?: string;
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
    partners: ["tu-delft"],
    featured: true,
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
    story: {},
  },
  {
    slug: "livenworld",
    partners: ["aaif"],
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
    story: {},
  },
  {
    slug: "careconnect",
    partners: ["tu-delft", "erasmus-mc", "juvoly"],
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
    story: {},
  },
  {
    slug: "ksia",
    partners: ["ksia", "tu-delft"],
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
    story: {},
  },
  {
    slug: "toto-stream",
    partners: ["toto", "tu-delft"],
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
    story: {},
  },
  {
    slug: "sampoorna",
    partners: ["spa-vijayawada"],
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
    story: {},
  },
  {
    slug: "unlearn",
    partners: ["tu-delft"],
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
    story: {},
  },
  {
    slug: "ava",
    partners: ["aaif"],
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
    story: {},
  },
  {
    slug: "onevibe",
    partners: ["aaif"],
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
    story: {},
  },
  {
    slug: "umang",
    partners: ["nasa-india"],
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
    story: {},
  },
  // ---- The deck: projects 11–25 (not placed in the grid layout) ----
  {
    slug: "multimodal-genai",
    partners: ["tu-delft"],
    number: 11,
    title: "Multimodal Gen AI in Healthcare",
    tileTitle: "Multimodal Gen AI",
    type: "Technology foresight",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["strategy", "ai", "research"],
    hook: "Could a digital copy of you find your best treatment, and would you trust it?",
    about:
      "What if your doctor could test a treatment on a digital copy of you before trying it on you? We explored how generative AI that combines scans, DNA, health records and wearable data could create “digital twins” of patients, and what has to go right for people to trust it. I led the research on challenges and ethics, and drew the concluding visual.",
    results: [
      "Built the story on 40 sources across technology, ethics and society",
      "Mapped a 4-stage future path from 2025 to 2040+: from synthetic data to a full-body digital twin",
      "Found 3 big barriers (data, bias and trust) and paired 9 ethical risks with solutions",
      "Positioned strategic design across 3 levels of change: technology, healthcare system and society",
    ],
    skills: ["Technology foresight", "Strategic design", "Ethical impact assessment", "Scenario planning", "Technology readiness assessment", "Illustration"],
    story: {},
  },
  {
    slug: "juvoly",
    partners: ["tu-delft"],
    number: 12,
    title: "Juvoly: keeping doctors in control of AI",
    tileTitle: "Juvoly",
    type: "Responsible AI design",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["ai", "service-design", "research"],
    hook: "How do you design an AI helper that saves time without taking over?",
    about:
      "Juvoly QuickConsult is an AI tool that listens to doctor–patient conversations and writes up the medical notes. I mapped who this affects and how, then designed “Override & Annotate”, a feature that saves doctors time without taking away their control.",
    results: [
      "Mapped 5 stakeholders: 2 directly involved (doctor, patient) and 3 indirectly",
      "Linked every impact to 4 values for trustworthy AI: efficiency, autonomy, reliability and privacy",
      "Found the key tension: time saved could cost doctors their judgement",
      "Proposed Override & Annotate, in line with the EU AI Act’s call for human oversight",
    ],
    skills: ["Value sensitive design", "Stakeholder analysis", "Responsible AI", "EU AI Act", "Value scenarios", "Sketching"],
    story: {},
  },
  {
    slug: "yees",
    partners: ["red-cross", "tu-delft"],
    number: 13,
    title: "YEES! Youth Education & Empowerment System",
    tileTitle: "YEES!",
    type: "Strategic design for the Netherlands Red Cross",
    location: "TU Delft, Netherlands",
    year: "2024–25",
    filters: ["strategy", "service-design", "research"],
    hook: "How can a game help teenagers protect their communities from climate disasters?",
    about:
      "The Red Cross wanted young people to take local action on climate and disaster risks using nature. We designed YEES!, a card game, an online platform and pop-up hubs that work together to teach teenagers and help them act. I was responsible for the research and the 5-year roadmap.",
    results: [
      "Built on 10 scientific papers, 20+ articles and 8 interviews with the Red Cross",
      "Merged 3 early concepts into 1 system: card game + online platform + pop-up hubs",
      "Tested the final prototype with 8 students; QR codes on the cards sparked curiosity",
      "Delivered a 5-year roadmap to 2030 and a cost plan (€35,500–€86,000), starting with a pilot in Kenya",
    ],
    skills: ["Strategic design", "System design", "Benchmarking", "Roadmapping", "Prototyping", "Usability testing"],
    story: {},
  },
  {
    slug: "urban-mosaic",
    partners: ["spa-vijayawada"],
    number: 14,
    title: "Urban Mosaic",
    type: "Urban design for a pilgrim city",
    location: "Haridwar, India",
    year: "2022",
    filters: ["architecture", "research", "strategy", "service-design"],
    hook: "How do you design a city for 700,000 extra visitors in a single day?",
    about:
      "Haridwar’s population swells by millions during religious festivals, leaving its streets jammed, unsafe and confusing. We studied the city zone by zone, talked to the people who live and work there, and redesigned its key junctions into walkable, green public spaces.",
    results: [
      "Ranked in the Top 3 of a large-scale academic project",
      "Documented 6 zones of the city through maps of buildings, land use, texture and height",
      "Interviewed 4 types of people: a vendor, a tourist, a resident and a municipal worker",
      "Redesigned 3 key junctions and planned 7 layers, from streets and cycle tracks to flood management",
    ],
    skills: ["Urban research", "Interviews", "Land use mapping", "Urban design", "Master planning", "Landscape & water design"],
    story: {},
  },
  {
    slug: "postnl",
    partners: ["tu-delft"],
    number: 15,
    title: "PostNL: A Structural Revolution",
    tileTitle: "PostNL",
    type: "Organisational strategy",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["strategy", "service-design", "research"],
    hook: "How do you help a 100-year-old company change course when it moves like an oil tanker?",
    about:
      "PostNL is losing ground to DHL and Amazon, partly because its rigid structure and disengaged staff block new ideas. We designed a step-by-step change plan led by employees, starting with an AI-supported HR platform that gives them a voice. I did the research, found where to intervene, and built the digital transformation strategy and its service blueprint.",
    results: [
      "Diagnosed PostNL’s challenges with a SWOT, desk research and employee interviews",
      "Redesigned Kotter’s 8-step change model with a 3-step test-and-improve loop",
      "Prototyped an HR platform with 6 features, including AI learning paths and a mood dashboard",
      "Set a target to raise employee engagement from 68 to 80, linked to 6 UN SDGs",
    ],
    skills: ["Organisational strategy", "Digital transformation", "Service blueprinting", "Change management", "Stakeholder mapping", "Prototyping"],
    story: {},
  },
  {
    slug: "bubble-to-bubbles",
    partners: [],
    number: 16,
    title: "Bubble to Bubbles",
    type: "Modular quarantine centre",
    location: "India",
    year: "2020",
    filters: ["architecture", "service-design", "strategy"],
    hook: "“It’s not about social distancing, it’s about physical distancing.”",
    about:
      "When COVID hit, India needed quarantine centres fast, anywhere, and cheaply. We designed a hexagonal unit that can be put up on any land, combined into clusters, and adapted for patients, doctors, food and laundry, while keeping a sense of community inside isolation.",
    results: [
      "National finalist in the Kaarwan National Design Competition, May 2020",
      "Designed a single unit costing about ₹4,852 to build",
      "Created 7 module types from one hexagon, from isolation rooms to laundry",
      "Grouped 3 units into a block and 3 blocks into a cluster around a shared courtyard",
    ],
    skills: ["Modular design", "Rapid response design", "Cost estimation", "Site planning", "Systems thinking", "SketchUp"],
    story: {},
  },
  {
    slug: "swapfiets",
    partners: ["tu-delft"],
    number: 17,
    title: "Swapfiets Future Strategy",
    tileTitle: "Swapfiets",
    type: "Strategic design project",
    location: "TU Delft, Netherlands",
    year: "2024",
    filters: ["strategy", "service-design", "research"],
    hook: "How can a fast-growing company become profitable without building anything new?",
    about:
      "Swapfiets, the bike subscription company, is growing but still losing money. We built a strategy to 2035 that makes better use of the bikes, shops and staff it already has. I was responsible for the research, the strategic roadmap and the service roadmap for a new flexible plan, Swapflex.",
    results: [
      "Studied the company through 5 lenses: operations, trends, customers, competitors and finances",
      "Mapped about 35 mobility competitors and found 2 open spaces in the market",
      "Planned 9 strategic moves across 2 phases, from 2024 to 2035, built on lean principles",
      "Designed Swapflex, a 6-step service to use a bike in another city with existing bikes and shops",
    ],
    skills: ["Strategic design", "Roadmapping", "Customer journey mapping", "Competitor positioning", "User interviews", "Lean thinking"],
    story: {},
  },
  {
    slug: "samartha",
    partners: ["nasa-india"],
    number: 18,
    title: "Samartha: a way to prosperity",
    tileTitle: "Samartha",
    type: "Rental housing for migrant workers",
    location: "Indore, India",
    year: "2021",
    filters: ["architecture", "service-design", "research", "programming"],
    hook: "What would a home for migrant workers look like if it was designed around care?",
    about:
      "Migrant workers in Indian cities often live in crowded, unsafe rooms with no sense of community. Samartha is rental housing designed around care: homes that adapt for one, two or more people, shared spaces for working and living together, and an app to make finding and managing a home simple.",
    results: [
      "Placed in the national Top 5 of the NASA HUDCO competition 2021",
      "Designed 3 home sizes for single, double and shared occupancy, each with space to grow",
      "Built the design on 4 principles: community, ecology, change and wellness",
      "Paired the housing with a resident app for homes, services and community activities",
    ],
    skills: ["Site analysis", "User research", "Housing design", "Community space design", "App concept", "Visualisation"],
    story: {},
  },
  {
    slug: "siplab",
    partners: ["tu-delft"],
    number: 19,
    title: "Sip.Lab",
    type: "Tech-enabled venture & pitch",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["strategy", "service-design"],
    hook: "What if you could order a cocktail by how you feel?",
    about:
      "A cocktail bar where you don’t order a drink, you order a feeling. You type in how you feel, and Sip.Lab’s algorithm suggests a cocktail you’ve never heard of that fits your mood. We built the full business plan and pitched it to a “Dragons’ Den” panel. I led the tech side and turned the vision into a plan we could deliver.",
    results: [
      "Found a market gap: 35+ bars in Delft’s centre, none affordable and innovative",
      "Sized the market at €253 million in the Netherlands, starting with €2.35 million in Delft",
      "Tested the idea with about 50 people: 85% enthusiastic, 60% would pay more",
      "Built a financial plan with break-even in month 9, and pitched for €160,000 for 25%",
    ],
    skills: ["Venture design", "Business planning", "Market sizing", "Financial modelling", "Concept validation", "Pitching"],
    story: {},
  },
  {
    slug: "mobius",
    partners: ["spa-vijayawada"],
    number: 20,
    title: "Mobius Housing",
    tileTitle: "Mobius",
    type: "Mixed group housing",
    location: "Indore, India",
    year: "2021",
    filters: ["architecture", "research", "service-design", "strategy"],
    hook: "Can one building hold a whole neighbourhood, and every stage of life?",
    about:
      "Indore is growing fast, and the people moving in have very different lives: students, young workers, families and the elderly. Mobius is a stepped housing tower that mixes them all, with terraces, shared spaces and homes for every stage of life, in a dense city centre.",
    results: [
      "Ranked in the Top 3 of the class",
      "Designed for 5 stages of life, from kids to elders, in one connected building",
      "Surveyed 20 people in the neighbourhood to shape the brief",
      "Offered 7 unit types, from small affordable flats to large 4-bedroom homes",
    ],
    skills: ["Neighbourhood survey", "User group mapping", "Placemaking", "Housing design", "Structural systems", "Passive design"],
    story: {},
  },
  {
    slug: "ai-lab",
    partners: ["tu-delft"],
    number: 21,
    title: "AI Lab: training, generating and reading data",
    tileTitle: "AI Lab",
    type: "Hands-on machine learning",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["machine-learning", "programming", "research"],
    hook: "What do you learn when you stop using AI and start building it?",
    about:
      "Three hands-on experiments in Python to understand how AI actually works: reading 341 student comments to find what worried them during COVID, training a network to create new images, and predicting house prices.",
    results: [
      "Analysed 341 student responses with topic modelling and sentiment analysis, finding 5 key themes",
      "Compared models with 10, 30, 50 and 100 topics; 30 gave the clearest picture",
      "Trained an image-generating network (a GAN) for up to 150 rounds",
      "Built a neural network that predicted “premium” houses with 94.5% accuracy",
    ],
    skills: ["Python", "PyTorch", "Natural language processing", "Topic modelling", "GANs", "AI-assisted coding"],
    story: {},
  },
  {
    slug: "mygut",
    partners: ["tu-delft"],
    number: 22,
    title: "MyGut: a healthy recipe chatbot",
    tileTitle: "MyGut",
    type: "AI agent design",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["agent", "service-design"],
    hook: "What does it take to design an AI assistant that’s helpful but knows its limits?",
    about:
      "I designed and built MyGut, an AI chatbot that suggests healthy recipes based on your age, diet and what’s in your fridge. The focus was on designing the bot’s behaviour: who it is, what it does, how it talks, and where it should stop.",
    results: [
      "Designed a full bot brief in 6 parts, from identity to guardrails",
      "Covered 5 meal types, with 3–5 recipe options per request",
      "Set 3 guardrails: only necessary data, verified sources, never medical advice",
      "Built and tested a working prototype in Botpress with a connected knowledge base",
    ],
    skills: ["Conversation design", "AI agent design", "Prompt writing", "Guardrail design", "Botpress", "Prototyping"],
    story: {},
  },
  {
    slug: "repacking-perceptions",
    partners: ["tu-delft"],
    number: 23,
    title: "Repacking Perceptions",
    type: "Consumer experiment",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["research", "strategy"],
    hook: "Do greener packaging formats win over shoppers, or just their conscience?",
    about:
      "Shampoo bars and laundry strips cut plastic waste, but do shoppers actually want them? We ran an online experiment comparing single-use, refillable and concentrated packaging. People saw concentrates as the greenest option, but the least convenient.",
    results: [
      "Ran a controlled experiment with 91 participants across 6 packaging conditions",
      "Concentrates scored 4.0 out of 5 for eco-friendliness, against 2.4 for single-use",
      "But concentrates felt less convenient, and refills were the most likely to be bought",
      "Found no difference in perceived quality: the barrier is convenience, not quality",
    ],
    skills: ["Experimental design", "Quantitative research", "Survey design", "Statistical analysis", "Qualtrics", "SPSS"],
    story: {},
  },
  {
    slug: "chasing-light",
    partners: ["tu-delft"],
    number: 24,
    title: "Chasing Light: A Tale of Two Cameras",
    tileTitle: "Chasing Light",
    type: "Essay on responsible marketing",
    location: "TU Delft, Netherlands",
    year: "2025",
    filters: ["strategy", "research"],
    hook: "Is a camera built to be replaced, or built to be repaired?",
    about:
      "Two designer friends meet for coffee: one with the latest Canon, one with a Leica built to last a lifetime. Through their conversation, I compare two business philosophies, replace it in five years versus repair it in thirty, and propose how Canon could build longevity into its range.",
    results: [
      "Compared 2 brands through 2 business model canvases, backed by 22 sources",
      "Contrasted the company-focused 4Ps (Canon) with the customer-focused 4Cs (Leica)",
      "Linked the analysis to the EU’s 2024 Right to Repair directive",
      "Proposed “Canon Infinity”, a modular, repairable camera line",
    ],
    skills: ["Storytelling", "Essay writing", "Business model analysis", "Marketing strategy", "Circular design", "Brand positioning"],
    story: {},
  },
  {
    slug: "more-architecture",
    partners: ["spa-vijayawada"],
    number: 25,
    title: "More Architecture",
    type: "Three studio projects",
    location: "India",
    year: "2020–21",
    filters: ["architecture", "research", "strategy"],
    hook: "Three places, three lessons.",
    about:
      "Three of my favourite studio projects from architecture school: an awareness centre on the Ganges in Varanasi, a mixed-use tower in Kolkata, and a stone-and-wood house in the Himalayas. Each taught me something different about place, people and climate.",
    results: [
      "Ranked #1 for Dupki, an interpretation centre on the Ganges",
      "Ranked in the Top 3 for S5, a mixed-use tower in Kolkata",
      "Produced full construction drawings for the Himachal farm residence",
      "Covered 3 contexts: a holy city, a megacity and a mountain village",
    ],
    skills: ["Site analysis", "Climate-responsive design", "Mixed-use design", "Construction drawings", "Physical models", "Revit"],
    story: {},
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const coverOf = (p: Project) => p.cover ?? `/covers/${p.slug}.svg`;

export const STORY_SECTIONS = [
  { key: "problem", label: "Problem", budget: 60 },
  { key: "context", label: "Context", budget: 60 },
  { key: "approach", label: "Approach", budget: 80 },
  { key: "solution", label: "Solution", budget: 80 },
  { key: "results", label: "Results", budget: 60 },
] as const;
