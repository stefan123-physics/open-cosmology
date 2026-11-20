---
page: content/year-4/8.09/perihelion-precession-perturbed-kepler.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/8ba02baff1896b9ba92eeb05e6a6952c_MIT8_09F14_Chapter_5.pdf (read: local copy, text extraction plus page images of printed pp. 98-103 for every equation)
  - MIT 8.09 Chapter 4 notes (read: local text extraction, only to check the "Section 4.5" reference)
  - content/year-5/8.962/_course.json (read: Lecture 9 = "Geodesics")
verdict: needs-changes
---

# Review: Perihelion precession from a perturbed Kepler orbit

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Introduction, last sentences: "The Kepler problem's action-angle variables come from Chapter 4 of the notes (Section 4.5 there)." | Section 4.5 ("Kepler Problem") separates the 3D Kepler problem with the Hamilton-Jacobi equation. The action-angle variables $J_r, J_\theta, J_\phi$ and the combinations $J_1 = J_\phi$, $J_2 = J_\theta + J_\phi$, $J_3 = J_r + J_\theta + J_\phi$ are in Section 4.6 ("Action-Angle Variables", "Kepler Problem Example", eq. 4.215). | Section 4.5 | Write "(Section 4.6 there, building on the Hamilton-Jacobi solution of Section 4.5)" or just "Section 4.6". The sibling page pendulum-periodic-secular-perturbations already cites 4.6 for the oscillator. |
| 2 | warning | Mercury paragraph, last sentence: "This was one of the first tests of general relativity, and it is still an important one (p. 101)." | "This was historically one of the first tests of general relativity, and still remains an important one." | A near word-for-word copy of the notes' sentence. | Rephrase in the page's own words (for example, "Mercury's orbit was among the earliest checks of Einstein's theory and remains a standard one"). |
| 3 | info | Formula "Conserved energy and angular momentum" (eq. 5.50) | $p_\phi = -\partial L/\partial\dot\phi = mr^2\sin^2\theta\,\dot\phi = \ell$ (the notes define $p_\phi$ with a minus sign). | $-p_\phi = mr^2\sin^2\theta\,d\phi/d\tau = \ell$, i.e. $p_\phi = \partial L/\partial\dot\phi$. | The page's form is the correct one with the usual definition of $p_\phi$, but it differs from the cited equation without saying so. Add a short bracket ("with $p_\phi = \partial L/\partial\dot\phi$; the notes put the minus sign in the definition"). |
| 4 | info | Formula "Kepler action-angle variables", eqs. (5.30)-(5.31) | The notes write the angles as $\omega_i$ ($\omega_1 = \omega_\phi - \omega_\theta$, ...), using $w_2$ only once in the text. | $w_i$ throughout. | Fine (it avoids a clash with $\omega = 2\pi w_2$), but one bracket saying the notes write $\omega_i$ would help a reader comparing. |
| 5 | info | After eq. (5.30) | Fig. 5.3 contrasts precession seen from the centre of the ellipse (a) and from its focus (b), and says (b) is the planet's case. | Fig. 5.3 is (correctly) not reproduced, but its point (centre vs focus) is not mentioned in words. | Optional: one sentence saying the perihelion turns about the focus, where the Sun is; the page's own plot already shows that view. |

All formula citations were checked against the page images:
- (5.29) p. 98; Kepler action-angle list (unnumbered) p. 99; (5.30), (5.31), (5.32) p. 99; (5.33)-(5.38) p. 100; n = 3 result (unnumbered) p. 100; (5.39) p. 100; (5.40) p. 101; (5.41)-(5.46) p. 101; (5.47)-(5.50) p. 102; (5.51)-(5.54) p. 103. All equation numbers and printed pages are correct, and every formula matches the notes (with the flagged changes).
- "Relativistic advance per orbit": the first form $6\pi m^2hk/\ell^4$ is the notes' n = 3 result times $T$; the last two forms are correctly marked as derived on the page. Verified: $6\pi m^2hk/\ell^4$ with $h = k\ell^2/(c^2m^2)$ gives $6\pi k^2/(c^2\ell^2)$, and with $\ell^2 = mka(1-\epsilon^2)$, $k = GMm$ gives $6\pi GM/(c^2a(1-\epsilon^2))$, the standard result.
- "Radial equation from the metric" (5.52): the notes' first term $(1 - r_s/r)c^2E_{\rm tot}^2/(m^2(1-r_s/r)^2c^4)$ simplifies to the page's $E_{\rm tot}^2/(m^2c^2(1 - r_s/r))$; last term $r^2\ell^2/(m^2r^4) = \ell^2/(m^2r^2)$. "First term simplified" is correctly noted.
- (5.54) rechecked: multiplying (5.52) by $(m/2)(1 - r_s/r)$ and using (5.53) gives exactly the page's equation; the resulting $V_{\rm eff}$ and the step $mr_sc^2 = 2k$ reproduce (5.40).

