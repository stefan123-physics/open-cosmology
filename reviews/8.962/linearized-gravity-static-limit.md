---
page: content/year-5/8.962/linearized-gravity-static-limit.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/7395ae025351f820f17dd472b416c76d_9lIgAPvppk0.pdf (read, as local text of all 16 PDF pages; no printed footers, so "transcript p. N" = N-th PDF page)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-14-linearized-gravity-i-principles-and-static-limit/ (not read separately; the lecture has no slides or notes, only the video transcript)
  - Lecture 12, 13, 15 and 16 transcripts (read in part, to check "Lecture 12" references and the leadsTo claims)
  - content/year-5/8.962/_course.json and content/year-5/8.902/linear-perturbations.mdx (read, for leadsTo)
verdict: needs-changes
---

# Review: Linearized gravity: principles and the static limit

Hughes writes almost every equation on the board without reading it aloud, so the formulas cannot be checked word for word against the transcript. I checked each one in two ways. First, does it fit what Hughes says around it (number of terms, overall factors, which terms cancel, the stated results)? Second, is it correct in standard linearized GR with signature (−,+,+,+)? For that I derived each one myself (Riemann → Ricci → scalar → Einstein, the substitution of the trace-reversed perturbation, the gauge shifts of h and h̄, the divergence, and the static solution). The formulas all pass both tests. The one physics error is a sign in the plot.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Plot (`yLabel` and caption) after "The weak-field (Newtonian-limit) metric" | p. 14: h₀₀ = −2Φ (so h₀₀ > 0, since Φ < 0) | The y-axis is "−h₀₀ / (GM/R)" and the caption says "−h₀₀ = 2\|Φ\|". But h₀₀ = −2Φ = +2\|Φ\|, so −h₀₀ = 2Φ < 0. The curves plotted (3 − r², 2/r) are positive, so they show h₀₀, not −h₀₀. The page's own worked example agrees with this: it gives h₀₀ = +4.25×10⁻⁶. | Change `yLabel` to "h₀₀ / (GM/R)" and the caption to "h₀₀ = −2Φ = 2\|Φ\| …". In the calcs file, fix the `where` text of `sphere-centre` ("-h_00 = -2 Phi" → "h_00 = -2 Phi") and of `sphere-continuity` in the same way. |
| 2 | warning | Text before "The gauge transformation of the perturbation" (p. 8) | Hughes says "d mu xi nu **minus** d nu xi mu" (a slip). The next paragraph calls it "the symmetrized combination" and it is subtracted from h. | The page gives the correct form −∂_μξ_ν − ∂_νξ_μ, but does not say that it differs from what is spoken. | AGENTS.md rule 4: add a short note in brackets, e.g. "[On the recording Hughes says 'minus' between the two terms; the symmetrized sum is meant, as he says next.]" |
| 3 | warning | Worked example "How big is h…", step "The deflection"; calcs `history` | Hughes does not mention 1919 or light bending numbers. | "the value confirmed in 1919". The 1919 eclipse results (about 1.98″ ± 0.12″ and 1.61″ ± 0.30″) were rough and were debated for decades. "Confirmed" overstates them. Also, calcs `history` cites the 1919 fact to transcript p. 14, which does not contain it. | Write "the value the 1919 eclipse expeditions supported (precise confirmation came later, from radio interferometry)" or similar. In calcs, split the 1919 fact out and give it a `references` source (or mark it as page-own general knowledge), not `reading1`. |
| 4 | info | "Gauge transformations" / Lorenz gauge, bracketed note "[Hughes corrects a sign on the board here.]" (p. 12) | p. 12: "I messed up the sign, my apologies. That plus sign should have come down here." | The page gives the corrected result and notes the correction. | This is acceptable. The note tells the reader little, so you may drop it, since the page already shows the right sign. |
| 5 | info | Paragraph after "The linearized field equation in Lorenz gauge" (p. 13) | Hughes is unsure of the sign of the EM wave equation ("Possibly there's a plus sign. I should have looked that up.") | □A^μ = −4πJ^μ (Gaussian, c = 1, □ = −∂_t² + ∇²), with a note that Hughes was unsure | Correct: in Gaussian units, Lorenz gauge, ∇²A − ∂_t²A = −4πJ. The page handles the slip well. No change. |
| 6 | info | Flashcard "Gravitoelectric and gravitomagnetic fields" | p. 15: the rotation adds "a correction to the spacetime" that looks magnetic. The components are not named. | The flashcard says the extra terms are the off-diagonal h₀ᵢ. | Correct in standard GR (h̄₀ᵢ sourced by T₀ᵢ), but not stated in the lecture. Fine as it is. Optionally write "(the off-diagonal h₀ᵢ, as the problem set shows)". |
| 7 | info | "Nearly Lorentz coordinates": "the inverse metric (justifying a step of Lecture 12)" | p. 5: "I used this in one of my calculations in the previous lecture". The previous recorded lecture is 13. | Lecture 12 | The page is right. The step is in the Lecture 12 transcript (around "corrections of order h squared that go into this inverse"), and Lecture 13 is the variant derivation. No change. |

