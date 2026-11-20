---
page: content/year-0/hs-6/electric-potential-and-voltage.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-01 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/optical-phenomena-and-properties-of-matter/12-optical-phenomena-and-properties-of-matter-02 (read, section "Units of energy")
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch3electri_poten/ and its PDF 2290d16cb4d4f5affd3c57b6ab828ae8_ch3electri_poten.pdf (read, Sections 3.1, 3.2, 3.3, 3.5.1)
  - https://physics.nist.gov/cgi-bin/cuu/Value?e, ?me, ?mp (not fetched; values checked against CODATA from memory and the page's own `location` text)
verdict: pass-with-notes
---

# Review: Electric potential and voltage (lesson 6.4)

No errors found. All 23 calcs entries pass (`pytest tests/calc -k electric-potential-and-voltage`: 23 passed), and every number and quiz answer I recomputed by hand agrees with the page. The findings below are warnings and notes.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Coverage (whole page) | §4 row 6.4 lists CP 19.3 (potential of a point charge); MIT 8.02T Ch. 3 §3.3 gives V = kQ/r and the potential energy of two charges | No point-charge potential at all; only the uniform field. The "Equipotentials" section still says the equipotentials of a point charge are spheres crowded near the charge, without a formula that shows why | Add a short section "The potential of a point charge": V = kQ/r (cite reading2, Eq. 3.3.3), with k = 9.0 × 10⁹ N m² C⁻² (block convention), zero at infinity, and U = kQq/r (Eq. 3.3.5); one worked example and calcs. Or, if left out on purpose, say so in one sentence and keep it for 8.02 (it is already named in `leadsTo.why`). Lesson 6.13 (gravity vs electricity) and 3.11 (escape speed, −GMm/r) make the point-charge form a natural fit at VWO level |
| 2 | warning | frontmatter `references.nist-e` | Block convention: e = 1.6 × 10⁻¹⁹ C | The reference `nist-e` (location "1.602 176 634 × 10⁻¹⁹ C (exact)") is listed in the sources box but never cited on the page or in the calcs file (`elementary-charge` cites reading2 Eq. 3.1.12) | Remove `nist-e`, or cite it once where the page says the precise value in passing ("more precisely 1.602 × 10⁻¹⁹ C"). As it stands it shows the reader a second value of e with no text explaining it |
| 3 | warning | Worked example "A proton through the same kind of voltage", step "Compare" | m_p/m_e = 1.67e-27/9.11e-31 = 1833 | "about 1800 times heavier, so ... it is √1800, about 43 times, slower". √1800 = 42.4, which rounds to 42, not 43 | Write "√1830" or "about 1840 times heavier ... √1840 ≈ 43", or "the square root of that ratio, about 43". (The calcs entry `speed-ratio` uses m_p/m_e and so does not catch this.) |
| 4 | info | "Voltage in a uniform field", Formula V = Ed | MIT Eq. (3.2.1): ΔV = V_B − V_A = −E₀d < 0 (a drop along the field) | V = Ed, the size of the voltage; the text then says the potential falls from the + plate to the − plate | Fine for this level. Optionally add "(MIT writes it as a drop, ΔV = −Ed)" in brackets so the switch to 8.02 is smooth |
| 5 | info | "Voltage: energy per coulomb", V = W/q | Siyavula 17.1: "work done per unit charge" (by the battery on the charge); MIT Eq. (3.1.9): work per unit charge done *against* the field, so ΔV = −W_field/q | W = work done *by the field*, V = W/q = the drop in potential | Consistent and correct as the page defines it. Optional: one bracket noting that the work an outside agent does to move the charge back is the same amount, which is how Siyavula and MIT phrase it |

