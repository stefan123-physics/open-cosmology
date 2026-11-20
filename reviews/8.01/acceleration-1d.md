---
page: content/year-1/8.01/acceleration-1d.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ (read, from a pdftotext conversion of the Chapter 4 PDF supplied by the caller; Sections 4.4-4.6 read in full, Examples 4.4-4.6 skimmed)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/ (read, segment list for Lesson 2)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/2-1-introduction-to-acceleration/ (read; page holds only a video, the video and transcript were not read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/2-2-acceleration-in-1d/ (read; video only, video and transcript not read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/2-3-worked-example-acceleration-from-position/ (read; problem statement only, solution video not read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/2-4-integration/ (read; video only, video and transcript not read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/2-5-list-of-useful-integrals/ (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/video_galleries/video-lectures/ (read, lecture titles only; Lectures 6 and 20 were not watched)
verdict: pass-with-notes
---

# Review: Acceleration in one dimension

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Coverage, after "Average and instantaneous acceleration" | Segment 2.3 is a worked example that gets acceleration from position, x(t) = bt², by differentiating. Ch. 4 Example 4.3 does the same with the limit, Eq. (4.3.28). | No worked example that differentiates x(t) to get v(t) and a(t). Only the "check by differentiating" step in the second example does this. | Add a short original example, e.g. x(t) = 2 + 3t − t³: find v(t) and a(t), plot them, and give the units of the constants (MIT 2.3 part (a) asks for units). |
| 2 | warning | Plot under "Non-constant acceleration" (`range={[-3, 14]}`, `domain={[0, 2.5]}`) | n/a | v(t) = 1 − 2t + 3t² reaches 14 at t ≈ 2.44 s and is 14.75 at t = 2.5 s, so it is cut off at the top of the plot. | Use `range={[-3, 16]}` or `domain={[0, 2.4]}`. |
| 3 | warning | Cosmology callout, "Gravity from ordinary matter should slow it down" | Not in the MIT 8.01 source. | "Ordinary matter" usually means baryons. Dark matter also slows the expansion, and in fact most of that slowing comes from it. | Write "Gravity from matter (ordinary and dark) should slow it down." |
| 4 | warning | Cosmology callout, "That discovery is the main evidence for dark energy" | Not in the MIT 8.01 source. | Calls the supernova result "the main" evidence. It was the first direct evidence; today the CMB, BAO and other probes give independent evidence of similar weight. | Write "the first direct evidence for dark energy" or "a key piece of evidence". |
| 5 | warning | Cosmology callout, symbol a(t) | n/a | The whole page uses a(t) for acceleration, then the callout uses a(t) for the scale factor without saying that the letter now means something else. d²a/dt² could be read as the derivative of the acceleration. | Add "(a different quantity from the acceleration a above; cosmologists use the same letter)". |
| 6 | info | Formula "Velocity and position by integration", `at="Sec. 4.6, Eqs. (4.5.19)–(4.5.21)"` | Eqs. (4.5.19) and (4.5.21) use a general start time t_i and v(t_i), x(t_i), with the integral running from t′ = t_i. | Uses t_i = 0, v_0 and x_0. | Fine as it stands (this is the t_i = 0 case, which MIT itself uses in Example 4.5, Eqs. (4.5.24)–(4.5.25)). Optionally say "starting the clock at t = 0". |
| 7 | info | Formula "Power rule for integrals", `cite="mit" at="segment 2.5 List of Useful Integrals"` | Segment 2.5 gives ∫_{t_i}^{t_f} A tⁿ dt = A/(n+1)(t_f^{n+1} − t_i^{n+1}), states no n ≠ −1 condition, and lists 1/t → ln separately. | ∫_0^t t′ⁿ dt′ = t^{n+1}/(n+1), with n ≠ −1. | Correct. The page's condition n ≠ −1 is right and is a useful addition. With lower limit 0 the formula also needs n > −1 (for −1 < n < 0 the integral still converges, and for n < −1 it diverges). Optionally write "for n ≥ 0" since only polynomials are used. Note that `cite="mit"` points to the 2.1 URL (the page's `source.url`), not to the 2.5 page. |
| 8 | info | Callout "Negative acceleration does not mean slowing down" | Ch. 4 does not discuss the sign of a against the speed. | Adds the rule "same sign: speeding up; opposite sign: slowing down". | The physics is correct. It is an addition to MIT, which is fine. |
| 9 | info | Plot 1 caption, "Each curve is the slope of the one above it" | n/a | "Above" means the order in the legend (x, v, a), not the vertical position on the graph, where the curves cross. | Write "v(t) is the slope of x(t), and a(t) is the slope of v(t)." |
| 10 | info | Plot 1 | n/a | The domain runs to t = 3 s. The ball lands at t ≈ 2.57 s, so for the last 0.43 s x(t) is below the ground (x(3) = −6.6 m). | Use `domain={[0, 2.57]}`, or say in the caption that the curve goes on past landing. |

All `at=` equation numbers were checked against the PDF as printed, and every one matches: (4.3.24) for average acceleration (Section 4.4.1); (4.3.25)–(4.3.27) for instantaneous acceleration (Section 4.4.2); (4.4.2) in Section 4.5; (4.4.9) in Section 4.5.2; (4.5.19)–(4.5.21) in Sections 4.6.3–4.6.4. The page correctly cites the printed numbers, even though they are offset from the section numbers. The formulas, notation (component a, vector a î, a_ave) and units (m/s², MIT writes m·s⁻²) match MIT. The rectangle-plus-triangle area argument matches MIT Fig. 4.9 and Eqs. (4.4.5)–(4.4.6).

## Arithmetic and answer checks
- Ball thrown upward: t_top = 12/9.8 = 1.2245 s → 1.22 s, correct. Height above the hand v₀²/2g = 144/19.6 = 7.347 m; the page's expression 12(1.22) − 4.9(1.22)² = 14.64 − 7.29 = 7.35 m, correct; total 8.85 m, correct.
- Landing: 4.9t² − 12t − 1.5 = 0; discriminant 144 + 4(4.9)(1.5) = 173.4, √ = 13.168; t = 25.168/9.8 = 2.568 s → 2.57 s, correct. Other root (12 − 13.168)/9.8 = −0.119 s, negative, correct to discard.
- Impact speed: 12 − 9.8(2.568) = −13.17 m/s → −13.2 m/s, correct. Check: √(v₀² + 2gh) = √173.4 = 13.17 m/s. The explanation (it falls 1.5 m further than it rose from the hand) is correct.
- Plot 1 caption values (x₀ = 1.5, v₀ = 12, a = −9.8) match the plot params and the worked example. The zero of v and the peak of x are both at t = 1.22 s, correct. At t = 3 s the curves are inside the range: x = −6.6, v = −17.4.
- Non-constant example: v(t) = 1 + 3t² − 2t, correct; x(t) = t − t² + t³, correct; v(2) = 1 + 12 − 4 = 9 m/s, correct; x(2) = 2 − 4 + 8 = 6 m, correct; derivative check correct.
- Plot 2: a = 0 at t = 1/3 s, where v has its minimum, v(1/3) = 2/3 m/s, so the caption is correct. Range clipping: see row 2.
- Quiz 1 (answer 1: v = 0, a ≠ 0): correct; the explanation's a = −g assumes +up, which is acceptable.
- Quiz 2 (answer 1: area): correct.
- Quiz 3 (answer 1: 25 m): ½(2)(25) = 25 m, correct.
- Quiz 4 (answer 1: 3t²): correct.
- Quiz 5 (answer 1: slowing down toward −x): correct.
- Flashcards: all five are correct.

## Coverage and order
- MIT Lesson 2 segments: 2.1 Introduction to Acceleration, 2.2 Acceleration in 1D, 2.3 Worked Example: Acceleration from Position, 2.4 Integration, 2.5 List of Useful Integrals. The page follows this order (definition → constant a → integration → power rule), except that 2.3 has no counterpart (row 1).
- The page leaves out these parts of Ch. 4: Example 4.3; Examples 4.4 (accelerating car) and the car-and-bus example; the indefinite-integral and Riemann-sum derivation in Sections 4.6.1–4.6.3 (the page only summarises the slicing idea in one paragraph); Example 4.5 (general polynomial a(t)); Example 4.6 (bicycle and car); the other integrals in segment 2.5 (exponential, 1/t, sine, cosine). For an introductory page these are acceptable omissions, but the integral list could be linked.
- The page adds: the sign rule callout, the thrown-ball example, the cosmology callout.
- I could not check what the videos in 2.1, 2.2 and 2.4 say, because only their transcripts' download links were reachable and they were not read.

## Licensing
- No text was found copied verbatim from Ch. 4. The page's wording is its own; shared phrases are standard terminology.
- Worked examples are original: the thrown ball does not appear in Ch. 4, and a(t) = 6t − 2 with v₀ = 1, x₀ = 0 is a specific numerical case of the method in Example 4.5, not a copy of it.
- No figures are reused, and no "Courtesy of" or "All rights reserved" material from Ch. 4 is used. No OpenStax or LibreTexts material was seen.
- The OCW pages are CC BY-NC-SA 4.0, matching the page's license field.

## Notes
- Cosmology callout and leadsTo: the 8.286 Fall 2013 Lecture 20 title, "Supernovae Ia and Vacuum Energy Density", matches the `guth20` reference. Lecture 6 is "The Dynamics of Homogeneous Expansion, Part II", which fits the leadsTo reason. Whether that particular lecture is where the d²a/dt² equation is derived (it may be Lecture 5 or 6) is uncertain, because the lectures were not watched.
- "In 1998 two teams measured distant Type Ia supernovae": correct (the High-z Supernova Search Team, Riess et al. 1998, and the Supernova Cosmology Project, Perlmutter et al. 1999, whose results were announced in 1998). ä > 0 today is correct for the standard ΛCDM model.
- `cite="guth20"` on the ä > 0 formula is acceptable. The formula is a statement of the result, not an equation from the lecture.

## Resolution (2026-11-14, by the page author)
- Added acceleration-from-position by differentiating twice (counterpart of segment 2.3).
- Second plot's y-range raised so v(t) is not clipped.
- Cosmology callout: notes the scale factor's $a$ is not the acceleration $a$; gravity from ordinary and dark matter; supernovae called the first direct evidence for dark energy.
- Open: whether 8.286 Lecture 6 derives the $\ddot a$ equation is unverified (transcript not read). Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