Slip remarks verified:
- (5.38): the notes print $ds^2 = -c^2(d\tau)^2 = (1 - r_S/r)c^2dt^2 - \dots$. With this $(+,-,-,-)$ right side, $ds^2 = +c^2d\tau^2$ for a timelike path, as the side note itself states after (5.48). The page's correction is right.
- (5.47): the notes print $c^2t^2$ for $c^2dt^2$. Correct remark.
- (5.48): the notes say the geodesic "minimizes" proper distance. For a timelike geodesic the proper time is a (local) maximum among nearby timelike paths; only stationarity is used. Correct remark.
- p. 101: the notes say "An arcsecond is 1/3600'th of a second". It is 1/3600 of a degree. Correct remark.
- "h held fixed" (p. 101): the notes say exactly this ("h must be treated as a constant independent of the canonical variable ℓ ... substitute this value for h at the end"). The physics is right: the $-k\ell^2/(c^2m^2r^3)$ term is part of an effective potential evaluated at fixed $\ell$, so the radial force (and the orbit) is that of a fixed-$h$ inverse-cube potential. Treating $h$ as fixed gives $6\pi k^2/(c^2\ell^2)$ per orbit, the standard GR advance; differentiating $h$ too would give $2\pi k^2/(c^2\ell^2)$, three times too small. (The page states the rule without this reason; adding one sentence would be an improvement, info only.)

