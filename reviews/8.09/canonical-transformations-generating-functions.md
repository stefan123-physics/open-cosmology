---
page: content/year-4/8.09/canonical-transformations-generating-functions.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: local copy, page images of printed pp. 60-65 for every equation; text layer for Sections 4.2, 4.3, 4.4 and 4.6 to check forward claims)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_4/ (not fetched; the PDF above is its file, and the URL matches the syllabus entry in _course.json)
verdict: pass-with-notes
---

# Review: Canonical transformations and their generating functions

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Type-1 transformation" (eq. 4.13, p. 62) | Eq. (4.13) as printed reads $p_i = \partial F_1/\partial Q_i$, a typo: the derivative must be with respect to $q_i$ (it is $\partial F_1/\partial q_i$ in the table on p. 64, and the $\dot q_i$ terms of (4.12) give it). | $p_i = \partial F_1/\partial q_i$ (correct physics), without saying the notes differ. | Add a short bracketed note after the formula, as the page already does for (4.32): "(The notes print $\partial F_1/\partial Q_i$ in the first relation of eq. (4.13), a typo; the table on p. 64 has $q_i$.)" Writing rule 4. |
| 2 | warning | data/symbols.json, `\delta` meaning scoped to this page | n/a | The only meaning of δ for this page is "The phase of the oscillator: Q = ωt + δ" (unit rad). The page also uses δ as a variation: $\delta\int(\dots)dt = 0$ (eqs. 4.7-4.8) and "$\delta F$ vanishes at both ends". The popup and "Symbols on this page" will call those a phase. | Widen the page-scoped δ meaning to name both uses (e.g. "δ before an integral or F: a variation of the path; in Q = ωt + δ: the oscillator's phase"), or add a second meaning. Drop or move the "rad" unit accordingly. |
| 3 | info | Point-transformation paragraph, eq. (4.32), p. 64 | $p_i = \frac{\partial f_i}{\partial q_j}P_j$ | $p_i = \frac{\partial f_j}{\partial q_i}P_j$, with a bracketed note that the notes' index order is the transpose. | None. Verified: $p_i = \partial F_2/\partial q_i = \partial(f_jP_j)/\partial q_i = (\partial f_j/\partial q_i)P_j$, so the notes' indices are indeed transposed and the page's note is correct. |
| 4 | info | Eq. (4.41), p. 65 | The notes cite "Hamilton's equations Eq. (4.4)" for $\dot Q = \partial K/\partial P$; the new-variable equations are (4.6). | Cites the formula to (4.41), no mention. | None needed (the slip does not change any result on the page). |

Every other `<Formula>` was compared with the page image and matches the notes' physics and notation, with the correct equation number and printed page: (4.1), (4.2) p. 60; (4.3), (4.4), (4.6), (4.7)-(4.8), (4.9) p. 61; (4.12), (4.13) p. 62 (apart from row 1); (4.22), (4.25) p. 63; (4.28), (4.30), (4.33) p. 64; (4.34), (4.38), (4.40), (4.41), (4.42) and the unnumbered final transformation p. 65. Equation numbers quoted in prose ((4.5), (4.10), (4.11), (4.14)-(4.18), (4.23), (4.24), (4.26), (4.27), (4.29), (4.31), (4.35)-(4.37), (4.39)) also match.

## Arithmetic and answer checks
- Table of the four simplest cases (p. 64): recomputed each row. $F_1 = q_iQ_i$: $p_i = Q_i$, $P_i = -q_i$. $F_2 = q_iP_i$: identity. $F_3 = p_iQ_i$: $q_i = -Q_i$, $P_i = -p_i$. $F_4 = p_iP_i$: $q_i = -P_i$, $Q_i = p_i$. All four rows on the page agree with these and with the notes.
- Type-1 examples: $F_1 = -Q/q$ gives $p = Q/q^2$, $P = 1/q$, so $Q = pq^2$. For (4.18): $p = qe^Q$; $\int qe^Q\,dq = \tfrac12 q^2e^Q$; $-\partial F_1/\partial Q = -\tfrac12 q^2e^Q - g'$ must equal $-(q^2/2 + 1)e^Q$, so $g' = e^Q$, $g = e^Q$ (up to a constant). Correct.
- Oscillator: trial transformation gives $p^2/2m = \alpha^2P\cos^2Q$ and $\tfrac12 m\omega^2q^2 = \alpha^2P\sin^2Q$, so $H = \alpha^2P$. $\int m\omega q\cot Q\,dq = \tfrac12 m\omega q^2\cot Q$; $-\partial_Q$ gives $m\omega q^2/(2\sin^2Q)$. Trial $q^2 = 2\alpha^2P\sin^2Q/(m\omega^2)$ equals $2P\sin^2Q/(m\omega)$ iff $\alpha^2 = \omega$. $P = E/\omega$, $\dot Q = \omega$, and (4.42) follows with $\sqrt{2P/(m\omega)} = \sqrt{2E/(m\omega^2)}$, $\sqrt{2m\omega P} = \sqrt{2mE}$. All correct.
- Worked example (original; not in the notes): $Q = q^2$, $p = 2qP$, $K = 2QP^2/m$. Along $q = vt$: $Q = v^2t^2$, $P = m/(2t)$; $\partial K/\partial P = 4QP/m = 2v^2t = \dot Q$; $-\partial K/\partial Q = -2P^2/m = -m/(2t^2) = \dot P$. At $t = 1$ s with $m = 2$ kg, $v = 3$ m/s: $q = 3$ m, $p = 6$ kg m/s, $Q = 9$ m², $P = 1$ kg/s, $H = 36/4 = 9$ J, $K = 2\cdot 9\cdot 1/2 = 9$ J. Units of $P$ (kg/s) and $K$ (J) consistent. All correct. "Q is no longer cyclic" is right ($q$ was cyclic in $H = p^2/2m$; $K$ depends on $Q$).
- Plot caption: $m = 1$ kg, $\omega = 2$ s⁻¹, $P = 1$ J s: $q$ amplitude $\sqrt{2/2} = 1$ m, $p$ amplitude $\sqrt{4} = 2$ kg m/s, $E = \omega P = 2$ J (check: $p_{max}^2/2m = 2$ J). Correct. The dashed curve uses $P = 0.5$ J s as labelled.
- Quiz 1: answer 0 correct (from (4.13)); distractors are each wrong (sign flipped; wrong variables and $K = H + F_1$; $K = -H$).
- Quiz 2: answer 1 ($F_2 = q_iP_i$) correct; explanation's description of the other three agrees with the table.
- Quiz 3: answer 0 ($Q = 9$ m², $P = 1$ kg/s) correct; distractors wrong.
- Quiz 4: answer 1 ($K = \omega P$, $\dot Q = \omega$) correct.
- Flashcards: all five checked, correct (card 3 uses the correct, untransposed index order).
- Calcs file: covers every number and derivation on the page (worked example, caption, oscillator identities, both type-1 examples); entries match the page text. Not run by the reviewer.

