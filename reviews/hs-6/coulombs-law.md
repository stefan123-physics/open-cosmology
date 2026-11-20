---
page: content/year-0/hs-6/coulombs-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics/09-electrostatics-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics (chapter landing page; not read separately, only 9.2 is cited at a location)
  - https://physics.nist.gov/cgi-bin/cuu/Value?ep0, ?e, ?mp, ?me (not fetched; the CODATA 2022 values quoted on the page were checked by recomputation only)
  - content/year-1/8.02/fields-gravitational-and-electric.mdx (leadsTo target, read in the repo)
verdict: needs-changes
---

# Review: Coulomb's law

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | summary, Formula "The Coulomb constant", quiz 2 explanation, flashcard 1, all three worked examples, Plot curves and caption, Summary | Block 6 convention (coordinator): k = 9.0 × 10⁹ N m² C⁻² and e = 1.6 × 10⁻¹⁹ C, as Siyavula 9.2 and MIT 8.02T use; the sibling lesson `electric-field` uses 9.0 × 10⁹ | k = 8.99 × 10⁹ is the working value throughout, displayed as its own Formula cited to NIST; e = 1.602 × 10⁻¹⁹ C in the hydrogen example | Use k = 9.0 × 10⁹ everywhere (summary, flashcard 1, quiz 2 explanation, Plot exprs `9.0e-3` / `9.0e-2`, caption, the three examples, Summary). Make the displayed Formula `k = 9.0 × 10⁹ N m²/C²` cited to reading1 (Sec. 9.2); keep 8.988 × 10⁹ from ε₀ only as "the more precise value" in passing, and drop "Siyavula rounds it further". Use e = 1.6 × 10⁻¹⁹ C. Update calcs `k-rounded`, `k-siyavula`, `e-value` and every `inputs` with k = 8.99e9 or e = 1.602176634e-19. Only two shown numbers change (findings 2 and 3). |
| 2 | warning | Plot caption | 0.90 N / 4 = 0.225 N (0.2247 N with k = 8.99 × 10⁹) | "a quarter of that, 0.22 N" | With k = 9.0 × 10⁹ it is exactly 0.225 N: write "0.225 N" (or "about 0.23 N"). Remove the 2.5% tolerance of calcs `plot-1uc-020`. |
| 3 | warning | Worked example "Two charged beads", step "Direction" | 1.44 × 10⁻⁴ N / 9.81 m/s² = 14.7 mg (with either k) | "about 14 mg" | Write "about 15 mg". The 5% tolerance of calcs `beads-mass` hides this; tighten it. |
| 4 | warning | Section 1: "A charged sphere, seen from outside, acts as if its charge were all at its centre" | Siyavula 9.2: if we are far enough from the charged sphere it behaves as a point-like charge | Stated for any charged sphere at any outside distance | True only when the charge is spread evenly over the sphere (nearby charges shift it). Add "with its charge spread evenly", or follow Siyavula's "seen from far enough away". |
| 5 | info | Hydrogen example, step "The ratio" | 9.2 × 10⁻⁸ / 4.1 × 10⁻⁴⁷ = 2.24 × 10³⁹ | "= 2.3 × 10³⁹" | A reader dividing the shown values gets 2.2 × 10³⁹. Show three figures (9.22 × 10⁻⁸, 4.07 × 10⁻⁴⁷) or say "with the unrounded values, about 2.3 × 10³⁹". |
| 6 | info | Hydrogen example: "Gravity plays no part at all inside an atom" | Negligible, not absent | "no part at all" | "no noticeable part". |
| 7 | info | Coverage, two dimensions | Siyavula 9.2 Worked example 4 treats forces in two dimensions (components, Pythagoras, tan⁻¹) | One descriptive paragraph, no example | Acceptable for this lesson; consider a short right-angle example with own numbers, or leave it to the practice set. |

