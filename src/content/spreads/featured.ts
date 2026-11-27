import type { Spread } from "./types";

/** Spreads for the featured grid (W—01 to W—10). */
export const featuredSpreads: Record<string, Spread> = {
  "visual-bypass": {
    problem: {
      text: "AI tools read, and charge, in tokens: small chunks of text learned mostly from English. The same health question in Hindi or Arabic breaks into more tokens, so it costs more and fills the model’s memory faster. Researchers call it the token tax. Every existing fix sits deep inside the model. Nobody had tried the one layer people actually touch: the interface where a question is formed.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Same meaning, different token cost",
          note: "From report Fig. 2.3: one English word as 1 block, the same word in Hindi split into 4 blocks.",
          ratio: "wide",
        },
      ],
    },
    context: {
      text: "My MSc graduation project at TU Delft, February to August 2026, done solo: research, design, code and analysis. I chose health because health questions are long, personal and emotional, so they’re hit hardest by the tax, and because more people now ask AI about their health instead of searching the web.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Where I intervened",
          note: "From report Fig. 2.1: the chain from model makers → API → app & interface → users → wider effects, with the interface layer highlighted.",
          ratio: "wide",
        },
      ],
    },
    approach: {
      text: "First I measured the problem: 1,000 real health questions from the MeQSum dataset, translated into Hindi and Arabic and sent to three Google and OpenAI models. That’s 9,000 calls, all scripted in Python. A role-play brainstorm (a user, a business, the infrastructure) set the direction: let people show their question instead of typing it. I broke the 1,000 questions into parts to build the framework, then designed the interface in four rounds.",
      figures: [
        {
          kind: "graphic",
          id: "03",
          title: "Tokens per question, by language and model",
          note: "Report Fig. 4.1 (bar chart). Send me the average tokens per language per model and I’ll build it in the theme.",
          ratio: "landscape",
          chart: true,
        },
      ],
    },
    solution: {
      text: "MedQuery. You pick what you want (treatment, information, a symptom check, support), add a few keywords, then shape a radar chart: how severe, how worrying, how long, and what you care about. It becomes a short code of fixed English labels; only your keywords stay in your own language. Less text for the tax to bite into, whatever language you think in.",
      figures: [
        {
          kind: "graphic",
          id: "04",
          title: "MedQuery and the code it writes",
          note: "Hero visual. From report Fig. 3.2: the MedQuery screen (intent buttons, keyword chips, radar chart) next to the short code it produces.",
          ratio: "landscape",
        },
      ],
    },
    results: [
      {
        kind: "chart",
        title: "MedQuery saves tokens on Gemini, but costs 4× more on GPT-5.4",
        caption:
          "Change in tokens per question when the same question is asked through MedQuery instead of typed. Gemini reuses MedQuery’s stored instructions; GPT-5.4 reuses only part, so the rest is charged on every question. Values are approximate (report Fig. 4.2).",
        chart: {
          type: "bars",
          series: ["Change in tokens per question"],
          rows: [
            { label: "Gemini (both models)", values: [-70], display: ["≈ −70"] },
            { label: "GPT-5.4", values: [309], display: ["+309"] },
          ],
          min: -100,
          max: 340,
          signed: true,
          scaleNote: "Tokens per question vs. typing. Left of 0 = cheaper.",
        },
      },
    ],
  },

  livenworld: {
    problem: {
      text: "Newcomers to the Netherlands, refugees and expats alike, face a flood of rules, forms and agencies. The information exists, but it’s scattered and reactive: you have to know what to search for before you can find it. We called it the library model. For a refugee, the legal process becomes a black box of anxiety: what comes next, how long it takes, whether you’re doing it right.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "The library vs. the guide",
          note: "New visual: a messy pile of documents and search results (“the library”) next to one clear path with steps (“the guide”).",
          ratio: "wide",
        },
      ],
    },
    context: {
      text: "The culmination of my master internship at Amsterdam AI Factory, a venture builder, in weeks 10–15 (November–December 2025). I was project lead: system architecture, trust design, leading the development team and giving the final pitch. Six weeks from first brainstorm to MVP.",
    },
    approach: {
      text: "I mapped the invisible 5-step asylum process into one visual roadmap, so people always know where they stand. Wrong legal information can do real harm, so I designed trust in from the start with RAG: the AI looks up trusted documents before it answers. I translated user needs into requirements for the developers and kept the MVP small, choosing survival-language flashcards over a full course.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Three whiteboards: UI, MVP, pitch",
          note: "Report p. 6: the three whiteboard photos side by side, with short captions.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "LivenChat: a guide, not a library. An AI roadmap that leads each person from arrival to permanent residence, one step at a time, and answers questions along the way. Every answer cites official sources, like the IND (immigration service) and COA (reception agency), so people can check it. In the pitch I framed it as a Universal Companion.",
      figures: [
        {
          kind: "graphic",
          id: "03",
          title: "The Integration Roadmap",
          note: "Report p. 7: the roadmap screen with the current step highlighted (“Step 2 of 5”), plus the chat view.",
          ratio: "landscape",
        },
      ],
    },
    results: [
      {
        kind: "graphic",
        id: "04",
        title: "Pitching LivenChat",
        note: "Report p. 7: the photo of me presenting, with the app screens on the big screen behind.",
        ratio: "landscape",
      },
    ],
  },

  careconnect: {
    problem: {
      text: "Dutch GPs are buried in admin: 80% say it hurts the care they give. Health-tech start-ups have tools that could help, but most never get past the pilot. GPs don’t know which tools exist or which to trust, start-ups can’t reach GPs or get real feedback, and insurers mostly fund proven care. Another good tool wouldn’t fix that. The system around it had to change.",
    },
    context: {
      text: "A Tech-Enabled Innovation Studio project at TU Delft (spring 2025) for Erasmus MC and Juvoly, a start-up building a Dutch medical AI. Six of us. I focused on tech implementation and on designing how our team used AI, and I built the clickable prototype and the concept video.",
    },
    approach: {
      text: "We interviewed GPs, assistants, insurers and experts, then sorted symptoms from causes with the iceberg model. Meadows’ leverage points led us to the most direct lever: how information flows. Every decision went into a hypothesis backlog to be tested. I set up our AI workflow: a three-part prompt (goal, context, limits) and cross-checking answers across up to six tools, so nothing invented slipped through.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Where the pain sits in the system",
          note: "Report Fig. 2.1 / App. 6.3: the system map of clustered pain points.",
          ratio: "landscape",
        },
      ],
    },
    solution: {
      text: "CareConnect: GPs start from their problem, not a product. A problem-based marketplace, peer reviews from similar practices, a sandbox to try tools with fake patient data, and feedback dashboards for start-ups, rolled out over three horizons. I built the prototype in Lovable.dev in hours and tested it with a GP. Our rule: an intermediary, not a gatekeeper.",
      figures: [
        {
          kind: "chart",
          title: "CareConnect grows in three horizons over seven years",
          caption:
            "Horizon 1 launches with 10+ tools and 50 GPs on innovation grants; horizon 2 adds testing and a freemium model; horizon 3 shares usage data and AI-assisted matching.",
          chart: {
            type: "spans",
            unit: "months",
            max: 84,
            ticks: [0, 12, 24, 36, 48, 60, 72, 84],
            rows: [
              { label: "1 · Discover & connect", from: 0, to: 18, note: "Library of tools by GP problem, peer reviews" },
              { label: "2 · Test & feedback", from: 18, to: 36, note: "Sandbox with fake data, built-in feedback" },
              { label: "3 · Scale & insights", from: 36, to: 84, note: "Shared usage data, AI-assisted matching" },
            ],
          },
        },
        {
          kind: "graphic",
          id: "02",
          title: "The GP’s journey, today vs. with CareConnect",
          note: "Report Fig. 10: the service blueprint across all service layers.",
          ratio: "wide",
        },
      ],
    },
    results: [
      {
        kind: "graphic",
        id: "03",
        title: "The clickable prototype",
        note: "Report Figs. 6–7: choosing a challenge → the matching tools.",
        ratio: "landscape",
      },
    ],
  },

  ksia: {
    problem: {
      text: "Chips are hitting physical limits. A large chip factory can use as much water in a day as a city of 60,000 uses in a year. And politics is splitting supply chains. KSIA asked us: what developments in chip-making equipment should we be aware of, prepare for or respond to? Betting on one prediction would be the riskiest answer of all.",
    },
    context: {
      text: "Flight Case 2025, a TU Delft elective with the Korea Semiconductor Industry Association: research in Delft, then a case phase in Seoul in August 2025. Six of us, as the equipment group alongside three others. I was responsible for research and strategy, designed the prompt framework for our AI visuals, and presented the strategy to KSIA.",
    },
    approach: {
      text: "I researched six forces: supply chains built on trust (ASML relies on 5,150+ suppliers), chiplets, water, the race for talent, Dutch start-ups and chip politics. With the other groups we clustered signals into five drivers. As the equipment group we picked sustainability and geopolitics, made each an axis on a 2×2, and got four contrasting futures to test strategies against.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Four futures on two axes",
          note: "Report Fig. 1: the 2×2 scenario matrix, sustainability × geopolitics, with the four scenarios in the quarters.",
          ratio: "square",
        },
      ],
    },
    solution: {
      text: "Two combined futures. Resource-responsible chips: modular chips taken apart and reused, with old machines kept running. Semiconductor Crossroads: countries pushing for self-reliance while forming alliances. To make them imaginable, I wrote image prompts in three parts: context, limitations (what not to show) and goal. In Seoul we brainstormed responses with KSIA, and I presented the strategy.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Future 1: resource-responsible chips",
          note: "Report Fig. 2: the AI visual of equipment assembling and taking apart modular chips.",
          ratio: "landscape",
        },
        {
          kind: "graphic",
          id: "03",
          title: "Behind the prompt",
          note: "Appendix A: the three-part prompt next to the image it produced.",
          ratio: "wide",
        },
      ],
    },
    results: [
      {
        kind: "graphic",
        id: "04",
        title: "Presenting in Seoul",
        note: "Your photo from the KSIA office: presenting, or the team.",
        ratio: "landscape",
      },
    ],
  },

  "toto-stream": {
    problem: {
      text: "TOTO’s smart toilets already carry sensors for warmth, water use and odour, and TOTO is researching health signals like hydration. But a sensor isn’t value. TOTO asked: what new value comes from combining toilet data with other data in the home? And how do you do that with data this personal?",
    },
    context: {
      text: "Flight Case 2025 with TOTO, Japan: research in Delft, then a case phase at TOTO’s Tokyo office in August 2025. Five of us, from three design programmes. I designed the tech service blueprint and worked on the research and the strategy brainstorming.",
    },
    approach: {
      text: "Instead of one idea, we built STREAM, a six-step method TOTO can reuse. Scan what TOTO can already do. Target who benefits: we chose adults, for buying power and decades to grow with. Research daily life: in Japan, health literacy is low and trust comes from consistency. Empathise through four personas. Activate needs into features. Map it all in a service blueprint.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "The STREAM toolbox",
          note: "Report p. 9: the six coloured circles S-T-R-E-A-M with one line each.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "Two concepts. TOTO for You: morning gut checks and hydration nudges that turn a routine into quiet self-care. TOTO for Life: support through life’s stages, from new mothers to elders living independently. My blueprint maps five phases: what the user does, what the system does, and where data flows. Consent is layered: people choose, data point by data point, what to share.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "The tech service blueprint",
          note: "Report pp. 20–21: five phases with customer actions, system actions and data flows (new-mother example).",
          ratio: "wide",
        },
      ],
    },
    results: [
      {
        kind: "graphic",
        id: "03",
        title: "On site at TOTO, Tokyo",
        note: "Your photo from the case phase at TOTO’s office.",
        ratio: "landscape",
      },
    ],
  },

  sampoorna: {
    problem: {
      text: "About 79% of jobs in urban India are informal: builders, vendors, domestic workers. Many of them live in slums, and housing schemes fail them twice: they’re moved far from work, or new buildings slowly push them out. Yet from the inside, a settlement is a living ecosystem, where neighbours help each other and homes double as workshops.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Ground realities",
          note: "2023 portfolio p. 17: the hand-drawn slum street, the user-group wheel and the ground-realities sketch.",
          ratio: "wide",
        },
      ],
    },
    context: {
      text: "My Bachelor of Architecture thesis at SPA Vijayawada, January to May 2023, done solo. The site: Balda Colony in Indore, 33,000 m² of public land proposed for redevelopment, where the poorest households live in about 23 m².",
    },
    approach: {
      text: "I mapped who lives there by age, household and work, and how much of each day they spend at home, which told me what space each group really needs. I visited B.V. Doshi’s Aranya housing in Indore. Its planning works, but homes now sell for ten times their original price, partly because nobody planned space for working from home.",
    },
    solution: {
      text: "A flexible cluster in four types, mixing homes, shops and high-rise cores. Each home grows from one room to a two-bedroom over two floors, built out when a family can afford it. Homes have room for work, shared courtyards keep the street life, and a commercial edge lets residents sell. GFRG wall panels build a house in 60 days, at up to 30% lower cost.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Homes that grow",
          note: "2023 portfolio p. 23: the unit development steps and the grid of cluster combinations.",
          ratio: "wide",
        },
        {
          kind: "graphic",
          id: "03",
          title: "A neighbourhood that is never finished",
          note: "Hero visual. 2023 portfolio p. 26: the development-over-time renders above the large isometric.",
          ratio: "landscape",
        },
      ],
    },
  },

  unlearn: {
    problem: {
      text: "Minerva High School uses an AI that reads students’ backgrounds, home life and grades to flag who is “at risk”, then tells teachers how to step in. On paper, graduation rates rise. But who pays for being sorted by an algorithm? And what happens when a tool like this goes national?",
    },
    context: {
      text: "A project in TU Delft’s Designing Responsible AI course (2025), about building responsibility in from the first idea, not as an afterthought. I built the fictional news website and worked with the team on the stakeholder map and the design fiction story.",
    },
    approach: {
      text: "We mapped 16 stakeholders in three rings, from students and teachers to the data centre and even the contacts in students’ phones, listing what each values, gains and could lose. Four value conflicts stood out, and four harms hit almost everyone, from data taken without consent to a chilling effect on free expression. Then we jumped ahead in time.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Who an “at-risk” algorithm touches",
          note: "The A1 stakeholder map: three rings of stakeholder cards with green/red impact lines.",
          ratio: "square",
        },
      ],
    },
    solution: {
      text: "A believable 2035. A law puts MAIeducation in every school; employers start asking for MAI scores; an activist movement, Unlearn, demands the right to fail. I built a news site from that future: headlines, ads for brain boosters, and an article whose twist shows surveillance spreading through school Wi-Fi. We also staged and filmed the graffiti action.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "A news site from 2035",
          note: "Homepage.pdf, top half. Label it “Speculative design, set in 2035” and use an invented masthead, not the real AD name and logo.",
          ratio: "landscape",
        },
        {
          kind: "graphic",
          id: "03",
          title: "Unlearn: we demand the right to fail",
          note: "A still from the staged graffiti video (and the video link, if you want it embedded).",
          ratio: "landscape",
        },
      ],
    },
  },

  ava: {
    problem: {
      text: "A hairdresser with scissors in hand can’t answer the phone, and every missed call is a missed booking. AVA is an AI receptionist that answers calls and schedules appointments by itself. The design challenge: the whole experience happens by voice. There’s no screen to make it feel trustworthy.",
    },
    context: {
      text: "Weeks 5–9 of my internship at Amsterdam AI Factory (October–November 2025). I did the user research, helped deploy the website and marketing funnel, and designed the survey to test pricing.",
    },
    approach: {
      text: "I interviewed salon owners, like Sabine. The biggest insight: they didn’t care about AI at all. They cared about peace of mind, knowing no customer slips through the cracks. That changed how we talked about AVA. Then we tested the market early, in public, instead of polishing in private.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "From my notebook",
          note: "Report p. 5: early flow sketches and interview notes in red pen.",
          ratio: "landscape",
        },
      ],
    },
    solution: {
      text: "AVA went live: a website where salon owners can hear the AI voice for themselves, a LinkedIn marketing funnel, and a feedback survey comparing two price points, €75 and €325 a month. Trust comes from a reliable conversation, not from pixels. Nobody buys “AI”. They buy a calmer day.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Hear it before you buy it",
          note: "Report p. 5: the published website, “Hoe het werkt”, with the audio player and three steps.",
          ratio: "landscape",
        },
      ],
    },
  },

  onevibe: {
    problem: {
      text: "Most companies don’t really know how their people feel. Yearly surveys arrive too late, and gut feeling is too risky to act on. They’re flying blind on morale, and people only answer honestly when they trust where their answers go.",
    },
    context: {
      text: "My first sprint at Amsterdam AI Factory: weeks 1–4 of my internship (September–October 2025). I mapped the service blueprint, prototyped the Mood Dashboard and co-created the investor pitch.",
    },
    approach: {
      text: "I mapped how data travels from an employee’s phone to the HR dashboard, with privacy at every step, because the whole loop depends on honest input. Then I prototyped fast, testing what a manager actually needs to see. The answer wasn’t more charts. It was a clear next step.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "From check-in to HR insight",
          note: "Your service blueprint: employee check-in → HR dashboard, with the privacy steps marked.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "OneVibe runs an AI loop: ask, analyse, act. Employees check in, the AI reads the mood, and the Mood Dashboard turns feelings into steps a manager can take. For investors, I helped reframe it from a survey tool into a Culture Co-Pilot. Data is useless without a story: AI has to be actionable, not just informational.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "The Mood Dashboard",
          note: "Prototype screens of the dashboard.",
          ratio: "landscape",
        },
      ],
    },
  },

  umang: {
    problem: {
      text: "Howrah sits across the river from Kolkata: 4.8 million people on 63 km², with floods, polluted water, poor sanitation, traffic and waste. As it develops, gentrification threatens to push out the people who live there. Our starting point: gentrification is the disease, revitalisation is the vaccine.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Reading Howrah",
          note: "ZNDC sheet 2: the yellow infographics, the land use, employment, slum and density maps, and the problems strip.",
          ratio: "wide",
        },
      ],
    },
    context: {
      text: "NASA India’s Zonal Design Competition (ZNDC), October 2019. Four of us. I coordinated the team and worked on documentation, concept, design and the presentation. We won nationally.",
    },
    approach: {
      text: "We read Howrah through maps and on the street: the ghats where people bathe, the festivals, the markets and the industry along the river. The river turned out to be the heart of social life, and its biggest problem. So we worked at three scales at once.",
    },
    solution: {
      text: "At city scale, the riverfront becomes a continuous public space, with stepped green banks and a walkable main road. At street scale, plug-in modules slot into dense lanes: rainwater harvesting, shade, a red box with first-aid and safety kits, a tidy fruit stall. At home scale, a living unit built partly from recycled waste.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Three scales: river, street, home",
          note: "2023 portfolio p. 4: the riverfront sketch, the four neighbourhood modules and the exploded living module.",
          ratio: "wide",
        },
      ],
    },
    results: [
      {
        kind: "graphic",
        id: "03",
        title: "Howrah, revitalised",
        note: "ZNDC sheet 7: the revitalised Howrah sketch, with the strip of other cities below.",
        ratio: "landscape",
      },
    ],
  },
};
