---
page: content/year-4/8.286/grand-unified-theories.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3747051d1048b4df855d7574a3a8360c_PK1KNojfvMQ.pdf (read; transcript, pp. 20–28 compared in full, footer page numbers checked against PDF pages)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec21/ (read; slides 1–7, slides 6 and 7 also inspected as rendered images)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-21-problems-of-the-conventional-non-inflationary-hot-big-bang-model/ (read via the source page used to obtain the transcript and slides)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-23-inflation/ (read; course page description only, used for the cosmology callout)
verdict: pass-with-notes
---

# Review: The Standard Model, gauge theories and grand unification

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Gauge transformation" Formula and bracketed note | Slide 7: $\phi'(t,\vec x) = \phi - \partial\Lambda/\partial t$ (no $1/c$), while $\vec E = -\vec\nabla\phi - \frac{1}{c}\partial\vec A/\partial t$ and $A'_\mu = A_\mu + \partial\Lambda/\partial x^\mu$ are on the same slide | $\phi' = \phi - \frac{1}{c}\partial\Lambda/\partial t$, with a bracketed note | No change needed. Verified: with $\vec A' = \vec A + \vec\nabla\Lambda$, $\vec E$ is unchanged only if $\phi' = \phi - \frac1c\partial_t\Lambda$; and with $A_\mu = (-\phi, A_i)$, $x^0 = ct$, the covariant line gives $-\phi' = -\phi + \frac1c\partial_t\Lambda$. The note is correct and properly flagged as a deviation from the slide. |
| 2 | info | SU(5) paragraph, bracketed note | p. 27: "in such a way that the product of the five phases is 0. So the determinant has not changed." | Product is 1; the exponents sum to zero | No change. Verified on p. 27; the correction is right ($3\cdot2 + 2\cdot(-3) = 0$). |
| 3 | warning | SU(5) bullet list, third bullet | p. 27: "giving an overall phase to this [the 3×3 block] and an overall phase to that [the 2×2 block]" | "multiply the first three diagonal entries by $e^{2i\phi}$ and the last two by $e^{-3i\phi}$" | Read literally alongside the first two bullets (which place full SU(3)/SU(2) matrices in the blocks), multiplying only diagonal entries of a non-diagonal SU(3) block would be wrong. Say "multiply the whole upper 3×3 block by $e^{2i\phi}$ and the lower 2×2 block by $e^{-3i\phi}$" (equivalently: the U(1) element on its own is diag($e^{2i\phi}$,×3, $e^{-3i\phi}$,×2)). The worked example already uses the correct block form. |
| 4 | warning | "The Standard Model of particle physics" section, "complete model" sentence | Slide 6 chart (older Wikimedia/PBS NOVA/Fermilab chart) shows only fermions and gauge bosons; Guth does not mention the Higgs in pp. 21–23 | Lists fermions and gauge bosons and calls it "a complete model" | The Standard Model also contains the Higgs boson (discovered 2012, before this lecture), and Lecture 22, which the `leadsTo` points to, is about the Higgs field. Add one sentence: "The chart Guth shows omits the Higgs boson, also part of the Standard Model (discovered in 2012); its field is the subject of Lecture 22." |
| 5 | info | SU(5) paragraph, "SU(5) contains SU(3) × SU(2) × U(1) as a subgroup" | p. 27, same statement | Same statement | Faithful to Guth. Strictly, the map has a finite kernel ($\mathbb{Z}_6$), so the subgroup is $[SU(3)\times SU(2)\times U(1)]/\mathbb{Z}_6$. Optional short bracketed remark; not required at this level. |
| 6 | info | Standard Model opening | p. 21: "in 1975 I'm not sure if we knew all three generations that we now know" | Omits this hedge | Optional. Historically tau 1975, bottom 1977, top 1995, so "unchanged since 1975" applies to the structure, not to the particle list. |
| 7 | info | Flashcard 1 | Transcript does not assign groups to forces in this lecture | "strong (gluons), and electroweak (photon, W±, Z⁰)" | Correct standard physics (SU(3) = colour, SU(2) × U(1) = electroweak), but it is an addition beyond Lecture 21. Acceptable. |
| 8 | warning | "Later developments" callout | n/a (post-lecture facts) | "the Super-Kamiokande detector puts the proton lifetime above about $10^{34}$ years" | The ~$10^{34}$ yr Super-K bound (τ/B > 2.4×10³⁴ yr, 2020) is a **partial** lifetime for the specific channel $p \to e^+\pi^0$, the one minimal SU(5) predicts, not a bound on the total proton lifetime. Reword: "puts the lifetime for the decay $p \to e^+\pi^0$ above about $10^{34}$ years". |
| 9 | warning | "Later developments" callout, last sentence | n/a | "the Standard Model has continued to pass every precision test at the Large Hadron Collider" | Overstated. There have been tensions (e.g. LHCb flavour anomalies, most of which later faded); none is established, but "every" is too strong. Suggest "has so far withstood all precision tests at the LHC, with no established deviation". Mark as later development (it already is). |