## Coverage and order
- Follows the notes in order: introduction (all coordinates cyclic, (4.1)-(4.2), aim of the chapter); invariances of the Euler-Lagrange equations; phase-space transformations (4.3)-(4.6); Hamilton's principle and (4.9)-(4.10); λ = 1, extended and restricted canonical; invertibility; type 1 with both examples; types 2-4; table; (4.28)-(4.29); mixed types; point transformations (4.30)-(4.32); oscillator (4.33)-(4.42) and the recorded final transformation; closing remark that a derivative-only test follows. Nothing in the introduction or Section 4.1 is left out.
- Added by the page: the worked example (free particle with $F_2 = q^2P$), the phase-space plot, and the remark linking $P$ to the action of Section 4.6. All are flagged as the page's own or fairly attributed.

## Licensing
- No "rights reserved" or "Courtesy of" notice on pp. 60-65 (agreed with the course lead's check). No figure exists in Section 4.1; the plot is generated from the formula.
- No copied sentences found. The paraphrase is clearly reworded throughout ("Nothing could be simpler", "Most such transformations scramble the equations of motion", etc.); the shared wording is standard terminology ("generating function", "extended canonical", "restricted canonical", "point transformation"). The table's layout follows the notes' table, which is factual content in standard form.
- No OpenStax or LibreTexts material.

## Notes
- Forward claims verified in the notes' text: Section 4.2 is "Poisson Brackets and the Symplectic Condition" (fundamental brackets (4.44), a derivative-only test); Section 4.3 builds infinitesimal transformations from $F_2 = q_iP_i + \epsilon G$ (eq. 4.88), supporting "type 2 is the natural starting point for transformations close to the identity (Section 4.3 uses this)"; Section 4.4 seeks an $F_2$ with $K = 0$ so that all new $Q, P$ are constant (eqs. 4.101-4.104), matching the second `leadsTo`; Section 4.6 defines $J = \oint p\,dq$ and finds $J = 2\pi E/\omega$ for the oscillator (eq. 4.190), so "$P$ is the action divided by $2\pi$" is correct. "Section 1.2 covers Hamilton's equations" matches the syllabus title "Lagrangian and Hamiltonian Mechanics" (1.2) in _course.json (Chapter 1 text itself not re-read).
- Frontmatter: `source.url`, `readings[0].url` (identical to the syllabus URL for 4.1), `lecture: 4.1`, prerequisites (`partial-derivatives` in 18.02, `harmonic-oscillator` in 8.03) exist; leadsTo targets 4.2 and 4.4 are in the syllabus. No em dashes on the page (en dashes in page ranges only). Attribution ("the notes give…", "the notes record…") is honest.
- Plot sliders: at the extremes the ellipse leaves the fixed ±2.5 window (q amplitude up to $\sqrt{2\cdot1.5/(0.5\cdot0.5)} \approx 3.46$ m at $P = 1.5$, $m = 0.5$, $\omega = 0.5$; p amplitude up to $\sqrt{2\cdot2\cdot3\cdot1.5} \approx 4.24$ at $m = 2$, $\omega = 3$). Not an error at the default values; consider narrowing the slider ranges or widening the window. (info)
- Quiz 3 uses exactly the worked example's numbers, so it tests recall of the example rather than the method; consider different numbers. (info)
- Other symbol meanings scoped to this page were checked and fit (H, K, E in J; k = mω²; ω_i, α_i, δ_i; f for the worked example's $q^2$; g; F, F₁-F₄, F_i; dotted forms). Only δ (row 2) needs a fix.

## Resolution (2026-11-19, by the page author)

- Warning 1 (eq. (4.13) typo): added a bracketed note after the type-1 relations that the notes print ∂F₁/∂Q_i in the first relation and that the table on p. 64 has ∂q_i.
- Warning 2 (δ meaning): the page-scoped meaning of δ now covers both uses, the oscillator's phase and the variation δ∫(…)dt, δF (unit dropped, "in radians" kept in the text).
- Info (plot range): the window is now ±4.5 so the ellipse stays inside at every slider setting.
- Info (eq. (4.4) at (4.41), quiz 3 reusing the example): left as they are; the citation is already correct and the quiz checks the method of finding Q and P.
- Status set to reviewed.
