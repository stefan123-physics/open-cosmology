---
page: content/year-4/8.09/perturbation-theory-hamilton-jacobi.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/8ba02baff1896b9ba92eeb05e6a6952c_MIT8_09F14_Chapter_5.pdf (read: local copy, rendered page images of printed pp. 92-95 checked equation by equation; text of pp. 96-101 read for the leadsTo claims)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_5/ (not opened separately; it is the resource page of the same PDF)
  - Chapter 4 notes (local text copy), only to confirm that the Hamilton-Jacobi equation is Section 4.4 (read)
verdict: pass-with-notes
---

# Review: Perturbation theory with the Hamilton-Jacobi equation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A first example with Hamilton's equations", bracketed remark "(The notes once write a Latin w for the omega here.)" | The notes write "w²" for ω² twice: p. 92 ("count w² as O(ε)") and p. 93 ("since w² does not appear we have not dropped anything"). | "once" | Say "twice" (or "write a Latin w for the omega in the text"), without a count. |
| 2 | info | "Using the Hamilton-Jacobi solution of H₀", last paragraph (interaction picture, "variation of constants" of celestial mechanics) | Not in the notes. | Comparison with the 8.06 interaction picture and with variation of constants. | Physics is correct; optionally mark it as the page's own remark ("Not in the notes: ..."), as the page does elsewhere. |
| 3 | info | End of "A first example...": "Section 5.2 shows how averaging over a period gets around it." | Section 5.2 (pp. 96-98) averages the first-order rates over one period to separate periodic from secular changes, and reads the secular drift of the angle variable as a shift of the frequency. The notes do not present it explicitly as a cure for the growing powers of ωt in Section 5.1's example. | Averaging "gets around" the weakness. | Acceptable as interpretation (the secular term becomes a frequency shift, which is exactly what resums the growing ωt terms); could soften to "Section 5.2 shows how averaging over a period handles such growing (secular) terms". |
| 4 | info | Formulas "First order"/"Order n" (eqs. 5.12, 5.13) | Evaluation written with a vertical bar, $|_{\alpha_i=\alpha_i^{(0)},\,\beta_i=\beta_i^{(0)}}$, shortened to $|_0$ and $|_{n-1}$. | Brackets $(\dots)_0$, $(\dots)_{n-1}$, with the meaning explained in the text. | None needed; equivalent notation. |
| 5 | info | Formula "First-order constants" (eq. 5.16) | Shows also the intermediate rates $\dot\alpha^{(1)} = -\omega^2\alpha_0 t$, $\dot\beta^{(1)} = (\omega^2/m)\alpha_0 t^2$. | Only the integrated results. | None needed (results verified). |

All 18 formula citations were checked against the page images: equation numbers (5.1)-(5.16) and (5.18) and their printed pages are correct ((5.1)-(5.4) p. 92; (5.5)-(5.9) p. 93; (5.10)-(5.14) p. 94; (5.15)-(5.18) p. 95). Every formula reproduces the notes' content exactly; eq. (5.17) is referred to in words with the right number. The inverse transformation $x = \alpha t/m + \beta$, $p = \alpha$ (unnumbered, p. 94), the initial values $\alpha^{(0)} = \alpha_0$, $\beta^{(0)} = 0$ and the rewritten $\Delta H = \tfrac12 m\omega^2(\alpha t/m + \beta)^2$ (p. 95) are also as in the notes. "Section 4.4 there" for the Hamilton-Jacobi equation is correct (Chapter 4 notes, Section 4.4 "Hamilton-Jacobi Equation").

