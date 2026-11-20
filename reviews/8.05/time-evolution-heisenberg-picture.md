---
page: content/year-3/8.05/time-evolution-heisenberg-picture.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-13-quantum-dynamics-cont/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ad987410654c49a34349b19c4a66ee54_zOZw3zCLzyE.pdf (read: Lecture 13 transcript, Zwiebach, 22-page PDF, text on pp. 1–21 and p. 22 blank; extracted with pdftotext page by page; printed footer pages match the PDF page numbers)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-6/ (read: Zwiebach, "Quantum Dynamics", 51-page PDF; pp. 15–25 (section 2.3, eqs. (2.36)–(2.52), and section 3, eqs. (3.1)–(3.57)) extracted with pdftotext -layout and -raw and checked equation by equation)
  - Lecture 14 transcript (local copy of the OCW PDF), p. 1 read only to check the `leadsTo` claim
  - Lecture 10 transcript (local copy), searched only to check "the result found two lectures ago"
verdict: pass-with-notes
---

# Review: Solving for time evolution, and the Heisenberg picture

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Time-ordered exponential", `at="eqs. (2.51)–(2.52)"` | Notes (2.51) is the end of case 2, $\frac{d}{dt}U = -\frac{i}{\hbar}H(t)U$; the time-ordered exponential is eq. (2.52) alone (p. 17). | Cites (2.51)–(2.52). | `at="eq. (2.52)"`. |
| 2 | warning | "The Heisenberg equation of motion": "the result found two lectures ago" | Transcript p. 16: "This equation we derived a couple of lectures ago". It was derived in Lecture 10 (Lecture 10 transcript: "d dt of the expectation value of Q is equal to i over H bar, expectation value of the commutator of H with Q"), three lectures before Lecture 13. Lectures 11 and 12 do not rederive it (grep found nothing). | "two lectures ago". | "the result found in Lecture 10" (and optionally link the page `uncertainty-principle-energy-time`). |
| 3 | info | Formula "Equation for the time-evolution operator", `at="eq. (2.37)"` | Notes (2.36) is $i\hbar\,\partial_tU = H(t)U$; (2.37) is the same with an ordinary derivative, written as $dU/dt = -\frac{i}{\hbar}H(t)U$. | $i\hbar\,dU/dt = HU$ cited to (2.37). | Same equation, so acceptable; `at="eqs. (2.36)–(2.37)"` would be exact. |
| 4 | info | Heisenberg properties, first bullet: "(notes eq. (3.4))" | Notes: $A_H(0) = A_S$ is eq. (3.3); $1_H = 1$ is eq. (3.4) (confirmed with `pdftotext -raw`). | Cites only (3.4) for both. | "(notes eqs. (3.3)–(3.4))". |
| 5 | info | Case 2: "$\dot R = -iH(t)/\hbar$ (transcript p. 7)"; Case 3: "an instruction … (transcript pp. 7–8)" and "(transcript pp. 6–7)" | The derivative of $R$ at the upper limit is on p. 5; the student's question about it on p. 7. The question about $T$ starts on p. 8 only. The "limited usefulness / magnetic resonance / 8.06" remarks are on p. 7. | As shown. | "(transcript pp. 5, 7)", "(transcript p. 8)", "(transcript p. 7)". Minor. |
| 6 | info | Oscillator section: "$H_H$ … returns exactly $H_S$ (transcript pp. 20–21)" | The same check is notes eq. (3.49). | Transcript only. | Optionally add "notes eq. (3.49)". |
| 7 | info | Hamiltonian bullet: "A student pointed out, rightly, that any operator commuting with the Hamiltonian is the same in both pictures (transcript pp. 11–12)" | Transcript p. 11: the student's question assumed a time-independent Hamiltonian; Zwiebach agrees (p. 12). Notes comment 6 (p. 19, unnumbered) states the general version: an $A_S$ commuting with $H_S(t)$ for all times. | General statement, transcript only. | Correct as stated if "the Hamiltonian" means $H_S(t)$ at all times; optionally say so and cite notes p. 19, comment 6. Also, the remark (pp. 11–12) comes before the Hamiltonian discussion (pp. 12–13) in the lecture; the bullet puts it after. Harmless. |
| 8 | info | Opening: "(transcript pp. 1–22; notes chapter 6, sections 2.3 and 3)" | Transcript text ends on p. 21 (p. 22 is blank). Notes section 3.3 has three examples: Example 1 (general potential, (3.29)–(3.32)), Example 2 (oscillator, including $\langle n\lvert \hat x_H(t)\rvert n\rangle = 0$, (3.45)–(3.48)), Example 3 (Heisenberg $\hat a(t)$, (3.50)–(3.57)). Zwiebach does only the oscillator in lecture and leaves the others to recitation (p. 17). | Cites all of section 3 but covers only the oscillator part of 3.3. | "pp. 1–21"; optionally add one sentence saying the notes' other two examples (and Example 3's $\hat a(t) = e^{-i\omega t}\hat a$, which Lecture 14 recaps) are left to recitation. |

