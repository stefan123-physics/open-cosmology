---
page: content/year-5/8.902/lyman-alpha-forest.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec21.pdf (read; local copy, all nine PDF pages rendered, printed pp. 113–120 plus the OCW end page)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
verdict: needs-changes
---

# Review: The Lyman-α forest and the reionization of the universe

The source is Part IV, section 1 of the 8.902 notes (Lecture 21): the Part IV title page with the THESAN image (p. 113), 1.A Basics (pp. 114–116: line formation, two quasar spectra, notes on doublets / forest range / column densities, the Gunn–Peterson test with the z = 6.13 spectrum and two sketches), the neutral→reionized timeline sketch (p. 117), 1.B the quantitative treatment, eqs. (494)–(503) (pp. 117–118), Ionization, eqs. (504)–(509) (p. 119), and the X_HI(z) history sketch (p. 120).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "What keeps the gas ionized?", sentence after the eq. (504) bracket; quiz 3 explanation ("too cool to ionize hydrogen by collisions") | p. 119: T ∼ 30,000 K ∼ 3 eV "which is not enough to ionize hydrogen". | "That is far below the 13.6 eV needed to ionize hydrogen, so collisions cannot do it." This repeats a physics slip in the notes. Collisions are driven by the Boltzmann tail, not by the mean kT: in collisional ionization equilibrium (Cen 1992 rates, recomputed) the neutral fraction is 0.13 at 2 × 10⁴ K, 0.03 at 2.4 × 10⁴ K and 0.007 at 3 × 10⁴ K. So gas at these temperatures is mostly ionized by collisions; what collisions cannot do is bring X_HI down to ∼10⁻⁵. | E.g. "kT ≈ 2–3 eV is well below 13.6 eV, so only the fastest electrons can ionize. In collisional equilibrium at 2–3 × 10⁴ K about 1% to 10% of the hydrogen would stay neutral, a thousand times more than the forest allows. [The notes say this temperature is 'not enough to ionize hydrogen'; it ionizes most of it, but not nearly enough.]" Adjust quiz 3's explanation to "too cool for collisions to reach a neutral fraction of 10⁻⁵". |
| 2 | warning | Formula "Values for the estimate" (eq. 503) vs the text after eq. (495) | p. 117: σ(ν) = 10⁻² cm² φ(ν − ν₀) "with units cm²Hz⁻¹"; eq. (503) and the line after (502): σ₀ = 10⁻² cm². | Text: "σ₀ ≈ 10⁻² cm² Hz" (correct: πe²f/m_e c has units cm² s⁻¹). Formula (503): "σ₀ = 10⁻² cm²", copied from the notes, so the page contradicts itself, and the worked example's "1.2 × 10⁻¹² s⁻¹" only follows with cm² Hz. The notes' "cm²Hz⁻¹" is silently corrected. | Write σ₀ = 10⁻² cm² Hz in the formula and add a bracket: "[The notes give the unit as cm² Hz⁻¹ on p. 117 and cm² in eq. (503); πe²f/m_e c has units cm² Hz, so that τ is dimensionless.]" |
| 3 | warning | Plot, curve label | — | `label: "uniform IGM, neutral fraction 10^lx"`. `components/Plot.tsx` shows curve labels literally (legend, table, listen), so readers see "10^lx", a parameter name they never see elsewhere. | E.g. "uniform IGM (neutral fraction set by the slider)". |
| 4 | info | "Some practical points", forest-range bullet | p. 115: "only visible if it extends to shorter wavelengths than the observed Lyα emission line…"; the inequality "1216Å(1 + z_em < λ) < 1216Å" is garbled (reversed and misbracketed). | "between the rest-frame 1216 Å and the observed emission line". The lower end is the **observed** wavelength 1216 Å (absorption by gas at z ≈ 0); "rest-frame" reads as if it were in the quasar's frame. The explanation that follows is right. | Say "between an observed 1216 Å (gas near us) and the observed emission line"; optionally note the notes' inequality is garbled. |
| 5 | info | Worked example (c) | Figure p. 116 labels a "Lyβ+Lyα forest" region below Lyβ. | "In practice the short end is limited by the atmosphere and by Lyman-β absorption, which appears below 1026 Å × 4 = 4103 Å." Lyβ does not end the Lyα forest; below 4103 Å the two overlap. | "…the clean Lyman-α forest lies between 4103 and 4864 Å; below 4103 Å Lyman-β lines of other clouds are mixed in." |
| 6 | info | Gunn–Peterson section, first bullet | Figure p. 116 shows a "Lyα near-zone" (transmission) between the Lyα line and the "Lyα GP trough" at about 8350–8550 Å, and transmission spikes in the forest farther short-ward. | "a Gunn–Peterson trough just below its Lyman-α line". | Optional: "a trough a little short-ward of its Lyman-α line, beyond a small 'near zone' that the quasar itself has ionized". |
| 7 | info | "The history of reionization", third bullet | Sketch p. 120: X_HI falls from 1 near z ≈ 15 to 0 around z ≈ 5. | "roughly z ≈ 15 down to 6 in the notes' sketch". | Acceptable reading of a hand sketch (the text on p. 116 gives z ≈ 6); fine as is. |
| 8 | info | Ionization equilibrium | p. 119: "setting the ionization and recombination **timescales** equal", then eq. (507) equates rates. | "Setting the two rates equal". | Correct, silently fixed; fine. |
| 9 | info | Path length, eq. (496) | Notes include the intermediate (c/a) da/(ȧ/a). | Omits that step. | Fine. |

