---
page: content/year-1/18.02/stokes-theorem.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-31-stokes-theorem/ (read: local copy lec.html; it links d75a92f2ebc39b076c050d16c6171db3_tzoYhe3H5dM.pdf and lec_week13, matching the page's readings)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/d75a92f2ebc39b076c050d16c6171db3_tzoYhe3H5dM.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec31", 13 pages, text on pp. 1–13; cited page = PDF page; text per page checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week13/ (read: local copy week13.pdf; Lecture 31 is printed pp. 2–3 = PDF pp. 3–4; printed p. 3 starts at "with those coordinates, the expressions of work, curl, flux"; Lecture 32 on printed pp. 3–4 also read for the leadsTo check)
  - content/year-1/18.02/_course.json (read: Lecture 31 = Stokes' Theorem, Lecture 32 = Stokes' Theorem (cont.))
  - calcs/18.02/stokes-theorem.yaml (read; `npm run calc:test -- -k stokes-theorem`: 5 passed)
verdict: pass-with-notes
---

# Review: Stokes' theorem

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers (PDF page − 1). `reading1` = Week 13 summary, `reading2` = transcript. Transcript page map: p. 1 = curl recap (del-cross determinant, rotation, axis and twice the angular velocity), constant field, stretching field x î (curl 0, divergence 1), start of the rotation example; p. 2 = ⟨−y, x, 0⟩ has curl 2k̂, Charles River eddies, curl and conservative fields, curl and Green, Stokes' theorem stated in words; p. 3 = the formula, C closed, S any surface bounded by C, unit circle with half sphere / "pointy thing" / disc, using it backwards, the catch: orientation of S flips the flux; p. 4 = reversing C flips the work, compatibility, the "walk along C with S to my left" rule, clockwise case (normal down); p. 5 = right-hand rule (thumb, index, middle finger), first practice; p. 6 = cone practice (normal up and into the cone), deformation argument, cylinder with two boundary curves (start); p. 7 = cylinder: bottom C′ counterclockwise, top C clockwise for outward normal; "make them up consistently"; Stokes vs Green set-up; p. 8 = Green derivation (P dx + Q dy, n̂ = k̂, Q_x − P_y, dS = dx dy, "called things M and N"); p. 9 = Green is a special case, conventions come from right-handedness, closed surfaces give zero flux because div curl = 0 (preview), F must be differentiable on S, undefined at the origin vs on the z-axis; p. 10 = end of that, proof steps 1–2; p. 11 = step 2 continued, step 3 (tiles, hexagons and pentagons, inner edges cancel); p. 12 = end of step 3 and "I am cheating a little bit", example ⟨z, x, y⟩ directly (∫ cos² t = π), choice of paraboloid, normal up; p. 13 = curl ⟨1, 1, 1⟩, n̂ dS = ⟨−f_x, −f_y, 1⟩ dx dy, (2x + 2y + 1), symmetry, π; preview of Lecture 32 and Practice Exam 4B. Notes p. 2: analogue of Green, curl recalled, the theorem, orientation, walking rule, right-hand rule, Stokes vs Green, "free to choose any S", proof steps 1 and most of 2; notes p. 3: end of step 2 (coordinates u, v, w), step 3, the ⟨z, x, y⟩ example.

The four formulas:
- "Stokes' theorem" (`reading1`, "Lecture 31, p. 2"): notes p. 2. Correct (also transcript pp. 2–3).
- "Green's theorem as a special case" (`reading2`, p. 8): transcript p. 8 has every link of the chain (P dx + Q dy, curl F · k̂, Q_x − P_y, dS = dx dy). Correct.
- "The work around the circle" (`reading1`, "Lecture 31, p. 3"): notes p. 3, with θ as on the page (the transcript uses t). Correct.
- "The flux of the curl" (`reading2`, p. 13): transcript p. 13. Correct.

No "rights reserved" or "courtesy" notice in the transcript text, the Week 13 summary text or the lecture page (grep: no match). No em dash on the page (grep: 0). Internal links (`line-integrals-in-space`, `greens-theorem`, `divergence-theorem`) point to existing pages.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Orientation" | Transcript pp. 4–7 spend most of the lecture's practice time on orientation: clockwise C gives the normal pointing down (p. 4); a cone: normal "up and into the cone" (p. 6); deforming the surface does not change the convention (p. 6); a cylinder with two boundary curves: for the outward normal the bottom curve goes counterclockwise and the top curve clockwise (pp. 6–7); if a problem fixes neither orientation, choose them consistently (p. 7). Notes p. 2: "Various examples shown", "More examples shown". | Only the rule and the right-hand rule; no example of applying them. | Add a short paragraph (or a worked example with the page's own surface) covering at least a reversed curve and a surface with two boundary curves, citing pp. 4–7. The cylinder case is the one most readers get wrong. |
| 2 | warning | "The theorem", last sentence: "$\vec F$ must be defined and differentiable everywhere on $S$; what happens off $S$ does not matter (pp. 9–10)" | Transcript pp. 9–10 make it concrete: if F is undefined at the origin, the disc cannot be used but a hemisphere can; if F is undefined on the whole z-axis, no surface bounded by the unit circle avoids it, so Stokes cannot be used directly. | The condition only, without the consequence for the choice of surface. | Add one sentence with the two cases; it is also the bridge to Lecture 32 (simply connected regions). |
| 3 | warning | Callout "Circulation": "a loop in a river has circulation exactly when eddies pass through it" | (Page's own note, not MIT.) Circulation equals the net flux of the curl: eddies of opposite spin can cancel (zero circulation with eddies), and a shear flow has curl without any eddy. | "exactly when" | Soften: "a loop in a river has circulation when, on balance, rotation (curl) passes through it, for instance an eddy spinning one way". |
| 4 | info | "Orientation", first sentence: "(transcript, p. 3; notes, p. 2)" | The flux sign flip is on p. 3, the work sign flip on p. 4. | p. 3 | "(transcript, pp. 3–4; notes, p. 2)". |
| 5 | info | "Why it is true", step 2: "(pp. 10–11; notes, p. 3)" | The geometric-invariance sentence is on notes p. 2; only the u, v, w coordinates continue onto p. 3. | notes, p. 3 | "notes, pp. 2–3". |
| 6 | info | "Why it is true", step 3: "(p. 11; notes, p. 3)" | The cancellation argument ends on transcript p. 12 ("Sum of work around each little piece is just actually the work along C"), followed by Auroux's caveat that the flattening approximation needs checking ("I am cheating a little bit … trust me, it actually works"). | p. 11; no caveat | "(pp. 11–12; notes, p. 3)", and optionally say this is a sketch, not a full proof (the notes also put "Proof" in quotes). |
| 7 | info | Step 3, "like the patches of a football" | The transcript has "[UNINTELLIGIBLE]" followed by "made of all these hexagons and pentagons", so a (soccer) ball is a reasonable reading, but it is the page's inference. | "football" | Fine; "a football (soccer ball)" avoids ambiguity for American readers. |
| 8 | info | "Curl again": "The curl decides whether a field is conservative" | Transcript p. 2: conservative iff curl is zero, as recalled from Lecture 30, where it carries the "defined in whole space or simply connected region" condition (Lecture 32 returns to it). | No condition | Optional: "(in a simply connected region; see Lecture 32)". |
| 9 | info | "Stokes contains Green" | Transcript p. 9 also remarks that a surface in Stokes is usually not closed, and that for a closed surface the flux of a curl is zero because div curl = 0 ("getting ahead of myself"). | Not mentioned (only in `leadsTo`) | Optional one-line preview. |
| 10 | info | "An example" | Transcript pp. 12–13 add that the disc would be the sensible choice (the paraboloid is chosen only to show any surface works) and that polar coordinates also give π. | Not mentioned | Optional. |

## Arithmetic and answer checks
- `npm run calc:test -- -k stokes-theorem`: 5 passed.
- Circle: F · dr = z dx + x dy + y dz = cos θ · cos θ dθ on C; ∫₀^{2π} cos²θ dθ = π. Correct.
- Curl of ⟨z, x, y⟩: ⟨R_y − Q_z, P_z − R_x, Q_x − P_y⟩ = ⟨1 − 0, 1 − 0, 1 − 0⟩ = ⟨1, 1, 1⟩. Correct.
- Paraboloid: f = 1 − x² − y², ⟨−f_x, −f_y, 1⟩ = ⟨2x, 2y, 1⟩ (upward, compatible with counterclockwise C). Dot ⟨1, 1, 1⟩: 2x + 2y + 1; over the unit disc the x and y terms vanish by symmetry; area π. Correct.
- Worked example: F = ⟨−y, x, z⟩. On C, F = ⟨−sin θ, cos θ, 0⟩ = dr/dθ, F · dr = dθ, work 2π. Curl ⟨0 − 0, 0 − 0, 1 − (−1)⟩ = ⟨0, 0, 2⟩. Disc: 2 × π = 2π. Hemisphere: n̂ = ⟨x, y, z⟩, curl · n̂ = 2z = 2 cos φ, dS = sin φ dφ dθ, ∫₀^{2π}∫₀^{π/2} 2 cos φ sin φ dφ dθ = 2π · 1 = 2π. All correct. (The integrand silently contains dS = sin φ dφ dθ for the unit sphere; optional to say so.) The example is original: not in the transcript or notes.
- Quiz 1: "any surface whose boundary is C, with compatible orientation" (index 1). Correct; explanation correct (disc, hemisphere, cone as on transcript p. 3 / notes p. 2).
- Quiz 2: k̂ (index 0). Correct; explanation matches transcript p. 8.
- Quiz 3: ⟨1, 1, 1⟩ (index 0). Correct; explanation correct.
- Flashcards: all three correct (orientation rule and right-hand rule as in notes p. 2; Green special case as in transcript p. 8).
- calcs file: the page-own entries (example-direct, example-disc, example-hemisphere) carry `source: {cite: reading2, at: 'p. 3'}` although the numbers are the page's own (`origin: page-own` is set correctly); harmless, noted only.

## Coverage and order
- Order follows the lecture: curl recap and examples, why curl matters (conservative, Green), the theorem, any surface (disc, hemisphere, cone), backwards use, orientation (walking rule, right-hand rule), Stokes vs Green, conventions and right-handedness, differentiability on S, proof sketch (xy-plane, any plane, tiling), the ⟨z, x, y⟩ example both ways. The page moves the differentiability remark (transcript pp. 9–10) up into "The theorem" and the right-handedness remark (p. 9) into "Orientation"; both are sensible regroupings.
- Left out: the orientation practice (cone, cylinder with two curves, clockwise case, deformation; finding 1), the consequences of F being undefined at a point or on an axis (finding 2), closed surfaces and div curl = 0 preview (finding 9), the proof caveat (finding 6).
- Added: the worked example (⟨−y, x, z⟩, disc vs hemisphere) and the "Circulation" note, both the page's own and not attributed to MIT.
- Every in-text page citation checked: correct except the small range issues in findings 4–6.
- `leadsTo` Lecture 32 ("simply connected regions in space, and why div curl = 0"): correct. Notes Lecture 32 (printed pp. 3–4): simply connected regions, curl F = 0 in a simply connected region implies conservative, the Möbius strip, and surface independence via div(curl F) = 0; the transcript's last lines (p. 13) also announce "how curl fits in with conservativeness and with the divergence theorem".

## Licensing
- No "All rights reserved" or "Courtesy of" material in the sources used; the page has no figures.
- No OpenStax or LibreTexts material.
- Wording is rewritten throughout; no verbatim sentences from the transcript or notes. Short standard phrases ("any surface bounded by C", "S to my left", "space version of Green's theorem for work") only.

## Notes
- No `<Callout kind="cosmology">` and no cosmology `leadsTo`; acceptable for this maths lecture. A natural later link would be circulation/vorticity in fluids, but nothing on the page claims one.
- Notation: the page writes ∫∫ as `\int\int`, as on earlier 18.02 pages; consistent.
- φ in the worked example is the spherical polar angle; check that `data/symbols.json` has a meaning for φ on this page (content:check will report it if not).

## Resolution (2026-11-16, by the page author)

- Warning 1: added the orientation cases from transcript pp. 4–7 (clockwise circle, cone, cylinder with two boundary curves).
- Warning 2: added the consequences of the differentiability condition (hemisphere instead of disc when F is undefined at the origin; Stokes not directly usable when F is undefined on the whole z-axis), pp. 9–10.
- Warning 3: the "Circulation" callout now says circulation measures the net rotation passing through, notes that opposite eddies can cancel and that a shear flow has curl without a visible eddy.
- Info: citation ranges corrected (orientation pp. 3–4; proof step 2 notes pp. 2–3; step 3 pp. 11–12); added Auroux's remark that the proof sketch cheats a little (p. 12); "football" replaced by "the panels of a ball"; "decides whether a field is conservative" now adds "on a simply connected region".
- Info not changed: the other optional remarks, and the calcs citations (harmless). The φ meaning for this page is in data/symbols.json (content:check passes).
