---
page: content/year-3/8.06/symmetrization-postulate.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l24-1/ (not opened online; the four transcripts below were read from local copies supplied for this review)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/e1bb2c80e2d54f1763b6b9051ba24eb7_6CeljmHgd0w.pdf (read, local copy; L24.1, 4 PDF pages, each extracted with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/c7f9b5f21cb25cb94d0da7e310cccfcd_KbAgNwrpUTw.pdf (read, local copy; L24.2, 5 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/4e795b996612005db1f61f92fbef8c16_G-5KHKrNPMs.pdf (read, local copy; L24.3, 3 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/5af53af3903528054b949a2e4263ee04_zUHOeWom7qs.pdf (read, local copy; L24.4, 5 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/fb48dd49e8649557f1715f0415de4f4d_MIT8_06S18ch8.pdf (read, local copy; printed pp. 156 and 158-164 read from the rendered page images, equation numbers taken from the images)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read, downloaded to scratch; p. 8 only, for the guth17 reference)
verdict: pass-with-notes
---

# Review: The symmetrizer, the antisymmetrizer and the symmetrization postulate

Transcript citations use PDF page numbers (the clips have no printed footers; pages restart at 1 per clip). Every transcript citation on the page was checked against `pdftotext -f N -l N` output, and every notes citation against the rendered page (printed page = PDF page + 150). The author's notes.md was not used. Neither the transcripts nor chapter 8 carries a "rights reserved" or "Courtesy of" notice.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Comment 5", first and third paragraphs: "Take a state $\|u\rangle$ in $V^{\otimes N}$" ... "The terms of $S\|u\rangle$ all have a plus sign, so there is no such cancellation." | L24.4 pp. 1-2 and notes p. 161 take a general $\|u\rangle \in V^{\otimes N}$ and say the symmetric state always exists (the lecture: "In the symmetrize case, there's no cancellation possible"). | Same as the lecture, for any state. | For a general $\|u\rangle$ this is false: $\|u\rangle = \|ab\rangle - \|ba\rangle$ gives $S\|u\rangle = 0$, and $V_u$ then holds no symmetric state. It holds for a product state (of nonzero single-particle vectors), which is what the page's own flashcard 3, Summary and the `u` symbol meaning say. Write "a product state $\|u\rangle$" in the body, or add that the claim is for product states. |
| 2 | info | "Comment 1 to 4", item 3: "the Higgs boson is spin 0; a graviton would be spin 2" | L24.3 p. 2: both names are "[INAUDIBLE]" in the transcript ("We finally know the [INAUDIBLE] is there, spin 0. Particles of spin 2. Just [INAUDIBLE] along."). Not in the notes. | Gives them as Zwiebach's list. | The reconstruction is the obvious one and physically right, but it is inferred. Optionally add "(names inaudible in the transcript)". |
| 3 | info | "Comment 6", bracket: "[The lecture says two proportional columns; in this arrangement the equal states are rows. Either way the determinant is zero.]" | L24.4 p. 3: "kind of like a statement that the two columns of a matrix have 0 determinant if they're proportional", a general analogy; the board layout is not recoverable from the transcript. Notes (8.3.8), (8.3.13): rows = states, columns = particles. | Corrects to rows. | Fair and hedged ("Either way"). It is not really a slip (a determinant equals that of its transpose, and the remark was an analogy), so the bracket could be shortened to "in the notes' arrangement the equal states are rows". No change required. |
| 4 | info | "Comments 1 to 4", lead sentence: "Zwiebach adds seven comments (L24.3 transcript pp. 1-3)." | Comments 1-4 are in L24.3 pp. 1-3; comments 5-7 are in L24.4 pp. 1-5. | Cites only L24.3. | "(L24.3 p. 1 to L24.4 p. 5)", or leave as is since each later comment carries its own citation. |
| 5 | info | "Multiplying by one permutation": "(L24.2 transcript p. 1; the notes label it α₀ instead of β)" | The lecture also calls it $P_{\alpha_0}$ (L24.2 pp. 1-2). | Attributes α₀ only to the notes. | "(lecture and notes call it $P_{\alpha_0}$)". |
| 6 | info | "Three particles", bracket on the antisymmetrizer | L24.2 p. 5 also reads the symmetrizer with only five terms ("1 plus P312 plus P231 ... Plus P321 plus P213"; $P_{132}$ missing, though Zwiebach says "You should add all of them"). | Not mentioned. | Optional; the page's (8.2.47) is correct from the notes. |
| 7 | info | "Comments 1 to 4", item 4 last sentence: "more precisely, only the fermions matter, and the composite is a fermion exactly when it contains an odd number of them." | L24.3 p. 3: "a boson or a fermion, depending on those numbers"; notes p. 161 give only the hydrogen case. | Sharpens the rule. | Correct physics; it is the page's own precision, clearly signalled by "more precisely". No change needed. |

No other differences. Every formula matches its cited equation and page, and every transcript citation is on the page cited.

## Formula and citation checks
- (8.2.34) $S$, $A$: notes p. 158, correct; spoken at L24.1 p. 2. (8.2.35) Hermiticity, p. 159, correct; "not obvious term by term" L24.1 pp. 2-3, list argument p. 3, parity of the conjugate pp. 3-4, board form of $A^\dagger$ (cited reading1 p. 4) is on L24.1 p. 4, group-inverse remark p. 4. $P_\alpha^\dagger = P_\alpha^{-1}$ on notes p. 159: correct.
- (8.2.36)-(8.2.37) $P_\beta S = SP_\beta = S$, $P_\beta A = AP_\beta = \epsilon_\beta A$: p. 159, correct. (8.2.38) and (8.2.39) (inserting $\epsilon_{\alpha_0}^2 = 1$): p. 159, the page's form is the same steps. Right multiplication "very similar": L24.2 p. 2, correct.
- (8.2.40) $S^2 = S$, $A^2 = A$, $AS = SA = 0$: p. 159, correct (the notes write $\hat S\hat A = \hat A\hat S = 0$). (8.2.41)-(8.2.43): p. 159, correct; transcript L24.2 p. 3.
- (8.2.44)-(8.2.45), (8.2.46): p. 159, correct. Student answering "0": L24.2 p. 4, correct.
- $N = 2$: $S + A = 1$ is notes (8.2.15), p. 155 (cited by number only, correct). "1 plus P21" without the ½ at L24.2 p. 4: real, fairly stated as a transcript reading.
- (8.2.47)-(8.2.49): p. 160, correct. Even $P_{123}, P_{312}, P_{231}$; odd $P_{132}, P_{213}, P_{321}$: correct under the notes' convention (8.2.22), (8.2.26) (3-cycles even, transpositions odd). $S + A$ is a plain sum, so it does not depend on the composition convention: odd terms cancel, even terms get $\frac16 + \frac16 = \frac13$. "P213 read twice" in the lecture's $A$: real (L24.2 p. 5).
- (8.2.50) and (8.2.51): p. 160, correct; the page labels (8.2.51) as notes-only. Young tableaux and further projectors: L24.2 p. 5, correct.
- Postulate: L24.3 p. 1 and notes 8.3, p. 160, correct; "extra axiom ... more honest to admit it's an extra postulate" fairly paraphrased; the up/down electron question: L24.3 p. 1. Anyons: notes p. 160, correct. Spin-statistics, "deep connection", "great achievement of quantum field theory": L24.3 p. 2. "The w's, the c's" is rendered W and Z without comment, which is right (a transcription error, not a lecturer slip).
- (8.3.1)-(8.3.3): p. 161, correct; the page shows (8.3.3).
- $V_u$ definition: notes p. 161 (unnumbered), cited as "Comment 5, p. 161": correct; dimension 1 to $N!$ L24.4 p. 1; $\|aab\rangle$ example L24.4 p. 2 (aab, baa, aba): correct. "At most" placement: L24.4 p. 2 first says "at most a single ket in Sym N V and a single ket in Anti N V", then corrects to "a single ket and at most a single ket in Anti N V": real and fairly stated; notes p. 161 say "a single ket of Sym^N V and a single ket of Anti^N V": correct.
- (8.3.4)-(8.3.5): pp. 161-162, correct.
- (8.3.8): p. 162, rows = states, columns = particles, reorder each term to standard order: correct. (8.3.9) $\det B = \sum_\alpha \epsilon_\alpha B_{\alpha(1),1}\cdots B_{\alpha(N),N}$: p. 162, correct; "alpha 1 element from the first column": L24.4 p. 4. (8.3.10)-(8.3.15) pp. 162-163, labelled as notes: correct. The page's claim that the $\alpha$ term puts $\omega_{\alpha(1)}$ on particle 1, as $P_\alpha$ does, matches (8.3.11).
- (8.4.8)-(8.4.9): p. 164, correct. Occupation-number states with equal numbers giving the same state (up to sign) and different numbers different states: notes p. 163, correct. "Symmetrizing is a lot of work": L24.4 p. 4. Quote "occupation numbers is where quantum field theory begins": L24.4 p. 5, verbatim, 7 words, attributed: fine.
- Notes sections 8.4-8.6 run to p. 171 (rendered pages to PDF p. 21): correct.

## Arithmetic and answer checks
- Worked example (a), convention $P_{npq}$ = "n-th state to position 1" (notes (8.2.22)): on $\|aab\rangle$, $P_{123}, P_{213} \to aab$; $P_{231}, P_{132} \to aba$; $P_{312}, P_{321} \to baa$. Correct. Each pair is one even and one odd permutation, so $A\|aab\rangle = 0$; $S\|aab\rangle = \frac26(\ldots) = \frac13(aab + aba + baa)$, squared norm $3/9 = 1/3$, normalized coefficient $1/\sqrt3$. All correct.
- (b): $A\|abc\rangle = \frac16(abc + cab + bca - acb - bac - cba)$; checked term by term ($P_{312} \to cab$, $P_{231} \to bca$, $P_{132} \to acb$, $P_{213} \to bac$, $P_{321} \to cba$) and against the determinant with rows $a, b, c$ (term $\alpha = (3,1,2)$ puts $c, a, b$ on particles 1, 2, 3, even). Squared norm $6/36 = 1/6$; normalized $\sqrt6\,A\|abc\rangle$ with coefficients $\pm 1/\sqrt6$; $\langle abc\|A\|abc\rangle = 1/6$. Correct.
- (c): two particles, $d = 3$: symmetric $\binom{4}{2} = 6$, antisymmetric $\binom32 = 3$, $9 = 3^2$. Three particles: symmetric $3 + 6 + 1 = 10 = \binom53$, antisymmetric 1, $27 - 11 = 16$ mixed (consistent with two copies of the 8-dimensional mixed-symmetry representation). Correct.
- Example originality: it reuses the lecture's state $\|aab\rangle$ (L24.4 p. 2), but the lecture only lists its permutations; computing $S$, $A$, norms and the counting is the page's own. Acceptable.
- Quiz 1 (answer 2): correct; distractors are wrong for the reasons given. Quiz 2 (answer 1): correct. Quiz 3 (deuterium: p, n, e, three fermions, $(-1)^3 = -1$, fermion; answer 3): correct; hydrogen $(-1)^2$ in the explanation correct. Quiz 4 (answer 0, 6 states): $\binom42 = 6$, bosons $10$, $16 = 4^2$: correct.
- Flashcards: all four correct. Card 3 restricts to "one product state", which is the correct form (see finding 1).
- Calcs file `calcs/8.06/symmetrization-postulate.yaml`: 26 entries, all agree with the page; its stated convention matches notes (8.2.26). `npm run calc:test -- -k symmetrization`: 26 passed.

## Coverage and order
- The page follows the lecture order exactly: recap (L24.1 pp. 1-2), $S$, $A$ (p. 2), Hermiticity (pp. 2-4), $P_\beta S$, $P_\beta A$ (L24.2 pp. 1-2), projector properties (pp. 2-3), ranges and $N = 2$ (pp. 3-4), $N = 3$ and mixed symmetry (p. 5), postulate and comments 1-4 (L24.3), comments 5-7 (L24.4). Nothing in the four clips is left out except the composite-particle aside (mesons, baryons, unstable particles, L24.3 p. 2) and the course farewell, both reasonably omitted.
- Notes-only material is labelled: (8.2.51) completely symmetric observables, the general-$N$ determinant (8.3.10)-(8.3.15), and the note that normalized occupation-number states and sections 8.5-8.6 are not covered by the lecture.

## Licensing
- No "rights reserved" or "Courtesy of" notice in the transcripts or chapter 8. The notes' hand-drawn hydrogen-atom figure (p. 161) is not reproduced. No text copied beyond the one attributed 7-word quote and standard terminology. No OpenStax or LibreTexts material. No em dashes.

## Notes
- Cosmology callout and `leadsTo`: the guth17 reference is correct; Lecture 17 transcript p. 8 says "for fermions g gets an extra factor ... 7/8s. And g star is multiplied by 3/4" and links it to the exclusion principle; the site page `neutrinos-and-particle-counting` (8.286 Lecture 17) cites the same place. The 8.044 Lecture 20 page `white-dwarfs` (degeneracy pressure, Chandrasekhar limit) and Lecture 22 page `bose-einstein-condensation` (macroscopic fraction in the lowest state below $T_c$) exist and match the `why` texts. Claims fairly attributed.
- Lecture cross-references: the exchange-degeneracy problem is site Lecture 22 (`identical-particles-exchange-degeneracy`), the permutation theorem Lecture 23 (`permutation-operators`): correct.
- Symbols: the meanings added or extended for this page in `data/symbols.json` (P_α, P_β, P_γ, ε_α, ε_β, ε_γ, the six P_npq, P_21, S, A, V_u, c_α, n_k, n_1, n_2, n_a, n_b, n_c, u, u_k, ω_i, ω_α(1), B_α(1),1, Ψ, p₁, e₁, a, b, c, i, j, O, v, φ, χ, ω, ψ) all fit their use here; the P_α meaning matches notes (8.2.26). The `u` meaning ("a product state") is consistent with finding 1's suggested fix. `npm run content:check`: 0 errors; the only warning for this page is the missing review file.

## Resolution (2026-11-18, by the page author)

- 1 (warning): Comment 5 now takes "a product state |u⟩, each particle in one single-particle state", and adds that for a state that is not a product S can vanish (S kills |a b⟩ − |b a⟩), so the claim is about product states.
- 2: the Higgs and graviton are now marked "(these two names are inaudible in the transcript)".
- 3: the bracket now reads "The lecture makes the analogy with two proportional columns; in the notes' arrangement the equal states are rows."
- 4: the seven comments are cited as L24.3 transcript p. 1 to L24.4 transcript p. 5, with the first four in the third video.
- 5: the page now says that the lecture and the notes both call the fixed permutation P with subscript α₀ (written β here).
- 6: no change (optional; the page's (8.2.47) follows the notes).
- 7: the composite rule is now marked as the page's sharper form, not the lecture's.
- Status set to reviewed.
