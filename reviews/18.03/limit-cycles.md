---
page: content/year-2/18.03/limit-cycles.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-32-limit-cycles/ (read: local copy lec.html; title "Lecture 32: Limit Cycles"; its only .pdf link is a496d4e2830f7deff0e769b8ecb8c040_z-meBrqcy_I.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/a496d4e2830f7deff0e769b8ecb8c040_z-meBrqcy_I.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L32", 15 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page extracted and read separately)
  - content/year-2/18.03/_course.json (read: Lecture 33 = "Relation Between Non-linear Systems and First-order ODEs"; the Lecture 33 transcript was not read)
  - calcs/18.03/limit-cycles.yaml (read; `npm run calc:test -- -k limit-cycles`: 6 passed)
verdict: pass-with-notes
---

# Review: Limit cycles

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 nonlinear autonomous system, "most of today will be geometric", velocity field, trajectories with the right velocity, critical points = constant solutions = zeros of the field; p. 2 trajectories go to infinity or end at a critical point, third behaviour: closed trajectory, periodic behaviour, x′ = y, y′ = −x, λ² + 1 = 0, ±i, solutions (cos t, −sin t), (sin t, cos t); p. 3 clockwise circles, family in c₁, c₂, "these are no good", limit cycle = closed trajectory, isolated and stable; p. 4 drawing, nearby curves spiral in, can never join it (two solutions through a point), pixels, inside and outside, stability, unstable closed trajectory not called a limit cycle, "cycle"/"limit" naming; p. 5 semi-stable, simple curve, breathing; p. 6 breathing continued (parameters, question for biologists), existence problem, Poincaré–Bendixson 60 or 70 years, computer search guided by the physical problem; p. 7 nonexistence, Bendixson (Swedish, around 1900), statement with continuity, example x′ = x³ + y³, y′ = 3x + y³ + 2y; p. 8 divergence 3x² + 3y² + 2, no computer search could prove it, indirect proof set-up, C, R, D; p. 9 positive sense, flux integral, "it is zero"; p. 10 why zero, Green's theorem flux form, divergence one-signed; p. 11 continuity argument, contradiction, second example begun (equations not read out); p. 12 divergence 2x − 2y, zero on x = y, critical point criterion stated positively, does not help find cycles; p. 13 contrapositive, no critical points ⇒ no closed trajectories, first component x² + y² + 1, proof postponed, "a story"; p. 14 (text missing between pp. 13 and 14) quadratic system, 12 parameters, linear terms removable, predator–prey example, 1880, 120 years, no agreed conjecture, attempts in the 1920s–30s, Petrovski–Landis around 1950, three, Arnold; p. 15 big gap, Chinese mathematician c. 1972–75, four cycles, absurd coefficients, anecdote.

Formula locations: "Concentric circles" pp. 2–3; "Bendixson's criterion" p. 7; "Flux across a trajectory" pp. 9–10; "Green's theorem" pp. 10–11; "Critical point criterion" p. 13. All correct.

Prose citations also checked: geometric p. 1; velocity field and critical points p. 1; closed trajectory and periodic behaviour p. 2; simple curve p. 5; concentric circles p. 3; isolated and stable pp. 3–4; never joins, screen p. 4; unstable and semi-stable pp. 4–5; naming p. 4; breathing pp. 5–6; biologists p. 6; existence p. 6; Bendixson around 1900 p. 7; continuity p. 7; example pp. 7–8; "computer search could never prove" p. 8; proof pp. 8–11 with the flux set-up p. 9 and tangent argument p. 10; second example's divergence pp. 11–12; critical point criterion p. 12, not for existence pp. 12–13, contrapositive p. 13; x² + y² + 1 and proof postponed p. 13; quadratic systems p. 14; history pp. 14–15; anecdote p. 15. All correct.

"Courtesy" check: the only occurrence in the transcript is p. 15, "he came in for a courtesy interview", part of the anecdote, not a credit or licence notice. No "rights reserved" or "courtesy" text in lec.html. Confirmed. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Limit cycles": definition (isolated **and** stable), "A closed trajectory that repels nearby ones is unstable and is not called a limit cycle"; quiz 1; flashcard 1 | p. 4: "I am not calling it a limit cycle if it is unstable. I am just calling it a closed trajectory". This is Mattuck's own convention. | Stated as the definition without comment. Most textbooks (and the usual research usage, including Hilbert's sixteenth problem cited in the page's own "open problem" section) define a limit cycle as an *isolated* closed trajectory and speak of stable, unstable and semi-stable limit cycles. A reader meeting "unstable limit cycle" elsewhere would think the page wrong. The page's own open-problem count also counts all isolated cycles, not only stable ones. | Add one sentence: "(This is the lecture's convention; many books call any isolated closed trajectory a limit cycle and speak of stable, unstable and semi-stable limit cycles.)" Keep the quiz, which follows the lecture. |
| 2 | warning | "An open problem": "Around 1950 Petrovskii and Landis published a long proof that the maximum is three, but Arnold pointed out a serious gap. In the 1970s a Chinese mathematician found a quadratic system with four, with coefficients far too extreme to plot" | pp. 14–15: Mattuck's recollection ("around 1950", "about 1972 or so, '75 maybe", Arnold "criticized it", numbers "like 10^-6 and 40 billion"). | Stated as fact in the site's voice. From general knowledge (not verified against a source here, so uncertain): the Petrovskii–Landis papers appeared in 1955 and 1957; the errors are usually credited to Novikov and Ilyashenko in the 1960s (Arnold's role is uncertain); the four-cycle examples are by Chen Lansun and Wang Mingshu (1979) and Shi Songling (1980), i.e. end of the 1970s, two of the three authors working jointly. | Attribute: "In Mattuck's telling, around 1950 …; he recalls that Arnold …; in the 1970s (the published examples date from 1979–80) …". Do not add names unless checked against a source. |
| 3 | info | "An open problem": "It was first asked in the late nineteenth century … (It is usually counted as part of Hilbert's sixteenth problem, posed in 1900.)" | p. 14: "since 1880 when it was first proposed". | The page's addition is correct (the second part of Hilbert's sixteenth problem, 1900, asks for the maximum number of limit cycles of planar polynomial systems of degree n; the quadratic case is n = 2), and it is clearly bracketed as an addition. Mattuck's "1880" presumably refers to Poincaré's work on limit cycles (uncertain); the page's "late nineteenth century" covers both. The quadratic case is, to my knowledge, still open in 2026 (lower bound 4). | Optional: "(Hilbert's sixteenth problem, posed in 1900, asks this for polynomial systems of every degree; the lecture dates the question to 1880.)" |
| 4 | info | "Closed trajectories": "So far trajectories either sat at a critical point or went off to infinity" | p. 2: trajectories "go along to infinity or end up at a critical point"; critical points "just sit there". | "Sat at" drops trajectories that *approach* a critical point. | "either went off to infinity or ended up at (or sat at) a critical point". |
| 5 | info | "Nonexistence: Bendixson's criterion": "gave the first criterion" | p. 7: "there are two theorems. One … due to Bendixson … And there is one involving critical points." | "The first criterion" could be read as historically first. | "gave the first of two criteria". |
| 6 | info | "An open problem": quadratic systems | p. 14: by a change of variables all linear terms can be removed; the predator–prey (robin–earthworm) system is a typical quadratic system. | Omitted. | Optional clause linking to the predator–prey example. |
| 7 | info | Green's theorem formula: `\int\int_R` | Board: double integral. | Renders as two separate integral signs. | Optional: `\iint_R`. |

