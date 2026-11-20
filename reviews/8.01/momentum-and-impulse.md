---
page: content/year-1/8.01/momentum-and-impulse.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-5-momentum-and-impulse/15-1-momentum-and-impulse/ (read: segment pages 15.1–15.5 and the Week 5 page, saved HTML)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter10/ (read: Chapter 10 PDF, Sections 10.1–10.4 and Example 10.1, printed pp. 10-1 to 10-6, footers checked page by page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/a36a18a7874749807effaccc8af8cd09_1GvCIlHihEA.pdf (read: 15.1 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/909d24d499a00e23f4d63a2bc0475c41_xtpW7fw8s34.pdf (read: 15.2 transcript, 2 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/941331d915f4260c294a2c92ef518ab0_bEpq3yjismU.pdf (read: 15.3 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/4ed5ecc7ce5b4c1d1ffeb73f2b9505ed_sxv80X2jQYQ.pdf (read: 15.4 transcript, 2 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/2547bcdb38901fffde7f7c8acf6ff31b_Cslq_ZYdYwE.pdf (read: 15.5 transcript, 5 pp.)
verdict: pass-with-notes
---

# Review: Momentum and impulse

The page reproduces the physics of 8.01SC segments 15.1–15.5 correctly. Every formula citation points to the right transcript page or notes equation, and every number recomputes. I found no errors. The warnings are about wording and attribution: the "changing mass" claim, the "barely stops it" phrase, the cosmology callout's claim about how 8.286 gets the radiation pressure, and two symbol meanings that are incomplete for this page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Momentum and Newton's second law", para 3; flashcard 1 | 15.1 p. 1: F = dp/dt is "the most general form", correct for "a system where the masses changing or the masses flowing, as in a fluid". | Repeats this as the page's own claim. Flashcard 1 goes further: "It also holds for systems and for changing mass, where $\vec F = m\vec a$ does not." | For a single body whose mass changes, $\vec F = d(m\vec v)/dt$ is generally wrong and depends on the frame (the rocket case needs the momentum of the ejected mass too). It holds for a system of fixed membership. Attribute the claim to the lecture ("the lecture calls this…") and add a short caveat, or drop "and for changing mass" from the flashcard. |
| 2 | warning | Worked example "A tennis ball and a racket", step "Final velocity" | (own example) | "the ball leaves at −1.2 m/s: this push barely stops it." | The ball is **not** stopped: it keeps moving the original way at 1.2 m/s. "Barely stops it" reads as "only just stops it". Use "does not quite stop it" or "almost stops it". |
| 3 | warning | Cosmology callout | 8.286 Lecture 15 (site page `mass-energy-and-radiation`): photons have $E = c\lvert\vec p\rvert$, so they push on walls. The pressure itself (`matter-radiation-equality`) is **derived from energy conservation**: $p = \rho c^2/3$ is what $1/a^4$ requires, and it "agrees with any other way of calculating the pressure of light". | "8.286 uses this [$p = E/c$] to work out the pressure of radiation." | Soften the claim: "8.286 uses this to explain why radiation has a pressure" (or "…which, Guth notes, is why a photon gas pushes on its container"). |
| 4 | info | Cosmology callout, "momentum … falls in proportion to $1/a(t)$" | In 8.286 this is a homework result, not part of a lecture (see `christoffel-symbols`: "an 8.286 homework problem … The standard result is that their momentum falls as $1/a(t)$"). | Stated as fact, not attributed to 8.286. | The physics is correct (photon $p = h/\lambda \propto 1/a$; peculiar momentum $\propto 1/a$). No change needed. Optionally add "(an 8.286 homework result)". |
| 5 | info | "Internal forces cancel in pairs", formula "External and internal forces on one particle" | 15.5 transcript: $\vec F^{T}_j = \vec F^{\text{ext}}_j + \sum_{k\ne j}\vec F^{\text{int}}_{kj}$, with superscripts T, ext, int (the "T" is dropped later, p. 3). Notes (10.4.1): $\vec F_i = \vec F_i^{\text{ext}} + \sum_{j\ne i}\vec F_{j,i}$, with the particle index $i$. | $\vec F_j = \vec F_{j,\text{ext}} + \sum_{k\ne j}\vec F_{kj}$: "ext" in the subscript, no "int" or "T" labels. | The index order matches both sources (source first, then the particle acted on), and the page defines $\vec F_{kj}$ clearly. Optionally add one bracketed sentence on the notation change. |
| 6 | info | Para 2 "…depends on the reference frame … (p. 1; notes, p. 10-1)" | The 15.1 transcript does not mention frames. The notes (p. 10-1) and the 15.4 transcript (p. 1) do. | The 15.1 p. 1 citation also covers the frame claim. | Leave the frame claim with the notes citation only. |
| 7 | info | Average-force formula, second part $\vec F_\text{ave}\Delta t = \Delta\vec p$ | 15.1 p. 3 gives $F_\text{ave}\Delta t = \int_0^{\Delta t}F\,dt$. The equality with $\Delta\vec p$ is notes Eq. (10.2.8), on p. **10-3** (Eq. (10.2.6) is on p. 10-2). | Prose cites "notes, Eq. (10.2.6), p. 10-2". | Optionally add "(10.2.8), p. 10-3" in the prose. |
| 8 | info | "Worked example: the average force of a bounce" | 15.3 transcript slips: "we have a negative mass" (p. 2) and "the speed … is 2ghi" without the root (p. 3). Later on p. 3 it gives the correct final formula. | Uses the correct expressions. | No note needed: the final formula on the transcript is correct. |
| 9 | info | Second-law paragraph, bracketed note | 15.1 p. 1: "the mass times the time derivative of the acceleration, dv/dt". | "[The transcript says 'the time derivative of the acceleration, dv/dt' at one point; it means the derivative of the velocity.]" | The quote and the correction are accurate. Keep. |
| 10 | info | Tennis example, "half the peak, as for any symmetric triangle" | (own example) | Ties the result to symmetry. | Average = half the peak holds for **any** triangle that starts and ends at zero (area = ½ × base × height). "As for any triangle-shaped pulse" is more accurate. |

Citations verified:
- **Momentum** (reading2 p. 1): correct. Notes (10.2.1) is on p. 10-1.
- **Second law in terms of momentum** (reading2 p. 1): correct. Notes (10.2.2)–(10.2.3) are on p. 10-2.
- **Impulse** (reading1, (10.2.4)–(10.2.5), p. 10-2): correct. The page uses the transcript's limits $t_1, t_2$; the notes use $t$ and $t+\Delta t$.
- **Average force** (reading2 p. 3): correct.
- **Momentum principle for the bounce** (reading4 pp. 2–3): correct. With up positive, $m v_a - (-m v_b) = m(v_a + v_b)$ matches the transcript.
- **Average normal force** (reading4 p. 3): correct.
- **Momentum of a system** (reading5 pp. 1–2; notes (10.4.8), p. 10-6): correct.
- **Total force and the system's momentum** (reading5 p. 2): correct.
- **External and internal forces** (reading6 p. 2): correct.
- **Cancellation in pairs** (prose: pp. 3–4; notes (10.4.3)–(10.4.5), p. 10-5): correct.
- **Second law for a system** (reading1, (10.4.9), p. 10-6): correct. The added $\sum_j\vec F_{j,\text{ext}}$ is the notes' (10.4.3)/(10.4.7).
- **Impulse form for a system** (prose: (10.4.10), p. 10-6): correct.
- **Section citations:** 15.2 pp. 1–2, the moons example (15.5 p. 2) and "pp. 4–5" for the conclusion are all correct.

## Arithmetic and answer checks
- `calcs/8.01/momentum-and-impulse.yaml`: 14 passed (`pytest tests/calc -q -k momentum-and-impulse`).
- **Graph:** $F = 200t$ (N, t in ms) peaks at 400 N at 2 ms and returns to 0 at 4 ms. Area ½ × 400 × 0.004 = 0.80 N·s; average 0.80/0.004 = 200 N. Correct.
- **Tennis example:**
  - $\Delta v = 0.80/0.058 = 13.79$ m/s.
  - $-15 + 13.79 = -1.21$ m/s.
  - $0.058 \times 30 = 1.74$ N·s.
  - All correct. The signs are consistent (racket push +, arrival −15 m/s), but see warning 2 on wording. The problem would be clearer as "arrives at 15 m/s, moving towards the racket".
- **Comparison with notes Example 10.1:** $b = 20$ N/s, $\Delta t = 1.0$ s, peak 10 N, $I = b\Delta t^2/4 = 5.0$ N·s. So "a slower push of the same triangular shape" is accurate. The page's numbers (58 g, 400 N, 4 ms, 15 m/s) are original.
- **Bouncing ball:**
  - $v_b = \sqrt{2(9.81)(1.8)} = 5.943$ m/s and $v_a = \sqrt{2(9.81)(1.2)} = 4.852$ m/s.
  - $0.060 \times 10.795 / 0.005 = 129.5$ N, plus $mg = 0.589$ N, gives 130.1 N ≈ 130 N.
  - Ratio to the weight: 130.1/0.589 = 221 ≈ 220. Correct.
- **Quiz 1:** N·s (index 2) is correct; kg·m/s² is a newton, and N/s and J/s are wrong.
- **Quiz 2:** "only the area under the force–time graph" (index 1) is correct.
- **Quiz 3:** $0.10 \times (4.0 + 5.0) = 0.90$ N·s (index 3) is correct.
- **Quiz 4:** "Only the external forces" (index 1) is correct.
- **Flashcards:** 2 and 3 are correct. For flashcard 1, see warning 1.

## Coverage and order
- The Week 5 page lists Lesson 15 as exactly 15.1–15.5. The page covers them all, in order:
  - 15.1: momentum, F = dp/dt, impulse, average force.
  - 15.2: impulse as a vector, dummy variable, components.
  - 15.3: bouncing ball.
  - 15.4: momentum of a system.
  - 15.5: internal and external forces.
- **Omitted (minor):** the 15.2 set-up with the î direction; the 15.3 high-speed video description, of which only the energy loss is kept; the notes' term "average impulse" (10.2.7); and the notes' Section 10.3 cart-and-spring illustration. None is needed.
- **Added:** the graph, the tennis example and the numerical bouncing-ball example (all original); the impulse form for a system (from the notes); and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the five transcripts, the Chapter 10 pages read, or the segment pages. The notes' Newton epigraph (Motte/Cajori translation) is not used on the page.
- The prose is a rewrite. The closest echoes are "short, sharp blow" (transcript: "short, sharp, shock") and "However complicated the interactions inside…" (transcript: "no matter how complicated the interaction is inside the system"). Both are short paraphrases and acceptable.
- No OpenStax or LibreTexts material.

## Notes
- **Symbols** (`data/symbols.json`, meanings scoped to this page):
  - warning: `a` has only "Acceleration.", but the callout also uses $a$ and $a(t)$ for the **scale factor**. Add that to the meaning, e.g. "Acceleration; in the cosmology note, the scale factor a(t)."
  - warning: `N` has only "The normal force…", but the page also uses $N$ as the **number of particles** ($j = 1, \ldots, N$; $\sum_{j=1}^{N}$). Add the second use.
  - info: `j` says "also the unit vector ĵ", but the page never uses ĵ. Drop that clause.
  - All other page-scoped entries match the page: $I$, $I_{x,y,z}$, $p_{x,y,z}$, $\vec F_\text{ave}$, $N_\text{ave}$, $v_a$, $v_b$, $t_a$, $t_b$, $h_i$, $h_f$, $p_\text{sys}$, $p_j$, $m_j$, $v_j$, $F_j$, $F_{j,\text{ext}}$, $F_{kj}$, $F_{jk}$, $F_\text{ext}$, $k$, $t'$, $t_1$, $t_2$, $E$, $c$, $d$. Units are N·s, N, kg·m/s, m/s and m as appropriate.
- `npm run content:check` reports no error for this page; its only warning is the missing review file, which this review supplies. The 2 errors in the run belong to `content/year-1/18.01/related-rates.mdx`.
- The `leadsTo` entries are correct: 8.01 Lesson 16 is "Conservation of Momentum", and 8.286 Lecture 15 has $E = c\lvert\vec p\rvert$ on the board (per `mass-energy-and-radiation`).
- I did not check whether a later 8.01SC lesson treats variable mass (rockets). It is uncertain which lesson the caveat in warning 1 should point to.

## Resolution (2026-11-15, by the page author)

- **Warning 1:** flashcard 1 now says F = dp/dt also holds for a system of many particles (no claim about changing mass); the body attributes the changing-mass remark to the lecture and adds that it must be applied to a system that keeps the same particles, as the course does later for rockets.
- **Warning 2:** "this push does not quite stop it: it still moves the original way."
- **Warning 3:** the callout now says 8.286 uses photon momentum to explain why radiation has pressure.
- **Warnings 4–5:** the page-scoped meanings of a (also the scale factor in the callout) and N (also the number of particles) are extended; the j meaning no longer mentions ĵ.
- Info: "as for any triangular pulse". Other info notes left as they are.
