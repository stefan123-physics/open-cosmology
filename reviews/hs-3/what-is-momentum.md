---
page: content/year-0/hs-3/what-is-momentum.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-02 (read; CC BY 3.0 footer, CCBY in docs/siyavula-licences.tsv line 513; no OpenStax or third-party credit)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-03 (read; heading code ESCJB confirmed in the HTML; CC BY footer, tsv line 514)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-05 (read; ESCJK confirmed; CC BY footer, tsv line 516)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-06 (read; ESCJM, ESCJN, ESCJP, ESCJQ, ESCJR, ESCJS confirmed; CC BY footer, tsv line 517)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter10/ (read: mit8_01scs22_chapter10.pdf downloaded to a scratch folder outside the repo, extracted with pdftotext; no "rights reserved" or "courtesy" notice)
  - MIT 8.286 Lecture 15 (not re-read from OCW; checked against this site's reviewed pages content/year-4/8.286/matter-radiation-equality.mdx (Lecture 15) and radiation-dominated-universe.mdx (Lecture 16))
  - Siyavula Grade 12 work-energy-and-power pages 5.3 and 5.4: deliberately NOT opened (OpenStax-credited material)
verdict: needs-changes
---

# Review: Momentum and impulse (Lesson 3.6)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Cosmology callout ("Towards cosmology"), and less strongly `leadsTo` 8.286 `why` | 8.286 Lecture 15/16 (site pages matter-radiation-equality, radiation-dominated-universe): in a homogeneous universe pressure has **no mechanical effect** ("Mechanical forces come only from pressure differences"); a positive pressure enters ä = −(4π/3)G(ρ + 3p/c²)a only through its **gravity**, making the deceleration larger. | "space was filled with so much light that its push, the pressure of radiation, mattered for the whole universe: ... this pressure enters the equations for how the expansion slows down." | As written a beginner reads that light's push acted on the universe as a whole, the misconception Guth explicitly corrects. Suggested: "In the hot early universe space was filled with so much light that its pressure mattered for the whole universe. Not as a push: a pressure that is the same everywhere pushes equally in all directions. Instead, as the cosmology course (8.286) shows, pressure adds to the pull of gravity and makes the expansion slow down faster." In `leadsTo` keep "radiation pushes on what it meets" but say "how the pressure of light, through its gravity, enters the equations". |
| 2 | error | Section "Newton's second law in terms of momentum", para. after the Formula | Siyavula 2.3: "We will not deal with the case of changing mass". MIT Sec. 10.2: F = dp/dt is written "because we are assuming that the mass ... does not change" (Eqs. (10.2.2)–(10.2.3)). This site's own 8.01 momentum-and-impulse page: for changing mass the law "must be applied with care, to a system that keeps the same particles". | "It still works when the mass changes, as for a rocket that throws out burning fuel (lesson 3.9)" | F_net = Δp/Δt applied to the rocket body alone, with its changing m, gives wrong results (and is not frame-independent). It holds for a system that keeps the same particles (rocket plus its exhaust). Fix: "It also applies to a whole system of objects, such as a rocket together with the gas it throws out (lesson 3.9), and it is the form that survives in Einstein's relativity." |
| 3 | error | Same paragraph: "as $\vec F = d\vec p/dt$ ..., using the derivative of lesson 0.10" | n/a (earlier lessons) | Lesson 0.10 (rates-of-change-and-area) defines the "rate of change at one instant" as a limit, but never uses the word **derivative** (only in its `leadsTo` text) or the **d/dt notation**. No earlier High School lesson does. | Write "the MIT notes write it for one instant, as $\vec F = d\vec p/dt$, where $d\vec p/dt$ means the rate of change of momentum at one instant (lesson 0.10)". |
| 4 | warning | Same section: "This gives the second law in the form in which Newton himself stated it, in terms of the change of motion" | MIT Ch. 10 epigraph (Newton, Law II): "The change of motion is proportional to the motive force impressed". Newton's wording relates the change of motion to the force impressed, which reads at least as much like impulse as like a rate. Siyavula says nothing about Newton. | States that F_net = Δp/Δt is exactly Newton's own form; no citation. | Soften and cite: "Newton himself stated his second law in terms of the 'change of motion' (reading 4, the Principia quotation at the start of Ch. 10)". |
| 5 | warning | Quiz question 2 | Siyavula 2.5 Worked example 16: cricket ball hits the bat at 54 km/h = 15 m/s and goes back at 36 km/h = 10 m/s. | Ball of 0.20 kg hits a wall at 15 m/s and bounces back at 10 m/s. | Same two speeds as Siyavula's example (different mass and setting). Change the speeds, e.g. 14 m/s in and 11 m/s back (Δp = 0.20 × 25 = 5.0 kg·m/s keeps the answer; distractor 0.20 × 3 = 0.6 kg·m/s), and update the calcs entries `quiz-bounce`, `quiz-bounce-wrong`. |
| 6 | info | Section "Momentum": "The MIT course notes call it the 'quantity of motion', a name that goes back to Newton (reading 4, Sec. 10.2, Eq. (10.2.1))" | MIT Sec. 10.2 title and text: "The quantity of motion or the momentum"; Newton appears only in the chapter epigraph (and footnote 1). | Cites Sec. 10.2 for the Newton link. | Fine; optionally add "and the Principia quotation that opens Ch. 10". |
| 7 | info | Section "Momentum is a vector", frame paragraph refers to lesson 1.9 | MIT Sec. 10.2: "Momentum is a reference frame dependent vector quantity" (supports the claim). | Refers to lesson 1.9 (relative-velocity) for frames of reference. | 1.9 is earlier and introduces frames, so no error; consider adding `relative-velocity` to `prerequisites`, since the page relies on it. |

## Formulas and citations
- **Momentum** `cite="mit"` at "2.2 Momentum (ESCJ7), definition box": correct. Siyavula's box defines linear momentum as mass times velocity and writes p⃗ = m v⃗; unit kg·m·s⁻¹. MIT Eq. (10.2.1) is the same; the page also cites it in prose. Correct.
- **Change in momentum** `cite="mit"` at "Change in momentum (ESCJ9), Case 1": correct. Both Δp⃗ = mΔv⃗ and Δp⃗ = p⃗_f − p⃗_i are in Case 1 (not in the ESCJ9 introduction, which has no formula). The page's m v⃗_f − m v⃗_i is the same thing.
- **Second law** `cite="reading1"` at "2.3 ... (ESCJB), definition box and the derivation from F_net = ma": correct. Siyavula's definition box ("net or resultant force ... equal to the rate of change of momentum") and four-line derivation F_net = m a → m Δv/Δt → mΔv/Δt → Δp/Δt match the page's inline derivation step for step (that is standard algebra, not copying).
- **Impulse–momentum theorem** `cite="reading2"` at "2.5 Impulse (ESCJK), definition box and the impulse-momentum theorem": correct. Siyavula has no symbol for impulse (it writes F_net Δt and "Impulse = Δp⃗"). MIT writes **I** (Eqs. (10.2.4), (10.2.5), (10.2.7), (10.2.8)). The page's choice of **J** is stated and explained, with the warning against confusing it with the joule. Acceptable; it is the usual symbol in many school books.
- **Average force** `cite="reading3"` at "Air-bags in motor vehicles (ESCJN)": correct; Siyavula writes F = Δp/Δt there and says a longer t gives a smaller force for a constant Δp.
- Prose citations: MIT Eqs. (10.2.2) and (10.2.3) for F = dp/dt (correct); Eqs. (10.2.6)–(10.2.8) for F_ave and I_ave = Δp (correct); Example 10.1 for impulse as the area under a force–time graph (correct: MIT computes the area of two triangles, I = ¼ b (Δt)² = 5.0 N·s); Siyavula 2.5 "The area under the graph ... represents the impulse" (correct). Negative area as negative impulse: supported by Siyavula Worked example 17 (−4.5 N·s, −18 N·s parts).
- **Claimed MIT unit slip after Eq. (10.2.4): confirmed.** The PDF reads "The SI units of impulse are [N ⋅ m] = [kg⋅ m⋅s −1 ] which are the same units as the units of momentum." N·m is wrong (it is the joule); N·s is meant. The page's bracket is accurate.
- "Impulse is a vector in the direction of the net force": supported by MIT (vector I) and implied by Siyavula's directions; correct.
- Unsupported but standard and correct: unit equivalence N·s = kg·m/s; momentum vs kinetic energy contrast; "the form that survives in Einstein's relativity" (true: F = dp/dt with relativistic p); light carrying momentum and solar sails.

## Arithmetic and answer checks
All recomputed independently; every number has a calcs entry.
- Puck 0.17 × 30 = 5.1; lorry 12 000 × 15 = 1.8 × 10⁵; ratio 1.8 × 10⁵ / 5.1 = 35 294 ("about 35 000"). Bus 9000 × 2.0 = 1.8 × 10⁴ = car 1200 × 15. KE bus ½·9000·4 = 1.8 × 10⁴ J; car ½·1200·225 = 1.35 × 10⁵ ≈ 1.4 × 10⁵ J; ratio 7.5. All correct.
- Trolley 0.50 × (−4.0) = −2.0. Correct.
- Football: p_i = 5.4, p_f = −4.05 (≈ −4.1), Δp = 0.45 × (−21) = −9.45 ≈ −9.5; check 5.4 + 4.05 = 9.45; stop case −5.4; mistake 12 − 9.0 = 3.0. Correct.
- Motorway car: Δp = 1100 × 15 = 1.65 × 10⁴; /6.0 = 2750 ≈ 2.8 × 10³ N; a = 2.5, m a = 2750. Correct.
- 2.0 N × 10 s = 2000 N × 0.010 s = 20 N·s. Correct.
- Golf: 0.046 × 60 = 2.76 ≈ 2.8 N·s; 2.76 / 5.0 × 10⁻⁴ = 5520 ≈ 5.5 × 10³ N; a = 1.2 × 10⁵; weight 0.451 N; ratio 5520 / 0.451 = 1.22 × 10⁴. Correct.
- Graph: expr 225 t for t ≤ 4 (900 N at 4 ms), 150(10 − t) to 0 at 10 ms; area ½ × 0.010 × 900 = 4.5 N·s (also 1.8 + 2.7); v = 4.5/0.45 = 10 m/s; F_ave = 450 N, dashed line drawn at 450 up to t = 10 ms, matching the caption. Correct.
- Airbag: 15 m/s = 54 km/h; Δp = 1050; /0.010 = 1.05 × 10⁵ ≈ 1.1 × 10⁵ N; /0.15 = 7.0 × 10³ N; ratio 15; weight 686.7 ≈ 690 N; 7000/686.7 = 10.2 ("about 10"); 1.05 × 10⁵/686.7 = 153 ("about 150"). Correct.
- Crumple: 1500 × 14 = 2.1 × 10⁴; 1500 × 16 = 2.4 × 10⁴; 16/14 − 1 = 14.3% ("about 14%"). Correct.
- Quiz 1: N·s is right (kg·m/s); kg·m/s² is the newton, J is energy, N/s is not momentum. Correct; explanation true.
- Quiz 2: 0.20 × (−10 − 15) = −5.0, size 5.0 (index 3). Distractors 1.0 (speeds subtracted), 2.0 (= 0.20 × 10) and 3.0 (= 0.20 × 15, a stop) are all wrong. Correct (but see finding 5).
- Quiz 3: Δt × 4 → F/4 (index 3). Correct.
- Quiz 4: ½ × 0.020 × 600 = 6.0 N·s (index 0); 12 and 3.0 × 10⁴ explained correctly; 0 wrong. Correct.
- Quiz 5: index 1 correct; the other three are false (Δp is fixed, impulse is the same, a force is needed). Explanation true.
- Flashcards: all five true. "Crumpling instead of bouncing back also keeps Δp itself smaller" matches Siyavula ESCJS.

## Only earlier terms
- Prerequisites `introducing-vectors` (0.8), `rates-of-change-and-area` (0.10), `speed-and-velocity` (1.2), `acceleration` (1.4), `velocity-time-graphs` (1.5), `newtons-second-law` (2.3), `kinetic-energy` (3.2): all exist and are earlier.
- **Derivative / d p/dt**: not introduced in any earlier lesson (finding 3), error.
- Frame of reference: lesson 1.9 (relative-velocity) uses "frame of reference"; earlier, but not in `prerequisites` (finding 7, info).
- Scalar (0.8), joule (3.1), kinetic energy (3.2), N = kg·m/s² (2.3), average acceleration Δv/Δt (1.4), area under a v–t graph (0.10, 1.5), millisecond prefix (0.1 powers-of-ten, "4.5 ms"), weight m g (2.3), Newton's third law (2.4, mentioned for the next lesson): all introduced earlier.
- Forward references to lesson 3.7 (conservation of momentum) and 3.9 (rockets) are labelled as later lessons; fine.
- Light having no mass but carrying momentum, solar sail, radiation pressure: only in the cosmology callout, explained there; acceptable for a callout.
- "Impulse", "momentum", "change in momentum", "impulse–momentum theorem", "average force", "crumple zone" are all defined on the page before use.

## Coverage
- §4 row 3.6 "Momentum and impulse" (old OpenStax sources ignored; no PhET; leads to `8-01/momentum-and-impulse`). The page covers Siyavula 2.2 (momentum, vector nature, change in momentum incl. stop / slow down / bounce), 2.3 (second law in momentum form), 2.5 (impulse, theorem, force–time graphs, negative area) and 2.6 (air-bags, padding, arrestor beds, follow-through, crumple zones). That is the full VWO content for this topic.
- Left out: Siyavula Case 4 ("object gets a boost") and Case 5 (vertical bounce) as separate cases; momentum in two dimensions. Neither matters at this level; the bounce and the sign rule cover them.
- A force–time graph with a negative part is described in words only, not worked; acceptable.

## Where this leads
- `8.01` Lecture 15: page content/year-1/8.01/momentum-and-impulse.mdx exists and covers exactly this (p = mv, F = dp/dt, impulse integral, systems). Correct.
- `8.286` Lecture 15: pages mass-energy-and-radiation and matter-radiation-equality exist; the latter derives p = ⅓ρc² for radiation and puts pressure into the ä equation. The link is apt, but the wording should say the pressure enters through its gravity (finding 1).
- `towards: false` is right: the block's last lesson is 3.12 (towards-the-universe-expanding-ball).

## Licensing and AI terms
- No sentence copied. Closest: page "*the net force on an object equals the rate of change of its momentum*" vs Siyavula "The net or resultant force acting on an object is equal to the rate of change of momentum"; page "The product of the net force and the time for which it acts is called the impulse" vs Siyavula "Impulse is the product of the net force and the time interval for which the force acts". Both are the standard statement of the law/definition; acceptable as short standard phrases.
- Worked examples and quiz are the page's own (puck, lorry, bus/car, trolley, football, motorway car, golf ball, kick graph, airbag, 1500 kg car). The "same momentum" pair repeats Siyavula's idea (car and motorcycle, 8000 kg·m/s each) with different objects and numbers: fine. MIT Example 10.1 (symmetric triangle, b = 20 N/s) differs from the page's asymmetric kick. Quiz 2 reuses Siyavula Worked example 16's speeds (finding 5).
- Only generated figure: the `<Plot>` from formulas. No copied figure.
- No Siyavula logo, brand or "Everything Science"; source titles name Siyavula only as attribution.
- MIT Ch. 10: no "excluded from our Creative Commons license" or "All rights reserved" notice.
- No NASA or ESO material used. No forbidden source cited or read; Siyavula Gr 12 work-energy-and-power 5.3/5.4 were not opened.
- All four Siyavula pages carry the CC BY 3.0 footer and are CCBY in docs/siyavula-licences.tsv.

## Notes
- The crumple-zone explanation is correct and matches Siyavula ESCJS (longer time, and crumpling rather than rebounding gives a smaller Δp and impulse). Seat belts that stretch are not in Siyavula but standard and correct.
- Arrestor beds: the page's "soft gravel beds where runaway lorries can stop ... make the stopping time longer" matches Siyavula ESCJQ.
- Follow-through: page and Siyavula ESCJR agree (longer contact time, larger impulse for the same force).
- Siyavula Gr 12 uses kg·m·s⁻¹; the page writes kg·m/s, the site's style. No conflict.
- Not checked: rendering, `content:check`, `calc:test` (no builds run on this machine at the owner's request).

## Resolution (2026-11-20, by the page author)
1. Cosmology callout rewritten as suggested: the pressure of light mattered "not as a push" (a pressure that is the same everywhere pushes equally in all directions); pressure adds to the pull of gravity and makes the expansion slow down faster. The 8.286 `leadsTo` now says the pressure of light enters the equations "through its gravity".
2. Rocket sentence replaced: the momentum form "also applies to a whole system of objects, such as a rocket together with the gas it throws out (lesson 3.9)". No claim about a changing mass any more.
3. Removed the word "derivative" and the d p/dt notation: the MIT notes now "write it for one instant, with the rate of change of momentum at that instant (lesson 0.10) in place of Δp/Δt". The 8.01 `leadsTo` says the university lesson "writes the second law for one instant" instead of "as F = dp/dt". (The `d` symbol meaning scoped to this page in data/symbols.json is now unused and must be removed there; left to the person merging symbols.)
4. Softened and cited: "Newton himself stated his second law in terms of the 'change of motion' (reading 4, the Principia quotation at the start of Ch. 10). In words: …".
5. Quiz 2 speeds changed to 14 m/s in and 11 m/s back; Δp = 0.20 × (−11 − 14) = −5.0 kg·m/s (answer unchanged). Choices now 0.6 (speeds subtracted), 2.2 (0.20 × 11), 2.8 (0.20 × 14, a stop) and 5.0 kg·m/s. Calcs `quiz-bounce` and `quiz-bounce-wrong` updated.
6. Added "and the Principia quotation that opens Ch. 10" to the citation.
7. Added `relative-velocity` (lesson 1.9) to `prerequisites`.

Checks: `pytest tests/calc -k what-is-momentum` 56 passed; `content:check` shows no error for this page except the now-unused `d` meaning scoped to it in data/symbols.json (to be removed there).
