---
page: content/year-0/hs-7/photoelectric-effect.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/optical-phenomena-and-properties-of-matter/12-optical-phenomena-and-properties-of-matter-02 (read; CCBY row 521 in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes3/ (PDF read, Sec. 1, pp. 1–2)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/the-photoelectric-effect/ (transcript PDF read, pp. 1–3)
  - public/phet/photoelectric-effect_1.0.0_en.html (UI strings read locally)
verdict: needs-changes
---

# Review: The photoelectric effect

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Formula "Stopping voltage", `cite="mit" at="Sec. 12.2, Units of energy (E = qV)"` | Siyavula 12.2 "Units of energy" only defines the electronvolt through E = q × V. Neither Siyavula 12.2 nor the MIT 8.04 notes or transcript mention a stopping voltage. | `eV_s = E_{k,\max}` cited as if stated there | Keep the citation to E = q × V but mark the step as the page's own: e.g. `at="Sec. 12.2, Units of energy (E = q × V); applied here by this page to the stopping voltage"`. The physics is right and the relation is built from lesson 6.4 (eV) and energy conservation. Also adjust the calcs entries that cite "Units of energy" for V_s (`violet-stopping-voltage`, `uv-ekmax`) the same way. |
| 2 | warning | "The experiment", first paragraph | Siyavula: in 1887 Hertz "noticed that ultraviolet light incident on a metal plate could cause sparks"; the emitted particles were identified later (Thomson, Lenard). MIT 8.04 notes and transcript say Hertz saw electrons emitted. | "Heinrich Hertz noticed in 1887 that metal plates lit by ultraviolet light could give off electrons." | The electron was only discovered in 1897 (lesson 7.1), so this is anachronistic. Write e.g. "Hertz noticed in 1887 that ultraviolet light on a metal plate made sparks jump more easily; around 1900 Thomson and Lenard showed that the light knocks electrons out of the metal." (Siyavula supports both parts.) |
| 3 | warning | "Try it" | The sim (strings in `public/phet/photoelectric-effect_1.0.0_en.html`) has a Battery control: "Set voltage of battery connecting target and collector plates to be positive or negative and observe", a "Current vs Voltage" graph, a "Target Metal" chooser and an intensity control; screens Intro, Experiment and Energy. | "If the simulation lets you set a reverse battery voltage, find the voltage that just stops the current." | Drop the hedge: "Set the battery voltage negative and find the voltage at which the current just drops to zero." I could not tell from the strings which of the three screens holds the battery, so do not name a screen unless checked in the browser. |
| 4 | info | Quiz 2, choice "553 nm" | — | Distractor 553 nm is 2 × 276 nm and 1 nm from the worked example's 552 nm. | No error (it is wrong for W₀ = 4.5 eV), but it matches no likely mistake and may tempt students who remember the example. A mistake-based value is better, e.g. "2.76 nm" (powers of ten slip) or "1.38 × 10⁻⁶ m"; 138 nm (halved) and 442 nm (forgetting the factor 1.6, i.e. W₀ taken as 4.5 × 10⁻¹⁹ J) are good distractors. |
| 5 | info | Quiz 5 | — | Choice 2 "The photoelectric effect, then interference" is the same pair as the answer in the other order. | Marked answer is defensible because the question says "first as a wave and then", but it tests word order rather than physics. Replace choice 2 with e.g. "The photoelectric effect, then the photoelectric effect with brighter light". |
| 6 | info | "The experiment" | Siyavula's Figure 12.4 apparatus says a current flows even at zero battery voltage. | Not mentioned. | Optional: one sentence that a current flows even with no battery, because the electrons leave with kinetic energy; it makes the stopping-voltage section easier to follow. |

## Formulas and citations
- `E = hf = hc/λ`, cite mit at "Sec. 12.2, Implications of Einstein's model": Siyavula states E = hf = hc/λ there. Correct.
- `hf = W_0 + E_{k,max}`, same place: Siyavula writes E = W₀ + E_kmax and E_kmax = hf − W₀ ("the photoelectric equation"), with the reason it is a maximum (electrons below the surface). Correct.
- `W_0 = hf_0`, cite reading1 at "p. 2, eq. (1.2)": Zwiebach's notes, hν₀ = W, Eq. (1.2), printed p. 2. Correct (Siyavula also states W₀ = hf₀ in "Implications").
- `eV_s = E_{k,max}`: see finding 1.
- Millikan 1915, "to better than one per cent", "many physicists still doubted": notes p. 2 and transcript p. 3 state all three. Correct.
- "Einstein received the Nobel Prize in Physics for 1921": Siyavula ("the 1921 Nobel Prize"). Correct.
- Reading locations: notes "pp. 1–2, eqs. (1.1)–(1.2)" correct; transcript "pp. 1–3: the four observations, Einstein's explanation, Millikan" correct (observations p. 1, Einstein p. 2, Millikan p. 3 of the 5-page PDF).
- Wave predictions (any colour, delay, brighter → faster) and "no delay": Siyavula "History and expectations" and "Implications" (electrons "emitted immediately"; Lenard on intensity). Supported.

## Arithmetic and answer checks
All recomputed independently (h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m/s, e = 1.6 × 10⁻¹⁹ C, m_e = 9.11 × 10⁻³¹ kg); `npm run calc:test -k hs-7` passes.
- Wave wait: 1.0 × 10⁻³ × 1 × 10⁻¹⁹ = 1 × 10⁻²² W; 3.6 × 10⁻¹⁹ / 10⁻²² = 3600 s = 1 h. OK.
- f₀ = 3.6 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 5.430 × 10¹⁴ Hz; λ₀ = 5.525 × 10⁻⁷ m → 552 nm (hc/W₀ unrounded gives 552.5 nm; fine). Green. 650 nm no, 400 nm yes. OK.
- 400 nm: f = 7.5 × 10¹⁴ Hz; hf = 4.97 × 10⁻¹⁹ J; E_k = 1.37 × 10⁻¹⁹ J; v = √(2 × 1.37 × 10⁻¹⁹ / 9.11 × 10⁻³¹) = 5.48 × 10⁵ m/s → 5.5 × 10⁵. OK.
- 3.6 × 10⁻¹⁹ J = 2.25 eV; 4.97 × 10⁻¹⁹ J = 3.11 eV → 3.1; V_s = 0.856 V → 0.86. OK.
- UV example: hf = 9.945 × 10⁻¹⁹ J = 6.22 eV; eV_s = 3.84 × 10⁻¹⁹ J; W₀ = 6.1 × 10⁻¹⁹ J = 3.82 eV → 3.8; f₀ = 9.20 × 10¹⁴ Hz (λ = 326 nm, near UV). OK.
- Plot slope h × 10¹⁴ / e = 0.414 eV per 10¹⁴ Hz. Domain 0–15, range −6 to 5: at W₀ = 5.5 the line ends at +0.71, at W₀ = 1.5 at +4.7; −W₀ ≥ −5.5 stays in range. OK.
- Quiz 1: violet dim lamp, correct; others wrong. OK.
- Quiz 2: hc/(4.5 × 1.6 × 10⁻¹⁹) = 2.7625 × 10⁻⁷ m = 276 nm, index 1. Correct; see finding 4.
- Quiz 3: 5.0 − 2.8 = 2.2 eV → 2.2 V, index 0. Distractors 2.8, 5.0, 7.8 wrong. OK.
- Quiz 4: parallel lines with slope h, index 0. OK.
- Quiz 5: index 0 correct; see finding 5.
- Flashcards: all true.

## Only earlier terms
- Photon and E = hf: lesson 7.2 `thermal-radiation-and-photons` (written; checked it introduces E = hf = hc/λ and h = 6.63 × 10⁻³⁴ J s).
- Electronvolt and eV gained through a voltage: lesson 6.4 (checked). Intensity as power per area: lesson 6.12 (checked). Interference fringes: lesson 5.11 (checked).
- E_k = ½mv²: `kinetic-energy` (3.2) is planned, not written (content:check warns "coming"); its lesson-list title covers it. Counts as introduced.
- "Photoelectron", "photocurrent", "work function", "threshold frequency", "stopping voltage", "wave–particle duality": all defined in place.

## Coverage
- §4 row 7.3 ("The effect itself", PhET photoelectric-effect): covered at VWO level — threshold frequency, work function, no delay, intensity vs frequency, Einstein's equation, eV, stopping voltage, E_k–f graph with slope h, duality.
- Not covered, worth considering at VWO level: the current–voltage curve (saturation current rises with intensity, the stopping voltage does not move), which the sim's "Current vs Voltage" graph shows; counting photons per second from a light power (P/(hf)). Neither is essential.

## Where this leads
- 8.04 Lecture 3 (`photoelectric-compton-de-broglie`): matches the §4 row and the `why` (photoelectric effect, Compton, de Broglie). Correct.
- `towards: false`, correct.

## Licensing and AI terms
- Siyavula URL is a CCBY row (521) in docs/siyavula-licences.tsv. MIT 8.04 notes and transcript: no "rights reserved" or "courtesy" notice found.
- No forbidden source cited or used; no NASA or ESO material.
- No sentences copied. Siyavula's examples (silver at 250 nm, gold at 1.2 × 10¹⁵ Hz, NSC 2011 330 nm, the sodium graph with 3.7 × 10⁻¹⁹ J and f₀ = 0.56 × 10¹⁵ Hz) and MIT's (290 nm, 4.05 eV) differ from the page's. The page's metal (3.6 × 10⁻¹⁹ J, f₀ = 5.43 × 10¹⁴ Hz) is close in value to Siyavula's sodium exercise but is a different problem; fine.
- No copied figures: one generated `<Plot>` and the PhET sim. No Siyavula branding (the source title names "Everything Science" as a citation, not as branding, consistent with other High School pages).

## Notes
- Writer's open point on `eV_s = E_k,max`: yes, label it as the page's own step (finding 1).
- Writer's open point on the reverse battery: the sim does have it (finding 3).
- Writer's open point on 553 nm: acceptable but better replaced (finding 4).
- content:check: 0 errors; warnings only for the planned prerequisite and the missing review file.

## Resolution (2026-11-20, by the page author)
1. Fixed. The "Stopping voltage" Formula now cites at="Sec. 12.2, Units of energy (E = q × V); applied here by this page to the stopping voltage", and the text leads into it with "Applying "energy = charge × voltage" from lesson 6.4 to the fastest electrons, which just lose all their kinetic energy, gives". calcs violet-stopping-voltage and uv-ekmax now cite the same location with the same note (eV_s = E_k,max is the page's own step).
2. Fixed, checked against Siyavula 12.2 (re-read 2026-11-20, CCBY row 521): "History and expectations" says Hertz in 1887 noticed that ultraviolet light on a metal plate could cause sparks, and the opening says that around the turn of the twentieth century several physicists (including Hertz, Thomson and Lenard) observed electrons emitted from a lit metal plate. The page now says: Hertz noticed in 1887 that ultraviolet light on a metal plate could cause sparks; the electron was not yet discovered (1897, lesson 7.1); around the turn of the twentieth century experiments by several physicists, Thomson and Lenard among them, showed that light knocks electrons out of the metal. (Siyavula says only "could cause sparks", so the page does not say "more easily".)
3. Fixed. The hedge is gone: "The battery between the two plates can be set positive or negative: set it negative, watch the current against voltage graph, and find the voltage at which the current just drops to zero." Checked in public/phet/photoelectric-effect_1.0.0_en.html (battery help text "positive or negative", "Current vs Voltage" graph). No screen is named.
4. Fixed. The 553 nm distractor is replaced by 2.76 nm (the powers-of-ten slip, 2.76 × 10⁻⁷ m read as nm × 10⁰); choices are now 2.76 nm, 138 nm, 276 nm, 442 nm, answer index 2.
5. Fixed. Quiz 5 choice 2 is now "Refraction of light in a prism, then interference through two slits" (wave, then wave).
6. Done. "The experiment" now says a current flows even with no battery, because the freed electrons leave with some kinetic energy and some reach the collecting plate by themselves (Siyavula 12.2, Figure 12.4 text).

Checks: npm run calc:test -- -k photoelectric-effect: 25 passed. npm run content:check: 0 error(s); for this page only the "kinetic-energy is planned but not written yet" warning. No new symbols (the text says "energy = charge × voltage" in words, so no q is added).
