---
page: content/year-5/8.902/virial-theorem.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec02.pdf (read; local copy, all 6 PDF pages rendered as images: printed pp. 12–16 plus the OCW end page, compared in detail)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
verdict: pass-with-notes
---

# Review: The virial theorem: what keeps a galaxy in balance

The source is section 2 opening and 2.A "Virial Theorem" of the 8.902 Lecture 2 notes (Vogelsberger, Fall 2023). Printed p. 12 opens with the end of Lecture 1 (eq. 27, covered by `galaxy-observations`), then the galaxy definition and eqs. (28)–(33); p. 13 has (34)–(41) with the matrix sketch (35); p. 14 has (42)–(48) and the start of the assumptions; p. 15 the three assumptions, "Applications", (49)–(55); p. 16 has (56)–(59), then section 2.B (relaxation times, eq. 60 onward), which belongs to the Lecture 3 page and is not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, step "What it means": "(see the Ferreras page on galaxy clusters)" | Not in the notes (the page says so). | Plain-text pointer to an existing page (`content/year-5/Ferreras/galaxy-clusters.mdx`, "Galaxy clusters: Zwicky's missing mass"). | Make it a real link, e.g. `[galaxy clusters page](/courses/fundamentals-of-dark-matter/galaxy-clusters)`, and/or list `galaxy-clusters` in the page's forward links. |
| 2 | info | "The time average": "Average over a long time span $\tau$ (written with angle brackets)" | Eq. (47)–(48), p. 14: time span written as calligraphic 𝒯, and every average carries it as a subscript, ⟨…⟩_𝒯. | Uses $\tau$ and bare brackets, without saying that this differs from the notes. Physically identical; the change is sensible (avoids a clash with the kinetic energy $T$). | Optional bracket: "[The notes write the time span as a calligraphic T and attach it to each average as a subscript.]" The page already flags its other renamings ($G$, $K$), so this would be consistent. |
| 3 | info | Formula "Force term for a power law" (eq. 44) | Second line of (44) prints the lower limit as "k−2". | $k=2$, silently corrected. | Fine; optionally add it to the eq. (34) slip bracket. |
| 4 | info | Formula "Rate of change of the virial" (eq. 33) | Second term printed $\sum_i \vec p\cdot\dot{\vec r}_i$ (missing subscript on $\vec p$); middle line $\sum_i m_iv_i^2$. | $\sum_i\vec p_i\cdot\dot{\vec r}_i$; middle line omitted. | Fine as is. |
| 5 | info | Formula "Total force as a sum of pair forces" cited `eq. (34), p. 13` | Eq. (34) is only $\vec F_k = \sum \vec F_{jk}$; "$F_{ii}=0$ and $1\le j\le N$" is in the sentence after it. | Puts $\vec F_{kk}=0$ inside the formula. | Fine; citation still accurate in practice. |
| 6 | info | Opening paragraph, definition of a galaxy | p. 12: "A galaxy is a collisionless fluid of stars and dark matter orbiting together with collisional gas in a common self-gravitational potential." | Nearly the same sentence (two commas added), introduced as "The notes start from a definition". | A one-sentence definition attributed to the notes is acceptable; optionally rephrase or put it in quotation marks. |
| 7 | info | "A consequence: the total energy $E = T + U = U/2 = -T$ is negative" | Not in the notes. | Page's own addition, physically correct. | Fine; no change needed. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (28)–(29) p. 12; (30)–(32) p. 12; (33) p. 12; (34) p. 13; (40) p. 13; (41) p. 13; (42) p. 14; (43) p. 14; (44) p. 14; (45)–(46) p. 14; (47) p. 14; (48) p. 14; (50) p. 15; (51) p. 15; (52) p. 15; (53) p. 15; (54) p. 15; (56)–(57) p. 16; (58)–(59) p. 16. Eqs. (35)–(39) and (55) are cited in prose with the right numbers (pp. 13 and 15; the prose gives no page, which is fine).

Bracketed slip notes, verified on the rendered PDF:
- Eq. (34): confirmed. The notes print $\vec F_k = \sum_{i=1}^N \vec F_{jk}$ and "$F_{ii} = 0$". The page's bracket (sum index should be $j$, the vanishing self-force is $j = k$) is correct.
- Eq. (45): confirmed. The notes print $\sum_i \vec I_i\cdot\vec r_i$; the page's "misprint the force as a letter I" is correct and the corrected formula ($dG/dt = 2T - nV_\text{tot}$) is right.
- Ideal gas, "$n = 2$" bookkeeping: confirmed. The notes call $-\frac12\langle\sum\vec F_i\cdot\vec r\rangle$ "the potential energy", set $n = 2$, and write (58) as $0 = 2\langle K\rangle - 2\langle V_\text{tot}\rangle$. That is internally consistent (with $\sum\vec F\cdot\vec r = -nV_\text{tot}$ and $n=2$, $V_\text{tot} = -\frac12\sum\vec F\cdot\vec r$), not an error, and the page describes it fairly as "unusual bookkeeping" rather than a mistake. The page's direct route (wall term $= -P\oint\vec r\cdot d\vec A = -3PV$ in eq. 33) is correct and reaches the same (59).

