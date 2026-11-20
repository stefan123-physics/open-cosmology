---
page: content/year-1/18.02/gradient.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-12-gradient/ (read: local copy of the lecture page; its transcript link is `9fb8a8b323474dbd864b0eae7e1b9618_2XraaWefBd8.pdf`, the page's reading2 URL; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/9fb8a8b323474dbd864b0eae7e1b9618_2XraaWefBd8.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec12", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week5/ (read: local copy week5.pdf; PDF p. 1 is a cover; Lecture 12 starts lower down printed p. 1 = PDF p. 2, which ends with "Example 3: w = x² − y², shown on applet"; printed p. 2 = PDF p. 3 has "∇w is a vector whose value depends on the point", the proof, the tangent plane, the directional derivative and fastest increase; Lecture 13 follows on the same page; checked with pdftotext -f 2 -l 3)
  - content/year-1/18.02/_course.json (read: Lecture 13 = Lagrange Multipliers)
  - content/year-5/8.902/linear-perturbations.mdx (read, for the cosmology callout and leadsTo: `lecture: 13`, fluid equations eq. (376) with −∇φ, and its bracket on the notes' sign)
  - calcs/18.02/gradient.yaml (read; `npm run calc:test -- -k 18.02/gradient`: 10 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: The gradient and directional derivatives

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are printed page numbers (Lecture 12 = printed pp. 1–2). `reading1` = Week 5 summary, `reading2` = transcript. "The chain rule with the gradient" cites `reading1` "Lecture 12, p. 1": the vector form dw/dt = ∇w · dr/dt and the definition ∇w = ⟨w_x, w_y, w_z⟩ are on printed p. 1, correct. All other formulas cite `reading2`; every page number is right (list below). No "rights reserved" or "courtesy" notice in the transcript, the Week 5 summary or the lecture page (grep of all three: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Directional derivatives", formulas "Directional derivative" and "Directional derivative and angle", flashcard 3 | Notes p. 2 write the directional derivative as dw/ds with a vertical evaluation bar and subscript û (dw/ds\|_û); the transcript p. 3 says "dw/ds with a subscript in the direction of u". | (dw/ds)_û, in brackets with a subscript, without saying it differs. | The bracket notation is a standard alternative and is chosen so read-aloud can say it, which is fine, but readers who open the MIT notes will see the bar. Add one bracket where the notation is introduced, e.g. "(the lecture notes write it with a vertical bar, dw/ds\|_û; the brackets here mean the same)". |
| 2 | info | "Perpendicular to the level surfaces", examples | Notes p. 1 list a third example, w = x² − y², shown on the Lagrange multipliers applet; the transcript p. 1 shows an applet contour plot with the gradient (function not named). | Two examples (linear, x² + y²); the applet demonstration is not mentioned. | Optional: one sentence noting that for w = x² − y² (hyperbolas) the gradient ⟨2x, −2y⟩ is again perpendicular to every level curve, as the lecture's applet showed. |
| 3 | info | "The direction of fastest increase", list, "(p. 4; notes, p. 2)" | Notes p. 2 cover the largest value and the zero case only; the fastest decrease (θ = 180°, "behind you straight down") is in the transcript p. 4 only. | The three bullets are cited together to p. 4 and notes p. 2. | Accurate as a combined citation; no change needed. |
| 4 | info | "Directional derivatives", geometric meaning | Transcript p. 3 and notes p. 2 demonstrate the slices on an applet (notes: w = x² + y² + 1, rotating slices); transcript p. 4 repeats it with the gradient shown (flat slice perpendicular to ∇w, steepest along ∇w, negative opposite). | Described in words; applets not reproduced. | Fine; the applets are MIT's and the page only describes them. An optional generated plot of (dw/ds)_û against the angle θ (a cosine) would replace the applet's message without reusing it. |
| 5 | info | "Tangent planes to surfaces", bracket "(… but not in general, notes, p. 2.)" | Notes p. 2: "Here we could also solve for z … but in general we can't." | Same content. | The comma before "notes, p. 2" reads as part of the sentence; consider "(notes, p. 2)". |
| 6 | info | Flashcard 2 and "Perpendicular to the level surfaces" | MIT states the theorem without the condition. | Same. | Strictly, the statement needs ∇w ≠ 0 (at a critical point there is no normal direction). Optional bracket, since Lecture 13 (Lagrange) relies on it. Not an MIT discrepancy. |

Every formula and prose page reference was checked against its cited location:
- Opening "(transcript, p. 1)": "our goal will be to understand … what does this vector mean? … what can we do with it?" Correct.
- Chain rule as dot product, definition of the gradient: transcript p. 1; notes p. 1. Formula cited `reading1` "Lecture 12, p. 1". Correct.
- One vector at each point, "what we will call later a vector field", same information as partials or the differential, "so far it's just notation": transcript p. 1. Notes p. 2: "∇w is a vector whose value depends on the point" (the words "vector field" are only in the transcript). Correct.
- "Gradient and level surfaces" ∇w ⊥ {w = c}: transcript p. 1; notes p. 1 (Theorem). Cited `reading2` p. 1. Correct. Two-variable and three-variable versions, "points towards higher values of w" answered later: transcript p. 1. Correct.
- Example 1 (linear function, plane with normal ⟨a₁, a₂, a₃⟩, "the only case you need to check because of linear approximations"): transcript p. 1; notes p. 1. Correct. (The page's a₁, a₂, a₃ follow the transcript; the notes write a, b, c with level w = d.)
- Example 2 (x² + y², circles, ⟨2x, 2y⟩ = twice the position vector, radially out): transcript p. 1; notes p. 1. Correct.
- Proof: curve on the level, velocity tangent to the surface (starts at the end of p. 1, continues on p. 2, so "pp. 1–2" is right); dw/dt = ∇w · v = 0 on p. 2; notes p. 2. Formula "Moving along a level" cited `reading2` p. 2. Correct. "Any tangent vector is the velocity of some curve on it", hence ⊥ tangent plane: transcript p. 2; notes p. 2 ("true for every v in the tangent plane"). Correct.
- Tangent plane to x² + y² − z² = 4 at (2, 1, 1): ∇w = ⟨2x, 2y, −2z⟩ = ⟨4, 2, −2⟩, 4x + 2y − 2z = 8 + 2 − 2 = 8: transcript p. 2; notes p. 2. Formula cited `reading2` p. 2. Correct.
- Solving for z works here but not in general: notes p. 2 (the transcript p. 2 only says "doesn't look like it's the best way"). Cited to the notes. Correct.
- "Another way" via dw = 4 dx + 2 dy − 2 dz, Δw ≈ 4Δx + 2Δy − 2Δz, setting it to zero, 4(x − 2) + 2(y − 1) − 2(z − 1) = 0: transcript pp. 2–3 (dw and Δw on p. 2, the substitution Δx = x − 2 and the final equation on p. 3); notes p. 2. Correct.
- Directional derivative set-up: û = ⟨a, b⟩, x(s) = x₀ + as, y(s) = y₀ + bs, unit speed, s = distance: transcript p. 3; notes p. 2. Correct. Slice by a vertical plane in the direction û: transcript p. 3; notes p. 2. Correct.
- "Directional derivative" (dw/ds)_û = ∇w · dr/ds = ∇w · û: transcript p. 3; notes p. 2. Cited `reading2` p. 3. Correct. "Component of the gradient in the direction û; for û = î it is w_x": transcript p. 3. Correct.
- "Directional derivative and angle" = |∇w| cos θ: the sentence starts at the very end of p. 3 ("That's the same as the length of") and the formula is completed on p. 4. Cited `reading2` p. 4; the prose says "pp. 3–4". Correct.
- Largest when cos θ = 1, direction of fastest increase, rate |∇w|; smallest at 180° (mountain image); zero at 90°, tangent to the level: transcript p. 4; notes p. 2 (largest and zero only, see finding 3). Correct.
- Contour-plot remark (perpendicular to the level, towards higher values): transcript p. 4. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k 18.02/gradient`: 10 passed. Recomputed by hand as well:
- Lecture example: (2, 1, 1) on the hyperboloid: 4 + 1 − 1 = 4. ∇w = ⟨4, 2, −2⟩. 4·2 + 2·1 − 2·1 = 8. Expanding 4(x − 2) + 2(y − 1) − 2(z − 1) = 0 gives 4x + 2y − 2z = 8 − 2 + 2 = 8. Correct, same plane.
- Worked example (a): w = x² + 2y², ∇w = ⟨2x, 4y⟩ = ⟨2, 4⟩ at (1, 1); level w = 1 + 2 = 3 (an ellipse); tangent line 2x + 4y = 6, i.e. x + 2y = 3. Correct.
- (b): 9/25 + 16/25 = 1; 2·3/5 + 4·4/5 = 6/5 + 16/5 = 22/5 = 4.4. Correct.
- (c): |∇w| = √20 = 4.472 ≈ 4.47; cos θ = 4.4/4.472 = 0.984 ≈ 0.98. ⟨2, 4⟩ · ⟨2, −1⟩ = 0; |⟨2, −1⟩| = √5; ⟨2, −1⟩ is a direction vector of x + 2y = 3 (from (1, 1) to (3, 0)). Correct.
- Quiz 1: ∇(x²y + z) = ⟨2xy, x², 1⟩ = ⟨4, 1, 1⟩ at (1, 2, 0). Answer 0 correct.
- Quiz 2: √(9 + 16) = 5. Answer 2 correct.
- Quiz 3: perpendicular to ∇w, along the level. Answer 2 correct; explanation right.
- Quiz 4: (1, 2, 2) is on the sphere (1 + 4 + 4 = 9); ∇ = ⟨2, 4, 4⟩, and ⟨1, 2, 2⟩ is a multiple. "Both", answer 2, correct.
- Flashcards: all three correct (see finding 6 for the ∇w ≠ 0 nuance).
- Callout: no numbers.

## Coverage and order
- The page follows the lecture: chain rule rewritten → gradient definition and meaning → theorem (⊥ levels, points to higher values) → examples → proof → tangent plane to the hyperboloid → second method via differentials → directional derivative (set-up, notation, geometric slice, chain-rule formula, î check) → |∇w| cos θ → fastest increase, decrease, zero → contour-plot remark. Same order as transcript and notes.
- Left out: the notes' Example 3 (w = x² − y² on an applet, finding 2) and the applet demonstrations (finding 4). Nothing else of substance.
- Added: the worked example (original function, point and direction; the lecture has no comparable numerical directional-derivative example), the cosmology callout.
- leadsTo: 18.02 Lecture 13 "Lagrange Multipliers" matches `_course.json` and notes p. 2 ("the normal vectors ∇f and ∇g are parallel"); the reason is right. 8.902 Lecture 13 is the lecture of `linear-perturbations` (frontmatter `lecture: 13`), whose eq. (376) writes the fluid equations with ∇·, (v·∇) and −∇φ; the reason is fair.

## Licensing
- No "rights reserved" or "courtesy" notice in any source read. The applets (contour plot with gradient, hyperboloid with tangent plane, rotating slices) are described in words only; the page has no images or plots.
- Text is rewritten; no copied sentences found. Shared short phrases ("points radially out", "direction of fastest increase", "slice of the graph by a vertical plane", "facing … the mountain … behind you") are standard terminology or brief paraphrases, acceptable.
- The worked example is original; the hyperboloid example is credited to the lecture.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: Newtonian acceleration −∇φ, perpendicular to equipotentials and in the direction of steepest decrease of φ, is correct and follows from this page's fastest-decrease result. "Gravity enters exactly this way" is fair: `linear-perturbations` writes −∇φ in the Euler equation, with a bracket noting that the 8.902 notes print +∇φ (their sign slip); the callout uses the physically correct sign, consistent with that page. The link `/courses/8-902/linear-perturbations` resolves (course slug `8-902`).
- The internal link `/courses/18-02/differentials-and-chain-rule` points to an existing page.
- No em dashes in the page (count 0).
- The frontmatter summary matches the page body.
- reading1 `location: "Lecture 12, pp. 1–2"` is right (printed pp. 1–2).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** where the notation is introduced, a bracket now says that the lecture writes dw/ds with a vertical bar and subscript û, and that it means the same. (The page uses (dw/ds)_û because read-aloud cannot say the bar.)
- Info 2: Example 3, w = x² − y² on the applet, is now a bullet.
- Info 5: the notes citation in the bracket is now set off with a semicolon.
- Info 3, 4 and 6 are left as they are.
