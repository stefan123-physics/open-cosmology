---
page: content/year-5/Ferreras/quintessence-and-the-dark-sector.mdx
reviewed: 2026-11-15
sources_read:
  - https://doi.org/10.14324/111.9781800084704 — Ferreras, Fundamentals of Dark Matter (UCL Press 2025), local PDF and pdftotext extraction, Sections 8.3–8.4, printed pp. 186–190 (read; maths symbols garbled, equations reconstructed from `-layout` and `-raw` extractions of PDF pp. 200–204). Sections 8.1–8.2 not compared (left to 8.286 pages by design).
verdict: pass-with-notes
---

# Review: Quintessence, and is dark energy connected to dark matter?

## Differences from the MIT source
(The source here is the Ferreras textbook, not MIT.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | "Are dark matter and dark energy connected?": "To replace dark matter, gravity must be **stronger** at low accelerations"; also quiz 4 | "one would need to **weaken** the force of gravity at low acceleration (Chapter 7)" (p. 189) | "stronger" | The page is physically right: MOND increases the acceleration below a₀ (Ch. 7, p. 161: "a higher effective acceleration"). The book's "weaken" is a slip. But the page differs from its source without saying so. Add a bracketed note, as for Verlinde: "[The book says 'weaken'; Chapter 7's MOND makes gravity stronger at low accelerations.]" |
| 2 | warning | "A tiny number…", flashcard 2, summary: "about 3 × 10⁻⁴⁷ GeV⁴" | ρ_Λ,0 ≈ 10⁻⁴⁸ GeV⁴ (p. 187; the digits "10 … 48" are legible, the sign and "≈" are garbled) | 3 × 10⁻⁴⁷ GeV⁴, computed for H₀ = 70, Ω_Λ = 0.7 | The page's value is correct (recomputed: 2.78 × 10⁻⁴⁷ GeV⁴), but it is about 30 × the book's figure, and the page does not say so. Add a short note that the book quotes ~10⁻⁴⁸ GeV⁴ and this page computes the value directly. |
| 3 | warning | Slow-roll `<Formula>` `at="Eqs. (8.19)–(8.20), p. 187"` | Both conditions, φ̇² ≪ V(φ) and φ̈ ≪ V′(φ), sit under the single number (8.20). "(8.19)" is printed beside (8.18) with no equation of its own (probably a typesetting leftover). | (8.19)–(8.20) | `at="Eq. (8.20), p. 187"`. It is uncertain what, if anything, 8.19 labels; it is not the slow-roll condition. |
| 4 | info | Lookback time to z = 1 | "Δt ≈ 7.8 Gyr … 57% of the current age" (p. 187) | 7.7 Gyr, 57%, with its parameters stated (H₀ = 70, Ω_m = 0.3) | Recomputed: 7.72 Gyr and 57.3% (age 13.47 Gyr). The page is correct. The small difference from the book's 7.8 is not mentioned; that is acceptable since the parameters are given, but a brief note would match the treatment of #2. |
| 5 | info | GUT vacuum energy "10⁶⁰ GeV⁴" | "ρ_Λ ~ 10⁶⁰ GeV" (p. 188; the power 4 is missing) | 10⁶⁰ GeV⁴ | The page correctly fixes the book's units. Fine. |
| 6 | info | Quiz 1 explanation: "A field frozen at the top of its potential acts like a cosmological constant" | Book: w → −1 when the potential energy dominates | "frozen at the top of its potential" | Any frozen field (φ̇ = 0) has w = −1, not only one at the top of its potential. Suggest "a field that barely moves". |
| 7 | info | Symbol Λ | — | Λ is used both in Ω_Λ (cosmological constant) and as the phase-transition energy scale (Λ ~ 10¹⁵ GeV) in the same section | This follows the book's notation, but it can confuse readers. Check that the `/symbols` meaning for Λ on this page covers both uses. content:check gave no symbol warning. |

All formulas match the book:
- (8.16) $\mathcal L = \tfrac12\partial^\mu\phi\,\partial_\mu\phi - V(\phi)$, p. 187.
- (8.17)–(8.18) $\rho = \tfrac12\dot\phi^2 + V$ and $p = \tfrac12\dot\phi^2 - V$, p. 187.
- (8.20) the slow-roll conditions, p. 187.
- (8.21) $\rho_v = \tfrac12\int_0^{k_\text{max}}\frac{d^3k}{(2\pi)^3}\sqrt{k^2+m^2} \sim k_\text{max}^4$, p. 188. The book has an intermediate $\propto\int k^3dk$ step, which the page omits. That is fine.

Page numbers were checked against the printed headers ("…DARK ENERGY 187" and "188 FUNDAMENTALS…").

The claims also match the book:
- Dark energy cannot be treated like a particle candidate; it needs negative pressure.
- Vacuum energy as the minimum of the potential, and the "risky path" warning.
- w from −1 to +1.
- Supernovae out to z ≈ 1.
- Quintessence as a slow-roll field with time-varying w.
- More than 100 orders of magnitude of fine-tuning.
- The decaying-Λ idea and the coincidence "why now".
- The 70% / 25% / 80% budget.
- Dark matter behaves like ordinary matter gravitationally; dark energy is more like vacuum fluctuations.
- Dark energy needs repulsion, "similar to electromagnetism".
- Covariant emergent gravity (Verlinde and Hossenfelder; Hossenfelder 2017).
- "The road lies ahead".
- The bracketed Verlinde/"Verlinder" note is correct and appropriate.