Every Formula checked against the rendered pages; all equation numbers and printed pages are right:
(494) p. 117; (495) p. 117; (496) p. 117; (497)–(498) p. 117; (499) p. 118; (500) p. 118; (501)–(502) p. 118; (503) p. 118; (504) p. 119; (505) p. 119; (506) p. 119; (507) p. 119; (508) p. 119; (509) p. 119. The tex of each matches the notes (Ω_M,0 written Ω_m,0, noted on the page; eq. (506)'s "∼ 3 × 10⁶ yr" removed and flagged). The delta-function step from (500) to (502) is correct: the δ gives a factor 1/ν = (1 + z)/ν₀, turning (1 + z)^(−5/2) into (1 + z)^(−3/2).

Bracketed slip notes, all verified on the rendered PDF:
- "μ0II (λ = 2795 Å, 2802 Å)" (p. 115, printed μ with subscript 0II): the Mg II doublet is at 2795.5/2802.7 Å (air) or 2796.4/2803.5 Å (vacuum); both the notes' and the page's numbers are fine. Correct note.
- DLA threshold "N_H ≳ 10³² cm⁻²" (p. 115): the standard definition is N_HI ≥ 2 × 10²⁰ cm⁻² (Wolfe et al. 1986). Correct note.
- "the high-wavelength region of the spectrum will be almost totally absorbed" (p. 116): it is the region short-ward of Lyα, as the p. 116 figure and sketch show. Correct note.
- Eq. (504): m_p(20 km/s)²/2k = 2.42 × 10⁴ K, kT = 2.09 eV; 30,000 K is 2.6 eV. "the notes round up" is fair. Correct note (but see finding 1 for the conclusion drawn from it).
- "Γ ∼ 10⁻¹² ionizing photons per second" (p. 119): Γ is a rate per atom (s⁻¹). Correct note.
- Eq. (506) "2 × 10¹⁷ s ∼ 3 × 10⁶ yr": 2 × 10¹⁷ s = 6.3 × 10⁹ yr (1/(4.3 × 10⁻¹³ × 10⁻⁵) = 2.33 × 10¹⁷ s = 7.4 × 10⁹ yr). Correct note; the conclusion (recombination slower than ionization) is only strengthened.

## Arithmetic and answer checks
Recomputed with the project venv (NumPy/SciPy):
- 1216 × 4 = 4864; 1216 × 3.5 = 4256; 1025.72 × 4 = 4102.9 ≈ 4103; 1216 × 7.13 = 8670.1. Correct.
- hc/912 Å = 12398.4/912 = 13.59 eV. Correct.
- H₀ = 70 km/s/Mpc = 2.27 × 10⁻¹⁸ s⁻¹ (notes 2.3). Correct.
- Numerator 10⁻² × 10⁻⁵ × 1.216 × 10⁻⁵ = 1.22 × 10⁻¹² s⁻¹; denominator 2.27 × 10⁻¹⁸ × 0.548 × 8 = 9.94 × 10⁻¹⁸ s⁻¹; τ = 1.22 × 10⁵. Correct; 1/(1.2 × 10⁵) = 8.3 × 10⁻⁶ ≈ 8 × 10⁻⁶. Correct.
- n_H = ρ_crit Ω_b (1 + z)³/m_H at z = 3 with Ω_b = 0.049, h = 0.7: 1.7 × 10⁻⁵ cm⁻³, "∼10⁻⁵" fine.
- σ₀ = πe²f/m_e c with f = 0.4164: 0.0110 cm² Hz ≈ 10⁻². Correct.
- Plot: expression exp(−1.2 × 10⁵ X ((1 + z)/4)^1.5) follows from τ ∝ n_HI/(1 + z)^{3/2} ∝ (1 + z)^{3/2}. Correct. Default X = 10⁻⁵: e^(−1.2) = 0.301 at z = 3 (point y = 0.301, "30%"), e^(−2.78) = 0.062 at z = 6 ("6%"). Correct. X = 10⁻³: τ = 78 already at z = 2, "essentially zero at every redshift". Correct.
- 10¹² s = 3.17 × 10⁴ yr ∼ 30,000 yr. Correct.
- X_HI = 4.3 × 10⁻¹³ × 10⁻⁵/10⁻¹² = 4.3 × 10⁻⁶ ∼ 5 × 10⁻⁶. Correct.
- "complete by about z ≈ 6, roughly a billion years after the Big Bang": flat Ω_m = 0.3, H₀ = 70 gives t(z = 6) = 0.92 Gyr. Correct (and matches the p. 117 sketch's "1 billion").
- Quiz 1 (index 2, 4256 Å): correct. Quiz 2 (index 1): correct. Quiz 3 (index 1, photoionization): correct answer; the explanation's "too cool to ionize hydrogen by collisions" needs the finding 1 change; "recombination billions of years" agrees with the page's corrected time. Quiz 4 (index 1): correct.
- Flashcards: all three correct (line positions; GP formula and τ ∼ 10⁵ → X ∼ 10⁻⁵; equilibrium X ≈ Rn_H/Γ ∼ 5 × 10⁻⁶).
- `calcs/8.902/lyman-alpha-forest.yaml`: every entry matches the page text and cites the right equation/page. `npm run calc:test -- -k lyman`: 36 passed. If finding 2 is fixed no number changes; finding 1 would add a fact or computed entry for the CIE neutral fraction if quoted.

## Coverage and order
- Section 1 of the Lecture 21 notes is covered completely and in order: quasars as backlights and the line-formation sketch (p. 114), the two spectra (described only, p. 115), the three notes (doublets, forest range, three absorber classes), the Gunn–Peterson test and the z = 6.13 spectrum (pp. 115–116), the two "what is observed" sketches and the z ≈ 6 conclusion, the timeline sketch (p. 117, folded into "a billion years"), eqs. (494)–(503), the τ ∼ 10⁵ vs 1 argument, eqs. (504)–(509), the closing paragraph with HERA and THESAN, and the X_HI(z) sketch (p. 120).
- The p. 117 sketch labels the left tick "5 million" years; the page does not use it (unclear what it marks; not needed).
- Additions (all plainly the page's own): the worked examples, the Gunn–Peterson plot, Lyman-β refinement, the 21 cm description of HERA, recombination at z ≈ 1100, "forest lines come from denser clumps and filaments".
- leadsTo is empty, appropriate for the last 8.902 lecture. The page has no cosmology callout; it is itself a cosmology-role page. The opening paragraph's claims about earlier pages are right: `cmb-anisotropies` mentions reionization by the first stars, galaxies and quasars; `big-bang-nucleosynthesis` says D/H is measured with the Lyman-α forest technique. Both prerequisites exist.

## Licensing
- The only rights notice in the PDF is "Courtesy of THESAN Collaboration. Used with permission." under the Part IV image (p. 113). The page only mentions the image in words and says it is not reproduced; no figure is used, so no `courtesy:` entry is needed.
- The quasar spectra (3C 273, Q1422+2309, ULAS J1319+0959) and the sketches are described in words only; the one plot is generated from eq. (502). No "All rights reserved" notice in the PDF.
- Text is rewritten; the short phrases quoted from the notes ("high-wavelength region", "ionizing photons per second", "μ0II") are inside slip notes. The list "density, ionization, temperature, chemistry and structure" follows the notes' wording but is a short list of standard terms. No OpenStax or LibreTexts material.

## Notes
- The CIE neutral fractions in finding 1 use the Cen (1992) collisional ionization rate and case-A recombination coefficient; other rate fits move the numbers by tens of percent but not the conclusion (mostly ionized at 2–3 × 10⁴ K, far above 10⁻⁵ neutral).
- `content:check` was not run as part of this review; symbol entries in `data/symbols.json` for this page were not checked.

## Resolution (2026-11-17, by the page author)

1. Error (collisional ionization): the page now gives the notes' conclusion as theirs and adds a bracket: the thermal tail does ionize most of the hydrogen at these temperatures (a few percent neutral at about 2.4 × 10⁴ K in collisional equilibrium), but collisions cannot bring the neutral fraction down to 10⁻⁵. Quiz 3's explanation and the summary bullet are reworded to match.
2. Warning (σ₀ units): eq. (503) now shows 10⁻² cm² Hz, with a bracket noting that the notes print cm² there and cm² Hz⁻¹ on p. 117.
3. Warning (plot label): the curve label is now "uniform IGM at the chosen neutral fraction".
4. Info: the forest range now starts at an observed 1216 Å; Lyman-β is described as overlapping below 4103 Å (clean forest 4103–4864 Å); the near-zone next to the Lyα line is mentioned. Other info items need no change.

Status set to `reviewed`.
