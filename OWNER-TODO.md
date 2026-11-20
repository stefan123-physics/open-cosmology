# What you need to do (site owner)

Things only you can do — accounts, devices, decisions. Everything else (writing pages, reviews, code) can keep going without you.

Tick the boxes as you go.

**Where things stand (updated 2026-11-18).** 414 lessons, all reviewed, and 1 problem set (a draft, see §11); 8.286 is complete, and so are 8.01, 18.03, 8.044, 8.05, 8.06 and 8.902. Open items for you, in order of usefulness:
1. **The installed app on your phones** (section 4e): the iPhone status-bar fix and the Android update check.
2. **Test the accessibility features** on your devices (sections 4b and 4d: read-aloud, graph sound and search need your ears).
3. **Run the screen-reader checklist** once, with NVDA on Windows (section 4c).
4. **Decisions** in sections 6 and 7 (exam-review pages; people, portraits, and which university extras come first), whenever you like.
5. **Social-media preview** (section 3) and the optional GitHub details (sections 2E and 8).

What *I* will work on next, and everything already done, is in [docs/PLAN.md](docs/PLAN.md) (programme status and order of work) and "Current state and next steps" in [AGENTS.md](AGENTS.md). Ask "what's left to do?" any time and I'll answer from this file and those two.

---

## 1. Put the site online (Vercel) — about 10 minutes