## Arithmetic and answer checks
- Lookback, ∫ da/(a²H) from a = 0.5 to 1 with H₀ = 70, (0.3, 0.7): 7.72 Gyr. Age: 13.47 Gyr. Ratio: 0.573. The page's 7.7 Gyr and 57% are correct.
- Dark energy density:
  - 0.7 × 3H₀²/(8πG) = 6.44 × 10⁻²⁷ kg/m³, which is 5.79 × 10⁻¹⁰ J/m³ = 3.62 GeV/m³.
  - × (ħc)³ = 7.68 × 10⁻⁴⁸ GeV³ m³ gives 2.78 × 10⁻⁴⁷ GeV⁴, so "about 3 × 10⁻⁴⁷". Correct.
  - Fourth root: 2.30 × 10⁻¹² GeV = 2.3 meV, so "about 2 meV". Correct.
- GUT: (10¹⁵)⁴ = 10⁶⁰ GeV⁴, and the ratio 10⁶⁰ / 2.78 × 10⁻⁴⁷ = 3.6 × 10¹⁰⁶, so "about 4 × 10¹⁰⁶" (flashcard 2). Correct.
- Worked example "How close to −1?":
  - w = −0.95/1.05 = −0.9048. Correct.
  - 3(1 + w) = 0.286, so "0.29". Correct.
  - 2^−0.286 = 0.820, which is an 18% drop. Correct.
  - Wording: "its density falls by 2^−0.29 ≈ 0.82, about 18%" mixes "falls to" and "falls by". Suggest "falls to 0.82 of its value, an 18% drop". Minor.
- Worked example "Why now?":
  - 0.7/0.3 = 2.333.
  - z = 1: 2.333/8 = 0.292.
  - z = 3: 2.333/64 = 0.0365, so "under 4%". Correct.
- Quiz:
  - Q1: answer 1 is correct (wording, #6).
  - Q2: answer 1 (−0.90) is correct.
  - Q3: answer 1 is correct ("about 4%" for 3.6%).
  - Q4: answer 1 is physically correct but differs from the book's wording (#1).
- Flashcards:
  - Card 1 is correct.
  - Card 2 is correct (see #2 about the book's different value).
  - Card 3 is correct (25/30 = 83%, so "about 80%").
- `calc:test` subset: passes.

## Coverage and order
- The book's order in 8.3: dark energy vs particle dark matter; vacuum energy in QFT and phase transitions; speculative link; scalar field Eq. 8.16; ρ and p, Eqs. 8.17–8.18; range of w; supernovae and lookback; slow roll, Eq. 8.20; quintessence; numerical ρ_Λ; UV-cutoff vacuum energy, Eq. 8.21; Λ⁴ and GUT; fine-tuning; decaying Λ and ρ_Λ(t_Pl) ~ 10¹¹⁰ ρ_Λ(t₀); coincidence; "How about…?" box (measuring dark energy with galaxy dynamics).
- The book's order in 8.4: budget; different behaviour; modification of gravity, weaker or stronger and repulsive; emergent gravity; closing line.
- The page follows this order.
- Two things are omitted, both minor:
  - (a) the number ρ_Λ(t_Pl) ~ 10¹¹⁰ ρ_Λ(t₀) for a decaying vacuum energy;
  - (b) the "How about…?" box on measuring dark energy with galaxy dynamics, which would make a good short exercise.
- Sections 8.1–8.2 are deliberately left to 8.286 pages; the page says so in its opening paragraph.
- The cross-links `/courses/8-286/vacuum-energy-puzzle` and `/courses/8-286/false-vacuum` point to existing pages.
- The page's added links are reasonable:
  - the slow roll ↔ inflaton analogy, which is the page's own addition and is correct;
  - two original worked examples.
- `_course.json`: syllabus entry 8.3 is `coveredBy: ["vacuum-energy-puzzle"]` only, although this page has `lecture: 8.3` and covers 8.3 in full. Consider adding this page to 8.3's `coveredBy`. Info.

## Licensing
- No copied paragraphs. The 7-gram overlaps are standard phrases only: "in quantum field theory the vacuum energy is", "the minimum of the potential", "the dynamical effects of dark matter and also". The last is close to the book's sentence on emergent gravity; consider rewording it slightly.
- No figures used. The source is CC BY-NC 4.0 and the page is CC BY-NC-SA 4.0, which is allowed with attribution through `_course.json`.

## Notes
- `leadsTo: []`: this is the last page of the book, so that is appropriate. No cosmology callout is needed, since the page is itself cosmology.
- The prerequisites `vacuum-energy-puzzle` and `mond-tests` exist.
- `content:check`: no errors for this page.

## Resolution (2026-11-15, by the page author)

- Warning ("stronger" vs the book's "weaken"): a bracketed note says the book writes "weaken", and that MOND's effective gravity at low accelerations is in fact stronger.
- Warning (the book's 10⁻⁴⁸ GeV⁴): a note now gives the book's figure next to the page's computed 3 × 10⁻⁴⁷ GeV⁴ for H₀ = 70 km/s/Mpc.
- Warning (slow-roll citation): now Eq. (8.20).
- Info (quiz 1 "frozen at the top"): now "a field that does not move (φ̇ = 0)".
- Info (Λ used twice, 10¹¹⁰ ratio, dynamics question box): no change. Λ's two uses are separated in the symbol glossary.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Eq. 8.21: the phase-transition energy scale is now ϵ, the book's symbol, which also removes the double use of Λ. The label "(8.19)" in the book marks no separate equation, so Eq. 8.20 is the right citation.
