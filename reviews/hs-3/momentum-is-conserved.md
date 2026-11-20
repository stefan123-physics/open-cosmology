---
page: content/year-0/hs-3/momentum-is-conserved.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-04 (read; sections ESCJC, ESCJD, ESCJF, ESCJG, ESCJH, ESCJJ confirmed in the HTML; footer "Creative Commons Attribution License" linking to CC BY 3.0, CCBY in docs/siyavula-licences.tsv line 515; no OpenStax or third-party credit on the page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter10/ (read: mit8_01scs22_chapter10.pdf downloaded to a scratch folder outside the repo, extracted with pdftotext; no "rights reserved", "courtesy" or "excluded" notice)
  - public/phet/collision-lab_1.1.25_en.html (the site's pinned copy; screen names and Intro-screen controls checked in its code, the simulation was not run)
  - MIT 8.286 Lecture 15 (not re-read from OCW; checked against this site's reviewed page content/year-4/8.286/mass-energy-and-radiation.mdx, Lecture 15)
  - Siyavula Grade 12 work-energy-and-power pages 5.3 and 5.4: deliberately NOT opened
verdict: needs-changes
---

# Review: Conservation of momentum (Lesson 3.7)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Pushing apart", recoil paragraph before the cannon example | Neither source discusses guns. The physics: the gases push on the bullet and on the gun. These two forces are not a third-law pair; the pairs are gas–bullet and gas–gun. The gases also carry forward momentum of their own, so the gun's backward momentum equals the bullet's momentum **plus** the gases' momentum. For a rifle the gases' share is not small. | "the expanding gases push the bullet forwards and the gun backwards with equal and opposite forces, so the gun gets as much backward momentum as the bullet gets forward momentum" | Say it is an approximation, as the cannon example already does: "If we ignore the small mass of the gases, the gun gets (nearly) as much backward momentum as the bullet gets forward momentum." Drop "with equal and opposite forces", or say "with (nearly) equal forces". |
| 2 | warning | "Systems, internal and external forces", first paragraph: "The choice is ours, and a good choice makes a problem easy (reading 1, Sec. 10.3)" | Sec. 10.3 picks the cart as the system and then extends it to cart plus spring ("Let's extend our system…"). It does not say that a good choice makes a problem easy. | Attributes the claim to Sec. 10.3. | Cite Sec. 10.3 only for system and surroundings, and keep "a good choice makes a problem easy" as the page's own remark. Sec. 10.9.1 ("First you must identify the objects that compose the system…") is a better place to cite for choosing the system. |
| 3 | warning | "A recipe", five numbered steps, "The MIT notes give a strategy…" | Sec. 10.9.1 has four steps (Understand, Devise a Plan, Carry out, Look Back), with guidance on the system, external forces and impulse, positive directions, before and after diagrams, and checking units. | A five-step list presented as MIT's. | Write "Based on the MIT notes' strategy (reading 1, Sec. 10.9.1):". The content of the steps is supported. |
| 4 | warning | calcs `earth-mass` (and, by implication, the Earth paragraph on the page) | MIT Sec. 10.8 gives no value for the Earth's mass. MIT Example 10.2 (Sec. 10.5) has 5.98 × 10²⁴ kg. Lesson 2.11's calcs use 5.9722 × 10²⁴ kg from NASA. | calcs `earth-mass` cites `reading1` Sec. 10.8 for 5.97 × 10²⁴ kg. The page gives no source for the value. | In calcs, cite lesson 2.11's value (NASA Earth fact sheet), not Sec. 10.8. On the page, add "(lesson 2.11)" after the Earth's mass. |
| 5 | info | Two-object formula (`cite="mit"`, ESCJG) | Siyavula writes $m_1\vec v_{i1} + m_2\vec v_{i2} = m_1\vec v_{f1} + m_2\vec v_{f2}$ with vectors. MIT Eqs. (10.7.3)–(10.7.4) use the page's order of subscripts, $v_{1,i}$. | $m_1 v_{1,i} + \dots$ (signed components, MIT's subscript order), cited to Siyavula. | Optional: add "(Siyavula writes $v_{i1}$; the subscripts here follow the MIT notes, Eq. (10.7.3))". |
| 6 | info | "Total momentum of a system" Formula, `at="…definition box (written there as p_T)"` | In ESCJF the boxed statement is the law ("The total momentum of an isolated system is constant."). The formula $\vec p_T = \vec p_1 + \dots + \vec p_n$ is in the paragraph straight after it. | "definition box" | Change `at` to "Conservation of momentum (ESCJF), sum below the definition box". |
| 7 | info | Isolated system paragraph | Siyavula: an isolated system "is not subject to any force whose source is external to the system" and exchanges no matter. MIT: net external force zero (Eq. (10.7.1)). | Uses MIT's "net external force zero" and mentions only Siyavula's extra condition on matter. | Fine as written: the MIT form is the useful one. Optional: add that Siyavula's definition is stricter (no external forces at all). |
| 8 | info | Ball-plus-Earth paragraph | MIT Sec. 10.8 (non-isolated systems, Eq. (10.8.4), $\Delta\vec p_{\text{sys}} + \Delta\vec p_{\text{sur}} = 0$) supports this paragraph, and the calcs cite it there. | No citation on the page. The frontmatter `location` does not list Sec. 10.8 or Eq. (10.4.10), although the Formula `at` uses (10.4.10). | Add "(reading 1, Sec. 10.8)" to the paragraph, and add Sec. 10.8 and Eq. (10.4.10) to `readings[0].location`. |

## Formulas and citations
- **Momentum changes in an interaction**, `cite="mit"` at ESCJF, billiard-ball derivation: correct. Siyavula derives $\Delta\vec p_{B1} = -\Delta\vec p_{B2}$ and $\Delta\vec p_{B1} + \Delta\vec p_{B2} = 0$ from $F_{net} = \Delta p/\Delta t$ and the third law. The page's $\vec F_{AB}$ notation matches lesson 2.4 ($\vec F_{AB}$ = force of A on B), and $\Delta\vec p_B = \vec F_{AB}\Delta t$ uses it correctly.
- **Change in the total momentum of a system**, `cite="reading1"` at Eq. (10.9.2) and Eq. (10.4.10): correct. (10.9.2) is $\vec I = \vec F^{\text{ext}}\Delta t_{\text{int}} = \Delta\vec p_{\text{sys}}$ with the average external force, and (10.4.10) is the integral form. The page writes no integral and says "on average", which fits.
- **Total momentum of a system**, `cite="mit"` at ESCJF: the formula is there as $\vec p_T$, and the page says so. See row 6 for the `at` text.
- **Conservation of momentum** $\vec p_{\text{sys},i} = \vec p_{\text{sys},f}$, `cite="mit"` at ESCJG: correct (Siyavula writes $\vec p_{Ti} = \vec p_{Tf}$). The page also cites MIT Eq. (10.7.5), which is the same equation with this site's subscripts. Correct.
- **Two objects along a line**, `cite="mit"` at ESCJG: the equation is there (see row 5 for the notation).
- **Conservation of one component**, `cite="reading1"` at Sec. 10.9.1, Eq. (10.9.4): correct. MIT: "If there is no net external force in some direction… the component of momentum is constant in that direction".
- Prose citations checked: Eq. (10.3.1), the vector sum of external forces (for the cart example; fine as an illustration); Sec. 10.4, Eqs. (10.4.3)–(10.4.5), internal forces cancel in pairs (correct); Sec. 10.7, the isolated-system definition (correct); Sec. 10.9.1, short-interaction impulse (correct); Siyavula's spring-loaded trolley experiment in ESCJF (correct, described in the page's own words); Siyavula Worked example 9 (jet and missile) exists in ESCJG (correct).
- Notation matches lesson 3.6 ($\vec p = m\vec v$, $\Delta\vec p$, $\vec F_{\text{net}} = \Delta\vec p/\Delta t$, impulse = force × time). There is no derivative, $d\vec p/dt$ or integral anywhere on the page (checked with grep). g = 9.81 m/s² as on the site. No em dashes.

## Arithmetic and answer checks
I recomputed everything independently; all results agree with the page and the calcs file.
- Two trolleys: 0.50 × 2.0 + 0.80 × (−1.5) = 1.0 − 1.2 = −0.20 kg·m/s. ✓
- Carts: 1.2 × 0.60 = 0.72, v₁ = −0.72/0.80 = −0.90 m/s. Ratios 1.2/0.80 = 0.90/0.60 = 1.5. ✓
- Boat: 60 × 2.5 = 150, v = −150/140 = −1.071 → −1.1 m/s. Check 140 × 1.07 = 149.8 ≈ 150. ✓
- Cannon: 12 × 180 = 2160, v = −2160/1500 = −1.44 m/s. 180/1.44 = 125 = 1500/12. ✓
- Wagons: 2.0e4 × 3.0 = 6.0e4, v = 6.0e4/5.0e4 = 1.2 m/s, and (2/5) × 3.0 = 1.2. ✓
- Kinetic energies: ½ × 0.80 × 0.81 = 0.324 → 0.32 J; ½ × 1.2 × 0.36 = 0.216 → 0.22 J; total 0.540 J. ✓ Ball: ½ × 12 × 32 400 = 194 400 → 1.9e5 J. Cannon: ½ × 1500 × 2.0736 = 1555 → 1.6e3 J. Ratio 194 400/1555.2 = 125.0, equal to the mass ratio, as it must be for equal momenta. ✓ Wagons: 9.0e4 J before, 3.6e4 J after, 5.4e4 J lost = 60%. The lost fraction should be m₂/(m₁+m₂) = 3/5. ✓
- Falling ball: 0.50 × 9.81 × 1.0 = 4.905 → 4.9 kg·m/s. Earth: 4.905/5.9722e24 = 8.2e-25 → "about 8 × 10⁻²⁵ m/s". ✓
- Icy crossing: p_x = 1.2e4, p_y = 1.44e4; v_x = 4.0, v_y = 4.8 m/s; speed √39.04 = 6.248 → 6.2 m/s; angle atan(1.2) = 50.2° → 50°; |p| = √3.5136e8 = 1.874e4 → 1.9e4; 3000 × 6.25 = 1.875e4. ✓ (Info: the check uses 6.25 after the step rounded to 6.2. Either write "3000 × 6.248" or say "with the unrounded speed 6.25 m/s".) "A little closer to north" is right: 50° > 45°, and p_y > p_x.
- VectorDiagram: (12, 0), then (0, 14.4) from (12, 0); the resultant (12, 14.4) matches the example in thousands of kg·m/s. Extent [−3, 22, −2, 17] contains the tip. Info: the labels $\vec p_1$, $\vec p_2$ are not tied to "car" and "van" anywhere in the text. The caption could say "$\vec p_1$ the car's, $\vec p_2$ the van's".
- Quiz 1: answer 0 is right (internal); gravity, normal force and air drag are external. ✓
- Quiz 2: 50 × 1.5 + 75v = 0 gives v = −1.0 m/s; answer 0 is right. 2.25 is the swapped-mass result (75 × 1.5/50). 1.5 m/s and "same direction" are wrong. ✓
- Quiz 3: 1.2/0.60 = 2.0 m/s; answer 2 is right. ✓
- Quiz 4: answer 0 is right; the explanation (total energy conserved, kinetic energy not) is true. ✓
- Quiz 5: answer 0 is right and agrees with MIT Sec. 10.9.1; the distractors are false. ✓
- Flashcards: all five are true.
- Calcs file: every number on the page has an entry. Info: `quiz-trolleys-v` has `quiz: 2`, but `quiz-skateboards` has no `quiz: 1`. Add it for consistency. Calcs not run (`npm run calc:test` was not run on this machine, by instruction).

## Only earlier terms
- System, surroundings, internal and external force, isolated system: defined on the page before use. ✓
- Momentum, impulse, force–time graph area (3.6, prerequisite); the third law and $\vec F_{AB}$ (2.4, prerequisite); kinetic energy (3.2, prerequisite); total energy, elastic energy of a spring (3.3 and 3.4, via conservation-of-energy); components and tan⁻¹ (0.7, 0.8, prerequisite introducing-vectors); drag and friction (2.6, reached through conservation-of-energy's prerequisites); frame of reference in the callout (1.9, reached through 3.6's prerequisites). ✓
- No "derivative", $d\vec p/dt$ or integral. ✓
- Forward references to lessons 3.8 (collisions) and 3.9 (rockets): both are planned in the block's lesson list (hs-3 `_course.json`, §4 rows 3.8 and 3.9), so they are fine as "coming" references.
- "Elastic" and "inelastic" are named only in the forward reference to 3.8, with a one-line meaning. ✓ The "Try it" text uses the simulation's "elasticity" slider, which is not explained (info: add "(how bouncy the collision is; 3.8 explains it)").

## Coverage
- §4 row 3.7 (conservation of momentum, leads to `8-01/conservation-of-momentum`): covered at VWO level. It covers the system idea, why internal forces cancel, the law, 1D recoil and sticking-together problems, kinetic energy not conserved, external impulse during short events, and 2D by components.
- Siyavula 2.4's elastic and inelastic collisions (ESCJH, ESCJJ) are left to lesson 3.8, as planned. Newton's cradle is not mentioned; that does not matter.
- Centre of mass (MIT Secs. 10.5–10.6) is not covered. At VWO level this is not needed for this lesson. Info only.

## Where this leads
- `8.01` Lecture 16: content/year-1/8.01/conservation-of-momentum.mdx exists and states the same law, component by component, with momentum diagrams for collisions and explosions. The `why` is accurate. ✓
- `8.286` Lecture 15: content/year-4/8.286/mass-energy-and-radiation.mdx (Lecture 15) says that Newton's energy and momentum, conserved in one frame, are not conserved in another under Lorentz transformations, so both were redefined. The `why` and the cosmology callout match it. The callout's physics (relativistic momentum reduces to mv at low speed; it is used for light and fast particles) is correct. ✓
- `towards: false` is correct (3.12 is the block's last lesson).

## Licensing and AI terms
- Siyavula 2.4 is CC BY 3.0 (footer, tsv line 515) and credits no third party; MIT Ch. 10 carries no excluded material. No forbidden source is cited or used. Siyavula 5.3 and 5.4 were not opened.
- No copied sentences found. The italic law "the total momentum of an isolated system is constant" is word for word Siyavula's definition box (and MIT's sense). It is a standard statement of the law, so this is acceptable (info). "Treating a system as isolated is a choice we make…" echoes Siyavula's "It is a choice we make to treat objects as an isolated system" in idea only.
- Worked examples and quiz items are the page's own. None matches Siyavula's Worked examples 7–14 or Textbook Exercises 2.3–2.4 (billiard and golf balls, motorcycles, truck and car, toy car and train, jet and missile, bullet and block, 500 kg cars, 4500 kg truck), or MIT Examples 10.5 and 10.6. The spring-loaded carts follow Siyavula's experiment idea, which the page acknowledges. Info: the icy-crossing masses (1200 kg car, 1800 kg van) are the same as in the site's own 8.01 conservation-of-momentum quiz (different speeds). This is not a licensing issue.
- No Siyavula logo or "Everything Science" branding; Siyavula is named only as a source. No NASA material. No ESO text.
- The figure (VectorDiagram) is generated from numbers. The PhET embed uses the standard component with `phet: collision-lab`; the pinned file is in `public/phet/manifest.json`, and the attribution is printed by `components/PhET.tsx`.

## Notes
- PhET "Try it": checked against the code of the pinned collision-lab 1.1.25 (the simulation was not run). The screens are Intro, Explore 1D, Explore 2D and Inelastic. The Intro control panel has the elasticity control (default on) and a "Change in Momentum" checkbox. The Momenta Diagram, which shows the total momentum, is built in the shared screen view, so it is on the Intro screen too. The Inelastic screen has the Stick/Slip switch. The text's claims hold. Suggestion (info): name the **Momenta Diagram** and the **Change in Momentum** checkbox. The latter shows the two equal and opposite Δp arrows of the "Why the total momentum cannot change" section.
- The §4 row for 3.7 lists no PhET; §3.5 assigns collision-lab to 3.7 as an extra, and 3.8 also lists it. That is consistent.
- `content:check`, `calc:test` and the symbol check were not run (low-memory machine, by instruction).
- The page is otherwise clear and correct. Fixing row 1 (one sentence) removes the only error.

## Resolution (2026-11-20, by the page author)
1. (error) Recoil paragraph rewritten: no "equal and opposite forces"; it now says the gases also carry forward momentum, so strictly the gun's backward momentum equals that of bullet plus gases, and that ignoring the small mass of the gases (as the cannon example does) the gun gets (nearly) as much backward momentum as the bullet.
2. Sec. 10.3 is now cited only for system and surroundings; "a good choice makes a problem easy" is the page's own remark, followed by "the MIT notes make choosing the system the first step of every problem (reading 1, Sec. 10.9.1)".
3. Recipe introduced as "Based on the MIT notes' problem-solving strategy (reading 1, Sec. 10.9.1), these steps work…".
4. NASA Earth Fact Sheet added as reference `earthfact` (as in lesson 2.11); the page now says "(lesson 2.11; NASA, Earth Fact Sheet)" after the Earth's mass. Calcs `earth-mass` cites `earthfact` (Bulk parameters, 5.9722 × 10²⁴ kg rounded to three figures), origin `later-data`, as lesson 2.11's entry.
5. Added a bracketed note after the two-object formula: Siyavula writes the subscripts the other way round; the order follows MIT Eq. (10.7.3). Written in words, not as $v_{i1}$, to avoid a new symbol entry. Notation of the page unchanged.
6. `at` changed to "Conservation of momentum (ESCJF), sum below the definition box (written there as p_T)".
7. The isolated-system paragraph now says Siyavula's definition is stricter (no external force at all, no exchange of matter) and that the page uses the MIT form.
8. "(reading 1, Sec. 10.8)" added to the ball-plus-Earth paragraph; `readings[0].location` now lists Sec. 10.4, Eq. (10.4.10) and Sec. 10.8, Eq. (10.8.4).
Info items: the icy-crossing check now says "with the unrounded speed of 6.25 m/s"; the VectorDiagram caption ties the first arrow to the car and the second to the van; the "Try it" text names the Momenta Diagram and the Change in Momentum checkbox and explains elasticity in brackets. Not done: `quiz: 1` on `quiz-skateboards`, because the calc test matches choice numbers by value and the answer −1.0 m/s appears as "1.0" in both choices 0 and 3 (the opposite-direction distractor), so the quiz check cannot single out the answer; the entry still recomputes the value. Centre of mass and Newton's cradle stay out (info only).
Checks: `pytest tests/calc -k momentum-is-conserved` 41 passed; `content:check` reports no error for this page.
