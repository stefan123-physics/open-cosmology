---
page: content/year-3/8.06/hydrogen-fine-structure-pauli-dirac.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l4-1/ (resource page not re-fetched; the four segment transcripts below were read)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/374864b8dba733a6d0e1b1abc06d5bc4_FXRRP-PB4Bk.pdf (read: L4.1 transcript, 6 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/9e97c056d8067c1cfb4cb4d0c4a9107d_2-Td1mID8oQ.pdf (read: L4.2 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/7993c29f169cfaebc5af092e3bc6126f_tl7q_VZ3eIQ.pdf (read: L4.3 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/34ac7dba9447fd7b2b70b8bb0d27037c_lr4HqQ_sLO0.pdf (read: L4.4 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-2-hydrogen-fine-structure/ (read: chapter 2 PDF, printed pp. 25-36 rendered as images to read every equation exactly; the rest as text)
  - content/year-4/8.286/temperature-and-decoupling.mdx (read, for the 4,000 K recombination figure)
verdict: needs-changes
---

# Review: Hydrogen's fine structure: scales, the coupled basis, and the Pauli and Dirac equations

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Cosmology callout, "far below the 158,000 K at which a typical photon would carry 13.6 eV" | Not from MIT (physics check). 13.6 eV / k = 157,900 K is the temperature at which **kT** equals 13.6 eV. A black-body photon's mean energy is about 2.70 kT, so a *typical* photon carries 13.6 eV already at about 58,000 K; at 158,000 K the mean photon energy is about 37 eV | "the 158,000 K at which a typical photon would carry 13.6 eV" | Say "far below the 158,000 K at which kT equals 13.6 eV" (the calcs entry `binding-temperature` already computes 13.6 eV/k, so only the wording changes). Or keep "typical photon" and use about 58,000 K (add a calcs entry 13.6/(2.701 k)). |
| 2 | warning | Cosmology callout: "photons outnumber atoms by more than a billion to one", "about 4,000 K" | Neither fact is in 8.06 Lecture 4 or chapter 2. The 4,000 K recombination figure is Guth's (8.286 Lecture 17, as used on `temperature-and-decoupling`, where decoupling is ~3,000 K). The photon-to-baryon ratio (about 1.6 × 10⁹, i.e. η ≈ 6 × 10⁻¹⁰) is a standard later measurement | Stated without any source; `references: {}` is empty | Add a reference (e.g. the 8.286 Lecture 17 transcript, or the site page `temperature-and-decoupling`) and attribute: "in Guth's figure, about 4,000 K". For the photon ratio, cite a source or mark it as a standard value. Both figures are correct as physics. |
| 3 | warning | `calcs/8.06/hydrogen-fine-structure-pauli-dirac.yaml`, entries `recombination-temperature` and `photons-per-atom` | Chapter 2 of the 8.06 notes (reading5) contains neither number | `source: {cite: reading5, …}` | Cite the reference added for finding 2 (e.g. a `references` key for 8.286 Lecture 17) instead of reading5; for `photons-per-atom` use `source: {ref: …}` as AGENTS.md rule 7 asks for a later measurement. |
| 4 | info | "The Dirac equation and hydrogen's corrections", Thomas precession | L4.4 pp. 3-4: heuristic arguments are "off by a factor of 2 that is associated to Thomas precession" (no direction given) | "come out a factor of 2 too large unless Thomas precession is included" | Physically correct (the naive rest-frame argument gives twice the Dirac value), but the direction is the page's addition. Fine as is; optionally "(the naive estimate is twice too large)" as the page's own remark. |
| 5 | info | Same section, Darwin term | L4.4 p. 4: "It's called the Darwin term. ... Not the biologist. Some Darwin." The notes give no name | "named after the physicist Charles Galton Darwin, not the biologist" | The identification is correct (C. G. Darwin, 1887-1962, physicist, grandson of the naturalist; the term comes from his 1928 work on the Dirac equation) but is not from MIT. Acceptable; consider "(Zwiebach: 'not the biologist'; it is the physicist C. G. Darwin, the naturalist's grandson)" so the reader sees what is MIT's. |
| 6 | info | Same section, "a derivation the lecture leaves to Shankar's textbook and to recitation" | L4.4 p. 3: "something you can read if you're interested in [? Shankar. ?]" (uncertain transcription) and "it may be that Professor Metlitski is going to go through that in recitation" | Stated as fact | Soften: "points to a textbook derivation (Shankar) and possibly recitation". |
| 7 | info | "Scales", Z-dependence remark | L4.1 p. 2 makes the e⁴ remark right after defining α, before rewriting e²/a₀ as α²mc² | After the α²mc² formula | Same content; order change is harmless. |

## Arithmetic and answer checks
- All formulas checked against the rendered notes: (2.1.1) H⁽⁰⁾ = p²/2m − e²/r; (2.1.2) a₀ = ħ²/(me²) ~ 53 pm; (2.1.3); (2.1.4) α = e²/(ħc) ≈ 1/137; (2.1.5) e²/a₀ = me⁴/ħ² = α²mc²; (2.1.6); (2.1.7) p ≈ ħ/a₀ = me²/ħ = αmc; (2.1.9) n = N + l + 1 and the n² sum printed just after it; (2.1.11) wavefunction with e^(−r/(na₀)); (2.1.12) ground state; (2.1.14), (2.1.16), (2.1.17), (2.1.20). All match, Gaussian units throughout.
- Pauli section: (2.2.1) μ = qL/(2mc); (2.2.2) μ = g q S/(2mc); (2.2.3)/(2.2.5) H = −μ·B = (eħ/2mc) σ·B; (2.2.9) Pauli identity; (2.2.11); (2.2.19) π × π = (iħq/c) B; (2.2.20) H_Pauli = (p + eA/c)²/2m + (eħ/2mc) σ·B − eΦ. Signs checked: (1/2m)·iσ·(iħq/c)B = −(ħq/2mc)σ·B = +(eħ/2mc)σ·B for q = −e. Correct. The parenthetical "anticommutator gives the first term, commutator the second" matches L4.3 p. 3.
- Dirac section: (2.3.4) expansion; (2.3.6) conditions; (2.3.7)-(2.3.8) matrices and H_Dirac; (2.3.14) H = p²/2m + V − p⁴/(8m³c²) + (1/2m²c²)(1/r)(dV/dr) S·L + (ħ²/8m²c²)∇²V. Signs match the notes; physical check: with V = −e²/r, (1/r)dV/dr = +e²/r³ > 0 (2.3.16) and ∇²V = 4πe²δ(r) > 0, so spin-orbit and Darwin terms have the right signs. Size α⁴mc²: (2.3.15), (2.3.18), (2.3.20). Correct.
- Worked example (own): α⁴mc² = 510,999/137.036⁴ = 1.449 × 10⁻³ eV (page 0.00145); ×16 = 0.02318 eV (page 0.0232); He⁺ E₂ = −½(2α)²mc²/4 = −13.606 eV (page −13.6, "exactly where hydrogen's ground state does": correct); (2α)² = 2.130 × 10⁻⁴ (page 2.1 × 10⁻⁴); α² = 5.325 × 10⁻⁵ (page 5.3 × 10⁻⁵); ratio 4; 2α = 0.0146 (page 0.015); 80α = 0.584. All correct.
- Z⁴ scaling of the three terms checked independently: relativistic p⁴/m³c² with p ~ Zαmc gives (Zα)⁴mc²; spin-orbit Ze²ħ²/(m²c²(a₀/Z)³) = Z⁴α⁴mc²; Darwin ∝ Ze²·|ψ(0)|² ~ Ze²Z³/a₀³ gives Z⁴. Correct.
- Callout: 13.6057 eV / 8.617333 × 10⁻⁵ eV/K = 157,887 K (158,000 correct as kT; see finding 1 for the wording). 4,000 K agrees with the site's 8.286 page. Photon-to-baryon ratio about 1.6 × 10⁹ (η ≈ 6.1 × 10⁻¹⁰): "more than a billion to one" correct.
- Quiz 1: n = 3 holds 18 states, 3S½ (2) + 3P½ (2) + 3P3/2 (4) + 3D3/2 (4) + 3D5/2 (6); matches the notes' diagram on p. 30 ((2), (6), (10)). Answer 0 correct.
- Quiz 2: ħ/a₀ = αmc, v ~ c/137. Answer 0 correct.
- Quiz 3: cross term from π × π ≠ 0. Answer 0 correct; explanation's sign correct.
- Quiz 4: anticommuting numbers with unit squares are impossible (2αβ = 0). Answer 0 correct; notes p. 34 say exactly that α, β "can't be numbers".
- Flashcards: all four correct and consistent with (2.1.6), (2.1.14)/(2.1.16), (2.2.9)/(2.2.20) and (2.3.14).
- Calcs file: all 22 entries pass (`pytest tests/calc -k hydrogen-fine-structure-pauli-dirac`: 22 passed). Sources: findings 2-3; also `states-n2` and `states-n3` cite eq. (2.1.19), while the counts (2), (6), (10) are in the unnumbered diagram after (2.1.20) (info).

## Citation checks
- Transcript page citations checked with `pdftotext -f N -l N`: L4.1 p. 1 (why hydrogen again; "harmonic oscillator of atomic physics"; H⁽⁰⁾), pp. 1-2 (Bohr radius, no c), pp. 2-3 (α, α²mc², 1/19,000, c/137), p. 4 (n = N + l + 1, n² sum), p. 5 (wavefunction), pp. 5-6 (eccentricity picture), p. 6 (spin doubling); L4.2 p. 1 (uncoupled basis), pp. 2-3 (coupled basis, l and s survive), pp. 3-4 (nL_j names, 2S½, 2P½, 2P3/2); L4.3 p. 1 (g as a fudge factor), pp. 2-4 (Pauli), p. 3 (A(x) an operator), p. 4 (π × π, curl); L4.4 p. 1 (E² = p²c² + m²c⁴), pp. 1-2 (linear Hamiltonian), pp. 2-3 (4 × 4 matrices), pp. 3-4 (Pauli-spinor Hamiltonian, Thomas factor 2). All correct.
- The n = 2 count "2 + 2 + 4 = 8" is the page's own arithmetic; L4.2 pp. 3-4 only names the multiplets (fine).

## Coverage and order
- Order follows L4.1 → L4.2 → L4.3 → L4.4 and notes §2.1-2.3.
- Left out (all acceptable, mostly notes-only): (2.1.8) a₀ = ƛ/α (reduced Compton wavelength); the Runge-Lenz remark; (2.1.13), (2.1.15), (2.1.18)-(2.1.19); the Bohr magneton (2.2.4); the Dirac equation with A and V, (2.3.9)-(2.3.12) (the page gives V = −e²/r in words); the notes' remark that the Darwin term affects only l = 0 (comes in Lecture 5). From the transcripts: the mention of hyperfine splitting in astrophysics (L4.1 p. 1) and of the Stark and Zeeman effects as later topics (L4.1 p. 6). Info only.
- Added beyond MIT: the worked example (own, hydrogen-like ions, building on the notes' e² → Ze² remark); the C. G. Darwin identification (finding 5); the cosmology callout (findings 1-2).

## Licensing
- `grep -il "rights reserved\|courtesy"` on the four transcripts and chapter 2: no matches. The notes carry only "© B. Zwiebach", under the course's CC BY-NC-SA licence. No MIT figure is reused (the level diagrams are not redrawn).
- No OpenStax or LibreTexts material. No verbatim paragraphs: sentences spot-checked against the notes (Pauli spinor, A(x) as an operator, α² as λ) and transcripts are rewritten. Quoted short phrases ("harmonic oscillator of atomic physics", "not the biologist") are attributed to Zwiebach.

## Forward links
- `leadsTo` 8.06 Lecture 5: L5 segments are "Evaluating the Darwin correction", "Interpretation of the Darwin correction from nonlocality", "The relativistic correction", "Spin-orbit correction", "Assembling the fine-structure corrections". The "why" (terms computed one by one, combined into a formula depending on n and j) is correct.
- `leadsTo` 8.286 Lecture 17 (`temperature-and-decoupling`, lecture 17): correct; that page discusses recombination (~4,000 K) and decoupling (~3,000 K). The callout's physics is right apart from finding 1; its facts need attribution (finding 2).

## Notes
- "Thomas precession" direction and C. G. Darwin's identity are verified from general physics knowledge, not from MIT (findings 4-5).
- The Shankar reference rests on an uncertain transcription "[? Shankar. ?]" (finding 6); not checked against the video.

## Resolution (2026-11-18, by the page author)

Error:
1. The callout now says 158,000 K is the temperature at which kT equals 13.6 eV (no longer "a typical photon"); the calcs entry `binding-temperature` says the same.

Warnings:
- Both cosmology figures are now sourced and attributed. Recombination at about 4,000 K is "Guth's figure from 8.286" (new reference `guth17`, 8.286 Lecture 17). "More than a billion photons per atom" follows from 8.902's fiducial baryon-to-photon ratio of about 5 × 10⁻¹⁰ (new reference `vogelsberger20`, 8.902 Lecture 20 notes, eq. (489), p. 111), now quoted in the callout.
- The calcs entries cite these references instead of reading5. New entries `photons-per-baryon` (1/η = 2 × 10⁹) and `eta-quoted` (kind: fact).

Info:
- Thomas precession: the text now says what Zwiebach says (off by a factor of 2, tied to Thomas precession), with "twice too large" as the page's own bracketed remark.
- Darwin: "not the biologist" is quoted as Zwiebach's; the name Charles Galton Darwin is the page's addition.
- Shankar and recitation: softened to "Zwiebach points to a textbook and possibly a recitation".
- The state counts in `states-n2` and `states-n3` now cite the diagram after eq. (2.1.20).
- The order of the e⁴ remark is left as it is.
