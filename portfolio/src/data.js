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
  github: 'https://github.com/your-handle',
  linkedin: 'https://linkedin.com/in/your-handle',
  'Contact-Number': '0333-6737142',
  resumeUrl: 'C:\\Users\\qaim9\\Desktop\\portfolio\
  
  \Syed Qaim Raza (Cv) (1) (2).pdf',
}

export const stats = [
  { value: '10+', label: 'AI PROJECTS BUILT' },
  { value: '15+', label: 'AUTOMATION WORKFLOWS CREATED' },
  { value: '8+', label: 'LLM & AGENT PROJECTS' },
  { value: '95%', label: 'WORKFLOW UPTIME' },
]

export const about = {
  heading: 'HI, I\'M YOUR NAME — I AUTOMATE THE BORING, AMPLIFY THE BOLD.',
  body: [
    'I am an AI engineer and automation specialist who turns repetitive, manual work into reliable, self-running systems. My focus sits at the intersection of large language models, agentic workflows, and no-code/low-code orchestration — building tools that feel like magic to the people using them and like clean engineering to the people maintaining them.',
    'Over the last couple of years I have shipped LLM-powered chatbots, retrieval pipelines, and end-to-end automations using n8n, OpenAI, vector databases, and modern web stacks. I care deeply about prompt design, error handling, observability, and writing automations that survive contact with real-world data. If a workflow cannot be debugged, retried, and monitored — it is not finished.',
  ],
  pillars: [
    { title: 'AI & LLMS', text: 'Prompt engineering, RAG, agentic workflows, tool-use, and evaluation pipelines using OpenAI, open-source models, and embeddings.' },
    { title: 'AUTOMATION', text: 'n8n, webhooks, APIs, and event-driven pipelines that connect CRMs, inboxes, databases, and SaaS tools into one reliable flow.' },
    { title: 'PRODUCT', text: 'Translating fuzzy ideas into shippable tools with clear inputs, outputs, metrics, and graceful failure modes.' },
  ],
}

export const skills = {
  Languages: ['Python', 'TypeScript', 'Rust', 'C++', 'SQL', 'Bash'],
  'ML / AI': ['PyTorch', 'JAX', 'Hugging Face', 'LangChain', 'LangGraph', 'vLLM'],
  'MLOps / Infra': ['Kubernetes', 'Docker', 'Ray', 'MLflow', 'Weights & Biases', 'Terraform'],
  Data: ['PostgreSQL', 'Pinecone', 'Weaviate', 'Kafka', 'Spark', 'dbt'],
  'Tools & Automation': ['n8n', 'Zapier', 'Make', 'Airflow', 'Prefect', 'GitHub Actions'],
  'Cloud / Edge': ['AWS', 'GCP', 'Cloudflare', 'Triton', 'ONNX', 'CoreML'],
}