- [x] Go to [vercel.com](https://vercel.com) and sign in with your GitHub account (`raimonvibe`).
- [x] Click **Add New… → Project**, find **open-cosmology** and click **Import**.
- [x] Leave every setting as it is (Vercel detects Next.js automatically) and click **Deploy**.
- [x] Wait for the build to finish (a few minutes), then open the link Vercel gives you, e.g. `open-cosmology.vercel.app`.

From now on, **every push to `main` updates the site automatically**.

If the build fails, open the build log in Vercel. The build first runs the content check (`npm run content:check`); its error message names the file and the problem.

## 2. Your own domain: opencosmology.eu (Hostinger → Vercel)

Do these in this order.

**A. Vercel: add the domain**
- [x] Vercel → project **open-cosmology** → **Settings → Domains** → **Add Domain** → type `opencosmology.eu` → **Add**.
- [x] When Vercel asks, choose the recommended option: **add `www.opencosmology.eu` too and redirect it to `opencosmology.eu`**. (If Vercel makes `www` the main one instead: first set `opencosmology.eu` to *Connect to an environment → Production*, then set `www` to *Redirect → 308 → opencosmology.eu*; redirects cannot be chained.)
- [x] Vercel now shows both domains with "Invalid Configuration" and the DNS records it needs, usually:
  - `opencosmology.eu`: type **A**, name **@**, value an IP address (e.g. `76.76.21.21`, or the one Vercel shows)
  - `www.opencosmology.eu`: type **CNAME**, name **www**, value e.g. `cname.vercel-dns.com` (or the one Vercel shows)

  Keep this page open: always copy the values **Vercel shows you**, not the examples here.

**B. Hostinger: point the domain at Vercel**
- [x] hPanel → **Domains** → `opencosmology.eu` → **DNS / Nameservers** → **DNS records**.
- [x] Delete the old records that would clash: any **A** record with name **@**, any **AAAA** record with name **@** (Hostinger's parking page), and any **CNAME** (or A) record with name **www**. Leave **MX** and **TXT** records alone (they are for email).
- [x] Add **A**: name `@`, points to the IP Vercel showed, TTL leave as is (or 3600).
- [x] Add **CNAME**: name `www`, target the value Vercel showed, TTL as is.
- [x] If there are **CAA** records, either delete them or add one allowing `letsencrypt.org` (Vercel's HTTPS certificates come from Let's Encrypt).

**C. Wait for it to work**
- [x] Back in Vercel → **Settings → Domains**: within minutes (sometimes up to a few hours) both lines turn to "Valid Configuration" and Vercel issues the HTTPS certificate on its own.
- [x] Open `https://opencosmology.eu` and `https://www.opencosmology.eu` (the second should land on the first).

**D. Tell the site its address**
- [x] Vercel → **Settings → Environment Variables** → **Add**: name `NEXT_PUBLIC_SITE_URL`, value `https://opencosmology.eu` (no slash at the end), environment **Production** → **Save**.
- [x] **Deployments** → newest deployment → **⋯ → Redeploy** (needed so the build uses the new value).

**E. Check**
- [x] `https://opencosmology.eu/sitemap.xml` lists `https://opencosmology.eu/…` addresses.
- [x] On a lesson, "Report a mistake on this page" opens a GitHub issue whose page link starts with `https://opencosmology.eu`.
- [ ] Section 3 below (social-media preview), using the new address.
- [ ] Optional: GitHub repo → ⚙ next to **About** → Website: `https://opencosmology.eu`.

The old `open-cosmology.vercel.app` address keeps working. If you want it to forward to the new domain: Vercel → **Settings → Domains** → the `.vercel.app` line → **Edit** → **Redirect to** `opencosmology.eu`.

## 3. Check the social-media preview

- [ ] Paste your site link into [opengraph.xyz](https://www.opengraph.xyz) and check the image and title appear.
- [ ] Try a lesson link too, e.g. `/courses/8-01/vectors` — it should show the same image with the lesson's own title.
- [ ] If an old preview keeps showing on a platform, use its own link-debug tool to refresh it (for example LinkedIn Post Inspector or Facebook Sharing Debugger).

## 4. Test on real devices

I could only test the read-aloud logic with a simulated voice, because my test browser has no voices installed. Please try:

### iPhone / iPad (Safari)
- [x] Open a lesson, tap **Listen to this page**: does it speak?
- [x] Switch between **Female** and **Male**: do you hear two different voices?
- [x] Tap the small speaker button next to a section heading: does it read only that section?
- [x] Select some text: does a **Read selection** button appear, and does it work?
- [x] Turn on **Keep reading** (⚙ Voice & speed) and let a page finish. iOS may pause when it moves to the next page — then one tap on ▶ should continue. Note whether that happens.
- [x] **Add to Home Screen** (Share button): is the icon correct?

### Android phone (Chrome)
- [x] Same read-aloud checks as above.
- [x] Do the voice buttons say **Female / Male** or **Higher / Lower**? (Higher/Lower means your phone has only one English voice — that's expected on many Android phones.)
- [x] **Add to Home screen** / **Install app** from the Chrome menu: is the icon correct?

### Computer (Chrome, Edge, Safari or Firefox)
- [x] Read-aloud with both voices; try **Exact voice** in the voice settings.
- [x] Search: press `Ctrl + K` (or `⌘ K` on Mac), type "hubble", press Enter.
- [x] Check the browser-tab icon (favicon) shows.

If something doesn't work, note the device, browser and what happened, and tell me — I can fix it from that description.

### 4b. The accessibility features added on 2026-11-15
On a phone and on a computer:
- [ ] **Focus mode**: on any page the menus disappear and an **Exit focus** bar appears; on a **lesson** or a reading page (About, Accessibility) it also pages through the sections. Try it from "Aa" → *Focus and keyboard* → tick **Focus mode**. The menus disappear and a bar at the bottom shows *Previous*, a list of parts, *Next* and *Exit focus*. On a computer, try `j` and `k`, and `Ctrl F` for a word in another section (Chrome/Edge should jump to it).
- [ ] **Single-key shortcuts**: untick it, then press `?` or `/` on a page — nothing should happen. Tick it again and `?` shows the shortcuts list.
- [ ] **Listen to this graph**: on a lesson with a graph (e.g. 8.01 Contact forces), press it: three seconds of rising/falling tone, and the button turns into *Stop*.
- [ ] **Flashcards**: at the end of a lesson, turn a card over and rate it; then open **Review** in the menu and check the card is listed when due. Try *Export progress* once (it saves a small file) and *Import progress* with that file.
- [ ] **Symbol popups** now show a unit for physical quantities (tap a ρ or H in a cosmology formula).
- [ ] Social icons in the footer on a real phone: tapping one briefly shows its brand colour (couldn't be checked without a touch screen).
- [ ] Your phone's or computer's own **reduce motion** setting: the footer icon wave and other animations should stay still.

### 4d. Read-aloud, graph sound and search (added 2026-11-15, evening)
I can check what the site sends to the speech engine, but not hear it. Please listen on **Chrome, Edge and Firefox** on the computer, **Chrome on Android** and **Safari on iPhone**:
- [ ] **First word**: open a lesson in a new tab, press *Listen to this page* once. The first word (the page title, e.g. "Vectors") must be heard in full. Try also with an "Online (Natural)" voice in Edge (read-aloud settings).
- [ ] **Graph sound**: press *Listen to this graph* on 8.01 Contact forces as the first thing after opening the page: the tone must start from the very beginning (also with Bluetooth headphones).
- [ ] **Symbols speaker** under "Symbols on this page": the first symbol name must be heard in full.
- [ ] **Brackets**: on 8.01 Vectors, the rule (A + B) + C should sound like "the quantity A plus B, all plus C …". If you hear "A plus B plus C", reload the page once and tell me: it would mean an old copy of the site was still running.
- [ ] **Symbols as letters**: on 8.01 Universal gravitation, "m₁ m₂" must not be heard as "metre", and "r = R" should say "capital R".
- [ ] **Search**: search "associative" (finds Vectors, at the section), then turn on airplane mode after saving a course for offline use and search again.

### 4e. The site installed as an app (added 2026-11-17)
- [ ] **iPhone**: remove the old home-screen icon, open the site in Safari, Share → **Add to Home Screen**, and open it from the icon. The top of the page must sit below the clock and battery, not under them, also in landscape and with the search and Reading options panels open.
- [ ] **Android**: after a new version is deployed, does the installed app feel slow for a while? Note whether you saved courses for offline use (Reading options → Offline shows it) and roughly how many. Saved pages used to be re-downloaded all at once after every update; with PR #49 this happens at most once a day, one page at a time in idle moments, and never on mobile data. Tell me if it still feels slow.
- [ ] On both: when a new version is out, the notice "A new version of Open Cosmology is available" appears; **Reload** shows the new version.

### 4f. The glossary of difficult words (added 2026-11-19)
- [ ] **Phone**: on a lesson (e.g. 8.286 The homogeneous expanding universe), tap a marked word: a sheet slides up from the bottom with the meaning, the word stays visible above it; *More* shows the fuller meaning; swipe down or tap outside to close.
- [ ] **Reading option** "Explain difficult words" (Aa): try *every*, *academic* and *off*, and check the marks change.
- [ ] **Screen reader**: tab to a marked word (or press `w`), press Space: the panel is announced with the word and its meaning; Escape returns to the word. Also open "Words on this page" at the end of a lesson.
- [ ] **Save to my words** (☆) on two words, then check them on the Glossary page under *My words* and as cards on Review.
- [ ] **Search** "honey": the glossary word *viscosity* comes first.

### 4c. Screen reader (one session, about 20 minutes)
- [ ] Follow [docs/SCREEN_READER_TESTS.md](docs/SCREEN_READER_TESTS.md) with NVDA (free) on Windows, and fill in the results table at the end. Orca on Linux too if you have it.

## 5. One licence check (PhET)

- [x] Checked (2026-11-14): PhET simulations are **CC BY-NC 4.0**. Non-commercial use is free with PhET's exact attribution sentence, which the site now shows under every simulation.
- [ ] Keep the site non-commercial: **no ads, sponsorships or paid features** on any page with a PhET simulation (PhET counts ad-supported sites as commercial).

## 6. Decisions only you can make

- [x] **Dark matter and structure formation** — decided 2026-11-14: MIT 8.902 (Fall 2023) and 8.942 (Fall 2001) first, plus Ferreras *Fundamentals of Dark Matter* (CC BY-NC) and OpenLearn; Yale ASTR 160 link-only until its licence is checked. Details in `AGENTS.md`.
- [x] **Scope and order** — settled: the site is a complete university programme, four undergraduate years plus (decided 2026-11-15) a graduate Year V with 8.902 and 8.962. Every lecture of every course gets pages, in MIT's order; see "Scope" in `AGENTS.md`.
- [x] **Share image (five years)** — done 2026-11-15: the share images were re-rendered from `brand/og.template.svg` with the brand fonts embedded (headless Microsoft Edge, no new dependency), and the README screenshots were retaken. Note: `npm run icons` still falls back to a monospace font on Windows for the share image; run it on macOS/Linux, or render the share image the same way again.
- [ ] **OpenStax** (2026-11-20): OpenStax's books say they may not be "ingested" into generative AI without OpenStax's permission, so switching off model training is not enough: pasting their text into Claude counts (conditions in `AGENTS.md`, Writing rules 10). Before any OpenStax work: (1) ask OpenStax for written permission (a Content Reuse Request, saying the text would be read by an AI assistant to help rewrite it) and put their reply in the repo, personal email addresses removed; (2) once permitted, switch off model training in your claude.ai privacy settings, then start a new session; (3) decide where it is used: a separate high-school physics site, a course on this site, or fact-checking only. Until (1), keep OpenStax text out of every AI session.
- [x] **AI terms of the other sources** — checked 2026-11-20 (table in `AGENTS.md`, Writing rules 11). MIT OCW allows AI use (non-commercial); the Ferreras book's copyright page (CC BY-NC 4.0) has no AI clause; ACS, Springer Nature, OUP, IOP/AAS and APS restrict feeding their articles into AI, so those papers stay cited only (they were never read in full).
- [x] **IAEA terms of use** — checked 2026-11-20 by the owner: no AI or text-mining clause; reuse for teaching allowed with the IAEA credited and no implied endorsement; NDS data free for educational use. The one citing page (8.033 atoms-photons-nuclei) now names the IAEA; no IAEA logo is used.
- [ ] **Optional: tell UCL Press** that the site teaches a course from Ferreras, *Fundamentals of Dark Matter*. The book asks teachers to notify uclpresspublishing@ucl.ac.uk so UCL Press can track how its open textbooks are used. Not required by the licence.
- [ ] **Siyavula section pages** (raised 2026-11-20 by the Block 6 reviews): Siyavula's contents pages say the textbook content is CC BY 3.0, but some section pages, opened logged out, show only the footer "closed copyright license … All rights reserved" (for example Grade 10 section 17.1 and Grade 11 section 11.3). Confirm once with Siyavula that the section pages fall under the CC BY 3.0 statement.
- [ ] **Other Siyavula books** (2026-11-20): lesson 6.8 uses Siyavula *Natural Sciences* Grade 7 (section 15.1) for the idea of efficiency. The source lists in docs/HIGHSCHOOL-PLAN.md §2.0 and AGENTS.md (Writing rules 11) name only *Everything Science* / *Everything Maths* Grades 10–12. Decide whether to add "other Siyavula textbooks, same terms" to both (on `main`).
- [x] **"Draft" labels** — decided 2026-11-14: review against MIT's notes, slides and transcripts is enough. Pages are marked `reviewed` once their review findings are resolved.

## 7. The bigger plan

The roadmap for turning the site into a complete programme — more lessons, problem sets with solutions, practice exams and lab work — is in [ROADMAP.md](ROADMAP.md). Decisions you may want to make there:

- [ ] Start exercises now (problem sets per course), or finish more lessons first?
- [ ] Which datasets to use for the cosmology real-data labs (each needs its licence checked).
- [ ] Recommending a phone app (e.g. phyphox) for home experiments.

People, history and other university extras (plan in [docs/PLAN.md](docs/PLAN.md) §8, added 2026-11-17):

- [ ] Start the **People** feature (short biographies, cards in lessons, `/people`, a timeline)? It is the suggested first step.
- [ ] **Portraits:** only public-domain or CC-licensed photos with credit, or no photos at all (a drawn initial for everyone)?
- [ ] **Living people** (lecturers such as Guth and Zwiebach, scientists such as Peebles and Penrose): include them with their professional work only, or leave them out of `/people`?
- [ ] **Computation notebooks:** JavaScript in the page (small, works offline) or Python in the browser (what students use, but about 10 MB to download)? PLAN.md §8 suggests starting with JavaScript.
- [ ] Which extras after that: "How we know" pages, common misconceptions, open questions, further reading, learning outcomes, concept map, estimation problems, computation notebooks, capstone project, careers?

## 8. Nice to have (optional)

- [ ] On GitHub, add a short description and website link to the repository (the ⚙ next to **About** on the repo page), plus topics like `cosmology`, `physics`, `education`, `mit-ocw`.
- [ ] If you want visitor statistics, choose a privacy-friendly option (for example Vercel Web Analytics, which uses no cookies) and tell me — I'll add it (the privacy page and the security headers then need updating too).

## Next session (written 2026-11-17)

Where we stopped: seven lessons runs are merged (361 pages); the symbols glossary is split per year; read-aloud says Dirac notation; the installed app fits the iPhone status bar; CI is fast again.

- [ ] **You, on your phones:** section 4e.
- [ ] **Decide:** should exam-review and exam lectures (for example 18.01 Lectures 7 and 8) get a short page each, or stay out? Most courses not marked complete lack only these.
- [x] 8.05 Lectures 18–26 written and reviewed on branch `lessons-run-8` (2026-11-17): 8.05 is complete.
- [x] 8.902 Lectures 1–12, 17, 18, 20, 21 written and reviewed on branch `lessons-run-9` (2026-11-18): 8.902 is complete.
- [x] **Review and merge** the three run-9 pull requests, in order (CMB and early universe, then cosmology, then galaxies); each later one is based on the one before.
- [x] 8.06 lecture list and Lectures 1–8 written, reviewed and merged (runs 10 and 11, 2026-11-18; run 11 is PRs #64–#66).
- [x] 8.06 Lectures 9–14 written, reviewed and merged (run 12, 2026-11-18, PRs #68–#70; Lecture 13 has two pages).
- [x] 8.06 Lectures 15–24 written, reviewed and merged (run 13, 2026-11-18, PRs #73–#75; Lecture 22 has two pages): 8.06 is complete.
- [ ] **Next lessons:** the Year IV courses 8.07, 8.08 and 8.09 (docs/YEAR-IV-PLAN.md; their course files and lecture lists come first), then 8.962. Use the prompts in section 10 with a new branch name (for example `lessons-run-14`).
- [ ] **Small decisions from run 13** (docs/RUN-lessons-run-13.md): rename the shared `r-e` symbol entry (now "effective radius", from the galaxy pages) to something neutral, so a page can use r_e for the classical electron radius; and start chapter 8 at Lecture 22 in `content/year-3/8.06/_course.json`, so the Lecture 22 identical-particles page shows under chapter 8.
- [ ] **Small follow-up for me (optional):** the axis numbers and titles on Plot graphs do not yet grow with the text size (the point labels do).
- [ ] Still open from earlier: the device tests in 4b and 4d, and the screen-reader session in 4c.

## 9. Ideas to ask me for later

Copy a line into the chat when you want it done.

- [ ] "On the graphs, add a short instruction next to the Listen button" (what the tone means: higher pitch is a higher value, silence where the curve has no value).

## 10. Prompts for an unattended lessons run

Copy each prompt into the chat at the right moment. The first run (2026-11-15) used them and added 18 lessons; see `docs/RUN-lessons-run.md`.

**1. Start the run**

> Add new lessons to Open Cosmology (github.com/raimonvibe/open-cosmology) on your own for up to five hours, without asking me to confirm each step.
>
> Decide yourself which lessons to add next, based on what the site already has.
> Follow the site's existing rules, make sure the build passes, and commit after each lesson.
> Work on a new branch called lessons-run and do not push or deploy. I will review and merge myself.
> Only add or change files for new lessons. Do not edit existing lessons or site code.
> Work through the tasks and stop when you are done or the five hours are up. Leave a short summary of what you added.
>
> Before you start: tell me what I need to set up on my end so you can run without confirmations, and share any ideas you have to make this run well.
> Also check my Windows power settings (for example with powercfg in PowerShell) and confirm that sleep and hibernate are set to never when plugged in. If they are not, tell me what to change.

**2. Stop early, cleanly**

> Finish the lessons you're working on now, and all their checks, make sure the build passes, and commit it. Then stop. Don't start a new lesson. Write a short summary of everything added in this run.

**3. Hand the work over for review**

> Combine the 19 stacked lesson pull requests into one pull request per course. Keep each lesson as its own commit inside it, close the old pull requests, and don't merge anything.

**4. Ship as you go (push, merge and check live during the run)**

> Push your latest changes to GitHub when they're ready, split into a few manageable PRs. Monitor their status, fix any issues, check that everything is working live, and then carry on with your own work.

(Used in run 14, 2026-11-18: each batch of one or two lectures became its own pull request, merged once its checks passed, and the new pages were checked on the live site before the run went on. This prompt overrides "do not push or deploy" in prompt 1.)

(If a branch called `lessons-run` already exists, name a new one in prompt 1, for example `lessons-run-2`.)

---

## 12. Glossary of difficult words (plan, 2026-11-19)

- [x] Read [docs/GLOSSARY-PLAN.md](docs/GLOSSARY-PLAN.md) and answer its §12 (answered 2026-11-19) (default marking, pronunciation, origins, hover preview, "My words", pilot course, spot-check size, translations). Then the pilot (8.286) can be built.
- [ ] Glossary: spot-check 20 words of each batch of about 150 once batches arrive (decision 7).

## 11. Problem sets (pilot, 2026-11-18)

- [ ] Start the blind-solve review of `content/year-4/8.286/8-286-problem-set-1.mdx` in a new chat (reviewer file: `.claude/agents/mit-lecture-reviewer.md`, section "Problem sets"): hand over the statements without hints, solutions and answer boxes. The page stays "Draft" until its findings are resolved.
- [ ] Try the set on a phone and with a screen reader: type a formula, hear "In words", open a hint and a solution, check that the score and the tick on the 8.286 course page follow.
- [ ] Decide what comes next: exam mode (design §6) or more problem sets.

## What I can keep doing without you

- Write the next lessons from MIT's lecture notes and transcripts, year by year (next: the Year IV courses, starting with 8.07), each with its calculation tests, symbols and an independent review.
- Fix anything you report from the device and screen-reader tests above.

Just say **"continue writing content"** whenever you want more pages.
