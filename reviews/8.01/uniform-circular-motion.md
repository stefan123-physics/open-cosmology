---
page: content/year-1/8.01/uniform-circular-motion.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/9-1-uniform-circular-motion/ (read; segment page, plus the Week 3 page and the course Readings page, which list "Lesson 9: Uniform Circular Motion [9.1-9.3]" with readings Sections 6.3 and 6.4)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/9-2-uniform-circular-motion-direction-of-the-acceleration/ (read; segment page, reference seg92)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/9-3-period-and-frequency/ (read; text-only segment, not cited by the page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter6/ (read; Chapter 6 PDF, Spring 2022 version, printed pp. 5–10 checked page by page with pdftotext; printed page = PDF page − 1; from p. 10 the footer reads "6-10")
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/7964ea56d26ad55f38232fb94b72a411_emrHcqEvXpw.pdf (read; 9.1 transcript, 2 pp.; p. 1 ends at "a plus j hat component")
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/80f38b2b9192af28b91722ecb8cdd572_l_NW5pPXhg4.pdf (read; 9.2 transcript, 2 pp.)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read)
  - https://doi.org/10.1051/0004-6361/201935656 (not read directly; read the arXiv abstract, arXiv:1904.05721: "R0 = 8178 ± 13(stat.) ± 22(sys.) pc", A&A 625, L10)
  - https://doi.org/10.3847/1538-4357/aaf648 (not read directly; read the arXiv abstract, arXiv:1810.09466: "v_c(R_⊙) = (229.0 ± 0.2) km/s")
verdict: needs-changes
---

