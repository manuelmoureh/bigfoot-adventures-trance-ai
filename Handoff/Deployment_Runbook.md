# Deployment Runbook — Bigfoot Adventures Website

No live deploy or DNS change was made as part of this engagement (GOAL_BRIEF.md §3 hard stop). This runbook documents what's needed when Bigfoot/Trance AI decides to go live.

## 1. Decide where it lives (open decision — see `_run/OPEN_QUESTIONS.md` #12)

Two real options:
- **Replace bigfoot-adventures.com** — requires DNS/hosting access to the current WordPress site (credited to "Branding by Thrive" in its footer; access unknown).
- **New agent-facing subdomain/microsite** (e.g. `agents.bigfoot-adventures.com`, or a Vercel/Netlify/GitHub Pages URL) — lower risk, doesn't touch the live consumer site, can go live independently.

## 2. Build

```bash
cd Website/bigfoot-site
npm install
npm run build   # static output lands in ./out
```

Before building for a specific host, set `next.config.ts`'s `basePath` to match:
- Root domain or custom domain (e.g. `agents.bigfoot-adventures.com`) → `basePath: undefined` (remove it)
- GitHub Pages project site (e.g. `username.github.io/repo-name/`) → `basePath: "/repo-name"`

**Also update `app/basePath.ts`'s `BASE_PATH` constant to match** — `next/image` does not auto-prefix `src` with basePath in this Next.js version (confirmed via `Audit/RESULTS.md` bug #2), so this constant must stay in sync with `next.config.ts` or every photo will 404.

## 3. Hosting options

| Host | Static export support | Notes |
|---|---|---|
| GitHub Pages | Yes (current setup) | Free; needs `basePath` set to the repo name; add a `.nojekyll` file to the `out/` folder before pushing (Jekyll otherwise mangles the `_next/` folder). |
| Vercel | Yes (native Next.js support) | Recommended if moving off GitHub Pages — no `basePath` needed on a custom/root domain, handles headers below natively via `vercel.json`. |
| Netlify | Yes | Set publish directory to `out/`; headers via `netlify.toml` or `_headers` file. |
| Cloudflare Pages | Yes | Set build output directory to `out/`; headers via `_headers` file. |

## 4. Security headers (Audit finding SEC-2 — can't be set from a static export directly)

Recommended headers, whichever host is chosen:

**Vercel (`vercel.json`):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    }
  ]
}
```

**Netlify/Cloudflare Pages (`_headers` file in `public/`):**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

A Content-Security-Policy header was deliberately not prescribed here — it needs to be authored against the exact final analytics/GTM script(s) once those IDs exist (see Open Questions #10), otherwise a generic CSP either blocks the analytics or is too permissive to matter.

## 5. Zoho webhook / forms

See `Website/bigfoot-site/README.md`'s "Forms" section for the exact payload contracts. Before going live, replace the `console.log` dry-run calls in `app/components/Forms.tsx` with a real `fetch()` to whichever Zoho integration is chosen (Zoho Forms embed vs. custom webhook — needs Zoho admin access per Open Questions #9).

## 6. Analytics IDs

Add the GA4/GTM snippet to `app/layout.tsx` once real Measurement/Container IDs exist (Open Questions #10). `trackEvent()` in `app/components/ui.tsx` already pushes to `window.dataLayer` — a GTM container just needs to be present to pick these events up.

## 7. GitHub Pages deploy steps (if staying on this host)

```bash
cd Website/bigfoot-site
npm run build
cd out
touch .nojekyll
git init
git add -A
git commit -m "Deploy rebuilt agent-facing site"
git remote add origin <target-repo-url>
git push -u origin master --force
```
Then enable Pages on the target repo (Settings → Pages → Deploy from branch → master → /).

**Do not run this without explicit go-ahead from Manuel/Daniel** — this is a live-deploy action, a hard stop for this engagement.
