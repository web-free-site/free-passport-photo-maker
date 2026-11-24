# Cursor agent brief — free-passport-photo-maker

Target: https://free-passport-photo-maker.web-free.site
Repo name (wrangler `name`): `free-passport-photo-maker`
English name: "Free Passport Photo Maker". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is a **local-file** passport / visa / ID photo maker: official crop (head and margins), white background where required, and a real-size print sheet (10×15 / 4×6 / A4). No watermark. Photos never leave the device.

## Recommended base (use this)

- Repo: https://github.com/btahir/portraitpass
- License: MIT (keep `LICENSE`, credit PortraitPass / btahir in the footer and on `/about`)
- Stars: 1
- Last commit: 29 Sep 2026, 08:34 Africa/Kigali — `7a1fa17cc2` on `main`
- Official demo: `https://portraitpass.vercel.app`
- Stack: Vite, React 19, TypeScript, `pdf-lib`, MediaPipe Tasks Vision (face guides), already has `tsx scripts/prerender.ts` on `npm run build`, Playwright tests, and many official document sizes (the project advertises 49). Print sheets are in scope. `sharp`, the MCP server, and the Node CLI are build/tooling — do not require them at runtime in the browser, and do not ship a server.
- Cloudflare: yes after a static build. MediaPipe wasm in `public/wasm/` is ~11.2 MiB and ~10.0 MiB — under the 25 MiB file cap, but do not add a third huge binary. You may also load MediaPipe from a CDN at runtime.
- Verification (this box, 23 Nov 2026, Africa/Kigali): GitHub API. `LICENSE` is a real MIT file (Copyright (c) 2026 PortraitPass contributors). No paid photo API in the declared dependencies. The repo mentions "security headers" in a commit message — **do not set COEP/COOP** (ads will break).
- Why this one: MIT with a real `LICENSE` file, a complete working website (not just a crop library), official sizes + print sheets + face guides, and a prerender step already in the build.

## Backup (MIT; Next.js; fewer formats)

- Repo: https://github.com/m-a-c-m/PassportPhoto
- License: MIT (LICENSE file, Copyright (c) 2026 Miguel Ángel Colorado Marin)
- Stars: 0
- Last commit: 19 Sep 2026, 06:07 Africa/Kigali — `e4caa4df06` on `main`
- Official demo: `https://miguelacm.es/tools/passport-photo`
- Stack: Next.js 16, React 19, Tailwind 4, `pdf-lib`. Spanish DNI, EU, UK, US and other passport/visa sizes, official head size, real-size PDF sheet. If you use this base, you must enable static export / prerender every public page, and add Rwanda / RDC / Schengen / US coverage if missing.

## Do not use these

- `hjt486/passport-photo-maker` (69 stars), `patmood/passport-photo`, `rizwansoaib/passport-photo-generator` — no license file, cannot use.
- Any app that uploads the photo, uses a paid background-removal API, or adds a watermark.

## What to build on top of btahir/portraitpass