# Review: Uniform circular motion: centripetal acceleration, period and frequency

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Velocity in Cartesian components", `cite="reading2" at="transcript 9.1, p. 1"` | Transcript 9.1 p. 1 only says θ̂ will be decomposed ("a minus i hat component and a plus j hat component"). The expression itself, "minus sine theta of t i hat plus cosine theta of t j hat", is the second line of **p. 2**. | Cites p. 1. | `at="transcript 9.1, pp. 1–2"`. |
| 2 | warning | Formula "Acceleration in uniform circular motion", `at="transcript 9.1, pp. 1–2"` | All of the differentiation is on 9.1 **p. 2**, and the 9.1 transcript stops at "So our acceleration--" before the final form is said. The finished result "minus r d theta dt quantity squared r hat" is stated at the start of transcript **9.2, p. 1**. | Cites 9.1 pp. 1–2 for the whole chain, including $= -r(d\theta/dt)^2\hat r(t)$. | `at="transcript 9.1, p. 2"`, and add the 9.2 p. 1 location for the final form (or cite Eq. (6.4.2), p. 8 of the notes for it). Change the `source.at` of `acceleration-derivation` in the calcs file to match. |
| 3 | warning | `source.title` "(9.1–9.2)"; section "Period and frequency" | OCW lists Lesson 9 as segments **9.1–9.3**. Segment 9.3, "Period and Frequency", is a text-only page: T is the time to cover 2π radians, f is the number of rotations per unit time, ω is called the "angular frequency", $f = 1/T = \omega/2\pi$ and $v = R\omega = 2\pi R/T$. | Period and frequency are covered (from notes Section 6.4), but segment 9.3 is not named or cited, and the title says the lesson is 9.1–9.2. | Change the title to "(9.1–9.3)" and add the 9.3 page as a reading or reference. Cite it next to Eq. (6.4.5) for $f = 1/T = \omega/2\pi$. Optionally mention $v = 2\pi r/T$ and that 9.3 calls ω the "angular frequency". |
| 4 | warning | Formulas "Radial component" vs "Radial acceleration from the geometry"; symbol meaning `a-r` | Notes: Eq. (6.3.8) gives $a_r = -r\omega^2 < 0$ (signed component). Eq. (6.5.3) then uses the same letter for "the magnitude of the radial acceleration", $a_r = v\omega$ (positive). The notes are inconsistent here. | The page repeats both: $a_r = -r\omega^2 < 0$, then $a_r = \lim\lvert\Delta\vec v\rvert/\Delta t = v\omega$ (positive). The `a-r` meaning in `data/symbols.json` says $a_r$ is negative, which is wrong for the second formula. | In the geometric formula write $\lvert a_r\rvert$ (or $a$, as the page already does in "Five ways"). If you keep the notes' form, add a short bracketed note that the notes use $a_r$ there for the magnitude. |
| 5 | warning | `calcs/8.01/uniform-circular-motion.yaml`, id `mond-scale` | n/a | `source: {ref: eilers2019}` for the MOND scale of 10⁻¹⁰ m/s². Eilers et al. (2019) measure the circular velocity curve. They do not give the MOND acceleration. | Point it at the Ferreras MOND page or its source (for example the same entry as `calcs/Ferreras/mond.yaml`, `a0-value`), or at a MOND reference added to `references`. |
| 6 | info | Section order | The notes put Section 6.4 (period, frequency, the forms of $a$) before Section 6.4.1 (geometric derivation). Inside 6.4 they call Eq. (6.5.3) "the first" form before it has been derived. | The geometric derivation (6.4.1) comes first, then period and frequency, then the forms. This follows the segment order 9.1 → 9.2 → 9.3 and avoids the notes' forward reference. | None needed. Optionally say in one clause that the page takes 6.4.1 before 6.4. |
| 7 | info | Bracketed note on Eqs. (6.5.1)–(6.5.3) | The three equations sit on p. 10 under the heading 6.4.1, before the 6.5 heading, and are numbered (6.5.1)–(6.5.3). Section 6.5.1 then starts again at (6.5.4). | Bracket says the notes number them (6.5.x) inside 6.4.1 and cites them as printed. | Correct. None. |
| 8 | info | Bracketed note "fourth expression" | Notes p. 9: "A fifth form commonly encountered … Thus we have the fourth expression for the centripetal acceleration in terms of radius and period". | "[The notes call the last one 'the fourth expression'; counting $v\,\omega$, it is the fifth.]" | Correct. None. (The notes do count (6.5.3) as the first form, so (6.4.9) is the fifth by their own count.) |
| 9 | info | Section "Why inwards: the geometric picture" | Two more slips in the sources are not repeated on the page: notes p. 10 say the acceleration is "perpendicular to position vector $\vec v(t)$" (should be the velocity, or along $-\hat r$); transcript 9.2 p. 1 says the component "is given by r times d theta dt squared. It's always negative", dropping the minus sign. | The page states both correctly and does not mention the slips. | Optional: per writing rule 4, a short bracket is only needed where the page visibly differs from a statement it cites. Neither statement is cited, so this can stay as is. |
| 10 | info | Section "Constant speed, changing velocity", Formula "Radial component" | The notes define ω = dθ/dt (signed; Section 6.3, "Recall that ω ≡ dθ/dt"). Segment 9.3 calls ω the "angular frequency". | Defines $\omega = \lvert d\theta/dt\rvert$, the angular speed. This matches the Lesson 8 page. | None. Only squares and $T = 2\pi/\omega$ use it, so the sign does not matter. |
| 11 | info | Section 6.3 coverage | The Readings page assigns Section 6.3 (general tangential and radial acceleration, Eqs. 6.3.1–6.3.7, Example 6.1 with $\theta = At^3 - Bt$) to **both** Lesson 9 and Lesson 10. | Uses only Eq. (6.3.8). The non-uniform case is left to Lesson 10 through `leadsTo`. | Acceptable. Make sure the Lesson 10 page covers Eqs. (6.3.1)–(6.3.7) and Example 6.1. |
| 12 | info | Citation page format | From printed p. 10 onward the notes' footer reads "6-10", "6-11". The Lesson 8 page cites "p. 6-11". | Cites "p. 10" for (6.5.1)–(6.5.3). | Optional: write "p. 6-10" to match the printed footer and the Lesson 8 page. |
| 13 | info | `references.seg92` | n/a | Defined but never cited by a `<Formula>`. The 9.2 transcript (reading3) is cited instead. | Harmless. Remove it, or keep it as the link to the segment page. |

