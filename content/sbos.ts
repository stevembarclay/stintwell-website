import type { Feature } from "@/components/sections/FeatureGrid";
import type { MethodStep } from "@/components/sections/MethodologySteps";
import type { ModuleItem } from "@/components/sections/ModuleGrid";
import type { UseCase } from "@/components/sections/UseCaseTabs";

export const sbosHero = {
  eyebrow: "Operational Infrastructure",
  title: "The Operating System for High-Performance Businesses",
  description:
    "Start with your SOP library. Document your operations, align your team, and build a business that runs without you.",
  subcopy:
    "As you document, SBOS surfaces structural gaps and guides you through a health assessment that prescribes exactly what to fix — SOPs, scorecards, and meeting cadences matched to your specific weak points.",
};

export const sbosFeatures: Feature[] = [
  {
    title: "AI-Assisted Creation",
    description:
      "Describe your process in plain English, get a structured SOP draft in seconds. No templates needed.",
    meta: "SOP creation",
  },
  {
    title: "Lifecycle Management",
    description:
      "Track SOPs from draft to published. Know what needs review. Never let critical processes go stale.",
    meta: "Ownership + reviews",
  },
  {
    title: "Team Collaboration",
    description:
      "Assign owners, set approvers, manage departments and roles. Everyone knows who does what.",
    meta: "Roles + accountability",
  },
];

export const sbosUseCases: UseCase[] = [
  {
    id: "owner",
    label: "Business Owners",
    eyebrow: "For Founders & Operators",
    title: "From Diagnosis to Systems -- In Minutes",
    description:
      "SBOS shows you exactly what's broken and installs the fix.",
    bullets: [
      {
        title: "Blind Spot Detection",
        description: "Surface the structural issues you can't see from inside the business.",
      },
      {
        title: "Sequenced Roadmap",
        description: "Know exactly what to fix first. No more random projects.",
      },
      {
        title: "Prescription Activation",
        description:
          "SOPs, scorecards, and meeting cadences installed automatically based on your assessment.",
      },
    ],
    cta: { label: "Get Started Free", href: "https://sbos.stintwell.com" },
  },
  {
    id: "ma",
    label: "M&A Due Diligence",
    eyebrow: "For Acquirers & Brokers",
    title: "Know What You're Buying -- Before You Buy It",
    description:
      "Financials tell you what happened. SBOS tells you what will happen when you take over.",
    bullets: [
      {
        title: "Hidden Risk Exposure",
        description:
          "Surface owner dependency, revenue concentration, and operational fragility before LOI.",
      },
      {
        title: "Stabilization Estimate",
        description:
          "Know the days and dollars required to reach operational stability post-close.",
      },
      {
        title: "Deal Recommendation",
        description:
          "Clear guidance: Proceed, Proceed with Caution, High Risk, or Walk Away.",
      },
    ],
    cta: { label: "Get Started Free", href: "https://sbos.stintwell.com" },
  },
  {
    id: "operator",
    label: "Portfolio Operators",
    eyebrow: "For Consultants, Coaches & Operators",
    title: "Your Entire Client Portfolio -- One Dashboard",
    description:
      "You manage multiple businesses. SBOS gives you visibility across all of them.",
    bullets: [
      {
        title: "Portfolio Dashboard",
        description:
          "See all client businesses ranked by maturity score, red flags, and phase.",
      },
      {
        title: "Proactive Alerts",
        description:
          "Know which client needs attention before they call you in crisis.",
      },
      {
        title: "Progress Tracking",
        description:
          "Monitor progression (or regression) over time with historical data.",
      },
    ],
    cta: { label: "Get Started Free", href: "https://sbos.stintwell.com" },
  },
];

export const sbosMethodology: MethodStep[] = [
  {
    title: "Start Free",
    description:
      "Sign up and build your first SOP immediately. No waitlist, no scan required — just start documenting.",
  },
  {
    title: "Document Your Operations",
    description:
      "Use AI-assisted creation to capture critical processes fast. Add team members and expand your library on the paid tier.",
  },
  {
    title: "Take the Assessment",
    description:
      "Once you're documenting, SBOS guides you through a business health check that surfaces structural gaps across 5 pillars.",
  },
  {
    title: "Activate the System",
    description:
      "Assessment results prescribe exactly what to fix. Upgrade to Pro to unlock all 9 modules and the full operating system.",
  },
];

