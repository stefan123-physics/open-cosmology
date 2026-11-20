---
page: content/year-4/8.286/open-universe.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-10-introduction-to-non-euclidean-spaces/ (not fetched; content read via the local transcript and slides below)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a5797d0353558704dd159fea99440aae_YfbXB_MSkSY.pdf (read via local copy t10.txt; video ID YfbXB_MSkSY matches the filename; transcript pp. 1-11 read in full. URL not fetched, so I could not confirm that the link resolves.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec10/ (read via local copy l10.pdf; PDF pages 2-3 (slides 3-10) rendered and checked visually, all slide text also checked with pdftotext)
  - Third-party study notes notes-L10.md (used only as a guide; every point used here was checked against t10.txt or l10.pdf)
  - Lecture 21 materials: not read. Lecture 21's title is taken from content/year-4/8.286/_course.json only.
verdict: pass-with-notes
---

# Review: The open universe and the age of any matter universe

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Paragraph after the flat-curve plot: "Guth points out that this is the seed of the flatness problem, which becomes one of the motivations for inflation." | Guth says the early merging is "an important point which we'll talk about later" under the name flatness problem (t10 p. 8). He does not mention inflation here. | Says inflation is the motivation right after naming Guth. | The physics is right, but the inflation link is the page's own addition. Suggest: "Guth notes that this leads to what is later called the flatness problem; it is one of the motivations for inflation (Lecture 21 onward)." |
| 2 | info | Frontmatter `leadsTo` Lecture 21 | According to _course.json, Lecture 21 is "Problems of the Conventional (Non-inflationary) Hot Big Bang Model" and inflation itself is Lecture 23. I did not read the Lecture 21 transcript, so whether it covers the flatness problem is **uncertain** (likely, given the title). | "the seed of the flatness problem that inflation solves" | The link target is plausible. Check against the L21 transcript before `status` is set past draft. |
| 3 | info | "(In the lecture Guth first says 'hypergeometric' before correcting himself...)" | The spoken slip and correction ("hyper trigonometric") are on pp. 5-6. Slide 5 itself also says "hypergeometric functions". | Mentions the spoken slip only. | Optional: say that the slide text has the same slip. |
| 4 | info | Opening sentence: "Lecture 10 begins by finishing the job" | Before the open case, L10 spends slides 1-4 (pp. 1-5) going back over the closed universe: the single-step substitution, the cycloid, Guth's admission that the α formula in L9 was missing Ω, and the quadrant table. | Goes straight to the open universe. | Fine, because the review material is on the previous page. You could add half a sentence: "after a short review of the closed case". |
| 5 | info | "For large θ ... a grows in proportion to t: the expansion settles into a constant rate." Also in the plot caption and the summary. | Guth does not state this. On p. 8 he says the *flat* curve has constant slope, then takes it back ("I think I was wrong"). | Claims constant late-time rate for the open case. | The claim is correct (checked below) and is the page's own. No change needed. You could note that it is the open curve, not the flat one, that becomes straight. |

No error-level differences found.

## Arithmetic and answer checks
- κ ≡ −k > 0, ã ≡ a/√κ: matches slide 5 exactly and t10 p. 5 ("so that a tilde is again real"). Formula citation `reading2`, slide 5: correct.
- Open solution ct = α(sinh θ − θ), a/√κ = α(cosh θ − 1): matches slide 5 (rendered). My check: dã/dθ = α sinh θ, dt̃/dθ = α(cosh θ − 1), so (dã/dt̃)² = (cosh θ + 1)/(cosh θ − 1) = 1 + 2α/ã. That is the k < 0 Friedmann equation in tilde variables. Correct.
- Positivity remark (sinh θ > θ, cosh θ − 1 > 0, compared with θ > sin θ, 1 − cos θ > 0): matches t10 p. 6.
- Late-time a ∝ t: for large θ, a/√κ ≈ α e^θ/2 and ct = α(e^θ/2 − θ), so a/√κ − ct = α(θ − 1) + O(e^−θ). Then a/(√κ ct) → 1, i.e. ȧ → c√κ, a constant. The claim is correct in the sense of the leading behaviour. (There is a logarithmic offset, but the rate is constant.)
- Parametric plot: the open (sinh/cosh) and closed (cycloid) curves are the slide-5 formulas divided by α, and the axes match slide 8. Flat normalisation: for small θ both the open and the closed solutions give a/(α√|k|) ≈ θ²/2 and ct/α ≈ θ³/6. So y = ½(6x)^{2/3} = (36/8)^{1/3} x^{2/3} = (9/2)^{1/3} x^{2/3} ≈ 1.6510 x^{2/3}. The page's (9/2)^{1/3} is exactly right for both limits. Checked against slide 8 (rendered): flat curve reaches y = 4 at x = (4/1.651)^{1.5} ≈ 3.77, and the open curve reaches y = 4 at s ≈ 2.29, x ≈ 2.60. Both agree with the slide picture. Closed maximum 2 at x = π, end at 2π: correct. The open curve with s ∈ [0, 3] runs past the y-range [0, 4] at x ≈ 2.6 (it must be clipped by the Plot component). That is fine, and slide 8 does the same.
- Flat-curve normalisation explanation (arbitrary, chosen to look like the limit of open/closed): matches t10 pp. 10-11, paraphrased and not copied.
- Ω(t): closed rises 1 → ∞ at maximum expansion (ρ falls, ρ_c falls faster); open falls from 1 toward 0. Matches t10 pp. 9-10. "All start with Ω close to 1" matches p. 9.
- Age formula: compared character by character with slide 6 (rendered). The Ω < 1, Ω = 1 and Ω > 1 lines all match, including the factor 2 in 2√(1−Ω)/Ω and 2√(Ω−1)/Ω and the ±/∓ signs. Slide 3's intermediate line sin θ = ±√(Ω−1)/Ω drops the 2 (confirmed on the rendered slide). The page correctly does not copy that. Citation `reading2`, slide 6: correct.
- Complex-variables explanation ("with complex numbers the open and closed formulas are the same function; imaginary arguments turn trig functions into hyperbolic ones"): this is a fair summary of t10 pp. 6-7. It is paraphrased and not verbatim.
- Piecewise plot expression, recomputed with my own code: Ω = 0.3 → 0.80879; Ω = 1 → 2/3; Ω = 2 → 0.57080 (= π/2 − 1); Ω = 0.999 → 0.66680; Ω = 1.001 → 0.66653 (continuous through 2/3); Ω = 0.02 → 0.9659; Ω = 3 → 0.5133. All of these lie within range [0.4, 1.02]. arccos((2−Ω)/Ω) equals the upper-sign arcsin on the expanding branch (θ ∈ [0, π]), so the closed branch is right for "expanding phase", as the caption says. The marked points (1, 0.6667) and (0.3, 0.8088) are correct. The shape matches slide 7 (rendered): Ht → 1 as Ω → 0, smooth through the dot at 2/3.
- Worked example (Ω = 0.3, H = 67.3 km/s/Mpc): 2√0.7/0.3 = 5.5777 → "5.578" OK. sinh⁻¹(5.5777) = 2.4199 → "2.420" OK. 0.3/(2·0.7^{1.5}) = 0.2561 → "0.256" OK. 5.578 − 2.420 = 3.158; Ht = 0.8088 → "0.809" OK. 1/H = 14.528 Gyr → "14.5" OK. t = 11.75 Gyr → "11.8" OK. Flat comparison (2/3)/H = 9.69 → "9.7" OK. The example is original: Guth gives no numerical open-universe example.
- Quiz 1 (answer 1, hyperbolic functions): correct. The explanation formulas match slide 5.
- Quiz 2 (answer 1, √k imaginary): correct; matches p. 5.
- Quiz 3 (answer 2, open oldest): correct. The explanation is right (Ht from 2/3 at Ω = 1 rising toward 1 as Ω → 0, confirmed numerically). The wording "took longer to slow down to today's H" is a bit loose. Less deceleration means the past expansion rate was closer to today's, so it took longer to reach today's size. Optional rewording.
- Quiz 4 (answer 1, all look flat early): correct; matches pp. 8-9.
- Flashcards: open solution correct; flat Ht = 2/3 correct (slide 6, p. 7); Ω → 0 gives Ht → 1 correct (empty universe, t = 1/H).

## Coverage and order
- The page covers L10 slides 5-8 in MIT order: open universe (slide 5), age formulas (slide 6), age plot (slide 7), then the scale-factor plot (slide 8). The page puts the scale-factor plot *before* the age section, which is the reverse of MIT. This is a harmless reordering. It reads well because the flatness remark follows the parametric solution.
- Left out: the review of the closed universe (slides 1-4, pp. 1-5; see finding 4). Also the student question about imaginary numbers when the wrong branch formula is used (p. 7), and the remark that the Ω(θ) formulas are in the notes (p. 10). Both are minor.
- Everything after slide 8 (the GR scope remarks, non-Euclidean history, Klein, metrics) is deferred to the linked non-euclidean-geometry page, which is appropriate.

## Licensing
- Slides 5-8 carry no third-party notice and are Guth's own (CC BY-NC-SA via OCW). The page re-typesets the formulas and regenerates both plots from equations. No slide images are reused.
- Slides 10-12 and 19-24 are marked "Slides courtesy of Mustafa Amin. Used with permission." The page uses nothing from them (no Euclid, Klein, or metric material appears on this page). Slide 17 ("All rights reserved") is not used either.
- No verbatim transcript text beyond standard terms. The quoted word "hypergeometric" is a single-word quote.

## Notes
- notes-L10.md was accurate on every point I checked (equations L10-5 to L10-14, the slide-3 missing 2, numerical age values, the flat normalisation 1.651, and the late-time slopes).
- Line 62's parenthetical "θ > sin θ and 1 > cos θ" holds for 0 < θ < 2π (equality at 2π for the cosine). This is too minor to change.

## Resolution (2026-11-14, by the page author)
- Flatness-problem sentence now says Guth returns to it later; the inflation link is presented as the page's forward pointer.
- "Hypergeometric" slip attributed to both slide 5 and the spoken lecture.
- Mentions the closed-universe review at the start of Lecture 10.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
