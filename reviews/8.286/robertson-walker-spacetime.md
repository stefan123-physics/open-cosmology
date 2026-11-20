---
page: content/year-4/8.286/robertson-walker-spacetime.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-13-non-euclidean-spaces-spacetime-metric-and-geodesic-equation/ (not fetched; content read via the local copies below)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/6dd048a7b2e1f9a96fcb9db67c117340_eUYIcR1VGns.pdf (read via local transcript.pdf / pages.txt; video ID eUYIcR1VGns matches the transcript header. PDF pp. 1–18 read in full; printed footers checked with `pdftotext -f N -l N` for pp. 8, 14, 15 and equal the PDF page numbers. URL itself not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec13/ (read via local slides.pdf / slides.txt, slides 1–5)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec14/ (read via local slides14.pdf / slides14.txt; slides 1–2 checked)
  - Lecture 14 transcript (local t14.txt; read only around the end of the geodesic derivation and the start of the Schwarzschild example, to check forward claims)
verdict: pass-with-notes
---

# Review: The spacetime metric of the universe

Page numbers below are the printed footer page numbers of the Lecture 13 transcript (equal to the PDF page numbers). Scope: transcript pp. 1–18 (the geodesic derivation from p. 18 on is on `geodesic-equation` and is not reviewed here).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "Where this leads": "Lecture 14 tries it on the Schwarzschild metric; applied to this metric, it shows how moving particles slow down as the universe expands." | Lecture 14 transcript (p. 12–13, t14.txt l. 392–398): applying the geodesic equation to the RW metric, and the slowing of moving particles, is left to the **homework**; the lecture itself does the Schwarzschild example instead. | Reads as if Lecture 14 shows the slowing-down. | "Lecture 14 tries it on the Schwarzschild metric; applied to the Robertson–Walker metric (a homework problem in 8.286), it shows how moving particles slow down as the universe expands." |
| 2 | warning | "Gravity depends on your point of view": "as the expansion slows down" | p. 10: comoving observers accelerate relative to each other "as that expansion changes its expansion rate, which we've already calculated". | States slowing down as a general fact. True for the matter/radiation models derived so far, but the real universe today is accelerating (covered later in 8.286). | "as the expansion rate changes (in the models so far, as it slows down)". |
| 3 | info | "Three further facts are stated without proof (slide 4)", bullet on finite/infinite | p. 5: for this fact Guth says "we pointed out last time — and did a short calculation to demonstrate". Only the "every homogeneous isotropic space" fact is explicitly not shown. | All three "stated without proof". | "Three further facts (slide 4); the first is stated without proof, the second was checked by a short calculation in Lecture 12." |
| 4 | info | Formula "A comoving observer's clock", `at="p. 15"` | p. 15: the reasoning is spoken, not a board equation; Guth does not write $d\tau$. | `at="p. 15"` | Correct page. Optionally `at="p. 15 (spoken)"`; the $d\tau = dt$ notation is the page's own. |
| 5 | info | Section "Free-falling observers and the meaning of ds²" | The three meanings are stated in the transcript on pp. 13–14 and summarised on Lecture 14 slide 1. | Cites only Lecture 14 slide 1. | Add "(transcript pp. 13–14)". |
| 6 | info | Callout "Only in small regions": "— which is all the metric, a statement about infinitesimal separations, needs" | p. 13 says the principle holds in infinitesimal regions because of tidal effects; it does not draw this connection. | Adds the link to the metric. | Fine as the page's own comment; could be marked as such or left as is. |
| 7 | info | "Where Lecture 12 left off", isotropy paragraph | p. 2 also notes that isotropy about the origin plus homogeneity gives isotropy about every point. | Not mentioned. | Optional one-line addition. |
| 8 | info | Plot curve labels "Tweedledee (outward)" / "Tweedledum (inward)" | Guth does not say which of them goes which way (p. 16). | Assigns directions. | Harmless; fine as is. |

All formula citations were checked:
- Minkowski metric, `p. 8 (board)`: correct. Guth says he moves to the blackboard on p. 8 and writes $ds^2 = dx^2+dy^2+dz^2-c^2dt^2$ there ("It's called the Minkowsky metric").
- RW spacetime metric, `p. 14 (board); also Lecture 14 slide 1`: correct. Written on the board on p. 14 ("I'm going to write down the answer"), and it appears on L14 slides 1 and 2. The L13 slides do not contain it; they only summarise L12.
- Comoving clock, `p. 15`: correct page (see #4).
- Other in-text page references: "transcript p. 9" (coordinate invariance) correct; "pp. 10–11" (frame dependence) correct; "p. 13" (tidal effects) correct; "pp. 16–18" (Tweedledee/Tweedledum) correct, since the argument runs from p. 16 to the top of p. 18; "slide 3" (homogeneity map) and "slide 4" (three facts) correct.

## Arithmetic and answer checks
- Worked example: in a flat universe the proper distance moved in time $dt$ is $a\,dr$, so $a\dot r$ is the speed relative to local comoving observers. $d\tau = dt\sqrt{1-0.6^2} = 0.8\,dt$, so 10 cosmic years give 8 years. Correct. The comoving watch reading 10 years follows from Case 2. Correct.
- Plot: with the made-up term $+2\beta c\,a\,dt\,dr$ and $dr = \pm\dot r\,dt$, $u = a|\dot r|/c$, we get $-c^2d\tau^2 = dt^2(-c^2 + c^2u^2 \pm 2\beta c^2 u)$. So $d\tau/dt = \sqrt{1-u^2\mp 2\beta u}$, with the minus sign (more dilation) for outward motion when $\beta>0$. The curves match these labels. Caption values recomputed: $\sqrt{0.75} = 0.866$; $\beta = 0.1$, $u = 0.6$: $10\sqrt{0.52} = 7.21$ and $10\sqrt{0.76} = 8.72$. All correct.
- Plot range: at the default $u = 0.5$ both curves stay in [0.4, 1.1] across $\beta \in [-0.3, 0.3]$. The minimum is 0.67. For $u \ge 0.7$ and large $|\beta|$ one curve drops below 0.4 or becomes imaginary. `components/Plot.tsx` maps non-finite values to NaN, so those parts are just hidden. Harmless.
- Quiz 1 (answer 1, free-falling observers): correct (pp. 12–13). The explanation is correct.
- Quiz 2 (answer 1, so wristwatches read cosmic time): correct (p. 15).
- Quiz 3 (answer 1, different elapsed times): correct (p. 17).
- Quiz 4 (answer 1, 8 years): correct; same calculation as the worked example.
- Quiz 5 (answer 1, tidal effects): correct (p. 13).
- Flashcards: all five are correct. The RW metric in the card matches the board formula.

## Coverage and order
- The page follows the order of pp. 1–18. It reviews L12 (RW metric for every k, isotropy about the origin, the homogeneity map in three steps and why it carries over to k < 0, the three facts, GBL = 2D open universe; pp. 1–6, slides 1–4). Then it covers the Minkowski metric (p. 8), coordinates as arbitrary labels and the coordinate invariance of ds² (pp. 8–9), the question of special observers and the frame dependence of gravity (pp. 10–11), the Einstein elevator in both versions and the equivalence principle (pp. 11–12), free-falling observers (pp. 12–13), tidal effects and small regions (p. 13), the meaning of ds² (pp. 13–14), the RW spacetime metric (p. 14), Cases 1 and 2 (pp. 14–15), and why there are no dt·dr terms, with Tweedledee and Tweedledum (pp. 16–18).
- Left out (minor):
  - The full review of the special-relativity interval $s^2_{AB}$ and its three meanings (slide 5, pp. 6–8). Only "Lecture 12 ended with the interval" remains. It is covered on the prerequisite page `spacetime-interval`, and the GR version of the meanings is given later on this page, so this is acceptable.
  - The κ = −k form of the open metric (slide 2, p. 1).
  - Guth's remark that time plays a small role in most of what follows but is crucial for some questions (p. 6).
  - Guth's remark that the formula for a special coordinate system is simplest in inertial frames, though any coordinates are allowed even in SR (p. 9).
- Added (not in MIT): the worked example, the plot with a hypothetical β term, and the remark linking small regions to the metric (#6). All are clearly the page's own material.
- The geodesic part (p. 18 on) is correctly left to `geodesic-equation`.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the Lecture 13 transcript, the Lecture 13 slides or the Lecture 14 slides (grep of all extracted text). No slide images are reused; the plot is generated from a formula.
- No verbatim copying of paragraphs. A few phrases stay close to the transcript: "lift his feet ... hover", groceries that "float in front of him", "difficult roommate", "it wasn't in the book". They are short, rewritten, and the page attributes the thought experiment to Guth ("Guth makes this concrete"). Acceptable.
- The worked example (0.6c, 10 years) and the β-plot are original, not from MIT.
- License field CC BY-NC-SA 4.0. No OpenStax or LibreTexts material.

## Notes
- Attributions are honest: "Guth argues" for the k < 0 extension of the homogeneity map matches slide 3 ("We will not show it") and pp. 4–5. "Ryden's textbook discusses it too" and the elevator as part of Einstein's motivation match p. 11.
- No lecturer slips are repeated. Guth's slip "inertial" for "free-falling" (p. 14) and the transcript's "isotopic" (p. 17) do not appear on the page.
- leadsTo Lecture 14 ("simplified and tried on the Schwarzschild metric") is supported: L14 simplifies the equation by choosing λ as arc length (t14.txt l. 241–254) and then does the Schwarzschild example (l. 398 ff.).
- Prerequisites `spacetime-interval` and `open-universe-geometry` exist in content/year-4/8.286/.
- The OCW URLs in the frontmatter were not fetched, so I did not confirm that they resolve.

## Resolution (2026-11-14, by the page author)

- Warning 1: the cosmology callout now says that applying the geodesic equation to the Robertson–Walker metric is an 8.286 homework problem (Lecture 14 does the Schwarzschild example in class).
- Warning 2: "as the expansion slows down" became "as the expansion rate changes (in the matter-dominated models derived so far, it slows down)".
- Info: the slide 4 sentence now says that only the finite/infinite fact was checked by a calculation, in Lecture 12.
- Info: the comoving-clock formula's `at` now reads "p. 15 (argued in words; the dτ notation is ours)".
- Info: the meaning-of-ds² section now cites transcript pp. 13–14 as well as Lecture 14 slide 1.
- Info: the tidal callout's remark about the metric is now a separate bracketed sentence, so it isn't attributed to Guth.
- Info: added Guth's point that isotropy about the origin plus homogeneity gives isotropy everywhere.
- Info (Tweedledee/Tweedledum labels in the plot): left as is; harmless.
- Not changed: the special-relativity interval review (slide 5, pp. 6–8) stays on the prerequisite page `spacetime-interval`.
