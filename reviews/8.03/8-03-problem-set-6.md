---
page: content/year-2/8.03/8-03-problem-set-6.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset6/ (read: pdftotext of the PDF; page breaks checked with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec11/ (read: Lec11 PDF, 7 pages; p. 2 rendered to confirm the γ in ψ_P = −γP₀ ∂ψ/∂x)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec12/ (read: Lec12 PDF, 9 pages)
verdict: needs-changes
---

# Review: Problem Set 6: organ pipes and electromagnetic waves

The blind solve was done first, from the stripped statements and MIT's sheet only. "My answers" below were written to this file before the full page and its calcs were opened.

## Blind solve

### My answers (written before opening the full page)
- p1a: v = √A = 300 m/s; closed end x = 0 is a displacement node, open end x = L an antinode; λ_n = 4L/(2n−1); ν_n = (2n−1) v/(4L): ν₁ = 50 Hz, ν₂ = 150 Hz, ν₃ = 250 Hz. ψ_n ∝ sin(k_n x), k_n = (2n−1)π/(2L).
- p1b: p ∝ −∂ψ/∂x ∝ cos(k_n x): pressure change largest at the closed end x = 0 in every mode (also at interior points k_n x = mπ in modes 2, 3); zero at the open end x = L in every mode (plus interior nodes).
- p1c: open-open fundamental ν = v/(2L′) = 50 Hz → L′ = 3.0 m (= 2L).
- p2a, p2b: proofs (component proof; curl of Ampère–Maxwell, then Faraday and ∇·B = 0).
- p3a: ∂²f/∂x² = f″, ∂²f/∂t² = c² f″, so ∇²E = μ₀ε₀ ∂²E/∂t² with c² = 1/(μ₀ε₀).
- p3b: ∇·E = ∂E_y/∂y = 0. Allowed: any direction perpendicular to x (any constant vector in the y–z plane); an x component gives E₀ n_x f′(x−ct) ≠ 0.
- p3c: B = (E₀/c) ẑ f(x − ct) (a static uniform field may be added, set to zero). Direction +ẑ, size/f = E₀/c.
- p4a (crest of the +x wave at x = 0, t = 0): E_y = E₀ cos(kx − ωt).
- p4b: E_y = E₀[cos(kx−ωt) − cos(kx+ωt)] = 2E₀ sin(kx) sin(ωt); ⟨E²⟩ = 2E₀² sin²(kx).
- p4c: B_z = (E₀/c)[cos(kx−ωt) + cos(kx+ωt)] = (2E₀/c) cos(kx) cos(ωt); ⟨B²⟩ = (2E₀²/c²) cos²(kx).
- p4d: U = 2ε₀E₀²[sin²(kx) sin²(ωt) + cos²(kx) cos²(ωt)]; ⟨U⟩ = ε₀E₀².
- p4e: S_x = (E₀²/(μ₀c)) sin(2kx) sin(2ωt); ⟨S⟩ = 0.

### Comparison (one line per answer id)
- p1-f1 = 50 Hz: page 50. Agree.
- p1-f2 = 150 Hz: page 150. Agree.
- p1-f3 = 250 Hz: page 250. Agree.
- p1-b (choice): "Largest at the closed end, zero at the open end" (index 1). Agree.
- p1-c = 3 m: page 3. Agree.
- p3-dir (choice): "Any direction perpendicular to x̂" (index 2). Agree.
- p3-b-dir (choice): "+ẑ where E is along +ŷ" (index 0). Agree.
- p3-b-amp = E0/c: page E0/c. Agree.
- p4-wave = E0 cos(kx − ωt): page same. Agree.
- p4-e = 2E0 sin(kx) sin(ωt): page same. Agree.
- p4-e2 = 2E0² sin²(kx): page same. Agree.
- p4-b = (2E0/c) cos(kx) cos(ωt): page same. Agree.
- p4-b2 = 2E0² cos²(kx)/c²: page same. Agree.
- p4-u: page same. Agree.
- p4-uavg = ε₀E0²: page same. Agree.
- p4-s = E0² sin(2kx) sin(2ωt)/(μ₀c): page same. Agree.
- p4-savg (choice): "Zero at every point" (index 3). Agree.
- p2a, p2b, p3a (no boxes): same routes as mine, steps correct; one wrong closing claim in p2b (row 1).

No disagreement on any answer. Numerical check (scratchpad rv6work/chk.py): each page `expr` equals my result to 4e-16 relative at 20 000 random points inside its `vars`. Every listed mistake differs from the answer except on measure-zero sets (relative gaps get small only at isolated points), so five random points will not accept a mistake. `pytest -k 8-03-problem-set-6`: 94 passed. `npm run content:check`: 0 errors (only "no review file yet" for this page).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(b) solution, "The idea" and "Check the result" | (No MIT solution.) The derivation uses Ampère–Maxwell, Faraday and ∇·B = 0. Gauss's law ∇·E = 0 is never used. | "use the three other equations to remove $\vec E$" and "All four of Maxwell's equations were needed" | Idea: "and use the three other equations to remove $\vec E$." → "and use Faraday's law and $\nabla\cdot\vec B = 0$ to remove $\vec E$ and the gradient term." Check: "All four of Maxwell's equations were needed: without Maxwell's term" → "Three of Maxwell's equations were used (Gauss's law for $\vec E$ was not needed here): without Maxwell's term". Hint 2 ("Two of the other Maxwell equations") is already right. |
| 2 | warning | Intro, Notation paragraph | MIT's hint (6.4a) writes e^{j(…)} | "Where MIT writes $j$ for the imaginary unit, the lesson writes $i$; this page needs neither." But Problem 4(a) quotes MIT's hint as Re[E₀e^{i(k·r − ωt)}], so the page uses $i$. | "the lesson writes $i$; this page needs neither." → "the lesson writes $i$, and so does this page in MIT's hint to Problem 4." |
| 3 | warning | p4-e, mistake `-2*E0*sin(k*x)*sin(w*t)`, its hint | n/a | "Just to the right of the origin and shortly after t = 0 the first wave is nearer to its crest than the second is, so the total is positive there." The second wave is near its trough there, so the comparison is hard to follow. | → "Just to the right of the origin and shortly after t = 0 the first wave has dropped less below its crest +E₀ than the second has risen above its trough −E₀, so the total is positive there." |
| 4 | info | Problem 4 statement, "Our reading of the last condition" | "At t = 0, the electric field is found to be 0 at x = 0." Hint: Re(E₀e^{j(k·r−ωt)}) | Fixes the phase of the +x wave (crest at the origin at t = 0). MIT's condition then fixes the other wave. | Clear enough to reach every boxed form, and it fits MIT. It is the real-amplitude form of MIT's hint and gives the lecture's own standing wave (Lecture 12 notes pp. 7–8, a node at the origin for all t). Verified the claim "shifts the pattern in x or in t": with E₁ = E₀cos(kx−ωt+α), the condition gives β = π ∓ α for the second wave, with totals 2E₀ sin(kx) sin(ωt−α) or 2E₀ sin(kx+α) sin(ωt). Optional addition: "With this choice the field is zero at x = 0 at every time, as in front of the conductor in the lecture." |
| 5 | info | Problem 4 boxes, ε₀/μ₀/c | n/a | p4-u names only eps0 (no mu0 or c). p4-s names mu0 and c (no eps0). p3-b-amp names E0 and c. | Equivalent forms that use the other constant are refused (the symbol is not offered, and the allowed symbols are listed under the box), not marked wrong. The statements say which constant to use. Acceptable. One remaining case: p4-b and p4-s offer k, w and c together, so a correct form with k/ω in place of 1/c would be marked wrong. The intro warns only against replacing k by ω/c. Optional fix: "(do not replace $k$ by $\omega/c$)" → "(do not replace $k$ by $\omega/c$, or $1/c$ by $k/\omega$)". |

## Arithmetic and answer checks
- P1: v = √90000 = 300 m/s; λ = 6, 2, 1.2 m; ν = 50, 150, 250 Hz; ω₁ = 314 rad/s. Displacement nodes: 1.0 m (mode 2); 0.6 and 1.2 m (mode 3). Pressure nodes: 0.5 m (mode 2); 0.3 and 0.9 m (mode 3). Spacing 0.6 m = λ₃/2. Open pipe L′ = 3 m, with modes 50, 100, 150 Hz. All correct. "the even multiples belong to a pipe with the same kind of end on both sides" is right for a pipe of the same length (100, 200, … Hz).
- P2: example A = x² ẑ gives curl −2x ŷ, curl of curl −2 ẑ, and RHS 0 − 2 ẑ. Correct. The plane-wave test of the B equation is correct.
- P3: derivatives, divergence, B = (E₀/c) f ẑ, and the Ampère check (−(E₀/c) f′ on both sides) are all correct.
- P4: all fields and averages correct. Verified: ⟨E²⟩ averaged over x = E₀²; U = ε₀E₀²[1 + cos2kx cos2ωt]; energy conservation ∂U/∂t + ∂S/∂x = 0 with k/(μ₀c) = ε₀ω; the factor 4 against the notes' E₀²/(4μ₀c).
- Every mistake hint was checked against its formula, and all are true of it. p4-u "2*eps0*E0^2 … reached only where and when one of the two fields is at its largest": true. p4-uavg "eps0*E0^2/4 … electric part of one travelling wave": true. Choice boxes p1-b, p3-dir, p3-b-dir and p4-savg: marked answers correct, none answerable from units alone, Unicode strings with no TeX.
- `vars` ranges: all finite (c ≥ 2, so no division by zero), physical, and no answer vanishes identically over its range. The number boxes' 1% tolerance rejects the obvious slips (100 Hz, 1.5 m, 6 m).
- No hint gives a result away.

## Coverage and order
- Problems 6.1–6.4 and all their parts appear in MIT's order. Each problem has 25 points, as MIT gives; the split (10/8/7, 13/12, 8/8/9, 3/6/6/5/5) is marked as the page's own. The P1(b) choice question is marked as an addition. The P3(c) split into direction and size follows from MIT's question.
- covers [11, 12] matches sound-waves (lecture 11) and electromagnetic-waves (lecture 12).

## Citations
- MIT sheet: Problems 6.1, 6.2 and the statement of 6.3 are on p. 1; 6.3(a)–(c) and 6.4 are on p. 2. All `at=` page numbers are correct.
- Lecture 11 notes: boundary conditions p. 4 (coordinate z, as the page says); cases B and C p. 5; ψ_P = −γP₀ ∂ψ/∂x p. 2 (rendered to check) and p. 6; normal modes and ω = v k p. 3; 342 m/s p. 3. All correct.
- Lecture 12 notes: vacuum Maxwell equations and the curl-of-curl method p. 2; Laplacian pp. 2–3; divergence p. 3; B wave equation stated p. 3; curl components p. 4; plane wave along x̂ travelling along ẑ, the Faraday step and B = (1/c)k̂×E p. 5; general plane wave p. 6 (as MIT's hint says); standing-wave sum, U_E, U_B and S = E₀²/(4μ₀c) sin2ωt sin2kz p. 8. All correct. The notes' general form has a phase φ, which MIT's hint and the page leave out; this is harmless.
- Lesson claims: electromagnetic-waves says B = (1/c)k̂×E fails for the standing wave in front of a conductor and gives the E₀²/(4μ₀c) Poynting vector; sound-waves gives 342 m/s. Both match what the page says.

## Licensing
- No rights-reserved or courtesy notice in either PDF (grep). Statements are rewritten in the page's own words, and MIT's "rudimentary arithmetic" remark is paraphrased. Graphs are generated from formulas, and no MIT figure is used. No Georgi text, OpenStax or LibreTexts.

## Notes
- No `## Summary` and no em dashes. content:check gives 0 errors. The calcs file has 94 passing tests using independent routes (numerical roots, numerical derivatives and time averages).
- Problem 4 reading (the point the caller asked about): clear enough and faithful to MIT; see row 4.

COUNTS: errors=1 warnings=2 info=2

## Resolution (2026-11-21, by the page author)

1. Error 1: the Problem 2(b) solution now says it uses Faraday's law and ∇·B = 0 to remove E and the gradient term, and its check says three of Maxwell's equations were used (Gauss's law for E was not needed).
2. Warning 1: the notation paragraph now says the page writes i in MIT's hint to Problem 4.
3. Warning 2: the p4-e mistake hint now compares how far each wave is from its crest and trough.
4. Info: the intro now also says not to replace 1/c by k/ω. The phase reading of Problem 4 needed no change.

`status` is now `reviewed`.
