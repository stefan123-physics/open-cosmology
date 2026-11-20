---
page: content/year-5/8.962/einstein-field-equation.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/b8543a35845e7da6a3bcc46873bc227d_OIjLUzS6SQA.pdf (read: local copy L12.pdf / L12.txt, all 19 PDF pages, page by page)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-12-the-einstein-field-equation/ (not opened; the transcript is the only text source, no slides or notes exist)
  - 8.962 Lecture 13, 14 and 18 transcripts (local copies; searched only, to check the leadsTo claims)
  - content/year-4/8.286/cosmological-constant.mdx and vacuum-energy-puzzle.mdx (to check the 8.286 forward link)
verdict: pass-with-notes
---

# Review: The Einstein field equation

Method: every `<Formula>` was compared with what Hughes says on the cited PDF page (the board is not visible, so the board equations were reconstructed from speech and checked against standard GR in signature (−,+,+,+), Carroll conventions). Every index contraction was redone by hand. Every number was recomputed independently, and `pytest tests/calc -k einstein` was run (187 passed, includes this page's calcs file).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Quiz 4, question text | (not in lecture; page's own question) | "the energy density of water, $\rho = 1000\ \text{kg/m}^3$" | 1000 kg/m³ is a mass density; the energy density is $\rho c^2$. Write "the mass density of water, $\rho = 1000$ kg/m³ (energy density $\rho c^2$)", matching the worked example, which gets this right ($T_{00} = \rho c^2$). |
| 2 | info | "Newtonian gravity" formula, p. 8 | On p. 8 Hughes says the Laplacian of Φ "equals 4 pi rho" (no G); on p. 15 he gives "4 pi G rho" | $4\pi G\rho$ | Correct as written. Optionally note the dropped $G$ in brackets, as for the other slips; it may be a speech slip or the transcriber. |
| 3 | info | Bracket after "Newtonian gravity" | p. 8 and p. 15: Hughes calls $\delta^{ij}\partial_i\partial_j$ "the Laplace operator" | "[Hughes calls ... the Laplace operator, which it is; the equation as a whole is Poisson's.]" | Not a slip by Hughes: he names the operator correctly. The bracket is harmless but reads as a correction of something that was right; consider deleting it or rephrasing as a plain naming note. |
| 4 | info | "Einstein's route" paragraph | p. 16: "the math that we have been studying for the past six or seven weeks" | "in about seven weeks" | "six or seven weeks" is closer to the transcript. |
| 5 | info | "Trace of the Einstein tensor" citation | The trace starts at the bottom of p. 4 ("Suppose I just want to call this the Einstein scalar ... Ricci scalar minus 1/2 trace of the metric") and ends on p. 5 | `at="transcript p. 5"` (the prose before it already says pp. 4–5) | Use `at="transcript pp. 4–5"`. |
| 6 | info | "Weak-field metric and its inverse" citation | $g = \eta + h$ is introduced at the bottom of p. 9; $|h| \ll 1$ and the inverse are on p. 10 | `at="transcript p. 10"` | Use `at="transcript pp. 9–10"`. |
| 7 | info | "Newtonian gravity" formula | p. 11: Hughes rewrites Poisson's equation with $\eta^{ij}$ in place of $\delta^{ij}$ "so that it looks like a piece of a spacetime tensor" | Uses $\delta^{ij}$ throughout | Fine (they are equal). Optional one-line mention, since the page otherwise follows his notation closely. |
| 8 | info | Prose before "Newtonian gravity" | p. 8: the "semi-coordinate-invariant" label is attached to the Laplacian written as $\delta^{ij}\partial_i\partial_j$, justified by the slow-variation limit | "Hughes calls the field equation only 'semi' coordinate-invariant" | Close enough; strictly it is the form of the operator he calls semi-coordinate-invariant. |
| 9 | info | Geodesic deviation sentence | p. 2: "the rate of separation is proportional to the Riemann curvature" | "drift apart or together at a rate set by the curvature" | Both loose: the curvature sets the relative *acceleration* (second derivative). Consider "accelerate apart or together at a rate set by the curvature". |

No errors found in formulas, signs or index placement.

