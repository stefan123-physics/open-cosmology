---
page: content/year-2/8.033/speed-of-light-michelson-morley.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture3_symme2/ (read: OCW resource page fetched; the slide PDF (24 pages, about 169 kB) was read from the local copy supplied with the task, every slide rendered and viewed as an image because the text extraction is incomplete)
  - Lecture 4 slides (local copy s4.pdf, text only), to check the 8.033 Lecture 4 leadsTo
  - content/year-4/8.286/doppler-effect.mdx (read), to check the 8.286 Lecture 3 leadsTo
verdict: needs-changes
---

# Review: The speed of light and the Michelson–Morley experiment

Slide numbers below are PDF page numbers, as the page uses them. Slide map: 1 welcome (Michelson photo, "Image courtesy of Wikipedia"); 2 summary of Lecture 2; 3 today's topic; 4–5 symmetry of classical mechanics (answer: translation, rotation, Galilean, combined); 6 symmetry of electromagnetism?; 7 classical wave equation; 8 question: is it Galilean invariant?; 9 transforming the wave equation; 10 solutions with c′ = c ± v, aether; 11 "which do you trust more"; 12 three questions about the speed of light; 13 wavelength (gamma-ray bursts); 14 source motion (binary stars); 15 observer motion (Michelson and Morley title slide); 16 round-trip times; 17 rotation, (v/c)², no fringe shift; 18 "No, no and no!"; 19 aether rescue title with Δt; 20 rescue attempts list; 21 invariance table; 22 "What is wrong?"; 23 "What are we to make of this?"; 24 theoretical question, BINGO.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The wave equation is not Galilean invariant", paragraph before the second formula | Slide 9: hint $x' = x + vt$, $t' = t$, and chain rule $\partial/\partial t = v\,\partial/\partial x' + \partial/\partial t'$. Hint and chain rule agree with each other (they follow from $x' = x + vt$). The slide's *result* has $+2\frac{v}{c}\frac{d^2E}{x'dt'}$. Its plus sign belongs to $x' = x - vt$. | "(slide 9; the slide's hint writes $x' = x + vt$, but its derivatives belong to $x' = x - vt$)", and it gives $\partial/\partial t = -v\,\partial/\partial x' + \partial/\partial t'$ as from slide 9 | This statement about the slide is wrong. The slide's derivatives belong to $x' = x + vt$, which gives a cross term of $-2v/c^2$. What does not match is the slide's *result*: its $+$ sign fits $x' = x - vt$. Rewrite, e.g.: "the slide's hint and chain rule use $x' = x + vt$, which gives the cross term with a minus sign; its stated result, with a plus sign, corresponds to $x' = x - vt$, used here". Also say that the page's $-v$ chain rule is its own, not the slide's. |
| 2 | warning | Formula "Wave equation after a Galilean boost" (slide 9) | Slide 9's result has the coefficient $2\frac{v}{c}$ (no square) and denominator $x'dt'$ (missing $d$). Viewed at 250 dpi: it really is $c$, not $c^2$. | $2\frac{v}{c^2}\frac{d^2E}{dx'dt'}$ | The page's form is the dimensionally correct one, and calcs `boosted-wave-equation` confirms it. Rule 4: add a short bracket saying the slide's printed coefficient $2v/c$ is a misprint for $2v/c^2$. |
| 3 | warning | Before "Expected change on rotation" (slide 17) | Slide 17: "To lowest order in $v/c$, $\gamma \approx 1 + (v/c)^2$" (missing the factor ½). Its final $\Delta t' - \Delta t \approx \frac{L_\parallel+L_\perp}{c}(v/c)^2$ is right only with $\gamma \approx 1 + \frac12(v/c)^2$. | "$\gamma \approx 1 + \frac12(v/c)^2$ (slide 17)" | The page's expansion is correct, but it is cited to a slide that prints it differently. Add a bracket noting the slide's slip. Otherwise $2\gamma(\gamma-1)$ would give $2(v/c)^2$. |
| 4 | warning | "What to make of it", first sentence (slide 21) | Slide 21's table marks **$\mathbf F = m\mathbf a$ as N** under Galilean transformations (and Y under rotations). Newtonian mechanics is Y. | "time, lengths, $\nabla^2$, acceleration, mass, $F = ma$ and Newtonian mechanics are invariant under Galilean boosts" (slide 21) | Physically the page is right (the law $F = ma$ keeps its form under a boost, and the table itself marks $\mathbf F$, $\mathbf a$, $m$ as Y). But the statement is attributed to a slide that says otherwise. Either drop $F = ma$ from the list or add "(the table marks $F = ma$ as N, apparently a slip, since $F$, $m$ and $a$ are all invariant)". |
| 5 | warning | Frontmatter `summary` ("about 0.2 of a fringe for their 11 m arms") and flashcard 2 ("with $v = 30$ km/s and 11 m arms, about 0.2 fringe") | Slide 17: $L_\parallel + L_\perp = 11$ m, giving about $2\times10^7$ wavelengths. | Body correctly says $L_\parallel + L_\perp \approx 11$ m. Summary and flashcard say "11 m arms". | These do not match. If the *arms* were 11 m each, the sum would be 22 m and the shift would be about 0.4. Historically, Michelson and Morley's 1887 arms had an effective length of about 11 m each, and the expected shift usually quoted is about 0.4 fringe (stated from general knowledge, not from the slides). So the slide's "$L_\parallel + L_\perp = 11$ m" is itself questionable. At minimum, change "11 m arms" to "arms totalling 11 m (as on the slides)". Better: add a bracket saying each arm was about 11 m, so the historical expectation was about 0.4 fringe. |
| 6 | warning | "Motion of the observer" paragraph | Slide 1 and slide 15: "1st American to win Nobel Prize (1907)" | "the first American to win a Nobel Prize (1907)" | This is a slip on the slides that the page repeats. Theodore Roosevelt won the 1906 Nobel Peace Prize, so Michelson was the first American to win a Nobel Prize *in the sciences* (Physics, 1907). Reword, and say in brackets that the page differs from the slide. Also update calcs `michelson-nobel` `shown`. |
| 7 | info | "The new equation has solutions $Af(x - c't) + Bf(x + c't)$ with $c' = c + v$ or $c - v$" (slide 10) | Slide 10 says the same. | Same | Strictly, in the primed frame the two directions move at different speeds ($c - v$ one way, $c + v$ the other), so the solution is $Af(x' - (c-v)t') + Bf(x' + (c+v)t')$. It is not one $c'$ for both terms. The calcs check uses exactly this. A half-sentence would make it precise. |
| 8 | info | Slide 16 transcription | Slide 16 prints $(ct_\perp/2)^2 = \sqrt{L_\perp^2 + (vt_\perp/2)^2}$ (left side should not be squared) | Page states the geometry correctly in words | No change needed. Optionally note the slide's typo. |
| 9 | info | Section "What experiments say" | Slide 13: the flash is seen "also at x-rays and optical wavelengths" (that is, as well as gamma rays) | "arrive in X-rays and visible light within about $10^2$ s" | Fine. Could say "in gamma rays, X-rays and visible light". |

