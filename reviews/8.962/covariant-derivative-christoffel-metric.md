---
page: content/year-5/8.962/covariant-derivative-christoffel-metric.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/5d9c78bd037e6f9d29e25d1d8aa83afc_6MssatXXAzc.pdf (read: local copy L6.pdf / L6.txt, with PDF page markers; 21 pages of text, page numbers = PDF pages, no printed footer)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-6-the-principle-of-equivalence/ (not opened; the transcript is the only cited reading)
  - Lecture 7, 8 and 9 transcripts (local copies, searched only to check the leadsTo claims)
verdict: pass-with-notes
---

# Review: The covariant derivative, and why gravity spoils global inertial frames

The lecture is a video lecture with no slides; every equation is written on the board and only partly spoken. Equations were reconstructed from what Hughes says and checked against standard GR (signature -,+,+,+). Every `<Formula>` citation was checked against the page marker in the transcript; all are on the cited page(s).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A divergence in polar coordinates", sentence after the formula | p. 9: only one Christoffel symbol has "repeated indices in that first position", i.e. upper index equal to the *first* lower index (Γ^α_αμ) | "since Γ^φ_φr = 1/r is the only Christoffel symbol with its upper index equal to one of its lower ones" | Γ^φ_rφ also has its upper index equal to one of its lower ones. Say "equal to its first lower index" (or "the only one of the form Γ^α_αμ"). |
| 2 | info | "The covariant derivative", last paragraph | p. 8: Hughes says he *will* post the notes on the website that evening ("forgot" to before class) and that part two is on the next problem set | "Hughes posted the first half of this calculation as notes and set the second half as homework" | Acceptable; "promised notes for the first half" would match the transcript exactly. |
| 3 | info | Formula "Photon energy at the bottom" | p. 19: the photon has "a frequency omega bottom, which is simply related to that energy"; ħ is not said | ħω_bottom = m + mgh | Standard and correct (c = 1); no change needed. The next formula mixes c = 1 (m/(m+mgh)) and c restored (gh/c²) in one line; the text says "with c restored", which is enough. |
| 4 | info | "Derivatives of the basis vectors" | p. 4: Hughes first says "the phi derivative of the phi unit vector is not [zero]" before giving ∂_φ e_r, and calls e_φ the "phi unit vector" | Page lists the four derivatives correctly and stresses that e_φ is not a unit vector | Good: the slip is not repeated. No bracketed note needed, since the page's statement is not in conflict with a stated result. |
| 5 | info | "Part one: the gravitational redshift", GPS sentence; worked example "Interpret" step | p. 20: GPS must account for the redshift; Pound–Rebka at Harvard. No mention of satellite clocks being higher, nor of gamma-ray lines | Adds that GPS clocks sit higher in Earth's field than receivers, and that Pound and Rebka used very sharp gamma-ray lines | Both additions are physically correct (Pound–Rebka used the 14.4 keV Mössbauer line of Fe-57). They are not from the lecture; fine as context. |
| 6 | info | leadsTo, Lecture 7 | L7 finishes Schild's argument (part two), states the weak and Einstein equivalence principles, concludes spacetime must be curved, and ends by introducing the idea of transporting a vector to compare it ("notion one"); the name "parallel transport" and its definition via the covariant derivative come at the start of Lecture 8 | "introduces parallel transport, which is defined with the covariant derivative built here" | Essentially right; "begins to introduce parallel transport" would be more exact. |

All formulas checked (page, physics, index placement, signs):
- Displacement in a coordinate basis, p. 1: correct.
- Polar basis vectors, p. 2: correct (e_φ = -r sinφ e_x + r cosφ e_y).
- Metric diag(-1, 1, r², 1) and ds², p. 3: correct, matches spoken text.
- Basis one-forms, p. 4: correct (ω̃^r = dr, ω̃^φ = dφ = (-sinφ dx + cosφ dy)/r).
- Derivatives of basis vectors, pp. 4–5: all four verified by differentiation.
- Gradient by product rule, p. 5; Christoffel definition ∂_β e_α = Γ^μ_βα e_μ, p. 6; polar values, p. 6: correct (said aloud on p. 6).
- Covariant derivative of a vector, pp. 7–8: correct, relabelling as described on p. 7.
- Divergence, p. 9: Γ^α_αμ V^μ = V^r/r is correct.
- One-form covariant derivative, pp. 10–11: derivation re-done; minus sign and index placement correct. ∂_β ω̃^α = -Γ^α_βμ ω̃^μ (p. 11): correct.
- Two-index tensors, p. 12: both correct, signs as in the general rule stated on p. 12.
- Symmetry of the double gradient, p. 14: ∇_α∇_βφ = ∂_α∂_βφ - Γ^μ_αβ ∂_μφ, so the difference is -(Γ^μ_αβ - Γ^μ_βα)∂_μφ: correct.
- Symmetrisation notation, p. 14: correct.
- Equation I, p. 15: correct.
- Christoffel from metric, pp. 16–17: I - II - III re-done with Γ_λμν = g_λσ Γ^σ_μν; two pairs cancel, the third pair doubles, giving 2Γ_γαβ = ∂_α g_βγ + ∂_β g_αγ - ∂_γ g_αβ. Correct; "g_μγ ... = 1/2" matches p. 17.
- Redshift formulas, pp. 19–20: correct.

