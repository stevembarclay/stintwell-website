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
      "Describe your process in plain English, upload an existing document, or start from 135+ industry templates. Structured SOP in seconds.",
    meta: "AI creation + bulk import",
  },
  {
    title: "Lifecycle Management",
    description:
      "Track SOPs from draft through approval to published. Know what needs review. Never let a critical process go stale.",
    meta: "Approvals + version control",
  },
  {
    title: "Team Accountability",
    description:
      "Assign owners, set approvers, manage departments and roles. Every process has a name on it.",
    meta: "Roles + ownership",
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
      "Sign up and build your first SOP immediately. No waitlist — just start documenting.",
  },
  {
    title: "Document Your Operations",
    description:
      "Use AI-assisted creation, bulk import, or 135+ templates to capture critical processes fast. Add team members on a paid plan.",
  },
  {
    title: "Take the Assessment",
    description:
      "SBOS guides you through a business health check across 5 pillars — scoring maturity, surfacing red flags, and sequencing exactly what to fix.",
  },
  {
    title: "Activate the System",
    description:
      "Assessment results prescribe exactly what to fix and auto-install your first SOPs, scorecards, and meeting cadences. Upgrade to unlock the full operating system.",
  },
];

export const sbosModules: ModuleItem[] = [
  {
    title: "SOP Library",
    description:
      "Rework is not operational inefficiency — it is a structural failure signal. SOPs are not created after a problem. They are created before one.",
    detail: "AI creation, bulk import, 135+ templates, approval workflows, version control",
  },
  {
    title: "Business Health Assessment",
    description:
      "SBOS does not ask what is broken. It asks what must be true for the business to function without chaos.",
    detail: "Maturity scoring, red flag detection, auto-installed prescriptions",
  },
  {
    title: "Financial Pulse",
    description:
      "Most operators find out they have a cash flow problem after it becomes a crisis. Financial Pulse makes the problem visible while there's still time to act.",
    detail: "13-week cash flow forecast, AR aging, unit economics, monthly P&L",
  },
  {
    title: "KPI Scorecards",
    description:
      "A KPI without an owner is a number. A KPI without a target is a wish. A KPI without weekly discipline is decoration.",
    detail: "KPI Tree, weekly green/yellow/red tracking, quarterly priorities, trend analysis",
  },
  {
    title: "Roles & People",
    description:
      "Make org structure visible. Define roles, responsibilities, and eliminate the confusion that comes when everyone thinks someone else owns it.",
    detail: "AI-generated job descriptions, org chart, hiring scorecards, seat-to-role mapping",
  },
  {
    title: "Leadership OS",
    description:
      "A business that depends on the founder's memory for accountability has a single point of failure with a title.",
    detail: "Weekly sync agendas, RACI matrix, delegation tracker, compliance monitoring",
  },
  {
    title: "Project Execution",
    description:
      "Strategic initiatives die in email threads and spreadsheets. Project Execution surfaces blockers before they become failures.",
    detail: "Milestone tracking, risk flags, owner accountability, leadership snapshots",
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
  features: string[];
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
    features: [
      "1 user",
      "Up to 15 SOPs",
      "50 AI calls/month (GPT-4o mini)",
      "SOP Library — process builder & version control",
      "Business Health Assessment — maturity scoring & red flag detection",
      "Sequenced fix recommendations",
    ],
    cta: { label: "Start Free", href: "https://sbos.stintwell.com" },
  },
  {
    key: "starter",
    name: "Starter",
    tagline: "Scale the team. Document everything.",
    price: { monthly: 199, annualMonthly: 166, annualTotal: 1990 },
    features: [
      "Up to 5 users",
      "Unlimited SOPs",
      "Unlimited AI (Claude Sonnet)",
      "SOP Library — full lifecycle, role-based access & approvals",
      "Business Health Assessment — full scoring across all 5 pillars",
      "Sequenced fix recommendations",
    ],
    cta: { label: "Start Free", href: "https://sbos.stintwell.com" },
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Run the full operating system.",
    featured: true,
    badge: "Most Popular",
    price: { monthly: 399, annualMonthly: 332, annualTotal: 3990 },
    features: [
      "Unlimited users",
      "Unlimited SOPs",
      "Unlimited AI (Claude Sonnet)",
      "All 9 SBOS modules",
      "SOP Library — full lifecycle, role-based access & approvals",
      "Business Health Assessment — full scoring across all 5 pillars",
      "Financial Pulse — cash flow tracking & revenue monitoring",
      "KPI Scorecards — custom dashboards, goals & automated alerts",
      "Roles & People — org chart, role definitions & succession planning",
      "Leadership OS — meeting templates, delegation & decision rights",
      "Project Execution — initiative tracking & milestone management",
      "Customer Retention (coming soon)",
      "Tech Stack integrations (coming soon)",
    ],
    cta: { label: "Get Started", href: "https://sbos.stintwell.com" },
  },
];

export const sbosPricingNote =
  "The Business Health Assessment is included on every plan. It scores your business across 5 pillars, surfaces red flags, and auto-installs your first prescriptions. Pro gives you every module to act on what it finds.";
