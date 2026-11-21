---
page: content/year-4/8.286/8-286-problem-set-5.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps5/ (read, pdftotext of the PDF supplied in the scratchpad)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf (Lecture 5 transcript; read, printed page 6 checked with pdftotext -f 6 -l 6)
verdict: pass-with-notes
---

# Review: Problem Set 5: circles, volumes and distances in curved space

## Blind solve

### My answers (written before opening the full page)
- p1a: S = 2 pi R r0
- p1b: closed rho = R asin(r0); open rho = R asinh(r0)
- p1c: closed S = 2 pi R sin(rho/R) < 2 pi rho; open S = 2 pi R sinh(rho/R) > 2 pi rho
- p2: V = int_0^pi 4 pi R^2 sin^2 psi * R dpsi = 2 pi^2 R^3
- p3a: J = P a(tG)^2 / (4 pi a(t0)^4 sin^2 psiG)  (= P / (4 pi a0^2 sin^2 psiG (1+z)^2))
- p3b: dtheta = w / (a(tG) sin psiG)
- p3c: Omega = pi dtheta^2/4; sigma = P a(tG)^4 / (pi^2 w^2 a(t0)^4) = P / (pi^2 w^2 (1+z)^4)
- p4a: int_{tG}^{t0} c dt / a(t) = psiG
- p4b: zG = a(t0)/a(tG) - 1
- p4c: V = 4 pi a0^3 int_0^psiG sinh^2 psi dpsi = pi a0^3 (sinh(2 psiG) - 2 psiG)
- p4d: l_prop = a(t0) psiG
- p4e: l_ang = a(tG) sinh psiG
- p4f: l_lum = a(t0)^2 sinh psiG / a(tG) = a0 (1+zG) sinh psiG
- p5a: expand x1x2 + y1y2 = u1u2(cos cos + sin sin) = u1u2 cos(theta1 - theta2); x^2+y^2 = u^2
- p5b: shown (second-order expansion gives the stated metric)
- p5c: r = u / sqrt(1 - u^2) (r^2 = u^2/(1-u^2)); then 1 + r^2 = 1/(1-u^2), dr = du/(1-u^2)^(3/2), so dr^2/(1+r^2) = du^2/(1-u^2)^2; u -> 1 is r -> infinity, so the whole open plane maps to the unit disc.

