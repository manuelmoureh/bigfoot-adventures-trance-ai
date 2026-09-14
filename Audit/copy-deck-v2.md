# Copy Deck v2 — Agent-Buyer Rewrite
Reference copy used verbatim (or near-verbatim) in the Phase 2 rebuild. Every claim here is either already true and previously published (live site or draft) or explicitly marked [CLIENT TO CONFIRM] — nothing invented.

## Home (B2B-first hero)
**H1:** "Ground Handling in Kenya, Run by the People Who Drive It."
**Sub:** "No subcontractors. Our own fleet, our own multilingual guides, one Nairobi desk — quoting your clients' safaris since 2013."
**Primary CTA:** Request a Rate → `/request-a-rate`
**Secondary CTA:** Planning your own trip? → `/plan-a-trip`

## For Travel Agents (hub)
**Eyebrow:** For the Trade
**H1:** "Your clients. Our ground game, from airport to camp."
**Lead:** "We're a Nairobi-based DMC — Land Cruisers, Hiace vans, and Coaster buses we own outright, multilingual driver-guides on our own payroll, and one desk that answers the same business day. Agent partners across five source markets already send us their Kenya bookings."
**Trust bar labels:** "TRA / KATO / TOSK registered" · "1,400+ TripAdvisor reviews, 4.9/5" · "Founded 2013, zero rebrands" · "Same business day rate turnaround"
**Segment cards (mirrors theholidaydealers.com structure, own words):**
- "Outbound tour operator building a Kenya program" → link to Services
- "Independent agency with a client already booked" → link to Request a Rate
- "OTA or wholesaler scoping East Africa" → link to Fleet + Destinations

## Ground Handling Services
**H1:** "Every service line, run in-house."
- **Airport & City Transfers** — "Land Cruiser Prado or Hiace, met at arrivals, radio-linked to Nairobi dispatch."
- **Safari Circuits** — "Custom Land Cruisers with pop-up roofs, convoy-radio linked for groups above 8."
- **Conferences & MICE** — "Coaster buses, 20-25 pax, climate control and PA system, for delegate shuttles."
- **Cruise-Line Ground Handling (Mombasa)** — "Port-call excursions and transfers. [CLIENT TO CONFIRM — scoping stage per Implementation Plan, confirm before treating as a live, bookable line]."
- **Cross-Border Extensions** — "Tanzania / Uganda / Rwanda circuits available on request. [CLIENT TO CONFIRM]."

## Fleet
Reuses existing `Fleet` component copy verbatim (already specific: pax counts, meta tags, Instant Fleet Match tool) — no changes needed, already agent-usable.

## Guides
**H1:** "Multilingual guides, tiered by how guests talk about them."
Reuses existing tier structure (Gold/Silver/Bronze; Samuel, Tony, Francis, Elvis, Lawrence) verbatim — tier assignments flagged [CLIENT TO CONFIRM] in Open Questions, names themselves independently verified.
**New line added:** "Every guide is full-time Bigfoot staff — never a freelance day-hire." (True per Implementation Plan differentiator; not previously stated on either site.)

## Destinations
**H1:** "Kenya first. The rest of East Africa, on request."
**Kenya card:** "Maasai Mara, Amboseli, Nairobi National Park, the coast — our core operating footprint since 2013."
**Extension card:** "Tanzania, Uganda, Rwanda — cross-border circuits available on request. [CLIENT TO CONFIRM before quoting as standard]."
*(Replaces the old, unsupported "Kenya / Uganda / South Africa" map claim — see Audit IA-4.)*

## Reviews
**H1:** "Not just five stars. Named guides."
Reuses existing `VOICES` quotes verbatim (Prisha P on Daniel, Holly M on Samuel, GrandTour603257 on Lawrence, Ryan M on Francis) — all previously sourced from real attributed TripAdvisor reviews. No new quotes invented.

## About / Company Profile
**H1:** "Bigfoot Adventures Ltd — Nairobi, since 2013."
**Body:** "Founded 2013. TRA, KATO, and TOSK registered. Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road, Nairobi. Mon–Sat, 8:00–17:00 EAT. Every vehicle in our fleet is company-owned; every guide is full-time staff — no subcontracted drivers, ever."
**CTA:** "Download the one-page Agent Profile" → `/agent-profile`

## Agent Company Profile (`/agent-profile`, print target)
One printable page: logo, the About paragraph above, fleet summary table, guide tier summary, certifications, contact block, "Prepared for: ______" line (agent fills in by hand or before circulating internally).

## Request a Rate
**H1:** "Tell us the trip. We'll quote it the same business day."
**Sub:** "Rates aren't published — every itinerary is priced against real season and group size. This goes straight to Daniel's desk."
Fields: Agency name · Country · Work email · WhatsApp/phone (optional) · Service type (checkboxes: transfers / safari circuit / conference-MICE / cruise handling) · Group size · Travel dates or season · Message.
**Submit confirmation copy:** "Received. Our Nairobi desk replies the same business day — usually faster." *(Client-side dry run per Decision 6 — no real send yet.)*

## Plan a Trip (consumer, secondary)
Keeps existing draft copy: "We Own Every Mile We Drive." / "No subcontractors. Our own fleet, our own guides, run from Nairobi since 2013." / "Plan My Safari" — unchanged, just relocated off the homepage.

## Nairobi Day Tours (upsell)
**H1:** "Already in Nairobi? Don't waste the layover."
**Body:** "Nairobi National Park, the Giraffe Centre, and the Sheldrick Elephant Trust are all within an hour of the airport — a half-day add-on for guests already booked or transiting."
**CTA:** "See live availability on TripAdvisor" → TripAdvisor Experiences search link [CLIENT TO CONFIRM real listing URL — see Decision 8].

## Contact
**H1:** "One Nairobi desk. Same business day, either way."
Reuses real phone (+254 722 972 374), WhatsApp link, address, hours — all confirmed live-site-accurate.

## Privacy / Terms
Marked at top of each page: "This is a working template pending legal review — not yet final legal copy." Standard GDPR-aware + Kenya DPA-aware structure (data collected, purpose, retention, agent rights, contact for requests) drafted but explicitly flagged, not silently presented as attorney-reviewed.

## JA / ES / RU stub pages
One paragraph each (agent-summary register, not translated tourism copy), e.g. ES: "Somos un operador terrestre (DMC) con sede en Nairobi, fundado en 2013. Flota propia, guías multilingües en plantilla, sin subcontratistas. Escríbanos para tarifas." + contact block. Marked "[BORRADOR — pendiente de revisión profesional]" / equivalent in JA/RU. Full translation review is explicitly out of scope for this pass — see Decision 9.