## Arithmetic and answer checks
Recomputed independently (Python, GM☉ = 1.32712440018×10²⁰ m³ s⁻², c = 299 792 458 m/s):
- GM☉/c² = 1476.625 m → page 1476.6 m. Correct.
- Φ at the solar surface = 1476.625 / 6.957×10⁸ = 2.1225×10⁻⁶ in magnitude → page −2.12×10⁻⁶. Correct.
- h₀₀ = h_xx = 2|Φ| = 4.2450×10⁻⁶ → page 4.25×10⁻⁶. Correct (4.24500… rounds to 4.25).
- Deflection 4GM/(bc²) = 8.4900×10⁻⁶ rad = 1.7512″ → page 8.49×10⁻⁶ rad, 1.75″. Correct.
- Half, from h₀₀ alone: 0.8756″ → page 0.88″. Correct.
- Light speed: ds² = 0 gives dx/dt = √((1+2Φ)/(1−2Φ)) ≈ 1 + 2Φ. Correct to first order. The claim that each part contributes 2GM/(bc²) is the standard result.
- Pure-gauge example: ξ_x = ½kx², so ∂_xξ_x = kx and h_xx = −2kx, with all other components zero (no other ∂_μξ_ν is non-zero). 2 × 10⁻³ × 10 = 0.02. Correct. All second derivatives of h vanish, so the linearized Riemann tensor is zero. Correct, and the units work (ξ is in m).
- Plot: for a uniform sphere, Φ = −GM(3R² − r²)/(2R³) inside, so −2Φ = (GM/R)(3 − r²/R²). This is 3 at the centre and 2 at r = R, matching 2R/r outside. The curves are correct, but they show h₀₀ = −2Φ (finding 1). The point-mass curve starts at r = 0.64, where 2/0.64 = 3.125 < 3.2 (range). OK.
- Formula checks (my own derivation, signature −+++):
  - Linearized Riemann: matches Carroll's form after relabelling indices.
  - Ricci from η^{αβ}R_{αμβν}: matches.
  - R = ∂_α∂_μh^{αμ} − □h: matches.
  - Einstein: six terms, overall ½, as Hughes counts on p. 10. Matches.
  - Substituting h = h̄ − ½ηh̄ (with h = −h̄): the trace terms cancel (−½ − ½ + 1 = 0 and ½ + ½ − 1 = 0). This gives the page's four-term G in h̄. Correct.
  - Gauge shift of h̄: h̄ − ∂_μξ_ν − ∂_νξ_μ + η_μν∂·ξ (the trace shifts by −2∂·ξ). Correct, "one extra term" as on p. 12.
  - Divergence: −□ξ_ν − ∂_ν∂·ξ + ∂_ν∂·ξ. Correct.
  - G = −½□h̄ ⇒ □h̄ = −16πG T. Correct.
  - Static case: ∇²h̄₀₀ = −16πGρ = −4·(4πGρ), so h̄₀₀ = −4Φ, and h̄ = η⁰⁰h̄₀₀ = 4Φ. Then h₀₀ = −4Φ + 2Φ = −2Φ and h_ii = −2Φ, giving g₀₀ = −(1+2Φ) and g_ii = 1 − 2Φ. All correct.
  - Inverse metric and the Jacobian of x′ = x + ξ: correct to first order.
