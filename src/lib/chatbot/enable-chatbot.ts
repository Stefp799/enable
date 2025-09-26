/*
  Enable Solutions Chatbot — Types, Seed Config, and Tiny Reducer
  Drop-in TypeScript module for a React app.

  Usage example in React:
  --------------------------------
  import { seedConfig, reducer, initialRuntime, Action } from "./enable-chatbot.ts";
  const [state, dispatch] = useReducer(reducer(seedConfig), initialRuntime(seedConfig));
  --------------------------------
*/

// ===============
// Domain Types
// ===============
export type IntentName =
  | "greeting"
  | "book_meeting"
  | "pricing"
  | "services"
  | "industries"
  | "case_studies"
  | "contact"
  | "fallback";

export type NodeId = string;

export interface Theme {
  primary: string; // #1E3A8A
  secondary: string; // #4B5563
  accent: string; // #10B981
  background: string;
  text: string;
}

export interface Typography {
  fontFamily: string;
}

export interface Branding {
  logoUrl: string;
  avatarUrl?: string;
}

export interface CTA {
  label: string;
  href: string;
  target?: "_blank" | "_self";
  event?: string;
}

export interface UIConfig {
  theme: Theme;
  typography: Typography;
  branding: Branding;
  components?: {
    showPersistentCTA?: boolean;
    persistentCTA?: CTA;
  };
}

export interface IntentDef {
  name: IntentName;
  utterances: string[]; // naive matching; pair with NLU in app
}

export interface Profile {
  role: string | null;
  company: string | null;
  employeeCount: string | null; // e.g., "50-200"
  industry: string | null; // e.g., "Manufacturing"
  primaryPain: string | null;
  timeline: string | null;
  email: string | null;
}

export interface BotMeta {
  name: string;
  description: string;
  goal: string;
  bookingUrl: string;
}

// Node types
export interface BaseNode {
  type: string;
}

export interface MessageNode extends BaseNode {
  type: "message";
  text: string;
  next?: NodeId; // optional linear advance
  quickReplies?: { label: string; next: NodeId; id?: string; state?: Record<string, unknown> }[];
  options?: { label: string; next: NodeId }[];
  attachments?: { type: "link" | "image"; title?: string; href?: string; src?: string }[];
  onEnter?: BotEvent[];
}

export interface ListNode extends BaseNode {
  type: "list";
  title: string;
  items: { label: string; next: NodeId }[];
  footer?: { label: string; next: NodeId };
  onEnter?: BotEvent[];
}

