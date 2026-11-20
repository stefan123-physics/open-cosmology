---
page: content/year-2/8.04/shape-of-wavefunctions.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes12/ (read: resource page, CC BY-NC-SA 4.0 licence link; PDF MIT8_04S16_LecNotes12.pdf read in full, pp. 1–12, sections 1–3 compared in detail, section 4 checked only to confirm it is left to the Lecture 13 page)
verdict: pass-with-notes
---

# Review: General properties of bound states and the shape of wavefunctions

The printed footer page numbers of the notes PDF equal the PDF page numbers (checked page by page with `pdftotext -f N -l N`). Equation locations: (1.1)–(1.2) p. 1; (1.3)–(1.9) p. 2; (1.10)–(2.2) p. 3; (2.3)–(2.4) p. 4; (2.5) p. 5; (2.6)–(2.8) p. 6; (2.9)–(2.12) p. 7; (3.1) p. 8; (3.2) p. 9; the quantization discussion runs pp. 9–11 (Figure 11 on p. 10). Every `<Formula>` citation and every "notes p. N" reference on the page matches these.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Why only some energies work", steps 1 and 3 | Notes (p. 11) describe the derivative only loosely: at E1 "ψ′ does not vanish at x = 0"; at E3 "ψ′ is negative by the time we get to x = 0, while ψ is still positive"; at E4 "ψ′ will be negative and ψ exactly zero". With ψ > 0 decaying at large x, the ordinary derivative dψ/dx is negative at E1 and positive at E3 and E4, so the notes' signs only make sense read as the slope seen while moving leftwards (or are a slip). | Step 1: "still has a positive slope at x = 0 (seen coming in from the right)"; step 3: "the slope at the origin has turned negative". Consistent with each other in the leftward reading, but the convention is stated only in a bracket in step 1, and in the usual dψ/dx sense both signs are reversed. | State the convention once before the list (e.g. "slope measured as x decreases"), or switch to dψ/dx: negative at E1, zero at E2, positive at E3 (ψ already past its maximum), positive with ψ = 0 at E4. A brief bracket noting that the notes' signs use the leftward reading would follow writing rule 4. |
| 2 | warning | "Slowly varying potential", eq. (2.5) and its lead-in | Notes p. 5: the change of V over one local wavelength must be small "compared to the potential", λ(x)\|dV/dx\| ≪ \|V(x)\|. | Reproduces this faithfully ("small compared with V itself"). | Faithful to MIT, but as written the condition depends on where the zero of V is chosen (adding a constant to V changes it). The usual WKB criterion compares the change with the local kinetic energy, λ\|dV/dx\| ≪ E − V (equivalently \|dλ/dx\| ≪ 1). Uncertain whether this is a slip or intended loosely; consider a short bracket noting that the meaningful comparison is with the kinetic energy E − V. |
| 3 | info | Quiz question 1, explanation | Corollary 2 (p. 3) first takes ψ real (Corollary 1), then writes ψ(−x) = cψ(x) with c real. | "ψ(−x) = c ψ(x) with real c" without saying ψ is taken real. | Add "taking ψ real" (as the body text of the page already does). |
| 4 | info | `source.title` | Notes' section titles: "General properties", "Bound states in slowly varying potentials", "Sketching wavefunction behavior in different regions"; course syllabus calls Lecture 12 "Turning points, semiclassical approximations and the shape of wavefunctions". | "General Properties, Bound States in Slowly Varying Potentials, Sketching Wavefunctions". | Fine as a paraphrase of the section headings; no change needed. |

No formula differs from the notes in content or notation: (1.1), (1.4), (1.10), (2.2), (2.3) (with p(x) = √(2m(E − V)) added from the text on p. 4), (2.5), (2.8), (2.12) and (3.1) all match, including the factors 1/2 and 1/(2i) in (1.4) and 1/2 in (1.10). The prose references to eqs. (1.6)–(1.9), (1.11), (2.4), (2.6)–(2.7), (2.9)–(2.11) and (3.2) point to the right equations and pages.

