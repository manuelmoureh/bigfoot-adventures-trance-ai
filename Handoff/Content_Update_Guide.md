# Content Update Guide — For Daniel's Team

This is the non-developer version of the technical README (`Website/bigfoot-site/README.md`). You don't need to know how to code to follow this — just where to look and what to ask a developer to change.

## What you can ask someone to update, and where

| What | File | Notes |
|---|---|---|
| Guide names, tiers (Gold/Silver/Bronze) | `app/components/Sections.tsx` — look for `TIERS` | Tiers are currently a placeholder from earlier research — **please confirm these are still accurate** (see Open Questions). |
| Fleet vehicles, capacities | `app/components/Sections.tsx` — look for `FLEET` | Add/remove vehicle classes here, plus their photo. |
| Guest reviews shown on the site | `app/data.ts` — look for `VOICES` | **Only real, attributed reviews** — never invented quotes. |
| FAQ answers | `app/data.ts` — look for `FAQS` | |
| Certifications shown in the trust bar | `app/components/AgentSections.tsx` — look for `TRUST` | |
| Phone number / WhatsApp / address | Search the whole project for `254722972374` | Appears in the footer, hero, contact page, and agent profile — update every instance if it ever changes. |
| Photos | `public/images/` folder | Same filenames get swapped automatically everywhere they're used; keep them under ~1MB and in WebP format for speed. |

## The bracketed placeholders

You'll see text like `[CLIENT TO CONFIRM]` in a few places — Services, Destinations, Nairobi Day Tours, Privacy, and Terms pages. These are facts the build couldn't verify independently (cruise-line handling status, cross-border country coverage, the exact TripAdvisor/Viator day-tours link, insurance/DPO details). See `_run/OPEN_QUESTIONS.md` for the full list — once you confirm each one, a developer can remove the bracket and finalize the wording.

## Things that are intentionally NOT public

- **Rates/pricing** — never shown publicly, by design. Agents get a rate after submitting the Request a Rate form.
- **Named partner agents** (Team Wise, One Above, Cosmic, etc.) — kept out of the public site entirely, since these are your existing business relationships, not something to publish without asking them first.

## If something looks broken

Check `Audit/RESULTS.md` first — it documents every bug found and fixed during the build, so you can see whether something you're seeing is a known, already-fixed issue or something new.
