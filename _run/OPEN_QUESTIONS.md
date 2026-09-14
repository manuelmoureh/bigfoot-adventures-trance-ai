# Open Questions for Bigfoot / Daniel

Consolidated into `Handoff/Client_Walkthrough.html` at handoff. Living list — append, don't delete.

## Trust & compliance
1. TRA / KATO / TOSK membership numbers — confirmed the names are legitimate (shown on the live site), but we have not verified current membership status/numbers directly with each body. Worth a screenshot of the current certificate for the About/agent-profile page.
2. Insurance / liability cover details for ground transport — not published anywhere we found; foreign agents' compliance teams often ask for this directly.
3. Data protection: does Bigfoot have a registered Data Protection Officer / ODPC registration under Kenya's DPA? Needed for the Privacy Policy page to be accurate rather than templated.

## Content accuracy
4. Guide tier assignments (Gold/Silver/Bronze) — currently Samuel=Gold, Tony/Francis=Silver, Elvis/Lawrence=Bronze, carried over from an earlier session. Please confirm these reflect actual current standing; recent research suggests Lawrence is very strongly reviewed and may deserve re-tiering.
5. Exact current fleet count and full vehicle list (we show 4 representative classes: Land Cruiser Prado, custom Safari Land Cruiser, Hiace, Coaster — confirm nothing is missing, e.g. Rosa buses are mentioned in the Implementation Plan but not currently in the fleet grid).
6. Real Viator / TripAdvisor Experiences listing URL for Nairobi day tours (Nairobi National Park, Giraffe Centre, Sheldrick) — we linked a generic TripAdvisor search as a placeholder.
7. Cruise-line / Mombasa port-call ground handling — Implementation Plan flags this as a secondary channel being scoped, not committed. Should it appear on the public Services page yet, or stay internal until confirmed live?
8. Does Bigfoot currently operate cross-border safari extensions into Tanzania, Uganda, or Rwanda, or only within Kenya? Destinations page currently presents these as "available on request — to confirm" rather than asserting them.

## Business/ops
9. Zoho CRM webhook endpoint / Forms embed ID — needed to wire the Request-a-Rate and Plan-a-Trip forms to actually deliver leads (currently client-side dry-run only, per hard-stop on sending anything without credentials).
10. GA4 Measurement ID and/or Meta Pixel ID, if analytics should go live — currently scaffolded but disabled pending IDs (see README).
11. WhatsApp Business API access for the qualification agent (blocks Days 5-6 of the Implementation Plan, unrelated to this website workstream but worth re-flagging since the site now has a live WhatsApp entry point).

## Deployment
12. Where should the rebuilt site actually go live — replace bigfoot-adventures.com (requires DNS/hosting access we don't have), or run as a separate agent-facing microsite (e.g. agents.bigfoot-adventures.com or a Vercel/Netlify subdomain)? This audit deliberately did not decide this (live deploy/DNS change is a hard stop) — needs Daniel's call.
13. `npm audit`: 1 critical severity vulnerability in a transitive dependency (matches Vuria's identical stack, so likely portfolio-wide) — flagging for a coordinated fix across projects rather than a one-off patch here if it needs a breaking bump.
