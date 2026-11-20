---
page: content/year-3/8.06/zeeman-effect-weak-strong.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l6-1/ (resource page saved earlier, not re-fetched; its transcript link matches reading1)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/3dc0bd6c70222cb953f4141a6753773e_WlZf4aOkNMQ.pdf (read: L6.1 transcript, 4 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/964b97bfbbd828e5aa2309c793870d27_N9f0MIzNcmI.pdf (read: L6.2 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/f73025b5455efa2517ca84d3645dea4c_NSac7cMQnJw.pdf (read: L6.3 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/344c8c1c59629ba4b8b101bc409c7004_wULHVefheCU.pdf (read: L6.4 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-2-hydrogen-fine-structure/ (read: chapter 2 PDF, section 2.5 on PDF pp. 21-26 = printed pp. 45-50, all six pages rendered as images to read the equations exactly)
  - calcs/8.06/zeeman-effect-weak-strong.yaml (could not read: the file was not in the working tree when the review was written, see Notes)
verdict: pass-with-notes
---

# Review: The Zeeman effect: weak and strong magnetic fields

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Calcs file | Every page with numbers needs `calcs/8.06/<slug>.yaml` (AGENTS.md rule 7) | The page has numbers (μ_B, 500 G shifts, 0.93 GHz, 13%, 7,800 G) but `calcs/8.06/zeeman-effect-weak-strong.yaml` was not present in the repository when this review was written, so it could not be checked | Make sure the calcs file is in place and covers: μ_B B = 2.894e-6 eV, (1/3)μ_B B = 0.965e-6 eV, spacing 3.859e-6 eV = 0.933 GHz, outermost 5.788e-6 eV, ratio 0.128 to the 4.528e-5 eV gap, crossover 7,824 G, the three Landé factors (2, 2/3, 4/3), and the n = 2 list 2, 1, 1, 0, 0, −1, −1, −2. All of these were recomputed here (see below) and agree with the page. |
| 2 | info | Worked example (c), "Where weak ends" | Notes p. 46: weak means B ≪ B_int, strong B ≫ B_int; no crossover number is given | Crossover where μ_B B equals the 2P gap: B ≈ 7,800 G; "a laboratory magnet of a few tesla is already strong" | Arithmetic correct. As the page itself says "roughly", this is a scale, not a sharp edge: the largest 2P₃/₂ shift (2μ_B B) reaches the gap already at about 3,900 G, and at 3 T μ_B B is only about 4 times the gap, so "strong" there is "larger than", not "much larger than". Optionally say "a field of several tesla begins to be strong", or note the factor. |
| 3 | info | "The projection lemma", bracket "(In 8.05, x and p were shown to be vector operators under L.)" | L6.3 p. 1: "You may have seen this in a previous course, in 805, where you might have proven that X and P are vector operators for L" | States it as a fact about 8.05 | Hedge as the lecture does ("may have been shown") unless the site's 8.05 pages actually show it; not checked. |
| 4 | info | "The projection lemma" | Notes (2.5.11): [J², V] = 2iħ(V × J − iħV), and the remark that J is itself a vector operator; (2.5.13)-(2.5.15) are stated for general matrix elements ⟨k′; j m′_j| … |k; j m_j⟩ | Omits (2.5.11); states the lemma only for expectation values | Acceptable: the lecture (L6.3 pp. 2-3) also works with expectation values and does not write (2.5.11). Optional one-line mention that the lemma holds for matrix elements between different m_j (and other labels) too. |
| 5 | info | Introduction | L6.1 p. 1: sunspot fields "of the order of 3,000 Gauss, 2,000, 3,000 Gauss"; notes p. 45: "typically reach 3,000 gauss" | "fields of a few thousand gauss" | Fine. |

No errors found: every formula, equation number and transcript page reference checks out (details below).

## Arithmetic and answer checks
- Gaussian units throughout, matching the notes: μ_l = −(e/2mc)L, μ_s = −(e/mc)S (2.5.1); δH_Z = (e/2mc)(L + 2S)·B (2.5.2) = (eB/2mc)(L_z + 2S_z) (2.5.3). Correct.
- Double-commutator identity (2.5.12), coefficient 1/(2iħ)² = −1/(4ħ²): matches the rendered notes p. 47. Independently checked: with the standard result [J²,[J²,V]] = 2ħ²(J²V + VJ²) − 4ħ²(V·J)J, dividing by −4ħ² gives the page's right-hand side. Also verified numerically for V = S in l ⊗ ½ with l = 1 and l = 2 (all three components, max error 7e-16). Note: the lecture deliberately withholds the coefficient (L6.3 p. 1, "I will not tell you the number"); the page takes it from the notes and cites (2.5.12), which is right.
- Projection lemma: page's diagonal form equals (2.5.15) with k′ = k, m′_j = m_j; the "left side is zero" argument matches (2.5.13) and L6.3 p. 2. Correct.
- S_z matrix element (2.5.17)-(2.5.19) via S·J = ½(J² + S² − L²) (2.5.18): correct. Landé factor (2.5.20)-(2.5.21) and E⁽¹⁾ = μ_B B g_J m_j (2.5.22): correct. Numerically checked: ⟨L_z + 2S_z⟩ = g_J m_j in every |l j m_j⟩ state for l = 1, 2.
- μ_B = eħ/2mc ≈ 5.79e-9 eV/gauss: matches notes p. 48. Slip "579 times 10 to the minus 9 eV per Gauss": confirmed on L6.3 p. 4. The page's bracket is correct.
- Strong field: [L_z + 2S_z, H⁽⁰⁾] = 0 (2.5.24) and E = E_n⁽⁰⁾ + (eħ/2mc)B(m_l + 2m_s) (2.5.26): correct.
- n = 2 count: S (0, ±½) → ±1; P (1,½) 2, (0,½) 1, (−1,½) 0, (1,−½) 0, (0,−½) −1, (−1,−½) −2. Eight states: 2, 1, 1, 0, 0, −1, −1, −2. The 0 pair is m_l = ±1 with opposite spins inside l = 1; each ±1 pair is an S state with the P state m_l = 0, same m_s. All as on the page, and as in notes Figure 2.2 and L6.4 pp. 2-3 (the transcript says "six states" for the l = 1 multiplet; the page's "eight" counts S and P together, correctly).
- Spin-orbit diagonal in the strong-field degenerate subspaces: the notes say so (p. 50, after (2.5.29), "it turns out that spin-orbit is diagonal in the more limited degenerate subspaces"); attribution correct. Independently verified: L·S = L_zS_z + ½(L₊S₋ + L₋S₊) changes m_l + 2m_s by ∓1, so it has no matrix elements inside a subspace of fixed m_l + 2m_s; numerically, max off-diagonal element is 0 for l = 1 and l = 2. Cross-l mixing excluded by [L², δH_fs] = 0 (notes p. 50). Correct.
- Weak-field diagonality: L_z + 2S_z commutes with L² and J_z (notes p. 46, L6.2 pp. 1-2). Correct.
- Worked example: α⁴mc²/32 = 4.528e-5 eV (α = 1/137.036, mc² = 510,999 eV); it is the j = 1/2 vs 3/2 gap at n = 2 from (2.4.65) [(2 − ¾) − (1 − ¾) = 1, times α⁴mc²/(2·16)]; same value as the Lecture 5 calcs file. Landé factors: 2S₁/₂ 1 + 1.5/1.5 = 2; 2P₁/₂ 1 − 0.5/1.5 = 2/3; 2P₃/₂ 4/3. μ_B B = 5.788e-9 × 500 = 2.894e-6 eV; 2P₁/₂ ±(2/3)(½) = ±1/3 → ±0.965e-6 eV (page 0.96); 2P₃/₂ spacing (4/3)μ_B B = 3.859e-6 eV, /h = 0.933 GHz; outermost (4/3)(3/2) = 2 → 5.788e-6 eV; 5.788e-6/4.528e-5 = 12.8% ("about 13%"); crossover 4.528e-5/5.788e-9 = 7,824 G ≈ 0.78 T ("7,800 gauss, about 0.8 tesla"). All correct.
- Quiz 1: answer 0 correct (notes p. 46). Quiz 2: answer 0 correct; the explanation's remark that L_z + 2S_z does not commute with J² is true ([S_z, J²] ≠ 0), and at fixed n degenerate fine-structure states always share j. Quiz 3: g_J = 4/3, arithmetic in the explanation correct. Quiz 4: answer 0 correct.
- Flashcards: all four correct and consistent with (2.5.3), (2.5.15)/(2.5.16), (2.5.21)/(2.5.22), (2.5.26).

## Citation checks
- Equation numbers verified on the rendered notes: (2.5.1), (2.5.2)-(2.5.3), (2.5.4), (2.5.5), (2.5.6), (2.5.8), (2.5.9), (2.5.10), (2.5.12), (2.5.15)-(2.5.16), (2.5.17)-(2.5.19), (2.5.20)-(2.5.21), (2.5.22), (2.5.24), (2.5.26); "after eq. (2.5.22)" (all degeneracies removed) and "after eq. (2.5.29)" (spin-orbit diagonal). All correct.
- Transcript pages, checked with pdftotext -f/-l: L6.1 p. 1 (Zeeman 1896, Nobel 1902, sunspots), pp. 1-2 (two magnetic moments, g = 2), p. 2 (full Hamiltonian), pp. 2-3 (intermediate case left aside), p. 3 (internal field; the "much smaller" slip for the strong field is on p. 3, and p. 3-4 immediately says the Zeeman term is "a lot more important", supporting the page's bracket); L6.2 p. 1 (coupled states, energies in n and j), pp. 1-2 (L² on p. 1, J_z on p. 2), p. 2 (proportional to m_j), pp. 2-3 (Wigner-Eckart p. 2, "mystery" p. 3); L6.3 p. 1 (vector operator), pp. 1-2 (double commutator, "by computation" p. 2), pp. 2-3 (expectation value), pp. 3-4 (S_z, Landé, μ_B), p. 4 ("579"); L6.4 p. 1 (known Hamiltonian), pp. 1-2 (exact energies), pp. 2-3 (n = 2 degeneracies). All correct.
- Reading URLs: the four transcript PDF URLs match the links on the l6-1 … l6-4 resource pages; reading5 matches the chapter-2 link on the Lecture Notes page.

## Coverage and order
- Order follows L6.1 → L6.2 → L6.3 → L6.4 and notes §2.5. L6.5 (semiclassical approximation) is left to the next page, as stated in the introduction.
- Omitted: notes (2.5.7) (the general matrix element, described in words), (2.5.11), (2.5.13)-(2.5.14) general-matrix-element form, (2.5.23), (2.5.25), (2.5.27)-(2.5.29) (the strong-field fine-structure set-up, described in words). The lecture's mention of the homework estimate of B_int (L6.1 p. 3) and of Griffiths quoting the lemma (L6.3 p. 3) are not repeated. All acceptable (finding 4).
- Added: the worked example (own numbers, 500 G) and the "why the left side vanishes" explanation. Fine.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the four transcripts and chapter 2: no notices. Notes Figure 2.2 (a hand-drawn photo) is not reused; the page gives the n = 2 list in words.
- No OpenStax or LibreTexts material. Prose spot-checked against the notes (weak/strong definitions, projection-lemma paragraph, "removes all degeneracies", strong-field "some degeneracy remains", spin-orbit-diagonal sentence) and transcripts: rewritten, only standard short phrases shared.

## Forward links
- `leadsTo` 8.06 Lecture 7: course syllabus title "The WKB approximation and connection formulae"; L6.5 title "Semiclassical approximation and local de Broglie wavelength". The `why` text is accurate. Lecture 7 transcripts were not read, so "develops with its connection formulae" is checked only against the syllabus title.
- No `Callout kind="cosmology"`; none needed.

## Notes
- The calcs file named in the task was not in the working tree at any of three checks during this review (git status showed it untracked at the start of the session; later it, and this page, were absent while the Lecture 5 files were being staged). The page text reviewed is the version read at the start of the review. Re-run `npm run calc:test` once the calcs file is back and compare it with the recomputed values listed under finding 1.
- "Pieter Zeeman": the notes spell it so (the transcript says "Peter"); the page follows the notes. Fine.
- Not checked: symbol meanings in data/symbols.json for this page (content:check covers them).

## Resolution (2026-11-18, by the page author)

Warning:
1. The calcs file `calcs/8.06/zeeman-effect-weak-strong.yaml` was moved aside for a few minutes while another lesson was committed, which is why the review could not find it. It is back in place, and `npm run calc:test -- -k zeeman` passes. It contains every value listed in the review (μ_B, the Landé factors, the 500-gauss shifts, the 0.93 GHz spacing, the 13% check, the 7,800-gauss crossover).

Info:
- "Where weak ends" now says the 7,800 G figure is only a rough scale: the outermost 2P3/2 levels reach the gap at half that field, only fields of tens of tesla are clearly strong, and in between both terms must be diagonalized together. The claim that a few tesla is already strong is removed.
- The 8.05 remark is hedged as in the lecture ("Zwiebach recalls that 8.05 may have shown …").
- (2.5.11) and the general matrix-element form are left out, as in the lecture.
