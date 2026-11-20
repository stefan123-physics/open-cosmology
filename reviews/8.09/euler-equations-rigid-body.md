---
page: content/year-4/8.09/euler-equations-rigid-body.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf (read: rendered images of printed pp. 44-45, the text layer of Chapter 2 for the Euler-angle convention on pp. 30-31 and for Section 2.5 on pp. 45-47)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_2/ (not read separately; it is the landing page of the same PDF)
verdict: pass-with-notes
---

# Review: Euler's equations and the stability of free rotation

Source: Stewart's typed notes, Chapter 2, Section 2.4, printed pp. 44-45 (PDF pages 16-17). There is no video or transcript. I checked every equation against the rendered page images, not the garbled text layer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Stability of free rotation", last sentences of the paragraph after the bullets | p. 45 ends with "This behavior can be demonstrated by spinning almost any object that has three distinct principal moments of inertia." Nothing about what happens after the linear regime. | "once it is no longer small, the full non-linear equations take over, and the body turns over and back again periodically." | The claim is correct (torque-free Euler equations conserve energy and $L^2$; the motion near the intermediate axis is a periodic flip, solvable with Jacobi elliptic functions), but it goes beyond the notes without saying so. Add "(not in the notes)" or "(beyond the notes' linear analysis)". The same applies, more mildly, to the named examples (book, tennis racket, phone) and the name "tennis racket / intermediate axis theorem" in flashcard 3; these are standard and need no change. |
| 2 | info | Quiz 2 explanation | (2.73): the constant is $(I_3 - I_1)(I_1 - I_2)\omega_1^2/(I_2I_3) = -(I_1 - I_2)(I_1 - I_3)\omega_1^2/(I_2I_3)$. | "$C$ proportional to the product of the differences between the spin axis's moment and the two others. If the spin axis has the largest or the smallest moment, $C < 0$". | Correct only if "proportional" carries a negative constant: the product $(I_1 - I_2)(I_1 - I_3)$ is positive for the largest or smallest axis, and $C$ is minus it. Write "C is minus a positive factor times the product ...", or "C has the opposite sign to the product ...". |
| 3 | info | Worked example, step "Spin about the width axis" | Not in the notes. | "a 1% tilt reaches order one after about $\ln 100/\alpha \approx 0.46$ s". | Fine as an estimate for a pure growing mode. With the plot's initial condition (no initial rate of change), $\kappa/\kappa_0 = \cosh\alpha t$ reaches 100 at $\operatorname{arccosh}(100)/\alpha = 5.30/9.94 \approx 0.53$ s. Either keep "about" or say which mode is meant; optional. |
| 4 | info | "Back to the fixed frame", derivation of (2.70) | p. 45: "These results should be derived as exercise for the student." | Gives the body components of the fixed $z$ axis, $(\sin\theta\sin\psi, \sin\theta\cos\psi, \cos\theta)$, and of the line of nodes, $(\cos\psi, -\sin\psi, 0)$. | Correct for the notes' convention (verified below). The page could add half a sentence saying how they follow ($U_\psi U_\theta$ applied to $(0,0,1)$, and $U_\psi$ applied to $(1,0,0)$), but this is optional. |
| 5 | info | Bullets after (2.73) | Notes call the frequency $w$ and the phase $\phi$. | Uses $\Omega$ and $\delta$, and says so in brackets. | None; the renaming is flagged properly. |