export const sbosModules: ModuleItem[] = [
  {
    title: "SOP Library",
    description:
      "Rework is not operational inefficiency — it is a structural failure signal. SOPs are not created after a problem. They are created before one.",
    detail: "Process builder, version control, role-based access",
  },
  {
    title: "Financial Pulse",
    description:
      "Real-time cash flow visibility. Track revenue, expenses, and financial health without switching tools.",
    detail: "Cash flow tracking, revenue monitoring, financial alerts",
  },
  {
    title: "Business Health Assessment",
    description:
      "SBOS does not ask what is broken. It asks what must be true for the business to function without chaos.",
    detail: "Maturity scoring, red flag detection, sequenced recommendations",
  },
  {
    title: "KPI Scorecards",
    description:
      "A KPI without an owner is a number. A KPI without a target is a wish. A KPI without weekly discipline is decoration.",
    detail: "Custom dashboards, goal tracking, automated alerts",
  },
  {
    title: "Roles & People",
    description:
      "Make org structure visible. Define roles, responsibilities, and eliminate confusion about who owns what.",
    detail: "Org chart builder, role definitions, succession planning",
  },
  {
    title: "Leadership OS",
    description:
      "A business that depends on the founder's memory for accountability has a single point of failure with a title.",
    detail: "Meeting templates, delegation tracker, decision rights mapping",
  },
  {
    title: "Project Execution",
    description:
      "Track strategic initiatives from idea to completion. Milestone management and progress visibility.",
    detail: "Initiative tracking, milestone management, project dashboards",
  },
  {
    title: "Customer Retention",
    description:
      "Proactive customer experience management. Identify at-risk accounts before they churn.",
    detail: "Satisfaction tracking, churn prevention, engagement monitoring",
    comingSoon: true,
  },
  {
    title: "Tech Stack",
    description:
      "Connect your existing tools. Native integrations and Zapier workflows eliminate context-switching.",
    detail: "Native integrations, Zapier workflows, API access",
    comingSoon: true,
  },
];

export const sbosPrinciples = [
  {
    title: "Diagnosis Before Execution",
    description:
      "Other frameworks assume you're ready to execute. SBOS proves (or disproves) readiness before you start building.",
  },
  {
    title: "Phase Gating",
    description:
      "Stabilize -> Optimize -> Scale. You can't skip steps. SBOS enforces sequence so you don't build on a broken foundation.",
  },
  {
    title: "Structural, Not Cultural",
    description:
      "Most frameworks rely on behavior change. SBOS installs systems that persist regardless of individuals.",
  },
];

export type PricingTier = {
  key: "free" | "starter" | "pro";
  name: string;
  tagline: string;
  price: {
    monthly: number;
    annualMonthly: number;
    annualTotal: number;
  };
  isFree?: boolean;
  featured?: boolean;
  badge?: string;
  limits: {
    users: string;
    sops: string;
    aiCalls: string;
    aiModel: string;
  };
  modules: string[];
  cta: {
    label: string;
    href: string;
  };
};

export const sbosPricingTiers: PricingTier[] = [
  {
    key: "free",
    name: "Free",
    tagline: "Get the work out of your head and into a system.",
    isFree: true,
    price: { monthly: 0, annualMonthly: 0, annualTotal: 0 },
    limits: {
      users: "1 user",
      sops: "Up to 15 SOPs",
      aiCalls: "50 AI calls/mo",
      aiModel: "GPT-4o mini",
    },
    modules: ["SOP Library", "Business Health Assessment"],
    cta: { label: "Start Free", href: "https://sbos.stintwell.com" },
  },
  {
    key: "starter",
    name: "Starter",
    tagline: "Scale the team. Document everything.",
    featured: true,
    badge: "Most Popular",
    price: { monthly: 199, annualMonthly: 166, annualTotal: 1990 },
    limits: {
      users: "Up to 5 users",
      sops: "Unlimited SOPs",
      aiCalls: "Unlimited AI",
      aiModel: "Claude Sonnet",
    },
    modules: ["SOP Library", "Business Health Assessment"],
    cta: { label: "Start Free", href: "https://sbos.stintwell.com" },
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Run the full operating system.",
    price: { monthly: 399, annualMonthly: 332, annualTotal: 3990 },
    limits: {
      users: "Unlimited users",
      sops: "Unlimited SOPs",
      aiCalls: "Unlimited AI",
      aiModel: "Claude Sonnet",
    },
    modules: ["All 9 modules", "Full platform"],
    cta: { label: "Get Started", href: "https://sbos.stintwell.com" },
  },
];

export const sbosPricingNote =
  "The Business Health Assessment is included on every plan. It surfaces structural gaps across your entire operation — financials, leadership, team, and more. Pro gives you the modules to act on what it finds.";
