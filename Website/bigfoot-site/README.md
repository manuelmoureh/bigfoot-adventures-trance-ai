# Bigfoot Adventures — Website (bigfoot-site)

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Motion, statically exported for GitHub Pages hosting. Rebuilt as a B2B-first site for international travel agents and tour operators buying Kenya ground handling, with a consumer path kept secondary. See `Audit/Bigfoot_Website_Audit.md`, `Audit/RESULTS.md`, and `_run/DECISIONS.md` in the project root for the full audit and decision log behind this structure.

## Stack

- **Next.js 16.3.5**, `output: "export"` (static site, no server runtime needed)
- **React 19**, TypeScript (strict)
- **Tailwind CSS v4** (CSS-first `@theme inline` config in `app/globals.css`)
- **Motion** (`motion/react`) for scroll-reveal and hero animation
- **Phosphor Icons** (`@phosphor-icons/react`)
- Self-hosted **Satoshi** font via `next/font/local` (`app/fonts.ts`, files in `public/fonts/`)

## Structure

```
app/
  basePath.ts          — BASE_PATH constant, MUST match next.config.ts's basePath
  data.ts              — FAQS, VOICES: plain data shared between client components and
                          server-rendered schema (kept out of "use client" files on purpose —
                          see the comment in components/ui.tsx's Reveal for why)
  fonts.ts             — Satoshi font loading
  globals.css          — Tailwind import, brand color tokens, print styles
  layout.tsx           — root layout: Nav, Footer, WhatsApp FAB, global metadata
  sitemap.ts, robots.ts
  components/
    ui.tsx             — shared primitives: Reveal, Eyebrow, ArrowBtn, Field, TextArea,
                          PageHero, WhatsAppFAB, trackEvent, useUtm
    Nav.tsx, Footer.tsx, Hero.tsx
    Sections.tsx       — reused across multiple pages: WhyUs, Guides, Fleet, Journey,
                          HowItWorks, Testimonials, Trade, FAQ
    AgentSections.tsx  — B2B-specific: TrustBar, AgentSegments, ServicesGrid,
                          DestinationsGrid, CompanyProfileSummary, DayToursUpsell
    Forms.tsx          — RateRequestForm, TripPlannerForm (dry-run only, see below)
    Schema.tsx          — JSON-LD: TravelAgency/LocalBusiness, FAQPage, Review
  for-travel-agents/, services/, fleet/, guides/, destinations/, reviews/, about/,
  agent-profile/, request-a-rate/, plan-a-trip/, nairobi-day-tours/, contact/,
  privacy/, terms/, ja/, es/, ru/   — one page.tsx per route
```

## Content update points (for Daniel's team, non-developers)

- **Guide names/tiers**: `app/components/Sections.tsx`, the `TIERS` array (Guides component) and the guide table in `app/agent-profile/page.tsx`.
- **Fleet vehicles/specs**: `app/components/Sections.tsx`, the `FLEET` array and `MATCH` lookup.
- **Testimonials/reviews**: `app/data.ts`, the `VOICES` array. Only add real, attributed quotes — see `_run/DECISIONS.md` on honesty requirements.
- **FAQ**: `app/data.ts`, the `FAQS` array.
- **Trust bar / certifications**: `app/components/AgentSections.tsx`, the `TRUST` array.
- **Phone/WhatsApp/address**: appears in `Footer.tsx`, `Hero.tsx`, `contact/page.tsx`, `agent-profile/page.tsx` — search for `254722972374` to find every instance if it ever changes.
- **[CLIENT TO CONFIRM] markers**: several pages (Services, Destinations, Nairobi Day Tours, Privacy, Terms) contain bracketed placeholders where a fact needs Daniel's sign-off before it should read as settled. Search the codebase for `CLIENT TO CONFIRM` to find all of them — see `_run/OPEN_QUESTIONS.md` for the full list and context.

## Forms: dry-run only, Zoho webhook contract

Neither form currently sends anything anywhere — this is deliberate (no credentials, no live send, per the build brief's hard stops). Both forms (`app/components/Forms.tsx`) assemble a structured JSON payload client-side, log it to the console, and show a "Received" confirmation. To wire them to Zoho for real:

**Request a Rate** (`/request-a-rate`) payload shape:
```json
{
  "form": "request-a-rate",
  "agency_name": "string",
  "country": "string",
  "work_email": "string",
  "whatsapp_phone": "string (optional)",
  "service_types": ["Airport / City Transfers", "Safari Circuit", "..."],
  "group_size": "string",
  "travel_dates": "string",
  "message": "string",
  "utm": { "utm_source": "...", "utm_medium": "...", "utm_campaign": "...", "ref": "..." },
  "submitted_at": "ISO 8601 timestamp"
}
```

**Plan a Trip** (`/plan-a-trip`) payload shape:
```json
{
  "form": "plan-a-trip",
  "full_name": "string",
  "email": "string",
  "travel_dates": "string",
  "details": "string",
  "utm": { "...": "..." },
  "submitted_at": "ISO 8601 timestamp"
}
```

To go live: replace the `console.log(...)` call in each form's `handleSubmit` (in `Forms.tsx`) with a `fetch()` POST to a Zoho Forms endpoint or a webhook that forwards into Zoho CRM, keeping the `utm` object intact so lead-source attribution survives into the CRM record — this is what makes the 3% engine-attributed-revenue commission verifiable (see `Implementation Plan - Bigfoot Adventures.md`). A basic honeypot field (`company_website`) is already included in both forms for spam mitigation; real rate-limiting should live at the webhook/Zoho layer.

## Analytics

`app/components/ui.tsx`'s `trackEvent()` pushes to `window.dataLayer` (Google Tag Manager pattern). Fired on: form submit (both forms, with form name + UTM), WhatsApp FAB click, agent-profile print click. No GA4 Measurement ID or Meta Pixel ID is wired in yet — add the GTM/GA4 snippet to `app/layout.tsx` once real IDs are available (see `_run/OPEN_QUESTIONS.md` #10).

## Agent Company Profile PDF

`/agent-profile` is a print-optimized HTML page, not a server-generated PDF (this is a static export with no server runtime — see `_run/DECISIONS.md` #7 for why). The "Print / Save as PDF" button calls `window.print()`; the page has dedicated print CSS (`@media print` in `globals.css` hides the Nav/Footer).

## Build & deploy

```bash
npm install
npm run build   # outputs static site to ./out
```

`next.config.ts`'s `basePath` (`/bigfoot-adventures-site`) MUST match wherever the site is actually hosted, and `app/basePath.ts`'s `BASE_PATH` constant must match it too (used for `next/image` src prefixing — see `Audit/RESULTS.md` bug #2 for why this can't just be assumed automatic). See `Handoff/Deployment_Runbook.md` in the project root for the full deployment/hosting/header-config runbook.
