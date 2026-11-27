import type { Spread } from "./types";

/** Spreads for the "Explore more" deck (W—11 to W—25). */
export const deckSpreads: Record<string, Spread> = {
  "multimodal-genai": {
    problem: {
      text: "Most medical AI looks at one kind of data at a time: an X-ray, or the notes. But a patient is all of it together. Multimodal generative AI could combine scans, DNA, records and smartwatch data into a digital twin, a virtual patient to test “what if” treatments on safely. The potential is huge, and so are the risks.",
    },
    context: {
      text: "Technology and Strategic Design, an MSc course at TU Delft (2025). Five of us. I was responsible for the research into challenges, misuse and ethics, the technology readiness assessment, the future trajectories and the concluding visual. We told the story through Joan, 38, a teacher in Rotterdam in 2035, diagnosed with lung cancer.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Joan and Digital Joan",
          note: "Slide 7: Joan with her data icons, an arrow, and her illustrated digital twin.",
          ratio: "wide",
        },
      ],
    },
    approach: {
      text: "I researched what could go wrong through stakeholder analysis, scenario planning and ethical impact assessment, and compared Gen AI with earlier shifts like the internet. Technology readiness levels showed medical AI still has to cross the “valley of death” of trials, regulation and technical hurdles. Then I mapped a path from synthetic data in 2025 to full-body twins after 2040.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "From synthetic data to a full-body twin",
          note: "Slide 16: the dotted 2025 → 2040+ line with brain, heart, gut and full-body icons per stage.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "Three barriers stood out: a data explosion (one scan can be 56 million tokens), bias, and trust. Using medicine’s four ethical principles, we paired each risk with a fix, from diverse training data to dynamic consent and explainable AI that doctors and patients both understand. My closing drawing: Joan crossing the islands of data, bias and trust to reach her twin.",
      figures: [
        {
          kind: "graphic",
          id: "03",
          title: "Crossing data, bias and trust",
          note: "Hero visual. Slide 34: the concluding illustration, with a short caption naming each island.",
          ratio: "landscape",
        },
      ],
    },
  },

  juvoly: {
    problem: {
      text: "Juvoly QuickConsult listens to doctor–patient conversations and drafts the medical notes, so doctors can focus on the patient. A real benefit, in a high-stakes place. If the AI gets something wrong, or doctors stop checking its work, patients pay. Who else does a tool like this touch, and which values are at risk?",
    },
    context: {
      text: "A solo exercise in TU Delft’s AI Products and Services course (2025): the analysis, the sketch and the design proposal, with Juvoly as the case.",
    },
    approach: {
      text: "I used value sensitive design: designing around the human values a technology touches, not just what it does. I mapped five stakeholders, from doctor and patient to family, hospital admin and insurer, listed the good and bad impacts, and linked each to the EU’s values for trustworthy AI: efficiency, autonomy, reliability and privacy. The key tension: efficiency against autonomy.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "The consultation room, mapped",
          note: "Report Fig. 35 (high-res via QR code): the clinic scene with all five stakeholders, impacts and value labels.",
          ratio: "landscape",
        },
      ],
    },
    solution: {
      text: "One focused change: an Override & Annotate button that lets doctors correct the AI’s notes in real time. The doctor keeps the final say, every correction leaves an audit trail, corrections show where the model goes wrong, and it meets the EU AI Act’s demand for human oversight. One button decides between a doctor in control and a doctor on autopilot.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Override & Annotate",
          note: "New mock-up: the button on a draft medical note, with an edited line and an “edited by Dr.” tag.",
          ratio: "landscape",
        },
      ],
    },
  },

  yees: {
    problem: {
      text: "Nature-based solutions use nature to protect people: mangroves against floods, restored soil against drought. The Red Cross already works on them, but few people know, and young people are rarely involved. The brief: help local Red Cross teams get young people acting with nature to protect their own communities.",
    },
    context: {
      text: "Strategic Design Studio at TU Delft (2024–25) for the Netherlands Red Cross, with Kenya as the focus country. Five of us. I was responsible for the research and the roadmap, and took part in brainstorming the service. We designed for Mary, 16, in Machakos County, whose family’s harvests were ruined by drought.",
    },
    approach: {
      text: "I researched the Red Cross, nature-based solutions and what makes young people engage: about 10 papers, 20+ articles, and interviews with Red Cross staff and its youth adviser. Benchmarking UNICEF and WWF showed the answer was collaboration, not competition. Three needs led: education, connection, empowerment. We narrowed to teenagers aged 15–19 and merged three concepts into one system.",
    },
    solution: {
      text: "YEES!: a card game that matches problems like drought with nature-based solutions; a QR code on every card that opens an online platform with real projects; and pop-up hubs with Wi-Fi and volunteers. My roadmap runs to 2030 in three tracks, starting with a pilot in Kenya, with setup costs between €35,500 and €86,000.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "The YEES! system",
          note: "Hero visual. Slide 33: the game in a hub, surrounded by the parts (cards, QR codes, platform, hub, volunteers).",
          ratio: "landscape",
        },
        {
          kind: "graphic",
          id: "02",
          title: "The roadmap to 2030",
          note: "Report p. 6 / slide 35: the timeline with three tracks (game, online, hubs). Dense; a simplified redraw works best.",
          ratio: "wide",
        },
      ],
    },
    results: [
      {
        kind: "graphic",
        id: "03",
        title: "Testing with students",
        note: "Slide 39: students playing the cards and scanning a QR code.",
        ratio: "landscape",
      },
    ],
  },

  "urban-mosaic": {
    problem: {
      text: "Haridwar is one of India’s holiest cities. During the 2021 Kumbh Mela, over 700,000 devotees bathed in the Ganges there. The city isn’t built for it: traffic jams, missing signs, nowhere to walk, abandoned buildings, waste in the river and unsafe junctions, especially for women.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Haridwar’s problems, along the river",
          note: "2023 portfolio p. 11: the map with circular photo call-outs.",
          ratio: "wide",
        },
      ],
    },
    context: {
      text: "A large-scale urban design project at SPA Vijayawada (August–December 2022). Four of us. I coordinated the team and worked on the documentation, concept and presentation. It ranked in the top three.",
    },
    approach: {
      text: "We listened first. A vendor, a tourist, a resident and a municipal worker each saw different problems, from bribes and no space to sell to chaos around the stations. Then we split the area into six zones, mapped buildings, land use, texture and heights, and traced every problem back to its root.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Six zones, five maps each",
          note: "2023 portfolio p. 12: the documentation grid and the three pie charts.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "A master plan in seven layers that work together: street landscape, pocket parks, a cycle track, a road network with no dead ends and a watershed layer that lets rain soak in, while keeping over 95% of existing buildings. And three redesigned junctions, from the city’s entrance to a neighbourhood park, where small changes move the whole city.",
      figures: [
        {
          kind: "graphic",
          id: "03",
          title: "Three nodes: then, now, proposed",
          note: "Hero visual. 2023 portfolio p. 15: the visualised, present and proposed scenario for each node.",
          ratio: "wide",
        },
      ],
    },
  },

  postnl: {
    problem: {
      text: "PostNL delivers most Dutch post and parcels with 33,500 staff, but its market is shrinking and DHL and Amazon are taking share. By law it must serve everyone at capped prices. Worse, its own structure blocks change: teams in silos, long chains of approval, and an employee engagement score of 68.",
    },
    context: {
      text: "Deep Dive into Organisations, an MSc course at TU Delft (January 2025). Five of us. I was responsible for the research, for finding where to intervene, and for the digital transformation strategy with its service blueprint.",
    },
    approach: {
      text: "Desk research, a SWOT and interviews with PostNL staff showed duplicate projects, a “counter culture” of stamps and approvals, and employees who feel left out. I traced where things break: shop-floor ideas never reach management, teams don’t see each other’s work, there’s no feedback channel and no growth path. All on the employee side. So change had to start with people.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Four broken touchpoints",
          note: "New visual: an employee at the centre, the four broken touchpoints (ideas, cross-team awareness, feedback, growth) in red, each linked to the platform feature that fixes it.",
          ratio: "square",
        },
      ],
    },
    solution: {
      text: "Kotter’s 8-step change model, redesigned with a design-thinking loop: a pilot team tests, gives feedback and improves before anything scales. The first stage is an HR platform with AI learning paths, an ideas board, cross-team matching and a mood dashboard. My blueprint maps each step to what people see and the technology behind it. The target: engagement from 68 to 80.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Kotter’s eight, with a loop",
          note: "Report Fig. 10: the 8-step staircase with the loop around steps 4–6.",
          ratio: "landscape",
        },
        {
          kind: "graphic",
          id: "03",
          title: "The service blueprint",
          note: "Appendix A-9, redrawn as a clean blueprint: 8 steps across, lanes for employees, management and technology.",
          ratio: "wide",
        },
      ],
    },
  },

  "bubble-to-bubbles": {
    problem: {
      text: "In 2020, COVID created an urgent need for places to isolate and care for the infected. Hospitals were full and big halls weren’t safe. India meets the same need again and again: at the Kumbh Mela, after disasters, for refugees. It needed shelter that goes up fast, anywhere and cheaply, without making isolation lonely.",
    },
    context: {
      text: "Our entry to the Kaarwan National Design Competition (KNDC) in May 2020, in a team of four. I worked on coordination, concept, design and the presentation. We were national finalists.",
    },
    approach: {
      text: "We started from what quarantine needs: ventilation, light, isolation and quick set-up on any ground. And from a belief: decentralisation with a sense of centralised community. Many small bubbles instead of one big hall, so everyone is apart but never alone.",
    },
    solution: {
      text: "A hexagonal unit: a cheap kit of wooden frame, PVC sheets and pipes and a fabric roof, for about ₹4,852. Three units open onto a shared courtyard, and three blocks form a cluster. The same hexagon becomes seven modules, from isolation rooms to laundry and dining. Clusters share water and energy in a chain, so the centre can grow as far as needed.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "The unit, as a kit of parts",
          note: "2023 portfolio p. 5: the exploded isometric with labels.",
          ratio: "landscape",
        },
        {
          kind: "graphic",
          id: "02",
          title: "One shape, seven uses",
          note: "2023 portfolio p. 5: the seven module typologies.",
          ratio: "wide",
        },
      ],
    },
  },

  swapfiets: {
    problem: {
      text: "Swapfiets rents bikes by subscription: pay monthly, always ride a working bike. It’s well known and growing, but still losing money, and its owner Pon wants a return. The company bet heavily on sustainability. Is that really what keeps customers paying? And what should Swapfiets do next, with little money to spend?",
    },
    context: {
      text: "My first strategic design project: Strategic Design Studio at TU Delft (autumn 2024). I was responsible for the research, the strategic roadmap and the service roadmap.",
    },
    approach: {
      text: "I looked at Swapfiets from five angles. Operations: bikes sit idle in stores. Trends: hybrid work means travel on demand. Customers: sustainability is “nice but not a big deal”; they stay for ease and want flexibility. Competitors: I plotted about 35 mobility brands and found two near-empty spaces. Finances: no money for new products, so get more from what exists.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Two empty corners in a crowded market",
          note: "Slide 19: the competitor map (own ↔ on demand, bike only ↔ multimodal) with all logos and the two opportunity spaces.",
          ratio: "square",
        },
      ],
    },
    solution: {
      text: "A roadmap to 2035 in two phases, built on lean thinking. First, fix the setup and use existing bikes and shops better. Then grow with customers through every stage of life: Swapfiets grows with you. I mapped one service in detail. Swapflex is a six-step journey that lets subscribers ride a Swapfiets bike in another city for the day.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "The road to 2035",
          note: "Hero visual. Slide 38: both phases on the isometric path, 2024 → 2026 → 2035.",
          ratio: "wide",
        },
        {
          kind: "graphic",
          id: "03",
          title: "Swapflex, step by step",
          note: "Slide 60: the customer journey map with internal actions, touchpoints and the illustrated journey.",
          ratio: "wide",
        },
      ],
    },
  },

  samartha: {
    problem: {
      text: "Millions move to Indian cities for work: construction, factories, driving, vending. Most rent tiny, unsafe rooms in crowded settlements, with dark lanes, stagnant water and no space to rest or meet. After COVID, their situation became even more fragile.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Ground reality",
          note: "2021 portfolio: the hand-drawn settlement with labels for density, poor lighting, stagnant water and unstable structures.",
          ratio: "wide",
        },
      ],
    },
    context: {
      text: "NASA India’s HUDCO Trophy competition, February 2021, in a team of six. We placed in the national top five. The site is in Indore, a city of over 3 million and growing.",
    },
    approach: {
      text: "We studied the city and the site, with its school, existing communities and road noise, and what life in informal rentals is really like. Then we set four principles: design for community, for ecology, for change and for wellness.",
    },
    solution: {
      text: "Rental housing, not ownership, so workers can move in and out as work comes and goes. Three home sizes, for one, two or more people, each with space to grow. At its heart is a care-for-community cycle: co-working, shared dining, terrace gardens, temporary markets and drop-off points for daily-wage work. A resident app helps people find a home, book services and join in.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Homes that adapt",
          note: "2021 portfolio: the three unit plans with their extra space, plus interior views.",
          ratio: "wide",
        },
        {
          kind: "graphic",
          id: "03",
          title: "Care for community",
          note: "2021 portfolio: the site plan with the two app screens and landscape renders.",
          ratio: "landscape",
        },
      ],
    },
  },

  siplab: {
    problem: {
      text: "Delft’s centre has more than 35 bars within a kilometre, and they’re mostly the same: traditional, nothing personal. The innovative ones are expensive. Meanwhile, 68% of Gen Z would rather spend on experiences than on products, and 43% find places on TikTok, not Google. Nobody offered a playful, tech-driven night out at an accessible price.",
    },
    context: {
      text: "Tech-Enabled Entrepreneurship at TU Delft (2025), ending in a Dragons’ Den pitch. Five of us. I led the tech and viability side: researching the technology behind emotion-based ordering, and making sure our vision became a plan we could deliver.",
    },
    approach: {
      text: "We mapped Delft’s bars on cheap–expensive and traditional–innovative, and found the empty corner. We sized the market from the whole country down to Delft, and tested the idea with about 50 people: 85% were enthusiastic, and 60% would pay more than for a normal cocktail. Then we built the numbers.",
      figures: [
        {
          kind: "chart",
          title: "A €253 million market, starting with €2.35 million in Delft",
          caption:
            "Market for young adults aged 20–40, assuming 10% conversion, €30 per visit and 1.5 visits a month. Circle areas are to scale.",
          chart: {
            type: "nested",
            rows: [
              { label: "Total: young adults across the Netherlands", value: 253, display: "€253M" },
              { label: "Reachable: the 10 biggest student cities", value: 62, display: "€62M" },
              { label: "Realistic: Delft, Utrecht and Eindhoven", value: 16.7, display: "€16.7M" },
              { label: "Launch city: Delft", value: 2.35, display: "€2.35M" },
            ],
          },
        },
      ],
    },
    solution: {
      text: "Sip.Lab: you don’t order a drink, you order a feeling. Type how you feel, and the algorithm suggests a cocktail you’ve never heard of. Our first idea, drinking away emotions, felt hollow; the breakthrough was celebrating them instead. The plan breaks even in month 9, and we pitched for €160,000 in exchange for a 25% share.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Drink how you feel",
          note: "The “How does it work?” slide: the purple Sip.Lab app screens, mood input → suggested cocktail.",
          ratio: "landscape",
        },
      ],
    },
  },

  mobius: {
    problem: {
      text: "Indore has over 3 million people and is growing fast, with incomes from about ₹23,000 to ₹79,000 a month. New housing tends to split people by income and age into separate blocks, and loses the mixed, lively street life Indian cities are known for.",
    },
    context: {
      text: "A mid-scale housing project at SPA Vijayawada (2021), designed in a pair with Smit Bangare. It ranked in the top three of the class.",
    },
    approach: {
      text: "We surveyed 20 people in the neighbourhood, mapped transit and income data, and studied what makes Indian streets feel like home: shared corridors, terraces, balconies and streets that double as meeting places. The survey reshaped the brief: shared life mattered more than square metres.",
      figures: [
        {
          kind: "chart",
          title: "Neighbours wanted shared life more than space",
          caption: "Neighbourhood survey, 20 respondents. Share who agreed with each statement.",
          chart: {
            type: "bars",
            series: ["Agreed"],
            rows: [
              { label: "Would pay for better shared amenities over a bigger home", values: [70], display: ["70%"] },
              { label: "Want simple, eco-friendly comfort over luxury", values: [65], display: ["65%"] },
              { label: "Feel the old social lifestyle should be rediscovered", values: [50], display: ["50%"] },
            ],
            max: 100,
            scaleNote: "% of 20 respondents",
          },
        },
      ],
    },
    solution: {
      text: "A stepped tower built on the idea of a Möbius strip: one continuous surface with no edge. To complement, not differentiate. Five stages of life, from kids to elders, living, working and playing side by side. Every level gets a terrace, seven unit types run from small affordable flats to four-bedroom homes, and a super-frame structure keeps the floors open.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Modules into a tower",
          note: "Mobius file: the module formation and cluster diagrams, colourful blocks stacking into the tower.",
          ratio: "landscape",
        },
      ],
    },
  },

  "ai-lab": {
    problem: {
      text: "As a designer working with AI, I wanted to understand it from the inside: how models learn, why they get things wrong, and how small choices change the result. Using AI tools doesn’t teach you that. Building them does.",
    },
    context: {
      text: "Three solo exercises in TU Delft’s AI Products and Services course (2025), coded in Python in Google Colab, with Gemini and Claude helping me understand and debug the code.",
    },
    approach: {
      text: "Three experiments for the three things AI does most. Reading: 341 student comments about wellbeing during COVID, cleaned, scored for mood and grouped by topic modelling. Creating: a GAN, two networks competing, one drawing images and one spotting fakes. Predicting: house prices, from simple regression to a neural network, with a loop testing every pair of features.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "What 341 students wrote",
          note: "Report Figs. 42 and 44: the two word clouds, with and without cutting words to their roots.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "Five themes in the student comments, from isolation to exam stress, with 30 topics as the sweet spot. A GAN that went from noise to creature-like shapes in 150 rounds, but never became realistic. A neural network that spotted premium houses with 94.5% accuracy. The lesson: one filler word or one feature changes what a model sees, and tidy data can silence the people who need help most.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "From noise to creatures",
          note: "New strip from Figs. 21, 22, 24 and 33: epoch 0 → 19 → 99 → 150.",
          ratio: "wide",
        },
        {
          kind: "graphic",
          id: "03",
          title: "Accuracy across training rounds",
          note: "Report Fig. 11. Send me the accuracy per round (or the simple model vs. the neural network) and I’ll build it in the theme.",
          ratio: "landscape",
          chart: true,
        },
      ],
    },
  },

  mygut: {
    problem: {
      text: "Eating well is hard when you’re busy, have a few random ingredients or follow a specific diet. A chatbot can help, but an AI that talks about food easily drifts into health advice it shouldn’t give. I wanted an assistant that’s genuinely useful, and clear about where its job ends.",
    },
    context: {
      text: "A solo exercise in TU Delft’s AI Products and Services course (2025): the design, the bot’s instructions, the build and the tests, in Botpress.",
    },
    approach: {
      text: "Instead of only writing a prompt, I treated the bot as a product with a brief in six parts: identity, scope, responsibilities, response style, abilities and guardrails. I wrote example lines for every moment, from greeting to goodbye, so the tone stays consistent. Then I built it with a connected knowledge base and ran test conversations.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "The bot brief, in six cards",
          note: "Redraw from the report: identity, scope, responsibilities, style, abilities, guardrails, one line each.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "MyGut asks your age and diet, the meal you need and how many ingredients you have, then suggests three to five recipes with a short nutrition note, and lets you save favourites. Three guardrails: collect only what’s needed, use verified sources, and send health questions to a nutritionist. The tests showed where it broke, which is exactly why you test early.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "Talking to MyGut",
          note: "Report Figs. 16–18: three chat screenshots side by side.",
          ratio: "wide",
        },
      ],
    },
  },

  "repacking-perceptions": {
    problem: {
      text: "Single-use plastic is one of the biggest sources of everyday waste. Refills and concentrated products, like shampoo bars and laundry strips, cut it. Refills have been studied a lot; concentrates haven’t, even though changing a product’s form might change how people see it. Do greener formats win over shoppers, or just their conscience?",
    },
    context: {
      text: "Quantitative Research Methods for Strategic Design at TU Delft (June 2025), in a team of three.",
    },
    approach: {
      text: "Each participant saw just one format, so they couldn’t compare and guess the “right” answer. We generated six product images with AI in one controlled style: same beige, same light, no brands. 91 people rated a shampoo and a detergent on quality, convenience, eco-friendliness and intention to buy, over 17 days. We built the survey in Qualtrics and analysed it in SPSS.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Six products, one variable",
          note: "Report Figs. 1–3: the six stimuli in a 3×2 grid, labelled by format and product.",
          ratio: "landscape",
        },
      ],
    },
    solution: {
      text: "People know concentrates are the greenest, but that doesn’t make them want them. Concentrates feel unfamiliar and less convenient, refills are the most likely to be bought, and quality didn’t differ at all. So: lead with the environmental story, design for each routine (shampoo bars need to be easier; laundry strips should show off compact dosing), and build trust in performance.",
      figures: [
        {
          kind: "chart",
          title: "Concentrates win on eco-friendliness, but lose on convenience",
          caption: "Mean scores of 91 participants, each of whom saw one format. Quality didn’t differ between formats.",
          chart: {
            type: "bars",
            series: ["Single-use", "Refillable", "Concentrated"],
            rows: [
              { label: "Eco-friendliness", values: [2.4, 3.6, 4.0] },
              { label: "Convenience", values: [3.9, 3.8, 3.2] },
              { label: "Purchase intention", values: [3.3, 3.8, 3.1] },
              { label: "Quality", values: [3.1, 3.2, 3.0] },
            ],
            max: 5,
            decimals: 1,
            scaleNote: "Score out of 5",
          },
        },
      ],
    },
  },

  "chasing-light": {
    problem: {
      text: "Most electronics are designed to be replaced. A new model arrives every few years, and the old one suddenly feels outdated, even though it still works. Can marketing push the other way, towards products people keep, repair and value for decades?",
    },
    context: {
      text: "A solo essay for TU Delft’s Responsible Marketing course (2025), written as a story: Alex with a brand-new Canon and Ben with a Leica, talking over coffee. “Your camera is designed to be replaced in three to five years. Mine is designed to be repaired in thirty.”",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Two friends, two cameras",
          note: "The café scene from the introduction (your Gemini image).",
          ratio: "landscape",
        },
      ],
    },
    approach: {
      text: "I compared the two brands through business model canvases and their marketing, backed by 22 sources. Canon follows the company-first 4Ps, with fast release cycles that make older models feel old. Leica fits the customer-first 4Cs: durability, lifetime repair and a loyal community. I linked both to the EU’s 2024 Right to Repair directive.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "How often Canon replaces itself",
          note: "Essay Fig. 1: the EOS 5D series on a timeline. Send me the models and release years and I’ll build it in the theme.",
          ratio: "wide",
          chart: true,
        },
        {
          kind: "graphic",
          id: "03",
          title: "Linear vs. circular",
          note: "Essay Fig. 3: Canon’s and Leica’s business logic side by side.",
          ratio: "wide",
        },
      ],
    },
    solution: {
      text: "Canon can’t become Leica, and shouldn’t try. So I proposed Canon Infinity, “The Professional’s Lifetime Tool”: a modular camera you upgrade part by part, a higher price but a lower lifetime cost, repair centres with a take-back programme, and honest stories about durability. A quieter marketing of endurance, and a way for Canon to secure its own legacy.",
      figures: [
        {
          kind: "graphic",
          id: "04",
          title: "Canon Infinity, in a loop",
          note: "Hero visual. Essay Fig. 4: use, repair, upgrade and take-back around the camera.",
          ratio: "square",
        },
      ],
    },
  },

  "more-architecture": {
    problem: {
      text: "Three studio briefs, three very different places: a holy city whose river is polluted by the people who worship it, a megacity where a tower has to answer to traffic, wind and sun, and a mountain village with a building tradition worth keeping. Each place asked its own question.",
    },
    context: {
      text: "Solo studio projects at SPA Vijayawada (2020–21). Dupki ranked first in its semester, and S5 ranked in the top three.",
    },
    approach: {
      text: "Every project started with the place. In Varanasi: the 88 ghats and the way people move through the lanes. In Kolkata: the busy street, the breezes and the sun. In Himachal: kath-khuni, the layered stone-and-wood craft of the valley.",
      figures: [
        {
          kind: "graphic",
          id: "01",
          title: "Dupki at dawn",
          note: "2021 portfolio: the boatman on the Ganges with the red interpretation centre on the bank.",
          ratio: "landscape",
        },
      ],
    },
    solution: {
      text: "Dupki: an interpretation centre that steps down to the Ganges like a ghat, with exhibitions, a library and workshops that make visitors care for the river. S5 (Stay, Serve, Sweat, Snack, Shop): a mixed-use complex around a public plaza, shaped by its site. Farm Residence: a minimal house in local stone and wood, with full working drawings.",
      figures: [
        {
          kind: "graphic",
          id: "02",
          title: "S5 from the street",
          note: "2023 portfolio p. 7: the street-level render and massing diagrams.",
          ratio: "landscape",
        },
        {
          kind: "graphic",
          id: "03",
          title: "Farm Residence",
          note: "2021 portfolio: the render and exploded isometric.",
          ratio: "landscape",
        },
      ],
    },
  },
};
