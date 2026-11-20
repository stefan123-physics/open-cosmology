---
page: content/year-0/hs-0/units-and-si.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-03 (read)
  - content/year-0/hs-0/powers-of-ten.mdx (prerequisite, read for earlier terms)
  - content/year-1/8.01/position-and-velocity-1d.mdx (leadsTo target, title checked)
verdict: needs-changes
---

# Review: Units and the SI system

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "Motorway speed", step "Check": "A speed in m/s is always the smaller number, because a metre is shorter than a kilometre by more than a second is shorter than an hour." | (not in source) 1 km = 1000 m, 1 h = 3600 s | The metre/kilometre ratio is larger than the second/hour ratio | Backwards: a metre is 1000 times shorter than a kilometre, a second 3600 times shorter than an hour, so the metre is shorter by *less*. The number shrinks because the factor 1000/3600 is below 1. Fix: "because a kilometre is only 1000 metres but an hour is 3600 seconds, so the factor 1000/3600 is less than one." |
| 2 | error | Cosmology callout: "about 3.00 × 10⁸ m/s times 3.16 × 10⁷ s, which is 9.46 × 10¹⁵ m" | Sec. 1.3 "Constants in equations": c = 3 × 10⁸ m·s⁻¹; no year or light-year | 3.00 × 3.16 = 9.46 | 3.00 × 3.16 = 9.48, so the shown product is 9.48 × 10¹⁵ m. 9.46 × 10¹⁵ m comes from c = 2.998 × 10⁸ m/s and 3.156 × 10⁷ s (calcs uses those). Either write "2.998 × 10⁸ m/s times 3.156 × 10⁷ s, which is 9.46 × 10¹⁵ m" or keep the rounded inputs and give "about 9.5 × 10¹⁵ m". |
| 3 | error | calcs entries `year-seconds`, `light-year` | Sec. 1.3 "Constants in equations" has c = 3 × 10⁸ m·s⁻¹ only; the section never mentions the year in seconds or the light-year (checked on the page) | `source: {cite: mit, at: 'Sec. 1.3, Constants in equations'}` | Wrong citation: the source does not support these numbers. Mark them `origin: page-own` with no source, or add a reference that does (e.g. a NASA page defining the light-year) to `references` and cite that. |
| 4 | error | calcs entry `absolute-zero` (273.15) | Sec. 1.3 "How to change units": "add 273" (uses 273, not 273.15) | `source: {cite: mit, at: 'Sec. 1.3, How to change units'}` | Wrong citation: the source gives 273 only. Make it `kind: fact` with a source that gives 273.15 (e.g. NIST/SI definition in `references`), or drop the `source` and keep `origin: page-own`. |
| 5 | warning | Formula "A conversion factor" (`cite="mit"`, "How to change units") and the whole "Converting units" method | Siyavula converts with an arrow diagram: divide by 1000 going to a smaller unit, multiply going to a larger one (Figures 1.1, 1.2; mm → m ÷ 1000) | Multiply by a fraction equal to one so the old unit cancels | The equality 1 km = 1000 m is in the source; the "factor equal to one / units cancel" method is not. It is standard and correct, and better for compound units, but the page attributes it to the source without saying it differs. Add one line: "Siyavula uses a multiply/divide-by-1000 ladder; this lesson uses factors equal to one, which also work for km/h and cm³." |
| 6 | warning | "Why units matter": "One team gave the thrust of its engines in an imperial unit, the pound-force, and the software that used the numbers expected newtons." | Siyavula reproduces a CNN article: "Failure to convert English measures to metric values caused the loss…"; "One English pound of force equals 4,45 newtons." | Thrust in pound-force vs newtons | Simplified: the mismatch was in impulse data (pound-force seconds vs newton seconds) from small thruster firings, not "the thrust of its engines" in pounds. Acceptable at this level, but "thruster firings" or "the push from its small thrusters" would be closer. Also note the story comes from a third-party CNN article embedded on Siyavula (not Siyavula's CC BY text): the page uses only facts, in its own words, which is fine; do not quote the article. |
| 7 | warning | "The SI base units", second bullet: "A (André-Marie Ampère), K (Lord Kelvin), N (Isaac Newton)" | — | The newton (N) used as an example | The newton is not a base unit and is introduced only in the next section ("Units built from base units"); "force" is Block 2. The rule itself (symbols of units named after people are capitals, names in lower case) is correct. Either pick base units only (A, K) or add "(the unit of force, below)". |
| 8 | warning | "Why units matter": "thrust", "pound-force", "newtons", "push" | — | Force-related terms before the newton or force are introduced | "Force" is Block 2 and the newton is defined later on this page. Add a gloss: "the newton, the SI unit of force (a push or pull)". |
| 9 | info | Formula "Named SI units" | Table 1.2: kg·m·s⁻², s⁻¹, kg·m²·s⁻² (dot notation with negative powers; Siyavula says it does not use m/s) | kg·m/s², kg·m²/s², s⁻¹ | Same physics, site's notation; the page also mentions m·s⁻¹. Fine. Siyavula's Table 1.2 also gives the defining formulas (F = ma, f = 1/T, W = Fs), which the page rightly leaves for later lessons. |
| 10 | info | "Other units you will meet": "Some astronomy and atomic physics books still use it" (CGS) | Siyavula names c.g.s., imperial (US, UK) and natural units (speed of light = 1; high-energy physics, quantum mechanics) | Same three systems, with "early universe" for natural units | Correct; the CGS remark is not in the source but is true. |
| 11 | info | "Checking a formula with units" | Siyavula: units should always be reducible to base units; no section on unit checks of formulas | Two rules: add only like units; both sides of a formula have the same units | Not in the source, but standard and correct, including "can prove a formula wrong, not right". |

## Formulas and citations
- "Named SI units" (Sec. 1.3, Combinations of SI base units, Table 1.2): correct, supported (N = kg·m·s⁻², Hz = s⁻¹, J = kg·m²·s⁻²).
- "A conversion factor" (Sec. 1.3, How to change units): the equality is supported; the method differs from the source (row 5).
- "Celsius to kelvin" (Sec. 1.3, How to change units): supported; Siyavula writes T_K = T_°C + 273 and "To convert from Celsius to Kelvin add 273". The page's remark that 273.15 is exact is correct (absolute zero is −273.15 °C) but not from this source.
- The "absolute zero, the lowest temperature possible, about −273 °C" statement is uncited but standard and correct.
- The light-year callout has no citation on the page (standard fact); the calcs file cites the source wrongly (row 3).
- Only one source is cited and it is on the §2.0 list (Siyavula online page, not the PDF). No forbidden source is cited or used.

## Arithmetic and answer checks
Recomputed independently:
- 1 lbf = 4.448 N, "about 4.45": correct; "more than a factor of four": correct.
- 5 kN = 5 × 10³ N; 2 MHz = 2 × 10⁶ Hz: correct. The 2 MHz example is **not in the calcs file** (warning: add an entry).
- 2.5 km × 1000 = 2500 m: correct. Wrong-way factor gives km²/m: correct.
- 60 × 60 = 3600; 90 × 1000/3600 = 25 m/s; 90/3.6 = 25: correct.
- 1 m² = 10⁴ cm²; 1 m³ = 10⁶ cm³; 12 m² = 1.2 × 10⁵ cm² (and 1200 cm² is the wrong answer it warns against): correct.
- 1.0 g/cm³ = 1.0 × 10⁻³ kg/cm³ = 1.0 × 10³ kg/m³; 1 m³ = 1000 L, mass about 1000 kg: correct.
- 20 °C = 293 K; −40 °C = 233 K: correct.
- Light-year: 2.998 × 10⁸ × 3.156 × 10⁷ = 9.461 × 10¹⁵ m, but the page multiplies 3.00 × 10⁸ by 3.16 × 10⁷, which is 9.48 × 10¹⁵ m (row 2). 1 year = 365.25 × 86 400 s = 3.156 × 10⁷ s: "3.16 × 10⁷" correct.
- Quiz 1: kilogram is the base unit; gram and kilometre are prefixed, newton is derived. Correct, distractors wrong.
- Quiz 2: 18/3.6 = 5.0 m/s. Correct; 18, 65 (= 18 × 3.6) and 0.30 are wrong.
- Quiz 3: 10⁴. Correct; 100, 1000, 10⁶ wrong.
- Quiz 4: 233 K. Correct; −313, −233, 313 K wrong. "A kelvin temperature is never negative": correct.
- Quiz 5: (m/s) × s² = m·s, not a length. Marked answer correct; the others are wrong (choice 3 has the wrong units; choice 4 is false).
- Flashcards: all five correct.
- The "ten months" flight: launched December 1998, lost September 1999 (about 9.5 months); the source's CNN article says "10 month journey". Fine.

## Only earlier terms
- Prefixes k, M, c (centi) and powers of ten: introduced in 0.1 `powers-of-ten`. Good.
- "Force", "thrust", "pound-force", "newton" in "Why units matter" and the N example among the base units: used before the newton is defined later on this page; force itself is Block 2 (rows 7, 8; warning).
- "Energy", "work", "frequency": named only as what J and Hz measure, with "You will meet each in its own lesson". Acceptable.
- "Electric current", "amount of substance", "luminous intensity": names in the table only. Acceptable.
- "Speed", "area", "volume", "density": each defined in one phrase where first used. Good.
- "Absolute zero": defined in place. Good.
- "Speed of light", "particle physics", "early universe", "galaxies" (callout and natural units): everyday words, only named. Acceptable (info).
- "Litre" (water check): everyday unit, not introduced; fine.

## Coverage
- §4 row 0.2 "Units and the SI system": base units, derived units, conversions (including squared and cubed units and km/h ↔ m/s), Celsius ↔ kelvin, unit checks of formulas, other unit systems. This covers the topic at VWO level.
- Prefixes are in 0.1, and the page points back to them. Good.
- Siyavula 1.3 also covers changing the subject of a formula, rate/proportion, constants and trigonometric ratios; these belong to later lessons (0.4, 0.5, 0.7), so leaving them out is right.
- Not covered: writing a compound unit with negative exponents beyond one mention (m·s⁻¹), and converting a derived unit back to base units as an exercise (e.g. J → kg·m²·s⁻²). Minor at this level.

## Where this leads
- `{ course: "8.01", lecture: 1 }` resolves to `position-and-velocity-1d` ("Position and velocity in one dimension"), the target in §4. The "why" (metres, seconds, m/s) fits.
- `towards: false`: correct, 0.2 is not the block's last lesson (0.11 is).

## Licensing and AI terms
- No sentence copied from Siyavula. Close phrases compared: Siyavula "The kilogram is the only SI base unit that contains a prefix" vs page "It is the only base unit with a prefix in its name" (a short, standard fact, rewritten; fine). "To convert from Celsius to Kelvin add 273" vs page "Add 273": short standard phrase; fine.
- Worked examples and quiz are original: Siyavula uses 72 km/h, 30 m/s, 844 km/h (Concorde), 3800 mm, 4.56 kg and 100 °C; the page uses 90 km/h, 18 km/h, 2.5 km, 12 m², water density, 20 °C and −40 °C.
- The Mars Climate Orbiter facts come from a CNN article reproduced on Siyavula's page, which is third-party content probably not under Siyavula's CC BY. The page states only facts in its own words, which is fine; do not quote or adapt the article text (row 6).
- No figures: the page has no images or diagrams; Siyavula's Figures 1.1 and 1.2 are not reproduced.
- No Siyavula logo or "Everything Science" branding; the source title is a plain citation.
- No MIT material used. No NASA insignia; "NASA lost its Mars Climate Orbiter" is a statement of fact, not "according to NASA".
- No ESO text. No forbidden source cited or used.

## Notes
- The calcs file has entries for every number on the page except the 2 MHz example (and the trivial 1 m = 100 cm, 1 km = 1000 m equalities). Add `prefix-mhz`.
- `origin: mit` on `pound-force` and `orbiter-flight`: supported by the source page (the reproduced article). `factor-3-6` is supported (Siyavula: "divide by 3,6").
- Siyavula writes a decimal comma (4,45; 3,6); the page uses decimal points, as noted in 0.1. Fine.
- I did not run `npm run calc:test` or `content:check`; arithmetic was checked by hand and with Python.

## Resolution (2026-11-20, by the page author)

- 1 (error, motorway check): the reason now reads "because 1000/3600 is less than 1: a metre is 1000 times shorter than a kilometre, but a second is 3600 times shorter than an hour".
- 2 (error, light-year): the callout now multiplies 2.998 × 10⁸ m/s by 3.156 × 10⁷ s, giving 9.46 × 10¹⁵ m (calcs `light-speed-shown`, `year-seconds`, `light-year`).
- 3 (error, calcs citations): `year-seconds` and `light-year` now say that Siyavula gives only c and the year and light-year are the page's own.
- 4 (error, 273.15): added the reference `nist-si` (NIST Guide to the SI, Chapter 4, Sec. 4.2.1.1, T₀ = 273.15 K, checked 2026-11-20); the calcs entry `absolute-zero` cites it.
- 5: a bracketed note now says Siyavula shows metric conversions as ×1000/÷1000 steps on a diagram, and that the factor method gives the same results.
- 6 and 8: the Mars Climate Orbiter paragraph now describes the steering-thruster pushes (pound-force based units against newton based units) and glosses force and the newton as Block 2 material. The facts are told in our own words; the CNN text on Siyavula's page is not reused.
- 7: the capital-symbol rule now uses A and K, with N mentioned as "below".
- 9: added calcs entry `prefix-mhz`.

`npm run calc:test` (21 entries for this page) and `npm run content:check` pass.
