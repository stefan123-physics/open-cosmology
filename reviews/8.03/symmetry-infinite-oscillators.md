---
page: content/year-2/8.03/symmetry-infinite-oscillators.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-7/ (read: saved HTML of the lecture page, title "Lecture 7: Symmetry, Infinite Number of Coupled Oscillators"; matches source.title)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec7/ (read: typed Lecture 7 notes, 5 pages plus the OCW end page; the text layer is garbled, so every page was also checked as a rendered image, including the figures on pp. 1, 3 and 5)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/7ded831737bef1723afaa0974e90d7fd_b1eKhyC9TTo.pdf (read: transcript, all 18 pages, page by page; no printed page numbers, so "p. N" = PDF page N)
  - Transcripts of Lectures 5 and 6 (first page only, to check who lectured them)
verdict: pass-with-notes
---

# Review: Symmetry and infinitely many oscillators

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Symmetry gives the normal modes", **From modes to S**; also the frontmatter summary ("Then every normal-mode vector of M⁻¹K is an eigenvector of S"), the first Summary bullet and the first flashcard | Notes p. 2 state the condition explicitly: "If x(t) = A⁽¹⁾cos ω₁t and ω₁ ≠ ω₂ ... Any solution oscillatory with ω₁ must be proportional to A⁽¹⁾". The step needs distinct normal-mode frequencies. | States the modes-to-S direction with no condition ("Swapping the pendulums does not change the frequency, so X̃ is the same normal mode"). Without ω₁ ≠ ω₂ the claim is false (e.g. two identical uncoupled pendulums: every vector is a mode, but not every vector is an eigenvector of S). | Add "(the two normal-mode frequencies are different, ω₁ ≠ ω₂; notes, p. 2)" in the paragraph, and "with distinct mode frequencies" in the summary, Summary bullet and flashcard. |
| 2 | warning | "Standing waves", item 2 (mode shape A_j = sin(jka)) together with items 3 and 4; flashcard 4; Summary bullet 4 | Notes p. 5 choose sin(jka) "to make A_j real"; Lee (transcript p. 16) says it is "just a choice" and that the plus combination gives the cosine. Neither source comments on the end points. | Gives sin(jka) as *the* shape of the modes, then describes the modes at cos ka = −1 (alternating) and cos ka = 1 (all moving together). At ka = π and ka = 0, sin(jka) = 0 for every j: there β = 1/β, the two eigenvectors coincide, and the mode is A_j = β^j = (−1)^j or 1 (equivalently cos(jka)). A careful reader finds the stated shape vanishes exactly in the two cases discussed next. | Add one sentence: "the cosine combination works equally (transcript, p. 16); at ka = 0 and ka = π, where β = 1/β, the sine vanishes and the mode is A_j = 1 or (−1)^j." In flashcard 4 write "sin(jka) or cos(jka)". |
| 3 | info | Infinite chain, bracket "(The notes write the spring constant as k; here it is K, as Lee writes it ...)" | The notes' **text** writes k (p. 3 and throughout, also for the stiffness matrix: "M⁻¹k"), but their **figure** on p. 3 labels the springs with capital K. The transcript says "spring constant capital K" (p. 8) and "capital K over m" (p. 12). | Bracket is correct for the text; the reason (k becomes the wave number) is sound. | Optional precision: "The notes' text writes k (their figure K) ...". |
| 4 | info | "An infinite chain" onward | Lee and the notes also use K for both the stiffness matrix and the scalar spring constant. | Uses K both for the matrix M⁻¹K and for the spring constant in "2K/m on the diagonal". Not wrong, as in MIT, but a reader may stumble. | Optional: say once that in M⁻¹K, K is the stiffness matrix, built from the spring constant K. |
| 5 | info | "Standing waves", item 3: "Ten oscillators on the bench show it." | Transcript p. 17: "I can demo a system with 10 oscillators"; it says nothing about a bench. | Adds "on the bench". | "A demonstration with ten oscillators shows it (p. 17)." |
| 6 | info | "Translation symmetry", Bell Labs machine and long spring (pp. 11–12); item 3 (ten oscillators) | Transcript p. 11: the Bell Labs machine's elements "oscillate up and down"; with the spring Lee says "instead of oscillating them back and forth, I oscillate them" up and down. The model (notes p. 3) moves only along x. | Describes the demonstrations without saying they are transverse while the model is longitudinal. The description is otherwise accurate (complicated motion, waves, standing waves, a higher-frequency mode). All three are physical demonstrations, not simulations; the page correctly calls none of them a simulation. | Optional: "(they move up and down rather than along the line, but behave the same way)". |
| 7 | info | "Translation symmetry", first sentence, cited "(notes, p. 3; ...)" | The sentence about shifting by a starts at the foot of notes p. 3 ("If") and is completed on p. 4 ("we move the system of springs above by a to the left the physics ... should be unchanged"). | notes p. 3. | "(notes, pp. 3–4; ...)". |
| 8 | info | Formula "Dispersion relation", `at="pp. 4–5"` | The equation ω² = 2ω₀²(1 − cos ka) is at the foot of notes p. 4; its name "dispersion relation" is on p. 5 (cited separately on the page). | pp. 4–5. | `at="p. 4"` (and the same in calcs `dispersion`). Not wrong as is. |
| 9 | info | "Symmetry gives the normal modes", last paragraph | Notes p. 3 (top figures) show the same-symmetry examples: two pendulums, pendulums with springs to walls, masses between walls, and two coupled LC circuits. Notes p. 2 say "All two component system satisfy SM⁻¹k = M⁻¹kS", which is an overstatement (only symmetric ones). | "every system with this symmetry, two pendulums, two masses between walls, more elaborate arrangements" (transcript p. 7). The page's "with this symmetry" is the correct wording, better than the notes'. | Optional: mention the circuit example (notes, p. 3) as the notes' own illustration that the result is not only mechanical. |