1. Import the base into this repo, keep the MIT license, and credit PortraitPass / btahir (and MediaPipe / pdf-lib). Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them). You may drop the MCP server, Node CLI, and `sharp`-based tooling from the published site.
2. Rebrand to "Free Passport Photo Maker". English primary. No FR/SW translations of the site. Keep official crop guides, white background, and print sheets. Make sure these formats are easy to find: Rwanda, RDC / DRC, visa Schengen (35×45 mm), US 2×2 in, UK, and a generic 35×45 mm ID photo. No watermark on the photo or the print sheet.
3. Keep everything 100% in the browser. No accounts, no paid APIs, no API keys, no file upload. Optional client-side background cleanup is fine if it uses an already-local model and stays under the asset cap; otherwise tell the user to start from a white/plain background or point them at Free Background Remover (`https://free-background-remover.web-free.site/?ref=passport-photo-maker`) without making that a hard dependency.
4. Adsterra only, never AdSense. Use **only** the placeholder keys in this brief (or real keys if a follow-up provides them). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `public/ads.json`. Never set COEP/COOP headers. Ads must not break cropping, preview, or the print-sheet PDF.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-passport-photo-maker.web-free.site`; English how-to pages, at least `/how-to-make-a-passport-photo-at-home`, `/passport-photo-35x45-mm`, and `/us-passport-photo-2x2` (each with its own title, description and canonical); prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-passport-photo-maker.web-free.site`. No French landing page.
6. Footer: credit the upstream project, and add a link back to the hub `https://web-free.site/?ref=passport-photo-maker`.
7. On every prerendered HTML page, before `</body>`, add the More free tools block and the Cloudflare Web Analytics beacon (see below). Implement this with `scripts/inject-more-tools.mjs` hooked into `postbuild` or the end of `npm run build`, so a later rebuild cannot drop the home-page snippets. Do not rely on a one-off manual edit of `dist/` / `out/`.
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the six other sites in this batch. Show **Free Passport Photo Maker** as bold text, not a self-link. Every outbound tool/hub link must carry `?ref=passport-photo-maker`.
     - **Documents & writing:** Free Word Counter (`https://free-word-counter.web-free.site/?ref=passport-photo-maker`), Free PDF Converter (`https://free-pdf-converter.web-free.site/?ref=passport-photo-maker`), Free CV Maker (`https://free-cv-maker.web-free.site/?ref=passport-photo-maker`), Free Invoice Generator (`https://free-invoice-generator.web-free.site/?ref=passport-photo-maker`), Free Typing Test (`https://free-typing-test.web-free.site/?ref=passport-photo-maker`), Free Signature Generator (`https://free-signature-generator.web-free.site/?ref=passport-photo-maker`), Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/?ref=passport-photo-maker`).
     - **Images & codes:** Free QR Code Creator (`https://free-qr-code-creator.web-free.site/?ref=passport-photo-maker`), Free Image Resizer (`https://free-image-resizer.web-free.site/?ref=passport-photo-maker`), Free Image to Text (`https://free-image-to-text.web-free.site/?ref=passport-photo-maker`), Free Background Remover (`https://free-background-remover.web-free.site/?ref=passport-photo-maker`), Free Image Compressor (`https://free-image-compressor.web-free.site/?ref=passport-photo-maker`), Free HEIC to JPG Converter (`https://free-heic-to-jpg.web-free.site/?ref=passport-photo-maker`), Free Image Upscaler (`https://free-image-upscaler.web-free.site/?ref=passport-photo-maker`), **Free Passport Photo Maker**, Free PNG to SVG Converter (`https://free-png-to-svg.web-free.site/?ref=passport-photo-maker`).
     - **Calculators & currency:** Free Online Calculator (`https://free-online-calculator.web-free.site/en/?ref=passport-photo-maker`), Free Currency Converter (`https://free-currency-converter.web-free.site/?ref=passport-photo-maker`), Free Unit Converter (`https://free-unit-converter.web-free.site/?ref=passport-photo-maker`), Free Loan Calculator (`https://free-loan-calculator.web-free.site/?ref=passport-photo-maker`), Free Age Calculator (`https://free-age-calculator.web-free.site/?ref=passport-photo-maker`), Free Percentage Calculator (`https://free-percentage-calculator.web-free.site/?ref=passport-photo-maker`), Free BMI Calculator (`https://free-bmi-calculator.web-free.site/?ref=passport-photo-maker`).
     - **Text & SEO:** Free AI Humanizer (`https://free-ai-humanizer.web-free.site/?ref=passport-photo-maker`), Free SEO Generator (`https://free-seo-generator.web-free.site/?ref=passport-photo-maker`), Free Backlink Generator (`https://free-backlink-generator.web-free.site/?ref=passport-photo-maker`), Free JSON Formatter (`https://free-json-formatter.web-free.site/?ref=passport-photo-maker`), Free Text to Speech (`https://free-text-to-speech.web-free.site/?ref=passport-photo-maker`), Free Speech to Text (`https://free-speech-to-text.web-free.site/?ref=passport-photo-maker`), Free Diff Checker (`https://free-diff-checker.web-free.site/?ref=passport-photo-maker`).
     - **Audio & video:** Free Video to MP3 Converter (`https://free-video-to-mp3.web-free.site/?ref=passport-photo-maker`), Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/?ref=passport-photo-maker`), Free Screen Recorder (`https://free-screen-recorder.web-free.site/?ref=passport-photo-maker`), Free Video Compressor (`https://free-video-compressor.web-free.site/?ref=passport-photo-maker`), Free Video to GIF Converter (`https://free-video-to-gif.web-free.site/?ref=passport-photo-maker`), Free Audio Converter (`https://free-audio-converter.web-free.site/?ref=passport-photo-maker`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/?ref=passport-photo-maker`).
     - **Test data:** Free Fake Address Generator (`https://free-fake-address-generator.web-free.site/?ref=passport-photo-maker`), Free Fake Name Generator (`https://free-fake-name-generator.web-free.site/?ref=passport-photo-maker`).
     - **Security & passwords:** Free Password Generator (`https://free-password-generator.web-free.site/?ref=passport-photo-maker`).
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-passport-photo-maker"`, `[assets]` pointing at the static build output (`dist` or `out`). Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-passport-photo-maker.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box. Add a `.assetsignore` so Worker assets do not publish `AGENT_BRIEF.md`, `wrangler.toml`, `package.json`, `package-lock.json`, `.git/`, `node_modules/`, or other source/config files.
9. Test: production build, run locally (without COEP/COOP), load a portrait, produce a 35×45 mm photo and a 2×2 in photo, generate a print sheet / PDF, check that there is no watermark, check mobile at 390px, confirm no file is uploaded, fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, which models/wasm you shipped (size, how loaded), pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Real Adsterra codes were not ready when this brief was written (the publisher-dashboard collection was stopped mid-run on an earlier attempt). **Do not invent real-looking keys.** Wire all 10 units and `public/ads.json` with the exact placeholder strings below (32 characters each, prefix `wf23placeholder0`). A later swap (or a follow-up to you with real keys) will replace them before deploy.