## Arithmetic and answer checks
- Neutron decay $n \to p + e^- + \bar\nu_e$: charge and electron lepton number balance; matches p. 22.
- SU(5) determinant: $(e^{2i\phi})^3(e^{-3i\phi})^2 = e^{6i\phi - 6i\phi} = 1$. Correct.
- Worked example: unitarity step correct (phases have modulus 1); determinant step correct; commuting step correct (block-diagonal pieces on disjoint blocks commute, and the U(1) piece is a scalar on each block). The example is an original elaboration of Guth's "if you think about it" remark (p. 27), not copied text. It verifies MIT's own construction rather than using new numbers, which is acceptable for an algebraic topic.
- Quiz Q1 (answer 1): correct, p. 20–21.
- Quiz Q2 (answer 3, "disagrees with reliable experiments"): correct; Guth's three reasons are gravity, dark matter, about 28 parameters (p. 23).
- Quiz Q3 (answer 1, confinement / string breaking): correct, p. 24.
- Quiz Q4 (answer 1, non-commuting group elements): correct, pp. 25–26; explanation matches slide 7.
- Quiz Q5 (answer 1, determinant 1): correct.
- Flashcards 2–4: correct (flashcard 2 uses the corrected $1/c$, consistent with the page).

## Coverage and order
Order matches the transcript exactly:
1. Monopole problem introduced, depends on GUTs (pp. 20–21) — page intro.
2. Standard Model: generations, flavours, colours, leptons, gauge bosons, weak interactions, neutron decay, agreement with experiment (pp. 21–23).
3. Why it is not final: gravity, dark matter, ~28 parameters (p. 23).
4. Student question on the short range of the strong force; confinement (pp. 23–24).
5. Gauge theories, slide 7: E&M potentials, gauge transformation, Abelian combination (pp. 24–25).
6. Yang–Mills non-Abelian theories, 1954 (p. 26; Guth says "1954, I think" — the date is correct).
7. SU(3), SU(2), U(1), product group (p. 26).
8. GUTs, simple group, SU(5) embedding (p. 27).
9. Out of time; GUT problem withheld from problem set; Scott Hughes to continue (p. 28).
- No MIT segment from pp. 20–28 is omitted. Earlier pages (horizon and flatness problems, the Q&A on Ω = 1 at the top of p. 20) belong to the sibling pages `horizon-problem` and `flatness-problem`.
- Additions not in the lecture: the charge column in the table (taken from the slide 6 chart, factual), the flashcard assignment of groups to forces, and the two callouts. All are fair.
- Info: p. 28 says Scott Hughes will pick up the discussion next Tuesday. The page says only "continues in Lecture 22". Optional: mention that Lecture 22 was taught by a guest lecturer (I did not check the Lecture 22 transcript to confirm who gave it).

## Licensing
- `grep -i "rights reserved\|courtesy"` on the slides and transcript text: no matches. Slide 6 is credited "From the Wikimedia Commons. Source: PBS NOVA, Fermilab, Office of Science, United States Department of Energy, Particle Data Group."
- The page does **not** reproduce the slide 6 image. Its table gives only particle names, generation and charge, which are facts arranged in the standard way, with no masses, colours or artwork from the chart. This is a fair, factual rewrite, and the page names the source ("slide 6, from Wikimedia Commons"). Optional: add the slide's source credit (PBS NOVA, Fermilab, DOE Office of Science, PDG) in brackets for completeness. It is not required because no image material is reused.
- Text: paraphrased throughout. Short phrases close to the transcript ("a string can never simply end in empty space", "a bit dull", "magnificent achievement", "free knobs") are short and attributed to Guth. That is acceptable.
- No OpenStax or LibreTexts material.

## Notes
- Formula citations: all three `<Formula>` blocks cite `reading2` at "slide 7", which is correct. The fields-from-potentials and $\Lambda_3 = \Lambda_1 + \Lambda_2$ lines are verbatim from slide 7. The gauge-transformation line differs from the slide only by the flagged $1/c$ (finding 1).
- Later-developments callout: Georgi–Glashow SU(5), 1974 (Phys. Rev. Lett. 32, 438) is correct. "Simplest version predicted protons decay faster than experiments allow" is correct: minimal SU(5) predicted roughly $10^{29}$–$10^{31}$ yr, which IMB and Kamiokande excluded in the 1980s. See findings 8 and 9 for wording.
- Cosmology callout: Lecture 22's OCW title ("The Higgs Field and the Cosmological Magnetic Monopole Problem", from `_course.json`) supports the claim that Lecture 22 covers the Higgs-type phase transition and monopole overproduction. The Lecture 23 OCW page describes inflation mechanisms but does not mention monopoles. That inflation dilutes monopoles is standard and almost certainly in Lecture 23, but **I did not verify it against the Lecture 23 transcript**. The page author should confirm when writing Lecture 23.
- `leadsTo` (Lecture 22, Higgs field and monopole overproduction) is consistent with the Lecture 22 title.
- No errors found. The verdict is pass-with-notes. Findings 3, 4, 8 and 9 should be fixed before setting `status: reviewed`.

## Resolution (2026-11-14, by the page author)

- Warning 1: the SU(5) bullet now says the U(1) phase multiplies the whole 3×3 and 2×2 blocks.
- Warning 2: added a bullet noting that the chart predates 2012 and omits the Higgs boson, which completes the Standard Model and is the subject of Lecture 22.
- Warning 3: the proton bound is now stated as the partial lifetime for $p \to e^+\pi^0$.
- Warning 4: the LHC sentence now says "no established deviation from the Standard Model".
- Info: the page now says Guth expects Scott Hughes to give the next lecture. The $\mathbb{Z}_6$ quotient and the 1975 generations hedge are left as in the lecture.