## Arithmetic and answer checks
- Eqs. (5.5), (5.6): $\int_0^t -\omega^2 p_0 u\,du = -\tfrac12 p_0\omega^2t^2$; $\int_0^t (p_0 - \tfrac12 p_0\omega^2u^2)/m\,du = p_0t/m - p_0\omega^2t^3/(6m)$. Correct; they are the first two Taylor terms of (5.7).
- Eqs. (5.14)-(5.18): $S = \alpha x - \alpha^2t/2m$ solves $(S_x)^2/2m + S_t = 0$; $\partial\Delta H/\partial\beta = m\omega^2(\alpha t/m + \beta)$, $\partial\Delta H/\partial\alpha = \omega^2 t(\alpha t/m + \beta)$; first order $\alpha^{(1)} = \alpha_0 - \tfrac12\omega^2\alpha_0t^2$, $\beta^{(1)} = \omega^2\alpha_0t^3/(3m)$; $x^{(1)} = \alpha_0t/m - \omega^2\alpha_0 t^3(1/2 - 1/3)/m = \alpha_0t/m - \omega^2\alpha_0t^3/(6m)$. Correct. The page's remark that the momentum change alone would give $-t^3/2$ instead of $-t^3/6$ is correct.
- Plot caption: $1 - 1/6 = 0.8333$, $\sin 1 = 0.8415$, relative difference 0.97% ("about 1%"); at $\omega t = 2$: $2 - 8/6 = 0.6667$ against $\sin 2 = 0.9093$, 26.7% low ("27%"); zero of $s - s^3/6$ at $\sqrt6 = 2.449$ ("≈ 2.45"). Range $[-1.6, 1.2]$ contains both curves on $[0, 3]$ (first order reaches $-1.5$ at $s = 3$). Point (1, 0.8415) lies on the exact curve. Correct.
- Worked example (constant force, original to the page, not in the notes): $\Delta H = -F(\alpha t/m + \beta)$, $\partial_\beta\Delta H = -F$, $\partial_\alpha\Delta H = -Ft/m$; $\alpha = \alpha_0 + Ft$, $\beta = -Ft^2/2m$, $x = \alpha_0t/m + Ft^2/2m$; right-hand sides independent of $\alpha,\beta$, so higher orders vanish (exact). Numbers: $p = 3.0 + 2.0 = 5.0$ kg m/s; $\beta = -0.50\cdot16/4 = -2.0$ m; $x = 6.0 + 2.0 = 8.0$ m; check $5.0\cdot4.0/2.0 - 2.0 = 8.0$. All correct.
- Quiz 1: answer 1 ($K = \Delta H(\alpha,\beta,t)$), correct by eq. (5.10); explanation correct.
- Quiz 2: answer 1, correct by eq. (5.13); explanation correct.
- Quiz 3: answer 1 (8.0 m), correct; distractors 6.0 m (no force) and 10.0 m ($(3+2)\cdot4/2$, $\alpha(t)t/m$ without $\beta$) explained correctly.
- Quiz 4: answer 1, correct; 1% and 27% as above.
- Flashcards 1-4: all correct (expansion as eq. 5.2; $K = \Delta H$; order-$n$ rule as eq. 5.13; $S$, $p = \alpha$, $\beta = x - \alpha t/m$, $x = \alpha t/m + \beta$ as eq. 5.14 and p. 94).
- Summary frontmatter and `## Summary`: consistent with the above.
- calcs/8.09/perturbation-theory-hamilton-jacobi.yaml covers every number on the page and the derivations; values agree with my recomputation (I did not run `npm run calc:test`).

## Coverage and order
- Chapter 5 introduction (p. 92): splitting of $H$ (5.1), expansion (5.2), partial sums (5.3), list of formulations and the choice of Hamilton-Jacobi: covered, in order.
- Hamilton's-equations example (pp. 92-93): $H_0$, $\Delta H$, (5.4), counting $\omega^2$ as $O(\epsilon)$, zeroth order with $x(0) = 0$, (5.5), (5.6), (5.7): covered, in order. The page adds its own comment on the validity range (plot), which the notes do not discuss at this point.
- Section 5.1 (pp. 93-95): principal function and (5.8), validity of the transformation for any Hamiltonian, (5.9), (5.10), (5.11), expansion idea, (5.12), (5.13), inverse transformation at any stage, the example (5.14), inverse transformation, initial values, (5.15), (5.16), (5.17), (5.18), agreement with Hamilton's equations: all covered, in order.
- Added by the page: interaction-picture/variation-of-constants remark (finding 2), the plot, the constant-force worked example. Nothing from pp. 92-95 is missing.

## Licensing
- The Chapter 5 text has no "rights reserved" or "courtesy" notice (grep of the extracted text). No figures exist on pp. 92-95; the plot is generated from formulas.
- No sentences are copied. The closest wording is "particularly simple for H₀" (notes: "particularly simple variables for H0") and "from here on the notes use Hamilton-Jacobi methods" (notes: "From here on we will focus on using H-J methods"): short phrases, acceptable.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 5.2: correct. Section 5.2 (pp. 95-98) treats the finite-angle pendulum with the action-angle variables $(J, \theta)$ of the small-angle oscillator as unperturbed constants and averages over one period to separate periodic ($J$) from secular ($\theta$, a frequency shift) changes.
- leadsTo 5.3: correct. Section 5.3 (pp. 98-101) perturbs the Kepler Hamiltonian by $-h/r^n$, averages over an orbit to get the perihelion precession, and with the general-relativistic $1/r^3$ term of the effective potential obtains 42.98 arcseconds per century for Mercury (p. 101), so "43" is fair. "A small extra force" is a fair description of the central-force perturbation.
- Links checked: prerequisites `harmonic-oscillator` (8.03) and `taylor-series` (18.01) exist; in-text links `/courses/8-06/nondegenerate-perturbation-theory` and `/courses/8-06/interaction-picture-time-dependent-perturbations` point to existing pages.
- Not checked: build/content:check output, symbols entries.


## Resolution (2026-11-19, by the page author)

1. Fixed: the bracket now says the notes write a Latin w for omega twice on these pages.
2. Fixed: the interaction-picture / variation-of-constants comparison is marked as a remark of the page, not of the notes.
3. Fixed: the forward reference now says Section 5.2 separates periodic from secular changes and reads the secular part as a frequency shift.
4.–5. No change (information only).