Code formats (KEY = the 32-char placeholder, later a 32-hex hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-passport-photo-maker.web-free.site — site ID SITE_ID_PENDING
Popunder wf23placeholder0popunder00000000
Native Banner wf23placeholder0nativebanner0000
Smartlink wf23placeholder0smartlink0000000
Social Bar wf23placeholder0socialbar0000000
468x60 wf23placeholder0banner468x600000
160x300 wf23placeholder0banner160x300000
320x50 wf23placeholder0banner320x500000
300x250 wf23placeholder0banner300x250000
160x600 wf23placeholder0banner160x600000
728x90 wf23placeholder0banner728x900000


---
NOTE: any /workspace/... box path mentioned above is NOT accessible to you; everything you need is inline below. Clone the base repo from GitHub yourself.

# COMMON RULES (contents of agent-brief-common.md)
COMMON RULES (from Gentil, mandatory):
- Start from an existing, usable open-source repository: search GitHub, then compare stars, activity, license (MIT/Apache/BSD preferred; avoid AGPL/GPL unless nothing else fits) and code quality. Import its code into this repo, keep its LICENSE, and credit it in the footer and on /about.
- Do NOT write the tool from scratch. If no suitable open-source base exists, STOP before coding and report the 2-3 best candidates and why they fail. Gentil must approve any from-scratch work, and he only allows it for one or two simple pages.
- Keep the model you were launched with. Do not switch models.
- Must be hostable on Cloudflare Workers with static assets (free plan). No paid APIs, no server costs, no API keys. Client-side processing preferred.
- Monetization: Adsterra only, never AdSense. This brief ships obviously fake placeholder keys (the `wf23placeholder0…` strings). Wire all 10 units with those exact strings so they can be swapped later. Do not invent real-looking 32-hex Adsterra keys, URLs, or site IDs. If this prompt (or a later follow-up) includes a filled "ADSTERRA CODES FOR THIS SITE" section with real 32-hex keys, use those instead of the placeholders. Integrate all 10 units following the free-invoice-generator pattern: Popunder and Social Bar in the HTML; 728x90 at the top; sidebar 160x600 and 160x300; mid-page 728x90, 468x60 and Native; 300x250; sticky 320x50 on mobile; Smartlink as a discreet link. Banners go in isolated iframes with atOptions {key, format:'iframe', height, width, params:{}} and src https://bauval.org/22/<key>. Also write public/ads.json with all the codes. Never set COEP/COOP headers. Ads must not break the tool.
- SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical and OG tags; JSON-LD (WebApplication + FAQPage); a long-tail keyword page or two; FAQ and how-to content; /privacy, /terms, /about and /contact pages (prerendered). The site-specific brief may override hreflang / French landing pages.
- Name: "Free <Tool>". English primary.
- Hook a `scripts/inject-more-tools.mjs` (or equivalent) into `postbuild` or the end of `npm run build`, so the Cloudflare Web Analytics beacon and the "More free tools" block are injected into every built HTML page and cannot be dropped by a later rebuild.
- Add wrangler.toml with name = <repo name> and [assets] pointing to the build output. Do NOT deploy: Gentil's box deploys it.
- Test: build, run it locally, exercise the main feature in a browser, check mobile at 390px, and fix bugs. Critique your own result and fix the issues you find.
- Push everything to main of this repo.
- Final report: the base repo and its license, the pages, the tests and their results, the remaining caveats, and the commit hash.

# ADSTERRA CODES FOR THIS SITE (use only these)
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-passport-photo-maker.web-free.site — site ID SITE_ID_PENDING
Popunder wf23placeholder0popunder00000000
Native Banner wf23placeholder0nativebanner0000
Smartlink wf23placeholder0smartlink0000000
Social Bar wf23placeholder0socialbar0000000
468x60 wf23placeholder0banner468x600000
160x300 wf23placeholder0banner160x300000
320x50 wf23placeholder0banner320x500000
300x250 wf23placeholder0banner300x250000
160x600 wf23placeholder0banner160x600000
728x90 wf23placeholder0banner728x900000
