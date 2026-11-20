---
page: content/year-0/hs-4/phase-changes.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-01 (read: headings, Figures 3.1–3.3, definitions of the changes of state, boiling point "vapour pressure equals the external (atmospheric) pressure", evaporation of the fastest molecules lowering the average kinetic energy, "all the heat energy goes into breaking or forming the bonds between the molecules"; no worked examples, no numbers, no latent heat, no dry ice, pressure cooker or sweating; CC BY 3.0 notice)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-02 (read: Sec. 3.2, ID ESAAL, Table 3.1)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/intermolecular-forces/04-intermolecular-forces-02 (read: "Melting point and boiling point" (slightly lower boiling point at altitude), "High heat of vaporisation" (40,65 kJ·mol⁻¹, no temperature stated), "Less dense solid phase" (ice floats, insulates the water below); no pressure cooker, sweating or latent heat)
  - docs/siyavula-licences.tsv rows 350, 351 and 445: all three Siyavula URLs are `CCBY` (checked)
  - https://ocw.mit.edu/courses/3-012-fundamentals-of-materials-science-fall-2005/69147da16e467a72cfa145c1d13f644f_lec05t.pdf (read: downloaded to a scratch folder, 14 pages, text per page; one "Figure removed for copyright reasons" on p. 12, not used by the page; no "All rights reserved" or exclusion notice)
  - https://ocw.mit.edu/courses/3-00-thermodynamics-of-materials-fall-2002/77107dfe89f42703e711abc463ae79e8_lecture_14_oneside.PDF (read: 7 pages, printed pp. 93–99; header "MIT 3.00 Fall 2002 © W.C Carter" on every page, no "All rights reserved" or exclusion notice; p. 97 data table checked)
  - https://science.nasa.gov/solar-system/comets/facts/ (read; last updated 2026-09-21)
  - https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=4 (read, to look for a latent heat at skin temperature: the phase-change page has no ΔvapH table)
  - public/phet/states-of-matter-basics_1.2.25_en.html (strings checked: screens "States" and "Phase Changes", "Water", "Heat", "Cool", "Pressure", "Temperature")
  - Earlier lessons on disk: hs-4 kinetic-theory, ideal-gas-law, heat-and-specific-heat, density-and-pressure, temperature; hs-8 cosmic-microwave-background; content/year-3/8.044/first-law.mdx; content/year-4/8.08/van-der-waals-equation.mdx and van-der-waals-phase-transitions.mdx
verdict: pass-with-notes
---

