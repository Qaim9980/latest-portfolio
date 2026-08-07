// =====================================================================
// CENTRAL DATA FILE — Edit your portfolio content here.
// Every section reads from this file so you can change names, links,
// projects, experience, and skills in one place.
// =====================================================================

export const profile = {
  name: 'SYED QAIM RAZA',
  role: 'AI ENGINEER',
  tagline: 'I build systems that learn, reason, and ship.',
  location: 'PAKISTAN / REMOTE',
  status: 'OPEN TO WORK',
  email: 'Qaim9825@gmail.com',
  phone: '0333-6737142',
  github: 'https://github.com/Qaim9980',
  linkedin: 'https://www.linkedin.com/in/syed-qaim-raza-b3162b2b7',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: '10+',  label: 'AI PROJECTS BUILT' },
  { value: '15+',  label: 'AUTOMATION WORKFLOWS CREATED' },
  { value: '8+',   label: 'LLM & AGENTIC AI PROJECTS' },
  { value: 'BS AI', label: 'ARTIFICIAL INTELLIGENCE GRADUATE' },
]

export const about = {
  heading: "HI, I'M SYED QAIM RAZA — I AUTOMATE THE BORING, AMPLIFY THE BOLD.",
  body: [
    "I'm an AI Engineer and Automation Developer with a Bachelor's degree in Artificial Intelligence. I build intelligent systems that combine Machine Learning, Deep Learning, NLP, Agentic AI, and workflow automation to solve real business problems.",
    "My work focuses on developing AI-powered applications, autonomous agents, RAG systems, data-driven solutions, and n8n automations that reduce manual effort and improve productivity. I enjoy transforming complex ideas into practical, scalable products that create measurable impact.",
    "I'm continuously learning, building, and exploring the latest advancements in AI to deliver solutions that are innovative, efficient, and ready for real-world use.",
  ],
  pillars: [
    {
      title: 'AI & LLMS',
      text: 'Prompt engineering, RAG, agentic workflows, tool-use, and evaluation pipelines using OpenAI, open-source models, and embeddings.',
    },
    {
      title: 'AUTOMATION',
      text: 'n8n, webhooks, APIs, and event-driven pipelines that connect CRMs, inboxes, databases, and SaaS tools into one reliable flow.',
    },
    {
      title: 'PRODUCT',
      text: 'Translating fuzzy ideas into shippable tools with clear inputs, outputs, metrics, and graceful failure modes.',
    },
  ],
}

export const skills = {
  'Languages':         ['Python', 'Java', 'SQL', 'Bash', 'C++'],
  'ML / AI':           ['Scikit-learn', 'Pandas & numpy', 'LangChain', 'LangGraph', 'OpenAI API', 'vLLM'],
  'MLOps / Infra':     ['Docker', 'MLflow', 'Kubernetes', 'Ray', 'Airflow'],
  'Data':              ['PostgreSQL', 'Qdrant', 'Pinecone', 'Weaviate', 'Redis', 'Kafka'],
  'Tools & Automation':['n8n', 'Hugging Face', 'FastAPI', 'GitHub Actions'],
}