All other formulas were checked against the slides and their citations are correct:
- slide 7: wave equation, 1D form, general solution;
- slide 13: $\Delta t/t \lesssim 10^{-15}$, $\Delta c/c \approx \Delta t/t$;
- slide 14: $t_1$, $t_2$, $\Delta t = 2dv/(c^2-v^2) \approx 2t\,v/c \approx 200$ years, the LMC pulsar, half an orbit in 2 days, "Doppler effect" ∝ $a$, backwards in time when $a > c^2/d$;
- slide 16: $t_\parallel = \frac{2L_\parallel}{c}\gamma^2$, $t_\perp = \frac{2L_\perp}{c}\gamma$, $\gamma$;
- slide 17: $\Delta t$, rotation, $\Delta t' - \Delta t$ to lowest order, its ratio to $t$, the numbers.

The prose slide citations (2, 3, 5, 7, 8, 10, 11, 13, 14, 15–17, 18, 19–20, 21, 22, 23, 24) all point to slides with the cited content, apart from the items in the table above.

## Arithmetic and answer checks
- `npm run calc:test -- -k speed-of-light-michelson`: 16 passed.
- $10^2/10^{17} = 10^{-15}$. $10^{-15} \times 3\times10^8$ m/s $= 3\times10^{-7}$ m/s $= 300$ nm/s. Correct.
- "A few billion light years, about $10^{17}$ light-seconds": 1 Gyr ≈ $3.16\times10^{16}$ s, so 3 Gyr ≈ $10^{17}$ s. Correct.
- Binary star: $2 \times 10^5$ yr $\times (300/3\times10^5) = 200$ yr. Correct. $d/(c-v) - d/(c+v) = 2dv/(c^2-v^2)$: correct.
- Round trips: $L/(c-v) + L/(c+v) = 2Lc/(c^2-v^2) = (2L/c)\gamma^2$. Correct. The perpendicular arm: $(ct/2)^2 = L^2 + (vt/2)^2$ gives $t = (2L/c)\gamma$. Correct.
- $\Delta t' - \Delta t = 2\gamma(\gamma-1)(L_\parallel+L_\perp)/c \approx (L_\parallel+L_\perp)/c \cdot (v/c)^2$, using $\gamma - 1 \approx \frac12(v/c)^2$. Correct (see finding 3 about the slide).
- $(30/3\times10^5)^2 = 10^{-8}$. $11/500\times10^{-9} = 2.2\times10^7$. Shift ≈ 0.22. Correct as computed from the slide's values (see finding 5 about the historical 0.4).
- Wave equation in the boosted frame: with $x' = x - vt$, $\partial_t = -v\partial_{x'} + \partial_{t'}$, so $\partial_t^2 = v^2\partial_{x'}^2 - 2v\partial_{x'}\partial_{t'} + \partial_{t'}^2$. That gives $(1 - v^2/c^2)E_{x'x'} - E_{t't'}/c^2 + (2v/c^2)E_{x't'} = 0$, which matches the page's formula. With $x' = x + vt$ (the slide's hint) the cross term would be $-2v/c^2$.
- Worked example (a): $2.4/(633\times10^{-9}) = 3.79\times10^6$; $\times 10^{-8} = 0.038$. Correct. It is below the page's "0.2" and above the 0.01 sensitivity, so the comment is consistent.
- Worked example (b): $2 \times 1000 \times 100/3\times10^5 = 0.667$ yr $= 243.5$ d, about 240 days. Correct.
- Quiz 1 (answer index 1, $c \pm v$ with extra terms): correct. The explanation's equation matches the page's (corrected) formula.
- Quiz 2 (index 1): correct. The explanation $10^2/10^{17}$ is right.
- Quiz 3 (index 1): correct. "About $2\times10^7$ wavelengths times $10^{-8}$ ≈ 0.2" is right for the slide's 11 m total.
- Quiz 4 (index 1): correct, matches slide 24.
- All four quiz answers are at index 1. The recent commit "Vary the position of the correct quiz answer" suggests the project wants them spread out (info).
- Flashcards: card 1 correct. Card 2 has the "11 m arms" wording problem (finding 5). Card 3 correct.