## Arithmetic and answer checks
- Mercury: $1 - 0.2056^2 = 0.95773$; $6\pi \times 1.4766/(5.79\times10^7 \times 0.95773) = 5.019\times10^{-7}$ rad per orbit (0.1035 arcsec, so "about 0.1 arcsecond" in the caption is right); $100/0.2409 = 415.1$ orbits; $2.084\times10^{-4}$ rad $= 42.98$ arcsec per century. Matches the notes.
- Earth: $1 - 0.0167^2 = 0.99972$; $1.861\times10^{-7}$ rad per orbit; $1.861\times10^{-5}$ rad per century $= 3.839$, "3.84" arcsec. Correct.
- Ratio $42.98/3.839 = 11.2$, "about 11"; $1.496\times10^8/5.79\times10^7 = 2.584$ ("2.6"); $1/0.2409 = 4.151$ ("4.15", which is also $2.584^{1.5}$ by Kepler's third law, consistent with "helps again through the number of orbits"); $0.99972/0.95773 = 1.0439$, "adds 4%". Product $2.584 \times 4.151 \times 1.0439 = 11.20$. Correct.
- Period formula: $\pi k\sqrt{m/(-2E^3)}$ equals $2\pi\sqrt{ma^3/k}$ with $a = -k/2E$. Correct. $E^{(0)} = -2\pi^2k^2m/J_3^2$ and $\epsilon = \sqrt{1 + 2E\ell^2/mk^2}$ match the notes.
- n = 2: $\overline{\Delta H} = -2\pi hm/(\ell T)$, derivative $2\pi hm/(\ell^2T)$. Independent check: $-h/r^2$ shifts $\ell^2 \to \ell^2 - 2mh$ in the centrifugal term, so the orbit equation in $\psi$ has frequency $\sqrt{1 - 2mh/\ell^2} \approx 1 - mh/\ell^2$ and the perihelion advances $2\pi mh/\ell^2$ per orbit. Agrees, and confirms the sign claim "both rates are positive for $h > 0$".
- n = 3: $-2\pi hkm^2/(\ell^3T) \to 6\pi m^2hk/(\ell^4T)$. Correct.
- Oscillator: $p^4/(8c^2m^3)$ with $p = \sqrt{Jm\Omega/\pi}\cos(\cdot)$ gives $J^2\Omega^2/(8\pi^2c^2m)\cos^4$; $\partial/\partial J$ gives $-J\Omega^2/(4\pi^2mc^2)\cos^4$; $\langle\cos^4\rangle = 3/8$ gives $-3J_0\Omega^2/(32\pi^2mc^2)$. $\dot J^{(1)} \propto \cos^3\sin$ averages to zero. All correct.
- The page's $\tfrac{3}{16}(v/c)^2$: amplitude $A = \sqrt{J/(\pi m\Omega)}$ so $J_0 = \pi m\Omega A^2$; top momentum $\sqrt{Jm\Omega/\pi} = m\Omega A$, so $v_{\max} = \Omega A$; $\overline{\dot\beta^{(1)}}/\nu = -3\pi m\Omega^3A^2/(32\pi^2mc^2) \times 2\pi/\Omega = -\tfrac{3}{16}(\Omega A/c)^2$. Correct, and it agrees with the known first-order result for the relativistic oscillator, $\omega \approx \omega_0(1 - \tfrac{3}{16}v_{\max}^2/c^2)$. It is correctly marked as the page's own step.
- Plot: $r = 1/(1 + 0.5\cos 0.9\psi)$ returns to perihelion at $\psi = 2\pi/0.9$, advance $2\pi(1/0.9 - 1) = 0.698$ rad $= 40.0°$. First perihelion at $r = 2/3$ (point 0.6667, 0). Over $\psi \in [0, 4\pi]$ the extreme points (aphelia at $(-1.88, -0.68)$ and $(-1.00, -1.73)$, $x$ at most about 0.87) lie inside the domain $[-2.2, 1.2]$ and range $[-2.2, 2.2]$. Caption correct.
- Quiz 1: answer 1 correct; explanation correct ($J_2 = 2\pi\ell$, $J_1, J_3$ fixed, $T = T(J_3)$).
- Quiz 2: answer 1 ($6\pi m^2hk/\ell^4$) correct; distractor 0 is indeed the n = 2 result.
- Quiz 3: answer 1 ("about 3.8 arcsec per century") correct; explanation numbers verified above.
- Quiz 4: answer 1 correct; explanation correct.
- Flashcards 1-5: all statements verified against the notes and the checks above.
- calcs file: every entry matches the page text and my recomputation (I did not run `npm run calc:test`).

## Coverage and order
- The page follows Section 5.3 and the side note in the notes' order: (5.29); the $J_i$, $w_i$ list; (5.30); perihelion angle $\omega = 2\pi w_2$; (5.31)-(5.37); the n = 2 and n = 3 cases; (5.38)-(5.40); $h$ held fixed; Mercury numbers; momentum perturbations (5.41)-(5.46), including (5.45) in words; the closing remark (negative frequency shift); side note (5.47)-(5.54). Nothing is missing except the verbal content of Fig. 5.3 (finding 5) and the intermediate $r_s$ form of $V_{\rm eff}$ at the top of p. 101, which the page gives later in the side note (fine).
- Additions, correctly flagged as the page's own: the explicit $J_r = J_3 - J_2$ from $F_2$, the sign/advance remark, the last two forms of the advance per orbit, the $\tfrac{3}{16}(v/c)^2$ form, the generated plot, the Earth worked example, the cosmology callout.

## Licensing
- No "rights reserved" or "Courtesy of" notice in the Chapter 4 or Chapter 5 notes (grep on the extracted text).
- Fig. 5.3 is not redrawn; the page's plot is generated from its own formula and shows a different (single, focus-centred, exaggerated) orbit.
- No OpenStax or LibreTexts material.
- Paraphrase is generally the page's own; one near-verbatim sentence (finding 2). "One way to see it: the generating function" is close to the notes' "One way to see this is to note that ... by using the generating function", but short enough to be acceptable.
- The worked example (the Earth) is original to the page; the notes only treat Mercury.

## Notes
- Mercury facts: the notes' 531.54 arcsec/century from the planets and observed 43.1 are quoted correctly (they are Clemence's 1947 figures, 531.54 and 43.11). The page's wording ("a total advance that includes ... once that and other known effects are removed") matches the notes' "After removing other contributions, such as ...".
- Cosmology callout: correct (the Einstein field equations applied to a homogeneous, isotropic universe give the Friedmann equations; 8.286 uses them).
- leadsTo 8.962 Lecture 9 "Geodesics" (Spring 2020): the title matches `_course.json`, and the claim (the geodesic equation with Christoffel symbols, which the notes mention and avoid) matches the notes' parenthesis after (5.48). I did not read the 8.962 lecture itself, so whether that lecture also derives geodesics from an action is uncertain; the stated claim does not depend on it.
- "General relativity corrects the Newtonian potential ... the correction is exactly an inverse-cube term": acceptable for the effective potential (5.40), though that equation uses the $E \ll mc^2$ expansion (5.53) and proper time; "exactly" could be softened (info).
- Internal links use the course id `8-09`, consistent with the sibling 8.09 pages; prerequisite pages exist.


## Resolution (2026-11-19, by the page author)

1. Fixed: the introduction now cites Section 4.6 of the notes for the Kepler action-angle variables, building on Section 4.5.
2. Fixed: the sentence on Mercury as an early test of general relativity is rephrased.
3. Fixed: the text before eq. (5.50) notes that the notes define p_φ with the opposite sign, which comes to the same thing.
4. Fixed: the introduction says the notes write the angle variables as ω_i and the page uses w_i.
5. Fixed: the introduction states the point of Fig. 5.3 (centre versus focus) in words.
6. Fixed: "exactly an inverse-cube term" is softened to apply to slowly moving planets, and the reason for holding h fixed is given in one sentence.