export const projects = [
  {
    n: '01',
    title: 'ORION-RAG',
    blurb: 'Production retrieval-augmented generation platform with hybrid search, reranking, and per-tenant evaluation harness.',
    stack: ['Python', 'PyTorch', 'Qdrant', 'Ray', 'Kubernetes'],
    metrics: [
      { v: '−63%', l: 'HALLUCINATION RATE' },
      { v: '120ms', l: 'P95 LATENCY' },
      { v: '4.1★', l: 'INTERNAL NPS' },
    ],
    link: '#',
  },
  {
    n: '02',
    title: 'AGENTFACTORY',
    blurb: 'Multi-agent orchestration framework with tool-use planning, sandboxed code execution, and deterministic replay.',
    stack: ['TypeScript', 'LangGraph', 'PostgreSQL', 'Redis'],
    metrics: [
      { v: '17', l: 'TOOL ADAPTERS' },
      { v: '8.4k', l: 'STARS ON GITHUB' },
      { v: '0.91', l: 'TASK SUCCESS RATE' },
    ],
    link: '#',
  },
  {
    n: '03',
    title: 'VECTOR-OBS',
    blurb: 'Open-source observability toolkit for vector search: drift detection, recall tracking, and embedding health dashboards.',
    stack: ['Rust', 'ClickHouse', 'Grafana', 'WebAssembly'],
    metrics: [
      { v: '10B+', l: 'VECTORS TRACKED' },
      { v: '<5s', l: 'INGEST TO GRAPH' },
      { v: 'MIT', l: 'LICENSE' },
    ],
    link: '#',
  },
  {
    n: '04',
    title: 'FORGE-EDGE',
    blurb: 'On-device vision model compiler targeting mobile and embedded, with quantisation-aware training and CoreML export.',
    stack: ['C++', 'PyTorch', 'CoreML', 'TVM'],
    metrics: [
      { v: '4×', l: 'INFERENCE SPEEDUP' },
      { v: '12MB', l: 'FINAL MODEL SIZE' },
      { v: 'iOS', l: 'ANDROID / LINUX' },
    ],
    link: '#',
  },
  {
    n: '05',
    title: 'INBOX-AUTOMATOR',
    cover: '/projects/inbox-automator.svg',
    blurb: 'N8N-powered email triage workflow that classifies inbound messages with an LLM, routes them to the right CRM stage, drafts context-aware replies, and posts summaries to Slack — fully hands-off, retry-safe, and observable.',
    stack: ['n8n', 'OpenAI', 'Gmail API', 'Slack', 'PostgreSQL', 'Redis'],
    metrics: [
      { v: '~85%', l: 'AUTO-TRIAGE ACCURACY' },
      { v: '12 sec', l: 'AVG HANDOFF TIME' },
      { v: '6', l: 'INTEGRATIONS WIRED' },
    ],
    level: 'INTERMEDIATE',
    details: {
      problem: 'A small support team was drowning in a shared inbox — 200+ emails/day split across sales, billing, and product questions. Manual triage took ~3 minutes per email, replies were inconsistent, and important messages sometimes sat unread for hours.',
      goal: 'Build a self-running n8n workflow that reads every new inbound email, understands intent, routes it to the correct team in the CRM, drafts a reply, and notifies the right channel — with a human-in-the-loop fallback when the model is unsure.',
      workflow: [
        'Gmail Trigger (n8n) fires on every new message in the shared inbox label and emits a normalized payload (sender, subject, body, threadId, timestamp).',
        'A pre-processing node strips quoted replies and signatures, then Redis is checked for a thread-level cache so follow-ups reuse context instead of re-classifying.',
        'An OpenAI node (gpt-4o-mini) is called with a structured JSON-output prompt that returns { intent, priority, suggested_team, confidence, draft_reply }.',
        'A Switch node branches on confidence: >= 0.85 auto-routes, drafts, and posts to Slack; 0.6–0.85 sends the draft to a reviewer in Slack with Approve / Edit / Reject buttons; < 0.6 escalates to a human queue.',
        'Routed emails are written to PostgreSQL (email_runs table) and a HubSpot/Salesforce-style CRM stage is updated via HTTP node.',
        'All nodes use n8n\'s built-in retry-on-fail with exponential backoff; failed runs land in a dead-letter Postgres table and a daily n8n cron summarises failures to Slack.',
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
      architecture: 'Gmail Trigger → Normalize → Redis cache check → OpenAI classify → Confidence Switch → (auto | human-in-loop | escalate) → CRM update → Slack notify → Postgres audit + DLQ',
    },
    link: '#',
  },
  {
    n: '06',
    title: 'DOC-AGENT',
    cover: '/projects/doc-agent.svg',
    blurb: 'LangChain + LangGraph research agent that ingests PDFs and docs, plans a multi-step retrieval strategy, calls tools (search, calculator, web fetch), and writes a cited answer with streaming — fully self-correcting when retrieval comes back thin.',
    stack: ['LangChain', 'LangGraph', 'OpenAI', 'Qdrant', 'Tavily', 'FastAPI', 'Next.js'],
    metrics: [
      { v: '0.91', l: 'ANSWER ACCURACY' },
      { v: '3.2k', l: 'DOCS INDEXED' },
      { v: '<2.8s', l: 'P95 TIME-TO-TOKEN' },
    ],
    level: 'INTERMEDIATE',
    details: {
      problem: 'A knowledge-base of 3,000+ PDFs and internal docs was effectively unsearchable. Users asked questions in natural language, got back either nothing or a wall of text with no citations. A vanilla RAG prototype hallucinated on anything that needed more than one document.',
      goal: 'Build a LangChain + LangGraph agent that plans a multi-step research path per question, uses tools (vector search, web search, calculator) as needed, and returns a cited, streaming answer — and self-corrects when a retrieval step comes back thin or contradictory.',
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
      architecture: 'FastAPI → LangGraph (PLAN → RETRIEVE → EVALUATE → loop/ANSWER) → toolbelt (Qdrant + BM25 + Tavily + calc) → SSE stream → Next.js UI with live thinking trace + citations',
    },
    link: '#',
  },
]

export const experience = [
  {
    period: '2026 — NOW',
    role: 'STAFF AI ENGINEER',
    org: 'NORTHWIND LABS',
    bullets: [
      'Led a team of 7 building the company\'s retrieval and agent platform serving 12M daily calls.',
      'Cut inference cost 41% via speculative decoding and request coalescing on a self-hosted 70B model.',
      'Shipped the internal eval suite now gating every model promotion to production.',
    ],
  },
  {
    period: '2025 — 2026',
    role: 'SENIOR MACHINE LEARNING ENGINEER',
    org: 'OBLIVION ANALYTICS',
    bullets: [
      'Owned end-to-end ML for the document understanding product line (training, serving, monitoring).',
      'Migrated training from a single GPU box to a Ray-on-Kubernetes cluster; throughput 9×.',
      'Published 2 papers at NeurIPS workshops on active learning for low-resource NLP.',
    ],
  },
  {
    period: '2022 — 2026',
    role: 'ML ENGINEER',
    org: 'CINDER INDUSTRIES',
    bullets: [
      'Built forecasting models for manufacturing; reduced stockouts by 28% across 14 SKUs.',
      'Introduced experiment tracking and a feature store adopted company-wide.',
    ],
  },
]

export const contact = {
  heading: 'LET\'S BUILD SOMETHING THAT THINKS.',
  sub: 'Currently open to senior and staff roles, and select consulting work.',
  cta: 'SEND A MESSAGE',
}
