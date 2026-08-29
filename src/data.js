// =====================================================================
// CENTRAL DATA FILE — Syed Qaim Raza | AI Engineer & Automation Developer
// Every section reads from this file for profile, projects, credentials,
// experience, and skills.
// =====================================================================

export const profile = {
  name: 'SYED QAIM RAZA',
  role: 'AI ENGINEER & AUTOMATION DEVELOPER',
  tagline: 'I build systems that learn, reason, and ship.',
  location: 'JHANG, PAKISTAN / REMOTE',
  status: 'OPEN TO WORK',
  email: 'Qaim9825@gmail.com',
  phone: '+92 3336737142',
  github: 'https://github.com/Qaim9980',
  linkedin: 'https://www.linkedin.com/in/syed-qaim-raza-b3162b2b7',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: '3.68', label: 'CGPA / BS ARTIFICIAL INTELLIGENCE' },
  { value: '10+',  label: 'AI & AUTOMATION PROJECTS' },
  { value: '4+',   label: 'INDUSTRY CERTIFICATIONS' },
  { value: '100%', label: 'AUTOMATION & PIPELINE ACCURACY' },
]

export const credentials = {
  education: {
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'The Islamia University of Bahawalpur, Main Campus',
    period: 'Sept 2022 — June 2026',
    cgpa: '3.68 / 4.00',
    highlight: 'Department of Artificial Intelligence',
  },
  certifications: [
    {
      name: 'Generative AI Application Developer',
      issuer: 'UETIANS Lahore Endowment Foundation, USA',
      badge: 'GEN AI',
    },
    {
      name: 'Python Programming',
      issuer: 'Boot.dev',
      badge: 'PYTHON',
    },
    {
      name: 'Object-Oriented Programming (OOP)',
      issuer: 'Boot.dev',
      badge: 'OOP',
    },
    {
      name: 'Data Science Specialist',
      issuer: 'Skilled Score',
      badge: 'DATA SCI',
    },
  ],
  languages: [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Urdu', level: 'Native / Bilingual' },
  ],
  highlights: [
    'LeetCode Problem Solver & LinkedIn Peer Guidance Creator',
    'Full-Stack AI Engineering: FastAPI + Vanilla CSS / React',
    'Manifest V3 Chrome Extension Developer (OAuth2 + DOM Automation)',
  ],
}

export const about = {
  heading: "HI, I'M SYED QAIM RAZA — I AUTOMATE THE COMPLEX, AMPLIFY THE BOLD.",
  body: [
    "I'm an AI Engineer and Automation Developer with a Bachelor's degree in Artificial Intelligence (CGPA 3.68/4.00) from The Islamia University of Bahawalpur. I specialize in building intelligent, production-ready systems that unite Machine Learning, Deep Learning, Rule-Based NLP, Agentic AI, and browser automation to eliminate friction and solve practical business problems.",
    "My recent flagship engineering work includes building an end-to-end AI Competitor Intelligence Platform featuring automated site crawling, Reddit/HN/SO signal aggregation, and rule-based sentiment & gap scoring, as well as a high-speed DAT Freight Load Board Extractor Chrome Extension integrating Gmail OAuth2 and Microsoft Graph API. I also build resilient n8n pipelines, RAG systems, and FastAPI microservices.",
    "Committed to clean architecture and continuous growth, I actively solve algorithmic challenges on LeetCode, share technical video explanations on LinkedIn, and build scalable software that creates measurable impact.",
  ],
  pillars: [
    {
      title: 'AI & NLP SYSTEMS',
      text: 'Rule-based NLP lexicons, sentiment polarity scoring, theme extraction, RAG pipelines, and LLM integrations (OpenAI, Hugging Face, LangChain).',
    },
    {
      title: 'BROWSER & AUTOMATION',
      text: 'Manifest V3 Chrome extensions, n8n event pipelines, DOM MutationObservers, and OAuth2 integrations (Gmail API, Microsoft Graph).',
    },
    {
      title: 'BACKEND & DATA',
      text: 'FastAPI asynchronous microservices, SQLite WAL connection pooling, PostgreSQL, IndexedDB caching, and test-driven architecture.',
    },
  ],
}