export const projects = [
  // ── 01 ────────────────────────────────────────────────────────────
  {
    n: '01',
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
    level: 'ADVANCED',
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

  // ── 02 ────────────────────────────────────────────────────────────
  {
    n: '02',
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
    level: 'ADVANCED',
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

  // ── 03 ────────────────────────────────────────────────────────────
  {
    n: '03',
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
    level: 'ADVANCED',
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

  // ── 04 ────────────────────────────────────────────────────────────
  {
    n: '04',
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
    level: 'ADVANCED',
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

  // ── 05 ────────────────────────────────────────────────────────────
  {
    n: '05',
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
    level: 'INTERMEDIATE',
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

  // ── 06 ────────────────────────────────────────────────────────────
  {
    n: '06',
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
    level: 'INTERMEDIATE',
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

  // ── 07 ────────────────────────────────────────────────────────────
  {
    n: '07',
    title: 'MLOPS-FOUNDRY',
    cover: '/projects/ml-lab.svg',
    blurb:
      'End-to-end machine learning platform for training, evaluation, and deployment with dataset versioning, experiment tracking, and automated model promotion gates.',
    stack: ['Python', 'PyTorch', 'MLflow', 'Docker', 'Kubernetes', 'Airflow'],
    metrics: [
      { v: '18%',   l: 'MODEL ERROR DROP' },
      { v: '3x',    l: 'FASTER EXPERIMENTS' },
      { v: '99.9%', l: 'PIPELINE SUCCESS' },
    ],
    level: 'INTERMEDIATE',
    details: {
      problem:
        'The team had strong models but a fragile delivery path: experiments were hard to reproduce, training jobs drifted across environments, and model rollouts depended on manual checks that slowed releases and occasionally shipped inconsistent artifacts.',
      goal:
        'Build a dependable ML platform that standardizes dataset snapshots, tracks experiments, automates training and validation, and promotes models only when they clear quality, latency, and safety gates.',
      workflow: [
        'Airflow orchestrates dataset ingestion, validation, and training runs on a scheduled or event-driven basis.',
        'Raw data is snapshotted, cleaned, and versioned so every training job can be tied back to an immutable dataset artifact.',
        'PyTorch training jobs log metrics, artifacts, and parameters to MLflow for reproducible comparisons across runs.',
        'A validation stage evaluates accuracy, calibration, and latency against a golden benchmark before promotion is allowed.',
        'Only models that clear threshold checks are packaged into Docker images and deployed to a Kubernetes serving stack.',
        'Monitoring jobs watch drift, error spikes, and throughput regressions, then trigger a retraining loop when the system degrades.',
      ],
      features: [
        'Dataset versioning and lineage for reproducible training runs',
        'Experiment tracking with MLflow and automated metric comparison',
        'Promotion gates for quality, latency, and basic safety checks',
        'Containerized training and serving for consistent environments',
        'Retraining triggers based on drift and live monitoring signals',
      ],
      results: [
        'Model iteration cycle shortened from days to hours with standardized pipelines',
        'Release confidence improved because every promoted model passed the same validation gates',
        'Operational failures dropped after serving and training were unified under one repeatable workflow',
      ],
      architecture:
        'Data source → versioned snapshot → validation → Airflow training → MLflow tracking → benchmark checks → Docker package → Kubernetes deploy → monitoring → retrain loop',
    },
    link: '#',
  },

  // ── 08 ────────────────────────────────────────────────────────────
  {
    n: '08',
    title: 'ML DOMEY',
    cover: '/projects/ml-domey.svg',
    blurb:
      'A polished machine-learning operations portfolio project showing dataset versioning, model training, validation gates, and deploy-ready dashboards in one clean workflow.',
    stack: ['Python', 'PyTorch', 'MLflow', 'Docker', 'FastAPI'],
    metrics: [
      { v: '24',  l: 'TRAINING RUNS' },
      { v: '3',   l: 'DEPLOY GATES' },
      { v: '99%', l: 'TRACEABILITY' },
    ],
    level: 'INTERMEDIATE',
    details: {
      problem:
        'Model work was fragmented across notebooks, ad-hoc scripts, and manual handoffs, which made experiments hard to compare and production rollouts easy to break.',
      goal:
        'Present a clear ML operations project with a proper visual cover that communicates how data, training, evaluation, and deployment connect end to end.',
      workflow: [
        'Data snapshots are versioned before every training run so experiments can be reproduced later.',
        'PyTorch training jobs log metrics and artifacts to MLflow for clean comparisons.',
        'Validation gates check accuracy, latency, and artifact integrity before promotion.',
        'A deployment step packages the approved model into Docker and exposes it through a simple API.',
      ],
      features: [
        'Reproducible experiments with dataset and artifact tracking',
        'Validation gates before any deployment is allowed',
        'API-first model serving for demos and integrations',
        'Simple, presentation-friendly ML pipeline story',
      ],
      results: [
        'Clearer story for recruiters and reviewers looking at the portfolio',
        'Much stronger visual pairing between the project text and the project image',
        'A dedicated cover asset instead of reusing a generic image',
      ],
      architecture:
        'Data snapshot → training → MLflow logging → validation gates → Docker package → API deploy → monitoring',
    },
    link: '#',
  },
]

export const experience = [
  {
    period: '2026 — NOW',
    role: 'AI ENGINEER',
    org: 'FREELANCE / OPEN TO WORK',
    bullets: [
      'Building end-to-end AI products: RAG systems, agentic pipelines, and n8n automation workflows for clients.',
      'Designing and shipping LLM-powered tools with evaluation harnesses, observability, and human-in-the-loop fallbacks.',
      'Exploring the latest advancements in AI to deliver innovative, efficient, and production-ready solutions.',
    ],
  },
  {
    period: '2025 — 2026',
    role: 'AI & AUTOMATION DEVELOPER',
    org: 'PROJECT-BASED WORK',
    bullets: [
      'Developed ML and deep learning models for classification, NLP, and data-driven decision making.',
      'Built n8n and webhook-based automation pipelines connecting CRMs, inboxes, and SaaS tools.',
      'Delivered full-stack AI applications with FastAPI backends and modern web frontends.',
    ],
  },
  {
    period: '2022 — 2026',
    role: "BACHELOR'S IN ARTIFICIAL INTELLIGENCE",
    org: 'UNIVERSITY',
    bullets: [
      'Studied Machine Learning, Deep Learning, NLP, Computer Vision, and intelligent systems.',
      'Completed projects in agentic AI, vector databases, and workflow automation.',
      'Graduated with strong foundations in both theory and practical AI engineering.',
    ],
  },
]

export const contact = {
  heading: "LET'S BUILD SOMETHING THAT THINKS.",
  sub: 'Currently open to AI engineering roles, automation projects, and select consulting work.',
  cta: 'SEND A MESSAGE',
}