## Arithmetic and answer checks
- Worked example (a): (2/a)∫₀ᴸ sin²(nπx/a) dx = L/a − sin(2nπL/a)/(2nπ) is correct. With n = 50, L = 0.125a: 2nπL/a = 12.5π, sin(12.5π) = 1, so P = 0.125 − 1/(100π) = 0.121817 ≈ 0.1218. Correct. "Within 3%": the relative difference is 2.55%, so the statement holds. "Shrinks as n grows": the deviation is bounded by 1/(2nπ), correct.
- Worked example (b): λ₁ = 1239.8/√(2 × 511 000 × 4.0) = 1239.8/2021.9 = 0.6132 nm ≈ 0.613 nm; λ₂ = 1.2264 nm ≈ 1.23 nm (twice λ₁). Amplitude ratio √(λ₂/λ₁) = √2 = 1.414 ≈ 1.41. "Half the speed": K falls by 4, v by 2. All correct (non-relativistic use is fine at a few eV).
- `calcs/8.04/shape-of-wavefunctions.yaml`: all six entries match the page's numbers (sin² average, numeric integral, closed form, λ₁, λ₂, amplitude ratio).
- Quiz 1: answer 0 (each even or odd) correct; the other choices are wrong (not all even; no degenerate pairs in 1D; "nothing" contradicts Corollary 2).
- Quiz 2: answer 0 correct (p ∝ √K halves, λ doubles, amplitude ∝ √λ grows by √2).
- Quiz 3: answer 0 correct (ψ″/ψ = (2m/ħ²)(V − E) > 0); "convex towards the axis" is the notes' wording (p. 8).
- Quiz 4: answer 0 correct (turning points ⇒ ψ″ = 0; nodes are inflection points too, notes p. 9).
- Flashcards: all three correct and consistent with eqs. (2.3), (2.8), (3.1).
- Plot: curves 2 sin²(Nπx) and 1 on x/a ∈ [0, 1], y = aP(x) ∈ [0, 2.4], are exactly a·(2/a)sin²(nπx/a) and a·(1/a) from eqs. (2.9) and (2.11); maximum 2 fits the range. Caption is accurate ("averaged over any stretch much longer than a/n" matches the notes' "over distances larger than a/n"). Info: Plot samples 400 points, so at n = 40 there are 5 samples per hump; peaks still reach 2 (samples fall at multiples of 18° of the phase), but the curve will look angular at the top of the slider range. Optional: pass `samples={1200}` if the component accepts it (it has a `samples` prop).

## Coverage and order
- Section 1 (pp. 1–3): the two homework facts, Theorem 1, Corollary 1, Theorem 2, the remark on odd potentials, Corollary 2 and the link to the finite square well: all covered, in order.
- Section 2 (pp. 3–7): constant potential and (2.1)–(2.2), real ψ as a ±p superposition, linear/slowly varying potential (2.3)–(2.4), validity condition (2.5) and WKB pointer, turning points and forbidden regions (Figure 4 discussion), amplitude argument (2.6)–(2.8), infinite-well averaging (2.9)–(2.12), correspondence principle: all covered, in order. Eq. (2.1) itself is folded into the prose ("ψ″ = −(p²/ħ²)ψ"), which is fine.
- Section 3 (pp. 8–11): eq. (3.1), forbidden/allowed regions (Figures 7–9 described in words), turning points and (3.2), nodes as inflection points, ψ and ψ′ never both zero, and the four-energy quantization argument (Figure 11): all covered, in order.
- Section 4 (shooting method, pp. 11–12) correctly left for the Lecture 13 page and pointed to via `leadsTo`.
- Nothing added beyond MIT except the original worked example and the plot.

## Licensing
- OCW resource page links CC BY-NC-SA 4.0; no "All rights reserved" or "Courtesy of" notice anywhere in the 13-page PDF (grep checked). The PDF's only credit line (Sarah Geller transcribed the handwritten notes) is not a figure credit and does not need a `courtesy` entry.
- No figure from the notes (Figures 1–11) is reproduced; the one graph is generated from eq. (2.11).
- No verbatim copying found: the page rewrites every paragraph. Shared phrases are short standard terminology ("convex/concave towards the axis", "classically forbidden region", "loosely named correspondence principle", "no wavefunction on the right").
- Worked example is original: the notes give no numerical example; the n = 50 partial-interval probability and the 4 eV / 1 eV electron are the page's own.
- No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"` on this page; `leadsTo` points to 8.04 Lecture 13 (shooting method), which is correct: section 4 of the same notes, Lecture 13 in `_course.json`.
- The statement "This condition underlies the WKB approximation, developed in 8.06" matches the notes' "(8.06!)".
- The proof that ψ = ψ′ = 0 forces ψ ≡ 0 is given in the notes via a Taylor-expansion argument; the page's one-line version is a fair summary (the rigorous reason is uniqueness of solutions of a second-order linear ODE).
- The intro states "notes pp. 1–11"; section 3 ends on p. 11, correct.

## Resolution (2026-11-17, by the page author)

1. "Why only some energies work" now states that slopes are the usual dψ/dx, and the steps read: negative slope at x = 0 at a low energy, zero for the ground state, positive a little higher, and a node with positive slope for the first excited state.
2. Added a bracket after eq. (2.5): as written the condition changes when a constant is added to V; the usual form compares with the kinetic energy E − V.
3. Quiz 1's explanation now says "taking ψ real".
4. The plot now uses 1600 samples.
5. No change.

Status set to `reviewed`.
