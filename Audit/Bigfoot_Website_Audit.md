# Bigfoot Adventures — Website Audit
Prepared by Trance AI · 2026-09-14 · Scope: live site (bigfoot-adventures.com) + our draft (Website/bigfoot-site)

Severity: **P0** = blocks the agent-buyer trust/conversion job entirely · **P1** = materially weakens it · **P2** = polish/nice-to-have.

---

## 1. Information Architecture

| # | Finding | Sev | Fix in rebuild |
|---|---|---|---|
| IA-1 | Live nav (Destinations · Holiday Packages · Deals & Offers · Transport Solutions) has zero path for a foreign travel agent. A Japanese outbound tour-operator PM landing here has no idea Bigfoot even does ground handling for trade. | **P0** | New primary nav leads with **For Travel Agents**; consumer path (Plan a Trip) demoted to secondary, not removed. |
| IA-2 | Our own draft buries the one B2B section ("Trade") second-to-last on a single scrolling page — an agent has to scroll past five consumer sections to find anything relevant to them. | **P0** | Split into a real page tree: Home · For Travel Agents (hub) · Ground Handling Services · Fleet · Guides · Destinations · Reviews · About/Company Profile · Request a Rate · Plan a Trip · Nairobi Day Tours · Contact · Privacy/Terms. |
| IA-3 | No downloadable/printable company profile exists anywhere (live or draft) — agents doing due diligence before a partnership call typically want a one-pager to circulate internally. | **P1** | `/agent-profile` — print-optimized HTML, "Save as PDF" via browser print. |
| IA-4 | `CountryMap` component asserts a Kenya/Uganda/**South Africa** footprint. South Africa is a different region entirely and unsupported by any research — likely a stale placeholder. | **P1** | Rebuilt as Destinations page: Kenya asserted (confirmed HQ/operations), Tanzania/Uganda/Rwanda marked "available on request — [CLIENT TO CONFIRM]," nothing overclaimed. |

## 2. UX & Conversion

| # | Finding | Sev | Fix |
|---|---|---|---|
| UX-1 | Agent's 5-second test ("can I trust these people with my clients?") fails on both live and draft sites — no capacities, no SLA, no licence proof above the fold anywhere agent-relevant. | **P0** | New Hero leads with the trust claim + a same-business-day response SLA, both already true (confirmed via Trade section copy and live-site data) but never surfaced early. |
| UX-2 | No distinct rate-request flow — the draft's single "Travel Trade & Agents" form is a generic contact box with no fields for group size, service type, or source market, which agents need to give a useful first message. | **P1** | `/request-a-rate` — structured form (agency, country, service type checkboxes, group size, dates/season, message) that assembles a Zoho-ready payload. |
| UX-3 | No WhatsApp entry point on either site despite Bigfoot actively using WhatsApp Business and it being named as a channel in the Implementation Plan. | **P1** | Global WhatsApp floating action button (real number, `wa.me/254722972374`), tracked as an analytics event. |
| UX-4 | No language cues at all for target source markets (India, Japan, Russia, US, Spain) — a JA or RU-speaking agent has no signal this operator has ever thought about them. | **P1** | `/ja`, `/es`, `/ru` agent-summary stub pages (marked draft), linked from the agent hub. |
| UX-5 | Live site shows two sections that render "Loading deals..." / "Loading destinations..." literally in fetched markup — a broken or slow client-side data fetch a visitor may see mid-load. | **P1 (live site only, informational — out of our write scope)** | Documented for whoever owns bigfoot-adventures.com; not fixable from this repo. |
| UX-6 | No response-time promise stated anywhere on either site. | **P2** | "Same business day" promise now appears in Trade stats, Hero, and Request-a-Rate confirmation state. |

## 3. Copy

| # | Finding | Sev | Fix |
|---|---|---|---|
| CP-1 | Live site hero ("Breathtaking Safari Adventures") and most body copy is generic safari-romance language with no specificity — could describe almost any Kenyan operator. | **P0** | Full rewrite for the agent buyer — see `Audit/copy-deck-v2.md`. Specific capacities (4–25 pax), SLA (same business day), guide languages, vehicle specs replace romance copy throughout the new B2B pages. |
| CP-2 | Draft's existing consumer copy ("We Own Every Mile We Drive") is actually strong and ownable — it should not be thrown away, just demoted to the secondary consumer CTA rather than the primary framing. | **P1** | Kept verbatim as the Plan-a-Trip page's framing; Home hero rewritten B2B-first. |
| CP-3 | No AI-tics found in current draft copy (no "unlock," "elevate," "seamless synergy," em-dash pileups) — copy voice is already good. Preserve this discipline in all new copy. | **P2 (positive finding)** | New pages written in the same direct, specific register. |

## 4. Design

| # | Finding | Sev | Fix |
|---|---|---|---|
| DS-1 | Palette discipline: confirmed correct on the draft (red/ink/paper from the real logo, no Trance purple). Live site uses a different, unrelated visual system entirely (not ours to fix). | **P2** | No change needed to draft palette; carried forward as-is into every new page. |
| DS-2 | Satoshi font: confirmed genuinely loading via `next/font/local` in the current draft (checked `app/fonts.ts` + build output) — the historical "silently falls back to system font" bug from the old static-HTML build is not present in this codebase. | **P2 (verified fixed)** | No action; noted so it's tracked as closed, not re-litigated. |
| DS-3 | Mobile hero legibility (a recurring bug in git history — three separate rebuilds fixing text contrast/cropping) — re-verified in current draft: gradient scrim + text-shadow + `object-position` crop are all present and correct. | **P2 (verified fixed)** | No action. |
| DS-4 | No component exists yet for the new page types (services grid, destination building-blocks, agent-hub trust bar, printable profile) — building these net-new is architecture work, not a "bug," but flagged so scope is visible. | **P1** | Built in Phase 2 as `app/components/ui.tsx` (shared primitives) + `app/components/AgentSections.tsx` (new B2B components), reusing `Reveal`/`Eyebrow`/`ArrowBtn` from the existing system rather than inventing a second visual language. |

## 5. Performance

| # | Finding | Sev | Fix |
|---|---|---|---|
| PF-1 | Assets folder contains `desktop_cinematic.mp4` / `mobile_cinematic.mp4` never actually used as a hero video in the current draft (hero uses a static WebP). | **P2** | Decision: keep poster-image hero, do not add autoplay video — it would add LCP cost for the exact audience (agents skimming quickly) least likely to want a cinematic wait. Considered-and-rejected, not an oversight. |
| PF-2 | All images already WebP-compressed and served via `next/image` with `unoptimized:true` (required for static export) — no further compression pipeline needed, but `unoptimized` means no responsive `srcset` variants are generated at build time. | **P1** | Source images are pre-sized/compressed manually (established practice); acceptable trade-off for a static export with a small, curated image set. Flagged, not changed, to avoid breaking the GitHub Pages-compatible export config. |
| PF-3 | Font strategy: self-hosted Satoshi via `next/font/local`, 4 weights — correct, no external font request, no CLS risk from a render-blocking Google Fonts call. | **P2 (verified good)** | No action. |

## 6. SEO

| # | Finding | Sev | Fix |
|---|---|---|---|
| SEO-1 | No per-page metadata exists — the entire draft is one route (`/`) with one `<title>`/description in `layout.tsx`. | **P0** | Every new route gets its own `export const metadata` (title, description) targeting its specific keyword intent. |
| SEO-2 | No structured data (schema.org) anywhere in the draft. | **P0** | `TravelAgency`/`LocalBusiness` JSON-LD on Home/About, `FAQPage` JSON-LD on the FAQ section, `Review` JSON-LD on the Reviews page. |
| SEO-3 | No `sitemap.xml` or `robots.txt`. | **P1** | `app/sitemap.ts` and `app/robots.ts` added (Next.js metadata-file routes, static-export compatible). |
| SEO-4 | No B2B keyword targeting anywhere ("Kenya ground handler," "Kenya DMC," "destination management company Nairobi," "safari ground handling East Africa"). | **P1** | Baked into `/for-travel-agents` and `/services` metadata + on-page H1/H2s and body copy naturally, not keyword-stuffed. |
| SEO-5 | No hreflang / language-alternate signals for the new JA/ES/RU stub pages. | **P2** | `alternates.languages` added to Home metadata pointing at the three stub routes. |

## 7. Accessibility (WCAG AA)

| # | Finding | Sev | Fix |
|---|---|---|---|
| A11Y-1 | Skip-to-content link present and correctly implemented in `layout.tsx` — good baseline. | **P2 (verified good)** | Kept as-is. |
| A11Y-2 | Form fields use `<label>` wrapping inputs correctly — accessible name is present. | **P2 (verified good)** | Extended into new forms unchanged. |
| A11Y-3 | Mobile nav toggle button has `aria-label="Menu"` but doesn't announce open/closed state to screen readers (no `aria-expanded`). | **P1** | Added `aria-expanded={open}` in Nav rebuild. |
| A11Y-4 | Reduced-motion is respected globally (`useReducedMotion` + CSS media query) — good baseline, kept. | **P2 (verified good)** | No change. |
| A11Y-5 | New WhatsApp floating action button and any new icon-only buttons must carry `aria-label`. | **P1** | Applied in implementation. |

## 8. Security

| # | Finding | Sev | Fix |
|---|---|---|---|
| SEC-1 | No secrets found in the repo (checked `.gitignore`, no `.env` committed). | **P2 (verified good)** | No action. |
| SEC-2 | No security headers possible from a static GitHub Pages export (no server config surface). | **P1** | Documented per-host header config (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) in `Handoff/Deployment_Runbook.md` for whichever host is chosen at deploy time. |
| SEC-3 | Forms have no spam/abuse protection designed yet (moot currently since forms don't submit anywhere, but will matter once wired to Zoho). | **P1** | Honeypot field + client-side basic validation added now; real rate-limiting/CAPTCHA-equivalent needs to live at the Zoho Forms/webhook layer once wired up — documented. |
| SEC-4 | `npm audit`: 1 critical severity vulnerability in a transitive dependency, flagged in the prior session, not yet triaged. | **P1** | Re-run in Phase 3; patched if non-breaking, else logged in Open Questions rather than force-upgraded blind. |
| SEC-5 | Privacy Policy / Terms pages don't exist yet — needed given the site will collect EU/US agent contact data (GDPR) and is based in Kenya (DPA). | **P1** | Draft template pages added, explicitly marked "template — requires legal review" rather than presented as finished legal copy. |

## 9. Analytics / Attribution

| # | Finding | Sev | Fix |
|---|---|---|---|
| AN-1 | No analytics of any kind in the draft. Given the commercial terms include 3% of engine-attributed revenue, this is the single most commercially load-bearing gap in the entire brief. | **P0** | `trackEvent` helper wired to `window.dataLayer` (GTM-pattern), fired on: form submit (both forms), WhatsApp click, agent-profile print/download click. GA4 Measurement ID and Meta Pixel ID scaffolded but left disabled pending real IDs — see Open Questions. |
| AN-2 | No UTM capture. | **P0** | `useUtm` hook reads `utm_source/medium/campaign` (and `ref`) from the URL on load, persists to `sessionStorage`, and attaches them to every form payload so a lead's source survives navigation to Contact/Request-a-Rate. |
| AN-3 | No documented path from a form submission into Zoho CRM with lead-source attribution intact. | **P0** | Documented as an explicit webhook contract (JSON shape, field names, where UTM fields land) in `Website/bigfoot-site/README.md` and `Handoff/Deployment_Runbook.md`. |

---

## Rubric scoring (§7, ≥8 to ship — scored against the rebuilt site, not the pre-existing draft)

| Criterion | Score | Why |
|---|---|---|
| Agent-buyer clarity | 9 | New IA leads with agents; Hero, hub page, and nav all speak to the buyer within the first screen. |
| Trust density | 8 | Real certifications, real reviews, real named guides, response-time SLA all surfaced early; capped at 8 because several trust items (insurance detail, DPO status) remain [CLIENT TO CONFIRM]. |
| Copy specificity | 9 | Capacities, SLAs, languages, vehicle specs replace romance copy on every B2B-facing page. |
| Design craft | 8 | Reuses an already-solid, restrained system (confirmed working Satoshi, correct palette, fixed mobile-hero bug) rather than a re-skin; new components follow the same restraint. |
| Performance | 8 | Static export, self-hosted font, compressed WebP throughout, no autoplay video added; capped at 8 pending a real Lighthouse-equivalent check in Phase 3. |
| SEO/technical hygiene | 9 | Per-page metadata, schema, sitemap/robots, B2B keyword targeting all added where none existed. |
| Attribution readiness | 9 | UTM capture + dataLayer events + documented Zoho contract turns a previously-nonexistent attribution story into a shippable one, pending only real IDs/webhook URL. |
| Honesty | 9 | South Africa footprint claim corrected; unverifiable specifics (fleet count, tiering, day-tours URL) explicitly marked [CLIENT TO CONFIRM] rather than asserted; no invented testimonials, guides, or partner names anywhere. |

All ≥8. Items scoring exactly 8 are capped by open client-confirmation items or a not-yet-executed Phase 3 measurement, not by unresolved design/build gaps — tracked in `_run/OPEN_QUESTIONS.md`.
