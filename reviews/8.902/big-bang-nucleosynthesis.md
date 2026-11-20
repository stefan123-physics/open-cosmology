---
page: content/year-5/8.902/big-bang-nucleosynthesis.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec20.pdf (read; local copy, all five PDF pages rendered, printed pp. 109–112 plus the OCW end page)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec21.pdf (read; local copy, pdftotext of all nine pages, printed pp. 113–120, to check the leadsTo claim)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDFs above)
verdict: needs-changes
---

# Review: Big Bang nucleosynthesis: the first nuclei

The source is section 3 of the 8.902 notes (Lecture 20), eqs. (477)–(493) on printed pp. 109–112. Printed p. 109 opens with the second half of the hot-universe timeline (Peccei–Quinn transition to today), which the page leaves to `dark-matter-freeze-out`; that page's "A timeline of the hot universe" section lists every item on p. 109 (PQ, WIMP freeze-out, quark–hadron, BBN, keV/1 day, equality, recombination, first stars, today), so nothing is lost.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Bracket after the first plot ("The notes do not show the step from T to t…") | Eq. (490): t ≈ 200 s, no derivation. | "A rough rule for the radiation era at these temperatures, t ≈ (10¹⁰ K/T)² s, gives about 170 s … consistent with their 200 s." The rule t ≈ 1 s × (10¹⁰ K/T)² holds only **before** electron–positron annihilation (g* = 10.75: t = 0.99 s at 10¹⁰ K). At kT ≈ 0.066 MeV the pairs are gone; with photons plus three neutrino species (g* = 3.36, the value the `dark-matter-freeze-out` worked example uses) t = 1/2H gives t ≈ 1.78 s × (10¹⁰ K/T)², i.e. **about 310 s** at T = 7.6 × 10⁸ K. So "at these temperatures" is wrong, and the page contradicts its own prerequisite page. | Rewrite the bracket, e.g.: "[The notes do not show the step from T to t. The radiation-era relation t = 1/2H with photons and three neutrino species (g* = 3.36, as on the dark matter page) gives t ≈ 1.8 s × (10¹⁰ K/T)², about 300 s at 7.6 × 10⁸ K; the notes' 200 s is the right order of magnitude (the simple rule t ≈ (10¹⁰ K/T)² s, valid before electron–positron annihilation, gives 170 s).]" Update the `rough-time` calcs entry, and consider one sentence that with 300 s the decay estimate gives Y ≈ 0.24 (worked example (c)'s number), closer to observation. |
| 2 | warning | `leadsTo` Lecture 21, `why` | Lecture 21 notes (pp. 113–120) cover the Lyman-α forest: line formation, Gunn–Peterson test, optical depth eqs. (494)–(503), ionization by temperature vs photoionization, eqs. (504)–(509). Deuterium is **not mentioned** (checked by search and by reading the text). The D/H link is made only in the Lecture 20 notes, p. 112. | "The Lyman-alpha forest in quasar spectra, where the deuterium-to-hydrogen ratio of nearly pristine gas is measured." Reads as if Lecture 21 treats D/H. | E.g. "The Lyman-alpha forest in quasar spectra: absorption by intergalactic hydrogen, which these notes name as the place where D/H is measured (Lecture 21 itself treats the forest and reionization, not deuterium)." |
| 3 | info | "What BBN measures", 2nd bullet | "Deuteron abundance is a sensitive measure for Ω_b" (p. 112), no reason given. | Adds "(with more baryons, more of it is burned on to helium)". | Correct physics; it is the page's addition. Fine as is; optionally mark as such. |
| 4 | info | Same bullet | "can be found with the Lyman-α forest relating line strength of H and D". | "gas clouds … absorb at the slightly shifted lines of hydrogen and deuterium". | Matches. Strictly, precision D/H comes from the denser absorbers (Lyman-limit and damped systems) rather than thin forest lines; not required here. |
| 5 | info | Bracket after eq. (493) / worked example (b) | Eq. (493): Y ≈ 0.25 with n_n/n_p ≈ 0.15. | "With the rounded ratio 0.15, eq. (493) gives 2(0.15)/1.15 = 0.26; the notes round to about 0.25." | Correct (0.261). Fine. |
| 6 | info | Worked example (c) | — | "If the baryon density were lower, so that deuterium formed only at 300 s…" | Correct as a conditional. Within the page's own Saha model a delay from 200 s to 300 s needs kT lower by √1.5 (0.0655 → 0.0536 MeV), i.e. η about a thousand times smaller (≈ 4 × 10⁻¹³); η = 10⁻¹⁰ moves the crossing only to 0.0624 MeV (about 11% later). Optionally add a half-sentence that the timing depends only logarithmically on η, which is why Y is a weak probe (the page already says "the dependence is gentle"). |
| 7 | info | "Neutrons and protons in equilibrium" | Eq. (479) on p. 109, eq. (480) on p. 110. | One Formula cited "eqs. (479)–(480), pp. 109–110". | Correct. |