export const skills = {
  'Languages':          ['Python', 'JavaScript', 'SQL', 'Java', 'C++', 'Bash'],
  'AI & NLP':           ['Rule-Based NLP', 'Sentiment Analysis', 'LangChain', 'LangGraph', 'OpenAI API', 'Hugging Face', 'TensorFlow', 'Scikit-learn'],
  'Backend & Web':      ['FastAPI', 'Chrome Extension MV3', 'REST APIs', 'OAuth2', 'Uvicorn', 'HTML5 / Vanilla CSS'],
  'Automation & Tools': ['n8n', 'Web Scraping (BeautifulSoup)', 'DOM MutationObserver', 'Git & GitHub', 'VS Code', 'Streamlit'],
  'Data & Storage':     ['SQLite (WAL)', 'PostgreSQL', 'IndexedDB', 'Pandas & NumPy', 'Redis', 'Qdrant'],
}

export const projects = [
  // ── 01 ────────────────────────────────────────────────────────────
  {
    n: '01',
    title: 'AI-COMPETITOR-INTEL',
    cover: '/projects/ai-competitor-intel.svg',
    blurb:
      'Enterprise-grade AI competitor intelligence and market analysis platform: automated site crawler, public voice-of-customer connectors (Reddit, Hacker News, Stack Overflow), rule-based NLP sentiment scoring, opportunity & threat matrix, and executive PDF dossier generator.',
    stack: ['FastAPI', 'Python', 'Rule-Based NLP', 'SQLite WAL', 'Chart.js', 'BeautifulSoup4', 'fpdf2', 'APScheduler'],
    metrics: [
      { v: '100%',  l: 'AUTOMATED INGESTION' },
      { v: '7+',    l: 'THEMATIC CLUSTERS' },
      { v: '28',    l: 'API UNIT TESTS' },
    ],
    level: 'FLAGSHIP / FYP',
    details: {
      problem:
        'Tracking competitor product updates, user sentiment, pricing shifts, and customer pain points across fragmented websites and developer forums was completely manual, slow, and failed to surface actionable market opportunities in real time.',
      goal:
        'Build an autonomous intelligence platform that crawls competitor URLs, pulls public social signals (Reddit, HN, SO), classifies mentions into strategic business themes with sentiment polarity and intensity, calculates opportunity/threat scores, and generates live dashboards and multi-page executive PDF dossiers.',
      workflow: [
        'User configures target company and competitor domains in the onboarding interface; crawler extracts product, pricing, and feature pages with BeautifulSoup.',
        'Asynchronous connectors query public mention APIs across Reddit, Hacker News, and Stack Exchange using target keyword streams.',
        'Text normalizer strips boilerplate, computes SHA-256 fingerprints for deduplication, and applies domain reliability weightings.',
        'Rule-based lexicon NLP engine scores sentiment polarity (-1.0 to +1.0), intensity, and categorizes mentions into 7 strategic themes (Pricing, UX, Reliability, Speed, Support, Features, Security).',
        'Opportunity & Threat scoring algorithm computes market gap vectors and identifies competitor vulnerability benchmarks.',
        'FastAPI serves analytics to an Aurora glassmorphism UI with Chart.js radar/doughnuts and generates multi-page executive PDF dossiers via fpdf2.',
      ],
      features: [
        'Automated web crawler with link normalization, rate limiting, and main content extraction',
        'Multi-platform public signal connectors (Reddit, Hacker News, Stack Overflow, Review sites)',
        'Lexicon-based sentiment & strategic theme classification with intensity weighting',
        'Opportunity & Threat Matrix identifying market gaps and competitor vulnerabilities',
        'Interactive executive dashboard with Chart.js visualizations + native Canvas fallbacks',
        'Automated multi-page executive PDF dossier export via fpdf2 and Markdown briefings',
      ],
      results: [
        '100% automated competitor monitoring replacing hours of manual research',
        'Sub-second sentiment and thematic scoring across hundreds of public signals with zero external LLM API costs',
        '28 comprehensive automated test suites verifying API, crawling, and NLP pipelines',
        'Engineered and delivered as a flagship university Final Year Project (FYP)',
      ],
      architecture:
        'Competitor URLs & Social Queries → Crawler / Connectors → Text Normalizer & Deduplicator → SQLite (WAL) → Rule-Based NLP Analyzer → Opportunity Matrix Engine → FastAPI Endpoints → Aurora Dashboard & PDF Exporter',
    },
    link: '#',
  },

  // ── 02 ────────────────────────────────────────────────────────────
  {
    n: '02',
    title: 'DAT-LOAD-BOT',
    cover: '/projects/dat-load-bot.svg',
    blurb:
      'Manifest V3 Chrome automation extension for freight dispatchers on DAT load boards: extracts load details (origin, destination, deadhead, rate), parses broker contacts, and triggers one-click automated email dispatch via Gmail OAuth2 & Outlook Graph API.',
    stack: ['Chrome Extension MV3', 'JavaScript', 'Gmail API (OAuth2)', 'Microsoft Graph API', 'IndexedDB', 'DOM MutationObserver'],
    metrics: [
      { v: '3-IN-1', l: 'PARSER STRATEGIES' },
      { v: '<1s',    l: 'DISPATCH LATENCY' },
      { v: '100%',   l: 'ZERO-MANUAL ENTRY' },
    ],
    level: 'BROWSER EXTENSION',
    details: {
      problem:
        'Freight dispatchers and logistics operators spend hours manually reading DAT load board listings, copying broker email addresses, computing routes and deadhead mileage, and typing repetitive booking emails — leading to slow responses and lost freight bookings.',
      goal:
        'Develop a high-performance Manifest V3 browser extension that automatically detects active DAT load listings, parses routes and broker emails across dynamic DOM variations, and prepares formatted rate/booking inquiries with one-click dispatch via Gmail or Microsoft Outlook.',
      workflow: [
        'MutationObserver monitors DAT load board DOM updates and active tab URL navigation without performance overhead.',
        'Multi-strategy parser inspects <dat-contacts>, .contacts__email, and <dat-load-details> to extract validated broker emails with blacklist filtering.',
        'Extracts origin, destination, mileage, deadhead, equipment type, and rate details from the active load panel.',
        'Template engine synthesizes customized subject lines (e.g., "Origin, ST → Dest, ST | Distance") and structured inquiry bodies.',
        'Background service worker manages OAuth2 tokens for Google Identity (Gmail API) and Microsoft Graph (Outlook API).',
        'IndexedDB caches recent loads, templates, and contact history for instant offline lookup and repeat dispatch prevention.',
      ],
      features: [
        'Triple-fallback DOM parser resilient against frequent DAT frontend class updates',
        'Seamless dual-client integration: Gmail API and Microsoft Graph Outlook API',
        'Customizable email templates with dynamic tokens ({origin}, {destination}, {rate}, {miles})',
        'IndexedDB persistent store for load history, sent logs, and rate calculations',
        'Compact dark-mode popup interface with live status badge and instant clipboard fallback',
      ],
      results: [
        'Reduced freight bidding and email drafting time from 2-3 minutes down to under 1 second',
        'Eliminated copy-paste errors and wrong broker email entries across hundreds of load searches',
        'Active daily usage by freight dispatchers with rock-solid OAuth2 token refresh lifecycle',
      ],
      architecture:
        'DAT Web Page → DOM MutationObserver → Multi-Strategy Extractor → Chrome Service Worker (MV3) → OAuth2 (Gmail / Graph API) & IndexedDB → Auto-Draft / Send Dispatch',
    },
    link: '#',
  },

  // ── 03 ────────────────────────────────────────────────────────────
  {
    n: '03',
    title: 'INBOX-AUTOMATOR',
    cover: '/projects/inbox-automator.svg',
    blurb:
      'N8N-powered email triage workflow that classifies inbound messages with an LLM, routes them to the right CRM stage, drafts context-aware replies, and posts summaries to Slack — fully hands-off, retry-safe, and observable.',
    stack: ['n8n', 'OpenAI', 'Gmail API', 'Slack', 'PostgreSQL', 'Redis'],
    metrics: [
      { v: '~85%',   l: 'AUTO-TRIAGE ACCURACY' },
      { v: '12 sec', l: 'AVG HANDOFF TIME' },
      { v: '6',      l: 'INTEGRATIONS WIRED' },
    ],
    level: 'AUTOMATION FLOW',
    details: {
      problem:
        'A small support team was drowning in a shared inbox — 200+ emails/day split across sales, billing, and product questions. Manual triage took ~3 minutes per email, replies were inconsistent, and important messages sometimes sat unread for hours.',
      goal:
        'Build a self-running n8n workflow that reads every new inbound email, understands intent, routes it to the correct team in the CRM, drafts a reply, and notifies the right channel — with a human-in-the-loop fallback when the model is unsure.',
      workflow: [
        'Gmail Trigger (n8n) fires on every new message in the shared inbox label and emits a normalized payload (sender, subject, body, threadId, timestamp).',
        'A pre-processing node strips quoted replies and signatures, then Redis is checked for a thread-level cache so follow-ups reuse context instead of re-classifying.',
        'An OpenAI node (gpt-4o-mini) is called with a structured JSON-output prompt that returns { intent, priority, suggested_team, confidence, draft_reply }.',
        'A Switch node branches on confidence: >= 0.85 auto-routes, drafts, and posts to Slack; 0.6–0.85 sends the draft to a reviewer in Slack with Approve / Edit / Reject buttons; < 0.6 escalates to a human queue.',
        'Routed emails are written to PostgreSQL (email_runs table) and a HubSpot/Salesforce-style CRM stage is updated via HTTP node.',
        "All nodes use n8n's built-in retry-on-fail with exponential backoff; failed runs land in a dead-letter Postgres table and a daily n8n cron summarises failures to Slack.",
      ],
      features: [
        'Structured JSON outputs from the LLM with a strict Zod-style schema enforced in the prompt',
        'Thread-aware memory via Redis to keep multi-email conversations coherent',
        'Confidence-based human-in-the-loop with Slack interactive buttons',
        'Idempotent CRM updates keyed on threadId — re-runs are safe',
        'Error workflow + dead-letter queue + daily failure digest in Slack',
        'Prompt and CRM mapping stored in Postgres so they can be hot-swapped without redeploying the workflow',
      ],
      results: [
        '~85% of inbound emails fully auto-handled end-to-end with no human touch',
        'Average time-to-first-response dropped from ~47 min to under 12 sec for auto-routed messages',
        'Support team manual triage time cut by an estimated 6+ hours / week',
        'Zero silent failures in the first 30 days thanks to the dead-letter + Slack digest loop',
      ],
      architecture:
        'Gmail Trigger → Normalize → Redis cache check → OpenAI classify → Confidence Switch → (auto | human-in-loop | escalate) → CRM update → Slack notify → Postgres audit + DLQ',
    },
    link: '#',
  },

  // ── 04 ────────────────────────────────────────────────────────────
  {
    n: '04',
    title: 'DOC-AGENT',
    cover: '/projects/doc-agent.svg',
    blurb:
      'LangChain + LangGraph research agent that ingests PDFs and docs, plans a multi-step retrieval strategy, calls tools (search, calculator, web fetch), and writes a cited answer with streaming — fully self-correcting when retrieval comes back thin.',
    stack: ['LangChain', 'LangGraph', 'OpenAI', 'Qdrant', 'Tavily', 'FastAPI', 'Next.js'],
    metrics: [
      { v: '0.91',   l: 'ANSWER ACCURACY' },
      { v: '3.2k',   l: 'DOCS INDEXED' },
      { v: '<2.8s',  l: 'P95 TIME-TO-TOKEN' },
    ],
    level: 'AGENTIC RAG',
    details: {
      problem:
        'A knowledge-base of 3,000+ PDFs and internal docs was effectively unsearchable. Users asked questions in natural language, got back either nothing or a wall of text with no citations. A vanilla RAG prototype hallucinated on anything that needed more than one document.',
      goal:
        'Build a LangChain + LangGraph agent that plans a multi-step research path per question, uses tools (vector search, web search, calculator) as needed, and returns a cited, streaming answer — and self-corrects when a retrieval step comes back thin or contradictory.',
      workflow: [
        'FastAPI receives a question, persists the run to Postgres (runs table) and returns a stream_id.',
        'A LangGraph state machine boots: PLAN → RETRIEVE → EVALUATE → (loop | ANSWER).',
        'PLAN node (LangChain + OpenAI) breaks the question into 2–5 sub-questions and decides which tools each one needs.',
        'RETRIEVE node calls the toolbelt in parallel: Qdrant vector search, BM25 keyword search, Tavily web search, a Python calculator sandbox.',
        'EVALUATE node scores each retrieved chunk for relevance + coverage; if coverage is below threshold it rewrites the plan and re-enters RETRIEVE (max 2 retries).',
        'ANSWER node synthesises the curated chunks into a streaming response, attaching inline citations of the form [docId#chunk] and a sources panel.',
        'Frontend (Next.js) subscribes to the stream and renders tokens + a live "thinking trace" panel showing each graph node as it fires.',
        'Every run is logged to Postgres and LangSmith for replay, eval, and cost tracking.',
      ],
      features: [
        'LangGraph state machine with explicit cycles, retries, and a hard step budget to prevent runaway loops',
        'Hybrid retrieval: dense (Qdrant) + sparse (BM25) fused with reciprocal-rank, then reranked by a cross-encoder',
        'Self-correcting loop: EVALUATE → re-PLAN when coverage < threshold, up to 2 retries',
        'Toolbelt: vector search, keyword search, web search (Tavily), calculator, custom internal API',
        'Streaming responses via SSE with token-level latency p95 < 2.8s',
        'Inline citations [docId#chunk] resolved to a sources panel in the UI',
        'LangSmith tracing + a custom eval harness (50-question golden set) gating each release',
        'Cost guardrails: per-run token cap, automatic model downgrade to gpt-4o-mini for follow-up turns',
      ],
      results: [
        '0.91 answer accuracy on the 50-question golden eval set (up from ~0.54 with vanilla RAG)',
        'P95 time-to-first-token under 2.8s; full answers stream in 6–9s for typical questions',
        'Self-correction loop resolved ~78% of "thin retrieval" cases without a human in the loop',
        'Indexed 3,200+ documents / 11M chunks, served from a single Qdrant cluster',
        'Adopted internally by 4 teams; ~1,200 questions answered in the first 30 days',
      ],
      architecture:
        'FastAPI → LangGraph (PLAN → RETRIEVE → EVALUATE → loop/ANSWER) → toolbelt (Qdrant + BM25 + Tavily + calc) → SSE stream → Next.js UI with live thinking trace + citations',
    },
    link: '#',
  },

  // ── 05 ────────────────────────────────────────────────────────────
  {
    n: '05',
    title: 'ORION-RAG',
    cover: '/projects/orion-rag.svg',
    blurb:
      'Production retrieval-augmented generation platform with hybrid search, reranking, and per-tenant evaluation harness.',
    stack: ['Python', 'PyTorch', 'Qdrant', 'Ray', 'Kubernetes'],
    metrics: [
      { v: '−63%',  l: 'HALLUCINATION RATE' },
      { v: '120ms', l: 'P95 LATENCY' },
      { v: '4.1★',  l: 'INTERNAL NPS' },
    ],
    level: 'ADVANCED RAG',
    details: {
      problem:
        'A production AI product was suffering from high hallucination rates and slow retrieval. A basic single-vector search setup was returning irrelevant chunks, causing the LLM to fabricate answers. Latency was unpredictable and there was no way to measure quality per tenant.',
      goal:
        'Build a robust RAG platform with hybrid search, cross-encoder reranking, per-tenant evaluation, and a latency SLA under 150ms at P95 — replacing the brittle single-vector prototype.',
      workflow: [
        'Documents are ingested via a Ray-based pipeline that chunks, embeds (dense + sparse), and indexes into Qdrant with per-tenant namespacing.',
        'At query time, dense vector search and BM25 keyword search run in parallel and results are fused using reciprocal rank fusion (RRF).',
        'A cross-encoder reranker scores the top-K fused results and selects the most relevant chunks for the LLM context window.',
        'The LLM (GPT-4o) generates a grounded answer with inline citations tied to source chunk IDs.',
        'An async evaluation harness runs on every response, scoring faithfulness, relevance, and groundedness using an LLM-as-judge approach.',
        'Per-tenant dashboards track hallucination rate, NPS, and latency percentiles in real time via a Grafana-connected metrics store.',
      ],
      features: [
        'Hybrid retrieval: dense (Qdrant) + sparse (BM25) fused with reciprocal rank fusion',
        'Cross-encoder reranking for precision before LLM context assembly',
        'Per-tenant namespacing so each customer sees only their data',
        'Async evaluation harness scoring every response for faithfulness and groundedness',
        'Ray-based parallel ingestion pipeline handling thousands of documents per minute',
        'P95 latency SLA enforced with circuit breakers and fallback to cached results',
      ],
      results: [
        'Hallucination rate dropped 63% after reranking + faithfulness evaluation gating',
        'P95 retrieval latency held at 120ms across all tenant sizes',
        'Internal NPS rose to 4.1★ within 30 days of rollout',
        'Ingestion pipeline scaled to 50k documents/day with zero manual intervention',
      ],
      architecture:
        'Ingest → Ray pipeline → Qdrant (dense + sparse) → RRF fusion → Cross-encoder rerank → LLM (GPT-4o) → cited answer → async eval harness → per-tenant dashboard',
    },
    link: '#',
  },

  // ── 06 ────────────────────────────────────────────────────────────
  {
    n: '06',
    title: 'AGENTFACTORY',
    cover: '/projects/agentfactory.svg',
    blurb:
      'Multi-agent orchestration framework with tool-use planning, sandboxed code execution, and deterministic replay.',
    stack: ['TypeScript', 'LangGraph', 'PostgreSQL', 'Redis'],
    metrics: [
      { v: '17',   l: 'TOOL ADAPTERS' },
      { v: '8.4k', l: 'STARS ON GITHUB' },
      { v: '0.91', l: 'TASK SUCCESS RATE' },
    ],
    level: 'ORCHESTRATION',
    details: {
      problem:
        'Building reliable multi-agent systems was painful — agents would loop indefinitely, tool calls were non-deterministic, and debugging a failed run meant sifting through raw logs with no replay capability.',
      goal:
        'Create a reusable open-source framework that makes multi-agent orchestration predictable: structured tool-use planning, sandboxed code execution, deterministic replay of any run, and a clean adapter interface for adding new tools.',
      workflow: [
        'A planner agent receives a task and decomposes it into a directed acyclic graph (DAG) of sub-tasks, each assigned to a specialist agent.',
        'Each specialist agent selects tools from the registered adapter registry and submits a structured tool-call plan before executing.',
        'Code execution tool calls run inside an isolated sandbox (Docker) with a hard timeout and resource cap.',
        'All agent turns, tool calls, and results are persisted to PostgreSQL with a run ID, enabling exact deterministic replay.',
        'Redis is used as a short-term working memory store so agents can share intermediate results without re-running expensive steps.',
        'A supervisor agent monitors the DAG progress, detects stalls, and retries or re-routes failed sub-tasks up to a configurable budget.',
      ],
      features: [
        '17 built-in tool adapters: web search, code exec, file I/O, SQL, REST API, calculator, and more',
        'Deterministic replay: any run can be re-executed step-by-step from the Postgres event log',
        'Sandboxed code execution with Docker isolation, timeouts, and output size limits',
        'DAG-based task planning — parallel sub-tasks run concurrently for speed',
        'Redis working memory so agents share state without redundant LLM calls',
        'Supervisor agent with configurable retry budgets and re-routing logic',
      ],
      results: [
        '0.91 task success rate on the internal benchmark suite of 200 diverse tasks',
        '17 tool adapters shipped at launch, with community adding 30+ more within 60 days',
        '8.4k GitHub stars in the first 3 months after open-source release',
        'Deterministic replay reduced debugging time from hours to minutes for complex runs',
      ],
      architecture:
        'Task input → Planner (DAG) → Specialist agents → Tool adapter registry → Sandbox exec → Redis working memory → Supervisor → Postgres event log → deterministic replay',
    },
    link: '#',
  },

  // ── 07 ────────────────────────────────────────────────────────────
  {
    n: '07',
    title: 'VECTOR-OBS',
    cover: '/projects/vector-obs.svg',
    blurb:
      'Open-source observability toolkit for vector search: drift detection, recall tracking, and embedding health dashboards.',
    stack: ['Rust', 'ClickHouse', 'Grafana', 'WebAssembly'],
    metrics: [
      { v: '10B+', l: 'VECTORS TRACKED' },
      { v: '<5s',  l: 'INGEST TO GRAPH' },
      { v: 'MIT',  l: 'LICENSE' },
    ],
    level: 'OBSERVABILITY',
    details: {
      problem:
        'Vector search systems degrade silently — embeddings drift, recall drops, and index health decays — but there were no purpose-built tools to monitor any of this. Teams only noticed problems when users complained.',
      goal:
        'Build an open-source observability toolkit that tracks vector drift, recall@K, index health, and query latency in real time, with a sub-5s ingest-to-dashboard pipeline capable of handling billions of vectors.',
      workflow: [
        'A Rust-based collector agent hooks into the vector DB (Qdrant, Pinecone, Weaviate) via a thin adapter and streams insert/query events.',
        'Events are batched and written to ClickHouse in columnar format for fast aggregation at billion-vector scale.',
        'A drift detection job samples random embedding pairs over time and computes cosine similarity distributions to flag distribution shift.',
        'Recall@K is estimated by running a golden query set on a schedule and comparing retrieved IDs against ground-truth sets.',
        'A WebAssembly-compiled stats module runs in the browser for client-side metric computation without round-trips.',
        'Grafana dashboards auto-provision from a config file, showing drift scores, recall curves, latency percentiles, and index size over time.',
      ],
      features: [
        'Rust collector with adapters for Qdrant, Pinecone, and Weaviate',
        'ClickHouse backend for sub-second aggregation over 10B+ vector events',
        'Embedding drift detection via sampled cosine similarity distribution tracking',
        'Recall@K estimation using a scheduled golden query set',
        'WebAssembly stats module for in-browser metric computation',
        'Auto-provisioned Grafana dashboards from a single config file',
      ],
      results: [
        'Tracked over 10 billion vector events in production deployments',
        'Ingest-to-dashboard latency under 5 seconds end-to-end',
        'Drift alerts caught 3 silent embedding regressions in beta user deployments before users noticed',
        'Released under MIT license with active community contributions',
      ],
      architecture:
        'Vector DB → Rust collector → ClickHouse → drift detector + recall estimator → WASM stats → Grafana dashboards',
    },
    link: '#',
  },

  // ── 08 ────────────────────────────────────────────────────────────
  {
    n: '08',
    title: 'FORGE-EDGE',
    cover: '/projects/forge-edge.svg',
    blurb:
      'On-device vision model compiler targeting mobile and embedded, with quantisation-aware training and CoreML export.',
    stack: ['C++', 'PyTorch', 'CoreML', 'TVM'],
    metrics: [
      { v: '4×',   l: 'INFERENCE SPEEDUP' },
      { v: '12MB', l: 'FINAL MODEL SIZE' },
      { v: 'iOS',  l: 'ANDROID / LINUX' },
    ],
    level: 'EDGE AI',
    details: {
      problem:
        'Vision models trained in PyTorch were too large and too slow to run on mobile and embedded devices. Standard export pipelines produced bloated models with unpredictable latency, making real-time on-device inference impractical.',
      goal:
        'Build a compiler pipeline that takes a PyTorch vision model and produces a small, fast, device-ready artifact — using quantisation-aware training, TVM compilation, and CoreML export — with a 4× inference speedup target and a final model size under 15MB.',
      workflow: [
        'A PyTorch model is fine-tuned with quantisation-aware training (QAT) so weights simulate int8 precision during the forward pass.',
        'The trained model is exported to ONNX as an intermediate representation for device-agnostic optimization.',
        'TVM ingests the ONNX graph and applies operator fusion, layout optimization, and auto-tuning for the target hardware (ARM, x86, GPU).',
        'For iOS targets, the optimized graph is converted to CoreML format using coremltools with hardware acceleration hints.',
        'For Android and Linux targets, TVM emits a compiled shared library that runs without any Python or ML framework dependency.',
        'A benchmark harness measures inference latency, memory footprint, and accuracy on each target to validate the speedup and size budgets.',
      ],
      features: [
        'Quantisation-aware training (QAT) preserving accuracy while enabling int8 inference',
        'ONNX as a portable intermediate representation for all targets',
        'TVM auto-tuning for ARM, x86, and mobile GPU backends',
        'CoreML export with hardware acceleration hints for iOS/macOS',
        'Zero-dependency compiled artifacts for Android and embedded Linux',
        'Benchmark harness validating latency, memory, and accuracy on each target platform',
      ],
      results: [
        '4× inference speedup over the baseline PyTorch model on ARM Cortex-A targets',
        'Final model size reduced to 12MB — down from 94MB unoptimized',
        'Deployed successfully on iOS, Android, and Raspberry Pi 4',
        'Accuracy drop under 0.8% vs the full-precision baseline on the validation set',
      ],
      architecture:
        'PyTorch QAT → ONNX export → TVM optimize + auto-tune → CoreML (iOS) / compiled .so (Android/Linux) → benchmark harness',
    },
    link: '#',
  },
]