Citation checks (each `<Formula>`; printed page numbers checked with `pdftotext -f N -l N`):
- $v = r\lvert d\theta/dt\rvert$: transcript 9.1 p. 1 ("the magnitude of the velocity, v, is given by r magnitude of d theta dt"). **Correct.**
- $a_\theta = 0$: Eq. (6.4.1), p. 7. **Correct.**
- Velocity in Cartesian components: transcript 9.1. **Page wrong** (p. 2, not p. 1; #1).
- Acceleration: transcript 9.1. **Partly wrong** (#2).
- $a_r = -r(d\theta/dt)^2 = -r\omega^2 < 0$: Eq. (6.3.8), p. 7, and (6.4.2), p. 8. **Correct.** (6.4.2) is the vector form $\vec a_r = -r\omega^2\hat r$, which is fine as a joint citation.
- $\Delta\vec v = \vec v(t_2) - \vec v(t_1)$: transcript 9.2 p. 1. **Correct.**
- $\lvert\Delta\vec v\rvert = 2v\sin(\Delta\theta/2) \approx v\Delta\theta$: Eqs. (6.5.1)–(6.5.2), p. 10. **Correct.**
- $a_r = v\,d\theta/dt = v\omega$: Eq. (6.5.3), p. 10. **Correct** (see #4 on the sign).
- $s = 2\pi r = vT$: Eq. (6.4.3), p. 8. **Correct.**
- $T = 2\pi r/v = 2\pi r/(r\omega) = 2\pi/\omega$: Eq. (6.4.4), p. 8. **Correct.**
- $f = 1/T = \omega/2\pi$: Eq. (6.4.5), p. 8. **Correct** (also segment 9.3; #3).
- $a = r\omega^2$, $v^2/r$, $4\pi^2 r f^2$: Eqs. (6.4.6)–(6.4.8), p. 8. **Correct.**
- $a = 4\pi^2 r/T^2$: Eq. (6.4.9), p. 9. **Correct.**
- "SI unit … inverse second … hertz": notes p. 8. **Correct.**

## Arithmetic and answer checks
All recomputed independently (Python):
- Washing machine: $f = 1200/60 = 20$ Hz, $T = 0.050$ s, $\omega = 40\pi = 125.66 \approx 125.7$ rad/s, $v = 0.25 \times 125.66 = 31.42 \approx 31.4$ m/s. Exact $a = 3947.8$ m/s² in all five forms. The rounded intermediates on the page give 3950.1 ($0.25 \times 125.7^2$), 3943.8 ($31.4^2/0.25$), 3947.0 ($31.4 \times 125.7$), 3948.0 ($39.48 \times 0.25 \times 400$) and 3948.0 ($39.48 \times 0.25/0.0025$). All round to "≈ 3950". **Correct.** $3947.8/9.81 = 402$, "≈ 400". **Correct.**
- Moon: $T = 27.32 \times 86400 = 2.360 \times 10^6$ s. **Correct.** $4\pi^2 \times 3.844\times10^8/T^2 = 2.724 \times 10^{-3}$ m/s² (with the rounded $2.36\times10^6$: $2.725 \times 10^{-3}$), "≈ 2.72 × 10⁻³". **Correct.** $9.81/3600 = 2.725 \times 10^{-3}$, "≈ 2.73 × 10⁻³". **Correct.** $384400/6371 = 60.3$, "about 60". **Correct.** The input values match the NASA fact sheet (semimajor axis 0.3844 × 10⁶ km; sidereal revolution period 27.3217 d).
- Cosmology callout: 8178 pc × 3.0857 × 10¹⁶ m = 2.523 × 10²⁰ m, "about 2.5 × 10²⁰". **Correct.** $T = 2\pi r/v$ with $v = 229$ km/s gives 219.4 Myr, "about 220 million years". **Correct.** $v^2/r = 2.08 \times 10^{-10}$ m/s², "about 2 × 10⁻¹⁰". **Correct.**
- Plot: the marked point at $v = 20$ m/s, $r = 50$ m gives $400/50 = 8$ m/s². **Correct** at the default slider value. (Info: the point is fixed, so it leaves the curve when the slider is moved. Consider `{ curve: 0, at: … }` or a label that names $r = 50$ m, which it already does.)
- Quiz 1 (answer index 1, "Yes: … points to the centre"). **Correct.**
- Quiz 2 (index 2, 8.0 m/s²): $20^2/50 = 8.0$. **Correct.** Distractors 0.4 (= $v/r$), 2.5 (= $r/v$) and 400 (= $v^2$) are plausible slips.
- Quiz 3 (index 2, four times). **Correct.**
- Quiz 4 (index 3, 12.6 s): $2\pi/0.5 = 12.57$. **Correct.** Distractors 2.0 (= $1/\omega$) and 3.1 (= $\pi \times 1$, not obviously a slip but harmless).
- Quiz 5 (index 2, towards the centre). **Correct**, and the explanation matches transcript 9.2.
- Flashcards: all four are correct ($v = r\lvert d\theta/dt\rvert$; $\vec a = -r(d\theta/dt)^2\hat r$, $a_r = -r\omega^2 < 0$; $T = 2\pi r/v = 2\pi/\omega$, $f = 1/T = \omega/2\pi$; the five forms).
- `calcs/8.01/uniform-circular-motion.yaml`: every number on the page has an entry. The three identities (derivative, chord length, the five forms agreeing) are set up correctly. `npm run calc:test`: 944 passed, including this file. Remarks: `mond-scale` has the wrong source (#5). `g-comparison`, `drum-in-g` and `moon-g-over-3600` cite "reading1, p. 8/p. 9" for $g = 9.81$ m/s², but those notes pages do not mention $g$ (info; cite the Lesson 5 page or mark as page-own without a notes location). `acceleration-derivation` repeats the transcript location of #2.
- `npm run content:check`: 0 errors. The only warning is the missing review file, which this file now provides.

## Coverage and order
- MIT Lesson 9 = segments 9.1 (uniform circular motion, derivative of the velocity), 9.2 (direction of the acceleration, geometric argument) and 9.3 (period and frequency, text only). Readings: notes Sections 6.3 and 6.4 (including 6.4.1).
- Page order: 9.1 (speed constant, velocity turns; Cartesian derivative; $a_r$) → 9.2 (tail-to-tail $\Delta\vec v$) → notes 6.4.1 (|Δv| ≈ vΔθ, $a = v\omega$) → 6.4 (period, frequency, hertz) → 6.4 forms (6.4.6)–(6.4.9) and the closing remark on which form to use. This follows MIT's segment order. It differs from the notes only by placing 6.4.1 before 6.4 (#6).
- Left out: segment 9.3 is not cited (#3), and neither is its $v = 2\pi R/T$, though it follows from (6.4.4). The general (non-uniform) part of Section 6.3 and Example 6.1 are left to Lesson 10 (#11). The notes' aside "Other forms, such as $4\pi^2 r^2 f/T$ or $2\pi r f$ … are uncommon" (p. 9) is omitted (harmless; note that "$2\pi r f$" as written in the notes is a speed, not an acceleration, so it is better left out).
- Added: two original worked examples (washing machine, Newton's Moon test), a $v^2/r$ graph and the cosmology callout. None of these are in Chapter 6 or the segments.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in Chapter 6 (whole PDF searched), in the 9.1/9.2 transcripts or on the 9.1–9.3 segment pages. The page reuses no MIT figure (Figures 6.4–6.5 are not reproduced; the only graphic is a generated `<Plot>`).
- No OpenStax or LibreTexts material.
- Text is rewritten. The closest wording is "Its SI unit is the inverse second, called the hertz (Hz)" (notes: "The SI unit of frequency is the inverse second, which is defined as the hertz") and the paragraph on which form to use (notes p. 9: "If we know one, we can calculate the other three"). Both are short, standard and paraphrased. Acceptable.
- Worked examples are original (the notes' only example in this range, Example 6.1, is not used). The Moon test is a classic historical example, not taken from these MIT materials.

## Notes
- Cosmology callout: "about 229 km/s (Eilers and colleagues, 2019)" matches arXiv:1810.09466 ($v_c(R_\odot) = 229.0 \pm 0.2$ km/s, systematic 2–5 %). "8178 parsecs (GRAVITY collaboration, 2019)" matches arXiv:1904.05721. Both are attributed. Info: Eilers et al. derived their 229 km/s with an earlier Sun–centre distance (to my knowledge the GRAVITY 2018 value of about 8.12 kpc; I did not confirm this in the paper body). Combining it with 8178 pc changes the period and acceleration by under 1 %, so the rounded numbers stand.
- "far out, the visible stars and gas are not enough, one of the main arguments for dark matter": fair as a general statement. Ferreras Section 2.2 (the `leadsTo` target, page `rotation-curves`) covers it.
- MOND sentence and `leadsTo` 7.2: $a_0 \approx 1.2 \times 10^{-10}$ m/s² (the site's own `calcs/Ferreras/mond.yaml` uses 1e-10 and 1.2e-10), so "below about 10⁻¹⁰ m/s²" is fair. Info: at the Sun $v^2/r \approx 2 \times 10^{-10} \approx 2a_0$, near the transition rather than below it. "Accelerations this small are also where … MOND proposes" is acceptable. The `leadsTo` wording "the size of v²/r for stars in the outer Galaxy" is right: at 25 kpc and about 200 km/s, $v^2/r \approx 5 \times 10^{-11}$ m/s².
- `leadsTo` 8.01 Lesson 10 (tangential plus radial acceleration) matches the Readings page (Lesson 10: Sections 6.3 and 6.5). Lesson 11 (Newton's second law and circular motion) is correct. The Ferreras 2.2 ("Rotation curves in galaxies") and 7.2 ("Modified Newtonian Dynamics (MOND)") syllabus entries exist.
- Internal link `/courses/8-01/universal-gravitation` resolves (course slug `8-01`, page exists).
- Symbols scoped to this page (`omega`, `a`, `T`, `t`, `d`, `f`, `g`, `v`, `r`, `s`, `t_1`, `t_2`, `a_r`, `a_θ`) are all accurate for this page, except the `a_r` wording "negative" for the geometric formula (#4). `r` with $r = 384{,}400$ km in the Moon example still fits "the radius of the circle". No em dashes on the page.
- Washing-machine physics ("the wall pushes the sock inwards about 400 times harder than its weight"; water "flies off along the tangent") is correct.

## Resolution (2026-11-15, by the page author)

- **Error 1 fixed:** "Velocity in Cartesian components" now cites transcript 9.1, pp. 1–2.
- **Warning 2 fixed:** "Acceleration in uniform circular motion" cites transcript 9.1, p. 2, with the result as stated in 9.2, p. 1; the calcs entry `acceleration-derivation` has the same location.
- **Warning 3 fixed:** the source title now reads 9.1–9.3; segment 9.3 (text page) is a reference (`seg93`) and is cited for a new formula "Period, frequency and speed together" (f = 1/T = ω/2π, v = rω = 2πr/T), with the name "angular frequency" for ω.
- **Warning 4 fixed:** the geometric formula now reads a = |a_r| = … = vω, with a sentence that this is a size (positive) while the component a_r is negative; the `a-r` symbol meaning is unchanged and now fits every use on the page.
- **Warning 5 fixed:** `mond-scale` cites a new reference, Ferreras Section 7.2 (`ferreras`). The callout now says the Sun's v²/r is "only about twice" the MOND scale (new calcs entry `sun-over-mond`, 2.08), instead of implying it is below it.
- Info: the unused reference `seg92` was replaced by `seg93`. The three calcs entries using g = 9.81 m/s² remain page-own comparisons. Notes page numbers stay as printed (p. 10 for the 6-10 footer).

Status set to `reviewed`.
