---
page: content/year-5/8.902/cosmological-principle-expansion.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (read; local copy, all nine PDF pages rendered, printed pp. 61–69; pp. 61–65 up to section 1.B compared in detail, pp. 65–69 only for the H₀ = 67.4 quote and the sign convention)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
verdict: pass-with-notes
---

# Review: The cosmological principle and the expanding universe

The source is the start of Part II of the 8.902 notes (Lecture 10): the Part II title page with the TNG image (p. 61), section 1.A, Cosmological Principle and dynamics: the two principles and Hubble's law with its derivation, eqs. (267)–(269) (p. 62); the Newtonian sphere and Birkhoff's theorem, eqs. (270)–(276) (p. 63); the Geek3 plot of a(t) for five model universes, the definitions of a and H, dilution of matter/radiation/Λ and the model universes (p. 64); "Dynamical evolution of the Universe": which term dominates when, and the four unnumbered regimes (pp. 64–65); a log a – log t figure (p. 65). Section 1.B (pp. 65–69) is for the next page and is not counted as missing.

Process note: the page file and `calcs/8.902/cosmological-principle-expansion.yaml` were read at the start of this review; partway through, both disappeared from the working tree (neither is tracked in git, and `content/year-5/8.902/` no longer lists the page). The review below is of the version that was read. See "Arithmetic and answer checks" for the effect on `calc:test`.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "How each ingredient dilutes", last sentence before the plot | p. 64 text: ΛCDM, de Sitter, Einstein–de Sitter, empty; the plot also has a closed model. No radiation-only universe. | "The graph below shows four of these". The graph shows radiation-only, matter-only (Einstein–de Sitter), empty and de Sitter, so only three of the models just listed appear, plus a radiation-only universe that is not one of them. | "The graph below shows three of these (de Sitter, Einstein–de Sitter and the empty universe) plus a radiation-only universe, computed from the formulas of the next section rather than taken from the notes' figure." |
| 2 | info | Quiz 2 explanation; also matter-regime wording | p. 65: H(t) = 2/(3t) (written as a fraction). | "$H = 2/3t$", which can be read as (2/3)t. | Write `$H = 2/(3t)$` or `$\\frac{2}{3t}$`. |
| 3 | info | "The Friedmann equation from a Newtonian sphere", list of terms | p. 64: "8πGρ/3 is the matter/radiation density". | Same ("from the density of matter or radiation"). The derivation on the page uses ρa³ = constant, which holds for pressureless matter only; that the same equation holds for radiation (ρ ∝ a⁻⁴) comes from GR (the next page). The page, like the notes, does not say so. | Optional bracket: "[The Newtonian derivation assumes ρa³ is constant, i.e. matter; that the equation also holds for radiation follows from the general-relativity derivation on the next page.]" |
| 4 | info | Summary, third bullet | p. 63: the sphere gives (275); Λ is then added by hand for (276). | "Its energy equation is the Friedmann equation, (ȧ/a)² = 8πGρ/3 + k̃/a² + Λ/3", i.e. the Λ term is attributed to the sphere's energy equation. | "…is the Friedmann equation; adding a cosmological constant gives (ȧ/a)² = …". |
| 5 | info | Birkhoff's theorem paragraph | p. 63: "the dynamics of a uniform expanding self-gravitating sphere is equivalent to a section of the Universe as a whole". | Adds the mechanism ("the matter outside a sphere exerts no net force on it"), the usual consequence of Birkhoff's theorem for the interior of spherical shells. Correct and clearer than the notes. | Fine as is. |
| 6 | info | Quiz 3 | p. 64: "Λ term ∝ constant ⟹ dominates at late times". | Answer Λ, matching the notes. Strictly true for Λ > 0 and a universe that does not recollapse first (the notes' closed model does). | Fine; optionally "(for Λ > 0)". |

Every Formula checked against the rendered PDF pages; all equation numbers and printed pages are right:
(267) p. 62; (268) p. 62; (269) p. 62; (270) p. 63; (271) p. 63; (272) p. 63; (273)–(274) p. 63; (275) p. 63; (276) p. 63. The four regime formulas are unnumbered: radiation on p. 64 (bottom), matter, curvature and Λ on p. 65; the page's `at` values are right. The tex matches the notes in each case. The Λ regime writes ȧ² = (Λ/3)a² as an equality where the notes write ∝; correct when Λ alone dominates. In (268) the notes write the matrix as a double-underlined **H**; the page uses bold **H**, fine.

Bracketed slip notes, verified on the rendered PDF:
- "We assume that it is non-diagonal, otherwise a special direction would be preferred" (p. 62): the argument requires **H** ∝ identity (any off-diagonal part, symmetric or antisymmetric, or unequal diagonal entries picks out axes). The page's note is correct.
- p. 62 labels "Linearity (follows from isotropy) … since isotropy requires that each observer sees the same Hubble law" and "Uniqueness (follows from homogeneity)". The argument "every observer sees the same law" is homogeneity and "no preferred axis" is isotropy, so the labels are swapped. The page's note is correct, and its Summary follows the corrected version consistently.
- p. 64: "(ȧ/a)² = ṙ/r = v/r = H (H(t) ≡ ȧ/a)": the square is a slip, since H = ȧ/a. Correct note.

Curvature sign convention, verified: from (273)–(275), k̃ = 2κ̃ (the notes switch from κ̃ in (273)–(274) to k̃ in (275) without comment, and the p. 64 list writes κ̃/a² again; the page's "k̃ = 2κ̃" is the right reading). κ̃ = ½ȧ² − GM/a is the energy per unit mass, so κ̃ > 0 is unbound, i.e. open. Comparing with (293) on p. 67, (ȧ/a)² = 8πGρ/3 − kc²/a² + Λc²/3, gives k̃ = −kc², with k > 0 closed in (288). The page's remarks ("positive κ̃ … open universe in this sign convention"; the GR version writes it as −kc²/a²) are correct. (Note for the next page: (293) writes Λc²/3 where (276) writes Λ/3, so Λ has different units in the two halves of the notes.)

## Arithmetic and answer checks
Recomputed in Python:
- 70 × 100 = 7000 km/s. Correct. "We recede from them at 7000 km/s too": by homogeneity the other observer sees velocity −v at position −r, same law. Correct.
- 1 Mpc/(1 km/s) = 3.0857 × 10¹⁹ s / 3.15576 × 10¹⁶ s/Gyr = 977.80 Gyr. Correct.
- 977.8/67.4 = 14.507 → 14.5. Correct.
- Radiation 14.507/2 = 7.254 → 7.3; matter 14.507 × 2/3 = 9.672 → 9.7; curvature 14.5. Correct (computed from the unrounded 14.507; ½ × 14.5 = 7.25 would also round to 7.3 under round-half-up).
- "about 13.8 billion years": flat ΛCDM with Ω_m = 0.315, H₀ = 67.4 gives H₀t₀ = 0.951, t₀ = 13.80 Gyr. Correct; "close to 1/H₀" is fair (95%). 13.8 is in `calcs/values.yaml` with role "Guth 2013 … the site's standard figure"; the calcs file marks it `later-data` with a Planck 2018 reference, both fine. 67.4 is in values.yaml ("later: Planck 2018") and is quoted on p. 69 of these notes, so "the Planck value quoted in the notes" is right.
- "A matter-only universe would be younger than the oldest stars": 9.7 Gyr is below globular-cluster ages of about 12–13 Gyr. Correct (not in the notes; plainly the page's own remark).
- Plot: each curve has a = 1 and da/dx = 1 at x = 0: d/dx (1 + 2x)^½ = 1, d/dx (1 + 1.5x)^⅔ = 1, d/dx (1 + x) = 1, d/dx eˣ = 1, so each has H = H₀ today. They reach a = 0 at x = −1/2, −2/3, −1; e^x never does. Caption correct. eˣ leaves the range [0, 3] at x = 1.10 (e^1.5 = 4.48), only clipped; harmless.
- Quiz 1 (index 1, functional equation): correct; explanation correct. Quiz 2 (index 1, t^⅔): correct (see finding 2 for notation). Quiz 3 (index 3, Λ): correct. Quiz 4 (index 1, 9.7 Gyr): correct.
- Flashcards: cosmological principle, Friedmann equation with k̃ and Λ/3 (matches (276)), regimes and ages: all correct.
- `calcs/8.902/cosmological-principle-expansion.yaml` (as read): every entry matches the page text (H₀ ∼ 70 fact p. 62; 7000; 977.8; 14.5; 7.3; 9.7; 13.8 fact; 30%/70% fact p. 64; matter-curve zero at −2/3). Small citation quibbles: `hubble-time-unit` cites "p. 65" although the notes do not give 977.8 (it is `origin: page-own`, so fine); there is no entry for the radiation (−1/2) and curvature (−1) zeros of the plot caption, or for the curvature age 14.5 (same number as `hubble-time`). Optional.
- `npm run calc:test -- -k cosmological-principle`: **could not be completed.** The first run failed at collection with `FileNotFoundError` for `calcs/8.902/cosmological-principle-expansion.yaml` (the file vanished between the test's file listing and reading it); the second run selected 0 tests (4441 deselected) because the file no longer exists. The page author must re-run it once the files are back. The numbers themselves were recomputed independently above and all agree.

## Coverage and order
- Section 1.A is covered completely and in the notes' order: the two principles and the metric remark; Hubble's law (267), linearity and uniqueness (268)–(269); Birkhoff and the sphere (270)–(276); the definitions of a and H; dilution of matter, radiation and Λ; the model universes (ΛCDM, de Sitter, Einstein–de Sitter, empty, closed); which term dominates when; the four regimes with H and t₀.
- The notes' Observer A/B vector sketch (p. 62) is replaced by words; fine.
- The p. 65 log a – log t figure (radiation → matter → Λ) is covered in words ("Our universe passed through these stages in turn …"); not reproduced.
- Additions (all plainly the page's own): "continuous" in the linearity step, the energy interpretation of κ̃, k̃ = 2κ̃, the general rule t₀ = n/H₀, "no beginning" for de Sitter, both worked examples, the generated plot.
- leadsTo: 8.902 Lecture 11 "Observational Cosmology" (title confirmed in `_course.json`); the reason given is fair. No cosmology callout, appropriate for a cosmology-role page. Prerequisites `friedmann-equation` and `homogeneous-expansion` exist (8.286).

## Licensing
- The Geek3 plot on p. 64 ("Plot © Geek3, CC BY-SA 4.0, Wikimedia Commons. All rights reserved. This content is excluded from our Creative Commons license") is not reused. The page's plot is generated from the four single-component formulas. It shares the generic idea of normalizing curves to a = 1 at today, which is the standard way to compare expansion histories, but differs in substance: horizontal axis in units of 1/H₀ rather than Gyr, a radiation-only curve the Geek3 plot lacks, no ΛCDM and no closed model, different ranges, styles and labels. Not a close copy.
- The TNG image on p. 61 is not used or described as reproduced. The p. 65 log a – log t figure (no credit line in the PDF) is not used.
- Text is rewritten. Closest wording: "treating the entire universe as a single dynamical system" vs the notes' "dynamics of the entire Universe as a single dynamical system" (p. 62), a short descriptive phrase; acceptable. The quoted "non-diagonal" is inside a slip note. No OpenStax or LibreTexts material.

## Notes
- `content:check` was not run (the page was no longer on disk); symbol entries in `data/symbols.json` for this page (κ̃, k̃, **H**, Λ, t₀, etc.) were not checked.
- Uncertain: why the page and calcs file disappeared during the review (possibly moved aside by the author's commit workflow). Restore both before acting on this review.

## Resolution (2026-11-17, by the page author)

The page and calcs file were moved out of the working tree for a few minutes while another lesson was committed; they are back, and `npm run calc:test -- -k cosmological-principle` now passes (11 checks, including two new entries for the plot's zeros at −1/2 and −1).

1. Warning: the plot sentence now says it shows three of the listed models (de Sitter, Einstein–de Sitter, empty) plus a radiation-only universe.
2. Quiz 2: H = 2/(3t).
3. Added a bracket: the Newtonian derivation assumes a fixed mass, so strictly covers matter; radiation follows from the GR derivation on the next page.
4. Summary: Λ/3 is now added to the energy equation, not part of it.
5–6. No change needed. 7. Plot zeros added to the calcs file.

Status set to `reviewed`.
