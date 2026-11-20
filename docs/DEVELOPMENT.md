# Development guide

Technical documentation for contributors. For what the site is, see the [README](../README.md); AI assistants should read [AGENTS.md](../AGENTS.md).

## Run it

```bash
npm install
npm run dev            # http://localhost:3000
npm run content:check  # validate all content
npm run build          # content check + production build (must pass before committing)
npx tsc --noEmit       # type check
npm run calc:test      # recompute every number stored in calcs/ (Python, see below)
npm run scan           # every maths symbol used, and on which pages
```

The calc tests need Python once: `python -m venv .venv`, then `.venv/Scripts/pip install -r requirements-dev.txt` (Windows) or `.venv/bin/pip …`. The full list of commands, including the browser tests for shortcuts and graph labels, is in [AGENTS.md](../AGENTS.md#commands).

GitHub Actions (`.github/workflows/checks.yml`) runs the content check, type check, calc tests and build on every pull request.

Deploy: import the repository in Vercel (framework preset: Next.js). No environment variables are required; set `NEXT_PUBLIC_SITE_URL` for correct sitemap URLs.

## How it works

Nothing about individual pages is hard-coded. Everything is generated from `/content`:

```
content/
  year-1/
    _year.json                 # year title + description
    8.01/
      _course.json             # course metadata, MIT syllabus, themes
      vectors.mdx              # one concept = one file
      position-and-velocity-1d.mdx
```

- **Routes**: `/courses/<course-slug>/<page-slug>` for every `.mdx` file, `/courses/<course-slug>` for every `_course.json`.
- **Navigation**: the sidebar, course index, prev/next, learning path and homepage are built from the folder and frontmatter.
- **Graph**: `prerequisites` builds "You need this first" (plus the full reading path). The reverse edges build "Pages that build on this" and "Where this leads in cosmology". `leadsTo` links forward to cosmology lectures before their pages exist; they become real links once a page for that lecture is added.

**Adding a page = adding one file.** `npm run new:page -- 8.01 3 "Projectile motion"` creates a file with full frontmatter.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the frontmatter fields, components and source rules.

## Components available in MDX

| Component | Purpose |
|-----------|---------|
| `<Formula tex cite at label>` | KaTeX display equation, always with a source citation |
| `<Plot curves params domain …>` | Interactive Plotly graph computed from formulas (mathjs syntax), with sliders, tangent and secant lines |
| `<VectorDiagram vectors sum components angle>` | Generated SVG vector diagram |
| `<ExpansionDiagram>`, `<ParallaxDiagram>` | Generated diagrams of a stretching grid of galaxies and of stellar parallax |
| `<PhET id title>` | PhET simulation (click to load), with credit; defaults to frontmatter `phet` |
| `<WorkedExample title>` + `<Problem>` + `<Step title>` | Step-by-step solution, revealed one step at a time |
| `<Callout kind="key\|note\|cosmology\|warning">` | Asides; `cosmology` links forward |

Automatically added to every page: `<Quiz>` and `<Flashcards>` (from frontmatter), prerequisite / forward-link boxes, "Symbols on this page", the "Report a mistake" bar and the `<Credit>` footer.

Graph and diagram labels are placed by shared code and checked by `content:check` for a 320 px phone and a wide screen at the smallest and largest text size; graphs are never static images.

## Read aloud

A site-wide reader (`components/speech/`, Web Speech API, no external service):

- **Listen** in the header reads any page; topic pages also have **Listen to this page** controls.
- Every `##` section, worked example and callout has its own ▶ button (sections are wrapped automatically by `lib/rehype-sections.ts`). Selecting any text shows **Read selection**.
- **Keep reading** continues to the next page in the learning path, so the whole site can be listened to in order.
- A player bar shows what is being read, with previous/next paragraph, pause, stop (Esc) and a voice panel. The current paragraph is highlighted and scrolled into view.
- **Voices**: browsers don't report a voice's gender, so `lib/voices.ts` recognises female and male voices by name (iPhone/Mac, Windows/Edge, Chrome, Android variant codes). If a device doesn't have both (common on Android), the choice becomes **Higher / Lower**: the best voice at a higher or lower pitch. An exact voice can also be chosen. Settings are remembered per browser.
- Maths is spoken from its TeX source ("v equals dx over dt").

## Checks that keep the content right

- **`content:check`** (`scripts/check-content.ts`) validates frontmatter and course files, every citation, prerequisite and link, symbols, spoken maths (no lost grouping, no gaps), graph labels, PhET checksums and the house style (no `$$`, no em dashes, no `confirm()`). The build fails on any error.
- **Calcs**: every number on a page (worked examples, captions, quiz answers) is stored in `calcs/<course>/<slug>.yaml` and recomputed by pytest with unit checks. Quoted values such as H₀ or the age of the universe come from `calcs/values.yaml`. Plan: [CALC_TESTS_PLAN.md](CALC_TESTS_PLAN.md).
- **Symbols**: every maths symbol needs a meaning in `data/symbols.json` that applies on the page (scoped with `pages` or `courses` where a letter means something else). It drives the tap-to-explain popups, "Symbols on this page", read-aloud names and the glossary: `/symbols` (index) and `/symbols/year-N`, one page per year; the lists of lessons per symbol load from `/symbols-usage.json` when opened, so no page outgrows Vercel's 20 MB limit. Plan: [SYMBOLS_PLAN.md](SYMBOLS_PLAN.md).

## Offline and installing as an app

- `public/sw.js` is a hand-written service worker (production builds only): pages network-first with saved or visited copies as fallback, build files cache-first, `/offline` when nothing is saved. Bump its `VERSION` when its logic changes.
- Readers save courses on request (course pages, Reading options → Offline). `/offline-manifest.json` lists what to save; `lib/offline.ts` does the saving, the refresh after a deploy and the removal of build files an older version used.
- Every build has one version (`NEXT_PUBLIC_BUILD_VERSION`, from Vercel's commit). `components/offline/UpdateNotice.tsx` compares it with the deployed one, offers a reload, and refreshes saved copies in the background.
- The site installs as an app (`app/manifest.ts`; iPhone: Share → Add to Home Screen). On an iPhone the installed app draws under the status bar (`viewport-fit=cover`), and `app/globals.css` keeps everything clear of it with the safe-area insets.
- Anything new that is stored in the browser or sent to another host goes on `/privacy` and in the Content-Security-Policy (`next.config.ts`) first.

## Accessibility

Reading options (text size, spacing, fonts, contrast, motion, focus mode, single-key shortcuts), spoken maths, graphs as tables and sound, and dialogs are described in [AGENTS.md](../AGENTS.md) and on the site's `/accessibility` page; the manual screen-reader checklist is [SCREEN_READER_TESTS.md](SCREEN_READER_TESTS.md). Target: WCAG 2.2 AA.

## Review pipeline

Each page is compared with its MIT lecture by a separate checking agent (`.claude/agents/mit-lecture-reviewer.md`). It writes `reviews/<course>/<slug>.md` listing differences, arithmetic checks, coverage and licensing issues. A page may only be marked `status: reviewed` once that file exists and its findings are resolved; `content:check` enforces this.

## Icons and share image

The logo and share image are drawn as SVG in `brand/` and rendered by `npm run icons` into:

| File | Used for |
|------|----------|
| `app/favicon.ico` (16/32/48 px), `app/icon.svg` | Browser tab |
| `app/apple-icon.png` (180 px) | iPhone/iPad "Add to Home Screen" |
| `public/icons/icon-192.png`, `icon-512.png`, `maskable-512.png` + `app/manifest.ts` | Android "Add to Home screen" / install |
| `app/opengraph-image.png`, `app/twitter-image.png` (1200×630) | Link previews on social media and chat apps |

Share images need absolute URLs: on Vercel the production domain is detected automatically; elsewhere set `NEXT_PUBLIC_SITE_URL=https://your-domain`.

## License

CC BY-NC-SA 4.0 — see [LICENSE](../LICENSE). Based on MIT OpenCourseWare; MIT does not endorse this site.