## Formulas and citations
- `W = qEd`, cite reading2 "Sec. 3.2, from ΔU = −qE₀d": correct; MIT §3.2 gives ΔU = −qE₀d, and W = −ΔU.
- `ΔU = −W`, reading2 Eq. (3.1.6): correct, exactly Eq. (3.1.6).
- `V = W/q`, mit (Siyavula G10) Sec. 17.1: correct; Siyavula "Potential difference is the work done per unit charge, W/q".
- `1 V = 1 J/C`, mit Sec. 17.1: correct (Siyavula: volt "defined as one joule per coulomb"); also MIT Eq. (3.1.11).
- `V = Ed`, reading2 Eq. (3.2.1): correct physics, sign convention differs (finding 4).
- `1 eV = 1.6 × 10⁻¹⁹ J`, reading1 "Sec. 12.2, Units of energy": correct; the Siyavula section heading is "Units of energy" and gives 1 eV = 1,6 × 10⁻¹⁹ J. Also MIT Eq. (3.1.12) with the same value.
- `qV = ½mv²`, reading2 "Eq. (3.1.10), with the kinetic energy ½mv²": Eq. (3.1.10) is U = q₀V; the `at` text says the kinetic energy is added, so acceptable. Label says "Speed gained" but the formula is an energy balance; fine.
- "Field lines always point from higher potential to lower": MIT §3.2 says the same.
- Equipotentials, field ⟂ equipotential, no work along one: MIT §3.2 (B and C on the same equipotential line, no work) and §3.5.1 (E perpendicular to equipotential curves; Fig. 3.5.3 for a uniform field and a point charge). Supported.
- Contour-map analogy, "earth"/"ground", Volta built the first battery: standard and correct (Siyavula 17.1 names Volta).
- "the work it does depends only on where the charge starts and ends": MIT §3.1 (electrostatic force is conservative). True for static charges; induction (6.11) will show fields that are not. Not needed here.
- Calcs `source` fields: every entry cites a real place (Eq. 3.1.10, 3.1.11, 3.1.12, 3.2.1; Siyavula 17.1 and 12.2). `elementary-charge` cites reading2 Eq. (3.1.12), which does use 1.6 × 10⁻¹⁹ C.

## Arithmetic and answer checks
Recomputed by hand (and the calcs suite passes):
- Quiz 0: 3.0/0.25 = 12 V. Answer index 2 = "12 V". Correct; 0.75 (product), 3.25 (sum), 0.083 (inverse) are wrong.
- Quiz 1: electron through 750 V gains 750 eV (= 1.2 × 10⁻¹⁶ J). Answer index 1. Correct; 750 J wrong, 1.6 × 10⁻¹⁹ eV wrong, distance does not matter. (No calcs entry, none needed: no arithmetic.)
- Quiz 2: 60/0.0040 = 1.5 × 10⁴ V/m. Answer index 2. Correct; 240 and 15 come from not converting mm, 1.5 × 10⁵ is a power-of-ten slip.
- Quiz 3: "None". Correct.
- Quiz 4: same energy eV; speed ratio √(m_p/m_e) = √1833 = 42.8 ≈ 43. Answer index 0. Correct; other choices wrong. (Calcs entry `quiz-proton-electron-ratio` lacks the `quiz: 4` key the other quiz entries have; harmless.)
- Work and voltage: 3.0e-4/2.0e-6 = 150 V; 6.0e-6 × 150 = 9.0e-4 J. Correct.
- Electron between plates: E = 400/0.025 = 1.6e4 V/m; F = 1.6e-19 × 1.6e4 = 2.56e-15 ≈ 2.6e-15 N; Fd = 2.56e-15 × 0.025 = 6.4e-17 J; eV = 1.6e-19 × 400 = 6.4e-17 J. Correct; direction (towards + plate) correct.
- Electron gun: eV = 3.2e-16 J; v = √(6.4e-16/9.11e-31) = √(7.03e14) = 2.65e7 ≈ 2.7e7 m/s; /3.00e8 = 8.8% ≈ "about 9%". Correct. Relativistic correction at 2 keV is about 0.3%, negligible.
- Proton vs electron at 500 V: 8.0e-17 J; v_p = √(1.6e-16/1.67e-27) = 3.10e5 m/s; v_e = √(1.6e-16/9.11e-31) = 1.33e7 m/s; ratio 42.8. Correct, but see finding 3 for "√1800".
- Plot: V(1 − x/d) with defaults V = 400, d = 0.025 matches the worked example; caption is accurate.
- Units: 1 V/m = 1 J/(C m) = 1 N/C. Correct.
- Constants: e = 1.6 × 10⁻¹⁹ C throughout (block convention); m_e = 9.11 × 10⁻³¹ kg and m_p = 1.67 × 10⁻²⁷ kg are CODATA (9.109 383 7139 × 10⁻³¹, 1.672 621 925 95 × 10⁻²⁷) rounded correctly. k is not used. No 1.602 or 8.99 appears in the text; only in the unused `nist-e` reference (finding 2).
- Numbers not in the calcs file: 1.5 V (torch battery), 12 V (car battery), 230 V (European mains), c = 3.00 × 10⁸ m/s, 1 keV = 10³ eV, 1 MeV = 10⁶ eV. All correct. Optional: add `kind: fact` entries for 1.5, 12 and 230 V and c, so every number on the page is in calcs.

