---
page: content/year-3/8.06/thermal-transition-rates-einstein-coefficients.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l13-1/ (read)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/97d91d3f99ff319fab8cb406e3e798fc_5s6rUYpVYjg.pdf (read: L13.1 transcript, 4 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/88fd71f7a5483b50d5aebfbe92877373_OCbC7fRsL7k.pdf (read: L13.2 transcript, 4 pages, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/video_galleries/lecture-videos/ (read: lists five Lecture 13 segments, L13.1 to L13.5)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l13-3-einsteins-b-and-a-coefficients-determined/ and its transcript https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/41e573f2d896ffafed8cd323ffec52bf_fFSii5VxO4I.pdf (read: 4 pages, page by page; NOT cited by the page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l13-4-charged-particles-in-em-fields-potentials-and-gauge-invariance/ and its transcript https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/xVZ-lIuIi7A_transcript.pdf (read: 4 pages, skimmed for content; NOT cited by the page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l13-5-charged-particles-in-em-fields-schrodinger-equation/ and its transcript https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/yHfFsuYGgaQ_transcript.pdf (read: 2 pages, skimmed; NOT cited by the page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/pages/lecture-notes/ (read: chapter 5 "Particles in Electromagnetic Fields [not available]")
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-4-time-dependent-perturbation-theory/ (read: chapter 4 PDF; printed pp. 107-110 = PDF pp. 35-38, pp. 108-110 rendered with pdftoppm to read every equation and number from (4.5.9) to (4.5.34))
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read: Guth Lecture 17 transcript, pp. 18-19)
  - content/year-4/8.286/black-body-radiation.mdx (read, for the Lecture 16 leadsTo)
verdict: needs-changes
---

# Review: Transition rates in thermal radiation: Einstein's A and B coefficients

The derivation itself (L13.1, L13.2, notes (4.5.13)-(4.5.26)) is faithful, every equation number is right, every transcript page citation was checked and is right, and all the numbers are correct. The page's central framing is wrong, though: it says the videos stop at the rate and that MIT has no video for charged particles in EM fields. OCW's video gallery lists **five** Lecture 13 segments. L13.3 ("Einstein's B and A coefficients determined. Lifetimes and selection rules") covers in the lecture exactly what the page labels "from the notes alone", and L13.4 ("Charged particles in EM fields: potentials and gauge invariance") and L13.5 ("Charged particles in EM fields: Schrodinger equation") cover the second topic, which the page says does not exist on OCW. The author seems to have had only the L13.1 and L13.2 transcripts; the L13.3-L13.5 resource pages use long slugs (`l13-3-einsteins-b-and-a-coefficients-determined/` …), not `l13-3/`, which return 404.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Intro bracket; "## Spontaneous emission and lifetimes (from the notes)"; "## Selection rules (from the notes)"; frontmatter summary and Summary bullet "From the notes"; flashcard 4 "(from the notes)" | L13.3 transcript p. 1: B_ab = 4π²|d_ab|²/3ħ², A = (4/3)ω_ba³|d_ab|²/ħc³; p. 2: dN/dt = −AN, N₀e^(−At), τ = 1/A, A = A₁ + A₂ for several channels (total lifetime from the sum of inverse partial lifetimes); pp. 2-3: selection rules Δm = 0, ±1, Δℓ = ±1, "discussed in recitation", "very readable in Griffiths" | "The videos end here; the notes take two more steps"; "come from the notes alone, p. 110; the videos stop at the rate" | Add the L13.3 transcript as a reading and cite it (L13.3 pp. 1-3) alongside the notes' equation numbers; drop the "(from the notes)" labels and the claim that the videos stop at the rate. |
| 2 | error | "## Charged particles in electromagnetic fields"; intro bracket; Summary last bullet | Video gallery: L13.4 "Charged particles in EM fields: potentials and gauge invariance" (B = ∇×A, E = −∇Φ − (1/c)∂A/∂t, gauge transformations, "the potentials are really more important than the fields"), L13.5 "Charged particles in EM fields: Schrodinger equation" (iħ∂ψ/∂t = [(1/2m)(p − qA/c)² + qΦ]ψ, p is not mv, statement of gauge invariance). Only the notes' chapter 5 is "[not available]". | "On MIT OpenCourseWare there is no video for it, and the notes' chapter 5 ... is marked not available; neither of the two videos touches it." / "has no video or notes on OCW" | Correct the statement (there are two videos, no notes). Either write a second Lecture 13 page (`order: 2`) on L13.4-L13.5, as the coverage rule requires, or at least say these segments exist and are taken up on the Lecture 14 page. |
| 3 | warning | leadsTo 8.06 Lecture 14 `why` | L13.4 opens the subject ("for half a lecture today and the full lecture next time"); L14.1 is "Gauge invariance of the Schrodinger Equation" | "charged particles in electromagnetic fields, begins in earnest" in Lecture 14 | After fixing #2: "continues with gauge invariance of the Schrödinger equation, a magnetic field on a torus and Landau levels". |
| 4 | warning | Coverage of L13.3 p. 3 | L13.3 pp. 3-4: a diagram of allowed hydrogen decays among 1s, 2s, 2p, 3s, 3p, 3d: 2s cannot decay to 1s (long-lived, two-photon decay), 2p → 1s, 3s → 2p, 3p → 2s and 1s, 3d → 2p only; and lifetimes computed this way are "correct up to factors of 2 and measurable" | Mentions only the 2s case, as the page's own example | Add a short paragraph (own wording, own diagram if drawn) on the allowed decays from n = 3. |
| 5 | info | Bracket slips to note once L13.3 is cited | L13.3 p. 1 says the spontaneous rate is "h bar omega ba cubed over pi c cubed Bab" (should be π²c³, as in notes (4.5.8)/(4.5.27)) and describes Einstein's rate N_b·U·B_ab as "spontaneous emission" (it is stimulated); L13.3 p. 3 says 3s "can go ... change l from 1 to 0" (3s → 2p changes ℓ from 0 to 1) | Not mentioned (the page does not use L13.3) | Optional bracketed notes, as the page already does for the "spontaneous" slips of L13.1-L13.2. |
| 6 | info | "Summing incoherent modes", cited eq. (4.5.16) | (4.5.16) is Σ E₀²(ω_i) = 2π∫U(ω)dω, without f; the version with a function f is L13.2 p. 1 | Formula with f(ω) | Cite "eq. (4.5.16); L13.2 transcript p. 1" or cite reading2 p. 1. |
| 7 | info | Intro sentence "Einstein's relation ... then gives the spontaneous rate A (L13.1 transcript p. 1; L13.2 transcript p. 4)" | L13.2 p. 4 ends at the rate and Griffiths; A is in L13.3 p. 1 | Cites L13.2 p. 4 | Replace by "L13.3 transcript p. 1" when #1 is fixed. |

Verified and correct:
- (4.5.13), (4.5.14), (4.5.15): the formulas match the rendered notes p. 108, including 4E₀²/8π · 1/2 = E₀²/4π and E₀² = 2π⟨u⟩. Transcript L13.1 pp. 3-4 says the same.
- The notes' slips, both real (rendered p. 109): (4.5.17) reads |(d·n)_ab|²/ħ² · (2π) U(ω_ab) ∫ …, with no factor 4 from (4.5.13); (4.5.18) reads (2/t)·t²∫sin²x/x² dx = 2tπ. The correct substitution gives dω = 2dx/t and (ω_ba − ω)² = 4x²/t², so the integral is (t/2)π. The two slips cancel: 2π · 2πt = 4 · 2π · (πt/2) = 4π²t, and (4.5.19) is right. (Small further slip there: (4.5.17) writes U(ω_ab) for U(ω_ba); not worth a note.)
- (4.5.19) indeed has no average brackets, as the page says; (4.5.20)-(4.5.23), (4.5.24), (4.5.25), (4.5.26), (4.5.27)-(4.5.28), (4.5.29) (the notes write N(t) = e^(−At) without N₀; the page's N₀e^(−At) is correct), (4.5.30), (4.5.31)-(4.5.34): numbers and content all match the rendered p. 110.
- All transcript page citations of L13.1 (pp. 1, 1-2, 2, 2-3, 3, 3-4, 4) and L13.2 (pp. 1, 1-2, 2, 3, 3-4, 4) are on the pages named. The two "spontaneous" slips quoted are real (L13.1 p. 3; L13.2 p. 4), and the self-correction "spontaneous-- stimulated" is on L13.1 p. 1.
- SI forms: rate π|d|²U/(3ε₀ħ²) and A = ω³|d|²/(3πε₀ħc³) follow from d_G² = d_SI²/4πε₀; they agree with Griffiths' forms (from memory, not re-read).

## Arithmetic and answer checks
Recomputed with NumPy/SciPy (repo .venv):
- ⟨100|z|210⟩: radial ∫r⁴e^(−3r/2)dr = 24(2/3)⁵, angular 4π/3, prefactor 1/(π√32): 0.744936 a₀; a direct 2D integral of ψ₁₀₀ z ψ₂₁₀ gives the same; 128√2/243 = 0.744936. |d|² = 0.5549 e²a₀². Correct.
- ω_ba = 10.2/6.582e-16 = 1.5497e16 s⁻¹; ω³a₀²/c² = 1.1596e11 s⁻¹; A = (4/3)(0.5549)(1/137.04)(1.1596e11) = 6.261e8 s⁻¹; τ = 1.597 ns. Independent SI computation (CODATA e, ε₀, ħ) gives A = 6.261e8 s⁻¹. Correct (matches the textbook 1.6 ns).
- e^(−5/1.60) = 0.0439 (with the unrounded τ, 0.0437): "about 4%". Correct.
- k_BT = 0.2585 eV; ħω/k_BT = 39.46; e^(−39.46) = 7.31e-18; A/(e^x − 1) = 4.58e-9 s⁻¹; 1/rate = 2.18e8 s = 6.9 yr. Page: 4.6e-9 s⁻¹, 2.2e8 s, "some 7 years". Correct.
- Lyman alpha 0.75 × 13.606 = 10.20 eV. Correct.
- ∫sin²x/x² dx = π, so the frequency integral is πt/2; 8π · π/2 = 4π². Correct.
- Plot: peak t²/4 ≤ 4 for t ≤ 4 fits the range [0, 4.4]; first zeros at ±2π/t inside [−8, 8] for every t in [1, 4]; caption claims (t²/4, ±2π/t, area πt/2) are right.
- Quiz: Q1 answer 2 (πt/2, linear in t), Q2 answer 0, Q3 answer 3 (E₀²/2π), Q4 answer 1 (2³ = 8): all marked answers and explanations correct. Flashcards correct.
- calcs file: `npm run calc:test -- -k thermal-transition` passes (47 entries). `content:check`: 0 errors; the only warning for this page is the missing review file. Minor: several page-own example entries in the calcs file (e.g. `ex-lyman-alpha`, `ex-kt-3000`) give `source: {cite: reading3, at: 'eq. (4.5.28)'/'(4.5.27)'}` although the numbers are not from the notes; harmless since `origin: page-own`.

## Coverage and order
- L13.1 and L13.2 are covered completely and in order (recap, incoherent modes, energy density and the factors of 2, sum to integral, slow factors out, the πt/2 integral, the direction average by symmetry, the final rate, Griffiths and SI).
- L13.3 (B, A, lifetime, several channels, selection rules, hydrogen decay diagram) is covered in substance but attributed to the notes instead of the video (#1), and the n = 3 decay diagram is missing (#4).
- L13.4 and L13.5 (potentials, gauge transformations, the Schrödinger equation with p − qA/c, gauge invariance) are not covered, and the page wrongly says they do not exist (#2). Under the site rule "every lecture ... gets one or more pages", these need a page (a second Lecture 13 page, or explicitly folded into the Lecture 14 page).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the L13.1-L13.5 transcripts or chapter 4 pages read. The notes' hand-drawn spectrum sketch (p. 109) and L13.3's board diagram are not reproduced.
- No verbatim copying beyond short standard phrases. No OpenStax or LibreTexts material.
- The worked example (2p → 1s lifetime) is a standard textbook calculation, not taken from the lecture text; L13.3 p. 2 says students will compute such lifetimes in the homework, so it may overlap an MIT problem-set exercise (uncertain; not checked against the 8.06 problem sets). If a future 8.06 problem-set page uses that problem, consider a different example here.

## Notes
- Cosmology callout and leadsTo: fair. Guth L17 transcript p. 18: hydrogen ionized until about 4,000 K, "recombination ... the temperature at which half of the hydrogen has recombined" (pp. 18-19); p. 19: decoupling at about 3,000 K. The black-body page (8.286 Lecture 16) does cover universality and u ∝ T⁴. The 2s-bottleneck sentence is correctly marked as going beyond 8.286; part (d) is correctly called the page's own illustration.
- Symbols (data/symbols.json): new entries P_i, d_ab, n_j, u_M, ψ_210, ℓ′ and new meanings (τ lifetime, dΩ, ℓ, m, ⟨…⟩, x, i, j, n, e, f, r, N, N₀, u, u_E, n_x/n_y/n_z, n_i, A₁, A₂) all fit their use on this page. Small inconsistencies only: u_E and E₀ give SI units (J/m³, V/m) while the page works in Gaussian units (d_ab gives both; doing the same for u_E, u, E₀ would be consistent); ψ_210 has a unit m^(−3/2) but ψ_100 (shared meaning) has none.
- The "[The transcript calls this the probability 'for spontaneous emission' ...]" and the L13.2 p. 4 bracket are accurate.

## Resolution (2026-11-18, by the page author)

- #1: Added the L13.3 transcript as reading3 (notes chapter 4 moved to reading4) and cited it for B_ab (p. 1), A (p. 1), the lifetime and exponential decay (p. 2), A = A₁ + A₂ + ⋯ with partial lifetimes (p. 2) and the selection rules (pp. 2–3), keeping the notes' equation numbers in `at`. Removed every "from the notes" label and the claim that the videos stop at the rate (intro, both section headings, frontmatter summary, Summary, flashcard 4). Added Einstein-could-not-compute-B and "time-dependent perturbation theory combined with a statistical argument" (L13.3 p. 1), the decay-channel wording and "correct up to factors of 2 and measurable" (L13.3 p. 2), and recitation/Griffiths for the selection rules.
- #2: Removed the section "Charged particles in electromagnetic fields" and the Summary bullet saying there is no video. The intro now says Lecture 13 has five videos, that this page covers the first three, and links to a new second Lecture 13 page, `charged-particles-em-fields-gauge-invariance` (order 2, draft, its own calcs file and symbols), which covers L13.4 and L13.5 from the transcripts (the notes' chapter 5 is not on OCW).
- #3: leadsTo 8.06 Lecture 14 `why` rewritten: after this lecture's second part (on the next page), the subject continues with gauge invariance of the Schrödinger equation, a magnetic field on a torus and Landau levels.
- #4: New section "Selection rules and the decays of hydrogen" with the L13.3 pp. 3–4 diagram in words (1s nowhere; 2s stuck, long-lived, two-photon decays not considered; 2p → 1s; 3s → 2p; 3p → 2s and 1s; 3d → 2p only), and the homework remark (p. 4). New Summary bullet.
- #5: Confirmed and noted in brackets: L13.3 p. 1 "ħω³/πc³" (should be π²c³); L13.3 p. 1 calls Einstein's rate N_b U B_ab "spontaneous emission" (stimulated); L13.3 p. 3 "change l from 1 to 0" for 3s → 2p (0 to 1). Each has a calcs entry (`a-over-b-slip`, `einstein-spontaneous-slip`, `three-s-slip`).
- #6: The "Summing incoherent modes" formula now cites L13.2 p. 1 (reading2), with a note that the notes' eq. (4.5.16) writes it without f.
- #7: The intro sentence on A now cites L13.3 transcript pp. 1–3.
- Notes section: u_E, u and u_M meanings now give Gaussian units too (erg/cm³). The page-own calcs entries keep `origin: page-own`; their `cite` moved with the renumbering to reading4. `\dots` replaced by `\cdots` (read-aloud said "s dot"). New calcs entries for the L13.3 claims (`factors-of-two`, `three-d-delta-l`); calc file 52 entries, all pass.
- Status set to `reviewed`.

## Follow-up check (2026-11-18)

Independent check of the new and changed parts only. I read the L13.3 transcript (41e573f2d896ffafed8cd323ffec52bf_fFSii5VxO4I.pdf, 4 pages) page by page with `pdftotext -f N -l N`, and the notes' printed p. 110 (PDF p. 38) for eqs. (4.5.24)-(4.5.34).

**Verdict: resolved.**

- #1 resolved. reading3 is the L13.3 transcript and reading4 is chapter 4. Citations checked: B_ab, "Einstein could not … from first principles" (L13.3 p. 1; notes (4.5.26)); A/B_ab and A = 4ω³|d|²/3ħc³ (p. 1; (4.5.27), (4.5.28)); "combined … with a statistical physics argument" (p. 1); dN/dt = −AN, N₀e^(−At), τ = 1/A (p. 2; (4.5.29)); A = A₁ + A₂ and partial lifetimes (p. 2; (4.5.30)); "correct up to factors of 2 and is measurable", recitation, Griffiths (p. 2); Δm = 0, ±1 and Δℓ = ±1 (p. 3; (4.5.33), (4.5.34)); the m-rules for the z and x, y components (notes (4.5.31), (4.5.32), p. 110). All are on the pages and equations named. The intro cite "L13.3 pp. 1-3" is right. No "from the notes" label remains.
- #2 resolved. The charged-particles section is gone; the intro links to the new order-2 page, which covers L13.4-L13.5 (reviewed separately, reviews/8.06/charged-particles-em-fields-gauge-invariance.md).
- #3 resolved. The Lecture 14 `why` matches OCW's L14.1-L14.4 titles.
- #4 resolved. The decay list matches L13.3 pp. 3-4: 1s nowhere; 2s → 1s forbidden, long-lived, two-photon decays "we will not consider"; 2p → 1s; 3s cannot reach 2s or 1s but goes to 2p; 3p to 2s and 1s ("all the way down"); 3d only to 2p ("that would be l equal 2"). Homework remark on p. 4. The physics is right (no Δℓ = 0 or ±2 decays listed; same-n decays negligible). The diagram is described in words, not redrawn.
- #5: all three slips are real. (a) L13.3 p. 1: "h bar omega ba cubed over pi c cubed Bab"; the notes' (4.5.27) has π²c³. (b) L13.3 p. 1: "for spontaneous emission … proportional to the number of atoms, Nb, the number of photons present, times … Bab"; that is stimulated emission. (c) L13.3 p. 3: 3s "can go … change l from 1 to 0"; 3s → 2p changes ℓ from 0 to 1. The brackets on the page state each one correctly.
- #6, #7 resolved. "Summing incoherent modes" cites L13.2 p. 1, with the (4.5.16) note; the A sentence cites L13.3.
- Notes items: u, u_E and u_M now give Gaussian units (erg/cm³). The new meanings (A, A₁, A₂, τ, N, N₀, ℓ, ℓ′, m, B_ab with unit m³/(J·s²)) fit the page. `npm run calc:test -- -k thermal-transition` passes (with the other page, 69 entries); `content:check` gives 0 errors.

Remaining notes (info only, no change required):
- L13.3 p. 2 says "The total lifetime, which is 1 over this, is the sum of the inverses of the partial lifetimes". Taken literally, that is a slip: it is 1/τ that is the sum of the 1/τᵢ. The page states the correct version ("the inverse of the total lifetime is the sum of the inverses of the partial lifetimes") without a bracket. Under writing rule 4 a short bracket could be added, but since the page is right this is optional.
- L13.3 p. 1 also garbles A as "4/3 omega ba cubed over h bar c cubed Bab squared" (it means |d_ab|²). The page writes the correct formula. A note is optional.
- "go sideways in energy order, to 2p" (3s) is a slightly odd rendering of Zwiebach's "laterally" on the diagram. It is understandable as it stands.

### Follow-up notes applied (2026-11-18, by the page author)

- Added the bracket "[the transcript says the total lifetime itself is that sum]" after the partial-lifetimes sentence (L13.3 p. 2), with a calcs entry `lifetime-sum-slip`.
- "go sideways in energy order, to 2p" now reads "go to 2p, sideways on an energy diagram".
- The garbled "Bab squared" in L13.3 p. 1 is not noted (the page states the correct formula).