Physics of the derivation re-derived independently: $\vec F_{jk} = -\nabla_k V = -V'(r_{jk})(\vec r_k-\vec r_j)/r_{jk}$ (force on $k$ from $j$); $\sum_k\vec F_k\cdot\vec r_k = \sum_{k>j}\vec F_{jk}\cdot(\vec r_k-\vec r_j) = -\sum_{k>j}V'r_{jk}$; for $V = \alpha r^n$, $V'r = nV$, so the sum is $-nV_\text{tot}$; with $n=-1$, $V_\text{tot}=U$: $\frac12\ddot I = 2T + U$. All signs on the page match.

## Arithmetic and answer checks
- $G$ in galaxy units: $6.674\times10^{-11}\times1.989\times10^{30}/3.0857\times10^{16}/10^6 = 4.30\times10^{-3}\ M_\odot^{-1}$ pc (km/s)². "0.0043" correct (matches the notes).
- Eq. (53): $0.0043\times10^{11}/10^4 = 4.3\times10^4$; $\sqrt{\ } = 207.4$ km/s. Page "≈ √(4×10⁴) ≈ 200 km/s" (as in the notes) and quiz 3 "≈ 207 km/s" both correct.
- "In good agreement with the rotation speeds of the previous page": `galaxy-observations` gives $V_c \sim 200\pm50$ km/s. Consistent.
- Worked example (cluster mass): $M = v^2R/G = 10^6\ (\text{km/s})^2 \times 10^6\ \text{pc}/0.0043 = 2.33\times10^{14}\ M_\odot$. "2.3×10¹⁴" correct. Units consistent ($R$ in pc, $G$ in pc). The claim that stars add up to only a few percent of a cluster's mass is in line with standard values (stellar fraction ~1–3%); Zwicky's 1933 Coma estimate is correctly attributed and agrees with the Ferreras page. As an order-of-magnitude virial estimate (the notes' $U = -GM^2/R$ drops a factor of order one) the result is fine; real rich clusters such as Coma come out near $10^{15}\ M_\odot$, which the page does not claim otherwise.
- Ideal gas: $2\cdot\frac32NkT = 3NkT = 3PV \Rightarrow NkT = PV$. Correct.
- Quiz 1 (answer 1, $5\times10^{51}$ J): $T = -U/2$; correct. Explanation ($E = U/2 < 0$) correct.
- Quiz 2 (answer 3, "all particles have the same mass"): correct; the derivation uses arbitrary $m_i$, equal masses enter only at eq. (50). Explanation correct. The three other choices are exactly the notes' three assumptions (p. 15).
- Quiz 3 (answer 1, about 200 km/s): correct (207 km/s).
- Flashcards: card 1 matches (48) (general form $2\langle T\rangle = n\langle V_\text{tot}\rangle$); card 2 matches (50)–(53); card 3 matches p. 15.
- `calcs/8.902/virial-theorem.yaml`: all 5 entries (G-galaxy-units, virial-speed-squared, virial-speed, cluster-mass, quiz-kinetic) match the text they quote on the page; origins (mit / page-own) and sources are right. `npm run calc:test -- -k virial`: 10 passed, 0 failed.

## Coverage and order
- The page follows the notes' order: section 2 goal and the definition of a galaxy (p. 12); the virial and $I$ (28)–(32); $dG/dt$ (33); pair forces and the matrix split (34)–(40); the pair potential (41)–(42); power law (43)–(44); (45)–(46); time average and the theorem (47)–(48); the three assumptions; application to a galaxy (49)–(53); ideal gas (54)–(59).
- Nothing in 2.A is left out. Eq. (49) ($2T+U=0$) is in prose; eqs. (35)–(39) are summarised in words, which is adequate. The notes' $M_\odot = 2\times10^{33}$ g (p. 15) is not quoted; not needed.
- The matrix sketch (35) is not reproduced; it is described in words ("below and above the diagonal").
- Additions (own material): the $E = U/2$ remark, the cluster worked example (flagged as not in the notes), the bracketed slip notes and the ideal-gas rederivation.
- Section 2.B (p. 16) is covered by the Lecture 3 page, as `leadsTo` says (8.902 Lecture 3, relaxation times); the `leadsTo` reason matches the opening of 2.B ("stars are collisionless … smooth density field").

## Licensing
- No "All rights reserved" notice and no "Courtesy of" credit on printed pp. 12–16 (checked every page); the only figure (the encounter sketch on p. 16) belongs to 2.B and is not used. OCW end page only; CC BY-NC-SA.
- No verbatim copying beyond the one-sentence definition of a galaxy (finding 6, attributed to the notes) and short standard phrases ("moment of inertia about the origin", "steady state").
- Worked example is original (own numbers and situation).
- No OpenStax or LibreTexts material. `references` is empty, which is right since only the notes are cited.

## Notes
- No em dashes on the page.
- No `Callout kind="cosmology"`; the page's forward link is only `leadsTo` to 8.902 Lecture 3 (correct). The Zwicky/dark matter remark is fairly attributed (as an application, not the notes' content).
- Not checked: `content:check` / symbols registry entries for this page (outside the scope of this review).

## Resolution (2026-11-17, by the page author)

1. Warning: the reference to the Ferreras page is now a link (/courses/fundamentals-of-dark-matter/galaxy-clusters).
2. Info: the time-average sentence now says the notes use a calligraphic T for the time span, renamed τ to avoid confusion with the kinetic energy.
5. Info: the opening definition of a galaxy is rephrased.
3, 4, 6: no change needed.

Status set to `reviewed`.