Every formula was checked against the notes (rendered pages):
- Reflection matrix, X̃ = SX with S = (0 −1; −1 0): notes p. 1. Correct. S(1, 1) = −(1, 1) and S(1, −1) = +(1, −1), so the β labels in "Reflection eigenvectors" (notes p. 2: β₁ = −1 → (1, 1), β₂ = +1 → (1, −1)) are correct.
- Symmetry condition: SM⁻¹k = M⁻¹kS and [S, M⁻¹k] = 0 on notes p. 1, the commutator definition [A, B] ≡ AB − BA on p. 2; "pp. 1–2" correct. The derivation in the prose (multiply eq. 1 by S, compare) follows notes p. 1 and transcript pp. 3–4.
- Reversing the logic, S(M⁻¹KA) = M⁻¹KSA = β(M⁻¹KA): notes p. 2. Correct.
- Equation of motion of mass j: notes p. 3 (with k). Correct.
- Shift matrix: notes p. 4 (ones on the next-to-diagonal, A' = SA, A'_j = βA_j = A_{j+1}). Correct.
- A_j = β^j with A₀ = 1: notes p. 4. Correct.
- Row j, ω²A_j = ω₀²(−A_{j−1} + 2A_j − A_{j+1}), ω₀² = K/m: notes p. 4. Correct.
- ω² = ω₀²(2 − β − 1/β): notes p. 4. Correct.
- Dispersion relation: notes p. 4 (see finding 8). Correct.
- Mode shape (1/2i)(e^{ijka} − e^{−ijka}) = sin(jka): notes p. 5. Correct.
The notes' "|β| ≠ 1 the amplitude goes to infinity" (p. 4) was checked on the rendered page: the garbled text layer shows "= 1", but the PDF has ≠, so there is no slip to flag.