## Only earlier terms
- Work, W = mgh, gravitational potential energy, kinetic energy ½mv², conservation of energy: prerequisites `work` (3.1), `gravitational-potential-energy` (3.3), `kinetic-energy` (3.2), `conservation-of-energy` (3.4). Not written yet (PC 1); their §4 titles cover the ideas, so they count as introduced. The page's "lessons 3.1 and 3.3" match the hs-3 syllabus numbers.
- Uniform field between parallel plates, field lines, N/C, gravitational field g: introduced in 6.3 `electric-field` ("A uniform field between two plates", which even forward-points to 6.4).
- Speed of light, X-rays: Block 5 (`electromagnetic-spectrum`). Prefixes k and M: Block 0 units lesson (not a direct prerequisite, fine).
- info: "battery", "terminal", "circuit", "ground" are used informally before 6.6–6.7 introduce circuits. Everyday words, used only as illustration; acceptable.
- info: "temperature as the typical energy of one particle" (cosmology callout) relies on Block 4 kinetic theory; fine as a forward-looking remark.

## Coverage
§4 row 6.4: potential energy and potential difference, eV, V = Ed in a uniform field, point-charge potential, equipotential lines (CP 19.1–19.4; P 18.4); PhET charges-and-fields.
- Covered: electric potential energy and ΔU = −W; potential difference and volt; potential vs potential energy; zero of potential and "ground"; V = Ed and the V/m unit; electronvolt and keV/MeV; qV = ½mv², electron gun, proton vs electron; equipotentials (uniform field and point charge, qualitatively), perpendicular to field lines, no work along them; PhET charges-and-fields with a suitable task.
- Missing: the potential of a point charge, V = kQ/r, and the potential energy of two point charges (finding 1). At VWO level this is a standard topic and §4 lists it; it matters.
- Not needed at this level: superposition of potentials of several charges, E from the slope of V (the plot caption already says "steeper line ... stronger field", which is enough).

## Where this leads
- `{ course: "8.02", lecture: 4 }` = `content/year-1/8.02/electric-potential.mdx` ("Electric potential and potential energy"): same topic, matches §4 (`8-02/electric-potential`). The `why` text (integral definition, point-charge potential, E from V, perpendicular to equipotentials) agrees with that lesson's summary.
- `towards: false`: correct, 6.4 is not the block's last lesson.
- Cosmology callout (temperatures in eV): correct.

