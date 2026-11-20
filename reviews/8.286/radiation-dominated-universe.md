---
page: content/year-4/8.286/radiation-dominated-universe.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-16-black-body-radiation-and-the-early-history-of-the-universe-part-ii/ (not opened directly; the transcript and slides it links were read from local copies)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/20c456df533b6f63151a28bfe9df60eb_6b83DypBeYg.pdf (read from a local copy split by PDF page, t16.pdf / p16.txt. Pages 1–17 read in full. The printed footers on pp. 5, 11, 13 and 15 were checked with pdftotext and equal the PDF page numbers.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec16/ (read from a local copy, s16.pdf / s16.txt, all 8 slides: a summary of Lecture 15)
  - Lecture 17 transcript (local copy, t17.pdf / t17.txt). Used only for the forward-looking temperature–time claim.
  - content/year-4/8.286/_course.json (lecture titles). Used for the Lecture 18 claim. The Lecture 18 transcript was not read.
  - content/year-4/8.286/black-body-radiation.mdx (the "next page"). Used to check what that page actually contains.
verdict: pass-with-notes
---

# Review: The radiation-dominated universe

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, step "What is not used", and the cosmology callout | Lecture 16 does not turn the density into a temperature. Guth does it at the start of Lecture 17: transcript p. 17 gives "a formula for the temperature as a function of time" (kT = 0.860 MeV/√t, about 10¹⁰ K/√t). The `black-body-radiation` page gives u = g(π²/30)(kT)⁴/(ħc)³ but does not derive T(t). | "The black-body formulas on the next page turn the same density into a temperature." / "combined with the black-body formula u ∝ T⁴ of the next page, gives the temperature of the early universe as a function of time." | The physics is right, but a reader will look for T(t) on the next page and not find it. Suggested wording: "Combined with the black-body formula of the next page, this gives the temperature as a function of time, which Guth works out in Lecture 17." You could also add a `leadsTo` entry for Lecture 17. |
| 2 | info | Cosmology callout and `leadsTo`: "The negative-pressure material … returns with the cosmological constant, from Lecture 18 on." | The Lecture 18 title in `_course.json` is "Cosmic Microwave Background Spectrum and the Cosmological Constant, Part I". Lecture 16 p. 12 says dark energy is "very likely just vacuum energy … we'll come back to that later in the course". | Lecture 18 | This is consistent with the title. The Lecture 18 transcript was not read, so the claim that Lecture 18 itself presents the cosmological constant as negative-pressure vacuum energy is **unverified** (but very likely). No change needed. |
| 3 | info | Plot caption: "decelerates the expansion more strongly: H = 1/(2t) instead of 2/(3t)" | Not in MIT (the plot is the page's own). | The H values are given as the evidence for stronger deceleration. | Correct, but H alone does not show deceleration. A clearer quantity: q = −aä/ȧ² is 1 for radiation and 1/2 for matter. With both curves scaled to a = 1 at t = 1, ä(1) = −1/4 vs −2/9, so the statement holds on the plot. Optional rewording. |
| 4 | info | Summary bullet 2: "In the radiation era it doubles the deceleration" | p. 11: "this pressure term is the same size exactly as the mass density term". | "doubles the deceleration" | Correct only in the sense "compared with pressureless matter of the same density". Optional: "doubles the gravitational effect of the same density". |
| 5 | info | Summary bullet 3: "the energy lost by an expanding gas ends up as gravitational potential energy" | pp. 12–13: Guth hedges ("I think the answer is that it ends up in gravitational potential energy"). | Stated as fact in the summary; the body attributes it as "Guth's answer". | The body is fine. Optional: "Guth's answer: …" in the summary too. |
| 6 | info | Section "Neutrinos and other radiation": |p|² − E²/c² = −(m₀c)² | This equation is on slide 2 ("Lorentz-invariant square of p^µ"); on p. 5 Guth refers to it as "this equation". | Inline, no location. | Optional: add "(slide 2)". Inline maths need no `<Formula>`. |

### Formula and citation check
- Second Friedmann equation, `reading2`, "slide 8": **correct**. It is at the bottom of slide 8 ("Solution: ä = −(4π/3)G(ρ + 3p/c²)a"). Guth refers to it as "the equation at the bottom of the screen" on p. 10.
- H ∝ 1/a² ⇒ ȧ = const/a ⇒ a da = const dt, `reading1`, "pp. 13–14 (board)": **correct**. Guth goes to the blackboard on p. 13 ("let us continue on the blackboard"). H² = (8π/3)Gρ and "H squared is proportional to 1/a to the fourth" are on p. 13. "H itself is proportional to 1/a squared", ȧ = const/a and a da = const dt are on p. 14.
- a(t) ∝ t^{1/2}, "p. 14 (board)": **correct**. ½a² = const·t + const′ and the clock-setting argument are also on p. 14.
- H = 1/(2t), "p. 15 (board)": **correct**.
- ℓ_p,horizon = a∫c/a dt′ = 2ct, "p. 15 (board)": **correct**. The comparisons ct (static) and 3ct (matter-dominated) are also on p. 15.
- ρ = 3/(32πGt²), "p. 15 (board)": **correct**. The ρ formula is said at the bottom of p. 15. The remark that flatness is crucial is on p. 16.

### Claims checked against the transcript
- Review on slides: p. 1 ("This time on slides instead of on the blackboard"). Correct.
- Neutrinos as radiation, including electron–positron pairs at early enough times and "any particle will act like radiation as long as the energy is large compared to the rest energy": p. 5. The citation "transcript p. 5" is correct.
- "exact as far as we know" for homogeneous, isotropic universes, and "exactly what you would get from general relativity": p. 10. Correct.
- The dU = T dS − p dV question and the adiabatic answer: pp. 10–11. Correct.
- Pressure as a source of gravity, 3p/c² = ρ in the radiation era, today's pressure of ordinary matter negligible, energy densities positive and pressures possibly negative: p. 11. Correct.
- No mechanical effect of uniform pressure (air pressure in the room), and the effect being gravitational because it carries G: p. 12. Correct.
- Acceleration "for the last five billion years or so", "the only explanation we have" is negative-pressure material, dark energy "very likely just vacuum energy": p. 12. Correct and fairly attributed.
- Where the energy goes (walls, neighbouring regions, gravitational potential energy): pp. 12–13. The citation "pp. 12–13" is correct.
- The constant of proportionality has no meaning and fixes the notch: pp. 14–15. Correct.
- The density does not depend on the kind of radiation, and flatness is crucial: pp. 15–16. The "almost flat" question is on p. 16. Correct.

## Arithmetic and answer checks
These were recomputed with a Python script, using G = 6.674e-11, c = 2.998e8 m/s, AU = 1.496e11 m, ly = 9.461e15 m and Earth–Moon distance = 3.844e8 m.
- t = 1 s: ρ = 4.471e8 kg/m³, which is 447 times the density of water ("about 450": OK). 2ct = 5.996e8 m, which is 6.0e8 m ("about one and a half times the Earth–Moon distance": 1.56, OK).
- t = 180 s: ρ = 1.380e4 kg/m³ ("almost 14 times water": 13.8, OK). 4.47e8/180² = 1.3796e4 (OK). 2ct = 1.079e11 m = 0.72 AU (OK).
- t = 3.156e7 s: ρ = 4.489e-7 kg/m³ (OK). 2ct = 1.892e16 m = 2.00 ly (OK).
- Physical validity: all three times are well before matter–radiation equality (about 75,000 yr on slide 6), so the radiation-dominated, flat treatment is appropriate.
- Horizon integral: a ∝ t^{1/2} gives t^{1/2}·∫₀ᵗ t′^{-1/2} dt′ = t^{1/2}·2t^{1/2} = 2t, so ℓ = 2ct (OK).
- Plot: the curves sqrt(x), x^(2/3) and x all equal 1 at t = 1, as the caption says. On the domain [0, 4] the largest values are 2, 2.52 and 4. The range of 2.6 clips only the "no gravity" line, which is acceptable.
- Quiz 1: answer 1 (repulsion and acceleration). Correct.
- Quiz 2: answer 1 (only pressure differences have a mechanical effect). Correct, as on p. 12.
- Quiz 3: answer 1 (t^{1/2}). Correct. The explanation is correct: H ∝ 1/a² gives aȧ = const, so a² ∝ t.
- Quiz 4: answer 1 (2ct). Correct, and the parenthetical 3ct for matter is correct.
- Quiz 5: answer 1 (4.5e8 kg/m³). Correct.
- Flashcards: all four are correct.

## Coverage and order
- The page covers transcript pp. 1–16. Its order is: neutrinos (p. 5), then the ä equation and the adiabatic question (pp. 10–11), pressure gravitates and negative pressure (pp. 11–12), where the energy goes (pp. 12–13), and the flat radiation-dominated universe (pp. 13–16). This follows MIT's order.
- Left out: the rest of the Lecture 15 review on pp. 1–9. That covers E = mc² examples, four-momentum, the hydrogen atom, ρ ∝ 1/a⁴, equality at about 75,000 yr, ρ̇ = −3(ȧ/a)(ρ + p/c²), and the continuity argument for why only the ä equation may contain p. The page acknowledges this with "begins with a review of Lecture 15", and all of this material is on the Lecture 15 pages (`mass-energy-and-radiation`, `matter-radiation-equality`; the TNT/consistency argument is in `matter-radiation-equality`). This is acceptable. Optionally, add one sentence pointing to `matter-radiation-equality` for why p appears only in the ä equation.
- pp. 16 onward (black-body radiation) are on `black-body-radiation`, which is out of scope here.
- Added material: the worked example and the plot are original to the page, and both are labelled as computed.

## Licensing
- `grep -il "rights reserved\|courtesy"` finds nothing in either the transcript or the slides text. No third-party material is used.
- No verbatim copying of paragraphs was found. Short phrases such as "standard way of setting the clocks" and "pushes equally in all directions" are paraphrases or standard terms.
- The worked example (1 s, 3 min, 1 yr) is original. MIT gives only the general formula here, and Lecture 17's 1-second example is about temperature, not density or horizon.
- There is no OpenStax or LibreTexts material, and `references` is empty.

## Notes
- No errors were found. All formula citations, page numbers, numbers and quiz answers are correct.
- The main recommended fix is #1: the "next page" T(t) wording. That derivation is in Lecture 17 (transcript p. 17), not on `black-body-radiation`.
- The Lecture 18 forward claim (#2) is supported only by the course title. The Lecture 18 transcript was not checked.

## Resolution (2026-11-14, by the page author)

- Warning 1: the worked example and the cosmology callout now say that Guth works out T(t) in Lecture 17. Added a `leadsTo` entry for Lecture 17.
- Info 2: kept "from Lecture 18 on", which rests on the lecture title in `_course.json`.
- Info 3: left the caption as is; the statement holds on the plot.
- Info 4: the summary now says the deceleration doubles "compared with pressureless matter of the same density".
- Info 5: the summary now hedges, saying "Guth suggests" for the gravitational potential energy point.
- Info 6: added "(slide 2)" after the four-momentum relation.

## Correction (2026-11-15, found by the calculation tests)

The calculation tests (`calcs/8.286/radiation-dominated-universe.yaml`, entry `water-ratio-1s`) found that the worked example and the explanation of quiz 5 called the density one second after the Big Bang, 4.47 × 10⁸ kg/m³, "about 450 times the density of water". Water is 1,000 kg/m³, so the ratio is about 450,000. Both places now say "about 450,000 times". The three-minute comparison ("almost 14 times water") was already right and is now checked too.
