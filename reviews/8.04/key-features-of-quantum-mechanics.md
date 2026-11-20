---
page: content/year-2/8.04/key-features-of-quantum-mechanics.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes1/ (read: resource page fetched for its licence; the PDF "Chapter 1: Key Features of Quantum Mechanics", B. Zwiebach, February 9, 2016, 14 printed pages, read in full as text; PDF page number = printed footer, checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes2/ (read only to confirm the Lecture 2 forward link)
verdict: needs-changes
---

# Review: Key features of quantum mechanics

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Linearity, bracket after eq. (1.8): "the page's own answer to the notes' exercise" | Notes p. 2–3 define a linear equation as $Lu = 0$ with $L$ linear, so that sums of solutions are solutions (eqs. 1.3–1.5); p. 3 asks for the most general $V(x)$ giving a linear equation of motion (no answer given). | "the equation is linear only if $V'$ is linear in $x$, that is for $V = c_0 + c_1x + c_2x^2$, a constant force plus a spring." | With $c_1 \neq 0$, $V' = c_1 + 2c_2x$ is affine, not linear, and $m\ddot x = -c_1 - 2c_2x$ is inhomogeneous: if $x_1$, $x_2$ are solutions, $m(\ddot x_1 + \ddot x_2) = -2c_1 - 2c_2(x_1 + x_2)$, so $x_1 + x_2$ is **not** a solution. This contradicts the page's own test in the previous sentence. In the notes' sense the answer is $V = c_0 + c_2x^2$ (a spring, with any constant). Either give that, or say that a constant force term gives a "linear inhomogeneous" equation in which superposition fails (only differences of solutions solve the homogeneous equation). Update the `c_0`, `c_1` meanings in `data/symbols.json` to match. |
| 2 | warning | Quantum superpositions, "Electron spin" paragraph | Notes p. 11: classically the electron spins clockwise or counterclockwise about an axis, "in both cases it spins at the same fixed rate"; up or down are the only possibilities whatever axis is used. | "An electron's spin along any axis is found either up or down, at the same rate." | "At the same rate" reads as "with equal probability", which is not what the notes mean and is false in general (it is true only for the particular state that follows). Write e.g. "Measured along any axis, an electron's spin is found either up or down, with the same size of spin in both cases." |
| 3 | warning | WorkedExample, step title "(a) Three polarizers" | (Page's own example.) | The problem has photons already polarized along $x$ meeting **two** polarizers (45° and 90°). | Rename the step "(a) Two polarizers" or "(a) A polarizer in between", or add an explicit first $x$ polarizer to the problem. |
| 4 | warning | Opening paragraph, notation note | Notes use kets: $\lvert\text{photon}; x\rangle$, $\lvert\text{photon}; y\rangle$, $\lvert\text{photon}; \alpha\rangle$ (eqs. 3.4–3.6), $\lvert A\rangle$, $\lvert B\rangle$ (4.1), $\lvert\uparrow; z\rangle$, $\lvert\downarrow; z\rangle$ (p. 11), and $\lvert u_i\rangle \otimes \lvert v_j\rangle$ (5.3). | The note explains $\Psi_A$ and $\chi_{\text{up}}$, $\chi_{\text{down}}$ only; the photon states $\Psi_x$, $\Psi_y$, $\Psi_\alpha$ and the product notation $u_i(1)\,v_j(2)$ (for $\lvert u_i\rangle\otimes\lvert v_j\rangle$) are introduced silently. | Extend the bracket: "$\Psi_x$, $\Psi_y$ for the photon states the notes call $\lvert\text{photon}; x\rangle$, $\lvert\text{photon}; y\rangle$, and $u(1)\,v(2)$ for their tensor product $u\otimes v$." (The tensor product is mentioned in the Entanglement section, which partly covers this.) |
| 5 | warning | Loss of determinism eq. (3.6) and Quantum superpositions, last paragraph before "Electron spin" | Notes use $\alpha$ both for the angle (3.2, 3.6) and for a coefficient (4.1, 4.6): same clash. | $\Psi_\alpha = \cos\alpha\,\Psi_x + \sin\alpha\,\Psi_y$, then a few paragraphs later "a photon's polarization, $\alpha\Psi_x + \beta\Psi_y$". | Same as the notes, so not a misquote, but on one page it invites confusion (the symbol entry has to say "also the polarization angle"). Consider $\theta$ or $\varphi$ for the angle, with a short bracket saying the notes use $\alpha$. |
| 6 | info | Quantum superpositions, "Superposing a state with itself…" | Notes p. 10: $\lambda\lvert\Psi\rangle$ and $\lvert\Psi\rangle$ are equivalent "for any complex number $\lambda$ different from zero". | "only multiplies it by a number, and that changes nothing physical" | Add "nonzero" (multiplying by 0 gives no state). |
| 7 | info | Loss of determinism, last sentence | Notes p. 8: at the 1927 Solvay conference Einstein "stated the nowadays famous quote: 'God does not play dice'". | Repeats this. | Faithful to the notes. Historically the phrase is best documented in Einstein's letter to Max Born of December 1926; that he said it at Solvay 1927 rests on later recollections (Heisenberg). Uncertain rather than wrong; optionally soften to "Einstein objected (in his often-quoted words) that God does not play dice". |
| 8 | info | Linearity, Schrödinger paragraph | Notes p. 3: Schrödinger "wrote the equation in 1925"; Born "months later". | Same. | Faithful to the notes. The equation was published in early 1926 (worked out around the turn of 1925/26), Born's interpretation in mid-1926. Optional bracket; not required. |
| 9 | info | Loss of determinism, polarizer paragraph | Notes p. 7 give two "escape routes": an inhomogeneous polarizer (ruled out by experiment) and hidden variables. | "The polarizer is not to blame, and hidden variables … have been ruled out in most forms by experiments based on the work of John Bell". | Fine; the first escape route is compressed to one clause. Could add "experiments show" to make clear the polarizer point is experimental. |
| 10 | info | Quantum superpositions, Mach–Zehnder | Notes p. 9 explain why a photon cannot interfere with another photon (destructive interference would make two photons into none, violating energy conservation). | Only "each photon interferes with itself". | Optional: add the one-line energy argument; the page correctly defers the details to Lecture 2. |

All formula citations were checked against the notes and are correct:
- eq. (1.4) linear operator, p. 2: correct (page and number).
- eq. (1.8) Newton's law in a potential, p. 3: correct.
- eq. (1.11) Schrödinger equation, p. 3; "Ĥ does not depend on Ψ", p. 4: correct.
- eqs. (2.4)–(2.5) norm, p. 4: correct.
- eq. (2.6) Euler's identity, p. 5: correct (the unit vector at angle θ starts at the foot of p. 4 and continues on p. 5; "notes p. 5" is acceptable).
- eq. (3.1) $E = h\nu$, p. 6: correct.
- eq. (3.6) photon polarization state, p. 8: correct (p. 7 ends with eq. 3.5).
- eq. (4.1) superposition and eq. (4.3) probabilities, p. 10: correct.
- eq. (5.7) entangled pair, p. 14: correct (the notes' symmetric state $\lvert\uparrow\rangle\otimes\lvert\downarrow\rangle + \lvert\downarrow\rangle\otimes\lvert\uparrow\rangle$, rendered faithfully in the page's notation).
- In-text page references (p. 1 framework/history, p. 2 Maxwell (1.1)–(1.2) and du/dt + u/τ = 0 (1.6), p. 3 Born, p. 5 Einstein 1905/Compton 1923/complex vector spaces, pp. 6–7 polarizer, p. 8 Solvay, pp. 8–9 Mach–Zehnder, pp. 10–11 equivalence and elliptic polarization, pp. 11–12 spin and the critic, p. 13 tensor product and eq. (5.6), p. 14 Alice/Bob/Bell 1964): all correct. Minor: entanglement is introduced on p. 12 (section 5 starts there), the page cites p. 13 for the product states, which is where they are.

## Arithmetic and answer checks
- Quiz 1: $\cos^2 30° = 0.75$, answer index 0 = "0.75": correct. Distractor 0.87 = $\cos 30°$ is a good trap.
- Quiz 2: answer index 2 = "Quantum mechanics": correct; explanation agrees with notes pp. 2–3. (Its phrase "Newton's equation is linear only for special potentials" is fine, but see finding 1 for which potentials.)
- Quiz 3: $|1+i|^2 = 2$, $|2|^2 = 4$, $P(a) = 2/6 = 1/3$; answer index 3 = "1/3": correct.
- Quiz 4: in the notes' state (5.7), Alice up selects the first term, Bob's electron is down; answer index 1 = "Spin down, with certainty": correct; "No message can be sent this way" agrees with notes p. 14.
- Flashcards: all three correct (Schrödinger equation linear; Born rule for two outcomes with state after measurement, eqs. 4.3–4.4; entangled state definition and example 5.7).
- Worked example (a): 45° polarizer: $\cos^2 45° = 0.5$; then 90° polarizer at 45° to the new polarization: 0.5; total 0.25. Without the middle polarizer: $\cos^2 90° = 0$. Correct (applies the notes' rule to the relative angle, which is right). Step title is wrong (finding 3).
- Worked example (b): $|3 + 4i| = 5$; $\arctan(4/3) = 0.9273$ rad $= 53.13°$; $z = 5e^{0.927i}$. Correct.
- Worked example (c): $P(a) = 1/3$, $P(b) = 2/3$. Correct; note it is the same numbers as Quiz 3, so the quiz tests recall rather than a new case (info: consider changing one, e.g. $(1 - 2i)\Psi_A + 2i\Psi_B$ gives $5/9$, $4/9$).
- Entanglement matching argument: the four conditions $\alpha_1\beta_1 = 1$, $\alpha_1\beta_2 = 0$, $\alpha_2\beta_1 = 0$, $\alpha_2\beta_2 = 1$ match notes eq. (5.6) and are indeed inconsistent.
- Elliptic polarization: two real parameters from the complex ratio $\beta/\alpha$, matching notes eq. (4.7). Correct.
- Calcs file `calcs/8.04/key-features-of-quantum-mechanics.yaml`: all 11 entries pass (`pytest -k key-features`: 11 passed). Every number on the page is covered; the `shown` strings match the page text. The `history-years` fact entry matches the notes (1905 p. 5, 1923 p. 5, 1925 p. 3, 1927 p. 8, 1964 p. 14); "notes pp. 3, 5, 8, 14" is correct.

## Coverage and order
- The page follows the notes' order exactly: introduction, 1 Linearity (Maxwell, $Lu = 0$, example, GR and Newton nonlinear, Schrödinger equation), 2 Complex numbers, 3 Loss of determinism (photons, polarizer, hidden variables, photon states, Solvay), 4 Quantum superpositions (Mach–Zehnder, $\alpha A + \beta B$, measurement, equivalence of multiples, elliptic polarization, spin and the critic), 5 Entanglement (product states, factorization test, electron pair, Alice and Bob, Bell).
- Left out (minor, acceptable): Exercise 1 (verify 1.7 is linear); eqs. (1.9)–(1.10), (1.12)–(1.13) (the explicit check that $L = i\hbar\partial_t - \hat H$ is linear); the remarks that $z$ is real iff $z = z^*$, $x^2 = -4$, every polynomial has complex roots; Maxwell 1865; blackbody radiation and Planck; "ten photons on the retina"; the quantum vs Newtonian meaning of "particle"; $\lambda\nu = c$; eqs. (3.3), (3.7) as displays; the beam-splitter description and figures (deferred to Lecture 2, said so); why two photons cannot interfere (finding 10); the Exercise to show (5.7) cannot be factorized; the Bohr reply at Solvay. None is essential for a first lesson, but a "full university level" page could add the $L = i\hbar\,\partial_t - \hat H$ check in one sentence, since it is the actual proof of the section's main claim.
- Added by the page: the answer to the Newton exercise (finding 1), the radio/phone sentence is a rewrite of the notes' own example, the worked example (own), the cosmology callout.

## Licensing
- OCW resource page: CC BY-NC-SA 4.0 link, no "All rights reserved" and no "Courtesy of" notice; the PDF has none either (the only "courtesy" in the text is "All of that courtesy of linearity", p. 2, which is prose, not a credit). The final credit "Sarah Geller transcribed Zwiebach's handwritten notes" is an acknowledgement, not a licence notice.
- No figures reused: the notes' Figures 1–6 (polarizer, beam splitter, Mach–Zehnder, ellipse, spin) are not on the page; the page has no diagram. Good. The later MIT Press book *Mastering Quantum Mechanics* is not used; the OCW notes are the CC BY-NC-SA source.
- No OpenStax or LibreTexts material.
- Quotation: only "God does not play dice", short and attributed. Fine.
- Closeness of wording (prose source, so checked sentence by sentence). No paragraph is copied; the following sentences are close paraphrases of a single notes sentence (info, acceptable under the rules, but worth loosening):
  - "each solution describes a possible reality: because an expanding universe solves Einstein's equations, an expanding universe is possible according to general relativity" vs notes p. 1 "A solution of the equations describes a possible reality … Because an expanding universe is a solution of Albert Einstein's gravitational equations … an expanding universe is possible, according to this theory."
  - "for a single photon there is no room for one" vs notes p. 8 "for a single photon, there is no room for such a factor."
  - "an idea Schrödinger disliked for the rest of his life" / "In this sense quantum mechanics is simpler than classical mechanics" vs notes p. 3 "remained unhappy about it for the rest of his life" / "In some sense quantum mechanics is simpler than classical mechanics."
  - "Why does one pass and the next not? … nobody can predict it: only the probability … can be known" follows notes p. 7 closely in structure, but the wording is the page's own.
- No em dashes on the page (0 found).

## Notes
- Forward link 8.04 Lecture 2: correct. Notes Chapter 2 is "Experiments with photons", covering the Mach–Zehnder interferometer and Elitzur–Vaidman bombs; matches `leadsTo` and the 8.04 `_course.json` syllabus.
- Forward link 8.286 Lecture 1 / callout: `inflation-overview` exists and is 8.286 Lecture 1; that page states Guth's claim that inflation attributes the density ripples to quantum fluctuations, so the callout's link and "in its first lecture" are fair. The callout's own physics (quantum fluctuations of the inflaton stretched to cosmic size, becoming density variations that grew into galaxies) is the standard picture and consistent with the 8.286 page. It is not attributed to Zwiebach, correctly, since Chapter 1 does not mention cosmology. (Minor: the callout speaks of "the field that drove the expansion"; the 8.286 page speaks more generally of quantum fluctuations and the uncertainty principle. Consistent, no change needed.)
- Physics checks beyond the notes: the claim that in the superposition $\chi_{\text{up}} + \chi_{\text{down}}$ every electron is found up along $x$ follows the notes and holds in the standard phase convention; fine as stated. "The Hamiltonian … is a linear operator that does not depend on $\Psi$" is right and matches p. 4.
- Prerequisite `atoms-photons-nuclei` (8.033) exists. Symbols: the page-scoped meanings in `data/symbols.json` cover the page; the `c_0`/`c_1`/`c_2` meanings should change with finding 1, and the `\alpha` meaning carries the clash in finding 5.
- Not checked: the lecture video (no transcript used, per the owner's rule that notes suffice).

## Resolution (2026-11-17, by the page author)

- Error 1: the answer to the notes' exercise now says that V = c₀ + c₁x + c₂x² gives a linear but (for c₁ ≠ 0) inhomogeneous equation, where superposition fails, so only V = c₀ + c₂x² works.
- Warning (spin): now "spinning at the same fixed rate either way".
- Warning (worked example): step (a) retitled "Two polarizers".
- Warning (notation): the note on notation now covers Ψ_x, Ψ_y, Ψ_θ and the product u(1) v(2).
- Warning (α clash): the polarization angle is now θ throughout; α and β are only coefficients.
- Info: "nonzero number"; the Solvay quote attributed to the notes with Einstein's 1926 letter mentioned; Schrödinger's equation dated end of 1925 (published 1926); the inhomogeneous-polarizer escape route and the energy argument against two-photon interference added; the opening "possible reality" sentence reworded.