### Comparison (one line per answer id)
- p1-a `2*pi*R*r0`: agrees.
- p1-b-closed `R*asin(r0)`: agrees.
- p1-b-open `R*asinh(r0)`: agrees.
- p1-c-closed `2*pi*R*sin(rho/R)`: agrees.
- p1-c-open `2*pi*R*sinh(rho/R)`: agrees.
- p1-c-compare choice 0 (smaller closed, larger open): agrees.
- p2-v `2*pi^2*R^3`: agrees.
- p3-a `P*aG^2/(4*pi*a0^4*sin(psi)^2)`: agrees.
- p3-b `w/(aG*sin(psi))`: agrees.
- p3-c `P/(pi^2*w^2*(1 + z)^4)`: agrees.
- p4(a) (no box): page's integral of c dt/a from tG to t0 = psiG agrees.
- p4-b `a0/aG - 1`: agrees.
- p4-c `pi*a0^3*(sinh(2*psi) - 2*psi)`: agrees.
- p4-d `a0*psi`: agrees.
- p4-e `aG*sinh(psi)`: agrees.
- p4-f `a0^2*sinh(psi)/aG`: agrees.
- p5(a), p5(b) (no box): page's derivations agree with mine; the second-order expansion of 5(b) was rechecked term by term (numerator, (1 - eps)^(-1/2) with the 3/8 eps^2 term, the cross term -u^2 du^2/A^2, A + u^2 = 1).
- p5-c `u/sqrt(1 - u^2)`: agrees.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(a), third hint | (MIT has only the hint to centre the coordinates on the galaxy) | "The lesson on the cosmological redshift gives both factors." | The lesson `cosmological-redshift` derives only the stretching of time intervals and wavelengths; it never mentions photon energy (grep for energy/photon/frequency finds only an unrelated quiz choice). Reword, e.g. "The lesson on the cosmological redshift gives the stretching of times; the lower frequency of each photon (E = hf) gives the second factor, as in Problem 6 of Problem Set 2." |
| 2 | info | Problem 4 intro | "As in Problem 1, ... alternative radial coordinate ψ" | "As in Problem 3 ... (MIT's set says "as in Problem 1" at this point; the coordinate ψ was introduced in Problem 3.)" | None: correct handling of a slip in the set (Writing rule 4). |
| 3 | info | Problem 4(c) | Answer may be left as a definite integral in ψG, tG, t0, zG or a(t) | Box asks for the closed form; the text says so and the solution tells readers who stopped at the integral to self-mark | None needed. A reader who answers the MIT way gets "wrong" in the box but is told why in the statement. |
| 4 | info | Problem 1 statement | Circle given also as z = 0, x² + y² = r0² | Only r = r0, θ = π/2 | None needed; the Cartesian form adds nothing to the solution. |
| 5 | info | Frontmatter `covers: [10, 11, 12]` | Problems 3–4 use the Robertson–Walker spacetime metric | Site Lecture 12 ("... Open Universes and the Spacetime Metric") introduces the spacetime metric; the RW spacetime lesson `robertson-walker-spacetime` is site Lecture 13, and the page explains the two facts it needs and links forward to it | Acceptable as is. Optionally add 13 to `covers` so the Lecture 13 lesson gets a "Practise" link; uncertain which is intended. |
| 6 | info | Problem 3(b) | No small-angle instruction | "Take the angle to be small." | None: an honest clarification (MIT's answer is the small-angle one). |

## Arithmetic and answer checks
- All numbers recomputed (Python): asin 0.5 = 0.5236, asinh 0.5 = 0.4812, ratios 0.955 and 1.039; 2π² = 19.74; 4π/3 = 4.19; 9.55⁴ = 8318 ("≈ 8320", fine); 2⁴ = 16; π(sinh 2 − 2) = 5.111 → 5.11; sinh 1/2 = 0.5876 → 0.588; 2 sinh 1 = 2.350 → 2.35; metric step 0.01/0.75 = 0.01333, exact Klein distance 0.013424 → 0.01342 (0.68 %, "less than 1 %" true); tanh 3 = 0.99505 → 0.995.
- `<Answer>` boxes: the checker (lib/answers.ts) compares at 5 random points to 1 part in 10⁶. Every listed mistake differs from the answer over its `vars` ranges (content:check audits this, 0 errors). Ranges keep everything finite and physical (rho/R ≤ 0.9 < π/2 in p1-c-closed; r0 < 1 in p1-b-closed; aG < a0 everywhere so z > 0). The mistake `2*pi*R*sin(rho)` coincides with the answer only at R = 1 exactly, a set of measure zero in R ∈ [1, 3].
- Each mistake hint checked against its formula and found true, including: p2 `8*pi*R^3` (area ∝ sin ψ instead of sin² ψ), p3-c `P/(4*pi*w^2*(1+z)^4)` (solid angle Δθ²) and `P/(4*pi^2*w^2*(1+z)^4)` (Δθ as angular radius), p4-c `(4/3)*pi*a0^3*sinh(psi)^3` (a dψ < a dr = a cosh ψ dψ), p4-e `a0^2*sinh(psi)/aG` ("smaller than a(t0) sinh ψ" true since aG < a0), p4-f `a0^3*sinh(psi)/aG^2`.
- Every solution ends with a check (units, limit and/or a number). Verified the limits: small ψ gives the Euclidean ball (P2, P4c), inverse-square law (P3a), w/ℓ (P3b), ℓ_ang ≈ ℓ_prop ≈ ℓ_lum (P4e, f), flat polar metric near u = 0 (P5b). ℓ_lum = (1+z)² ℓ_ang and σ ∝ (ℓ_ang/ℓ_lum)² checked algebraically.
- `npx tsx scripts/check-content.ts`: 0 errors (only warning for this page: no review file yet). `npm run calc:test -- -k 8-286-problem-set-5`: 36 passed. The calcs file checks every formula box by an independent route (numerical integration, the embedded 3-sphere chord, Klein's distance function), which I consider sound.
- Hints: none gives a final result away. The closest are p4-c hint 2 and p4-f hint 2 (area, thickness / area and (1+z)² stated), which still leave the integration or the algebra to the reader; acceptable.

## Coverage and order
- All five MIT problems, in MIT's order, with MIT's parts in MIT's order and MIT's points: P1 5/5/5, P2 15, P3 10/10/5, P4 6 × 5, P5 3 × 5 extra credit (optional here). Total 85 + 15, as MIT states.
- Same physics in every part; statements are in the page's own wording (no sentence copied; only standard terms such as "null trajectory", "proper distance", "angular size distance").
- `at=` citations checked against the printed page headers of MIT's PDF: P1 metric p. 1; circle and integrals p. 2; P2 metric p. 2, sphere metric p. 3; P3 both metrics p. 3; P4 both metrics p. 5; 4(e) definition p. 6; 4(f) definition p. 7; P5 distance function and 2D metric p. 7; 5(a), 5(b) p. 8. All correct, including the parts across page breaks.
- `cite="reading1" at="p. 6"` for 1 + z = a(t0)/a(tG): Lecture 5 transcript printed page 6 has "this ratio of times, or ratio of wavelengths, or ratio of scale factors, is defined to be 1 plus z". Correct.

## Licensing
- MIT's PDF has no "All rights reserved" or "Courtesy of" notices. Its two small figures in 4(e) and 4(f) are not redrawn. No OpenStax or LibreTexts material. No em dashes; no `## Summary` with answers.

## Notes
- Claims about other pages checked: `non-euclidean-geometry` does present Klein's model; `open-universe-geometry` uses χ for this coordinate; Problem Set 2 Problems 5 and 6 are the flat-space angular size and flux; z = 8.55 is the redshift used there (that page carries the caveat that the spectroscopic value no longer stands; here it is only a number, which is fine); the "lesson after this set" `robertson-walker-spacetime` exists (Lecture 13).
- Uncertain: whether `covers` should include 13 (item 5) is an editorial choice, not an error.

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-21, by the page author)

- Warning 1 (Problem 3(a), third hint): now says that the redshift lesson gives the stretching of times between arrivals, and that the lower energy of each photon follows because its energy is proportional to its frequency, as in Problem 6 of Problem Set 2.
- Info notes: no change needed (the reviewer agreed with the handling of MIT's "Problem 1" slip, the closed-form box in 4(c), and `covers: [10, 11, 12]`).
- Status set to `reviewed`.