## Coverage and order
- The page follows the slide order: 2–3 (intro) → 7–11 (wave equation) → 13 → 14 → 15–17 → 18 → 19–20 → 21 → 22 → 23 → 24.
- Slides 4–6 (the transformations listed on slide 5, including the combined one, and the question about the symmetry of electromagnetism) are covered only by the one-line recap in the first paragraph. That is acceptable, since Lecture 2's page covers them.
- Slide 8's clicker option "Yes, but only if $c_w \ll c$" and slide 22's option 4 (Bohr's complementarity, a joke option) are left out. Fine.
- Slide 12 (the three questions) is not cited by number, but its content is the structure of the section. Fine.
- Slide 24's opening "theoretical question" (what transformation law leaves physics invariant?) and "Lorentz transformation works for E&M (PS3)" are only partly reflected. The page lists the Lorentz bullet but not the framing question that leads into Lecture 4. Optional (info).
- Nothing is added that is not on the slides, except the chain-rule sign remark (finding 1), the geometric explanation of $t_\perp$ (correct), the cosmology callout and the worked example.

## Licensing
- Slides 1 (Michelson photo, "Image courtesy of Wikipedia") and 4/5/15 ("Figure(s) by MIT OCW", rifle drawings) are not reused. The page has no images. Good.
- No "All rights reserved" notice appears on any of the 24 slides.
- No OpenStax or LibreTexts material.
- Quoted phrases are short and marked: "hammered it", "civilization annihilation", "No, no and no!", "BINGO!". The text otherwise rewrites the slides' bullets. The slide 24 bullet list is a close paraphrase of five short bullets, which is acceptable at this length. The frontmatter `summary` is very long (it repeats the whole page) but is not copied text.
- The worked example uses its own numbers (1.2 m arms, 633 nm, a binary 1,000 ly away at 100 km/s). It is original.

## Notes
- Cosmology callout: the Doppler-shift link is fair, and `content/year-4/8.286/doppler-effect.mdx` is Lecture 3 and covers redshift and relativistic effects, so the 8.286 Lecture 3 leadsTo is correct. "Gamma-ray bursts, the slides' test of $c$, come from billions of light years away, from when the universe was markedly younger" is consistent with slide 13 (a few billion light years). "Every distance and velocity in cosmology rests on light whose speed is the same for all observers" overstates things a little (gravitational waves and neutrinos are messengers too) but is acceptable for a callout.
- 8.033 Lecture 4 leadsTo: the Lecture 4 slides say "Today: Deriving the Lorentz transformation" and "derive everything from two postulates". The `why` is correct.
- Prerequisites `symmetry-galilean-invariance` (8.033) and `electromagnetic-waves` (8.03, Lecture 12) exist. Links `/courses/8-033/…` and `/courses/8-03/…` match the course slugs.
- Rescue attempts (slide 20) are reported faithfully. As a historical aside (not from the slides), Fizeau's 1851 result is usually read as supporting Fresnel's partial drag, so it rules out *complete* aether drag. The page's wording is acceptable.
- The OCW resource page describes this PDF as covering "postulates of special relativity, first discussion of Minkowski diagrams, and world lines". That description does not match the PDF, whose content is symmetry part II as the page says. Info only; the URL and the file are the right ones (file size about 169 kB matches).
- Uncertain: only the slides exist for this lecture (no transcript or notes), so anything Tegmark said in class but did not put on a slide cannot be checked.

## Resolution (2026-11-16, by the page author)

Error: the slide 9 remark now says the slide's hint and chain rule use x′ = x + vt (with +v), while its result, with +2v in the cross term, belongs to x′ = x − vt.
Warnings:
2. Added that slide 9 prints the coefficient as 2v/c for 2v/c².
3. Added that slide 17 drops the ½ in γ ≈ 1 + ½(v/c)².
4. The slide 21 sentence no longer lists F = ma as invariant "per the table"; a bracket notes that the table marks it N although it is invariant.
5. "11 m arms" replaced by L∥ + L⊥ = 11 m (the slide's numbers) in the summary and flashcard.
6. Michelson is now the first American Nobel laureate in the sciences, with the slides' wording quoted; calcs updated.
Info: c − v in one direction and c + v in the other. Quiz answer positions varied (correct answers unchanged).
