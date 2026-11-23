# Colours: the High School theme

> **2026-11-20: combined into Open Cosmology.** The High School pages (`/highschool`) use this theme: `app/theme-highschool.css` is imported after `globals.css` in the one root layout, and `data-site="highschool"` is set on `<html>` from the address (`lib/site-section.ts` before the first paint, `components/SiteSection.tsx` on client-side navigation). The university pages have no `data-site` and keep their colours. "Integrating with opencosmology.eu later" below describes the option of a separate root layout, which was not needed.

Owner decision, 2026-11-19: Open Cosmology High School keeps Open Cosmology's fonts, header, footer, components and layout, but has **its own colours**, so it looks like a school rather than a university. The university colours stay exactly as they are.

## How it is built

| File | What it holds | Rule |
|---|---|---|
| `app/globals.css` | Open Cosmology's university palette (parchment, burgundy, gold; dark "night library"), plus all layout and components | A copy of the university file. **Never change colours here.** |
| `app/theme-highschool.css` | Only the colour variables of the high-school palette, plus one footer icon colour | Imported right after `globals.css` in `app/layout.tsx`. Active only when `<html data-site="highschool">`. |
| `app/layout.tsx` | `data-site="highschool"` on `<html>`, browser `themeColor` | |
| `app/manifest.ts`, `scripts/make-icons.ts`, `brand/*.svg` | Installed-app colours and icons, in high-school colours | Run `npm run icons` after changing a `brand/*.svg`. |

Each selector in `theme-highschool.css` wraps the site attribute in `:where()`, so it has exactly the specificity of the university rule it replaces. It wins only because it comes later. The **high-contrast** reading option (`html[data-contrast="high"]`) is slightly more specific and still overrides both palettes; that is intended.

Components must use the variables (`var(--accent)` etc.), never a hex value, so they follow whichever palette is active. The only fixed colours are the "space" drawings in lessons (night-sky diagrams) and the yellow "highlight links" marker, which are the same on both sites.

The homepage shows a photograph (`components/HeroImage.tsx`, files in `public/images/hero/`, originals in `brand/photos/`): the Hubble eXtreme Deep Field on the university site, a Hubble star field on the High School page. Photographs keep their own colours in both themes.

## The palette

Light, "school notebook": cool white paper, navy ink, notebook-blue accent, pencil-yellow ornaments, indigo for "Towards the universe".
Dark, "aubergine": warm plum, lilac-white text, mint accent and links, amber for "Towards the universe". (A green chalkboard was tried first and replaced at the owner's request, 2026-11-19.)

| Variable | Light | Dark | University light / dark (unchanged) |
|---|---|---|---|
| `--bg` | `#f5f8fc` | `#1f1622` | `#f7f3ea` / `#10141d` |
| `--card` | `#ffffff` | `#2a1f2e` | `#fffdf7` / `#171d2a` |
| `--fg` | `#16213a` | `#f3eef4` | `#1e1b16` / `#ece5d6` |
| `--accent`, `--link` | `#1b58a8` | `#7ee0b8` | `#7b1e2b` / `#d3a557` |
| `--link-visited` | `#5a3a9e` | `#c9adf2` | `#6e2a45` / `#c79d63` |
| `--gold` (ornaments) | `#b07a00` | `#7ee0b8` | `#a07f35` / `#d3a557` |
| `--cosmo` | `#4a2f8f` | `#ffc46b` | `#1c3a6e` / `#a9c1ea` |
| `--good` / `--bad` | `#22693a` / `#b02a1f` | `#9ee3ab` / `#f7a3a8` | |

The full list is in `app/theme-highschool.css`.

## Contrast (WCAG 2.2 AA), measured 2026-11-19

Every pair was computed with the WCAG formula; none fails.

- Text (≥ 4.5:1), on `--bg`, `--bg-soft` and `--card`: `--fg`, `--fg-soft`, `--muted`, `--link`, `--link-visited`, `--link-hover`, `--gold-text`, `--accent`, `--good`, `--bad`, `--cosmo`. The lowest are 5.6:1 (light, `--bad` on `--bg-soft`) and 7.3:1 (dark, `--muted` on `--card`).
- `--on-accent` on `--accent`: 7.0 (light) and 10.2 (dark). Good/bad text on their soft backgrounds, and the reverse (quiz letters): at least 5.4:1.
- Controls and graph colours (≥ 3:1), on `--bg` and `--card`: `--control` 4.2 / 4.2, `--gold` 3.5 / 11.1, `--plot-1` … `--plot-5` at least 4.6 (light) and 8.1 (dark).

Links still need their underline: the link colour differs from body text by 2.3:1 (light) and 1.4:1 (dark), as on the university site.

## Integrating with opencosmology.eu later

The university colours do not change at all. To bring the high-school pages into the university project:

1. Copy `app/theme-highschool.css` into the university app and import it **after** its `globals.css`. University pages have no `data-site` attribute, so nothing changes for them.
2. Give the high-school part its own root layout, with a Next.js route group such as `app/(highschool)/layout.tsx`, whose `<html>` has `data-site="highschool"`. The university keeps its own root layout without the attribute. A link between the two root layouts loads the page in full, so the colours switch cleanly.
3. Set each layout's own `viewport.themeColor`, and keep the high-school icons and manifest under their own paths.
4. Do not merge the two palettes into one `:root` block, and do not add colours for the high school to `globals.css`. All high-school colours stay in the one scoped file.
5. Saved settings (`theme`, reading options) are shared within one domain. That is fine: light or dark is a reader's choice, and each part shows its own palette for it.

If one root layout is preferred instead, set `data-site` on `<html>` from the route, using the first path segment. The scoped CSS works the same either way.