Lecturer slips and transcript garbles checked:
- p. 6: "the answer to it is totally known after 120 years of steady trying": a slip for "unknown" (p. 14: "totally unsolved"). The page says unsolved. Correct, not repeated.
- p. 13: "But I said B had no critical point": D is meant. Not repeated.
- p. 10: "dx / dy": dx dy (or dA) is meant; the page writes dA. Not repeated.
- p. 5: "The only interesting one … are the actual limit cycles. No, it was the stable closed trajectories": self-correction; consistent with the page.
- p. 7: "We are set back in 1802": 18.02. p. 13: "x squared plus y squared is one, plus one is never zero": garbled; the page's "first component $x^2 + y^2 + 1$, never zero" is the evident meaning, and its divergence 2x matches p. 12.
- The second example's full equations (pp. 11–12) and the general quadratic system (pp. 13–14, text missing between the pages) are not read out. The page gives only what can be inferred (first component x² + y² + 1; divergence 2x − 2y, so g_y = −2y) and does not invent the rest. Correct.
- None of these needs a bracketed note on the page.

Anecdote (p. 15): the visitor is "he" ("he came in for a courtesy interview", "he smiled and said yes, very well. That is my mother."). So the mathematician who found four cycles was the visitor's mother, and the visitor was her son. The page's "Mattuck later met that mathematician's son, who was being recruited to the MIT department" is correct. "Later" fits ("I was then chairman", after the discovery). Optional: "met her son" would carry the punchline; not required.

