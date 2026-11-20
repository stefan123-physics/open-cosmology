---
page: content/year-3/8.06/interaction-picture-time-dependent-perturbations.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l9-1/ (read: saved resource pages L9.1-L9.4; each reading URL on the page was confirmed to be the transcript link of its segment page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/156f796cb3aca46f5974d3a59d07ea56_Prx5mnE7BUM.pdf (read: L9.1 transcript, 6 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/24e627fc491e61df7b6fff3a22472d10_WwudFI6YRs.pdf (read: L9.2 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/6ce2abad4dc385366a2ff68aa5ad58e0_oyU5uvPqzkE.pdf (read: L9.3 transcript, 6 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/f6753ce875cf3621bbed3196437ff167_dNKAsbdHDCs.pdf (read: L9.4 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-4-time-dependent-perturbation-theory/ (read: chapter 4 PDF, printed pp. 73-81 as text; printed p. 79 also rendered as an image to read eqs. (4.1.36)-(4.1.44) exactly)
  - content/year-4/8.286/temperature-and-decoupling.mdx (read, for the callout and leadsTo)
verdict: pass-with-notes
---

# Review: Time-dependent perturbation theory: the interaction picture

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "The interaction picture", paragraph before the formula "The interaction-picture Schrödinger equation" | The derivative is taken on L9.1 p. 5; the cancellation of the two H⁽⁰⁾ terms ("they commute through and these two exponentials cancel") is on p. 6 | "...the two $H^{(0)}$ terms cancel, because $H^{(0)}$ commutes with its own exponentials (L9.1 transcript p. 5)" | Cite "pp. 5–6". |
| 2 | info | "Example: a sudden kick", formulas "Solution during the pulse" and "The state after the kick", and Q3 explanation | Notes (4.1.42), (4.1.44), (4.1.48) write the phase factor as $\lvert\alpha\rvert/\alpha$ | Writes it as $\alpha^*/\lvert\alpha\rvert$ | Identical ($\lvert\alpha\rvert/\alpha = \alpha^*/\lvert\alpha\rvert$), and the page's form is the clearer one. Optional bracket: "(the notes write this phase as $\lvert\alpha\rvert/\alpha$)". |
| 3 | info | Paragraph after "Probabilities after the kick": "As expected, $c_b$ is proportional to $\alpha$ for a weak kick." | L9.3 p. 6 says "Cb is proportional to alpha" | Same | Strictly, for small $\lvert\alpha\rvert$, $c_b \approx -i\alpha^*/\hbar$: proportional to $\alpha^*$, its size proportional to $\lvert\alpha\rvert$. Consider "proportional to $\alpha^*$ (so of size $\lvert\alpha\rvert/\hbar$)". Not wrong as an order-of-magnitude statement, which is how Zwiebach means it. |
| 4 | info | Opening paragraph: "(... notes sections 4.1–4.2)" | Lecture 9 covers §4.1 and §4.2 only up to eq. (4.2.5). The rest of §4.2 (initial conditions (4.2.6)–(4.2.8), the first-order solution, §4.2.1 NMR example) is not in L9 | "notes sections 4.1–4.2" | Say "section 4.1 and the start of section 4.2", so a reader does not expect the NMR example here. |
| 5 | info | Formula "Heisenberg operators", eqs. (4.1.4), (4.1.5) | Notes p. 74: "This definition applies even for time dependent Schrödinger operators" | Not mentioned | Optional half-sentence; it is exactly what makes $\delta\tilde H(t)$ "the Heisenberg version" of a time-dependent $\delta H(t)$ later on the page. |
| 6 | info | `leadsTo` 8.286 Lecture 17, `why` | 8.286 L17 (temperature-and-decoupling.mdx) quotes recombination at about 4,000 K and decoupling at about 3,000 K as figures that depend on density, with no rates; the equilibrium ionization temperature follows from thermodynamics (binding energy and density), rates matter for the departures from equilibrium | "...in the early universe they decide when hydrogen recombines and the CMB is released" | Slightly overstated. The callout itself is careful ("among other things, transition rates"). Suggest: "...in the early universe they help set the details of recombination, when the CMB was released." |

No physics, sign or citation errors found. Every `<Formula>` was checked against the notes:
- (4.1.1), (4.1.2): correct.
- (4.1.4), (4.1.5): correct; U† bringing states to rest = (4.1.6), U₀ = (4.1.7): correct.
- (4.1.8), (4.1.9): correct.
- (4.1.11), (4.1.12): correct.
- (4.1.13)–(4.1.15): correct; prose citation (4.1.16)–(4.1.19) for the matrix-element equation is correct.
- (4.1.20)–(4.1.22): correct (ω_mn = (E_m − E_n)/ħ, phase e^{iω_mn t}).
- (4.1.23): correct.
- (4.1.25), (4.1.26): U = [[0, α], [α*, 0]], δH = U δ(t): correct.
- (4.1.33), (4.1.34) in prose: correct, including e^{−iω_ab t} on the c_b line.
- (4.1.37): α/t₀ and α*/t₀: correct.
- (4.1.38): c̈_a = −(|α|/(ħt₀))² c_a: correct.
- (4.1.41), (4.1.42): correct (see row 2).
- (4.1.48), (4.1.49): correct.
- (4.2.1)–(4.2.3), series: correct; the series itself is (4.2.3), the range also covers the λ-Hamiltonian and equation mentioned in the sentence before, which is fine.
- (4.2.5): correct.
- "notes p. 80" (perturbation theory would give the power series in |α|/ħ) is the printed page number of the notes, where that sentence is.

Transcript citations, all checked against the PDF page:
- L9.1: p. 1 (topic, Fermi's golden rule, radiation, ionization; H = H⁽⁰⁾ + δH(t)); pp. 1–2 (no energy eigenstates, factorization argument); p. 2 (t₀, t_f picture, "the world shakes"); pp. 2–3 (hydrogen, ionization, continuum); p. 3 (interaction picture combines the two pictures); pp. 3–4 (Heisenberg operators); p. 4 (U† brings states to rest; "Heisenberg for H₀, Schrödinger for δH"); pp. 4–5 (ψ̃ constant if δH = 0, no information lost); pp. 5–6 (summary). All correct, except the p. 5 in row 1.
- L9.2: p. 1 (dropping the (0) labels; why the expansion is allowed); p. 2 (c_n constant without δH; inserting the complete set); p. 3 (phases; numerical solution). All correct.
- L9.3: p. 1 (Griffiths 9.3, ω₀, the remark on the letter U); pp. 1–2 (think first, instantaneous transition); pp. 3–4 (setting the delta function at t = 0, then retracting it); p. 4 (regulator of height 1/t*, independence of t*); pp. 5–6 (coefficients freeze, t*-independent, final state); p. 6 (probabilities, perturbation theory gives α²). All correct.
- L9.4: p. 1 (λ, series, "easier than ... time independent"); pp. 1–2; p. 2 (first order and sometimes second give the physics). All correct.

The page's account of Zwiebach writing c_b(0)δ(t) and then retracting it is accurate (L9.3 pp. 3–4). It also matches the notes, which state the f(t)δ(t) = f(0)δ(t) identity may be used for the exponentials but not for c_a, c_b (p. 78). The lecture's regulator name t* is written t₀ on the page, as in the notes (4.1.36). That is fine and needs no bracket: the transcript itself says "a glyph called t0 or something like that".

## Arithmetic and answer checks
- Worked example (a): ω_ab = 2.0/6.582 × 10⁻¹⁶ = 3.039 × 10¹⁵ s⁻¹ (page 3.04 × 10¹⁵, correct); ω_ab t₀ = 0.0304 (page 0.030, correct); 1/ω_ab = 3.29 × 10⁻¹⁶ s = 0.33 fs (correct).
- (b): sin²(π/6) = 0.25, cos²(π/6) = 0.75; (π/6)² = 0.2742 (page 0.274); ratio 0.2742/0.25 = 1.097, "about 10% too high" (correct). |α|/t₀ = (π/6)(6.582 × 10⁻¹⁶ eV s)/(1.0 × 10⁻¹⁷ s) = 0.5236 × 65.82 = 34.5 eV (page "≈ 34 eV", correct).
- (c): sin²(π/2) = 1; (π/2)² = 2.467 (page 2.47, correct).
- First-order claim: c_b⁽¹⁾ = (1/iħ)∫e^{−iω_ab t}α*δ(t)dt = −iα*/ħ, so p_b⁽¹⁾ = |α|²/ħ², which is the leading term of sin²(|α|/ħ). The page's statements are right.
- Units remark: δH has units of energy, δ(t) of 1/time, so α has units of energy × time = units of ħ. Correct (not in the source, but a correct addition). The symbol unit J·s for α agrees.
- Derivation of c_b from c_a: c_b = (iħt₀/α)ċ_a = (iħt₀/α)(−|α|/(ħt₀)) sin(...) = −i(|α|/α) sin(...) = −i(α*/|α|) sin(...). Matches the page.
- Quiz: Q1 answer 1 (separation fails for time-dependent H): correct. Q2 answer 2 (constant): correct. Q3 answer 3 (sin²(|α|/ħ)), explanation correct, including that |α|²/ħ² is the first-order approximation. Q4 answer 0 (δH̃ acting on the order-n term): correct.
- Flashcards: all four match the notes ((4.1.11)–(4.1.12), (4.1.23), (4.1.49), (4.2.5)).
- Calcs file `calcs/8.06/interaction-picture-time-dependent-perturbations.yaml`: 15 entries; every shown number on the page has an entry. Expected values re-derived above. `npm run calc:test -- -k interaction-picture`: 15 passed. The identity `regulated-cb-from-ca` checks only real α (as its `where` says); the complex case is covered by the hand derivation above. `content:check`: 0 errors; the only warning for this page is the missing review file (this file).

## Coverage and order
- The page follows MIT's order exactly: L9.1 (time-dependent H, no energy eigenstates, the t₀–t_f picture, hydrogen and ionization, Heisenberg recap, U† brings states to rest, interaction picture and its Schrödinger equation), L9.2 (basis, ansatz, coupled equations, ω_mn), L9.3 (Griffiths 9.3 two-level kick, the retracted step, the regulator, exact solution, probabilities), L9.4 (λ expansion, order-by-order equations).
- Nothing from the lecture is left out. Additions: the units of α, the "(Zwiebach calls it ω₀ in the lecture)" note and the original worked example, all appropriate.
- Notes material after (4.2.5) (initial conditions, first-order formula, NMR example) is not in L9 and is correctly not covered here (see row 4 for the intro wording).

## Licensing
- No "All rights reserved" or "Courtesy of" notices found in the chapter 4 PDF text, in the transcripts, or in the saved OCW resource pages. The page reproduces no figure (Figure 4.1 is only referred to). No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases: "the world shakes" is quoted, and "brings states to rest" is standard terminology from the notes. Zwiebach's summary is paraphrased, not quoted. The prose is the page's own.
- The worked example is original (own energies, pulse length and kick strengths); MIT's example has no numbers.

## Notes
- Cosmology callout: consistent with `content/year-4/8.286/temperature-and-decoupling.mdx`. Guth gives recombination (~4,000 K) and decoupling (~3,000 K) as quoted figures and says the ionization temperature depends on density, so "Guth quotes the temperatures ... rather than deriving them" is fair. "Notes sections 4.4–4.5" are indeed "Ionization of hydrogen" and "Light and atoms". That a detailed recombination calculation needs transition rates is correct general physics and is not attributed to Guth. Only the `leadsTo` wording is a little strong (row 6).
- `leadsTo` 8.06 Lecture 10 ("Constant perturbations and Fermi's golden rule" in `_course.json`): correct; notes §4.3 derives the golden rule from the first-order result for a constant perturbation into a continuum.
- Symbols: I checked all 38 meanings that apply to this page (`node` over `data/symbols.json`). The page-scoped ones fit their use on this page: α (complex kick strength, J·s); δ (δH and δ(t)); ω with subscripts; ω_mn, ω_ab, ω₀; |a⟩, |b⟩; H; t₀ (pulse length, s); n, m; U (evolution operator and the kick matrix); U₀; c_n, c_a, c_b and their dots (1/s, 1/s²); Ψ / Ψ̃; E_a, E_b, E_m; A_s, A_H; δH_mn; p_a, p_b. The shared ones (λ "unit-free parameter, from 0 to 1", O(λ³), E, E_n, t, d, i, e) also fit. One small point: in the notes, t₀ in Figure 4.1 is the start time of the perturbation, while the page uses t₀ only for the pulse length. The page never gives the start time a symbol, so the meaning is right as written.
- The reading URLs on the page were confirmed against the saved OCW segment pages (each transcript hash appears on its own segment page), and the chapter 4 resource page title matches.

## Resolution (2026-11-18, by the page author)

1. Fixed: the cancellation of the two H⁽⁰⁾ terms now cites "L9.1 transcript pp. 5–6".
2. Added a bracket after the formula "Solution during the pulse": "(The notes write the phase factor as |α|/α, which is the same number.)" The page's form α*/|α| is kept.
3. Fixed: the sentence now reads "for a weak kick c_b ≈ −iα*/ħ is proportional to α*, so its size is |α|/ħ". (The expansion is covered by the calcs identity `first-order-limit`.)
4. Fixed: the opening now cites "notes section 4.1 and the start of section 4.2".
5. Added after the Heisenberg-operator formula: the definition holds even when A_s depends on time, which is what lets a time-dependent δH(t) have a Heisenberg version later (notes p. 74).
6. Fixed: the 8.286 Lecture 17 `leadsTo` now says the transitions "help set the details of recombination, when the CMB was released".

No numbers changed, so the calcs file is unchanged. Status set to `reviewed`.
