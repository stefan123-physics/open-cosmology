---
page: content/year-3/8.05/position-momentum-stern-gerlach.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-3-wave-mechanics-cont/ (read: page title "Lecture 3: Wave Mechanics (cont.) and Stern-Gerlach Experiment"; it links the transcript below and notes chapters 1 and 2; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ab2d5ee30b079f9cfb7546746d7431ff_AX9769eQV24.pdf (read: Lecture 3 transcript, 24 pages, text extracted with pdftotext page by page; printed footer pages 1–24 match the PDF page numbers)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-1/ (read: Zwiebach, "Wave Mechanics", section 6, eqs. (6.27)–(6.46), notes pp. 22–25)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read: Zwiebach, "Spin One-half, Bras, Kets, and Operators", section 1, eqs. (1.1)–(1.17), notes pp. 1–7; the resource page exists and links the chapter 2 PDF)
verdict: pass-with-notes
---

# Review: Position and momentum, and the Stern–Gerlach experiment

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The force on a moment", last sentence: "A loop in a field whose lines spread out is pushed towards the stronger field." | Transcript pp. 18–19: the loop's μ points up, along B, so μ·B > 0 and the force points towards the stronger field. Notes p. 3, below (1.14): "Given that in our situation μ and B are parallel, this direction is the direction in which the magnitude of B increases the fastest." | States the rule without the condition. A moment antiparallel to B is pushed towards the *weaker* field. This matters on this page: the electron's μ is opposite to its spin, and the two Stern–Gerlach beams are deflected in opposite directions. | E.g. "A loop whose moment points along the field is pushed towards the stronger field; one pointing against it is pushed towards the weaker field." |
| 2 | info | Formula "Fourier transform", `at="eqs. (6.40), (6.41)"` | Notes (6.40) is $\tilde\psi(p) = \int dx\, e^{-ipx/\hbar}\psi(x)/\sqrt{2\pi\hbar}$; (6.41) is the inverse, $\psi(x) = \int dp \dots$. | The formula gives $\psi(x)$ first and $\tilde\psi(p)$ second. Each half's equation number is therefore in the opposite order. | Optionally write `at="eqs. (6.41), (6.40)"`, or swap the two halves. Both equations are correct as written. |
| 3 | info | "Operators in the momentum representation", $\hat x = i\hbar\,d/dp$ | Transcript p. 10 leaves it "as an exercise"; notes (6.46) is marked "Exercise. Verify that…". | Stated as a result, with no derivation. | Optionally say "(left as an exercise in the lecture; it follows in the same way, or from $[\hat x,\hat p] = i\hbar$)". The sign is correct: $i\hbar\,\partial_p\tilde\psi(p) = \int dx\,x\,\psi(x)\,e^{-ipx/\hbar}/\sqrt{2\pi\hbar}$. |
| 4 | info | "A rotating ring": "the same ratio holds for any axially symmetric rotating body built from such rings" | Transcript p. 15: any axially symmetric object. Notes p. 2: "any rotating distribution with uniform mass and charge density", with Q and M the totals. | The condition that charge and mass are spread in the same proportion is only implied by "such rings". | Optionally add "with charge and mass spread in the same way". |
| 5 | info | Filter sequence 1: "So the spin states z+ and z− are orthogonal … an orthonormal basis of a two-dimensional complex vector space" | Transcript p. 22: the experiment shows that z+ and z− are orthogonal. That every state is a combination of the two is introduced as "a very incredible physical assumption". | Reads as if the two-dimensional space follows from the experiment. | Optionally: "Zwiebach's further assumption is that these two states are a basis: every spin state is a combination." |
| 6 | info | History: "Their name for the effect, 'space quantization'" | Transcript p. 13: "they called it space quantization". Notes p. 5: "the original cumbersome name of 'space quantization'". | Follows the transcript. | None needed. (Uncertain, not used to judge the page: historically the term (Richtungsquantelung) came from Sommerfeld's theory, which the experiment set out to test, rather than being coined by Stern and Gerlach.) |
| 7 | info | Silver: "46 fill closed shells" | Notes p. 3: the 46 "fill completely the n = 1, 2, 3, and 4 levels"; transcript p. 19 says the same. | Follows MIT. | Strictly, silver is [Kr]4d¹⁰5s¹: the 4f subshell is empty, so the 46 electrons form closed *subshells*. Optional: "closed subshells". |
| 8 | info | "The electron": g = 2 | Transcript p. 16 and notes (1.10): g = 2, predicted by Dirac. | Same. | Optional: note that the measured value is slightly above 2 (about 2.002, a later QED correction). Not required by the source. |

Every other citation was checked against the extracted text:
- Notes chapter 1: (6.27) commutator, (6.33)–(6.34) delta-function eigenstates, (6.36) $\hat p\psi = (\hbar/i)\,d\psi/dx$, (6.38)–(6.39) plane-wave eigenstates with $1/\sqrt{2\pi\hbar}$, (6.45)–(6.46) momentum representation. Each is that equation, and the content and notation match.
- Notes chapter 2: (1.7) $\vec\mu = (Q/2M)\vec L$; (1.10) g = 2; (1.11) $\mu_B = e\hbar/2m_e = 9.27\times10^{-24}$ J/T; (1.13) $\vec\mu = -g\mu_B\vec S/\hbar$ (the range (1.10)–(1.13) covers everything in the Formula); (1.14) $\vec F = \nabla(\vec\mu\cdot\vec B)$; (1.15) $F_z \approx \mu_z\,\partial B_z/\partial z$; (1.17) $S_z/\hbar = \pm\frac12$. All correct.
- Transcript pages, all correct: commutator (p. 1); $\hat x$ multiplies (p. 2); grid vector and diagonal matrix (pp. 2–4); ⟨x̂⟩ (p. 4); delta eigenstates (pp. 4–5); $\hat p$ and de Broglie (p. 5); commutator check (pp. 5–7, the page cites pp. 6–7, where the argument is); finite-difference remark (p. 7); plane-wave eigenstates (p. 7); Fourier transform, matrix of phases, $\hat p \to p$, $\hat x \to i\hbar\,d/dp$, student questions (pp. 8–11); history (pp. 12–13); magnetic moment and units (pp. 13–14); ring (pp. 14–15); g, μ_B, point particle, proton and neutron, minus sign (pp. 15–18); force and right-hand-rule vote (pp. 18–19); silver and the apparatus (pp. 19–20); smear vs two peaks, 0.1 T and 1/5 mm (p. 20); spin one-half and superposition (p. 21); filter boxes (pp. 21–24).

History checked against the transcript (pp. 12–13) and notes p. 1: Frankfurt 1922; Pauli's two-valued degree of freedom; Kronig's rotation idea, Pauli's faster-than-light objection, Kronig not publishing; Uhlenbeck and Goudsmit around 1925, Ehrenfest telling them to publish, and the credit going to them; understanding by 1927; Stern and Gerlach hoping to detect Bohr's orbital angular momentum, but silver's outer electron has none. The page's history is correct and fairly attributed. It leaves out Pauli's later change of mind (p. 12) and that Stern and Gerlach had been measuring thermal speeds with beams (p. 12). Both omissions are minor.

## Arithmetic and answer checks
Recomputed in Python:
- Ring: $\mu/L = (Qv/2\pi R)(\pi R^2)/(MvR) = Q/2M$. Correct. The radius and speed drop out (the transcript's "as long as it's rotating with the same speed" on p. 15 is a slip; the notes say it does not depend on velocity, and the page rightly follows the notes).
- $\mu_B = e\hbar/2m_e = 9.2740\times10^{-24}$ J/T (CODATA constants). The page's 9.27 and 9.274 are correct; the transcript rounds to 9.3.
- Worked example inputs: the silver atom's mass is 107.87 u = 1.791e-25 kg, so 1.79e-25 is correct. A speed of 550 m/s is the rms thermal speed of silver at about 1300 K (543 m/s at 1273 K), which is reasonable for a silver oven. A 3.5 cm magnet with a gradient of 1000 T/m (10 T/cm) matches commonly quoted figures for the 1922 apparatus. That last point is from general knowledge, not from the MIT sources, so it is uncertain. μ_z = ±μ_B follows from (1.16)–(1.17).
- (a) F = 9.274e-21 N, which is correct. a = 5.181e4 m/s², so 5.18e4 is correct. a/g = 5281: "about five thousand times gravity" is acceptable.
- (b) t = 6.3636e-5 s, so 6.36e-5 is correct. ½at² = 1.049e-4 m, so 1.05e-4 is correct. The separation is 0.2098 mm, so 0.21 mm is correct. This agrees with the transcript's "1/5 of a millimeter" (p. 20). The deflection is taken at the magnet exit, with no drift space; the page's wording ("at the end of the magnet") says so.
- (c) The ratio $\mu_B/\mu_N = m_p/m_e = 1836$ is correct. The remark that nuclear moments can be neglected matches notes p. 3 ("the nucleus has much smaller dipole moment and can be ignored").
- Quiz 1 (answer 0: p̂ multiplies, x̂ = iħ d/dp): correct; the explanation is right (sign verified, finding 3).
- Quiz 2 (answer 0: Q/2M, independent of radius and speed): correct.
- Quiz 3 (answer 0: two spots, from spin one-half): correct. The explanation matches transcript pp. 13, 19 and notes p. 3.
- Quiz 4 (answer 0: half S_x up, half down): correct (transcript p. 23, notes p. 6).
- Flashcards: all three are correct. Card 2's $\vec\mu = -g\mu_B\vec S/\hbar$, g = 2, μ_B value and force agree with (1.10)–(1.14). Card 3 matches the three sequences (transcript pp. 22–24, notes pp. 5–7).
- `calcs/8.05/position-momentum-stern-gerlach.yaml`: every number on the page has an entry with the right formula and expected value. The `commutator` identity, $x\psi' - (x\psi)' = -\psi$ for $\psi = e^{-x^2}$, is correct, and times $\hbar/i$ it gives $i\hbar\psi$. `ex-g` (expected 5000, tolerance 400) passes with 5281. The suite was not run in this review.

## Coverage and order
- The page follows the transcript's order exactly: commutator → x representation → grid vector and diagonal matrix → ⟨x̂⟩ → delta eigenstates → p̂ and commutator check → finite-difference remark → plane-wave eigenstates → Fourier transform as change of representation → p̂ and x̂ in momentum space → history → magnetic moments and units → ring → electron g and μ_B, point particle, nucleons, minus sign → force → silver and apparatus → smear vs two spots, 0.1 T and 1/5 mm → spin one-half and superposition → three filter sequences. The lecture ends after sequence 3 (p. 24), and so does the page (before its own example).
- Left out (all minor): the opening plan of the linear-algebra lectures (p. 1); the in-class right-hand-rule vote with the I × B cross-section (p. 18), which the page condenses into one sentence; the transcript's neutron value "minus 2.78 or something like that" (p. 17). Omitting that value is good: the neutron's moment is about −1.91 nuclear magnetons (+2.79 is the proton's), so the transcript figure is a slip and the page rightly does not repeat it. Also left out: Pauli's later acceptance of spin, and the notes' remark that the momentum eigenstates are not normalizable (notes p. 24).
- Added: the worked example (silver-atom deflection), marked as the page's own.
- `leadsTo` 8.05 Lecture 4 ("Spin one-half states and operators, bras and kets") matches the syllabus entry "Spin one-half, bras, kets and operators" and Zwiebach's closing remark (p. 24).
- Internal link: `/courses/8-04/momentum-space-expectation-values` exists (`content/year-2/8.04/momentum-space-expectation-values.mdx`, 8.04 Lecture 8, status reviewed; the course slug is `8-04`). It uses the same $1/\sqrt{2\pi\hbar}$ Fourier convention (with $\tilde\Phi$ for $\tilde\psi$), so the cross-reference is consistent. The prerequisites `one-d-spectrum-variational` and `momentum-space-expectation-values` are existing slugs.
- `source.url` and the transcript URL match the OCW lecture page (video id AX9769eQV24). The notes URLs (`resources/lecture-notes-1/`, `resources/lecture-notes-2/`) resolve. OCW's lecture page links the same files as `resources/mit8_05f13_chap_01` and `…_chap_02`.

## Licensing
- None of the three sources carries an "All rights reserved" or "Courtesy of" notice (grep of all three texts); they have only the standard OCW Creative Commons header and footer. Nothing needs `courtesy:`.
- The notes' Figures 1–5 (dipole in a field, apparatus, screen patterns, SG boxes) are not reproduced; the page has no images.
- No OpenStax or LibreTexts material.
- No near-verbatim sentences found. The history paragraph is the closest to the notes (p. 1), but it is reworded throughout. Shared fragments are short standard phrases ("two-valued degree of freedom", "space quantization", "collimating slit"). The worked example is original: neither the lecture nor the notes has a numerical example.
- No em dashes on the page (checked with grep). The en dash in "Stern–Gerlach" is fine.

## Notes
- No `Callout kind="cosmology"` and no cosmology `leadsTo`. That is appropriate for this lecture.
- The summary's "for the electron $\vec\mu = -2\mu_B\vec S/\hbar$" is (1.13) with g = 2, which is correct.
- Verdict: no errors. Finding 1 (the force direction without the "moment along the field" condition) should be fixed. The rest are optional.

## Resolution (2026-11-17, by the page author)

- Warning: the force sentence now says a moment along the field is pushed towards the stronger field and one against it towards the weaker, which is why the two spin states separate.
- Info: the Fourier formula cites (6.41), (6.40) in display order; x̂ = iħ d/dp is marked as an exercise; the ring argument needs charge and mass distributed alike; the two-dimensional space is called a bold physical assumption, as in the transcript; the measured g ≈ 2.002 is mentioned. The "space quantization" naming, the closed-subshell wording and other minor omissions are left as they are.
