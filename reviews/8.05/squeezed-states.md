---
page: content/year-3/8.05/squeezed-states.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-15-quantum-dynamics-cont/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/824cd0a4286a97edf2ae67cad87341c6_NXgobnaBN7U.pdf (read: Lecture 15 transcript, Zwiebach, 24 pages, extracted page by page with pdftotext; printed footer pages 1–24 match the PDF page numbers)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-6/ (read: Zwiebach, "Quantum Dynamics", November 4, 2013, 51-page PDF; pp. 39–47 extracted with pdftotext -layout and -raw, eqs. (4.94)–(4.107) and (5.1)–(5.36) checked one by one; section 5.3 (pp. 48–51) read for the leadsTo check)
  - Lecture 16 transcript (video TUenwZezzdk) read only to check the `leadsTo` claim
verdict: needs-changes
---

# Review: Number–phase uncertainty and squeezed states

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Number–phase uncertainty", `at="eq. (4.100)"` | Notes (4.100) is the rough wave argument, $\Delta E\,\Delta t \ge \hbar/2 \Rightarrow \Delta N\,\Delta\phi \ge \tfrac12$. The blob argument the formula follows is (4.106) $\Delta\phi \approx 1/|\alpha|$ and (4.107) $\Delta N\,\Delta\phi \approx 1$. | Cites (4.100) for $\Delta N\,\Delta\phi \approx 1$, placed after the blob argument. | `at="eqs. (4.106)–(4.107)"`. Optionally cite (4.100) inline in the "rough argument from waves" paragraph. |
| 2 | warning | `leadsTo` 8.05 Lecture 16: "Photon states, built from coherent and squeezed states, and two-state systems." | Lecture 15 transcript p. 24 promises to illustrate "both coherent and squeezed states" with photon states, but the Lecture 16 transcript never mentions squeezed states (grep: no match); its photon states use coherent states only (opening, and p. ~12 "put a coherent state of photons"). Notes section 5.3 likewise uses only coherent states. Two-state systems (ammonia, NMR) do start in Lecture 16. | Says photon states are built from coherent and squeezed states. | "Photon states as coherent states of the electromagnetic field, and the start of two-state systems." |
| 3 | warning | Opening sentence: "notes chapter 6, end of section 4 and section 5.1" | Eqs. (5.31)–(5.36) (infinite squeezing, position eigenstates) and $D(\alpha)S(\gamma)$ are in notes section 5.2, "More general squeezed states" (pp. 46–47). | Names only section 5.1, though the page cites (5.31)–(5.36). | "…end of section 4 and sections 5.1–5.2". |
| 4 | info | "with $\Delta x = e^{-\gamma}\sqrt{\hbar/2m\omega}$ and $\Delta p = e^{\gamma}\sqrt{\hbar m\omega/2}$ (notes eq. (5.28))" | Notes (5.28) gives only $\Delta x$; $\Delta p$ follows from (5.5). The transcript gives both (p. 20). | Cites (5.28) for both. | "(notes eqs. (5.5), (5.28); transcript p. 20)". |
| 5 | info | "a blob of size about $\frac12$ to 1 in each direction" | Transcript pp. 6–8: Zwiebach first says $\frac12$, then corrects himself to 1. Notes (4.102)–(4.105) and Figure 4: representative range of width one, "a blob of unit diameter". | "about ½ to 1". | Acceptable, as the lecture itself hedges. Could say "about 1 (Zwiebach first says ½ on the board)". |
| 6 | info | "Squeezed states … are now made routinely in experiments (transcript p. 9)" | Transcript p. 9: "constructed over the last 10 years more and more often, and people are now able to construct … squeezed states experimentally". | "routinely". | Slight overstatement of the 2013 wording; "are now made experimentally" would match. |
| 7 | info | First paragraph, blob: "Wigner distributions make it precise, though not much clearer (transcript pp. 3, 7–9)" | Wigner distributions come on p. 9, after the $\Delta N\,\Delta\phi$ argument. | Mentioned before the argument. | Fine as a rewrite; the order change is small. |
| 8 | info | Opening: "Gaussians that are narrower in position (or momentum) than the oscillator's ground state allows for an energy eigenstate" | Transcript p. 11: the uncertainty is "squeezed from the lowest uncertainty that you get in an energy eigenstate". Notes p. 42: squeezed states are the most general states saturating $\Delta x\,\Delta p = \hbar/2$. | Clause reads awkwardly ("than the ground state allows for an energy eigenstate"). | "narrower in position (or momentum) than any energy eigenstate of the oscillator, while still having $\Delta x\,\Delta p = \hbar/2$". |
| 9 | info | Callout on LIGO | Transcript p. 22: Mavalvala works on gravitational-wave detection; a squeezed vacuum is injected "to make the harmonic oscillator that represents the mirror stabilize its uncertainty in position". | "reduces the quantum uncertainty in the measured position of its mirrors", plus "(Squeezed light has since become a standard part of the LIGO detectors; this is a development after the 2013 lecture.)" | Fair to Zwiebach. The added note is correct as far as I know (not from the MIT sources, so unverified here): Advanced LIGO has injected squeezed vacuum in observation since its third observing run (2019), frequency-dependent since O4 (2023); GEO600 had used it from 2010, and a test on a LIGO detector was published in 2013, before the lecture. Suggest naming the year ("since 2019") and adding a `references` entry for it. |