Formula-by-formula check (content and citation):
- Riemann symmetries (pp. 1–2): matches p. 1 (3↔4, 1↔2 antisymmetric, pair swap symmetric) and p. 2 (cyclic sum on indices 2, 3, 4). Correct.
- Ricci tensor and scalar (p. 2): trace on 1 and 3, symmetric. Correct. ($R = g^{\mu\nu}R_{\mu\nu}$ is mentioned on p. 4, "I didn't write it down"; acceptable on p. 2.)
- Geodesic deviation (p. 2): $D^2\xi^\alpha/d\tau^2 = R^\alpha{}_{\beta\mu\nu}u^\beta u^\mu\xi^\nu$ agrees with Carroll (3.200) and MTW. Hughes's own index arrangement cannot be read from speech; the physics is right.
- Bianchi identity (p. 3): cyclic in derivative index and first two indices, last two fixed, exactly as described on pp. 2–3. Matches Carroll (3.86).
- Once-contracted (pp. 3–4): $g^{\beta\mu}$ gives $\nabla_\alpha R_{\gamma\nu} + \nabla^\mu R_{\gamma\alpha\mu\nu} - \nabla_\gamma R_{\alpha\nu} = 0$. Rederived: third term $\nabla_\gamma R_\alpha{}^\mu{}_{\mu\nu} = -\nabla_\gamma R_{\alpha\nu}$. Correct; matches Carroll (3.94) and Hughes's verbal steps (trace on 2 and 3, swap 1 and 2, minus sign).
- Twice-contracted (p. 4): $g^{\gamma\nu}$ gives $\nabla_\alpha R + \nabla^\mu R^\nu{}_{\alpha\mu\nu} - \nabla^\nu R_{\alpha\nu}$, with $R^\nu{}_{\alpha\mu\nu} = -R_{\alpha\mu}$ (trace on 1 and 4, as Hughes says), so $\nabla_\alpha R - 2\nabla^\mu R_{\alpha\mu} = 0$. Correct.
- Divergence-free combination and Einstein tensor (p. 4): divide by −2, insert metric. Correct.
- Trace $G = -R$ (pp. 4–5): correct ($\delta^\mu{}_\mu = 4$). See #5.
- Free fall / conservation (pp. 6–7): correct.
- Newtonian gravity (p. 8): see #2, #7.
- Slow-motion geodesic equation (p. 9), Christoffel symbol (pp. 9–10): $\Gamma^\mu{}_{00} = -\tfrac12 g^{\mu\nu}\partial_\nu g_{00}$ for static fields; first order $-\tfrac12\eta^{\mu\nu}\partial_\nu h_{00}$. Correct.
- Inverse metric (p. 10): $g^{\mu\nu} = \eta^{\mu\nu} - h^{\mu\nu} + O(h^2)$. Correct. See #6.
- Weak-field equation of motion (p. 10): $d^2x^i/dt^2 = -\Gamma^i{}_{00} = \tfrac12\partial_i h_{00}$. Correct.
- $h_{00} = -2\Phi$, $g_{00} = -(1+2\Phi)$ (pp. 10–11). Correct.
- Proposed equation (p. 12), trace-reversed form (p. 13): correct; trace of $G = \kappa T$ gives $R = -\kappa T$.
- Perfect fluid (p. 13): $(\rho+P)u_\mu u_\nu + Pg_{\mu\nu}$. Correct.
- Four-velocity (p. 14): $u^0 = 1 + \tfrac12 h_{00}$ (from $(-1+h)(u^0)^2 = -1$). $u_0 = g_{00}u^0 = (-1+h)(1+\tfrac12 h) = -(1 - \tfrac12 h) + O(h^2)$. The page is right and Hughes's "just pick up a minus sign" (giving $T_{00} = \rho(1+h_{00})$, p. 14) is the slip; the bracket explains it correctly and correctly notes it is harmless.
- RHS 00 (p. 14): $\rho(1-h) - \tfrac12(-1+h)(-\rho) = \tfrac12\rho(1-h)$. Correct. (On p. 14 Hughes reads the expression as "T00 minus 1/2 T00 T"; the page's $g_{00}$ is the right reading.)
- $R_{00}$ (pp. 14–15): $R^0{}_{000} = 0$ by antisymmetry in the last pair; $R_{00} = \partial_i\Gamma^i{}_{00} = -\tfrac12\nabla^2 h_{00}$. Correct (Carroll 4.17 analogue).
- $\kappa = 8\pi G$ (p. 15): $-\tfrac12\nabla^2 h_{00} = \tfrac12\kappa\rho$, $h_{00} = -2\Phi$, so $\nabla^2\Phi = \kappa\rho/2 = 4\pi G\rho$. Correct.
- With Λ (p. 17), Λ as stress-energy (p. 17): $G + \Lambda g = 8\pi G T \iff G = 8\pi G(T - \tfrac{\Lambda}{8\pi G}g)$. In a local Lorentz frame $T_{00} = \Lambda/8\pi G = \rho$, $T_{ii} = -\Lambda/8\pi G = P$. Correct; the "ρ = 8πG" slip on p. 17 is handled correctly.
- Mass as length/time (p. 18), SI field equation (p. 19): correct.

## Arithmetic and answer checks
- $GM_\odot/c^2 = 1.32712440\times10^{20}/8.98755\times10^{16} = 1476.6$ m → 1.477 km. Correct. Hughes's 1.47 km is the truncation of 1.4766 (rounding gives 1.48): the page's bracket is accurate.
- $GM_\odot/c^3 = 4.92549\times10^{-6}$ s → 4.925 µs. Correct. Hughes's 4.92 is truncated (rounding gives 4.93). Bracket accurate.
- CODATA 2018 $G = 6.67430(15)\times10^{-11}$, relative uncertainty $2.2\times10^{-5}$: correct; "four or five" significant digits is a fair reading. CODATA 2018 predates the 2020 lecture, so this is a correction of Hughes's recollection rather than a post-lecture development; the wording is fine.
- Water: $8\pi \times 6.674\times10^{-11}\times1000/8.98755\times10^{16} = 1.866\times10^{-23}$ m⁻² → 1.87e-23. Correct. Quiz 4 choice "1.9e-23" is the correct one (answer index 0). Correct.
- Radius of curvature: $(1.866\times10^{-23})^{-1/2} = 2.31\times10^{11}$ m = 1.55 AU, "about one and a half times the Earth–Sun distance". Correct.
- "A ball of water of roughly that radius would curve spacetime by order one: it would be close to forming a black hole." Checked: for a uniform ball, $2GM/(Rc^2) = (8\pi G\rho/3c^2)R^2 = 1/3$ at $R = 2.3\times10^{11}$ m; the horizon condition $2GM/Rc^2 = 1$ is reached at $R = \sqrt3\times2.3\times10^{11} = 4.0\times10^{11}$ m. "Order one" is right; "close to" is fair but loose (info; could say "a ball under twice that radius would be inside its own horizon").
- Earth: $6.674\times10^{-11}\times5.97\times10^{24}/8.98755\times10^{16} = 4.433$ mm → 4.43 mm. Correct. $/6.371\times10^6$ m $= 6.96\times10^{-10}$ → $7\times10^{-10}$. Correct; it is $|\Phi|$ and $|h_{00}|/2$ at the surface (sign dropped by saying "size of"). Correct.
- Quiz 1: $G = R - 2R = -R$, answer 0. Correct.
- Quiz 2: answer 2; $\nabla^\mu R_{\mu\nu} = \tfrac12\nabla_\nu R$ follows from the twice-contracted identity. Correct.
- Quiz 3: answer 1, $g_{00} = -(1+2\Phi)$; explanation correct.
- Quiz 4: answer 0 correct; see finding #1 for the wording.
- Worked example "Checking the trace-reversed form": correct, and the vacuum remark ($R_{\mu\nu} = 0$ but Riemann non-zero, tides outside a star) is right. Original example, not in the lecture.
- Flashcards 1–6: all correct.
- Calcs file: covers every number and every derivation step above; `pytest tests/calc -k einstein`: 187 passed.

## Coverage and order
- Order follows the lecture exactly: recap of Riemann symmetries, Ricci, geodesic deviation, Bianchi (pp. 1–3); two contractions and the Einstein tensor (pp. 3–4); trace reversal (pp. 4–5); minimal coupling with two examples (pp. 5–7); field equation requirement and Newtonian limit (pp. 7–8); equation of motion → $h_{00} = -2\Phi$ (pp. 8–11); choosing the field equation, trace-reversed form, static fluid, $R_{00}$, $\kappa = 8\pi G$ (pp. 11–15); summary of Einstein's route, 1905/1915 (pp. 15–16); cosmological constant, vacuum energy, Zeldovich (pp. 16–17); $G = 1$ units, conversions, $8\pi G/c^4$, "hard to bend" (pp. 18–19).
- Left out (minor, info): the comparison with the electron's magnetic moment, known to about 13 digits (p. 18), which makes the "poorly known G" point vivid; Hughes's remark that the Newtonian equation of motion was already previewed at the end of the geodesics lecture (p. 8); personal asides (empty classroom, 1993). None is needed for the physics.
- Added: the original worked examples and the cosmology callout (supernovae 1998, which is accurate but not from this lecture; it is in the callout, not attributed to Hughes, so fine).

## Licensing
- `grep -i "rights reserved|courtesy"` on the transcript: no matches. The transcript is under the course's CC BY-NC-SA licence; no figures are used.
- No OpenStax/LibreTexts material. Carroll is cited only implicitly for fact-checking ("Carroll's textbook" in the G = 1 paragraph reports what Hughes said).
- Paraphrase: a 6-word n-gram comparison of page and transcript found 32 overlaps, all standard terminology ("local conservation of energy and momentum", "trace-reversed Ricci tensor", "coordinate-invariant tensorial form", "8 pi G T mu nu"). The closest borrowed phrase is "Spacetime is hard to bend" (p. 19), used three times; it is a short memorable phrase and acceptable, but one instance could be attributed ("as Hughes puts it"). No sentences are copied.

## Notes
- Slips: both noted slips (lowered $u_0$ sign on p. 14; "ρ = 8πG" on p. 17) are real and handled correctly, as is the truncation of 1.47 km and 4.92e-6 s. Further small ones, all silently correct on the page: "4 pi rho" without G on p. 8 (#2); "T00 minus 1/2 T00 T" for $g_{00}T$ on p. 14; transcription artefacts ("chronic or delta", "8 pi j", "isotopic", "contract on indices g and nu", "four vector c" for ξ) need no note.
- leadsTo: L13 (Einstein–Hilbert action, confirmed in the L13 transcript), L14 (linearized gravity with $h_{\mu\nu}$, confirmed), L18 (Cosmology I discusses the cosmological constant, confirmed by search), 8.286 L18 (`cosmological-constant.mdx` derives $p_\text{vac} = -\rho_\text{vac}c^2$ and covers the 1998 supernovae): all correct and fairly attributed. The callout's "and the puzzle of its tiny size" is 8.286 Lecture 20 (`vacuum-energy-puzzle.mdx`); optionally add a leadsTo entry for 8.286 Lecture 20.
- The text "the next lecture repeats the job with an action principle" is true (L13) though Hughes in L12 only says "two different ways"; fine.
- Prerequisites exist: `christoffel-symbols` and `geodesic-equation` (8.286), `equivalence-principle-metrics` (8.033). Once 8.962 Lectures 9–11 have pages, they should become the prerequisites.
- Writing rules: no em dashes (grep found none); `##` sections; ends with `## Summary`; worked examples are original; post-2013/2020 facts are handled (CODATA 2018 marked as the actual value against Hughes's recollection).
- Verdict: pass-with-notes. No errors; one warning (#1) and some info-level citation and wording refinements.

## Resolution (2026-11-19, by the page author)

- #1: quiz 4 now gives water's mass density ρ = 1000 kg/m³ and its energy density ρc² separately.
- #2: added a bracket saying that Hughes says "4π ρ" without the G.
- #3, #8: removed the Laplace bracket. The "semi" coordinate-invariant remark now refers to the way the Laplace operator is written, as Hughes uses it.
- #4: "about seven weeks" is now "six or seven weeks" (calcs `dates` updated).
- #5, #6: citations changed to transcript pp. 4–5 (trace) and pp. 9–10 (weak-field metric).
- #7: mentions Hughes's switch from δ^ij to η^ij (p. 11).
- #9: geodesic deviation is now described as a relative acceleration.
- Paraphrase: "Spacetime is hard to bend" now appears once, attributed to Hughes; the summary uses its own words.
- Black-hole remark: now exact. A water ball of that radius has 2GM/c² equal to a third of its radius (new calcs identity `water-ball`).
- Added a leadsTo entry to 8.286 Lecture 20 (vacuum-energy puzzle).
- Status set to reviewed.