export interface FormField {
  name: keyof Profile | (string & {});
  label: string;
  type: "text" | "email" | "select";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface FormNode extends BaseNode {
  type: "form";
  fields: FormField[];
  submit: { label: string; next: NodeId };
  onSubmit?: BotEvent[];
}

export interface CTANode extends BaseNode {
  type: "cta";
  text: string;
  button: CTA;
  followUp?: { text: string; next: NodeId };
}

export type FlowNode = MessageNode | ListNode | FormNode | CTANode;

export interface Flow {
  start: NodeId;
  nodes: Record<NodeId, FlowNode>;
}

export type RuleExpr = string; // simple expression language interpreted in app

export interface ScoreRule {
  when: RuleExpr; // e.g. "intent==book_meeting" or "profile.employeeCount in [50-500]"
  add: number;
}

export interface Thresholds {
  hot: number;
  warm: number;
}

export interface Scoring {
  rules: ScoreRule[];
  thresholds: Thresholds;
}

export interface Webhooks {
  onQualify?: string; // POST destination for lead payload
  onBooking?: string;
}

export interface Condition {
  id: string;
  if: RuleExpr;
  then: { action: "redirect"; to: NodeId };
}

export interface Logic {
  webhooks?: Webhooks;
  conditions?: Condition[];
}

export interface BotEvent {
  event: string;
}

export interface BotConfig {
  version: string;
  botId: string;
  meta: BotMeta;
  ui: UIConfig;
  settings: {
    typingDelayMs: number;
    handoffEmail?: string;
    defaultRetryLimit?: number;
    nlu?: { enabled: boolean; confidenceThreshold: number };
  };
  intents: IntentDef[];
  state: {
    leadScore: number;
    profile: Profile;
  };
  scoring: Scoring;
  flows: Flow;
  logic?: Logic;
  faqIndex?: { q: string; node: NodeId }[];
  events?: string[];
}

// =====================
// Seed Config (from prior JSON)
// =====================
export const seedConfig: BotConfig = {
  version: "1.0.0",
  botId: "enable-llc-chatbot",
  meta: {
    name: "Enable Solutions Assistant",
    description: "Guides manufacturers/distributors toward a strategy call with Enable",
    goal: "Schedule a meeting via booking link",
    bookingUrl: "https://enable.llc/schedule-meeting",
  },
  ui: {
    theme: {
      primary: "#1E3A8A",
      secondary: "#4B5563",
      accent: "#10B981",
      background: "#FFFFFF",
      text: "#111827",
    },
    typography: {
      fontFamily: "Poppins, Manrope, -apple-system, Segoe UI, Roboto, sans-serif",
    },
    branding: {
      logoUrl: "/assets/enable-logo.svg",
      avatarUrl: "/assets/enable-bot-avatar.svg",
    },
    components: {
      showPersistentCTA: true,
      persistentCTA: {
        label: "Schedule a Strategy Call",
        href: "https://enable.llc/schedule-meeting",
        event: "cta_persistent_click",
      },
    },
  },
  settings: {
    typingDelayMs: 350,
    handoffEmail: "hello@enable.llc",
    defaultRetryLimit: 2,
    nlu: { enabled: true, confidenceThreshold: 0.55 },
  },
  intents: [
    { name: "greeting", utterances: ["hi", "hello", "hey", "start", "get started"] },
    { name: "book_meeting", utterances: ["book", "schedule", "call", "meeting", "demo"] },
    { name: "pricing", utterances: ["price", "pricing", "cost", "budget"] },
    { name: "services", utterances: ["what do you do", "services", "offerings", "zoho", "crm"] },
    { name: "industries", utterances: ["manufacturing", "distributor", "industry"] },
    { name: "case_studies", utterances: ["case study", "results", "proof", "examples"] },
    { name: "contact", utterances: ["contact", "email", "phone", "talk to human"] },
    { name: "fallback", utterances: ["*"] },
  ],
  state: {
    leadScore: 0,
    profile: {
      role: null,
      company: null,
      employeeCount: null,
      industry: null,
      primaryPain: null,
      timeline: null,
      email: null,
    },
  },
  scoring: {
    rules: [
      { when: "intent==book_meeting", add: 40 },
      { when: "node==qual_confirm_yes", add: 20 },
      { when: "profile.employeeCount in [50-500]", add: 10 },
      { when: "profile.industry in ['Manufacturing','Wholesale Distribution']", add: 10 },
      { when: "profile.timeline in ['Now','<30 days']", add: 20 },
      { when: "primaryPain in ['Silos','Long sales cycles','Legacy systems','No pipeline visibility']", add: 10 },
    ],
    thresholds: { hot: 60, warm: 30 },
  },
  flows: {
    start: "node_welcome",
    nodes: {
      node_welcome: {
        type: "message",
        text: "👋 Welcome to Enable Solutions. Looking to make your operation more profitable and competitive with Zoho-powered digital transformation?",
        quickReplies: [
          { label: "Yes—show me how", next: "node_menu" },
          { label: "Exploring options", next: "node_menu" },
          { label: "I have a quick question", next: "node_faq_router" },
        ],
        onEnter: [{ event: "view_welcome" }],
      },
      node_menu: {
        type: "message",
        text: "Great. I can help you: boost sales efficiency, break down silos, and modernize legacy workflows with Zoho CRM. Where would you like to start?",
        options: [
          { label: "What we do", next: "node_services" },
          { label: "Who we help", next: "node_industries" },
          { label: "Common problems we solve", next: "node_problems" },
          { label: "Proof & case studies", next: "node_case_studies" },
          { label: "Pricing & approach", next: "node_pricing" },
          { label: "Book a strategy call", next: "node_book_now" },
        ],
      },
      node_services: {
        type: "message",
        text: "We implement and optimize Zoho CRM and connected systems to streamline operations, shorten sales cycles, and give you clean visibility from lead to cash. Want to see how this maps to your business?",
        quickReplies: [
          { label: "Yes—let's map it", next: "node_qual_intro" },
          { label: "Back", next: "node_menu" },
        ],
        onEnter: [{ event: "view_services" }],
      },
      node_industries: {
        type: "message",
        text: "We focus on manufacturers and wholesale distributors (typically 50–500 employees). If you're moving machines, parts, or components, we're your team.",
        quickReplies: [
          { label: "This sounds like us", next: "node_qual_intro" },
          { label: "Back", next: "node_menu" },
        ],
        onEnter: [{ event: "view_industries" }],
      },
      node_problems: {
        type: "list",
        title: "Which challenge fits you best?",
        items: [
          { label: "Long sales cycles / no pipeline visibility", next: "node_pain_sales" },
          { label: "Legacy/siloed systems slowing us down", next: "node_pain_legacy" },
          { label: "Inventory & supplier quality visibility", next: "node_pain_supply" },
          { label: "Knowledge stuck in people's heads", next: "node_pain_knowledge" },
        ],
        footer: { label: "Back", next: "node_menu" },
        onEnter: [{ event: "view_problems" }],
      },
      node_pain_sales: {
        type: "message",
        text: "We unify lead-to-quote in Zoho, standardize stages, and forecast with confidence—so deals move faster and no opportunities slip.",
        quickReplies: [
          { label: "Let's apply this", next: "node_qual_intro", state: { "profile.primaryPain": "Long sales cycles" } },
          { label: "Back", next: "node_problems" },
        ],
      },
      node_pain_legacy: {
        type: "message",
        text: "We replace disconnected spreadsheets and legacy tools with a single source of truth—clean data, clean handoffs, lower costs.",
        quickReplies: [
          { label: "Let's apply this", next: "node_qual_intro", state: { "profile.primaryPain": "Legacy systems" } },
          { label: "Back", next: "node_problems" },
        ],
      },
      node_pain_supply: {
        type: "message",
        text: "Connect CRM with inventory and supplier quality data to prioritize deals you can fulfill and protect margins.",
        quickReplies: [
          { label: "Let's apply this", next: "node_qual_intro", state: { "profile.primaryPain": "Inventory & supplier visibility" } },
          { label: "Back", next: "node_problems" },
        ],
      },
      node_pain_knowledge: {
        type: "message",
        text: "We capture tribal knowledge into repeatable workflows and dashboards—so the business isn't dependent on a few heroes.",
        quickReplies: [
          { label: "Let's apply this", next: "node_qual_intro", state: { "profile.primaryPain": "Knowledge in heads" } },
          { label: "Back", next: "node_problems" },
        ],
      },
      node_case_studies: {
        type: "message",
        text: "Here's what clients achieve with Enable: faster quoting, higher win rates, and cleaner ops. Want a quick walkthrough tailored to your process?",
        attachments: [
          { type: "link", title: "View Case Studies", href: "/case-studies" },
        ],
        quickReplies: [
          { label: "Yes—book a walkthrough", next: "node_book_now" },
          { label: "Back", next: "node_menu" },
        ],
        onEnter: [{ event: "view_case_studies" }],
      },
      node_pricing: {
        type: "message",
        text: "We scope based on complexity and ROI. Most mid-market engagements start with a discovery sprint, then a phased rollout—so value lands fast without disrupting production.",
        quickReplies: [
          { label: "Discuss scope & budget", next: "node_qual_intro" },
          { label: "Back", next: "node_menu" },
        ],
        onEnter: [{ event: "view_pricing" }],
      },
      node_qual_intro: {
        type: "message",
        text: "A few quick questions so we tailor the strategy:",
        next: "node_qual_form",
      },
      node_qual_form: {
        type: "form",
        fields: [
          { name: "role", label: "Your role", type: "select", options: ["Owner/President", "VP/Director", "Sales/Ops Leader", "IT/Systems", "Other"], required: true },
          { name: "company", label: "Company name", type: "text", placeholder: "Acme Industrial", required: true },
          { name: "employeeCount", label: "Employee count", type: "select", options: ["<50", "50-200", "201-500", "500+"], required: true },
          { name: "industry", label: "Industry", type: "select", options: ["Manufacturing", "Wholesale Distribution", "Other"], required: true },
          { name: "timeline", label: "When do you want results?", type: "select", options: ["Now", "<30 days", "60–90 days", "Just exploring"], required: true },
          { name: "email", label: "Work email (for the meeting invite)", type: "email", required: false },
        ],
        submit: { label: "Continue", next: "node_qual_confirm" },
        onSubmit: [{ event: "qual_form_submitted" }],
      },
      node_qual_confirm: {
        type: "message",
        text: "Thanks. Do you want to book a 30-minute strategy call to review a quick roadmap for your team?",
        quickReplies: [
          { label: "Yes—book my call", next: "node_book_now", id: "qual_confirm_yes" },
          { label: "Not yet—show me more", next: "node_menu" },
        ],
      },
      node_book_now: {
        type: "cta",
        text: "Perfect. Grab a time that works for you:",
        button: { label: "Open Booking Calendar", href: "https://enable.llc/schedule-meeting", target: "_blank", event: "cta_booking_click" },
        followUp: { text: "📩 After booking, you'll get a calendar invite and a short prep note so we can make the most of the call.", next: "node_after_booking" },
      },
      node_after_booking: {
        type: "message",
        text: "While you're here, want a quick checklist to prep for the call?",
        quickReplies: [
          { label: "Yes—send checklist", next: "node_checklist" },
          { label: "No thanks", next: "node_end" },
        ],
      },
      node_checklist: {
        type: "message",
        text: "✅ Top 5 prep items:\n1) Current sales stages\n2) Systems in play (CRM/ERP/Spreadsheets)\n3) 2–3 bottlenecks\n4) KPIs you track\n5) Desired 90-day outcomes",
        quickReplies: [
          { label: "Back to main menu", next: "node_menu" },
          { label: "Done", next: "node_end" },
        ],
      },
      node_faq_router: {
        type: "message",
        text: "Ask me anything—or pick a topic:",
        options: [
          { label: "What does Enable do?", next: "node_services" },
          { label: "Who do you work with?", next: "node_industries" },
          { label: "Problems you solve", next: "node_problems" },
          { label: "Case studies", next: "node_case_studies" },
          { label: "Pricing & approach", next: "node_pricing" },
          { label: "Book a call", next: "node_book_now" },
        ],
      },
      node_end: {
        type: "message",
        text: "Glad I could help today. If anything changes, I'm here—and you can book time anytime.",
        quickReplies: [
          { label: "Book a strategy call", next: "node_book_now" },
          { label: "Main menu", next: "node_menu" },
        ],
        onEnter: [{ event: "conversation_end" }],
      },
    },
  },
  logic: {
    webhooks: { onQualify: "/api/lead/qualify", onBooking: "/api/meeting/booked" },
    conditions: [
      {
        id: "auto_prompt_booking_when_hot",
        if: "leadScore >= thresholds.hot && currentNode != 'node_book_now'",
        then: { action: "redirect", to: "node_book_now" },
      },
    ],
  },
  faqIndex: [
    { q: "What does Enable Solutions do?", node: "node_services" },
    { q: "Who do you work with?", node: "node_industries" },
    { q: "What problems do you solve?", node: "node_problems" },
    { q: "Do you have case studies?", node: "node_case_studies" },
    { q: "How does pricing work?", node: "node_pricing" },
    { q: "How do I book a call?", node: "node_book_now" },
  ],
  events: [
    "view_welcome",
    "view_services",
    "view_industries",
    "view_problems",
    "view_case_studies",
    "view_pricing",
    "qual_form_submitted",
    "cta_booking_click",
    "cta_persistent_click",
    "conversation_end",
  ],
};

// =====================
// Runtime + Reducer
// =====================
export interface RuntimeState {
  config: BotConfig;
  currentNode: NodeId;
  leadScore: number;
  profile: Profile;
  transcript: { from: "bot" | "user"; text: string; node?: NodeId }[];
}

export type Action =
  | { type: "START" }
  | { type: "NAVIGATE"; to: NodeId }
  | { type: "INTENT"; name: IntentName }
  | { type: "ANSWER_FORM"; values: Partial<Profile> }
  | { type: "SET_FIELD"; path: keyof Profile; value: string | null }
  | { type: "SCORE"; reason: string; points: number }
  | { type: "EVENT"; name: string };

export const initialRuntime = (config: BotConfig): RuntimeState => ({
  config,
  currentNode: config.flows.start,
  leadScore: config.state.leadScore,
  profile: { ...config.state.profile },
  transcript: [],
});

// very small expression evaluator for our rule strings
const evalExpr = (
  expr: string,
  ctx: Record<string, unknown>
): boolean => {
  try {
    // extremely limited, safe-ish evaluation using Function with sandboxed args
    // DO NOT pass untrusted server input here in production without a proper parser.
    // eslint-disable-next-line no-new-func
    const fn = new Function(
      "ctx",
      `with (ctx) { return (${expr}); }`
    );
    return !!fn(ctx);
  } catch {
    return false;
  }
};

const applyScoring = (state: RuntimeState, trigger: { intent?: IntentName; nodeId?: string }) => {
  const { scoring } = state.config;
  const ctx = {
    intent: trigger.intent,
    node: trigger.nodeId,
    profile: state.profile,
    primaryPain: state.profile.primaryPain,
    thresholds: scoring.thresholds,
    leadScore: state.leadScore,
  } as Record<string, unknown>;
  scoring.rules.forEach((r) => {
    if (evalExpr(r.when, ctx)) {
      state.leadScore += r.add;
    }
  });
};

const applyConditions = (state: RuntimeState) => {
  const conditions = state.config.logic?.conditions || [];
  for (const c of conditions) {
    const ctx = {
      currentNode: state.currentNode,
      thresholds: state.config.scoring.thresholds,
      leadScore: state.leadScore,
      profile: state.profile,
    } as Record<string, unknown>;
    if (evalExpr(c.if, ctx)) {
      if (c.then.action === "redirect") {
        state.currentNode = c.then.to;
      }
      break;
    }
  }
};

export const reducer = (config: BotConfig) => (
  prev: RuntimeState,
  action: Action
): RuntimeState => {
  const state: RuntimeState = { ...prev, config, profile: { ...prev.profile }, transcript: [...prev.transcript] };
  switch (action.type) {
    case "START": {
      state.currentNode = config.flows.start;
      return state;
    }
    case "NAVIGATE": {
      state.currentNode = action.to;
      applyScoring(state, { nodeId: action.to });
      applyConditions(state);
      return state;
    }
    case "INTENT": {
      // naive: bump score and route if intent is book_meeting
      applyScoring(state, { intent: action.name });
      if (action.name === "book_meeting") {
        state.currentNode = "node_book_now";
      }
      applyConditions(state);
      return state;
    }
    case "ANSWER_FORM": {
      Object.assign(state.profile, action.values);
      // webhook could be fired in app based on this event
      return state;
    }
    case "SET_FIELD": {
      (state.profile as any)[action.path] = action.value;
      return state;
    }
    case "SCORE": {
      state.leadScore += action.points;
      return state;
    }
    case "EVENT": {
      // no-op here, but app can log/emit
      return state;
    }
    default:
      return state;
  }
};

// =====================
// Helper selectors
// =====================
export const getCurrentNode = (st: RuntimeState): FlowNode => st.config.flows.nodes[st.currentNode];

export const isHotLead = (st: RuntimeState) => st.leadScore >= st.config.scoring.thresholds.hot;
export const isWarmLead = (st: RuntimeState) => st.leadScore >= st.config.scoring.thresholds.warm;

// =====================
// Minimal demo driver (optional)
// =====================
export const demoNext = (st: RuntimeState, label: string): RuntimeState => {
  const node = getCurrentNode(st);
  if (node.type === "message" && node.quickReplies) {
    const qr = node.quickReplies.find((q) => q.label === label);
    if (qr) {
      // apply state mutations encoded in quick reply
      if (qr.state) {
        Object.entries(qr.state).forEach(([k, v]) => {
          // support dot-paths like "profile.primaryPain"
          if (k.startsWith("profile.")) {
            const key = k.split(".")[1] as keyof Profile;
            (st.profile as any)[key] = v as any;
          }
        });
      }
      return reducer(st.config)(st, { type: "NAVIGATE", to: qr.next });
    }
  }
  if (node.type === "message" && node.options) {
    const opt = node.options.find((o) => o.label === label);
    if (opt) return reducer(st.config)(st, { type: "NAVIGATE", to: opt.next });
  }
  return st; // no change
};