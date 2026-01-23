# SBOS Core Modules - Official Reference
**Last Updated:** 2026-01-23
**Source of Truth:** `/Users/stevenbarclay/dev/sbos-platform/lib/config/modules.ts`

---

## The 9 SBOS Core Modules

| # | Module Code | Display Name | Short Description |
|---|-------------|--------------|-------------------|
| 1 | `sops` | **SOP Library** | Document every critical process |
| 2 | `financial` | **Financial Pulse** | Real-time cash flow visibility |
| 3 | `assessment` | **Business Health Assessment** | 15-minute diagnostic across 5 pillars |
| 4 | `kpi` | **KPI Scorecards** | Track leading and lagging indicators |
| 5 | `people` | **Roles & People** | Org structure, role definitions |
| 6 | `leadership` | **Leadership OS** | Meetings, delegation, decision rights |
| 7 | `projects` | **Project Execution** | Strategic initiative tracking |
| 8 | `referrals` | **Customer Retention** | CX management, churn prevention |
| 9 | (systems) | **Tech Stack** | Integrations with PM software |

---

## Module Details

### 1. SOP Library (`sops`)
**Full Name:** Standard Operating Procedures Library
**Purpose:** Stop running business from memory. Document critical processes.
**Key Features:**
- PM-specific templates
- Step-by-step builder
- Version control

---

### 2. Financial Pulse (`financial`)
**Purpose:** Real-time cash flow visibility without logging into QuickBooks
**Key Features:**
- Cash flow tracking
- Revenue monitoring
- Financial health alerts

---

### 3. Business Health Assessment (`assessment`)
**Purpose:** 15-minute diagnostic to identify operational weak points
**Key Features:**
- 5-pillar assessment
- Operational Maturity Score
- Gap analysis with red flags

---

### 4. KPI Scorecards (`kpi`)
**Purpose:** Track the 5-10 metrics that actually matter
**Key Features:**
- Custom dashboards
- Leading and lagging indicators
- Goal tracking with automated alerts

---

### 5. Roles & People (`people`)
**Purpose:** Make org structure visible, eliminate role confusion
**Key Features:**
- Org chart builder
- Role definitions
- Succession planning

---

### 6. Leadership OS (`leadership`)
**Purpose:** Turn meetings into decision machines, delegate with clarity
**Key Features:**
- Meeting agendas and templates
- Delegation framework
- Decision rights mapping
- Accountability tracking

**Note:** This module consolidates what was previously listed separately as "Meetings" and "Delegation Tracker" in incorrect marketing materials.

---

### 7. Project Execution (`projects`)
**Purpose:** Track strategic initiatives from idea to completion
**Key Features:**
- Initiative tracking
- Milestone management
- Project dashboards

---

### 8. Customer Retention (`referrals`)
**Code Name:** `referrals` (legacy)
**Display Name:** Customer Retention
**Purpose:** Proactive CX management to reduce churn
**Key Features:**
- Satisfaction tracking
- Churn prevention
- Engagement monitoring
- At-risk account identification

---

### 9. Tech Stack (systems & integrations)
**Purpose:** Connect PM software, eliminate context-switching
**Key Features:**
- Native integrations (Buildium, Rent Manager, QuickBooks, Slack)
- Zapier workflows
- API access

---

## What's NOT a Core Module

These were incorrectly listed in marketing materials:
- ❌ **Meetings** - Part of Leadership OS
- ❌ **Org Charts** - Part of Roles & People
- ❌ **Delegation Tracker** - Part of Leadership OS
- ❌ **Task Manager** - Not a module (fabricated)
- ❌ **Document Library** - Not a module (fabricated)
- ❌ **Integrations** - Should be called "Tech Stack"

---

## Code Source

From `/Users/stevenbarclay/dev/sbos-platform/lib/config/modules.ts`:

```typescript
export const CORE_SBOS_MODULES: readonly Module[] = [
  'sops',
  'financial',
  'assessment',
  'kpi',
  'people',
  'leadership',
  'projects',
  'referrals',
] as const
```

**Note:** Code lists 8 modules. The 9th module "Tech Stack" (systems & integrations) is part of the platform offering but may be represented differently in the codebase.

---

## Display Names Source

From `/Users/stevenbarclay/dev/sbos-platform/lib/help/context/moduleDescriptions.ts`:

- **sops** → "SOP Library"
- **financial** → "Financial Pulse"
- **assessment** → "Business Health Assessment"
- **kpi** → "KPI Scorecards"
- **people** → "People & Roles" (listed as "Roles & People" on website)
- **leadership** → "Leadership OS"
- **projects** → "Project Execution"
- **referrals** → (No friendly name in code, website uses "Customer Retention")

---

## Usage Guidelines

### For Marketing Copy
Always use the **Display Names** in customer-facing content:
- ✅ "SOP Library" (not "SOPs")
- ✅ "Financial Pulse" (not "Financial")
- ✅ "Business Health Assessment" (not "Assessment")
- ✅ "KPI Scorecards" (not "KPIs")
- ✅ "Roles & People" (not "People" or "Org Charts")
- ✅ "Leadership OS" (not "Meetings" or "Delegation")
- ✅ "Project Execution" (not "Projects")
- ✅ "Customer Retention" (not "Referrals")
- ✅ "Tech Stack" (not "Integrations")

### For Development
Use the **Module Codes** in code:
```typescript
'sops' | 'financial' | 'assessment' | 'kpi' |
'people' | 'leadership' | 'projects' | 'referrals'
```

---

## Current Usage

### Live on stintwell.com
- **Property Management Landing Page:** Uses all 9 display names correctly
- **File:** `property-management.html`
- **Grid:** 3x3 layout for 9 modules
- **URL:** https://stintwell.com/property-management.html

### Needs Updating
- **Marketing Machine:** `/Users/stevenbarclay/dev/marketing-machine/projects/sbos-v4/`
- **Issue:** Still lists 8 incorrect module names
- **Action Required:** Update all marketing copy to match this reference

---

## ADR Context

This reference document supports the Architecture Decision Record (ADR) being created to officially confirm SBOS core module names across all systems.

**Recommendation:** Lock these 9 module names as the definitive list and update all marketing materials, documentation, and code to match.

---

**Questions?** Contact: Steven Barclay
**Related Docs:** See `2026-01-23-pm-landing-page-build.md` for full build context