Every Formula checked against the rendered pages; all equation numbers and printed pages are right:
(477) p. 109; (478) p. 109; (479)–(480) pp. 109–110; (481) p. 110; (482) p. 110; (483) p. 110; (484) p. 110; (485) p. 110; (486) p. 111; (487)–(488) p. 111; (489) p. 111; (490) p. 111; (491) p. 111; (492) p. 111; (493) p. 112. The tex of each matches the notes (with the slips below corrected and flagged).

Bracketed slip notes, all verified on the rendered PDF:
- Eq. (478) prints (mkT/2πħ)^{3/2} without the square on ħ; eq. (484) and Lecture 19's eq. (466) have ħ². Correct note.
- Eq. (479) prints (m_m − m_p) in the exponent. Correct note.
- Eq. (489): the notes write "0.24·5/1.25", then "π^{3/2}·1.25" with "5.5·1.25 = 6.9". The exact prefactor is 6 × 5/6 × 0.24 × π^{3/2} = 1.2 × 5.568 = 6.68. Correct note; the crossing temperature changes by 0.1% (0.06554 vs 0.06560 MeV), so "less than a percent" is right.
- "half-life t₁/₂ = 890 s" (p. 111): with a half-life of 890 s, n_n/n_p after 200 s would be 0.166, not 0.15; with mean life 890 s it is 0.154. So the notes' number does use 890 s as a mean lifetime. Correct note; τ ln 2 = 617 s ≈ 620 s.
- "gluon-gluon plasma" (p. 109): quoted correctly, page uses quark–gluon plasma.

## Arithmetic and answer checks
Recomputed with the project venv (SciPy `brentq`):
- e^(−1.29/0.8) = e^(−1.6125) = 0.1994. Correct (0.199, 0.20).
- (939.565/938.272)^{3/2} = 1.00207. Correct (1.002).
- Y = 4/12 = 0.333. Correct.
- (3/4)·2^{3/2}·2^{3/2} = 6. Correct; the reduction of (484) to (485) with m_D = 2m_n is right.
- 2ζ(3)/π² = 0.2436 ≈ 0.24. Correct.
- π^{3/2} = 5.568; 1.2 × 5.568 = 6.68 ≈ 6.7; 6.9 × 5 × 10⁻¹⁰ = 3.45 × 10⁻⁹ ≈ 3.4 × 10⁻⁹. Correct.
- The ħ powers in eq. (489) do cancel: (kT/ħc)³ (πħ²/m_n kT)^{3/2} = π^{3/2}(kT/m_n c²)^{3/2}. Correct.
- Saha crossing, exact prefactor, η = 5 × 10⁻¹⁰, m_n c² = 939.565 MeV: kT = 0.06554 MeV, T = 7.61 × 10⁸ K. Caption's 0.066 MeV and 7.6 × 10⁸ K correct; marked point x = 0.0657 gives log₁₀ = −0.03, on the line.
- Plot 1 values: log₁₀(n_D/n_n) = −4.79 at 0.1 MeV, +4.40 at 0.05 MeV, inside the range [−5, 5]. "Negligible at 0.1 MeV and takes over within a small drop in temperature" is right. Larger η → higher crossing temperature: η = 10⁻⁹ gives 0.0670 MeV, η = 10⁻¹⁰ gives 0.0624 MeV. Correct.
- (10¹⁰/7.6 × 10⁸)² = 173 ≈ 170: arithmetic correct, but see finding 1 (the rule does not apply here; t = 1/2H with g* = 3.36 gives 308 s).
- e^(−200/890) = 0.7987; X_n = 0.1331; n_n/n_p = 0.1536; Y = 2X_n = 0.2662. Correct (0.799, 0.133, 0.154, 0.266, plot point 0.2662, caption 0.27).
- 2(0.15)/1.15 = 0.2609. Correct.
- e^(−300/890)/6 = 0.1190; Y = 0.2380. Correct.
- Y = 2n_n/(n_p + n_n) = 2X_n: algebra correct, and eq. (492) rewritten correctly with n_He = n_n/2, n_H = n_p − n_n.
- Quiz 1 (answer index 1, "about 1 to 5"): correct. Quiz 2 (index 1, photon tail): correct; η ∼ 5 × 10⁻¹⁰ and T ≈ 8 × 10⁸ K match the notes. Quiz 3 (index 2, 0.33): correct. Quiz 4 (index 1, Y increases): correct, matches p. 112.
- Flashcards: all three correct (2 × 10⁹ photons per baryon = 1/η; Y formula; 0.15 → 0.26 ≈ 0.25).
- Callout: Ω_b ≈ 5% (Planck 2018 Ω_b h² = 0.0224, h = 0.674 → 0.049) and the lithium-7 overprediction by about a factor 3 (3–4 in Fields 2011) are correct as later developments. The D/H vs CMB agreement is correct (BBN D/H gives Ω_b h² ≈ 0.022, Planck 0.0224); a mild tension of order 1–2σ reported in some post-2020 analyses does not contradict "agree closely". These are not from the notes; the callout title marks them as later measurements.
- `calcs/8.902/big-bang-nucleosynthesis.yaml`: every entry matches the page text and cites the right equation/page. `npm run calc:test -- -k big-bang`: 38 passed. The `rough-time` entry will need changing with finding 1.