## Arithmetic and answer checks
- Diagram: r = 1, φ = 30°: base (0.866, 0.5), e_r (0.866, 0.5), e_φ (-0.5, 0.866). r = 2: base (1.732, 1), e_r (0.866, 0.5), e_φ (-1, 1.732). All correct; all tips inside the extent [-1, 3.5] × [-0.5, 3.5]. Caption correct.
- Worked example "Two divergences": A = r e_r (A^r = r), B = e_φ (B^φ = 1) verified from the basis vectors; divergences 2 and 0 in both coordinate systems; "1 without the Christoffel term" correct.
- Worked example "Polar Christoffel symbols from the metric": index assignments in both steps checked against the formula; -r and 1/r correct.
- Redshift up 50 m: 9.81 × 50 / (2.998e8)² = 5.457e-15, shown 5.46e-15: correct.
- Quiz 1 (answer 0), Quiz 2 (answer 1), Quiz 3 (answer 2), Quiz 4 (answer 1): all marked answers and explanations correct; distractors are all wrong.
- Flashcards: all five correct.
- Calcs file: entries match the page values; covers the diagram, basis-vector derivatives, both Christoffel values, divergence of A, and the redshift. (Divergence of B = 0 has no entry; trivial.)

## Coverage and order
- The page follows the transcript order: polar coordinate basis (pp. 1–2), metric (p. 3), one-forms (p. 4), derivatives of basis vectors (pp. 4–5), gradient (pp. 5–6), Christoffel symbols (pp. 6–7), covariant derivative (pp. 7–8), divergence and units check (p. 9), scalars, one-forms and general tensors (pp. 10–12), tensor-equation principle and symmetry of Γ (pp. 13–14), ∇g = 0 and Γ from the metric (pp. 15–17), global vs local inertial frames and Schild (pp. 17–18), gravitational redshift (pp. 19–21).
- Nothing substantive left out. Omitted asides only: Hughes's remark that integrals will also need care later (p. 4) and his preview of a later lecture with four-index tensors (p. 10).
- Added: two original worked examples and the cosmology callout; GPS/Pound–Rebka details (see row 5).

## Licensing
- No "rights reserved" or "courtesy" notice in the transcript (grep checked).
- No transcript sentences pasted; the only quotation is "a feature, not a bug" (p. 1), short and attributed. Hughes's whimsical device names are paraphrased ("ideal machine"), not copied.
- Worked examples are original (the transcript has no numerical examples; the divergence fields, the metric-based Christoffel check and the 50 m building are the page's own).
- Diagram is generated from the formulas; no MIT figure.
- No em dashes in the page.

## Notes
- leadsTo Lecture 9 checked: L9 derives the geodesic equation for freely falling bodies and uses Christoffel symbols computed from the metric. Correct.
- Cosmology callout: consistent with the prerequisite page `christoffel-symbols` (8.286 Lecture 14), where Guth derives the same Christoffel formula and says the Robertson–Walker geodesics show massive particles slowing as the universe expands. Fair attribution.
- The page correctly calls Schild a mathematically minded early relativist and keeps Hughes's caveat that the argument is hand-waving (p. 18).
- Uncertain: whether the student who caught the missing minus sign on p. 12 was a student (the transcript only records Hughes thanking someone); the page's wording is a reasonable reading.

## Resolution (2026-11-19, by the page author)

- Finding 1 (warning): the divergence section now says Γ^φ_φr is the only non-zero Christoffel symbol whose upper index equals its first lower index, as the sum Γ^α_αμ requires.
- Finding 2: "posted" changed to "promised notes" (p. 8).
- Finding 6: the Lecture 7 leadsTo now says that lecture begins the question of comparing vectors at different points, and that parallel transport itself is defined in Lecture 8.
- Findings 3, 4, 5: no change needed (ħ and the c = 1 convention are stated; slips not repeated; the GPS and Pound–Rebka details are correct context).
