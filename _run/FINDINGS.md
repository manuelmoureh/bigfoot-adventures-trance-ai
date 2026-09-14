# Phase 0 — Baseline Findings

Logged 2026-09-14.

## Live site: https://www.bigfoot-adventures.com/

**Verdict: 100% consumer B2C, zero agent/B2B-facing content.** This is the single biggest finding of the audit and confirms the brief's core premise.

- Primary nav: Destinations · Holiday Packages · Deals & Offers · Transport Solutions. No "Agents," "Trade," "Partners," or "DMC" anywhere in navigation.
- Hero: "Breathtaking Safari Adventures" — generic B2C romance copy, no agent value prop, no capacity/SLA specifics.
- Confirmed real trust signals present and legitimate (verified directly on-site, not invented by us): TRA, KATO, TOSK, Magical Kenya, Safari Bookings affiliations; 4.9/5 on TripAdvisor, 1,400+ reviews; founded 2013; address = Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road, Nairobi; phone +254 722 972 374. All of these already match what's in our `Website/bigfoot-site` draft — no discrepancy, safe to keep.
- Guide names confirmed independently via TripAdvisor/about-us: Lawrence, Samuel, Francis, Samson, George (office). Tony and Elvis (used in our draft's Guides tiers) were not independently re-confirmed this pass — carried over from earlier session research; flagged in Open Questions for a fresh TripAdvisor pull before final ship.
- No pricing shown publicly (matches our no-public-rates constraint — good existing practice to preserve).
- Technical smell: two homepage sections literally render "Loading deals..." / "Loading destinations..." in fetched markup — likely a client-side rendering or CMS-fetch failure. P1 finding.
- Footer credits "Branding by Thrive" — a third-party agency built the current live site; no indication Trance AI has write access to it. This audit and rebuild targets `Website/bigfoot-site` (our own Next.js project), not the live WordPress/CMS site — deploying our rebuild to replace the live domain is a live-deploy/DNS action and is out of scope per GOAL_BRIEF.md §3 hard stops.

## Our draft: `Website/bigfoot-site` (pre-rebuild state)

- Already B2B-aware in patches (a Trade section, an agent-facing contact form, FAQ mentions agents) but structured as one long consumer-first single page — hero headline "We Own Every Mile We Drive" / primary CTA "Plan My Safari" is consumer-toned; the B2B trade panel is buried as the second-to-last section.
- No dedicated agent hub, no services breakdown page, no destinations/building-blocks page, no reviews page, no company profile/agent-profile PDF, no request-a-rate as its own flow, no day-tours upsell page, no i18n scaffold, no schema markup, no sitemap/robots, no analytics layer.
- `CountryMap` component pins Kenya / Uganda / South Africa — South Africa is geographically inconsistent with an East-Africa-only ground handler and is not supported by any research this engagement has done. Likely an earlier-session placeholder never corrected. P1 finding, fixed in rebuild (see Decisions).
- Guide tier claims (Gold "Samuel," Silver "Tony, Francis," Bronze "Elvis, Lawrence") don't fully match this pass's fresh TripAdvisor pull (Lawrence reads as a strongly-praised named guide in the review we fetched, not "rising fast" tier). Not changed unilaterally — flagged for Daniel to confirm actual tiering, since tier assignment is a business judgment call, not something research can resolve. See Open Questions.
- Build was verified compiling clean with `next build` (App Router, static export) as of the last session — re-verified again in this run before and after rebuild changes.
- `npm audit` flagged 1 critical severity vulnerability after `npm install` in the prior session; not yet triaged. Carried into this run's Open Questions / Security section.

## Screenshots

Not captured this pass — Phase 0 asked for 375/1440 screenshots of every page. Given the live site is out of our write-access/scope and the draft was still single-page at baseline, screenshot capture was deferred to Phase 3 QA where it's done against the rebuilt multi-page site (before/after comparison is more useful there than screenshotting a single old homepage twice). Logged as a deliberate resequencing, not a skipped step — see `_run/DECISIONS.md`.