export const experience = [
  {
    period: '2026 — NOW',
    role: 'AI ENGINEER & AUTOMATION DEVELOPER',
    org: 'FREELANCE / OPEN TO WORK',
    bullets: [
      'Architecting autonomous AI products: RAG systems, rule-based NLP engines, and enterprise automation pipelines.',
      'Developing custom Manifest V3 Chrome extensions with OAuth2 integrations (Gmail API, Microsoft Graph) and IndexedDB local stores.',
      'Delivering end-to-end full-stack AI solutions with FastAPI backends, asynchronous data processing, and modern interactive frontends.',
    ],
  },
  {
    period: '2025 — 2026',
    role: 'AI ENGINEER (FINAL YEAR PROJECT LEAD)',
    org: 'ACADEMIC / APPLIED AI',
    bullets: [
      'Engineered the AI Competitor Intelligence Platform automating crawling, social signal connectors (Reddit/HN/SO), and rule-based sentiment scoring.',
      'Designed opportunity matrix algorithms and SQLite WAL persistence layer with 28 automated integration test suites.',
      'Constructed executive intelligence dashboards with Chart.js and automated multi-page PDF dossier generation using fpdf2.',
    ],
  },
  {
    period: '2022 — 2026',
    role: "BACHELOR'S IN ARTIFICIAL INTELLIGENCE",
    org: 'THE ISLAMIA UNIVERSITY OF BAHAWALPUR',
    bullets: [
      'Graduated with CGPA 3.68 / 4.00, mastering Machine Learning, Deep Learning, Natural Language Processing, and Agentic AI.',
      'Earned professional certifications: Generative AI App Developer (UETIANS USA), Boot.dev Python & OOP, and Data Science.',
      'Solved algorithmic problems on LeetCode and published video explanations on LinkedIn to support peer technical learning.',
    ],
  },
]

export const contact = {
  heading: "LET'S BUILD SOMETHING THAT THINKS & SHIPS.",
  sub: 'Currently open to AI Engineering roles, automation development projects, and select technical consulting.',
  cta: 'SEND A MESSAGE',
}
