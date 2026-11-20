---
page: content/year-4/8.286/newtons-static-universe.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-5-cosmological-redshift-and-the-dynamics-of-homogeneous-expansion/ (read: local copy of the Lecture 5 transcript, t05.txt; OCW page itself not fetched)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec05/ (read: local copy l05.pdf, text extracted and slide p. 3 / slide 8 rendered and inspected)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec06/ (read: local copy l06.pdf, plus Lecture 6 transcript t06.txt)
  - https://www.newtonproject.ox.ac.uk/ (reachable, HTTP 200; the letter pages /view/texts/normalized/THEM00254 and THEM00255 also return 200 with titles "Original letter from Isaac Newton to Richard Bentley, dated 10 December 1692" and "... dated 17 January 1692/3"; letter text not reviewed beyond the slide excerpts)
verdict: needs-changes
---

# Review: Why a static universe cannot work

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `<Formula label="An order-dependent integral" cite="reading1">` | The sign-function integral (symmetric limit = 0; window centred on a gives 2a) is a blackboard derivation in the Lecture 5 transcript (t05 pp. 26-27). It is not on any Lecture 5 slide (L5 slides 1-4 are the Newton–Bentley letters, 5-8 the shell diagrams), nor on the Lecture 6 slides. | Cites `reading1` (the L5 slide deck). | Cite the Lecture 5 lecture itself (`source`, i.e. the transcript/video), not the slide deck. |
| 2 | warning | "Newton's argument", first paragraph | Letter 1 (L5 slide 1, 10 Dec 1692) says a finite distribution falls into one spherical mass, and an evenly spread infinite one "could never convene into one mass" but would form an infinite number of great masses (sun and fixed stars, if lucid). The "pulled equally in every direction, no direction to fall" form of the argument is Guth's gloss (t05 p. 14), and Bentley's equilibrium argument in letter 2. | Presents the no-direction-to-fall reasoning as what Newton argued in the letters, and the clumping into many masses as a parenthetical side remark. | Say the letters argue against a single collapse and for many separate masses; attribute the "tugged equally in all directions, so it stays put" framing to Guth's reading. |
| 3 | warning | Same paragraph, "(He also speculated that clumping might turn some of the matter into stars and some into planets.)" | Slide 2 continuation: Newton says the division into a shining sun and opaque planets is *not* explicable by natural causes and ascribes it to a "voluntary Agent". | Implies Newton thought clumping would naturally produce stars and planets. | E.g. "Clumping could form the sun and fixed stars; why some bodies shine and others (the planets) are opaque he could not explain by natural causes." |
| 4 | warning | Second paragraph, "Bentley objected that the infinite pulls from either side might still balance exactly" | Slide 3 / t05 p. 17: Newton summarises Bentley's argument that each particle has an infinite attraction every way and therefore rests in equilibrium because all infinites are equal; Bentley himself "suspect[ed] a paralogism" in it. | "Bentley objected..." | "Bentley put forward (while himself suspecting a fallacy) the argument that the infinite pulls balance..." — keep the rest. |
| 5 | warning | Second paragraph, "As far as Guth knew, it stood largely unchallenged for a very long time." | t05 p. 15: "not questioned by anybody for hundreds of years, until ... Einstein", hedged twice with "as far as I know". Historically, Seeliger (1895) and Neumann (1896) pointed out the gravitational paradox of an infinite uniform Newtonian universe, before Einstein (1917). | Hedged and attributed to Guth; drops the Einstein claim. | The wording is fair (it does not repeat Guth's "until Einstein" overstatement), but it silently softens what Guth said. Add one sentence: "In fact Seeliger and Neumann raised the problem in the 1890s, and Einstein met it again in 1917." Mark as an addition beyond MIT. |
| 6 | info | `<Formula label="Shells centred on Q" ... at="slide 8">` | L5 slide 8 (confirmed by rendering) shows only $\vec g = \frac{GM}{b^2}\hat e_{QP}$; the arrow at P points toward Q. $M=\frac{4\pi}{3}\rho b^3$ and $\lvert\vec g\rvert = \frac{4\pi}{3}G\rho b$ are spoken only ("the mass grows like b cubed", t05 p. 28). | Combines the slide formula with $M$ and $\lvert\vec g\rvert$ in one formula cited to slide 8. | Acceptable; optionally note that the last two parts are the page's own step. Citation slide 8 is correct (also L6 slide 6). |
| 7 | info | Gauss's law and Poisson's equation formulas | L6 slide 1 (Gauss's law of gravity, boxed) and L6 slide 2 (Poisson's equation, $\vec g = -\nabla\phi$). Also derived on the board in L5. | `reading2`, slide 1 and slide 2. | Correct. Note: in L5 Guth calls Poisson's equation "Laplace's equation"; the page correctly uses "Poisson". |
| 8 | info | Callout "Why local laws win" | t06 (opening recap): local laws like Poisson's equation considered more fundamental; Einstein started from Poisson's equation, not the force law; all known laws can be expressed locally. | Same. | None; it is Lecture 6 transcript content, not L5. Fine since page cites L6. |
| 9 | info | "But what about symmetry?" section | L6 slide 7, four bullets. | Faithful paraphrase. | None. Could cite reading2 slide 7. |
| 10 | info | Opening, "Before Hubble, everyone, Newton included, assumed the universe was static" | Guth: "Newton, like everybody, really, until Hubble, believed the universe was static" (t05 p. 14). | Same. | Fine as Guth's generalisation. |

## Arithmetic and answer checks
- Sign-function integral: for $L>|a|$, $\int_{a-L}^{a+L}\mathrm{sgn}\,x\,dx = (a+L)-(L-a) = 2a$; symmetric window gives 0. Correct, matches t05.
- Shells formula: $G\cdot\frac{4\pi}{3}\rho b^3/b^2 = \frac{4\pi}{3}G\rho b$. Correct. Direction: slide 8 arrow at P points toward Q; page's "$\hat e_{QP}$ points from P toward Q" matches the slide's convention.
- Worked example: 100 Mpc = 3.086e24 m (page 3.1e24, fine). $\frac{4\pi}{3}(6.67\times10^{-11})(2.7\times10^{-27})(3.1\times10^{24}) = 2.34\times10^{-12}$ m/s². Page's $2.3\times10^{-12}$ m/s² is correct. ρ = 2.7e-27 kg/m³ ≈ Ω_m ρ_crit (0.31 × 8.5e-27), so "average density of matter" is fair. Example is original (MIT gives no numbers here).
- Worked example step 3: "accelerating toward collapse or decelerating in expansion" — consistent with Newtonian dust (no Λ); fine.
- Quiz 1 (answer 1), Quiz 2 (answer 1), Quiz 3 (answer 1), Quiz 4 (answer 2): all correct and explanations consistent with L5/L6. Quiz 3 explanation "gives any answer you like" matches Guth (t05 p. 28).
- Flashcards: Gauss's law sign and Poisson's equation correct; conditional convergence definition correct; "static ⇒ ρ = 0" correct.
- Letter dates 10 December 1692 and 17 January 1693 match slides 1-4 (Newton Project dates the second "17 January 1692/3", i.e. Old Style year; 1693 is correct in modern reckoning).

## Coverage and order
- Page follows the L5 order: Newton's static universe and the Bentley letters → Gauss's law → Poisson's equation → conditionally convergent integrals → shells around P and Q; then adds L6's locality remark and "But what about symmetry?" (L6 slide 7). Good.
- Omitted (acceptable): inch-vs-foot paradox (slide 4), "voluntary Agent" passage (slide 2; see finding 3), Coulomb/electrostatics analogy for Gauss's law, the formal absolute vs conditional convergence definitions ($I_1$, $I_2$), the shell theorem argument for why outer shells exert no force (only stated), the student question on whether shells are physical (page covers the point: "only the bookkeeping changed").
- Not covered: the rest of L5 (cosmological redshift) belongs on another page; L6 mathematical model belongs to the next page (linked).

## Licensing
- No Newton quotation is reproduced at length; only the short phrase "neither equal nor unequal" (paraphrased, and the 1693 text is public domain anyway). No MIT slide text copied verbatim; the L6 slide 7 bullets are paraphrased.
- Slides and transcript carry no "All rights reserved" or "Courtesy of" notices. MIT logo not reused. No OpenStax/LibreTexts material.
- Newton Project reference: `https://www.newtonproject.ox.ac.uk/` resolves (200) and is the current home of the project (the slides' links are to the older newtonproject.sussex.ac.uk host, which also still resolves). The bare homepage is vague; better to link the two letters directly: `https://www.newtonproject.ox.ac.uk/view/texts/normalized/THEM00254` (10 Dec 1692) and `.../THEM00255` (17 Jan 1692/3), both verified to return the right letters.

## Notes
- `leadsTo: []` and no `Callout kind="cosmology"` blocks; nothing to check there.
- Seeliger/Neumann history (finding 5) is from general knowledge, not from the MIT sources; dates are standard (Seeliger 1895, Neumann 1896) but were not checked against a primary source in this review.
- The OCW web pages themselves were not fetched; the review relies on the local copies of the transcripts and slide PDFs.

## Resolution (2026-11-14, by the page author)
- Error fixed: the sign-function integral now cites the Lecture 5 transcript ("worked on the board"), not the slides.
- Newton–Bentley history rewritten: letter 1's "many separate masses"; Newton's admission that he could not explain suns vs planets naturally; the balance argument attributed to Bentley; the symmetry framing attributed to Guth; Seeliger and Neumann (1890s) mentioned.
- Newton Project links now go to the two letters directly.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
