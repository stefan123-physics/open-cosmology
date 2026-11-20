---
page: content/year-2/8.04/resonant-transmission.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes17/ (read: local PDF n17.pdf, Zwiebach, "Chapter 17: Resonant transmission and Ramsauer-Townsend", April 26, 2016, printed pp. 1–5 plus the OCW terms page; page boundaries checked from the printed footers in the pdftotext output)
  - MIT 8.04 syllabus title for Lecture 17 ("... and scattering by finite-range potentials") taken from the course's _course.json, not re-read on OCW
verdict: needs-changes
---

# Review: Resonant transmission and the Ramsauer–Townsend effect

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step (a), bracket | Not in the notes (page's own example). Recomputed: the 10 eV, 0.40 nm well (z₀ = 3.240) has bound states at ξ = 1.194, 2.336, 3.228, i.e. 1.36, 5.20 and 9.93 eV above the bottom (−8.64, −4.80, −0.07 eV), as on the square-well page | "The level n = 2, at 9.40 eV from the bottom, lies below zero: it is close to the well's second bound state." | The n = 2 infinite-well level (9.40 eV from the bottom, −0.60 eV) is close to the **third** (least bound) state at 9.93 eV from the bottom (−0.07 eV), not the second (5.20 eV). Change "second" to "third (least bound)", or drop the comparison. |
| 2 | warning | Whole page / opening paragraph | MIT's syllabus title for Lecture 17 also lists "scattering by finite-range potentials"; Chapter 17 of the notes does not cover it (one-dimensional scattering off a finite-range potential with a hard wall, phase shifts, is Chapter 18) | Silent | Add one sentence to the opening note: the syllabus title also mentions scattering by finite-range potentials, which these notes do not treat; it is taken up on the next page (Lecture 18, phase shifts). This tells the reader nothing was skipped. |
| 3 | info | "Condition for resonance", (1.12) | Notes: since e > 0 the left side is "bigger than or equal to 2z₀", so n ≥ 2z₀/π | "n ≥ 2z₀/π ... the inequality comes from e > 0" | Matches the notes. Strictly e > 0 gives n > 2z₀/π (n = 2z₀/π would be E = 0, where T → 0). Optional: write ">" or note that equality gives E = 0, not a resonance. |
| 4 | info | "Perfect transparency" | (1.13): e_n + 1 = n²π²/(4z₀²) = n²π²ħ²/(2m(2a)²V₀) | (1.13) not shown; the page goes straight to (1.14) | Fine; optional to add the unitless form, which is what the plot and the 13π/4 example use. |
| 5 | info | Ramsauer–Townsend section | Notes p. 4 describe Figure 4 (sketch of R and T against energy, R + T = 1, arrow at R = 0 near 1 eV) | Described in words; no figure | Fine (figure correctly not reproduced). Optional: a generated plot of R = 1 − T from the same formula. |
| 6 | info | Historical statement, 1921 | "Carl Ramsauer and John Sealy Townsend published separately their investigations in 1921" | "In 1921 Carl Ramsauer and John Sealy Townsend, separately, studied ..." | Faithful to the notes. Uncertain (from memory, not verified here): Ramsauer's papers are 1921 (Ann. Phys.), while Townsend's argon work was with V. A. Bailey and appeared mainly in Phil. Mag. in 1921–1922. "In the early 1920s" or "with V. A. Bailey" would be safer; not required. |
| 7 | info | Quiz 1 explanation | Notes p. 2: a non-normalizable eigenstate need not be even or odd; symmetry broken by the incident wave | "Bound states of an even potential are even or odd" | Correct for 1D bound states (non-degenerate). No change needed. |

Citations checked against the printed footers (all correct):
- (1.1) p. 1 ✓; (1.2) p. 1 and (1.3) p. 2, so "pp. 1–2, eqs. (1.2)–(1.3)" ✓.
- Not even or odd, p. 2 ✓; (1.4)–(1.6) p. 2 ✓; "not an independent equation" p. 2 ✓; "straightforward but laborious", (1.7) p. 2 ✓; T ≤ 1 and the limits E → 0, ∞ p. 2 ✓.
- (1.8)–(1.10) p. 2 ✓; (1.11)–(1.12) p. 2 ✓; (1.14) p. 3 ✓; (1.15) p. 3 ✓.
- z₀ = 13π/4 example, n ≥ 13/2, n ≥ 7: p. 3; Figure 3 caption (three resonances for 0 < E < V₀, spacing grows): p. 4; so "pp. 3–4" ✓.
- Section 2 starts at the foot of p. 3 and continues on p. 4: "pp. 3–4" ✓; reflection coefficient as proxy, ~1 eV and ~600 km/s, 3D spherical well needed: p. 4 ✓.
- Formulas match the notes' notation (V₀, a, 2a width, k, k₂, A–F, e, z₀) ✓.

## Arithmetic and answer checks
- z₀ = a√(2m_ec²V₀)/(ħc) = 0.20 √(2·511000·10)/197.33 = 3.2402 ✓ (also with CODATA SI constants). 2z₀/π = 2.063 ≈ 2.06 ✓, so n = 3, 4, … ✓.
- Infinite-well ground level for 0.40 nm: 2.3502 eV ✓. E₃ = 9·2.3502 − 10 = 11.15 ≈ 11.2 eV ✓; E₄ = 16·2.3502 − 10 = 27.60 ≈ 27.6 eV ✓; n = 2 level 4·2.3502 = 9.40 eV from the bottom (−0.60 eV, below zero) ✓, but see finding 1 on which bound state it is near.
- (b) e = 0.5: 2z₀√1.5 = 7.937 ≈ 7.94 ✓; sin² = 0.9932 ≈ 0.993 ✓; 1/T = 1 + 0.9932/3 = 1.331 ✓; T = 0.7513 ≈ 0.75 ✓; "a quarter reflected" ✓ (R ≈ 0.249).
- (c) c√(2/511000) = 593.1 km/s (c = 2.998×10⁵) or 593.5 (c = 3.0×10⁵); "≈ 593" ✓; consistent with the notes' "about 600 km/s" ✓.
- Notes' example z₀ = 13π/4 = 10.2102 ≈ 10.21 ✓; 2z₀/π = 6.5 ✓, first resonance n = 7 ✓. e_n = (nπ/(2z₀))² − 1: n = 7, 8, 9 → 0.160, 0.515, 0.917 (three below e = 1) ✓; n = 10, 11 → 1.367, 1.864 (inside the plot domain e ≤ 2) ✓. Spacing in e is (π/(2z₀))²(2n + 1), which grows with n ✓ (caption and summary).
- Unitless form: V₀²/(4E(E + V₀)) = 1/(4e(1 + e)) ✓; (k₂a)² = z₀²(1 + e) ✓.
- Plot: expression 1/(1 + sin²(2Z√(1+s))/(4s(1+s))) is (1.10) ✓; default Z = 10.21 ✓; slider 1–12 always shows at least one resonance in 0.005 ≤ e ≤ 2 (at Z = 1, n = 1 gives e = 1.47) ✓; range [0, 1.15] contains T ≤ 1 ✓. Caption statements all verified above ✓.
- calcs/8.04/resonant-transmission.yaml covers every number on the page; entries agree with the recomputation above. (The bracketed comparison in finding 1 has no calc entry; it is qualitative.)
- Quiz: Q1 answer 0 ✓; Q2 answer 0 ✓ (sin(2k₂a) = 0 ⇔ k₂(2a) = nπ); Q3 answer 0 ✓ (eq. 1.14, with E_n > 0); Q4 answer 0 ✓ (notes p. 4; distractors are Davisson–Germer, Compton, alpha decay). Explanations correct.
- Flashcards: all three agree with (1.3), (1.7), (1.14)–(1.15) and p. 4 ✓.

## Coverage and order
- Page follows the notes' order: Section 1 (well, ansatz, symmetry remark, R and T, (1.7), unitless form, resonance condition, infinite-well levels, half wavelengths, 13π/4 example), then Section 2 (Ramsauer–Townsend). ✓
- Left out: eq. (1.13) (info, finding 4); Figures 1–4 (by design, Figure 3 replaced by a generated plot, which is better).
- Added: original worked example (re-using the square-well page's 10 eV, 0.40 nm well, a good link).
- MIT syllabus topic "scattering by finite-range potentials" is not in Chapter 17; the page should say so (finding 2). The page's leadsTo to Lecture 18 (phase shifts, time delay, Levinson's theorem) matches the course syllabus and is where that topic belongs.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes (grep found none); only OCW's standard terms page.
- No figures reproduced; the plot is generated from (1.10).
- Wording is rewritten throughout. Close-to-source but short phrases: "straightforward but laborious", "no classical explanation", "the waves fit perfectly inside the well", "the electrons pass straight through the atoms". All are brief and acceptable; none is a copied sentence.
- Worked example is original (own well, own energies), not taken from the notes.
- No OpenStax or LibreTexts material.

## Notes
- No `<Callout kind="cosmology">`; acceptable for this lecture. leadsTo (8.04 Lecture 18) is accurate.
- Status is `draft`; set `reviewed` only after finding 1 is fixed (and preferably finding 2).
- Item 6 (Townsend's dates/co-author) is from memory and was not checked against the original papers; treat it as uncertain.

## Resolution (2026-11-17, by the page author)

1. Fixed: the n = 2 infinite-well level is now said to lie close to the well's third, least bound state at −0.07 eV (calcs entry `ex-third-bound-state` added).
2. The opening note now says MIT's calendar also lists scattering by finite-range potentials for this lecture, and that the topic is in the next chapter and on the next page.
3. Added "(strictly, n > 2z₀/π, since equality would mean E = 0)".
4. Added the unit-free form e_n + 1 = n²π²/(4z₀²), eq. (1.13).
5. No change.
6. The date now reads "Around 1921 (the year the notes give)".

Status set to `reviewed`.