## Licensing and AI terms
- Sources are all allowed by §2.0: Siyavula online pages (G10 17.1, G12 12.2), MIT 8.02T course notes (no "All rights reserved" or "Courtesy" notice in Ch. 3: `grep` on the extracted text found none), NIST. No forbidden source cited or read (no OpenStax, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman, Tong).
- No copied sentences. Closest phrases: "Do not confuse potential with potential energy" (MIT: "electric potential should not be confused with electric potential energy"), "Field lines always point from high potential to low potential" (MIT: "electric field lines always point from higher potential to lower"), and the eV definition (Siyavula: "the kinetic energy gained by an electron passing through a potential difference of one volt"). All short standard phrases.
- Worked examples and quiz questions are original: Siyavula 17.1 has no worked example; MIT Ch. 3 examples (two charges, dipole, annulus, wire) are different.
- No figures copied; the one graph is a generated `<Plot>`. No Siyavula branding. PhET attribution comes from the component.
- info (for the owner): the Grade 10 page as fetched (logged out, South Africa) shows only the site footer "Except where otherwise noted, this site is covered by a closed copyright license. All rights reserved." and no CC notice, while the Grade 12 page carries a link to CC BY 3.0. §2.0 relies on the CC BY 3.0 statement on the Grade 10 contents page; the page uses only two standard facts from 17.1 (V = W/q, 1 V = 1 J/C), so the risk is negligible, but it may be worth confirming once that the per-section pages fall under that statement.

## Notes
- Cross-lesson (not this page): `content/year-0/hs-6/electric-field.mdx` (6.3) uses "1.60 × 10⁻¹⁹ C" in its proton example; under the block convention that should be 1.6 × 10⁻¹⁹ C.
- "reached in a few centimetres" (electron gun) is plausible for a school tube but unsourced; harmless.
- The page reads well for a complete beginner: the gravity analogy, the per-coulomb idea and the electronvolt are built step by step.

## Resolution (2026-11-20, by the page author)

1. Fixed. New section "The potential of a point charge" (before "Equipotentials"): zero far away, V = kQ/r cited to reading2 Eq. (3.3.3) and U = kQq/r cited to reading2 Eq. (3.3.5) (both checked in the local MIT 8.02T Ch. 3 PDF; MIT writes 1/(4πε₀), the `at` text says so), k = 9.0 × 10⁹ N m² C⁻² (block convention), signs of like and unlike charges, and an original worked example "Near a small charged sphere" (Q = +2.0 × 10⁻⁹ C: 600 V at 3.0 cm, 300 V at 6.0 cm, a proton gains 300 eV = 4.8 × 10⁻¹⁷ J, and 600 eV = 9.6 × 10⁻¹⁷ J all the way out). The equipotential bullet now says why point-charge equipotentials crowd near the charge (V = kQ/r). Summary bullet and flashcard added; reading2 location now names Section 3.3; the leadsTo text no longer says the point-charge potential is new at university. Calcs: k-coulomb (fact), point-potential-3cm, point-potential-6cm, point-voltage-3-to-6, point-proton-gain, point-proton-energy, point-energy-is-eV (identity). New symbol meanings (k, Q, r for this page; V and U widened for this page only) are in the coordinator's sym-electric-potential-and-voltage-fix.json.
2. Fixed: the unused `nist-e` reference was removed.
3. Fixed: "about 1840 times heavier ... √1840 ≈ 43 times slower". Calcs `mass-ratio` now expects 1840 (1%), `speed-ratio` shown text updated, new entry `sqrt-1840`.
4. Done: a bracket after V = Ed says the university course writes it as a drop, ΔV = −Ed.
5. Done: a bracket after V = W/q says textbooks often phrase it as the work something else must do per coulomb to push the charge back against the field, the same amount.
6. Not changed: the `quiz: 4` key makes calc:test look for a numeric choice equal to 42.8, and quiz 4's choices are statements, so the key cannot apply (tried; the test fails). The entry stays without it, as the review called harmless. The optional fact entries for 1.5, 12 and 230 V were not added.
7. Left for the owner: a licence question about the Siyavula per-section pages (the page uses only two standard facts from 17.1).
8. Not this page: the 1.60 × 10⁻¹⁹ C on lesson 6.3 is fixed there.

Checks: calc:test -k electric-potential-and-voltage: 31 passed. content:check: no errors on this page once sym-electric-potential-and-voltage-fix.json is applied (tested on a temporary copy of data/symbols.json, then restored); only the four "planned prerequisite" warnings remain. Status set to reviewed.
