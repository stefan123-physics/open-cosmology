---
page: content/year-4/8.09/symmetric-top-one-point-fixed.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf (read: rendered page images of printed pp. 45-51 for every equation, text layer for wording and notices)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_2/ (same chapter; not opened separately, the PDF above is its file)
verdict: pass-with-notes
---

# Review: The symmetric top: free precession, nutation and the effective potential

Every `<Formula>` was compared with the rendered notes pages (printed p. = PDF p. + 28). All 21 citations give the right equation number and printed page: (2.74)–(2.79) on p. 46, (2.80)–(2.82) on p. 47, (2.83)–(2.90) on p. 48, (2.91)–(2.94) on p. 49, (2.95) on p. 50. The cross-references in the text are also right: "notes p. 47" for ω precessing about L, Figs. 2.8–2.11 on pp. 50–51, and the Euler-angle expressions "from Section 2.4", which are eq. (2.70) on p. 45. No transcription errors were found in any formula.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Formula "Euler's equations for a symmetric top" (2.74), first line | $I_1\dot\omega_1 - (I_2 - I_3)\omega_2\omega_3 = \tau_1$ | $I_1\dot\omega_1 - (I_1 - I_3)\omega_2\omega_3 = \tau_1$ | The two are equal because $I_1 = I_2$, and the page's form is arguably clearer. Either quote the notes exactly or add "(with $I_2 = I_1$)". |
| 2 | info | Worked example step "The motion"; quiz 4 explanation | (not in notes; the page's own claim) | "the precession averages close to $mgR/p_\psi = 3.27$ rad/s, one turn in about 1.9 s" | A numerical integration of the full equations for the example's top (solve_ivp, rtol 1e-10, 5 s) gives an average $\dot\phi$ of **3.41 rad/s**, so one turn takes 1.84 s. 3.27 is the fast-top estimate and is 4% low here ($a = 0.098$ is not very small). "Close to" is still fair, but consider: "averages about 3.4 rad/s, close to the fast-top estimate $mgR/p_\psi = 3.27$ rad/s; one turn in about 1.8–1.9 s". Quiz 4 is unaffected: "About 3.3 rad/s" is still clearly the right choice. |
| 3 | info | Frontmatter `summary` | p. 47: ω precesses about L; the symmetry axis keeps angle θ₀ to L | "the symmetry axis and ω both precess steadily about the fixed L at the constant tilt θ₀" | ω's angle to L is not θ₀. Reword, for example "the symmetry axis (at constant tilt θ₀) and ω both precess steadily about the fixed L". |
| 4 | info | Section "The effective potential", the third root | Notes: "in general three roots"; physical region $-1 \le u \le 1$ | "At $u = \pm 1$ the potential is $\tfrac12(p_\phi \mp p_\psi)^2/I_1^2 \ge 0$ ... so one root lies above $u = 1$" | Correct, and the page itself adds it. Strictly, the root is at $u \ge 1$ (it equals 1 when $p_\phi = p_\psi$, the sleeping top). Optional: say "at or above $u = 1$". |
| 5 | info | calcs entry `ex-phidot-avg`, `ex-period` | Notes p. 51 do not give $mgR/p_\psi$ | `source: … p. 51` | These are the page's own (`origin: page-own`). Cite (2.90) or mark them as the page's own fast-top estimate, not p. 51. |

## Arithmetic and answer checks
- $mgR = 0.1 \times 9.8 \times 0.04 = 0.0392$ J ✓; $p_\psi = 4\times10^{-5}\times 300 = 0.012$ kg m²/s ✓; $300/2\pi = 47.7$ ≈ 48 turns/s ✓.
- The example's inertia values are consistent with a thin disc: $mR^2 = 1.6\times10^{-4}$, so $I_{\perp,\text{cm}} = 2\times10^{-5} = I_3/2$ ✓.
- With $p_\phi = p_\psi u_0$ and $E = p_\psi^2/2I_3 + mgRu_0$, $V_\text{eff}$ from (2.93) factorises as the page states. Checked algebraically: the bracket becomes $(mgR/I_1)(u_0-u)$ ✓.
- $a = 2mgRI_1/p_\psi^2 = 2(0.0392)(1.8\times10^{-4})/1.44\times10^{-4} = 0.098$ ✓. Root of $a u^2 - u + (u_0 - a) = 0$: $u_1 = (1 - \sqrt{0.698934})/0.196 = 0.83662$ ✓, $\theta_1 = 33.21^\circ$ ✓. The other root, 9.37, is unphysical ✓.
- $u_0$ is indeed the upper turning point: just below $u_0$ the bracket is negative, so $V_\text{eff} < 0$ ✓. The full numerical integration gives θ between 30.000° and 33.215° ✓.
- At $u_1$: $\dot\phi = p_\psi(u_0-u_1)/[I_1(1-u_1^2)] = p_\psi a/I_1 = 2mgR/p_\psi = 6.533$ rad/s ✓ (numerical maximum 6.5333 ✓).
- $mgR/p_\psi = 3.267$ ✓ and $2\pi/3.267 = 1.92$ s ✓ as arithmetic. The numerical average is 3.41 rad/s (see table item 2).
- "Nodding small and quick": the numerical nutation period is 0.103 s, against the fast-top estimate $2\pi I_1/p_\psi = 0.094$ s ✓.
- Plot: the coefficients $66.6667 = 0.012/1.8\times10^{-4}$ and $217.778 = 0.0392/1.8\times10^{-4}$ ✓. The curve's minimum is $-0.401$ s⁻² at $u = 0.8513$, and its values at the domain ends are $0.887$ (u = 0.825) and $0.637$ (u = 0.875), all inside range $[-0.6, 1.2]$ ✓. Points 0.8366 and 0.8660 are roots ✓. Caption values ✓. Units of $V_\text{eff}$ s⁻² ✓ (same as $\dot u^2$).
- My own step "free precession rate $L/I_1$": $\omega_3 + \Omega = I_3\omega_3/I_1 = C\cot\theta_0$, so $\dot\phi = C/\sin\theta_0 = I_3\omega_3/(I_1\cos\theta_0) = L/I_1$ with $L\cos\theta_0 = L_3$ ✓. The other sign (2.84) gives the same result ✓. This is the standard result and is clearly labelled as the page's own step ✓.
- Rotation sense: $(\sin x, -\cos x)$ turns counterclockwise as $x$ grows, so for $\Omega > 0$ (oblate, $I_3 > I_1$) it is counterclockwise about body $z$ ✓ (quiz 2 explanation).
- $V_\text{eff}(\pm1) = \tfrac12[(p_\phi \mp p_\psi)/I_1]^2$ ✓. Leading term $-(mgR/I_1)u^3$, so $V_\text{eff}\to-\infty$ as $u\to+\infty$ ✓. $\dot\phi$ changes sign only at $u = p_\phi/p_\psi$ ✓.
- Body and space cones: for prolate ($I_1 > I_3$), ω lies between z and L and the body cone rolls on the outside of the space cone. For oblate, the body cone surrounds the space cone. Both are standard (e.g. Goldstein §5.6) ✓, and the notes' p. 47 figure shows the prolate case.
- Quiz 1 (answer 0) ✓; quiz 2 (answer 1, 10 s⁻¹) ✓; quiz 3 (answer 1) ✓, and its explanation that the line-of-nodes torque changes the other components is right ✓; quiz 4 (answer 1) ✓, see note 2.
- All five flashcards agree with (2.76)–(2.95) and with Figs. 2.8–2.11 ✓.
- calcs identities (free-solution, free-psi, kinetic-energy-286, phidot-290, veff-293, ex-root-check) were checked by hand and are correct. `free-solution` checks only the first equation of (2.77); the second is also satisfied (info).

## Coverage and order
- The page follows Section 2.5 in the notes' order: set-up and (2.74); the case $\tau = 0$, $\dot\theta = 0$ ((2.75)–(2.84), including the body-frame picture, ω precessing about L and the cones); the case $\tau \ne 0$, $\dot\theta \ne 0$ ((2.85)–(2.94)); Fig. 2.7 / (2.95), turning points and nutation; the four motions of Figs. 2.8–2.11. No segment is left out.
- Additions beyond the notes: the explicit $\tau_3 = 0$ argument; $L/I_1$; the prolate/oblate cone geometry; $V_\text{eff}(\pm1)$ and the third root; the "sign change at $u = p_\phi/p_\psi$" remark; the worked example and plot. The page marks the $L/I_1$ step as its own. The other additions are correct and need no marking beyond what is there.

## Licensing
- The chapter's text layer has no "All rights reserved" or "Courtesy of" notice.
- None of the notes' figures is redrawn. The top diagram, the body-cone figure, Fig. 2.7 and Figs. 2.8–2.11 are described in words only. The one graph is the page's own $V_\text{eff}$ for its own example, generated from a formula.
- The prose is rewritten. The closest wording, "energy equation of a particle of unit mass ... total energy zero", is standard terminology, not copied text. The worked example (toy top, own numbers, released at 30°) is original; the notes have no numerical example.
- No OpenStax or LibreTexts material.

## Notes
- Prerequisites `euler-equations-rigid-body`, `moment-of-inertia-tensor` and `rigid-body-coordinates-euler-angles` exist in `content/year-4/8.09/` and fit. Internal links use the course slug `8-09` ✓.
- `leadsTo` 8.09 4.6 is "Action-Angle Variables" in `_course.json`. The reason (bounded periodic motion between turning points, described by action-angle variables) is fair ✓. There is no cosmology callout, which is acceptable: no direct cosmology link is claimed.
- No em dashes on the page ✓. Ends with `## Summary` ✓. Status `draft` until the notes above are addressed or accepted.
- I did not run `npm run content:check` or `calc:test`. The numbers were recomputed independently, as above.

## Resolution (2026-11-19, by the page author)

- Info 1: (2.74) now quotes the notes exactly, (I_2 - I_3) in the first line.
- Info 2: the average precession is now called "roughly" mgR/p_psi = 3.27 rad/s, "by that estimate" one turn in about 1.9 s, with a bracket saying it is the fast-top estimate and the true average for this top is a few per cent higher.
- Info 3: the summary now says the symmetry axis precesses about L at the constant tilt θ₀ and ω goes round with it.
- Info 4: the third root is now "at or above u = 1 (exactly at 1 only when p_phi = p_psi)".
- Info 5: calcs entries `ex-phidot-avg` and `ex-period` now cite eq. (2.90), p. 48, marked as the page's own fast-top estimate.