All other citations were checked against the extracted text:
- Transcript: plan and "relation to classical mechanics" (p. 1), Poisson brackets left to the notes (pp. 1–2), multiplying by $U$ and recovering the Schrödinger equation (p. 2), case 1 ansatz and the position of $H$ relative to $U_0$ (pp. 2–3), $U_0 = e^{iHt_0/\hbar}$ and $U = e^{-iH(t - t_0)/\hbar}$ (p. 3), function of $H$ on an eigenstate (p. 3), case 2 with $-\gamma B_z(t)S_z$ and the rotating field for magnetic resonance (p. 4), the integral ansatz (p. 4), the series argument with $\dot R$ commuting with $R$ (p. 5), time-ordered exponential and the vanishing factor $\frac12$ (pp. 5–6), uniqueness of the solution of a first-order matrix equation (p. 8), matrix elements and the Heisenberg operator (pp. 9–10), operators act on operators from both sides (p. 10), $A_H(0) = A_S$ and the identity (pp. 10–11), products and commutators (p. 11), $[\hat x_H, \hat p_H] = i\hbar$ (p. 12), Heisenberg Hamiltonian and $H_H = H_S$ for commuting Hamiltonians, "funny condition" (pp. 12–13), expectation values (pp. 13–14), motivation for a differential equation (p. 14), the derivation (pp. 14–15), the case without explicit time dependence (p. 15), expectation values (pp. 16–17), conserved operators (p. 17), the oscillator (pp. 17–21). All correct.
- Notes: (2.45), (2.46), (2.47)–(2.50), (3.1), (3.2), (3.5)–(3.7), (3.8), (3.10)–(3.14), (3.15), (3.22), (3.23), (3.25)–(3.26), (3.27)–(3.28), (3.36)–(3.39) (the $d\hat p_H/dt$ equation sits unnumbered between (3.37) and (3.38) and is inside the range), (3.44). Each is that equation and matches in content. The page's time-ordered series matches (2.52) term by term (second integral up to $t_1$).
- Lecturer slips not repeated: transcript p. 5 first says $\dot R$ "is H of t" (later $-\frac{i}{\hbar}H(t)$) and writes the series as "1 plus R plus RR" (no $\frac12$); p. 19 first says $d\hat p_H/dt = m\omega^2\hat x_H$ and then adds the minus sign. The page uses the correct forms; since Zwiebach corrects himself within the lecture, no bracketed note is needed.