# Review: Phase changes and latent heat (4.6)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | `leadsTo` 8.08 lecture 2, `why` | 8.08 lecture 2 has two pages on this site: `van-der-waals-equation` (order 1, the equation of state; no Clapeyron) and `van-der-waals-phase-transitions` (order 2: liquid–gas transition, latent heat, Clapeyron dP/dT = L/(TΔV), p. 19). `cosmologyDestinations` (lib/content.ts) links every written page of the lecture with the same `why` | One `why` about the liquid–gas transition and the Clapeyron equation, shown beside both links | The link is a good one (it is exactly the "lower boiling point on a mountain" rule, and nothing in 8.044 treats Clapeyron). But the `why` is wrong beside the first page. Rewrite it so it fits both pages ("Wen's Chapter II first builds the van der Waals gas, then finds its liquid–gas transition, with a latent heat L and the Clapeyron equation …"), or accept the double link knowingly. Also write the formula with brackets: dP/dT = L/(TΔV); "L/TΔV" reads as (L/T)ΔV. |
| 2 | warning | Callout "Towards the universe: a cooling universe changes state" | 8.15 (cosmic-microwave-background): recombination is gradual, about half the hydrogen neutral by about 4000 K, decoupling by about 3000 K | "it went through changes of state on the way … much as water molecules join into droplets when steam condenses" | The analogy is fair, but recombination is not a change of state at one fixed temperature with a flat part: it spreads over a range of temperatures. Add half a sentence ("unlike boiling, this happened gradually, over a range of temperatures"), so the lesson's own key point (constant temperature during a change of state) is not carried over wrongly. |
| 3 | info | Worked example "Cooling by sweat", bracket "At skin temperature the latent heat is a little larger than at 100 °C" | No cited source gives L_v at skin temperature (Siyavula's 40,65 kJ/mol has no temperature; the NIST phase-change page has no ΔvapH table) | Uncited | Correct physics: L_v is about 2.42 × 10⁶ J/kg at 35 °C, about 7% more than 2.26 × 10⁶ J/kg at 100 °C (standard value, not read in a §2.0 source in this review). Acceptable as a standard statement. If a citation is wanted, NIST Chemistry WebBook gives the standard enthalpies of formation of liquid and gaseous water at 298 K (difference about 44.0 kJ/mol, i.e. 2.44 × 10⁶ J/kg); NIST is allowed (AGENTS.md rule 11, `ai-input=yes`). Note that "Evaporation cools" says the heat is "the same latent heat L_v"; "about the same" would match the bracket. |
| 4 | info | "Boiling and pressure", pressure-cooker sentence; flashcard 5 | Siyavula Sec. 3.1 defines the boiling point as the temperature where the vapour pressure equals the external pressure; no source mentions pressure cookers | "A pressure cooker does the opposite: a sealed lid keeps the steam in, the pressure rises, and the water boils above 100 °C, so food cooks faster." | Correct and standard (about 120 °C at about 2 atm); it follows directly from the cited definition. No change needed. Strictly, the water in a sealed cooker sits at its raised boiling point and boils once the valve lets steam out; "can reach a temperature above 100 °C before it boils" would be more exact but is not necessary at this level. |
| 5 | info | "Boiling and pressure", "This vapour pressure grows quickly as the liquid gets hotter" | Siyavula Sec. 3.1 does not say this (only the boiling-point definition) | Uncited | Standard and correct; follows from the fast tail of lesson 4.4. Fine. |
| 6 | info | "Phase changes in space", "the ice sublimates" | NASA *Comets: Facts*: "The Sun's heat causes the comet's ices to change to gases so the coma gets larger"; it does not say "sublimation" | Page adds the reason (almost no pressure, so no liquid) | Correct physics (below water's triple-point pressure); the page does not attribute the word to NASA. Fine. "A lump of ice and dust" fits NASA's "mostly ice coated with dark organic material". |
| 7 | info | "Phase changes in space", "Lakes freeze from the top down, and the ice on top shields the water below" | Siyavula Gr 11 4.2: if ice sank, "all ponds, lakes, and even the oceans would freeze solid"; floating ice insulates the water below | As written | Supported. |

## Formulas and citations
- **Q = mcΔT** (cite reading3, p. 4): 3.012 Lecture 5 p. 4 has "the heat capacity is the slope dq/dT of a plot of the heat q_total added … vs. the system's temperature", with a block of ice from −30 °C. Verified. The notes use a heat capacity of the sample, the page mc; the label says it is lesson 4.5's formula, which is honest. Fine.
- **Q = mL** (cite reading3, p. 8): p. 8: "The change in enthalpy at the phase transition ΔHm is called the enthalpy of melting. (Some texts refer to it as … heat of fusion, or latent heat of fusion). It is thermal energy that is stored in the solid upon freezing, and released again on melting." Verified; the `at` text says "written here per kilogram", which explains the change from molar to per-kg. p. 5 lists the heats of melting, vaporization and sublimation (cited in `readings` location). Fine.
- **L_f = 6008/0.0180** (cite reading4, p. 97): the data table on printed p. 97 of 3.00 Lecture 14 gives "Molar Enthalpy of Melting ΔHmelt 6008 J/mole", "Molar Heat Capacity of liquid H2O 75.44 J/(mole K)", solid "38.0 J/(mole K)", "Data for H2O at 273K and 1 atm". All verified; page number is the printed one (PDF page 5).
- **L_v = 40 650/0.0180** (cite reading2, "High heat of vaporisation"): Siyavula "The heat of vaporisation for water is 40,65 kJ·mol-1." Verified. Siyavula gives no temperature; 40.65 kJ/mol is the value at 100 °C, which is how the page uses it (heating curve, per-molecule comparison at 373 K). Correct.
- Siyavula Sec. 3.1: Figure 3.1 "Changes in phase", subsection "Heating and cooling curve of water" (heading exact), heat goes into "breaking or forming the bonds between the molecules", evaporation at the surface by the molecules "with the highest kinetic energy", lowering the average kinetic energy and temperature: all verified at the places the page cites them.
- Sec. 3.2, Table 3.1 (reading 1): particles, energy, spacing, forces, heating and cooling changes of phase. Verified; ID ESAAL correct.
- Gr 11 4.2 "Melting point and boiling point": "slightly lower boiling point" at altitude (Johannesburg, Polokwane). The page's "On a mountain, water boils at a lower temperature" is supported.
- 3.012 p. 13: 1700s view that a tiny extra amount of heat would melt the whole sample; Black's quotation about snow and "when a thaw succeeds to frost"; "melting ice appeared to absorb much more heat than was required to raise the temperature from 31 to 32" degrees. The page's paraphrase ("by one degree") is accurate and avoids the unit muddle in the notes. "Scottish chemist" is uncited but standard.
- NASA *Comets: Facts*: coma and ices turning to gas, verified; last-updated date 2026-09-21 matches the reference title. No "according to NASA" phrasing, no insignia.
- All cited sources are in §2.0 (Siyavula online pages, MIT OCW, NASA). No OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark or publisher article cited or used.

## Arithmetic and answer checks
All recomputed independently:
- Molar mass: 6.02e23 × 18 × 1.66e-27 = 0.017988 kg → 0.0180 kg. ✓
- L_f = 6008/0.0180 = 3.338e5 → 3.34 × 10⁵ J/kg ✓ (reference value 3.34 × 10⁵). L_v = 40 650/0.0180 = 2.258e6 → 2.26 × 10⁶ J/kg ✓. c_ice = 38.0/0.0180 = 2111 → 2.1 × 10³ J/(kg K) ✓. Ratio L_v/L_f = 6.77 → 6.8 ✓.
- Warm 1 kg 0→100 °C: 4.18 × 10⁵ J ✓; L_v/that = 5.41 → "5.4", "more than five times" ✓.
- Ice to steam (0.250 kg from −15 °C): Q₁ = 7875 J → 7.88 × 10³ ✓; Q₂ = 83 500 ✓; Q₃ = 104 500 ✓; Q₄ = 565 000 ✓; total 760 875 J → 7.61 × 10⁵ J ✓; boiling share 74.3% → "74%", "three quarters" ✓; 760 875/1500 = 507.3 s ✓ (8.45 min, "about eight and a half minutes" ✓); 565 000/1500 = 376.7 → 377 s ✓.
- Plot: breakpoints in kJ per kg: 2.1 × 15 = 31.5; +334 = 365.5; +418 = 783.5; +2260 = 3043.5 ✓. At m = 0.25: −15 + Q/(0.525) reaches 0 at 7.875 kJ ✓; melted at 91.4 kJ → "91 kJ" ✓; boiled away at 760.9 kJ → "761 kJ" ✓; domain 0–800 kJ covers it ✓. Slope ratio c_water/c_ice = 1.99 → "about twice as steep" ✓.
- Per molecule: 40 650/6.02e23 = 6.753e-20 J ✓; (3/2)k_BT at 373 K = 7.721e-21 J ✓; ratio 8.75 → "almost nine" ✓.
- Sweat: 0.80 × 2.26e6 = 1.808e6 → 1.81 × 10⁶ J ✓; /3600 = 502 W ✓ ("about 500 W" in Summary ✓); 1.81e6/(75 × 4180) = 5.77 → 5.8 K ✓ (five 100 W bulbs ✓).
- Lemonade: 0.30 × 4180 × 25 = 31 350 → 3.14 × 10⁴ J ✓; 31 350/3.34e5 = 0.0939 kg → 94 g ✓.
- Quiz 1: 0.40 × 3.34e5 = 1.336e5 → 1.34 × 10⁵ J, choice 0 ✓. Distractors: 9.04 × 10⁵ (m L_v) ✓, 8.35 × 10⁵ (L_f/m) ✓, 1.67 × 10³ (m c_water) ✓; all wrong ✓; explanation true ✓.
- Quiz 2: choice 1 correct; others wrong ✓. Quiz 3: 5.4, choice 2 ✓. Quiz 4: choice 1 ✓ (vapour is lighter than air, so choice 3 is rightly false). Quiz 5: choice 0 ✓; explanation true ✓.
- Every number on the page has a calcs entry in calcs/hs-4/phase-changes.yaml (27 entries checked against the page); `quiz-melt-wrong-divide` has the unit J/kg² for a choice displayed in J, which is the point of the distractor and fine.
- Consistency: c_water = 4180 J/(kg K) as in lesson 4.5 ✓; 1 u = 1.66 × 10⁻²⁷ kg and k_B = 1.38 × 10⁻²³ J/K as in 4.4 ✓; N_A = 6.02 × 10²³ as in 4.3 ✓. Lesson 4.5 uses NIST's 75.4 J/(mol K) for liquid water; this page's 75.44 (3.00 notes) agrees.

## Only earlier terms
- Molar mass is derived on the page from 18 u (lesson 4.4, which gives 1 u and molecular masses H₂ 2 u, O₂ 32 u) and N_A (lesson 4.3). Good. The page writes 2 × 1 + 16 without saying H is 1 u and O 16 u; 4.4 only shows these implicitly (H₂ = 2 u, O₂ = 32 u). Info: add "(hydrogen 1 u, oxygen 16 u)".
- Average kinetic energy (3/2)k_BT, temperature as average kinetic energy, fast tail of the speed distribution: lesson 4.4 ✓. Kinetic-theory promises "(lesson 4.6)" that water evaporates below its boiling point because the fastest molecules break free: delivered in "Evaporation cools" ✓.
- Q = mcΔT, c_water: 4.5 ✓. Air pressure falls with height: 4.1 ("Higher up there is less air above you, so the pressure falls") ✓. Power: 3.5 ✓; conservation of energy: 3.4 ✓; slope: 0.5 (graphs-and-slope) ✓. "Energy of position" (potential energy) is Block 3 ✓.
- "Bonds" is used from "The heating curve" on, while "Solid, liquid and gas" speaks of "attractive forces". Info: say once that "bonds" means these attractive forces holding particles together.
- "Vapour", "vapour pressure" are introduced on the page ✓. Lesson 4.10 (planned, `towards-the-universe-cooling`, §4 row "an expanding gas cools") and 8.15 (cosmic-microwave-background, written) are forward references, used correctly.
- θ for Celsius temperature in the graph label: used in 4.2 ✓.

## Coverage
- §4 row: "Phase changes and latent heat", PhET states-of-matter-basics. Covered: states and particle model, the six changes of state, heating and cooling curves, Q = mL with L_f and L_v, multi-stage ice-to-steam, evaporative cooling, boiling point and pressure, mixing with ice (energy balance). This is the VWO core (smeltwarmte, verdampingswarmte, heating curves).
- Not covered: phase diagrams and the triple point, supercooling. Not needed at VWO level; the PhET Phase Changes screen shows a phase diagram if wanted.

## Where this leads
- 8.044 lecture 6 (`first-law`): matches the §4 row (`8-044/first-law`); the page defines U, heat and dU = δQ + δW ✓. Info: the 8.044 page writes δQ, the `why` đQ; use the same symbol. "Latent heat raises the internal energy without raising the temperature" is right in substance (at constant pressure part of L_v, about RT ≈ 3 kJ/mol, is work pΔV, but U still rises).
- 8.08 lecture 2: added beyond the §4 row; judged useful (see finding 1 about its `why`). It is a Year IV course, a long jump from High School, but it is the place where latent heat and the boiling curve are treated.
- `towards: false` is right (4.10 is the block's last lesson). Callout title "Towards the universe: …" is used in 4.4 too, while 4.3 and 4.5 use "Towards cosmology"; harmless, but the "Towards the universe" name is the label of the towards lesson, so "Towards cosmology" would avoid confusion (info).

## Licensing and AI terms
- No copied sentences. Closest: Siyavula "all the heat energy goes into breaking or forming the bonds between the molecules" vs page "All the heat goes into breaking the bonds between the particles (or comes out as they form again)"; Siyavula "Liquid to vapour at any temperature below the boiling point" vs page "liquid to gas at the surface, at any temperature below the boiling point". Short standard phrases, CC BY 3.0; fine.
- Worked examples are the page's own: Siyavula 3.1 and Gr 11 4.2 have no numerical examples (Gr 11 worked example 4 is a qualitative specific-heat question); 3.00 uses one mole of ice from −100 °C and a 10 °C reservoir; 3.012 uses ice from −30 °C. The page's 0.250 kg from −15 °C, sweat, lemonade and per-molecule examples are original. The opening (heating ice and watching the thermometer) is the standard experiment, also Siyavula's practical; written in own words.
- No figure copied: the only graph is a generated `<Plot>`. The 3.012 "Figure removed for copyright reasons" (p. 12) is not used.
- No Siyavula logo or branding; "Everything Science" appears only in the source titles as attribution. No MIT material marked excluded or "All rights reserved" (3.00 pages carry "© W.C Carter" without such a notice; only facts from its data table are used). NASA: no insignia, no "according to NASA". No ESO text. No forbidden source.
- PhET "Try it" matches the sim (v1.2.25): screens "States" and "Phase Changes", substance "Water", "Heat"/"Cool" control, pressure gauge and thermometer on the Phase Changes screen ✓.
- No em dashes ✓. Units are inside maths in prose; quiz 5 choices write "100 °C" as plain text where the other questions use `$100\ \text{°C}$` (info, consistency only).

## Notes
- Info: "The slope of each sloping part is ΔT/Q = 1/(mc)": write ΔT/ΔQ.
- Info: "Escaping takes almost nine times the average energy" compares an enthalpy per molecule (which includes the pΔV work, about k_BT) with the translational kinetic energy; as an order-of-magnitude argument it is fine. At puddle temperature the ratio is larger (about 12), so the conclusion holds even more.
- Info: "Without sweating": the body's specific heat is nearer 3500 J/(kg K); the page says it assumes "mostly water", which is honest, and the conclusion (several kelvin, dangerous) stands.
- Info: the slider's default is its maximum (0.25 kg), so "watch the flat parts grow" only works by first lowering the mass; consider "change the mass and watch the flat parts grow and shrink" or a max of 0.30 (domain would need about 920 kJ).
- Info: Summary "carries away about 500 W": "carries heat away at about 500 W".

## Resolution (2026-11-20, by the page author)
- 1 (warning): fixed. The 8.08 lecture 2 `why` now fits both pages of that lecture: "Wen's Chapter II first builds the van der Waals gas ... and then finds its change from liquid to gas, with a latent heat L and the Clapeyron equation ..., dP/dT = L/(TΔV)". Formula now has brackets.
- 2 (warning): fixed. The cosmology callout now says that, unlike boiling or condensing water, recombination did not happen at one fixed temperature with a flat step but gradually, as the universe cooled from about 4000 K to about 3000 K (values from lesson 8.15). Callout title changed to "Towards cosmology: a cooling universe changes state" (info in "Where this leads"). New calcs fact entry `recombination-range`.
- 3 (info): "Evaporation cools" now says "about the same latent heat L_v", matching the bracket in the sweat example. NIST citation not added (the bracket is a standard statement and the reviewer accepted it).
- 4 (info): pressure-cooker sentence now says the water "can reach a temperature above 100 °C before it boils".
- 5, 6, 7 (info): no change needed.
- Only earlier terms: added "(hydrogen 1 u, oxygen 16 u; lesson 4.4)" (calcs fact entry `atomic-masses`); added one sentence in "Solid, liquid and gas" saying that "bonds" means the attractive forces that hold the particles together.
- Where this leads: 8.044 `why` now writes dU = δQ + δW, as the 8.044 page does.
- Licensing note: quiz 5 choices now write $100\ \text{°C}$ in maths like the other questions.
- Notes: slope written ΔT/ΔQ; the graph instruction now reads "Make the mass smaller and watch the flat parts shrink" (the slider default is its maximum, 0.25 kg, which the caption uses); Summary now says "carries heat away at about 500 W". The notes on the escape-energy ratio and the body's specific heat need no change.
- Checks: `npm run calc:test -- -k phase-changes`: 33 passed. `npm run content:check`: 0 error(s), no message for this page. Status set to reviewed.
