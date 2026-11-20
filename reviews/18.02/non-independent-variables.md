---
page: content/year-1/18.02/non-independent-variables.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-14-non-independent-variables/ (read: local copy of the lecture page; it links the transcript a5f079f1fe7b61cfcedae08bfb338057_23xbkrpQuAo.pdf and lec_week6; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/a5f079f1fe7b61cfcedae08bfb338057_23xbkrpQuAo.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec14", 4 pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week6/ (read: local copy week6.pdf, 3 PDF pages; PDF p. 1 is a cover; Lecture 14 is printed p. 1 = PDF p. 2 (from the heading through method 1 up to "db = b tan θ dθ") and printed p. 2 = PDF p. 3 (from "and then dA = …" through method 2 and the closing remark, followed by Lecture 15); checked with pdftotext -f 2 -l 3)
  - content/year-1/18.02/_course.json (read: Lecture 15 = "Partial Differential Equations", Lecture 16 = "Double Integrals")
  - content/year-4/8.286/matter-radiation-equality.mdx (read, for the callout and leadsTo: `lecture: 15`; dU = −p dV applied to a comoving box, giving ρ̇ = −3(ȧ/a)(ρ + p/c²))
  - The 8.286 Lecture 15 transcript itself (not read; see finding 4)
  - calcs/18.02/non-independent-variables.yaml (read; `npm run calc:test -- -k non-independent`: 10 passed)
verdict: pass-with-notes
---

# Review: Non-independent variables

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are printed page numbers (Lecture 14 = printed pp. 1–2). `reading1` = Week 6 summary, `reading2` = transcript. The two `reading1` formulas are on the cited pages: "Saying what is held fixed" ((∂f/∂u)_v = (∂f/∂x)_v ≠ (∂f/∂x)_y, "Lecture 14, p. 1") is on printed p. 1; "By the chain rule" ("Lecture 14, p. 2") is on printed p. 2. All `reading2` formulas are on the cited transcript pages (list below). No "rights reserved" or "courtesy" notice in the transcript, the Week 6 summary or the lecture page (grep: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Three rates for one triangle", bracket on the misstated constraint | Transcript p. 2: "saying it's a right triangle is the same thing as saying that b equals sine theta". On p. 3 the constraint is garbled once more ("a equals be plus sine theta") and then given correctly ("the constraint is a=b cosine theta", in method 0); notes p. 1 have a = b cos θ throughout. | "(The transcript first misstates it as b = sin θ, p. 2, before using a = b cos θ.)" | Accurate. Optional precision: "…before using a = b cos θ on p. 3". The p. 3 garble may be a transcription artefact, so leaving it out is fine. |
| 2 | info | Formula "By the chain rule" (`reading1`, Lecture 14, p. 2) | Notes p. 2 write the last term of the first expression as A_b(∂b/∂θ)_**b**, then correctly A_θ + A_b(∂b/∂θ)_a. | A_b(∂b/∂θ)_a in both places. | The page is right; the notes have a typo. Optional bracket per writing rule 4, e.g. "(the notes' first line has a stray subscript b)"; not needed. |
| 3 | info | Transcript p. 4 vs page "Method 2" | The transcript stops before finishing the chain-rule computation ("tomorrow we are going to review…"); the notes say "[Ran out of time here]" and complete it on p. 2 ((∂b/∂θ)_a = b tan θ by implicit differentiation, giving ½ab sec θ). | "The rate (∂b/∂θ)_a = b tan θ comes from the constraint, as before, and the result is the same … (p. 4; notes, p. 2)". | Fine: the completion is in the notes, which are cited. |
| 4 | warning | Callout "What is held fixed in an expanding box" and `leadsTo` 8.286 Lecture 15 `why` | 8.286 page `matter-radiation-equality` (Lecture 15) derives dU = −p dV from a piston and applies it to a comoving box. It says nothing about heat or about which variable is held fixed. | Callout: "Guth applies the first law, dU = −p dV, to a box of gas expanding with the universe (no heat flows in)". `why`: "…is a statement about what changes when something else is held fixed." Neither says *what* is held fixed, so the link to this lecture's notation stays vague. Whether Guth says "no heat flows in" could not be checked (the 8.286 transcript was not read; the 8.286 page does not say it). | The physics is right: dU = −p dV is the adiabatic case, (∂U/∂V)_S = −p, entropy held fixed. Say so: e.g. "dU = −p dV holds when no heat flows in, i.e. (∂U/∂V)_S = −p with the entropy held fixed", and attribute only the use of dU = −p dV to Guth unless his transcript mentions heat. |
| 5 | info | `leadsTo` 18.02 Lecture 16, `why` | `_course.json` (and OCW) title Lecture 15 "Partial Differential Equations"; the Week 6 notes show it as "Review topics" with a short note on PDEs (heat equation) and a re-explanation of constrained partials, (∂f/∂z)_y with g = c. Transcript p. 4: "tomorrow we are going to review for the test". | "Double integrals (Lecture 15 is the exam review)." | Correct in substance. Optional: "(Lecture 15, titled Partial Differential Equations on OCW, is the exam review)" so readers comparing with the syllabus are not puzzled. Note that the Lecture 15 re-explanation of constrained partials (a general f(x, y, z) with g = c) has no page on the site; the flashcards here cover the method. |
| 6 | info | "The notation can be dangerous": "a notation Auroux blames on physicists and chemists (p. 2; notes, p. 1)" | Transcript p. 2 only ("I think I can safely blame it on physicists or chemists"); the notes do not mention it. | Cites both. | Harmless; the notes citation covers the rest of the sentence. |

Every formula and prose page reference was checked against its cited location:
- Opening and PV = nRT: transcript p. 1; notes p. 1. Correct. g(x, y, z) = c, z as a function of x and y, without solving: p. 1; notes p. 1. Correct.
- Example x² + yz + z³ = 8 at (2, 3, 1), cubic not solved: p. 1; notes p. 1. Formula "Differential of the constraint" `reading2` p. 1: 2x dx + z dy + (y + 3z²) dz = 0 and 4 dx + dy + 6 dz = 0 both on p. 1. Correct.
- Formula "Two partial derivatives" `reading2` p. 1: dz = −(1/6)(4 dx + dy), −4/6 = −2/3, −1/6 on p. 1. Correct. Coefficients are the partials; set dy = 0 / dx = 0: p. 1. Correct.
- Formula "The general formula" `reading2` p. 1: −g_x/g_z on p. 1 (notes p. 1 too). Minus sign "surprising … the first time": p. 1. Correct.
- x + y, x = u, y = u + v, f = 2u + v: transcript p. 2; notes p. 1. Keeping v fixed = keeping y − x fixed: p. 2; notes p. 1. Subscript conflicts with f_x: p. 2. Default meaning of ∂/∂x and "(∂z/∂x)_y" for the first example: notes p. 1. Correct.
- Triangle A = ½ab sin θ, right triangle with hypotenuse b: transcript p. 2; notes p. 1. Rate (a, b fixed) = ½ab cos θ: p. 2. Definitions of (·)_a and (·)_b: pp. 2–3; notes p. 1. Third side fixed, two independent variables: p. 3. Correct.
- Formula "By substitution" `reading2` p. 3: b = a sec θ, A = ½a² tan θ, ½a² sec²θ all on p. 3 (also notes p. 1). Correct. "Two systematic methods": p. 3. Correct.
- Method 1: da = 0, da = cos θ db − b sin θ dθ, db = b tan θ dθ: p. 3; notes p. 1. dA with three terms: p. 4; notes p. 1. Formula "By differentials" `reading2` p. 4: substitution, collection, sin²/cos + cos = sec on p. 4 (notes p. 2). Correct. Summary of the method: p. 4. Correct.
- Formula "By chain rule" `reading1` Lecture 14, p. 2: on printed p. 2 (finding 2). Rate of θ with itself is 1, a does not change: transcript p. 4. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k non-independent`: 10 passed. Recomputed by hand as well:
- Lecture example: 4 + 3·1 + 1 = 8. g_x = 2x = 4, g_y = z = 1, g_z = y + 3z² = 6. ∂z/∂x = −4/6 = −2/3, ∂z/∂y = −1/6. Correct.
- Triangle: sin θ · tan θ + cos θ = (sin²θ + cos²θ)/cos θ = sec θ, so (∂A/∂θ)_a = ½ab sec θ; with b = a sec θ this is ½a² sec²θ, the derivative of ½a² tan θ. Correct.
- Worked example (a): 1 + 4 + 4 = 9, point on the sphere. 2 dx + 4 dy + 4 dz = 0, dy = 0 gives dz = −½ dx. Check −x/z = −1/2. (∂f/∂x)_y for f = x + y + z: 1 + (−½) = ½. Correct.
- Worked example (b): b = 3/cos(π/4) = 3√2 ≈ 4.243. ½·3·3√2·(√2/2) = 4.5. ½·9·sec²(π/4) = ½·9·2 = 9 (also ½ab sec θ = ½·3·3√2·√2 = 9). With b fixed: A = ¼b² sin 2θ, derivative ½b² cos 2θ = 0 at π/4, and sin 2θ is largest there, so the 45° triangle has the largest area for a given hypotenuse. Correct.
- Worked example is original (own sphere and own numbers; the third rate, (∂A/∂θ)_b, is defined but not computed in MIT).
- Quiz 1: answer 0 (−1/2). Correct; explanation right.
- Quiz 2: answer 1 (−g_x/g_z). Correct.
- Quiz 3: answer 1 (different variables held fixed). Correct; explanation matches transcript p. 2 / notes p. 1.
- Flashcards: all three correct.
- Summary (frontmatter and `## Summary`): consistent with the body.

## Coverage and order
- The page follows the lecture: motivation (PV = nRT) → g = c, z as a function of x, y → example x² + yz + z³ = 8 → general −g_x/g_z → notation warning (x = u) → subscript notation → triangle, three rates → method 0 (substitution) → method 1 (differentials) → method 2 (chain rule). Same order as transcript and notes.
- Left out: the transcript's remark (p. 2) that with x, y, z related one can hold y fixed and let z vary, or hold z fixed and let y vary (partly covered by the flashcard on (∂f/∂x)_y); the student questions on p. 3 (θ is varied, not held); Auroux's remark that the notes may number the methods differently (p. 3); handouts and class logistics. Nothing of substance.
- Added: the worked example and the cosmology callout.
- leadsTo: 18.02 Lecture 16 "Double Integrals" matches `_course.json`; skipping Lecture 15 is right (finding 5). 8.286 Lecture 15 is the lecture of `matter-radiation-equality`, which does use dU = −p dV for a comoving box; fair link, but see finding 4 for the wording.
- The in-text link to `lagrange-multipliers` (Lecture 13) is right.

## Licensing
- No "© … All rights reserved" or "Courtesy of" notice in the transcript, the Week 6 summary or the lecture page; nothing needs a `courtesy:` field.
- No copied paragraphs. The prose is a rewrite; the closest wording is "the two methods compute the same quantities, written differently" against the notes' "The two systematic methods essentially involve calculating the same quantities, even though things are written differently" (one clause, cited; acceptable). The formulas are the lecture's mathematics, cited.
- No OpenStax or LibreTexts material. No em dashes in the page.

## Notes
- Calcs file: entries match the page's numbers; `shown` strings for the two identities (`'= \tfrac12 ab\sec\theta" cite'`) include a fragment of the MDX attribute, which works but is fragile; optional tidy-up. The page-own entries' `source` points to MIT pages, which is harmless.
- The bracket about the misstated constraint is accurate (finding 1).
- The status can move to `reviewed` once finding 4 is addressed (or explicitly accepted) and a Resolution section is added.

## Resolution (2026-11-16, by the page author)

- **Warning 4:** the callout and the 8.286 leadsTo now say what is held fixed: dU = −p dV is the rate of change of energy with volume at fixed entropy, which holds when no heat flows in or out. This is stated as the page's own explanation, not as Guth's wording.
- Info 1: the bracket now says the transcript uses a = b cos θ on p. 3.
- Info 6: the "physicists or chemists" sentence now cites only the transcript.
- Info 2, 3 and 5 are left as they are.