## Arithmetic and answer checks
- `npm run calc:test -- -k limit-cycles`: 6 passed.
- Concentric circles: x = c₁cos t + c₂sin t, y = −c₁sin t + c₂cos t. x′ = −c₁sin t + c₂cos t = y; y′ = −c₁cos t − c₂sin t = −x. Correct. (cos t, −sin t) starts at (1, 0) with y decreasing: clockwise; (sin t, cos t) starts at (0, 1) with x increasing: clockwise. Correct. Characteristic equation λ² + 1 = 0, λ = ±i. Correct.
- Bendixson example: ∂(x³ + y³)/∂x = 3x², ∂(3x + y³ + 2y)/∂y = 3y² + 2; sum 3x² + 3y² + 2 ≥ 2 > 0. Correct.
- Second example: f = x² + y² + 1 gives f_x = 2x; with g_y = −2y (p. 12) the divergence 2x − 2y vanishes on x = y. Correct.
- Worked example (a): x x′ + y y′ = x² − xy − x²r² + xy + y² − y²r² = r² − r⁴, so r′ = r(1 − r²); x y′ − y x′ = x² + xy − xyr² − xy + y² + xyr² = r², so θ′ = 1 (counter-clockwise). r′ = 0 for r > 0 only at r = 1, r′ > 0 for 0 < r < 1, r′ < 0 for r > 1: isolated and attracting from both sides. Correct.
- Worked example (b): f_x + g_y = −1 + (−1) = −2. Correct.
- Worked example (c): x′ = 1 + y² ≥ 1, no critical points; divergence 0 + x vanishes on the y-axis. Correct.
- Plot: with u = 1/r², r′ = r(1 − r²) gives u′ = −2(u − 1), u = 1 + (1/r₀² − 1)e^{−2t}. r₀ = 0.2: 1/0.04 − 1 = 24; r₀ = 2: 1/4 − 1 = −0.75. Both match the curve expressions; θ = s (θ′ = 1, θ₀ = 0) matches cos(s), sin(s). At s = 12 both radii are within 10⁻⁹ of 1. The starting point r = 2 lies inside the [−2.2, 2.2] window. The caption's statements (system, starting radii, formula) are correct. Generated from formulas, not an image.
- Quiz 1: answer 1 (isolated and stable). Correct per pp. 3–4 (see finding 1 on the convention); explanation correct.
- Quiz 2: answer 2 (no closed trajectories in D). Correct per p. 7; explanation correct.
- Quiz 3: answer 0. Correct: no critical points (x′ ≥ 1); option 3 is false (x′ = 1 at the origin). Explanation correct.
- Correct-answer positions 1, 2, 0: varied.
- Flashcards: all three correct (card 1 follows the lecture's convention, finding 1).
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file (info): the r₀ = 0.2 start (1/√25 = 0.2), the concentric-circle solution, the divergence 2x − 2y and example (c)'s divergence x are not checked; adding them would complete it. The page-own entries (plot, examples (a), (b)) carry `source: {cite: reading1, at: 'p. 4'}` / `'p. 7'`, which point to the transcript although the material is the page's own; harmless but slightly misleading.

## Coverage and order
- The page follows the lecture's order: recall of the geometric picture (p. 1) → closed trajectories and the circles example (pp. 2–3) → limit cycles: isolated, stable, unstable, semi-stable, naming, simple curve (pp. 3–5) → breathing (pp. 5–6) → existence problem (p. 6) → Bendixson: statement, example, proof (pp. 7–11) → second example and the critical point criterion, contrapositive (pp. 11–13) → quadratic systems and the story (pp. 14–15). Same order as MIT. (The page places "simple curve" in the closed-trajectories section, before limit cycles; minor.)
- Left out (minor): the eigenvector route for x′ = y, y′ = −x that Mattuck skips (p. 2); removing linear terms and the predator–prey remark (p. 14, finding 6); the attempts of the 1920s–30s (p. 14); the indirect-argument remark (p. 8). None essential.
- Added: the worked example and the plot (page-own), and the bracketed Hilbert note (finding 3).
- `prerequisites: [nonlinear-autonomous-systems]`: exists in the working tree, not yet committed (expected, per the task). The inline link uses the same form as other 18.03 links.
- `npm run content:check`: no error or warning for this page apart from "no review file yet" (the one build error reported is on `predator-prey-volterra.mdx`, a different page).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page (the single "courtesy" is the anecdote's "courtesy interview").
- No paragraph copied; the prose paraphrases. Short echoes ("isolated", "stable", "no computer search could ever prove", "computer search guided by the physical problem", "A implies B … not B implies not A") are brief, standard or attributed, and acceptable.
- Worked example: (a) is a standard textbook system, not from the lecture; (b) is original; (c) is in the same spirit as the lecture's second example but uses a different system. Acceptable. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 33 ("How nonlinear systems relate to first-order equations."): matches the title "Relation Between Non-linear Systems and First-order ODEs" in `_course.json`. The Lecture 33 transcript was not read. Mattuck says (p. 13) the postponed proof of the critical point criterion "might leak over until Friday's lecture"; whether Lecture 33 gives it is unverified (uncertain). If it does, the reason could mention it.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- Historical claims: Bendixson (Ivar Bendixson, Swedish, 1861–1935; criterion published 1901) matches "around 1900": correct. Petrovskii–Landis, Arnold and the four-cycle example: see finding 2 (general knowledge, uncertain on details). Hilbert's sixteenth problem: correct as bracketed.

## Resolution (2026-11-16, by the page author)

1. Warning 1: a bracket now says that "limit cycle = isolated and stable" is the lecture's convention, and that many books include unstable ones.
2. Warning 2: the history is now attributed to Mattuck's recollection ("as Mattuck recalls it", "in his account").
3. Info: "sat at or approached a critical point"; "the first of two criteria".
4. Page author's own change: worked example (a) used the standard textbook system r′ = r(1 − r²). It is replaced by r′ = r(1 − r²/4), whose limit cycle is the circle of radius 2. The plot is redrawn to match, starting at r = 0.4 and r = 3. The calcs entries are replaced, with added checks of the starting radius and of example (c)'s divergence.

Status set to `reviewed`.
