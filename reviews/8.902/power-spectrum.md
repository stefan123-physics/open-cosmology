---
page: content/year-5/8.902/power-spectrum.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec14.pdf (read; local copy, pdftotext plus rendered pp. 88, 89, 90)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec15.pdf (read; local copy, pdftotext plus rendered pp. 91, 92)
  - https://arxiv.org/abs/1807.06209 (abstract only; Table 2 not opened)
verdict: pass-with-notes
---

# Review: Measuring structure — the power spectrum and the correlation function

(The reviewer's original file was accidentally overwritten by the page author. This file restores its findings from the reviewer's final report, with the reviewer's wording kept as closely as possible.)

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Frontmatter `summary` | — | Calls P ∝ k "the scale-free spectrum". The body correctly uses "scale-free" for any power law. | Say "scale-invariant (Harrison–Zel'dovich)". |
| 2 | info | 1/V bracket after eq. (404) | Averages in (403)/(404) written as plain integrals. | "absorbed into the normalisation of δ̂" | More precise: "P = \|δ̂\|²/V". |
| 3 | info | Same bracket | Eq. (408) also lacks 1/V. | Bracket does not mention (408). | Extend the note to (408). |
| 4 | info | `lecture: 14` | Eqs. (415)–(422) are only in the Lecture 15 notes. | Page is filed under Lecture 14. | Follows the AGENTS.md plan; a future Lecture 15 page should start at 2.E and not repeat 2.D. |
| 5 | info | σ₈ paragraph | No physical gloss. | "rich cluster's catchment region" | Not in the notes and only roughly true; drop or mark as own. |
| 6 | info | Harrison–Zel'dovich / Peebles–Yu history | Notes name only the "Harrison-Zel'dovich spectrum". | Harrison 1970, Peebles & Yu 1970, Zel'dovich 1972, "around 1970". | History correct from general knowledge; no reference cited. |
| 7 | info | σ = Dσ₀ bullet | "σ = Dσ₀" | Adds "all large-scale modes". | Page's own qualifier; fine. |
| 8 | info | Bias paragraph | No explanation of why b > 1. | Peak-bias explanation. | Standard physics, but not from the notes; mark as such. |
| 9 | info | `references.planck2018` | — | Defined but not named in the callout. | Name it in the callout. |

Verified as correct and correctly cited (against rendered pages): eqs. (402)–(414) in reading1 (Lecture 14 notes, pp. 88–90; Lecture 15 repeats p. 90, so citing reading1 for (409)–(414) is consistent with the page's rule) and eqs. (415)–(422) in reading2 (Lecture 15 notes, pp. 91–92). All four bracketed slip notes are real slips, correctly corrected: no 1/V in (403)/(404); (415) prints $a^{3/2} = (1+z)^{-1}$ for the matter era where $a$ is meant (consistent with eq. 397 and the p. 88 figure); "should not depend on n!" where $M$ is meant; "T(K)" for T(k).

## Arithmetic and answer checks
- $-(n+3)/6 + 2/3 = -(n-1)/6 = -(1/2 + (n-4)/6)$. Matter-era step $(1+z_h)^{-1} \propto M^{2/3}$ correct.
- Worked example: $0.4^{-1.8} = 5.20$ (1 + ξ = 6.2), $4^{-1.8} = 0.0825$, $5 \times 20^{1/1.8} = 26.4$.
- $1000^{-2/3} = 1/100$.
- Transfer-function plot: peak at $kL_0 = 1/\sqrt3 \approx 0.577$, falls as $k^{-3}$. Correlation plot crosses ξ = 1 at $\log_{10}5 = 0.699$, where the point is marked.
- Planck 2018 abstract: $n_s = 0.965 \pm 0.004$, $\sigma_8 = 0.811 \pm 0.006$ — match. "More than 8σ" is the page's own arithmetic (≈ 8.4–8.7σ), correct. "Table 2" location not verified by the reviewer.
- All five quiz answers and six flashcards correct.

## Coverage and order
Sections 2.C and 2.D covered completely and in the notes' order. leadsTo Lecture 17 is supported (the Lecture 17 notes discuss P ∝ k with Harrison–Zel'dovich); the 8.286 inflation pages cover the spectral tilt.

## Licensing
No "rights reserved" or "courtesy" notices in either PDF. Both plots generated from formulas; the p. 92 sketch is not reproduced.

## Uncertain
- Source of the notes' WMAP + SDSS numbers (possibly the 2006 SDSS-LRG + WMAP3 analysis; not checked).
- Whether "still debated" remains right for the S₈ tension, since some 2025 weak-lensing analyses report less or no tension.

## Resolution (2026-11-15, by the page author)

- Warning 1: the summary now says "scale-invariant (Harrison–Zel'dovich) spectrum".
- Info 2–3: the bracket now says strictly $P(k) = |\hat\delta(k)|^2/V$ and that the same applies to ξ in eq. (408).
- Info 5: the σ₈ gloss was removed.
- Info 8: the peak-bias explanation is now marked as a standard explanation not given in the notes.
- Info 9: the callout names "Planck 2018 VI, Table 2".
- Also, from an earlier interim note by the reviewer: the pair-probability formula is labelled "averaged over positions", and the matter-era horizon-entry step is marked as the page's own (with the M-independent radiation-era growth factor mentioned).
- Info 4, 6, 7 and the S₈ wording: no change ("still debated" covers the mixed recent results). The "Lecture 15 page starts at 2.E" note is recorded in AGENTS.md.
- Later (2026-11-15): info 4 acted on — the page is now `lecture: 15, order: 1`, so Lecture 15 has a page and the Lecture 16 spherical-collapse page starts at section 2.E.