Prose citations checked against the transcript: "So, I'm back" and previous lectures (p. 1; Lectures 5 and 6 were both given by Boleslaw Wyslouch, so "the last two lectures" is right), symmetry in art and the CMS detector (p. 2, transcribed "CNS"), reflection x₁ → −x₂ (p. 2), S matrix (p. 3), proof (pp. 3–4), commutator and quantum physics (p. 4), modes → S (pp. 4–5), reverse logic (pp. 5–7), "solve one, solve all" (p. 7; quoted words are the notes', p. 2, also cited), hopeless random infinite system and the physicist's view (pp. 7–8), edge of the universe, natural length a, capital K (p. 8), equation of motion and infinite matrix (p. 9), shift (pp. 9–10), A₀ = 1 and β^j (p. 10), infinitely many eigenvalues (p. 11), demonstrations (pp. 11–12), row j (pp. 12–13), β = 2 and |β| < 1 exploding (pp. 13–14), β = e^{ika}, a and k as wave number (pp. 14–15), sinusoidal shape from translation symmetry (pp. 14–15), linear combinations and sin(jka) (pp. 15–16), discrete standing waves (pp. 16–17), maximum frequency, alternating signs, largest restoring force, ten oscillators (p. 17), continuous system next (p. 18). All agree, apart from findings 5 and 7.

## Arithmetic and answer checks
- `npm run calc:test -- -k symmetry-infinite`: 12 passed.
- Worked example, recomputed independently: k = 2π/0.40 = 15.708 m⁻¹ (page 15.7); ka = 0.7854 = π/4 exactly; ω² = 200(1 − 0.70711) = 58.579 (page 58.6); ω = 7.654 rad/s (page 7.65); ω₀ka = 7.854 (page 7.85); ratio 1.0262, i.e. 2.6% too high (page "about 3%", acceptable); 40/5 = 8 masses per wavelength; ka = π gives λ = 2π/k = 2a = 10 cm and ω = 2ω₀ = 20 rad/s. All correct.
- Worked example is fully specified (ω₀, a, λ, and the three things asked), and it is original: the notes have no numerical example (their only example, p. 5, is the sketch for k = π/2a) and the transcript has none.
- Quiz 1: commutes, index 1. Correct.
- Quiz 2: index 1. Correct; it already contains the "eigenvalues differ" condition. (The explanation is right.)
- Quiz 3: |β| ≠ 1 explodes at one end, index 1. Correct; the explanation's directions (|β| > 1 at j → +∞, |β| < 1 at j → −∞) are right.
- Quiz 4: 2ω₀, index 2. Correct.
- Flashcards 1–3 correct (card 1: see finding 1 for the missing distinct-frequency condition in the "normal modes are eigenvectors of S" direction). Card 4: see finding 2.

## Coverage and order
- The page follows the lecture's order: recap, symmetry in general, reflection matrix, commutation condition, commutator, modes → S, S → modes, S² = I and the two eigenvectors, "solve one, solve all", infinite chain, equation of motion and infinite matrix, translation symmetry and shift matrix, β^j, infinitely many modes, demonstrations, row j and ω²(β), physical β, dispersion relation, standing waves, maximum frequency with the ten-oscillator demonstration, continuous limit next.
- One small reordering (info): the minimum-frequency case (item 4) is from the notes (p. 5) only; Lee does not discuss it. Fine, and cited to the notes.
- Omitted (info): the M matrix with m on the diagonal (notes p. 3, transcript p. 9); Lee's EE/mathematics aside and the log-scale "balls" slide (pp. 7–8); β = 1 meaning all amplitudes equal (p. 14); the break questions on "why ika" (p. 15, whose content the page does include); the comparison with a lower-frequency mode on the ten-oscillator demo (p. 17); the notes' figure example k = π/2a (p. 5) and the reference to Georgi p. 113; the circuit figure (finding 9). None is essential.
- Added: the worked example (original) and the long-wave estimate ω ≈ ω₀ka, which is the page's own step and is correctly marked as such in calcs (`origin: page-own`).
- No cosmology callout and no cosmology `leadsTo`: acceptable for this lecture.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes (text and rendered pages), the transcript or the saved OCW lecture page (searched). The notes' figures (hand-drawn pendulums, chain, LC circuits, sine sketch) are not reproduced on the page; the page has no images.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond the attributed short quote "Once you've solved one, you have solved them all" (notes p. 2) and standard terms. Fine.

## Notes
- `leadsTo` 8.03 Lecture 8 matches `_course.json` ("Translation Symmetry") and Lee's closing remark that the next lectures make the system continuous (transcript p. 18).
- Prerequisite `driven-coupled-oscillators-symmetry` exists; the inline link `/courses/8-03/driven-coupled-oscillators-symmetry` uses the course slug `8-03` from `_course.json`.
- `source.url` and both readings match the OCW lecture page and the syllabus entry.
- No em dashes in the page.
- calcs (info): `dispersion` cites `pp. 4–5` (see finding 8); `sine-mode` has an odd `shown` string ('= \sin(jka)" cite'), which presumably matches the formula attribute text; harmless if the harness accepts it.

## Resolution (2026-11-16, by the page author)

1. Added the condition ω₁ ≠ ω₂ (notes, p. 2) in "From modes to S", the summary, flashcard 1 and the first Summary bullet.
2. Added that the cosine combination is equally valid (transcript, p. 16) and that at ka = 0 or π the modes are Aⱼ = 1 or (−1)ʲ; summary, flashcard 4 and Summary bullet now say "sin(jka) or cos(jka)".
3. The bracket now says the notes' text writes k and their figure K.
4. Added a sentence that the same letter names the stiffness matrix.
5. "Ten oscillators on the bench" became "A demonstration with ten oscillators shows it (transcript, p. 17)".
6. Added that the demonstration masses move up and down, while the model moves them along the line (p. 11).
7. Translation-symmetry sentence now cites notes, pp. 3–4.
8. Dispersion relation cited at p. 4 (page and calcs).
9. Not changed: LC circuits are left to a later lecture.
