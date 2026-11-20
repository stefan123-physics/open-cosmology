---
page: content/year-1/18.01/fundamental-theorem-1.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-19-first-fundamental-theorem/ (read: local copy lec.html; its PDF link is 1RLctDS2hUQ.pdf, page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec19/ (read: local copy n.html, links lec19.pdf, marked Creative Commons License; notes.pdf/notes.txt, "Lecture 19: First Fundamental Theorem of Calculus", OCW cover + printed pp. 1-4 = PDF pp. 2-5; text layer only, figures not inspected as images)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/1RLctDS2hUQ.pdf (read: local copy transcript.pdf, page-split text tp.txt, 11 PDF pages, "ocw-18-01-f07-lec19")
  - content/year-1/18.01/_course.json (read: Lecture 20 = Second Fundamental Theorem)
  - content/year-1/18.01/mean-value-theorem.mdx (read: Lecture 14, proves eˣ > 1 + x, transcript p. 11)
  - content/year-4/8.286/age-of-the-universe.mdx, horizon-distance.mdx (Lecture 8), open-closed-flat.mdx (Lecture 7), age-with-vacuum-energy.mdx (Lecture 19) (read, for the callout and leadsTo)
  - calcs/18.01/fundamental-theorem-1.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k fundamental`: 17 passed)
  - data/symbols.json (read: all 20 meanings scoped to `fundamental-theorem-1`)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: The first fundamental theorem of calculus

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-4, as on the other 18.01 pages. Every page citation was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Examples", formula "One hump of sin x", `at="pp. 2–3"` (and calcs `sine-hump`, `sine-hump-numeric`) | The whole sine example (set-up, −cos π − (−cos 0), "altogether we have 2", "this is area 2") is on transcript p. 2. Page 3 begins with the x¹⁰⁰ antiderivative. | Cites pp. 2–3, also in the prose "(pp. 2–3; notes, p. 1)". | Cite `at="p. 2"` in the formula, the prose and both calcs entries. |
| 2 | warning | "The theorem": notation sentence and formula "Notation"; also flashcard 1 and Summary | Notes p. 1 write the difference with a **vertical bar**, F(x)\|ₐᵇ = F(x)\|ₓ₌ₐˣ⁼ᵇ. The transcript (p. 1) only says "F(x) with an a down here and a b up there" and does not name the bracket shape. | "The difference is written with square brackets (often also a vertical bar)", and the Notation formula uses square brackets, cited to the transcript. Read as is, the square bracket looks like MIT's notation. | Say that the page differs on purpose, e.g. "(MIT writes a vertical bar, F(x)\|ₐᵇ; this page uses the other common form, square brackets, which read-aloud can say)". Optionally add the notes as a second source for the formula (notes, p. 1). Square brackets themselves are standard and correct. |
| 3 | warning | `leadsTo` 8.286 Lecture 8: "The age of the universe: a definite integral of da/ȧ, evaluated with an antiderivative." | In the site's own Lecture 8 page (age-of-the-universe.mdx) the age 2/(3H₀) comes from a ∝ t^(2/3) and H = ȧ/a = 2/(3t), not from an integral of da/ȧ. The a^(1/2) da = const dt separation is Lecture 7 (open-closed-flat.mdx). The age as a definite integral, t₀ = (1/H₀)∫₀¹ x dx/√F(x), is Lecture 19 (age-with-vacuum-energy.mdx). Lecture 8 does contain a definite integral evaluated with an antiderivative: the horizon distance a(t₀)∫₀^t₀ c dt/a(t) = 3ct₀ (horizon-distance.mdx). | Attributes the da/ȧ integral to Lecture 8. | Reword, e.g. "The age of a flat matter universe, 2/(3H₀), and the horizon distance, a definite integral ∫ c dt/a evaluated with an antiderivative." Optionally add a leadsTo for 8.286 Lecture 19 (the age of any universe as ∫ da/ȧ). The callout text itself attributes nothing to Guth and is correct (see the arithmetic checks below). |
| 4 | info | "Examples": x¹⁰⁰ example cited "(p. 3)" (calcs `x100` too) | Transcript: the example begins at the end of p. 2 ("integral, say, from 0 to 1, of x^100") and the antiderivative and 1/101 are on p. 3. | p. 3 | "pp. 2–3" is more exact. No other change is needed. The page attributes x¹⁰⁰ to the transcript and x⁵ = 1/6 to the notes (notes p. 1, Example 3). Both are verified and attributed correctly. |
| 5 | info | "Changing variables": transcript vs notes example | Transcript pp. 9–10: ∫₁² (x³+2)⁵ x² dx, u = x³+2, ⅓du = x²dx, limits 3 and 10, (1/18)u⁶\|₃¹⁰ = (10⁶ − 3⁶)/18. Notes p. 4 (Example 7): fourth power, u⁵/15 \|₃¹⁰ = (10⁵ − 3⁵)/15. | States both and attributes each correctly. | None. Verified, and both values are checked in the calcs file. |
| 6 | info | "Properties of integrals": "The lecture lists six rules (transcript, pp. 5–7; notes, pp. 3–4)" | The notes have only the additive property (p. 3), the reversed-limits definition (p. 3) and estimation (p. 4). Rules 1, 2 and 4 are only in the transcript (pp. 5–6). | Cites the notes for the full list. | Optional: "(transcript, pp. 5–7; the notes, pp. 3–4, give rules 3, 5 and 6)". |
| 7 | info | "Properties of integrals", rule 5 | Transcript p. 6 writes the definition as ∫ₐᵇ f = −∫ᵦᵃ f. Notes p. 3 write ∫ᵦᵃ f = −∫ₐᵇ f. | Uses the notes' form, cited to the notes, p. 3. | None. The two forms are equivalent and the citation is right. |
| 8 | info | Estimation example | Transcript p. 8 adds two remarks: eᵇ ≥ 1 + b holds for b < 0 too, although this argument does not prove it; eᵇ ≥ 1 + b + b²/2 is false for b < 0 (e.g. b = −1: 0.368 < 0.5). Transcript p. 7 also says estimation still works when f and g are negative, as long as a < b. | Restricts to b > 0, which is correct, but leaves out both remarks. | Optional: one sentence, "(for b < 0 the second inequality is in fact false, which is why b > 0 matters, transcript p. 8)". |
| 9 | info | Lecturer slips | Transcript p. 3 calls x′(t) "your speed" and calls the right-hand side "the distance traveled ... what you would read on your odometer". He corrects both himself on p. 4 ("the velocity, technically rather than the speed") and p. 5 (net vs total distance). On p. 4 he says "−cos 2pi − (cos 0)", which leaves out a minus, but the result he states, −1 − (−1) = 0, is right. Self-corrections on pp. 1, 8 and 9 ("x^3 over - sorry, x^2"; "du-- dx, sorry"; "x^2 plus-- sorry ... x^3"). | Uses "velocity" throughout, writes −cos 2π − (−cos 0) correctly, and follows the notes' wording "difference between two odometer readings" (notes p. 2) before explaining that an odometer measures total distance. | No bracket is needed: the lecturer corrects each slip himself in the lecture, and the page does not repeat any of them. |
| 10 | info | Warning example, "The step dx = du/(2√u) is wrong" | Transcript p. 10: "you would write dx = 1/(2x) du. And then you might write that as this", and he marks "this step" in red. The board formula itself is not in the transcript. The notes have no warning example. | dx = du/(2√u). | Probably correct (x = √u is the only reading that makes the step wrong for negative x, and the transcript goes on to say "really, x = plus or minus square root of u"). Uncertain only because the board was not seen. |
| 11 | info | Cosmology callout: "today (a = 1)" | Guth measures a(t) in m/notch (AGENTS.md rule 9). He does not normalise a = 1 today. | Uses a(t₀) = 1 so that ȧ = H₀ a^(−1/2). | Optional bracket: "(with a scaled to 1 today; the age does not depend on that choice)". For general a₀, ȧ = H₀ a₀^(3/2) a^(−1/2) and ∫₀^a₀ da/ȧ = 2/(3H₀) is unchanged. |

## Arithmetic and answer checks
- FTC 1 (notes p. 1, with "f continuous"; transcript p. 1): matches. The notation formula matches transcript p. 1 and notes p. 1, apart from the bracket shape (finding 2).
- Parabola: [x³/3]₀ᵇ = b³/3 (transcript p. 2 sets a = 0; notes p. 1 do general a). Correct.
- One hump: −cos π − (−cos 0) = 1 + 1 = 2. Correct.
- x¹⁰⁰ from 0 to 1 = 1/101 ≈ 0.00990. x⁵ from 0 to 1 = 1/6 (notes). Correct.
- Three quick integrals: ⅔(4^(3/2) − 1) = ⅔ · 7 = 14/3 ≈ 4.67. ∫₀^(π/2) cos = 1. ∫₁ᵉ dx/x = 1. All correct.
- Two humps: −cos 2π − (−cos 0) = −1 + 1 = 0. Correct.
- Cart, v = 3 − t on [0, 5]: net [3t − t²/2]₀⁵ = 15 − 12.5 = 2.5 m. Forward ∫₀³ = 9 − 4.5 = 4.5 m. Back ∫₃⁵ (t − 3) dt = 2 m. Total 6.5 m. Correct.
- Estimation: eᵇ − 1 ≥ b, then eᵇ − 1 ≥ b + b²/2. With b = 1: e ≥ 2 and e ≥ 5/2 (notes p. 4, Examples 5–6). Correct.
- "One more step towards e": ∫₀¹(1 + x + x²/2) dx = 1 + ½ + ⅙ = 5/3, so e ≥ 8/3 ≈ 2.667 < 2.718. Correct. The hypothesis eˣ ≥ 1 + x + x²/2 for x ≥ 0 is the one derived on the page.
- Substitution: (1/3)(u⁶/6) = u⁶/18 and limits 1³ + 2 = 3, 2³ + 2 = 10 (transcript). (1/3)(u⁵/5) = u⁵/15 (notes). Both correct.
- Warning: ∫₋₁¹ x² dx = 2/3, and u = x² gives limits 1 and 1. Correct.
- Own substitution: ∫₀¹ x e^(x²) dx = ½(e − 1) = 0.8591. Correct. u′ = 2x ≥ 0 on [0, 1], so the sign condition holds.
- Callout: for flat matter, H = H₀ a^(−3/2), so ȧ = H₀ a^(−1/2). Then (1/H₀)∫₀¹ a^(1/2) da = (1/H₀)(2/3) = 2/(3H₀). Correct.
- Quiz 1: answer index 2 = "2". Correct. Quiz 2: index 0 = "0". Correct. Quiz 3: index 1 = "2.5 m and 6.5 m". Correct. Quiz 4: index 0 = ½∫₀¹ eᵘ du, value ½(e − 1) ≈ 0.859. Correct. Every explanation is right, and no other choice is also correct.
- Flashcards: all three are correct. The properties card states the a < b condition for estimation, as MIT does.
- Calcs file: all 17 entries pass. The `source` fields on page-own entries are loose (e.g. `age-flat` cites reading2 p. 3, which has no cosmology). This is harmless, but `sine-hump` and `sine-hump-numeric` should follow finding 1.

## Coverage and order
- Transcript order: FTC 1 and notation (p. 1); x², sine hump, x¹⁰⁰ (pp. 2–3); speedometer/odometer and Riemann sum (pp. 3–4); round trip, extension to negative f, two humps, "I lied" (pp. 4–5); student question on |v| and total distance (p. 5); properties 1–5 and rule 3 for any order (pp. 5–7); estimation and the eˣ examples (pp. 7–8); change of variables, example and warning (pp. 8–11). The page follows this order exactly, and all segments are covered.
- Added by the page: three original worked examples (quick integrals, cart, e ≥ 8/3), the own substitution example, the sin x plot, and the cosmology callout.
- Left out (minor): the remarks on b < 0 and on negative f in estimation (finding 8); the remark that the dx/du notation matters in multivariable calculus (p. 9); the history of the integral sign is kept only as "a stretched S for sum" (the French "somme" remark is left out). None of these needs adding.

## Licensing
- The OCW lecture page and notes page are marked Creative Commons License. `grep -il "rights reserved\|courtesy"` over notes.txt, tp.txt and the HTML pages finds nothing. No figures are reused: the plot is generated from sin x.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases: "probably the most important thing" (in quotes, attributed), "if I always go more slowly than you, you get further" (a paraphrase of p. 7), and standard terminology. The prose is rewritten.
- Worked examples are original. "One more step towards e" extends MIT's method (Examples 5–6) by one step, with its own result (8/3), which MIT does not compute. This is acceptable.

## Notes
- Symbols: the 20 meanings scoped to `fundamental-theorem-1` (a, b, c, d, e, f, g, F, F′, t, tᵢ, u, u′, u₁, u₂, v, x, x′, x₁, x₂) all fit the page. Units are sensible: t and tᵢ in s, v and x′ in m/s, x in "m (as a position)". `a` correctly mentions both the lower limit and the scale factor in the callout. `c` covers both the constant (rule 2) and the third point (rule 3). `content:check` reports no symbol warnings for the page, so H₀, ȧ, t₀, i and Δ are covered by existing general meanings.
- Links: `/courses/18-01/definite-integrals` (Lecture 18), `/courses/18-01/antiderivatives`, `/courses/18-01/mean-value-theorem` (Lecture 14, where eˣ > 1 + x is proved, transcript p. 11). The reference "inequalities of Lecture 14" is correct. The transcript only says "the same as one that I already gave you", and the notes say "we showed earlier".
- leadsTo 18.01 Lecture 20 ("Second Fundamental Theorem" in `_course.json`): fair. The transcript p. 3 promises the proof "a little bit later".
- The page says "the lecturer" throughout, which is safe, since the transcript does not name him.
- Status `draft` is correct until the findings are resolved.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the sine example is now cited to transcript p. 2 (page, formula and calcs).
- **Warning 2:** the page now says MIT writes the difference with a vertical bar (notes p. 1) and that this site uses square brackets so read-aloud can say them.
- **Warning 3:** the 8.286 Lecture 8 leadsTo now names the horizon distance; a new leadsTo for 8.286 Lecture 19 names the age as an integral of da/ȧ.
- Info: x¹⁰⁰ is now cited to pp. 2–3. The other info items are left as they are.