All other citations were checked against the extracted text and are correct:
- Transcript: coherent-state recap, $D(\alpha)$, $a\psi_\alpha = \alpha\psi_\alpha$, rotation $\alpha e^{-i\omega t}$ (pp. 1–2; "pp. 1–3" fine); not an eigenstate of $x$, $p$, $E$, the blob (p. 3); rough wave argument and "pretty bad" (p. 4); $\langle N\rangle$, $\langle N^2\rangle$, $\Delta N = |\alpha|$ (pp. 4–5); ground-state $\Delta x = d_0/\sqrt2$, $\Delta p = \hbar/(\sqrt2 d_0)$ and blob size (pp. 6–8); $\Delta\phi \approx 1/|\alpha|$, $\Delta N\,\Delta\phi \approx 1$ (p. 7); Wigner (p. 9); squeezed-state motivation and $H_1$ (p. 9); sudden change (pp. 9–10); rewritten uncertainties and $e^\gamma$ (pp. 10–11); squeezed from the viewpoint of $H_2$ (p. 11); "just after the change" (p. 12); same $\hat x$, $\hat p$, "very strong physical assumption" (p. 13); Bogoliubov (pp. 13–14); black holes and $\gamma \to -\gamma$ (p. 14); $a_1$ kills the old vacuum, even states (pp. 14–15); ansatz (pp. 15–16); commutator trick and $f = \tanh\gamma$ (pp. 16–17); normalisation by overlap, $1/\sqrt{\cosh\gamma}$ (pp. 18–19); squeezed vacuum on its own (p. 20); unitary operator, $S(\gamma)$, "we don't do it in the course" (p. 21); $D(\alpha)S(\gamma)$ and the ellipse picture (pp. 21–22); Mavalvala, photon states postponed, $\gamma \to \infty$ (p. 22); non-normalisable, coefficients beyond $\pm1$, $x = 0$ and $p = 0$ states (pp. 22–23); position eigenstate formula (p. 24).
- Notes: (4.96)–(4.99) number and its uncertainty; (4.101)–(4.105) blob ranges; $\mathrm{Re}\,\alpha = \langle x\rangle/(\sqrt2 d)$, $\mathrm{Im}\,\alpha = \langle p\rangle d/(\sqrt2\hbar)$ ((4.81)–(4.82)), matching the page's recap; (5.1)–(5.4) setup; (5.5)–(5.6) squeezed uncertainties and $e^\gamma$; (5.7) $\hat x$, $\hat p$ in both oscillators; (5.9) Bogoliubov (second line is the adjoint, same as the page); (5.10) inverse by $\gamma \to -\gamma$; (5.12) condition; (5.14) ansatz; (5.19) $f = \tanh\gamma$; (5.21)–(5.24) normalisation; (5.26) squeezed vacuum; (5.29)–(5.30) squeezing operator; (5.31)–(5.32) infinite-squeezing limits; (5.34) $\hat x\psi_x = x\psi_x$; (5.36) position eigenstate (normalisation $\psi_0(x)$ from (5.35), matches the page).

