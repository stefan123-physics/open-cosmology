---
page: content/year-1/18.02/simply-connected-regions.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-24-simply-connected-regions/ (read: local copy lec.html, title "Lecture 24: Simply Connected Regions"; its .pdf link is ead3ef2b6dd8d030502e38b8378ce805_PnPIqh7Frlw.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/ead3ef2b6dd8d030502e38b8378ce805_PnPIqh7Frlw.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec24", 5 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs. The simply-connected part is p. 1 and the first third of p. 2; the exam review runs from mid p. 2 to p. 5)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week10/ (read: local copy w10.html, "Week 10 Summary"; PDF f7eb65206a728a6010805ff4a8421312_lec_week10.pdf, 4 PDF pages, PDF p. 1 is a cover; Lecture 24 is all on printed p. 1 = PDF p. 2, both the simply-connected part and the "Review for Exam 3" list; Lecture 25 starts on printed p. 2)
  - content/year-1/18.02/_course.json (read: Lecture 24 = Simply Connected Regions, Lecture 25 = Triple Integrals)
  - calcs/18.02/simply-connected-regions.yaml (read; `npm run calc:test -- -k simply-connected`: 3 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Simply connected regions

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 10 summary, `reading2` = transcript. All three formulas are at the cited place:
- "The field with a hole" (`reading1`, "Lecture 24, p. 1"): notes p. 1 ("Example: (same as in pset): F = (−y î + x ĵ)/(x² + y²), C = unit circle counterclockwise", curl computed as 0, "∮ F·dr = 2π (from pset)"). Correct; the same three facts are in transcript p. 1.
- "Region between two curves" (`reading2`, p. 1): transcript p. 1 ("C' and C'' both going counterclockwise … the line integral along C prime minus the line integral along C double prime is equal to the double integral over the region in between … that will turn out to be zero because curl is zero"). Correct. (The notes, p. 1, give the same result in the form ∮_C = ∮_{C1} − ∮_{C2} for the unit circle and a small circle.)
- "The sharp test" (`reading2`, p. 2): transcript p. 2 ("if curl F is zero and the domain of definition where F is defined is simply connected then F is conservative. And that means also it's a gradient field"). Correct. Not written as a statement in the notes' Lecture 24 part except in the review list ("F is conservative ⇔ … ⇔ curl F = 0"), so `reading2` is the right citation.

No "rights reserved" or "courtesy" notice in the transcript, the Week 10 summary or the two OCW pages (grep: no match). No diagrams from the lecture are reproduced. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "Holes and multi-valued potentials" | Neither the transcript nor the notes for Lecture 24 mention the polar angle θ. | Presents F = ∇θ away from the origin and the 2π jump of θ without saying this is the page's own addition. The mathematics is correct (see checks below). | Add a short bracketed note, e.g. "(This remark is not in the lecture.)", in line with writing rule 5 on attributing claims. |
| 2 | info | Section "Simply connected regions", "A disc is simply connected; a ring (annulus), or the plane with the origin removed, is not … (p. 2)" | Transcript p. 2: "this guy here is simply connected while this guy here is not simply connected because if I take this curve…": two drawn pictures, shapes not named. The plane minus the origin is named on p. 2. The notes say only "Examples shown". | Names the pictures a disc and a ring. | Fine as an illustration; optional "(for example)" so it does not read as Auroux's wording. |
| 3 | info | Section "Green's theorem for a region with a hole", "the work is 2π around every counterclockwise curve enclosing the origin" | Transcript p. 1: "any curve that goes counterclockwise around the origin, you would get two pi". | Same. | Strictly true for simple closed curves (a curve winding twice gives 4π). Optional: "every simple closed curve going once counterclockwise around the origin". |
| 4 | info | Flashcard "Green's theorem for a region with a hole" | Transcript p. 1: C' and C'' both counterclockwise in the formula with the minus sign. | "$\oint_{C'} - \oint_{C''}$" without saying C'' is counterclockwise here. | Optional: "(with both curves counterclockwise)". |
| 5 | info | Section "Simply connected regions", second paragraph, "defined and differentiable" | Transcript p. 2: "defined and differentiable"; notes p. 1: "defined and differentiable". | Same. | Matches both sources (Lecture 22's notes say "continuously differentiable"; optional). |
| 6 | info | Worked example, step (a) | | Uses "the work around the small circle: 2π" without showing it. The lecture's 2π is for the unit circle, which the ellipse (semi-axes 2 and 1) touches at (0, ±1), so a smaller circle is indeed needed. | Optional: add that F·dr on a circle x = ε cos t, y = ε sin t is dt for every ε, so any circle about the origin gives 2π. |
| 7 | info | Order | Notes p. 1 give the definition of simply connected before the annulus argument; transcript pp. 1–2 give the two-curve argument first. | Follows the transcript order. | None; the page says it follows the lecture. |
| 8 | info | Not covered | Transcript p. 2: this material "won't come up on the test on Thursday" but matters for next week's problem set and the final. | Not mentioned. | Optional; course-logistics remark. |

Prose page references checked against the sources:
- Opening: before the review, what curl zero vs gradient field means and why the field had to be defined everywhere: transcript p. 1. Correct.
- Both forms of Green's theorem; left side needs F only on C, right side needs F and its derivatives everywhere inside: p. 1; notes p. 1 ("F must be defined on the entire region R enclosed by C"). Correct.
- The problem-set field: p. 1 ("same vector field that was on that problem set a couple of weeks ago"); notes p. 1. Correct.
- Curve not enclosing the origin: Green applies, 0; enclosing: cannot apply, pretending gives 0 instead of 2π: p. 1. Correct.
- Two counterclockwise curves C', C'', region between: p. 1; notes p. 1 (annulus). Correct.
- Slit argument: outer counterclockwise, along the slit, inner clockwise, back; slit contributions cancel: p. 1; notes p. 1. Correct.
- Both line integrals equal, so 2π for every counterclockwise curve around the origin: p. 1. Correct (see #3).
- Several boundary curves, outer counterclockwise, inner clockwise or minus sign; same for flux and divergence: p. 1. Correct.
- Connected = one piece; simply connected = interior of every closed curve in R lies in R; no holes: transcript p. 1 (definition) to p. 2 (pictures); notes p. 1. Correct ("pp. 1–2").
- Green can always be applied on a simply connected domain: p. 2; notes p. 1. Correct.
- Plane minus origin not simply connected, so the line integral makes sense but Green does not apply: p. 2; notes p. 1 ("can't apply Green to the unit circle, because the domain of definition of F is not simply connected"). Correct.
- "Best form of the test": p. 2 ("the actual optimal statement"). Correct.
- Topology as the study of the shapes of regions, Auroux's own field: p. 2 ("since that's the branch of math in which I work"). Correct.

## Arithmetic and answer checks
- Unit circle: x = cos t, y = sin t, −y dx + x dy = (sin² t + cos² t) dt = dt, x² + y² = 1, work 2π ≈ 6.2832. Correct (calcs `unit-circle`).
- Curl of F where defined: ∂/∂x [x/(x² + y²)] = (y² − x²)/(x² + y²)², ∂/∂y [−y/(x² + y²)] = (y² − x²)/(x² + y²)²; difference 0. Correct.
- Example (a): the ellipse x = 2 cos t, y = sin t encloses the origin; the region between it and a circle of radius ε < 1 avoids the origin, curl 0 there, so the work is 2π. Correct.
- Example (b): circle of radius 3 about (5, 0) spans 2 ≤ x ≤ 8; the origin is at distance 5 > 3, outside. Work 0. Recomputed by direct integration with x = 5 + 3 cos t, y = 3 sin t: 0 (calcs `off-origin-circle`, tolerance 1e−6). Correct.
- Example (c): dx = −2 sin t dt, dy = cos t dt; −y dx + x dy = (2 sin² t + 2 cos² t) dt = 2 dt; x² + y² = 4 cos² t + sin² t. ∫₀^{2π} dt/(a² cos² t + b² sin² t) = 2π/(ab) with a = 2, b = 1 gives π; times 2 = 2π. Correct (calcs `ellipse`).
- Callout: θ = atan2(y, x) has ∂θ/∂x = −y/(x² + y²), ∂θ/∂y = x/(x² + y²), so F = ∇θ away from the origin; one turn changes θ by 2π, equal to the work. On a simply connected domain a zero-curl field is a gradient (the page's own theorem), so no such mismatch. Correct.
- Quiz 1: plane minus origin is not simply connected; answer 1. Correct, explanation correct.
- Quiz 2: circle radius 3 about (5, 0) does not enclose the origin; work 0; answer 1. Correct.
- Quiz 3: curl zero plus simply connected domain ⇒ conservative; answer 0. Correct. The distractor "defined everywhere except one point" is rightly wrong (this page's field is the counterexample).
- Flashcards: all three correct (see #4).
- calcs file: three entries, all recomputed and passing. Minor: the `ellipse` and `off-origin-circle` entries are `origin: page-own` but carry `source: {cite: reading2, at: 'p. 1'}`; harmless, as the method (Green on a region avoiding the origin) is from p. 1.

## Coverage and order
- Covers the whole first part of the lecture (transcript p. 1 to the topology remark on p. 2; notes p. 1 up to "Review for Exam 3") in MIT's (transcript) order: validity of Green, the example, region with a hole and the slit, several boundaries and flux, connected and simply connected, application to Green, the sharp test, topology. Nothing of the first part is missing apart from the test-logistics remark (#8).
- The exam review (transcript pp. 2–5, notes p. 1 from "Review for Exam 3") has no page, as stated in the opening and the summary. This is a deliberate scope choice; it restates earlier lectures (double integrals, polar coordinates, change of variables, line integrals, potentials, Green) and contains no new theorem, apart from restating the zero-curl test with "and the domain is simply connected" (transcript p. 4), which this page already has.
- Added by the page: the worked example (original numbers: ellipse with semi-axes 2 and 1, circle of radius 3 about (5, 0)) and the θ callout (#1).
- leadsTo: 18.02 Lecture 25, "Triple integrals: integration in space". Correct per `_course.json` and notes p. 2 (Lecture 25 begins with triple integrals). No cosmology callout; none is needed for this lecture.
- Prerequisites: [flux]. Reasonable; the page also links greens-theorem inline, which is reachable through flux.

## Licensing
- No paragraph copied. Closest wording: "the branch of mathematics that studies the shapes of regions" (transcript p. 2: "the branch of math that studies the shapes of regions") and "the outer boundary goes counterclockwise and the inner ones clockwise, or with a minus sign" (p. 1); both short, standard phrases. The definition of simply connected is the standard one, reworded from the notes.
- Worked example is original (the lecture computes no new example in this part).
- No rights-reserved or courtesy material; no OpenStax or LibreTexts.

## Notes
- The notes' header says Lecture 24's summary is "slightly different from the actual notations used" (unit circle and C2 instead of C', C''); the page follows the transcript's C', C'' and cites it for that formula, which is consistent.
- Verdict pass-with-notes: no errors; #1 should be fixed (attribution of the page's own remark), the rest are optional.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the closing note now says the θ remark is the page's own.
- Info: "every counterclockwise curve enclosing the origin" now says "going once around the origin". The other info items are left as they are.
