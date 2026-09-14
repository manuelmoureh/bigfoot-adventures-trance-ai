# Launch Checklist

## Before any live deploy

- [ ] Decide hosting target (`_run/OPEN_QUESTIONS.md` #12) — replace bigfoot-adventures.com, or a new agent-facing subdomain
- [ ] Confirm `next.config.ts` `basePath` and `app/basePath.ts` `BASE_PATH` match the chosen host exactly (see `Audit/RESULTS.md` bug #2 — this bit us once already)
- [ ] Set up the real Zoho webhook/Forms integration and replace the dry-run `console.log` calls in `app/components/Forms.tsx` (see README's "Forms" section for the exact payload contract)
- [ ] Add real GA4/GTM container ID to `app/layout.tsx`
- [ ] Apply the host-level security headers from `Handoff/Deployment_Runbook.md`
- [ ] Resolve every `[CLIENT TO CONFIRM]` marker in the codebase (see `_run/OPEN_QUESTIONS.md`) — at minimum, the guide-tier assignments and the Nairobi day-tours listing URL, since those are the most visible to a first-time visitor

## Verification before flipping DNS or announcing

- [ ] `npm run build` runs clean (zero TypeScript errors)
- [ ] `npm audit` shows 0 vulnerabilities
- [ ] Every nav link and CTA resolves correctly on the actual hosting URL (not just localhost) — the basePath bug this build found only shows up once deployed to a real subpath
- [ ] Request-a-Rate and Plan-a-Trip forms actually deliver a lead into Zoho (send one real test submission)
- [ ] WhatsApp button opens a real chat with the correct number
- [ ] Mobile check on a real phone, not just an emulated viewport

## Not blocking launch, but worth scheduling soon after

- [ ] A real Lighthouse/PageSpeed run against the live URL (couldn't be run in this environment — see `Audit/RESULTS.md`)
- [ ] Full keyboard-navigation and broken-link crawl across all 18 content routes
- [ ] Schema validation via Google's Rich Results Test
- [ ] JA/ES/RU stub pages sent for real professional translation review (currently machine-drafted, explicitly marked as draft on-page)
- [ ] Deeper competitor teardown (Somak, Sunworld, Thomas Cook Kenya, Meek Travel) — time-boxed out of this pass, see `Audit/sources.md`