## Arithmetic and answer checks
Derivations recomputed by hand:
- $(\Delta N)^2 = |\alpha|^2(1 + |\alpha|^2) - |\alpha|^4 = |\alpha|^2$: correct.
- Bogoliubov: adding $a_1 + a_1^\dagger = e^\gamma(a_2 + a_2^\dagger)$ and $a_1 - a_1^\dagger = e^{-\gamma}(a_2 - a_2^\dagger)$ gives $a_1 = a_2\cosh\gamma + a_2^\dagger\sinh\gamma$: correct; it preserves $[a_1, a_1^\dagger] = 1$.
- $[a_2, e^{-\frac12 f a_2^\dagger a_2^\dagger}] = -f a_2^\dagger e^{\dots}$ (as $[a_2, a_2^\dagger a_2^\dagger] = 2a_2^\dagger$ commutes with the exponent), so $-f\cosh\gamma + \sinh\gamma = 0$, $f = \tanh\gamma$: correct.
- Normalisation: $\int \psi_0^{(2)}\psi_0^{(1)}\,dx = \left(2\sqrt{m_1\omega_1 m_2\omega_2}/(m_1\omega_1 + m_2\omega_2)\right)^{1/2} = (\cosh\gamma)^{-1/2}$: correct.
- $(a + a^\dagger)e^{-\frac12 a^\dagger a^\dagger}\psi_0 = (-a^\dagger + a^\dagger)(\dots) = 0$, and $(a - a^\dagger)e^{+\frac12 a^\dagger a^\dagger}\psi_0 = 0$: correct. $\hat x \propto a + a^\dagger$, $\hat p \propto a - a^\dagger$: so $x = 0$ and $p = 0$ eigenstates, correct.
- Position eigenstate: $a$ acting on $\exp(\beta x a^\dagger - \frac12 a^\dagger a^\dagger)\psi_0$ gives $(\beta x - a^\dagger)$ times the state, so $\sqrt{\hbar/2m\omega}(a + a^\dagger)$ gives $x$ with $\beta = \sqrt{2m\omega/\hbar}$: correct.

Worked example ($m$ fixed, $\omega_2 = \omega_1/4$):
- $e^\gamma = \sqrt4 = 2$, $\gamma = \ln 2$; $\Delta x$ half and $\Delta p$ double the new ground-state values: correct (the new, weaker oscillator has a wider ground state, so $\gamma > 0$ is the right sign).
- $\cosh\gamma = 5/4$, $\tanh\gamma = 3/5$: correct.
- $P_0 = 1/\cosh\gamma = 0.8$: correct.
- Level 2 amplitude $-\frac{3}{10}\sqrt2$ (times $2/\sqrt5$), $P_2 = 0.8 \times 0.18 = 0.144$: correct.
- Level 4 amplitude $\frac{9}{200}\sqrt{24}$, $P_4 = 0.8 \times 0.0486 = 0.03888 \approx 0.039$: correct. Cross-check with $P_{2n} = \frac{(2n)!}{4^n (n!)^2}\frac{\tanh^{2n}\gamma}{\cosh\gamma}$: $0.144$, $0.03888$.
- Total $0.983$, "about 98%": correct.
- The example is original (neither source has numbers or level probabilities).

