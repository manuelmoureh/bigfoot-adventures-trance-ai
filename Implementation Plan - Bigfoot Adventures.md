# Bigfoot Adventures — Implementation Plan

**Status:** Commercial terms locked (deck accepted: $12,000 setup + $3,000/mo retainer for 3 months + 3% of engine-attributed revenue; 2× ROI in 90 days / 5×+ in 12 months guarantee; 10–15 day build promised). Meeting notes below supersede the deck's *strategic framing* — same price, same guarantee, but the system we actually build targets what really drives Bigfoot's revenue.

## What changed from the deck, and why it matters for the build

The deck sold an autonomous **consumer** booking engine (social ads → chatbot → checkout). The meeting notes make clear the real revenue engine is **B2B ground handling through travel agents** — referral-dependent, but the referrals are trade referrals, not consumer ones. Building the deck's version would hit the letter of the contract and miss the money.

| Area | Deck assumption | Reality (meeting notes) | Build implication |
|---|---|---|---|
| Core revenue driver | Consumer bookings (domestic + global) | B2B ground handling via ~15 travel agents, all year | Agent-facing system is the priority build, not consumer funnels |
| Local market | "Domestic travelers" targeted | No local/African B2C market at all | Drop domestic-consumer content/ads from scope |
| Competitors | Asilia Africa, Go2Africa, OTAs | Pollmans, Thomas Cook, Sunworld, Somak, Meek Travel | Re-run competitive teardown against the real set before positioning claims go live |
| AI chatbot role | Implied autonomous close/checkout | Stops at "request a quote" — rates handled manually by Daniel | AI agent = qualify + route, never quote or close |
| CRM/email stack | Implied blank slate | Zoho (email + CRM) already in place | Every workflow integrates into Zoho, not a new system |
| Content strategy | Heavy paid social + original content engine | Light-touch: curated/reposted safari content is enough; destination doesn't need selling to agents who've already recce'd it | De-prioritize content production volume; prioritize agent-facing assets instead |
| Guides | Not mentioned | Multi-lingual, tiered Gold/Silver/Bronze, individually named in reviews (confirmed independently on TripAdvisor: Lawrence, Tony, Samuel, Francis, Elvis) | Build a guide showcase tied to reviews — real, ownable differentiator |
| Secondary channels | Not mentioned | Cruise-line ground handling (Mombasa), travel trade shows, impact orgs/schools (Maranatha-type, already a real past client) | New parallel workstreams, not core build, but worth scoping |

## Access & inputs needed before Day 1 (blocking)

- Zoho admin access (Mail + CRM)
- WhatsApp Business number/API access for the qualification agent
- List of the 15 current travel agents + contact history (who's active, who's gone quiet)
- Company profile doc, fleet photos, guide roster with languages/tier assignments
- Confirmation of who has final say on quote/pricing responses (assumed: Daniel)
- Any existing travel-show contacts or cruise-line contacts Daniel already has

If any of these aren't ready by Day 1, the corresponding build step slips — flag immediately rather than build against guesses.

## Core build — Day by day (10–15 days)

**Days 1–2 — Discovery & access**
- Zoho audit: current email/CRM structure, what's tracked, what's not
- Pull and organize the 15-agent list with relationship status and source market
- Competitive teardown: Pollmans, Thomas Cook, Sunworld, Somak, Meek Travel — how they present fleet, guides, rates to agents
- Pattern review of named partner agents (Team Wise, One Above, Cosmic, Adla Tours, Safari Atlas) — how they market East Africa, what they expect from ground handlers
- Guide roster finalized with Gold/Silver/Bronze tiers and language skills

**Days 3–4 — B2B agent-facing foundation**
- Refreshed company profile (digital, agent-ready): fleet (Land Cruisers positioned as "traverse all terrain," Rosa buses), guide tiers, transfers/charters/conferences line, footprint messaging (broad East Africa, not over-specified destinations)
- Agent-facing page/hub on the existing site (or a linked one-pager) with rate-request flow, not public pricing
- Zoho nurture sequence draft for existing 15 agents (seasonal inventory, migration-window pushes, year-round touchpoints) — replaces ad hoc referral dependency with a system, without replacing Daniel's relationship

**Days 5–6 — AI qualification agent (WhatsApp + email)**
- Scoped strictly to: greet → understand need (B2C or B2B/agent) → gather trip requirements → hand off to Daniel for quote
- Zoho-integrated so every conversation lands as a CRM record, not a silo
- Tested against both inbound types: direct traveler inquiries and travel-agent inquiries (different qualifying questions for each)

**Days 7–8 — Guide + reviews showcase, trust signals**
- Guide bios by tier, linked to their named TripAdvisor reviews (the "reviews are currency" idea, made concrete)
- Nairobi day-tour add-ons (National Park, Giraffe Centre, Sheldrick) surfaced as an upsell path for guests already booked/in-country — this already exists on Viator/TripAdvisor Experiences, just needs to be visible and offered proactively, not just discoverable

**Days 9–10 — Dashboard**
- Built off Zoho data: bookings/inquiries by agent, by source market, revenue attribution
- This is also what makes the 3% engine-attributed revenue commission verifiable to both sides — treat it as shared infrastructure, not just a Bigfoot nice-to-have

**Days 11–12 — Content system (light-touch) + review automation**
- Curated + light original content calendar, **Instagram-first**: their Facebook has 31K followers vs. Instagram's 2,289 — the imbalance is the actual opportunity, not a new content factory
- Automated post-trip review request flow (WhatsApp/email), tagged to the specific guide who led the trip

**Day 13 — Training & handoff**
- Daniel (and team, if he delegates) trained on the AI agent hand-off flow, the dashboard, and the agent nurture sequences — this has to fit how he already works (personal WhatsApp/email/calls), not replace it

**Days 14–15 — Soft launch, QA, monitoring**
- Launch AI agent + nurture sequence to a subset of the 15 agents first, not a full broadcast
- Monitoring in place before wider rollout

## Beyond Day 15 — first retainer month (parallel/ongoing, not blocking core delivery)

- New agent prospecting in target source markets (India, Japan, Russia, US, Spain), using the competitor/pattern research from Days 1–2
- Cruise-line ground-handling exploration (Mombasa port calls) — scoping only, not a committed build yet
- Travel trade show calendar (contingent on Daniel's existing contacts)
- Global B2C reachability research — how to reach the non-local traveler segment at all, since this is a real unknown, not an assumed channel
- Impact-org/school secondary channel (Maranatha-type) — light prospecting, not a paid channel build

## Reporting cadence

Weekly during build (Days 1–15), then monthly against the ROI guarantee — measured primarily through **agent-attributed bookings via Zoho**, since that's the actual revenue driver, with consumer inquiries tracked as a secondary line.
