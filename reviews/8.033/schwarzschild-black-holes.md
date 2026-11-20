---
page: content/year-2/8.033/schwarzschild-black-holes.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture21_bh1/ (read: the slide PDF, deck "Lecture 21", 25 slides; text extracted with pdftotext and every slide rendered as an image and inspected. There is no transcript, so what was said or written on the board is not known.)
  - content/year-4/8.286/falling-into-a-black-hole.mdx (read, for the cosmology callout)
  - content/year-2/8.033/equivalence-principle-metrics.mdx (read, for the metric citation and the site's "Newtonian metric")
verdict: needs-changes
---

# Review: The Schwarzschild metric and black holes

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Frontmatter `leadsTo`, first entry (8.033 Lecture 24) | Site Lecture 24 (deck `lecture22_bh2`) is the page `evidence-for-black-holes` ("The astrophysical evidence for black holes"); orbits and the effective potential are site Lecture 25 (`schwarzschild-orbits-perihelion`). | "Orbits and light paths around black holes: geodesics of the Schwarzschild metric." pointed at Lecture 24. | Either change `lecture: 24` to `25` for this reason, or keep 24 and rewrite the reason to match the evidence-for-black-holes lesson. |
| 2 | error | "The Schwarzschild metric", sentence after the first Formula: "to first order in $M/r$ it is the Newtonian metric with $\phi = -M/r$" | Not on the slides (slide 8 only lists "Newtonian metric"). The site's own Newtonian metric (Lecture 17 page) is $d\tau^2 = (1+2\phi)dt^2 - dx^2 - dy^2 - dz^2$. | Claims first-order agreement. | Only the $dt^2$ coefficient agrees: $1 - 2M/r = 1 + 2\phi$. The $dr^2$ coefficient is $1 + 2M/r$ at first order, which the Newtonian metric lacks (this spatial term is why light bends twice the "Newtonian" amount). Reword, e.g. "its time part matches the Newtonian metric's $1 + 2\phi$ with $\phi = -M/r$, which is all that slow motion feels; the space part also differs at first order". |
| 3 | warning | "The river model", paragraph after the "Light in the river" Formula: "Slides 17–23 plot exactly this: ... with infalling and outgoing light rays ... outside, outgoing rays escape, while inside, every ray falls to the centre." | The slides plot more than light rays. Slide 17: one infalling ray (blue) from $r = 16M$, reaching $r = 0$ at $t_{\text{ff}} \approx 10M$. Slide 18: adds two outgoing rays (red) started just inside and just outside $2M$. Slide 19: adds a green curve from $r \approx 7.7M$ to $r = 0$ at $t_{\text{ff}} \approx 10M$, which is a free-falling observer moving with the river, not light. Slides 20–22: grids of outgoing (red) and infalling (blue) rays, plus green free-fall worldlines (slide 21) and black dotted curves (slide 22). Slide 23: only black dotted curves, all outside $r = 2M$ and piling up against it. | Describes all seven slides as light rays only. | Mention the free-falling observers and say what slide 23 shows. My recomputation (below) indicates the dotted curves are lines of constant Schwarzschild time $t$, which is how the slides show "why $t$ breaks down at the horizon" (slide 24). This identification is mine (no transcript), so phrase it with care, e.g. "the last plots add curves of constant far-away time $t$, which crowd against the horizon and never cross it". |
| 4 | warning | Cosmology callout | 8.286 page `falling-into-a-black-hole` says the distant observer never sees the object reach the horizon in coordinate time $t$ (slows to a crawl); it says nothing about fading or redshift. | "a distant observer sees it slow down and fade at the horizon". | Drop "and fade", or mark the fading (growing redshift and dimming) as this page's own addition, not as something 8.286 works out. |
| 5 | warning | "The Schwarzschild metric", first paragraph: "the Schwarzschild metric of the [last lecture's gallery]" | The link goes to `equivalence-principle-metrics`, site Lecture 17 (deck `lecture16_gr`, slide 30). The previous lecture is site Lecture 22 (cosmology roundup). | "last lecture's gallery". | "the gallery of metrics in Lecture 17". |
| 6 | info | First Formula, `at=` | The metric itself is not on these slides; it is on deck `lecture16_gr` slide 30 (site Lecture 17). | "the metric is on the Lecture 17 slides". | Correct in site numbering; adding "slide 30" (and, if wanted, the deck name) would make it checkable. The γ-form being the page's own is correctly marked. |
| 7 | info | Second and third Formulas (shell observers; light in the river) | Not on the slides. | Marked "the formulas are the page's own" / "the formula is the page's own". | Fine as is. Both formulas are physically correct (see below). |
| 8 | info | Slide 9 slip | Slide 9 reads "Distance to origin < Circumference/2π:" above a "Figure by MIT OCW" funnel (embedding) diagram. | Calls the inequality the opposite of the truth and keeps the excess radius. | I agree: for the Schwarzschild exterior $dr_{\text{shell}} = dr/\sqrt{1-2M/r} > dr$, and also inside a uniform-density star the proper radius exceeds $C/2\pi$; slide 24 itself speaks of the "excess radius". Since there is no transcript, it is uncertain whether Tegmark stated it correctly aloud; the page's bracket wording is appropriate. Minor: the figure is two funnels joined at the throat (the Flamm / Einstein–Rosen embedding), not a single funnel; "a funnel" is acceptable. |
| 9 | info | Opening paragraph: Schwarzschild "found the metric in 1916" | Slide 1 gives only "German, 1873-1916". | 1916. | Schwarzschild found the solution in December 1915 (letter to Einstein) and it was published in 1916. "published the metric in 1916" would be exact. |
| 10 | info | "The river model", first sentence | Slide 15: "But what is a black hole really? River model gives great intuition!" | "But what is a black hole *really*? The river model, after Hamilton (2004), gives great intuition". | Wording is very close to the slide (two short sentences, so not a licence problem), but the site rule is to rewrite; e.g. "What is a black hole like from the inside? Hamilton's river model (2004) gives a good picture." |
| 11 | info | `references: {}` | Slide 16 cites "Hamilton 2004". | No reference entry. | Optional: add Hamilton & Lisle, "The river model of black holes", Am. J. Phys. 76, 519 (2008), arXiv:gr-qc/0411060 (2004), so readers can find it. |
| 12 | info | "What the course expects" | Slide 6: "Taylor-Hulse binary neutron star system". | "the Taylor–Hulse binary pulsar". | Fine (the system is a binary pulsar); noted only as a wording difference. |

## Arithmetic and answer checks
- Identity $1 - 2M/r = 1/\gamma_r^2$ with $\beta_r^2 = 2M/r$: correct.
- Shell formulas $d\tau_{\text{shell}} = \sqrt{1-2M/r}\,dt$, $dr_{\text{shell}} = dr/\sqrt{1-2M/r}$: correct (from the metric at fixed $r$, resp. fixed $t$).
- Radial light in Schwarzschild coordinates: $d\tau = 0 \Rightarrow dr/dt = \pm(1 - 2M/r)$: correct.
- River model: in Gullstrand–Painlevé form $d\tau^2 = dt_{\text{ff}}^2 - (dr + \beta_r dt_{\text{ff}})^2 - r^2 d\Omega^2$, radial light gives $dr/dt_{\text{ff}} = -\beta_r \pm 1$: correct, and $t_{\text{ff}}$ is the proper time of observers falling from rest at infinity, as the page says. I checked the formula against the slide plots: infalling ray from $16M$ reaches $r=0$ at $t_{\text{ff}} = 10.06M$ (slide 17 shows ≈10); free fall from rest at infinity from $7.7M$ takes $\tfrac{2}{3}r^{3/2}/\sqrt{2} = 10.07M$ (green curve, slide 19); outgoing rays started at ≈1.92M and ≈2.1M match the red curves of slide 18. Slide 23: for constant Schwarzschild $t$, $dt_{\text{ff}}/dr = \beta_r/(1-\beta_r^2)$; from $16.5M$ to $20M$ this gives 1.30 and from $10M$ to $20M$ 4.32, matching the plotted dotted curves, while outgoing light would need 5.24 for the first interval. Hence finding 3.
- (a) Earth: $2 \times 6.674\times10^{-11} \times 5.972\times10^{24}/(2.998\times10^8)^2 = 8.87\times10^{-3}$ m ≈ 8.9 mm: correct. "Size of a marble" (diameter ≈ 1.8 cm): reasonable.
- (b) $\int_{3M}^{4M} dr/\sqrt{1-2M/r}$: closed form $\sqrt{r(r-2)} + 2\ln(\sqrt r + \sqrt{r-2})$ gives 1.542M: correct; "more than half as much again" correct.
- (c) $r_s = 2 \times 1.327\times10^{21}/(2.998\times10^8)^2 = 2.953\times10^4$ m ≈ 29.5 km; tide $2GM\ell/r^3 = 5.308\times10^{21}/2.575\times10^{13} = 2.06\times10^8$ m/s² ≈ 2.1×10⁷ g ("twenty million"): correct. $4\times10^6\,M_\odot$: $r_s = 1.181\times10^{10}$ m, tide $1.29\times10^{-3}$ m/s²: correct. $2GM\ell/r^3$ is also the exact radial tidal acceleration for a radially falling observer in Schwarzschild, so using it at the horizon is fine.
- Quiz 1 (answer 1, "contained within its own event horizon"): correct, matches slides 10–11.
- Quiz 2 (answer 0, mass, angular momentum, charge): correct, matches slides 12–13.
- Quiz 3 (answer 2, ≈0.58): $\sqrt{1 - 2/3} = 0.5774$: correct; distractors all wrong.
- Quiz 4 (answer 3): correct; explanation correct.
- Flashcards: all four correct.
- `calcs/8.033/schwarzschild-black-holes.yaml`: 10 entries, all pass (`pytest tests/calc -k schwarzschild-black`: 10 passed). Values agree with the page.

## Coverage and order
- Page order follows the deck: slides 1–3 (portrait, image, topics), 4–6 (depth/breadth), 8 (board topics), 9 (excess radius), 10–13 (definition, no hair), 15–23 (river model and plots), 24–25. The radial-light-ray paragraph sits after slides 10–13, though it answers a slide 3 topic; acceptable since it is the page's own working.
- Omitted: slide 7 ("Java orbit simulator", a live demo with no content in the PDF) and slide 14 (a repeat of the slide 2 image). Neither needs a page section; a short mention of the orbit-simulator demo would be optional.
- Added by the page (marked as its own): escape-speed derivation of $\beta_r$, γ-form of the metric, shell formulas, radial light in $t$, the river light formula, and the worked example. All correctly flagged as not on the slides except the "Newtonian metric to first order" statement (finding 2).

## Licensing
- Slides 1, 2 and 14 carry "Image courtesy of Wikipedia"; slide 9 "Figure by MIT OCW". The page reuses none of these images; it only describes them. The river-model plots (slides 17–23) are not reproduced; the page has no figure at all. No `courtesy:` entry is needed.
- No "All rights reserved" notice in the deck (checked the extracted text and every rendered slide).
- No OpenStax or LibreTexts material.
- No copied paragraphs. Close wording: slide 15's two sentences (finding 10), and the definition "An object contained within its own event horizon" (a short definition, acceptable). The depth/breadth list is a fair paraphrase of slides 4–6.

## Notes
- No em dashes on the page.
- β_r as the escape speed in units of c is the page's reading of slide 8's "β_r, γ_r"; it is consistent with Hamilton's river model and with slide 24, but the slides do not define it, so it is an informed interpretation.
- "Niagara swim" (slide 24) is expanded by the page into "swimming past the point above Niagara Falls where the current outruns you": a fair reading of Hamilton's analogy, not on the slides.
- Rule 4 (lecturer slips): the slide 9 slip is noted in brackets, as required.
- Uncertain: without a transcript I cannot check what Tegmark derived on the board for slide 8, nor whether he identified slide 23's curves aloud; finding 3's identification rests on my own recomputation.

## Resolution (2026-11-17, by the page author)

- Error 1: the `leadsTo` reason now matches 8.033 Lecture 24 (the evidence for black holes, and orbits).
- Error 2: the first-order comparison now says only the time part matches the Newtonian metric; the radial part (1 + 2M/r) is spatial curvature the Newtonian metric leaves out.
- Warning 3: the plots on slides 17–23 are now described with the free-fall observers and the dotted lines of constant t (marked as the page's identification).
- Warning 4: "fade" removed from the callout.
- Warning 5: the gallery is now attributed to Lecture 17 (slide 30), also in the formula citation.
- Info: slide 15 wording rewritten, with the Hamilton & Lisle (2008) reference; Schwarzschild's metric dated end of 1915 (published 1916); slide 9's figure described as two joined funnels.