## Formulas and citations
- `F = k Q₁Q₂/r²` (reading1, Sec. 9.2, Coulomb's law): matches Siyavula (magnitude form; k called the electrostatic constant, as the page says).
- `k = 8.99 × 10⁹` (nistEps0): 1/(4πε₀) with CODATA 2022 ε₀ = 8.8541878188 × 10⁻¹² F/m gives 8.988 × 10⁹, correct; but see finding 1: under the block convention the displayed value should be 9.0 × 10⁹, cited to Siyavula 9.2.
- `F_g = G m₁m₂/r²` (reading1, similarity to Newton's law): Siyavula shows F_G = G m₁m₂/d² and says both are inverse-square laws. G = 6.67 × 10⁻¹¹ is the value Siyavula uses in its Worked example 2. Correct.
- `F_e/F_g = k e²/(G m_p m_e)` (reading1, Worked example 2, "the same comparison for two electrons"): Siyavula's Worked example 2 compares the two forces between two electrons 10⁻¹⁰ m apart; the page's proton–electron formula is its own generalisation, and the `at` says so. Fine.
- `F_net = F₁ + F₂ + …` (reading1, choosing a positive direction): Siyavula says to select a positive direction and add or subtract the forces (Worked example 3). Correct.
- History: Siyavula says Coulomb studied the force around 1784; "the 1780s" and the twisting (torsion) balance are standard and correct.

## Arithmetic and answer checks
Recomputed with the page's constants (k = 8.99 × 10⁹, e = 1.602 × 10⁻¹⁹) and with the convention (k = 9.0 × 10⁹, e = 1.6 × 10⁻¹⁹); G = 6.67 × 10⁻¹¹, m_p = 1.673 × 10⁻²⁷, m_e = 9.109 × 10⁻³¹:
- k from ε₀: 8.9876 × 10⁹. OK.
- 1 C at 1 m: 8.99 × 10⁹ N (9.0 × 10⁹); / 9.81 m/s² = 0.92 × 10⁶ t, "nearly a million tonnes". OK both ways.
- Quiz 2: 0.5993 N → 0.60 (0.600 with 9.0 × 10⁹); distractor 0.1798 → 0.18 is the unsquared distance. OK.
- Plot caption: 0.899 → 0.90 (0.900); at 0.20 m 0.2247 (0.225): finding 2. Plot exprs (charges in μC) and the dashed 1/r curve agree at r = 0.10 m. OK.
- Beads: 1.438 × 10⁻⁴ N → 1.4 × 10⁻⁴ (1.44 × 10⁻⁴); 14.7 mg: finding 3.
- Hydrogen: F_e = 9.23 × 10⁻⁸ N (9.22 × 10⁻⁸) → 9.2 × 10⁻⁸; F_g = 4.07 × 10⁻⁴⁷ → 4.1 × 10⁻⁴⁷; ratio 2.27 × 10³⁹ → 2.3 × 10³⁹ (finding 5); a = 1.01 × 10²³ → 1.0 × 10²³; two protons 1.24 × 10³⁶ (1.23 × 10³⁶) → 1.2 × 10³⁶. Unchanged by the convention.
- "a thousand billion billion billion billion" = 10³⁹, less than 2.3 × 10³⁹, so "more than" is right.
- Three charges: A on B 1.3485 → 1.35 (exactly 1.35 with 9.0 × 10⁹); C on B 0.9989 → 1.00 (exactly 1.00); net −0.35 N, to the left. Directions correct (both positive charges attract the negative B).
- Quiz 0 (1/4), quiz 1 (1.5), quiz 3 (zero) and quiz 4 (near-neutral bodies): marked answers right, distractors wrong, explanations true.
- Flashcards: all true (flashcard 1 needs the new k).
- Calcs file: every shown number has an entry. To update with finding 1: `k-rounded`, `k-siyavula`, `e-value`, every `inputs` using 8.99e9 or 1.602176634e-19, and the tolerances of `plot-1uc-020` and `beads-mass`. `origin: mit` for source-quoted values follows the existing High School calcs convention.

## Only earlier terms
- vector, components, Pythagoras, trigonometry: Lessons 0.7 and 0.8 (`introducing-vectors`, a prerequisite; planned, written on PC 1; their lesson-list titles and §4 rows cover these). OK.
- force, acceleration, Newton's second and third laws, action–reaction pair, Newton's law of gravitation and G: Block 2 prerequisites (planned, PC 1). OK.
- weight as mg ("weight of 14 mg", "a million tonnes"): Lesson 2.5, not a listed prerequisite but earlier in the path. OK.
- μC and nC: Lesson 0.2 (planned) and defined on the page. OK.
- "vacuum electric permittivity ε₀": named without explanation; fine if reduced to a bracketed aside under finding 1.
- point charge, Coulomb constant, inverse-square law, net force: introduced on the page.

## Coverage
- §4 row 6.2 (Coulomb's law; now from Siyavula 9.2): the law and its units, the size of k, product and inverse-square dependence, attraction and repulsion with Newton's third law, comparison with gravity, net force in one dimension with an example, and a qualitative paragraph on two dimensions. PhET `coulombs-law` is used (`phet: coulombs-law`, present in public/phet/manifest.json). VWO level is right; only the 2D example is thinner than Siyavula (finding 7).

## Where this leads
- `{ course: "8.02", lecture: 1 }` is `fields-gravitational-and-electric`, the §4 target. It writes Coulomb's law as a vector with r̂ and k_e = 1/(4πε₀), places it beside gravity and states superposition; the `why` text is accurate.
- `towards: false` is right. The cosmology Callout's pointer to "the last lesson of this block" matches 6.13 `towards-the-universe-why-gravity-rules`, and its physics (near-neutral bodies, mass of one sign) is correct.

## Licensing and AI terms
- Sources: Siyavula 9.2 online page (CC BY 3.0, allowed) and NIST CODATA (allowed for values). No OpenStax, Khan Academy, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman or Tong is cited, and none was opened for this review.
- No copied sentences found; the point-sphere sentence and the positive-direction rule are reworded.
- Worked examples and quiz are the page's own. Siyavula's are +3 nC / −5 nC at 2 m, two electrons at 10⁻¹⁰ m, +2 / +1 / −3 nC in a line, a +4 / +6 / −3 nC triangle, and exercises (6 nC and 1 nC at 2 mm, pith balls, a glass rod +0.7 μC with silk −0.6 μC, 5 N at tripled distance, 1 C at 1 km). None matches the page's beads, hydrogen atom, A–B–C row or quiz.
- No Siyavula branding (the name appears only in the source title, as in other lessons). No figures: the graph is generated from a formula.

## Notes
- `npm run content:check` and `npm run calc:test` were not run for this review.
- The NIST pages were not fetched; they matter only if the precise k stays as an aside.

## Resolution (2026-11-20, by the page author)

1. (error) Fixed. The page now uses the Block 6 convention throughout: k = 9.0 × 10⁹ N m²/C² in the summary, the displayed Formula "The Coulomb constant" (now cited to reading1, Sec. 9.2, the electrostatic constant; checked on the Siyavula page, which gives 9,0 × 10⁹ N·m²·C⁻² in free space), the quiz 2 explanation, flashcard 1, the Plot expressions (9.0e-3, 9.0e-2) and caption, all worked examples and the Summary. The 8.988 × 10⁹ sentence and "Siyavula rounds it further" are gone; 8.99 × 10⁹ is mentioned once in passing as the more precise value (calcs k-precise, from CODATA ε₀). The hydrogen example uses e = 1.6 × 10⁻¹⁹ C and, for the block convention, m_e = 9.11 × 10⁻³¹ kg (m_p = 1.67 × 10⁻²⁷ kg to match). Calcs: k-from-eps0, k-rounded and k-siyavula replaced by k-block (fact, reading1) and k-precise; e-value, mp-value, me-value and every input updated. Shown results unchanged except those in findings 2, 3 and 5.
2. (warning) Fixed: caption now says 0.225 N; the 2.5% tolerance of plot-1uc-020 removed.
3. (warning) Fixed: "about 15 mg"; beads-mass now computes from the charges (14.7 mg) with a 2.5% tolerance.
4. (warning) Fixed: the aside now says a sphere "with its charge spread evenly over it" acts as if its charge were at its centre, and adds that any small charged object seen from far enough away acts as a point charge.
5. (info) Fixed: the hydrogen steps show three figures, F_e = 9.22 × 10⁻⁸ N and F_g = 4.06 × 10⁻⁴⁷ N, so 9.22/4.06 = 2.27, giving 2.3 × 10³⁹ (the acceleration step uses 9.22 × 10⁻⁸ / 9.11 × 10⁻³¹ = 1.0 × 10²³ m/s²). Two protons: 1.24 × 10³⁶, still 1.2 × 10³⁶.
6. (info) Fixed: "Gravity plays no noticeable part inside an atom."
7. (info) Done: a short worked example "Two forces at right angles" with own numbers (+4.0 μC and −3.0 μC each 0.30 m from +2.0 μC: 0.80 N right, 0.60 N up, net 1.0 N at tan⁻¹(0.60/0.80) = 37° above the right-hand direction), with calcs right-angle-a, -c, -net, -angle.

Checks: `npm run calc:test -- -k coulombs` 33 passed. `npm run content:check`: no errors for coulombs-law (only the four "planned prerequisite" warnings; the remaining errors in the run belong to other Block 6 pages being written in parallel).
