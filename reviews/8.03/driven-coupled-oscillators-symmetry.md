---
page: content/year-2/8.03/driven-coupled-oscillators-symmetry.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-6/ (read: saved HTML of the lecture page; its transcript and typed-notes links match the page's readings; it also lists handwritten notes, Georgi Chapters 4 and 5, and the in-class demonstrations "Two Rigid Pendulums Coupled with a Spring" and "Coupled Air Carts")
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec6/ (read: typed Lecture 6 notes, 5 PDF pages; the text layer is garbled, so every page was rendered to an image and read; p. 4 is a handwritten sketch, p. 5 the OCW back page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/9531d8b953d05cf5c337ee3d94f1d180_Ahv7Akj2xs4.pdf (read: transcript, all 23 pages, page by page with pdftotext -f N -l N; no printed page numbers, so "p. N" = PDF page N)
  - Lecture 5 transcript, p. 1 (read only to check who gave Lecture 5)
  - Handwritten Lecture 6 notes, Georgi Chapters 4–5 (not read; the page does not cite them)
verdict: pass-with-notes
---

# Review: Driven coupled oscillators and symmetry

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Demonstrations" paragraph, three masses: "With three masses there are three modes: all together; the middle at rest ...; and the middle moving twice as far ... (pp. 15–17)" | The three mode shapes are first shown on "a nice applet from Colorado" (a computer simulation, p. 15), then briefly on the real three-cart system (p. 15), then as curves computed on the laptop ("the terminal calculating thingy", p. 16); only after that is the real system driven at 32, 56, 68 (pp. 16–17). The two-mass resonance curves (p. 13) are also a computer calculation. | Everything is presented under "Demonstrations", with no mention of the applet or the computed curves. | Say that the shapes were shown first in a simulation (an online applet) and in curves Wyslouch computed for three masses, and keep "demonstration" for the driven air carts (pp. 14, 16–17). |
| 2 | warning | Same paragraph: "Turning the knob to about 32, 56 and 68 (the frequencies on the apparatus)" | p. 16: "32 ... I'm setting frequency by turning a knob", "Then I go to 56"; p. 16: "68 according to my helpers here". No unit or scale is given. | Calls them "the frequencies on the apparatus". | "knob settings of about 32, 56 and 68 (no unit is given; the last one from his helpers)". |
| 3 | warning | Two-mass air track: "the system 'knows' to swing in opposition, after the homogeneous motion from the start dies away (p. 14)" | p. 14: "there were some random initial conditions, so we have a homogeneous equation going, but the driven is coming in ... suddenly the system knows that it has to go like that." Dying away with damping is said on pp. 16–17, for the three-mass run and the summary. | Says the homogeneous motion has died away at that point. | "...swing in opposition, while some motion from the random start is still mixed in (p. 14; it dies away with damping, pp. 16–17)". |
| 4 | warning | "Resonance picks out the modes": "A student points out the catch: there both amplitudes are infinite" | p. 12: Wyslouch asks what is "fishy"; the student's answer is "[INAUDIBLE]"; Wyslouch then says "the ratio of the two was one, but both of them were infinite". | Attributes the point to the student. | "Wyslouch asks what is fishy about this; after a student's (inaudible) answer he points out that both amplitudes are infinite there". |
| 5 | warning | Quiz 2, distractor "Because the small-angle approximation fails first" | p. 13: a student raises exactly this; Wyslouch first says it "doesn't actually matter", then agrees "that's true" that at large amplitude the equations would no longer hold, while insisting damping is what matters. | The distractor is marked wrong although the lecturer concedes it is partly true. | Replace the distractor (e.g. "Because the spring breaks first") or ask "What does the lecture say keeps ... finite?" and mention p. 13 in the explanation. |
| 6 | info | "Resonance picks out the modes", plot sentence: "both amplitudes are small at low frequency, where the masses move slowly together (p. 13)" | p. 13 (computed plot) says only that amplitudes are "much smaller if you're further out"; "they are moving a little bit ... together" at slow driving is p. 14 (air carts) and p. 16 (three-mass curves). The typed notes' p. 4 (handwritten sketch of $B_1$, $B_2$ against $\omega_d$, with sign changes) is not cited. | p. 13 only. | Cite pp. 13–14, and optionally notes p. 4 for the shapes of the curves (including that $B_1$ passes through zero between the resonances, which the worked example uses). |
| 7 | info | Opening: "Lectures 5 and 6 were given by Prof. Boleslaw Wyslouch (transcript, p. 1)" | The Lecture 6 transcript p. 1 only shows his name and "We talked about coupled oscillators last time". That he substitutes for Prof. Lee in Lecture 5 is in the Lecture 5 transcript, p. 1. | Cites Lecture 6 p. 1 only. | Add "(Lecture 5 transcript, p. 1)" or say "Lecture 6 (like Lecture 5) was given by ...". |
| 8 | info | "two masses on an air track" | The transcript never says "air track" ("a system which consists of two masses ... There is no g here", p. 14); the OCW lecture page lists the demonstration "Coupled Air Carts". | "air track". | Fine as is; optionally "air carts (OCW demonstration 'Coupled Air Carts')". |
| 9 | info | "In matrix form, with M and K as before and $F = (F_0, 0)$ (notes, p. 1)" | Notes p. 1 do not write $F$ as a vector; notes p. 2 give $M^{-1}F = (F_0/m, 0)$; transcript p. 6 says "Vector F is equal to F0 0". | notes p. 1 only. | Add "transcript, p. 6". |

Bracketed slip note (S eigenvalues): correct. Transcript p. 22: "the matrix S has two eigenvectors, one with eigenvalue of plus one, the other one plus 2", immediately after computing $S(1,1) = -(1,1)$ (p. 21) and $S(1,-1) = +(1,-1)$ (p. 22). The page's $-1$ and $+1$ are right, and the note is short and in brackets as AGENTS.md rule 4 asks.

Formula citations, each checked against the rendered note pages or the transcript:
- Driving force $F_0\cos(\omega_d t)\hat x$: notes p. 1. Correct.
- Driven equations: notes p. 1 (bold $F_0$ in the notes; same physics). Correct.
- Matrix form $M\ddot X = -KX + F\cos(\omega_d t)$: notes p. 1. Correct.
- Compact determinant: notes p. 2 (also transcript p. 7). Correct.
- Trial solution $Z = Be^{i\omega_d t}$, $B = (B_1, B_2)$: notes p. 2. Correct.
- Equations for the amplitudes, both forms: notes p. 2. Correct.
- Steady-state amplitudes $B_1$, $B_2$: notes p. 3. Correct (Cramer determinants checked: $B_1$ numerator $(F_0/m)(k/m+g/l-\omega_d^2)$, $B_2$ numerator $(F_0/m)(k/m)$).
- Amplitude ratio and the values $+1$, $-1$: notes p. 3. Correct.
- Full solution: notes p. 3. Correct.
- Mirror symmetry $\tilde X = SX$, $S = (0,-1;-1,0)$: not in the notes; transcript pp. 19–20 (board). `reading2` is right.
- Eigenvectors of S: transcript pp. 21–22 (board). Correct.

Prose citations checked: examples of coupled oscillators (pp. 1–2), arbitrary versus normal-mode excitation (notes p. 1; transcript pp. 2–3), superposition (p. 3), number of frequencies = number of masses (p. 4), $\omega_d$ unrelated to the normal frequencies and damping left out (p. 5), mass 2 feels the force only through the spring (p. 6), everything moves at $\omega_d$ (p. 7), Cramer's rule "for some historical reasons" and MATLAB/Mathematica (p. 9; again p. 18), column replacement (pp. 10–11), ratio at $\omega_1$, $\omega_2$ (p. 12), damping keeps it finite (pp. 12–13), earthquake (pp. 14–15), "fishes out" (p. 15), old car (p. 17), homogeneous dies, driven stays, damping shifts $B$ (p. 17), symmetry and normal modes (pp. 18–19), observer from the other side (p. 19), commuting with $M$ and $K$ and $S\ddot X = -M^{-1}KSX$ (p. 20), normal mode only changes by a factor (p. 21), "infinitely simpler" (p. 23), eigenvectors of $M^{-1}K$ stated without proof (p. 22). All agree apart from findings 1–9.

## Arithmetic and answer checks
- `npm run calc:test -- -k driven-coupled`: 14 passed.
- Compact determinant: $(a+b-s)^2 - b^2 = (a-s)(a+2b-s) = (s-a)(s-a-2b)$ with $a=g/l$, $b=k/m$; this is $(\omega^2-\omega_1^2)(\omega^2-\omega_2^2)$. Correct.
- Worked example inputs: $g/l = 9.8/0.50 = 19.6$ s⁻² and $k/m = 0.40/0.20 = 2.0$ s⁻² match the beats page (l. 123); $\omega_2^2 = 23.6$. $\omega_d = 4.0$ is below $\omega_1 \approx 4.43$ rad/s; $21.6$ lies between 19.6 and 23.6. Fully specified (only $g/l$, $k/m$, $F_0/m$, $\omega_d$ are needed; units consistent, $B$ in m).
- Step 1: $(-3.6)(-7.6) = 27.36$; $B_1 = 0.56/27.36 = 0.0205 \approx 0.020$ m; $B_2 = 0.20/27.36 = 0.00731 \approx 0.0073$ m; ratio $2.8$, "about three times". Correct.
- Step 2: $(2.0)(-2.0) = -4.0$; $B_1 = 0$; $B_2 = -0.050$ m. Check on mass 1: $(k/m)B_2 + F_0/m = 2.0(-0.050) + 0.10 = 0$, so the spring force cancels the drive. Correct.
- Quiz 1: $\omega_d^2 = g/l$ gives $B_1/B_2 = 1$, index 1. Correct.
- Quiz 2: index 1 (damping) is the lecture's answer; see finding 5 about the distractor.
- Quiz 3: index 1 (steady state), per p. 17. Correct.
- Quiz 4: $S(1,-1) = (0\cdot1 + (-1)(-1), (-1)(1) + 0\cdot(-1)) = (1,-1)$, index 0. Correct.
- Flashcards: all three correct.
- calcs file (info): `s-eig2` encodes a vector as `first*10 + second` with expected 9; correct but opaque. Two separate entries (expected 1 and −1) would be clearer.

## Coverage and order
- The page follows the lecture's order: recap of coupled oscillators, arbitrary versus normal-mode excitation, driving force, equations of motion, normal modes recap and compact determinant, trial solution, amplitude equations, Cramer's rule, ratio and resonance, the catch and damping, computed plot, air-cart demonstration, earthquakes, three masses, old cars, full solution, symmetry. Correct order.
- Omissions (info): Wyslouch's remark that the two-pendulum and two-cart systems differ only in the numbers in $K$ (p. 4); the "1,000 masses" picture (p. 14); the student question on Cramer's rule for 3×3 and Lee's Cramer slides (pp. 17–18); the symmetry examples (smiley faces, a house, an experiment in Switzerland, p. 19); the student question about where the $-S$ came from (pp. 20–21); Wyslouch's own multiplication slip for $S(1,-1)$, corrected by students (p. 22); the homogeneous solution as a separate formula (notes p. 2; it appears inside the full solution); the handwritten sketch on notes p. 4 (finding 6). None is essential.
- Additions: the worked example (original; the lecture has no numbers, and the anti-resonance case $B_1 = 0$ is not in the sources). No cosmology callout; `leadsTo` points to 8.03 Lecture 7, which is fitting (the page `symmetry-infinite-oscillators.mdx`, lecture 7, exists as a draft).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the typed notes (all pages viewed), the transcript or the OCW lecture page. The course is CC BY-NC-SA 4.0.
- The hand-drawn figures in the notes (pp. 1, 4) are not reproduced; the PhET/Colorado applet is not embedded or described beyond what the transcript says.
- No OpenStax or LibreTexts material.
- Quoted phrases are short and attributed ("for some historical reasons", "knows", "fishes out", "infinitely simpler", "plus one", "plus 2"). The comparison table restates the notes' table (p. 1) in the same three rows; this is a short factual table of standard terms and is acceptable.
- Worked example: original numbers, built on the site's own beats page.

## Notes
- Prerequisites `coupled-pendulums-beats` and `cramers-rule-inverse-volume` exist; the inline links `/courses/8-03/coupled-pendulums-beats` and `/courses/18-06/cramers-rule-inverse-volume` point to existing pages.
- `source.url` and both readings match the OCW lecture page and the `_course.json` syllabus entry (Lecture 6, "Driven Oscillators, Resonance").
- The frontmatter `summary` is a long paragraph rather than "one sentence" as AGENTS.md shows (info; it is used in cards and search results).
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

1. The demonstrations paragraph now separates the Colorado web applet (a simulation) and the computed curves from the real driven carts.
2. "Knob settings of about 32, 56 and 68 (no unit given; the last 'according to my helpers')".
3. The homogeneous motion is now described as still mixed in on p. 14, dying away with damping (pp. 16–17).
4. The "infinity over infinity" catch is now attributed to Wyslouch; damping is the answer.
5. Quiz 2's distractor replaced ("Because the driving force switches off").
6. The computed-curve sentence now cites notes p. 4 and transcript pp. 13–14.
7. The opening now cites the Lecture 5 transcript for the substitution.
8. No change.
9. F = (F₀, 0) now also cites transcript p. 6.
10. `s-eig2` split into two entries.
11. No change (the summary follows the length of the other pages in these runs).

Status set to reviewed.
