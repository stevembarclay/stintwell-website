# ADR: Migrate stintwell.com to Vercel

**Date:** 2026-02-02
**Status:** Accepted
**Context:** Production hosting for stintwell-website

## Decision

Moved production hosting of stintwell.com from GitHub Pages to Vercel, and consolidated all Stintwell subdomains under the same Vercel team.

## Context

The Stintwell marketing site was previously served via GitHub Pages (A records pointing to `185.199.x.x`). The site migrated to Next.js 14 with static export, making Vercel a natural fit for builds, previews, and CDN. Other Stintwell projects (Substantia, SBOS Platform) were already on Vercel.

## Changes

### DNS (GoDaddy)

| Type | Name | Value | Purpose |
|------|------|-------|---------|
| `A` | `@` | `76.76.21.21` | Apex domain → Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com` | www redirect → Vercel |

Old GitHub Pages A records (`185.199.108-111.153`) were removed.

### Vercel Project: `stintwell-website`

- **Domains:** `stintwell.com`, `www.stintwell.com`
- **Build:** `next build` (static export)
- **GitHub repo:** `stevembarclay/stintwell-website` (auto-connected)

### Subdomain Reassignment

Removing the apex domain from Vercel temporarily dropped subdomain assignments. These were re-added:

| Subdomain | Project |
|-----------|---------|
| `compliance.stintwell.com` | `substantia` |
| `sbos.stintwell.com` | `sbos-platform` |

## Consequences

- All Stintwell properties now deploy via Vercel with automatic SSL, CDN, and preview deployments on PRs.
- GitHub Pages is no longer used. The old GitHub Pages config (if any CNAME file exists in the repo) can be removed.
- Future deploys happen automatically on push to `main` via the Vercel-GitHub integration.