Quiz and flashcards:
- Quiz 1 (answer 0, $|\alpha|$): correct, (4.99).
- Quiz 2 (answer 0): correct, (5.9).
- Quiz 3 (answer 0, even levels): correct; explanation matches transcript pp. 14–15 and notes (5.13).
- Quiz 4 (answer 0, position eigenstate at $x = 0$, not normalisable): correct, and $\gamma \to -\infty$ for momentum is right.
- Flashcards 1–3: correct (card 1 uses "about $1/|\alpha|$" and $\Delta N\,\Delta\phi \approx 1$, consistent with (4.106)–(4.107)).
- `calcs/8.05/squeezed-states.yaml`: 10 entries, all correct; `pytest tests/calc -k squeezed`: 10 passed. Thin spot (info): no entry checks the normalisation integral $1/\sqrt{\cosh\gamma}$ or $f = \tanh\gamma$ as identities; optional.

## Coverage and order
- The page follows the transcript's order: recap → blob → rough wave argument → $\langle N\rangle$, $\langle N^2\rangle$, $\Delta N$ → blob size and $\Delta\phi$ → squeezed states by a sudden change → uncertainties → same $\hat x$, $\hat p$ → Bogoliubov → ansatz, $f = \tanh\gamma$ → normalisation → squeezed vacuum on its own → $S(\gamma)$ → $D(\alpha)S(\gamma)$ and Mavalvala → infinite squeezing → position eigenstate. Only the Wigner mention is moved earlier (finding 7).
- Left out (minor): the notes' remark that Bogoliubov transformations preserve the commutator (p. 44; covered by the calcs file only); the recursive expansion (5.13) is described in words only; notes' characterisation of squeezed states as the most general states saturating the bound (p. 42); the student questions on the blob width (pp. 6–9), reflected by the "½ to 1".
- Added: the worked example, marked as the page's own; the LIGO "later development" note (finding 9).
- `leadsTo`: Lecture 16 does cover photon states and begins two-state systems, but not squeezed photon states (finding 2).
- Prerequisite `coherent-states` exists (8.05 Lecture 14). Source URL matches the Lecture 15 entry in `content/year-3/8.05/_course.json`; the transcript URL's video id (NXgobnaBN7U) matches the transcript header.

## Licensing
- Neither the transcript nor the notes carries an "All rights reserved" or "Courtesy of" notice (grep on both texts): only the standard OCW Creative Commons header. Nothing needs `courtesy:`.
- The page has no images; the notes' Figures 3–4 are not reproduced. No OpenStax or LibreTexts material.
- No near-verbatim sentences found. Closest paraphrases: "Wigner distributions make it precise, though not much clearer" (transcript p. 9, "more precisely, although physically not much clearer") and "a very strong physical assumption" (p. 13), which is attributed to Zwiebach. Both are short and acceptable.
- No em dashes on the page (grep for "—" found none). En dashes appear only in the title and ranges.

## Notes
- No `Callout kind="cosmology"`, which is appropriate here. (A real link exists, if wanted later: squeezed states and Bogoliubov transformations describe the quantum fluctuations that inflation stretches, 8.286 Lecture 22/23. Optional, not a finding.)
- Kets written as $\psi$ with labels: by design, not a finding.
- "Being normalised, it must come from a unitary operator acting on the vacuum" follows the lecture (p. 21) and is true (any unit vector is the image of the vacuum under some unitary); the remarkable part, as the page says, is that the operator is simple.

## Resolution (2026-11-17, by the page author)

- Error 1: the number–phase formula now cites eqs. (4.106)–(4.107).
- Warning 2: the Lecture 16 `leadsTo` now reads "Photon states as coherent states of the electromagnetic field, and the start of two-state systems."
- Warning 3: the opening line cites sections 5.1–5.2.
- Info:
  - Δp cites eqs. (5.5) and (5.28).
  - "made routinely" now reads "by 2013 experimenters had become increasingly able to make them".
  - The opening clause is reworded.
  - The later-development note gives GEO600 (from 2010) and LIGO (from the 2019 observing run), with sources recorded as `later-data` facts in the calcs file.
  - The Wigner placement is kept.