## Coverage and order
- Section 3 of the Lecture 20 notes is covered completely and in the notes' order: weak reactions (477), equilibrium density (478), n/p ratio (479)–(481), deuteron reaction and bottleneck (482), instant-fusion estimate (483), Saha (484)–(486), proton density (487)–(488), the numerical condition (489)–(490), neutron decay (491), helium fraction (492)–(493), and both closing notes on p. 112.
- The p. 109 timeline is left to `dark-matter-freeze-out`, which covers all of it (checked item by item).
- Additions (all marked or plainly the page's own): the 6 = (3/4)·2^{3/2}·2^{3/2} step, ζ(3) origin of 0.24 (only in calcs), the Saha plot, the decay plot, the worked example, the "Y = 2X_n" form, the T-to-t bracket, the later-measurements callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the Lecture 20 PDF (searched and checked on the rendered pages); it has no figures. The Lecture 21 PDF has a "Courtesy of THESAN Collaboration. Used with permission." credit on its title page; this page does not use that image, so no `courtesy:` is needed.
- Text is rewritten; quoted fragments ("gluon-gluon plasma") are inside slip notes. Both plots are generated from stated formulas. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` Lecture 21 has no page yet, so it renders as plain text until one exists.
- The finding 1 times were computed with t = 1/2H, ρ = g*(π²/30)(kT)⁴/(ħ³c⁵), g* = 3.36; a full BBN code gives deuterium formation at roughly 3 minutes or a bit later, consistent with about 300 s. I did not check which textbook the notes' 200 s comes from (uncertain).
- Uncertain: whether the symbol entries added in `data/symbols.json` for this page are complete; `content:check` was not run as part of this review.

## Resolution (2026-11-17, by the page author)

1. Error (time rule): the bracket now uses t = 1/2H with photons and three neutrino species after e± annihilation, t ≈ 1.78 s × (10¹⁰ K/T)² (recomputed: 1.778 s), about 310 s at 7.6 × 10⁸ K, and says the notes' 200 s is the same order (literature: about 3 to 5 minutes). The `rough-time` calcs entry changed with it.
2. Warning (leadsTo): reworded: Lecture 21 is about quasar absorption spectra and the Lyman-α forest, the technique behind D/H measurements, used there for reionization.
3. Info: worked example (c) now says a 300 s delay would need a far smaller η in the page's Saha model and only shows the direction; the D/H paragraph now notes that precise measurements use Lyman-limit and damped absorbers. Other info items need no change.

Status set to `reviewed`.