## Arithmetic and answer checks
Recomputed by hand:
- Oscillator: $\frac{d}{dt}[\hat x\cos\omega t + \frac{\hat p}{m\omega}\sin\omega t] = -\omega\hat x\sin\omega t + \frac{\hat p}{m}\cos\omega t = \hat p_H/m$ with $\hat p_H = \hat p\cos\omega t - m\omega\hat x\sin\omega t$, correct. $\hat x_H(0) = \hat x$, $\hat p_H(0) = \hat p$, correct. $H_H$: $\frac{1}{2m}(\cos^2 + \sin^2)\hat p^2 + \frac12m\omega^2(\sin^2 + \cos^2)\hat x^2$, cross terms $\mp\frac{\omega}{2}\sin\omega t\cos\omega t(\hat p\hat x + \hat x\hat p)$ cancel, correct (matches notes (3.49)).
- Worked example (a): $[\hat p_H, -F\hat x_H] = -F(-i\hbar) = i\hbar F$, so $d\hat p_H/dt = F$; $[\hat x_H, \hat p_H^2/2m] = i\hbar\hat p_H/m$, so $d\hat x_H/dt = \hat p_H/m$. Solution $\hat p_H = \hat p + Ft$, $\hat x_H = \hat x + \hat pt/m + Ft^2/2m$ satisfies both and the $t = 0$ conditions. Commutator $[\hat x + \hat pt/m, \hat p + Ft] = i\hbar$, correct.
- Worked example (b): $H(t_1)$, $H(t_2)$ are both multiples of $S_z$, so case 2 applies. $\int_0^t\omega_0e^{-t'/\tau}dt' = \omega_0\tau(1 - e^{-t/\tau})$, correct; $U = \exp(-i\varphi S_z/\hbar)$ is the rotation by $\varphi$ about $z$, $\varphi \to \omega_0\tau$, correct. Units: $\omega_0S_z$ is an energy, so $\omega_0$ is a frequency and $\omega_0\tau$ an angle, consistent.
- Quiz 1 (answer 0): correct; $e^{-iHt/\hbar}$ "for every $t_0$" fails $U(t_0, t_0) = 1$, as it should.
- Quiz 2 (answer 0): correct (sufficient condition, notes (2.48)); explanation correct.
- Quiz 3 (answer 0): correct (notes (3.8)).
- Quiz 4 (answer 0): correct (notes (3.27)–(3.28); notes add that $A_H = A_S$).
- Flashcards: all three correct.
- `calcs/8.05/time-evolution-heisenberg-picture.yaml`: five entries, all right, and they pass (`pytest tests/calc -k time-evolution-heisenberg`: 5 passed). Thin spots (info): the stored checks use numbers in place of operators, so the cancellation of $\hat p\hat x + \hat x\hat p$ is checked only in the commuting case (stated in the entry's `where`, acceptable); the commutator in example (a) and the limit $\omega_0\tau$ are not stored. Optional.

## Coverage and order
- The page follows the transcript's order: equation for $U$ → case 1 → case 2 (spin example, $R$, $\dot R$) → case 3 (time-ordered exponential) → Q&A on $\dot R$, on $T$, on uniqueness → Heisenberg picture via matrix elements → properties (t = 0, identity, products, commutators, $[\hat x_H, \hat p_H]$, student's remark, Hamiltonians, expectation values) → Heisenberg equation of motion → no explicit time dependence → expectation values → conserved operators → oscillator → $H_H = H_S$ check.
- Left out (minor): the case-1 detail that the exponential is defined by its power series (p. 3, notes (2.39)–(2.43)) is only implied; the last student question on what "solving" means (pp. 8–9); the notes' exercise that $U(0)e^{tK}$ would fail (p. 16; the page's "not to the right of $U_0$" covers the idea); notes Examples 1 and 3 and the $\langle n\lvert\hat x_H\rvert n\rangle = 0$ computation (finding 8).
- Added: the worked example, marked as the page's own; neither source treats a constant force or an exponentially decaying field.
- `leadsTo` 8.05 Lecture 14 ("More quantum dynamics: coherent states of the oscillator") is correct: the Lecture 14 transcript opens "[the subject] of today's lecture is coherent states of the harmonic oscillator", after a recap of Heisenberg operators and $\hat a(t)$.
- Prerequisite `oscillator-unitary-time-evolution` exists (Lecture 12, which itself leads to Lecture 13). The transcript URL's video id (zOZw3zCLzyE) matches the transcript PDF header.

## Licensing
- Neither the transcript nor the notes carries an "All rights reserved" or "Courtesy of" notice (grep on both texts): only the standard OCW Creative Commons header. Nothing needs `courtesy:`.
- The page has no images. No OpenStax or LibreTexts material.
- No near-verbatim sentences found. Closest paraphrases: "a practical way to calculate and makes the link with classical mechanics clearer" (p. 1, "a pretty useful way of calculating things … makes the relation between classical mechanics and quantum mechanics more obvious"), "an operator acting from one side only would be suspicious" (p. 10) and "an instruction meaning this series, not an operator" (p. 8). All rewritten and short; fine.
- No em dashes on the page (grep for "—" found none).

## Notes
- No `Callout kind="cosmology"`. Appropriate for this lecture.
- States written as $\psi$ instead of kets, as the brief explains; not a finding.
- "A magnetic field that rotates, as in magnetic resonance later, is not of this kind" and "magnetic resonance will be solved another way" match transcript pp. 4 and 7.
- Verdict: no errors. Two warnings (findings 1 and 2: one equation-number range and one "two lectures ago") should be fixed; the rest are optional.

## Resolution (2026-11-17, by the page author)

- Warning 1: the time-ordered exponential now cites eq. (2.52).
- Warning 2: the expectation-value result is now attributed to Lecture 10, with a link to that page.
- Info: the evolution equation cites eqs. (2.36)–(2.37); the t = 0 bullet cites (3.3)–(3.4); Ṙ cites transcript p. 5 (the student's question p. 7); the question about T cites p. 8; the 8.06 remark cites p. 7; the transcript range is pp. 1–21; the H_H = H_S check also cites notes eq. (3.49); the opening line mentions that notes section 3.3 has two further examples left to recitation. The student's remark is kept as written.
