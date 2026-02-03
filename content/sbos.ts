import type { Feature } from "@/components/sections/FeatureGrid";
import type { MethodStep } from "@/components/sections/MethodologySteps";
import type { ModuleItem } from "@/components/sections/ModuleGrid";
import type { UseCase } from "@/components/sections/UseCaseTabs";

export const sbosHero = {
  eyebrow: "Operational Infrastructure",
  title: "The Operating System for High-Performance Businesses",
  description:
    "Answer 20 questions. Get your structural health score. Activate the systems to fix what's broken.",
  subcopy:
    "SBOS surfaces hidden operational risk and installs prescriptions automatically -- SOPs, scorecards, and meeting cadences matched to your specific weak points.",
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
    cta: { label: "Start M&A Assessment", href: "#signup" },
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
    cta: { label: "Request Portfolio Access", href: "#signup" },
  },
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
    cta: { label: "Take the Quick Scan", href: "#signup" },
  },
];

export const sbosMethodology: MethodStep[] = [
  {
    title: "Take the Scan",
    description:
      "Answer questions across 5 pillars: Financial, Operational, Leadership, Commercial, Governance.",
  },
  {
    title: "Get Your Index",
    description:
      "Receive your SBOS Index: maturity score (1-5), red flags by severity, and phase assignment.",
  },
  {
    title: "See Your Roadmap",
    description:
      "Understand exactly what to fix first based on severity and sequence logic.",
  },
  {
    title: "Activate Prescriptions",
    description:
      "One click installs SOPs, scorecards, and meeting cadences based on your specific flags.",
  },
];

export const sbosModules: ModuleItem[] = [
  {
    title: "SOP Library",
    description:
      "Stop running your business from memory. Document every critical process with step-by-step templates.",
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
      "15-minute assessment across 5 pillars. Identifies structural gaps and generates your roadmap.",
    detail: "Maturity scoring, red flag detection, sequenced recommendations",
  },
  {
    title: "KPI Scorecards",
    description:
      "Track the 5-10 metrics that actually matter. Leading and lagging indicators in one view.",
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
      "Turn meetings into decision machines. Structured agendas, delegation framework, accountability tracking.",
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
  },
  {
    title: "Tech Stack",
    description:
      "Connect your existing tools. Native integrations and Zapier workflows eliminate context-switching.",
    detail: "Native integrations, Zapier workflows, API access",
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
