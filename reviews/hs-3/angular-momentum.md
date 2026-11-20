---
page: content/year-0/hs-3/angular-momentum.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter19/ (read; PDF mit8_01scs22_chapter19.pdf downloaded to a scratch folder outside the repo and converted with pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter16/ (read; PDF mit8_01scs22_chapter16.pdf, Sec. 16.3.1, 16.3.2, Example 16.2)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter25new/ (read; PDF mit8_01scs22_chapter25new.pdf, Sec. 25.3, 25.6.2, Example 25.1)
  - https://imagine.gsfc.nasa.gov/science/objects/neutron_stars1.html (read, through a page-reading tool that returns quotes)
  - content/year-1/8.01/angular-momentum-point-particle.mdx and content/year-5/8.902/stability-jeans-toomre.mdx (this site's leadsTo targets)
  - Earlier High School lessons named in `prerequisites` (bodies read for the terms they introduce)
verdict: pass-with-notes
---

# Review: Rotation and angular momentum (Lesson 3.10)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Moving and turning side by side", last paragraph | Sec. 19.1: "We now introduce the rotational analog of Equation (19.1.1)", where (19.1.1) is F_ext = dp_sys/dt. So the phrase "rotational analog" there is about τ = dL/dt, not about L itself. The chapter does not build on a table with mass/moment of inertia or the two kinetic energies (those are in Ch. 16) | "The MIT course notes build the chapter on angular momentum on exactly this comparison, calling angular momentum the 'rotational analog' of momentum (Sec. 19.1)" | E.g. "The MIT notes open the chapter with the rotational analog of F = Δp/Δt: a torque changes the angular momentum (Sec. 19.1); Sec. 19.5 calls angular impulse the rotational analog of impulse." Drop "exactly this comparison" |
| 2 | warning | "Conservation of angular momentum", 1st paragraph | Sec. 19.6, Eq. (19.5.7): internal torques cancel **when the internal forces are directed along the line joining the two objects** (shown in Ch. 17.4); Sec. 19.8 then says this assumption can be taken as an experimental observation | "The forces between the parts of a system come in third-law pairs (lesson 2.4), and their torques cancel in pairs just as their impulses do in lesson 3.7." Third-law pairs alone (equal and opposite) do not make the torques cancel; they must also act along one line | Add "and each pair acts along the line joining the two parts, so the two forces have the same lever arm" before "their torques cancel in pairs" |
| 3 | warning | Coverage (whole page) | Ch. 19 Eqs. (19.1.6), (19.5.29): τ = Iα for fixed-axis rotation; the lesson title is "Rotation and angular momentum" | Angular acceleration and τ = Iα are not stated; only ΔL = τΔt and "a torque makes it spin faster or slower" | Optional: one sentence after the angular-impulse formula: with I fixed, ΔL = I Δω, so τ = I Δω/Δt (MIT Eq. (19.1.6)), the rotating version of F = ma. The roundabout example already does this implicitly |
| 4 | info | Moment-of-inertia table, disc row | Example 16.2: a **thin** uniform disc | "uniform disc or solid cylinder" | Correct physics (I does not depend on the thickness), but the cylinder is not in the source; "(the same for any thickness)" would make the step explicit |
| 5 | info | Kepler section and comet example | Sec. 25.3 and Example 25.1 work with the reduced mass μ, set ≈ m_s because m_s ≪ m_p | Uses the planet's (comet's) mass m | Fine at this level; nothing needed |
| 6 | info | Callout, "A cloud of gas in space always turns a little" | No cited source | "always" | Standard and essentially correct; "practically always" or "every real cloud turns a little" is safer |
| 7 | info | Callout, neutron-star spin | The NASA page gives core collapse, about 20 km across, pulsars as rotating neutron stars with pulses from milliseconds to seconds; it says nothing about angular momentum or spin-up | "it is left spinning fast", and the 10⁶ estimate | Correct, standard and hedged ("As a simple estimate, if a ball kept its shape…"); the spin-up reasoning is the page's own, which the wording already makes clear |

## Formulas and citations
All formula `at` locations checked against the PDFs:
- `L = m v r`, cite mit, "Example 19.2 (… Rmv …); Sec. 19.2.1, Eq. (19.2.4)": correct. Example 19.2 writes L_S = Rmv k̂ = mR²ω_z k̂; Eq. (19.2.4) is L = r⊥ p.
- `L = m r² ω`, Example 19.2 result mR²ω_z: correct.
- Unit kg·m²/s "below Eq. (19.2.1)": correct ([kg·m²·s⁻¹] = [N·m·s] = [J·s]).
- Moment arm, Eqs. (19.2.3) and (19.2.4); Example 19.1 (straight-line motion has L about a point off the path): correct.
- Direction by right-hand rule, Sec. 19.2.2: correct.
- `I = Σ m r²`, "Sec. 19.7, Eqs. (19.5.24) and (19.5.26) (written there as an integral)": correct. (19.5.24) is the sum Σ Δm_j (r⊥,j)² ω_z for L_z, (19.5.26) the integral for I. The notes number the equations of Sec. 19.7 and 19.8 as (19.5.x), as the caller said; the page's citations follow the printed numbers.
- Unit kg·m² (reading 1, Sec. 16.3.1): correct (below Eq. (16.2.3)).
- `L = I ω`, Eq. (19.5.27) and Eq. (19.1.5): correct (both are z-components; the page's sign convention for the sense of turning replaces the z-component, and says so).
- Ring MR², Eq. (19.5.31); disc ½MR², Eq. (16.2.11); rod (1/12)Mℓ², Sec. 16.3.2, Eq. (16.2.5); point mass mr², Example 19.2: all correct.
- `E_k = ½ I ω²`, reading 1, Sec. 16.3.1, Eq. (16.2.4), "written there for an axis through the centre of mass": correct, and the derivation in the text follows Eqs. (16.2.1)–(16.2.2) correctly. The page uses it for fixed axes through the centre (wheel, disc, skater), where it holds.
- `ΔL = τ Δt`, "Sec. 19.5, Eq. (19.4.2)": correct (the notes number Sec. 19.5's equations 19.4.x); the constant-torque reduction is stated on the page.
- τ = ΔL/Δt, "Sec. 19.3, Eq. (19.3.9), written there for one instant": correct; the page avoids d/dt.
- `L_i = L_f`, Sec. 19.8, Eqs. (19.5.35) and (19.5.36): correct. The "no isolated system has been found…" remark is in Sec. 19.8 (just after Eq. (19.5.36)): correctly paraphrased.
- `I_i ω_i = I_f ω_f`, marked as the page's own step: fine. Ch. 19 derives L = Iω for a rigid body; using it at each moment for a body that changes shape (skater) is standard and correct.
- Meteor flyby, Sec. 19.4, Example 19.4: correct (Example 19.4 is printed inside Sec. 19.4).
- Central force has no torque, orbit lies in a plane, Sec. 25.3: correct.
- `m r_p v_p = m r_a v_a`, reading 2, Example 25.1, Eq. (25.6.2): correct (written there with m_s).
- Area law, Sec. 25.6.2, Eqs. (25.5.4)–(25.5.6) (dA/dt = L/2μ): correct; the page's L/(2m) is the same with μ ≈ m.
- NASA, Imagine the Universe!: Neutron Stars: "formed when a massive star runs out of fuel and collapses" (core collapse), "about 20 kilometers (12.5 miles) across", "Pulsars are rotating neutron stars observed to have pulses of radiation at very regular intervals that typically range from milliseconds to seconds". The page's three uses are supported. Cited by title, no "according to NASA".
- Sources are all from §2.0 (MIT OCW, NASA). No forbidden source is cited or named on the page or in the calcs file. No Siyavula page is cited; that matches the topic (I did not check whether Siyavula Gr 10–12 has a rotation chapter; I believe the CAPS syllabus has none, but this is unverified).

## Arithmetic and answer checks
Recomputed independently (Python, own script):
- Stone: ω = 2π·2.0 = 12.566 rad/s; v = 6.283 m/s; L = 0.15·6.283·0.50 = 0.4712 → 0.47 kg·m²/s; m r² ω = 0.4712. Correct.
- Rod: I = 2·2.0·0.30² = 0.36; L = 1.44 → "≈ 1.4"; I at 0.15 m = 0.090 (a quarter); v = 1.2 m/s, mvr = 0.72, sum 1.44. Correct.
- Potter's wheel: I = 0.10 kg·m²; ω = 9.425; L = 0.9425 → 0.94; E = 4.441 → 4.4 J; ½·0.942·9.42 = 4.44. Correct.
- Roundabout: τ = 75 N·m; ΔL = 300 kg·m²/s; ω = 1.25 → "≈ 1.3" rad/s; period 2π/1.25 = 5.03 s ("about one turn every 5 s"); edge v = 1.875 → 1.9 m/s. Correct.
- Skater: ω_i = 9.425; L = 33.93 → 34 (and 33.9); ω_f = 28.27 → 28.3 rad/s, 4.5 turns/s; E_i = 159.9 → 160 J; E_f = 479.7 → 480 J; gain 320 J; L²/(2I_f) = 479.7 J, consistent with the "formula" paragraph. Correct.
- Comet: v_a = 54·9.0e10/4.5e12 = 1.08 km/s; ratio 50; r v = 4.86e15 m²/s. Correct. Physical check by vis-viva with GM_Sun = 1.327e20 m³/s²: an orbit with these r_p and r_a has v_p = 53.8 km/s (escape speed at r_p is 54.3 km/s), so 54 km/s is consistent to two figures and the orbit is bound.
- Quiz 1: kg·m²/s; distractors correctly identified (momentum, torque, moment of inertia). Correct.
- Quiz 2: 0.50·3.0·0.40 = 0.60; distractors 0.24 (r²), 1.5 (no r), 1.8 (v²) all reproduce. Correct.
- Quiz 3: I/3 → ω×3, E_k×3. Choice 0 right; "same KE", "9× as fast", "9× KE" all wrong. Explanation true.
- Quiz 4: hoop MR² vs disc ½MR² → hoop, twice. Correct; other choices wrong.
- Quiz 5: 40/4 = 10 km/s; 2.5, 20, 160 explained. Correct. (Physically consistent too: 1600 − 100 = 2GM(1/r_p − 1/r_a) gives r_p ≈ 0.89 AU.)
- Callout: 1000² = 10⁶. Correct.
- `calc:test` restricted to this page (`pytest tests/calc -k angular_momentum`) passed. Every number on the page is in the calcs file; only the ratio "a quarter of the moment of inertia" (0.090/0.36) and "four times as much" for twice the distance have no own entry (trivial; info).
- Calcs file, `roundabout-torque`: `source: {cite: mit, at: '… torque as in Ch. 17, Sec. 17.3.1 …'}`. `mit` is the Ch. 19 URL, so "Ch. 17" points outside the cited document (info; drop the Ch. 17 part or cite lesson 2.10's source).

## Only earlier terms
Checked in the bodies of the prerequisite lessons:
- "integral": introduced in lesson 0.10 (`rates-of-change-and-area`, body: "In the limit of infinitely thin strips the estimate becomes exact: that limit is what calculus calls an **integral**"). OK, and the page restates it.
- ω, rad/s, v = ωr, turns per second: lesson 1.10. OK.
- Torque, lever arm, τ = rF, signs for clockwise/anticlockwise, Σ (in ΣF = 0, Στ = 0): lesson 2.10. OK. Σ is also explained on this page.
- Ellipse, perihelion, aphelion, v⊥, ΔA = ½ r v⊥ Δt, r_p v_p = r_a v_a, and the promise ("You will meet angular momentum properly…"; "MIT notes make this step in Sec. 25.3"): lesson 2.12. OK.
- Third-law pairs (2.4), inward force for circles (2.9), work (3.1), E_k = ½mv² (3.2), chemical energy (3.4), momentum and Δp = FΔt (3.6), system / external / spring-pushed carts gaining kinetic energy (3.7): all present. OK.
- No derivative, no dp/dt, no d/dt in the text: confirmed. "Rate of change" is from 0.10.
- Lesson 3.11 is named only in text ("Lesson 3.11 returns to orbits…"), not as a prerequisite. OK.
- Milky Way: lesson 1.10's callout. OK.
- "neutron star", "pulsar", "massive star", "core": first use, inside the callout, each explained in the sentence (collapsed core of a massive star, ~20 km across; pulsars are rotating neutron stars). Acceptable for a callout (info).
- "heat" (her muscles): lesson 3.4 says "thermal energy"; "heat" is everyday language here (info; "thermal energy" would match 3.4).
- Vector and right-hand rule: mentioned only as a university topic. OK.

## Coverage
- §4 row 3.10: "Rotation and angular momentum", no PhET (none was assigned in §3.5 either), leads to `8-01/angular-momentum-point-particle`. The page covers L for a point mass (incl. lever arm and straight-line motion), moment of inertia with standard shapes, L = Iω, rotational kinetic energy, angular impulse, conservation with the skater, and Kepler's second law. At VWO level this is complete for angular momentum.
- Missing: angular acceleration and τ = Iα (row 3 above). Not essential for the block's goal (cosmology), but the lesson title says "Rotation". Parallel-axis theorem and rolling are rightly left out.

## Where this leads
- 8.01 Lecture 32 → `content/year-1/8.01/angular-momentum-point-particle.mdx` exists (lecture 32): L = r × p, any point, straight-line motion, L = mr²ω for circular motion. The `why` matches.
- 8.902 Lecture 7 → `content/year-5/8.902/stability-jeans-toomre.mdx` exists (lecture 7): a contracting patch spins up "like a skater pulling in her arms" (its eq. (208)) and rotation stabilizes large scales. The `why` and the callout's last sentence match.
- `towards: false` is right: the block's last lesson is 3.12.

## Licensing and AI terms
- No copied sentences found. Closest wording: page "no isolated system has ever been found whose angular momentum changes" vs MIT "So far no isolated system has been encountered such that the angular momentum is not constant" (paraphrase, attributed); page "pulsars, which are rotating neutron stars, send out pulses at intervals from milliseconds to seconds" vs NASA "Pulsars are rotating neutron stars observed to have pulses of radiation at very regular intervals that typically range from milliseconds to seconds" (short factual paraphrase of a US public-domain page, cited by title: fine).
- No figures: the page has no diagrams. Worked examples and quiz questions are the page's own: none uses MIT's numbers (Example 19.1's 2.0 kg at 3.0 m/s through (2.0 m, 3.0 m); Examples 19.2–19.8, 16.1–16.5 and 25.1 are symbolic or different situations). The Kleppner epigraph of Ch. 19 (a quotation from a copyrighted book) is not used.
- The three MIT PDFs contain no "All rights reserved", "Courtesy" or "excluded from our Creative Commons license" notice (grep).
- NASA: cited by title, no insignia, no "according to NASA". No ESO text, so no AI note needed. No Siyavula branding. No forbidden source.

## Notes
- The physics the writer marked as not in the sources is correct and suitably hedged: the skater's extra energy from muscle work (correct: with arms moving inward against the needed inward force, the muscles do positive work equal to ΔE_k; the loss on letting go ends mostly as thermal energy in the muscles); E_k = L²/(2I) (algebra checked); disc formation (spin resists collapse in the plane, not along the axis; "Astronomers think", "are thought to"); pulsar spin-up (labelled a simple estimate). One small imprecision: "the skater must pull harder than that" is only needed to start the arms moving inward; for a slow pull the force is just about the needed inward force. Not wrong enough to change.
- Skater numbers (I from 3.6 to 1.2 kg·m², 1.5 to 4.5 turns/s) are on the large side for arms alone, but "about" covers it (uncertain; I did not check measured values).
- I did not run `content:check` or a build (machine memory limit); symbol meanings for this page (E_k, I, L, τ, ω, Σ, v⊥, r_p, r_a) were not checked.

## Resolution (2026-11-20, by the page author)
1. "Moving and turning side by side": the sentence now says the MIT notes open the chapter with the rotational partner of "a force changes momentum", namely that a torque changes the angular momentum (Sec. 19.1), and that Sec. 19.5 calls angular impulse the "rotational analog" of impulse. "Exactly this comparison" is gone.
2. "Conservation of angular momentum": added that each third-law pair acts along the line joining the two parts, so the two forces have the same lever arm, before "their torques cancel in pairs"; the citation is now "(Sec. 19.6, Sec. 19.8)".
3. Added a short paragraph and Formula after the angular-impulse paragraph: for a body with fixed I, ΔL = IΔω, so τ = I Δω/Δt, with Δω/Δt named the angular acceleration (rad/s²) and described in words as the rotating version of Newton's second law. Cited to MIT Sec. 19.1, Eq. (19.1.6) ("written there as τ = Iα … here the torque is constant"). The symbol α is not introduced and F = ma is said in words, so the page needs no new symbol meanings.
4. Disc row now reads "uniform disc or solid cylinder (the same for any thickness)".
5. No change (reduced mass ≈ planet mass is fine at this level).
6. Callout now says "Every real cloud of gas in space turns at least a little."
7. No change (the estimate is labelled as the page's own).
Other notes: "heat" in the skater paragraph is now "thermal energy (lesson 3.4)"; "must pull harder than that" is now "must pull at least that hard (a little harder to start them moving)"; calcs `roundabout-torque` no longer points to Ch. 17 (now "with the torque of a force at right angles to the radius"). Checks: `pytest tests/calc -k angular_momentum` 120 passed; `content:check` 0 errors, nothing reported for this page.
