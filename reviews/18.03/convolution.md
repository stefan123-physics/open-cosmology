---
page: content/year-2/18.03/convolution.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-21-convolution-formula/ (read: local copy lec.html; title "Lecture 21: Convolution Formula"; its only .pdf link is c71624f9f8b4debd3e74c77630f7a827_3ejfkMHr_DE.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/c71624f9f8b4debd3e74c77630f7a827_3ejfkMHr_DE.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L21", 5 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page boundary checked with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 22 = "Using Laplace Transform to Solve ODEs with Discontinuous Inputs"; the Lecture 22 transcript was not read)
  - calcs/18.03/convolution.yaml (read; `npm run calc:test -- -k convolution`: 8 passed)
verdict: pass-with-notes
---

# Review: The convolution formula

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries (each page repeats the last line of the previous one): p. 1 ends in the $t^2 * t$ integration at "$t^4/3 - t^4/4$"; p. 2 runs from "a third minus a quarter is a twelfth" to "the two nontrivial operations" (Jacobian not yet computed); p. 3 runs from the Jacobian to the start of radioactive dumping ("I have less"); p. 4 from the decay law to the start of the chicken farm; p. 5 is the end of the chicken example. Formula locations: "Convolution" p. 1 (definition, spoken on p. 1); "Convolution with 1" p. 2; "Convolution formula" pp. 1–3 (stated p. 1, proved pp. 2–3); "Product as a double integral" p. 2; "Result of the change of variables" p. 3; "Amount in the pile" p. 4 (integral and "convolution of f of t with e to the minus k t", both p. 4). All correct. Prose citations also checked: "one of the more difficult lectures", the star symbol, two motivations p. 1; pain to calculate, sums easy, no product formula p. 1; power-series analogy and "you could figure out this formula yourself" p. 1; commutativity via FG = GF p. 1; $t^2 * t$ pp. 1–2 with the transform check and "not something like t cubed … funny constant" p. 2; marvellous exercise in changing variables p. 2; reading the product rule backwards p. 2; t = u + v, keep u, v = t − u p. 2; Jacobian 1 p. 3; limits u from 0 to t, t from 0 to ∞ p. 3; e^{-st} moved outside p. 3; "for its own sake", acid rain, ice cores p. 3; dumping model pp. 3–4; Riemann sum p. 4; dumping function vs decay function p. 4; undecaying garbage f ∗ 1 p. 4; chickens pp. 4–5. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Why a convolution: "Is there a formula for the transform of a product $f(t)g(t)$? No, and there never will be." | p. 1: Mattuck asks for "some neat formula" for the transform of a product and answers "there is no such formula. And there never will be." | States it as a fact in the page's own voice, without "neat"/"simple". Strictly, there is a formula (a complex convolution of $F$ and $G$ along a vertical line in the complex $s$-plane); what does not exist is a simple algebraic rule like the one for sums. | "No simple one, and Mattuck says there never will be." |
| 2 | info | The definition: "(The transcript first says "$dt$" and is corrected.)" | p. 1: the definition is spoken as "g of (t minus u) dt" with no correction at that point. The correction ("Oh, sorry, the du, the integration's with respect to u", p. 1) comes a few lines later, while writing the $t^2 * t$ integral, where Mattuck also first writes "u minus t" and corrects it to "t minus u". So the note is fair (the corrected "du" applies to the formula on the board), but it is not certain which board item a student pointed out. | Note as written. | Optional: "(The transcript says "$dt$"; Mattuck corrects it to $du$ a moment later, p. 1.)" |
| 3 | info | Convolution for its own sake: "Most people who use convolution never connect it with the Laplace transform" | p. 3: "most people who use it don't use it in connection with the Laplace transform. They use it for its own sake." | "never connect it" is slightly stronger than "don't use it in connection with". | Optional: "most people who use convolution do not use it with the Laplace transform". |
| 4 | info | Ice cores (p. 3) | p. 3: "ice cores in the North Pole … the climate 60 billion years ago". 60 billion years is a slip or transcription error (the universe is about 13.8 billion years old; ice-core records reach back about 800,000 years, and radiocarbon only about 50,000 years). "North Pole" is also loose (cores are drilled in Greenland and Antarctica). | Says only "climate deduced from ice cores", leaving out both the figure and the place. The slip is therefore not repeated. Writing rule 4 asks for a bracketed note only "if the page differs from the lecture for that reason"; since the page simply omits the number, no note is required. | None needed. Optionally "(the transcript's "60 billion years" is a slip; ice-core climate records go back hundreds of thousands of years)", but this adds a non-MIT figure that would need a source or a `kind: fact` calc entry. |
| 5 | info | Chickens: "$f * t$ is the total mass of chickens on a farm where chicks appear at rate $f$" (pp. 4–5) | pp. 4–5: chicks grow linearly at first ("at least for a while … after a while, they taper off"); the convolution gives "the number of kilograms of chickens" at time $t$ (the transcript's "times t" is garbled). | Correct reading of the garble. Leaves out that linear growth is only an early-life approximation, and that $t$ stands for mass gained since hatching (in units where each chick gains 1 kg per unit time). | Optional: "(as long as the chicks still grow linearly)". |

Lecturer slips and transcript garbles checked:
- p. 1: "dt" in the definition, corrected to du (finding 2); "u minus t", corrected to "t minus u" by Mattuck. Page gives the correct forms.
- p. 1: "That would simply life greatly", "I'm just varying the bad news": garbles, not relevant.
- p. 3: "f of u, g of t minus u vu" (for "du"); "ego" (for "ergo"): garbles, page correct.
- p. 3: "integrate from the point … where they leave the region. And, to enter the region …": Mattuck momentarily says "leave" for the lower limit, then gives u = 0 at entry and u = t at exit. Page gives the corrected version.
- p. 3: "60 billion years ago" (finding 4), not repeated.
- p. 4: "let delta t go to zero, in other words, make this delta u go to zero": self-corrected; page uses $\Delta u$. "f of u e to the minus k times t minus u to u" ("du"): garble.
- p. 4: the dumping-rate explanation uses "delta t" and "t1 to t1 plus one"; the page uses $\Delta u$ and $u_i$ throughout, consistent with the later part of the lecture.

## Arithmetic and answer checks
- `npm run calc:test -- -k convolution`: 8 passed. Independently recomputed with SciPy `quad` at t = 1, 2, 3: $\int_0^t u^2(t - u)\,du = t^4/12$ (0.083333, 1.33333, 6.75); $e^t * e^{2t} = e^{2t} - e^t$ (4.670774, 47.20909, 383.3433); $t * e^{-t} = t - 1 + e^{-t}$ (0.367879, 1.135335, 2.049787); $1 * e^{-0.5t} = (1 - e^{-0.5t})/0.5$ (0.786939, 1.264241, 1.553740). All match.
- $t^2 * t$: $\frac{t^4}{3} - \frac{t^4}{4} = \frac{t^4}{12}$. Correct. Transforms: $\frac{2}{s^3}\cdot\frac{1}{s^2} = \frac{2}{s^5} = \frac{1}{12}\cdot\frac{24}{s^5}$. Correct; numerically $\int_0^{60}\frac{t^4}{12}e^{-2t}dt = 0.0625 = 2/2^5$.
- Commutativity argument (FG = GF) relies on uniqueness of the inverse transform, as in the lecture; fine at this level.
- Jacobian $\partial(u, v)/\partial(u, t)$ with $v = t - u$: rows $(1, 0)$ and $(-1, 1)$, determinant 1. Correct. Limits: line $u + v = t$ enters the first quadrant at $u = 0$, leaves at $v = 0$, i.e. $u = t$; $t$ from 0 to ∞. Correct.
- Power series: $c_n = \sum_{i=0}^{n} a_i b_{n-i}$, "all products of an $a$ and a $b$ whose indices add up to $n$". Correct, and correctly flagged as not done in the lecture.
- Plot: $1 * 1 = \int_0^t du = t$; $1 * e^{-0.5t} = (1 - e^{-0.5t})/0.5 \to 2 = 1/k$. Both expressions and the caption are correct. On domain $[0, 10]$ and range $[0, 4]$ the dashed line $t$ leaves the top of the graph at $t = 4$, which is fine (the caption says it grows without limit). Label placement was not checked in a browser (`content:check` does that). The graph is the page's own addition; the lecture has no such picture.
- Worked example (a): $e^{2t}\int_0^t e^{-u}du = e^{2t}(1 - e^{-t}) = e^{2t} - e^t$. Check: $\frac{1}{s - 2} - \frac{1}{s - 1} = \frac{(s - 1) - (s - 2)}{(s - 1)(s - 2)} = \frac{1}{(s - 1)(s - 2)}$ (also numerically at s = 3.5: 0.266667 both). Correct.
- (b): $\int_0^{10}3e^{-0.1(10 - u)}du = 30(1 - e^{-1}) = 18.964 \approx 19.0$ kg of 30 kg. Correct. Minor notation: the left side "$3 * e^{-0.1t} =$" is a function of $t$ while the right side is its value at $t = 10$; "$(3 * e^{-0.1t})(10)$" would be exact (info).
- (c): $e^{-t}\int_0^t ue^u du = e^{-t}\left[(u - 1)e^u\right]_0^t = t - 1 + e^{-t}$. Check: $\frac{1}{s^2} - \frac1s + \frac{1}{s + 1}$ over $s^2(s + 1)$ has numerator $(s + 1) - s(s + 1) + s^2 = 1$. Correct (numerically at s = 2: 0.083333 both).
- Quiz 1: answer 0 ($\int_0^t f(u)g(t - u)\,du$). Correct; distractors are all wrong. Explanation correct.
- Quiz 2: answer 0 ($t^4/12$). Correct; explanation's two routes both correct.
- Quiz 3: answer 0 ($f * e^{-kt}$). Correct; explanation matches p. 4.
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and is correct (subject to finding 1, "there is no formula for the Laplace transform of a product", which has the same overstatement in the summary's first clause).
- Calcs file: the `shown` strings all occur on the page. Minor: `ex-a` and `ex-c` cite `reading1` pp. 1 and 2 although they are page-own examples (`origin: page-own` is set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: two motivations, product of transforms and no product formula (p. 1) → power-series analogy (p. 1) → definition (p. 1) → commutativity (p. 1) → $t^2 * t$ by formula and by transforms (pp. 1–2) → $f * 1$ (p. 2) → proof by change of variables: product as double integral, t = u + v, Jacobian, limits, result (pp. 2–3) → convolution for its own sake: acid rain, ice cores (p. 3) → radioactive dumping (pp. 3–4) → undecaying garbage (p. 4) → chickens (pp. 4–5). Same order as MIT.
- Left out (minor): Mattuck's remark that $f * 1$ cannot yet be done by transform because $\mathcal{L}(f * 1)$ needs the formula still to be proved (p. 2; the page computes it from the definition, which is consistent); the "desert island" framing of the proof (p. 2); the remark that convolution will be used to solve differential equations by Laplace transform (p. 3); the problem-set bank-account interpretation (p. 4); the farmer's reason for wanting the total mass (feed, p. 5); the anecdote that the acid-rain paper came via Mattuck's daughter (p. 3), reasonably omitted.
- Added: the graph and the worked example (original numbers: $e^t * e^{2t}$, dumping 3 kg/year with k = 0.1, inverse of $\frac{1}{s^2(s + 1)}$). Not copied from MIT.
- `prerequisites: [laplace-transform-of-derivatives]`: the page is now committed (478ba6b, Lecture 20), and the inline link `/courses/18-03/laplace-transform-of-derivatives` points to it.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("there never will be", "a marvellous exercise in changing variables", "for its own sake", "radioactive dumping") are brief, cited and standard.
- Worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 22 ("Using the Laplace transform for equations with discontinuous inputs."): matches the Lecture 22 title in `_course.json`. The Lecture 21 transcript does not preview Lecture 22, and the Lecture 22 transcript was not read, so the content beyond the title is unverified (likely correct). One could argue Lecture 23 (impulse inputs, where the weight function and $f * w$ usually appear) is the more direct continuation of convolution, but this is uncertain without reading those transcripts.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` was not run as part of this review. During the review the page and calcs file were briefly absent from the working tree (while Lecture 20 was committed); they were back afterwards, and the page re-read matched the reviewed text.

## Resolution (2026-11-16, by the page author)

1. Warning: "no formula, and there never will be" is now "no simple one, and Mattuck says there never will be", in the text and the summary.
2. Info: the dt note now says the lecture corrects the integration variable a few lines later. "Never connect" became "do not use it in connection with". Example (b) now evaluates at t = 10 explicitly. The chicks grow linearly "early in life".

The ice-core figure is left out as before, so no note is needed. Status set to `reviewed`.