- Quiz 1 (answer index 1, η − h): correct, and the explanation is right.
- Quiz 2 (index 1): correct. Distractor 4 is nonsense notation but harmless.
- Quiz 3 (index 2, −h): correct.
- Quiz 4 (index 1, about 1.75″): correct, and the explanation numbers check.
- Flashcards: all five are correct.
- Calcs file: the entries match the page's numbers. Notes:
  - `inverse-metric` and `lorenz-cancel` are scalar stand-ins and do not test the tensor identities. Acceptable, but weak.
  - `sphere-*` entries are `origin: page-own` but cite `reading1` p. 14 (fine for Φ → h, but the sphere is not in the lecture).
  - See also finding 1 (the `where` wording) and finding 3 (`history`).

## Coverage and order
- The page follows the lecture's order exactly:
  - why the field equation is hard (pp. 1–2) and the three routes (pp. 2–3);
  - nearly Lorentz coordinates (p. 3), Lorentz transformation and the "useful fiction" (pp. 4–5);
  - raising and lowering with η, and the inverse metric (pp. 5–6);
  - infinitesimal shift and gauge transformation, with the EM analogy (pp. 6–9);
  - linearized Riemann and its gauge invariance (pp. 9–10), then Ricci and Einstein (p. 10);
  - trace reversal (pp. 10–11), Lorenz gauge (pp. 11–13), wave equation and EM comparison (p. 13);
  - static limit and weak-field metric (pp. 13–14), then tests of GR (p. 14) and gravitomagnetism (p. 15).
- The preview of Lecture 15 and gravitational radiation (pp. 15–16) appears through `leadsTo`.
- Nothing material is left out. Small omissions are fine: Hughes's "linearized geometry → linearized gravity" framing, and his remark that the right gauge gives equations that "cover all physical situations that matter".
- Added material (all marked as the page's own or standard): the pure-gauge worked example, the uniform-sphere plot, the Sun and light-bending worked example, the Lorenz/Lorentz naming note, and the cosmology callout.
- Every citation page number is consistent with the per-page transcript text: pp. 3, 4, 5, 6, 6–7, 8, 9, 10, 10–11, 11, 12, 13 and 14 each contain the matching spoken step.

## Licensing
- The source is the MIT OCW transcript (CC BY-NC-SA). The transcript has no "All rights reserved" or "Courtesy of" notices. There are no figures, and the only diagram is a plot generated from formulas.
- Paraphrase: rewritten throughout. Short quoted phrases ("straightforward but tedious", "useful fiction") are attributed and short. No paragraph follows the transcript closely.
- Worked examples are original (Hughes gives no numbers). Carroll is not cited and is used only implicitly for standard forms, which is fine.
- No em dashes on the page (0 found). The page ends with `## Summary`.

## Notes
- leadsTo:
  - Lecture 15 (Green's function, keeping time derivatives): confirmed by the Lecture 15 transcript (opening and the Green's-function discussion) and by p. 16 here.
  - Lectures 16–17 (gravitational radiation): match the syllabus titles and Hughes's "a lecture or two" (p. 16).
  - 8.902 Lecture 13: that page uses the Newtonian Poisson potential for the growth of perturbations (eq. 376), so "a Newtonian potential of the same weak-field kind" is fair.
- Cosmology callout: putting a(t)² on the spatial part gives the conformal-Newtonian-gauge metric. Lensing and the redshift of CMB photons climbing out of potential wells (Sachs–Wolfe) are correctly described. "The starting point of cosmological perturbation theory" is a reasonable simplification.
- Hughes's "20 years ago, almost all … tests … came from this" (p. 14) is fairly rendered as "until about twenty years before the lecture".
- The Lorenz gauge naming note is correct: L. V. Lorenz, 1867, and "Lorentz gauge" is the common misattribution.
- I could not compare equations against the actual board, because only the transcript was available. My judgement that the formulas "match the lecture" therefore rests on the spoken context plus my own derivation, as described at the top.

## Resolution (2026-11-19, by the page author)

- #1: the plot's y-axis is now "h₀₀ / (GM/R)" and the caption reads "h₀₀ = −2Φ = 2|Φ|". The calcs descriptions are corrected.
- #2: added a bracket on Hughes's reading of the gauge terms on p. 8.
- #3: 1919 is now "the value the 1919 eclipse expeditions set out to test (their rough results favoured it; later radio measurements confirm it to better than 0.1%)". It has its own calcs fact entry with a reference (origin later-data) and is no longer cited to the transcript.
- Info: the p. 12 note now spells out both signs that cancel. The other info items are kept as they are.
- Status set to reviewed.