## Arithmetic and answer checks
- **Formula citations.** (2.66), (2.67), (2.68), (2.69) are on printed p. 44; (2.70), (2.71), (2.72), (2.73) on p. 45. All eight `<Formula>` blocks match the notes term by term, including signs and the order $\epsilon_{\alpha lk}\,\omega_l\,\omega_k\,I_k$. Section range pp. 44-45 is right.
- **Levi-Civita check after (2.69).** For $\alpha = 1$: $\epsilon_{123}\omega_2\omega_3I_3 + \epsilon_{132}\omega_3\omega_2I_2 = (I_3 - I_2)\omega_2\omega_3 = -(I_2 - I_3)\omega_2\omega_3$, the first line of (2.68). Correct.
- **Derivation of (2.70).** Notes pp. 30-31: $\phi$ about $z$, $\theta$ about the new $\tilde x$ (line of nodes), $\psi$ about $z'$; passive matrices, $U = U_\psi U_\theta U_\phi$. Body components of the fixed $z$: $U_\phi\hat z = \hat z$; $U_\theta(0,0,1) = (0, \sin\theta, \cos\theta)$; $U_\psi(0, \sin\theta, \cos\theta) = (\sin\psi\sin\theta, \cos\psi\sin\theta, \cos\theta)$. Body components of the line of nodes ($(1,0,0)$ in the intermediate frame): $U_\psi U_\theta(1,0,0) = U_\psi(1,0,0) = (\cos\psi, -\sin\psi, 0)$. Adding $\dot\phi$, $\dot\theta$ and $\dot\psi(0,0,1)$ reproduces (2.70) exactly. Correct.
- **(2.73) from (2.72)** and the stability conditions: correct; $I_1$ largest or smallest gives $(I_3 - I_1)(I_1 - I_2) < 0$; intermediate gives $> 0$. Matches the notes ("$I_1 < I_{2,3}$ or $I_{2,3} < I_1$" stable; "$I_2 < I_1 < I_3$ or $I_3 < I_1 < I_2$" unstable).
- **Phone worked example (recomputed).** $I_1 = 49.64/12 = 4.137$, $I_2 = 225.64/12 = 18.803$, $I_3 = 274/12 = 22.833$ (units $M\,\text{cm}^2$); $I_3 - I_2 = 4.03$, $I_2 - I_1 = 14.67$; $\omega = 4\pi = 12.566$ s⁻¹. Intermediate (width) axis, by cyclic relabelling of (2.73): constant $= \omega^2(I_3 - I_2)(I_2 - I_1)/(I_1I_3) > 0$, $\alpha/\omega = 0.7911$, $\alpha = 9.941$ s⁻¹, $1/\alpha = 0.101$ s, $\ln 100/\alpha = 0.463$ s. Long axis: $-\omega^2(I_2 - I_1)(I_3 - I_1)/(I_2I_3)$, $\Omega/\omega = 0.7992$, $\Omega = 10.043$ s⁻¹, period $0.626$ s. Thickness axis: $\Omega/\omega = \sqrt{(I_3 - I_1)(I_3 - I_2)/(I_1I_2)} = 0.9842$, $\Omega = 12.37$ s⁻¹. All page values (4.14, 18.8, 22.8, 4.03, 14.7, 0.791, 9.94, 0.10, 0.46, 0.799, 10.0, 0.63, 0.984, 12.4) are correct. The box moment formula $\tfrac{M}{12}(b^2 + c^2)$ is right, and the axis assignments (long axis smallest, thickness axis largest) are right.
- **Example originality.** The notes have no worked example in Section 2.4 beyond the general stability analysis; the phone with its own dimensions is original.
- **Plot.** $\cosh(9.94t)$ and $\cos(10.04t)$ match $\alpha$ and $\Omega$ above and the stated initial condition ($\kappa = \kappa_0$, $\dot\kappa = 0$). The growing curve hits 12 at $\operatorname{arccosh}(12)/9.94 = 0.320$ s, as the caption says. The 0.6 s domain shows about one oscillation period (0.63 s). Caption says it is computed from the formula. Correct.
- **Quiz.** Q1 answer 1 (the $\vec\omega\times\vec\omega = 0$ term) correct, and the explanation correctly separates this from $d_R I_\alpha/dt = 0$ (notes p. 44). Q2 answer 2 (axes 1 and 3) correct; see note 2 on the explanation's wording. Q3 answer 0 correct and the explanation consistent with the verified body components ($\hat z\cdot\hat z' = \cos\theta$, line of nodes $\perp z'$). Q4 answer 1: $e^{0.994} = 2.70$, correct.
- **Flashcards.** All four correct; card 3's $\alpha^2$ matches the worked example's relabelled (2.73).
- **Calcs file** `calcs/8.09/euler-equations-rigid-body.yaml`: every entry I recomputed agrees with its `expected` value; the identity checks (Levi-Civita, $|\vec\omega|^2$ from (2.70), (2.73)) are sound. The $|\vec\omega|^2$ identity is a consistency check, not a full check of (2.70) (it does not test the individual components); my component check above covers that.

## Coverage and order
- Section 2.4 in order: (2.66)-(2.67) torque in the body frame; the three facts ($L_\alpha = I_\alpha\omega_\alpha$, constant $I_\alpha$, $\dot\omega$ frame-independent); (2.68); (2.69); solution $\omega_\alpha(t)$ in the body frame and (2.70); the free-rotation stability example (2.71)-(2.73) with both cases. All covered, in the notes' order. Nothing omitted.
- Additions: the remark that the equations are non-linear and the pointer to Section 2.5; the worked example and plot; the non-linear flipping remark (note 1).
- Prerequisites exist (three 8.09 pages, `torque-and-angular-impulse` in 8.01); the link `/courses/8-01/torque-and-angular-impulse` follows the same URL form as other 8.01 links on the site.
- leadsTo: 8.09 Section 2.5 "Symmetric Top with One Point Fixed": the notes do first treat the torque-free symmetric top with Euler's equations (2.74)-(2.79) and then, with gravity, turn to the Lagrangian ("easier to use the Lagrangian than the Euler equations directly", p. 47); the `why` is accurate. Section 7.3 "Fixed Points in Two-Dimensional Systems": linear stability about a steady state is a fair link. Both titles match `_course.json`.

## Licensing
- The notes are CC BY-NC-SA; no "All rights reserved" or "Courtesy of" notice on pp. 44-45 (grep of the whole Chapter 2 text layer found none). No figure reused (Section 2.4 has none).
- No verbatim copying beyond standard terms; the page's wording ("Three facts simplify this", "Every quantity here ... is a component along the body axes") is its own paraphrase. No OpenStax or LibreTexts material.

## Notes
- No em dashes on the page. All display equations are `<Formula>` with `cite` and `at`; the perturbation $\vec\omega = \omega_1\vec e_1 + \kappa_2\vec e_2 + \kappa_3\vec e_3$ is inline, which is fine (it is unnumbered in the notes too).
- Optional: the stability of rotation about the smallest-moment axis holds for a rigid body with no energy loss; a body that dissipates energy (Explorer 1) ends up about the largest-moment axis. Not needed for this page, but could be a one-line aside.
- I did not run `content:check` or `calc:test`; the verdict rests on the hand and Python checks above.

## Resolution (2026-11-19, by the page author)

- Finding 1: the remark on periodic flipping is now marked "(this last point goes beyond the notes)".
- Finding 2: quiz 2 explanation now says C has the opposite sign to the product of the differences.
- Finding 3: the worked example adds that with no initial rate of change (cosh growth, as in the plot) 100-fold growth takes 0.53 s; new calcs entry `phone-tgrow-cosh`.
- Finding 4: added a bracketed sentence saying the two direction vectors follow from applying U_ψU_θ to (0, 0, 1) and (1, 0, 0).
- Finding 5: no change needed.
