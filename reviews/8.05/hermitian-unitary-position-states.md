---
page: content/year-3/8.05/hermitian-unitary-position-states.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-9-diracs-bra-and-ket-notation/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/16bde348019239eb06131b47afae21db_r2NMWEsNcTs.pdf (read: Lecture 9 transcript, Zwiebach, 22 pages, text extracted with pdftotext page by page; printed footer pages 1–22 match the PDF page numbers; video id r2NMWEsNcTs matches the PDF header)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read: Zwiebach, "Linear Algebra: Vector Spaces and Operators", October 21, 2013; end of section 7, eqs. (7.27)–(7.45), extracted with pdftotext -raw)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-4/ (read: Zwiebach, "Dirac's Bra and Ket Notation"; section 3, eqs. (3.87)–(3.113), extracted with pdftotext -layout and -raw)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-5/ (read: Zwiebach, "Uncertainty Principle and Compatible Observables"; section 1, eqs. (1.1)–(1.13), and the opening of section 2)
  - Lecture 10 transcript, p. 1 read only to check the `leadsTo` claim
verdict: pass-with-notes
---

# Review: Hermitian and unitary operators, position states and uncertainty

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Uncertainty", end of first paragraph: "The uncertainty is zero **if and only if** the state is an eigenstate; the second half uses that only the zero vector has zero length" | Transcript p. 18: the half "everybody knows" is eigenstate ⇒ no uncertainty; "the second part" is no uncertainty ⇒ eigenstate, and that part uses the zero-norm fact. | The page presents the halves in the opposite order (first "If $\Delta A = 0$ … eigenstate", then "Conversely, in an eigenstate …"), so "the second half" now points at the converse, which does not use the zero-norm fact. | Name the direction: "the step from zero uncertainty to an eigenstate uses that only the zero vector has zero length". |
| 2 | warning | "Unitary operators": the operator is $S$ until $(Su, Sv) = (u, v)$, then $f_i = Ue_i$ and the curiosity paragraph use $U$ | Transcript p. 6: Zwiebach explicitly switches letters ("I'll change to a letter U … most books in physics call it U"); the notes use $U$ throughout. | Switches from $S$ to $U$ without a word. | Either keep one letter, or add "(Zwiebach switches here to $U$, the usual letter for a unitary operator)". |
| 3 | info | Formula "The orthogonal part", `at="eq. (1.13)"` | Notes (1.13) is only $A\psi - \langle A\rangle\psi = \psi_\perp$; the check $(\psi, \psi_\perp) = \langle A\rangle - \langle A\rangle = 0$ is in the sentence after it and on the board, transcript p. 21. | Cites (1.13) for both parts. | `at="eq. (1.13) and the text after it"`, or mention transcript p. 21 in the sentence before. |
| 4 | info | Opening: "notes chapter 3, section 7" | Section 7 starts with adjoints (eqs. (7.1)–(7.30)), which were Lecture 8. This lecture uses only (7.31)–(7.45). | Implies the whole section. | "chapter 3, end of section 7 (eqs. (7.31)–(7.45))". |
| 5 | info | Quiz 1 explanation: "Absolute value 1 is the property of unitary operators" | Neither the lecture nor the notes chapter 3 proves that eigenvalues of unitary operators have modulus 1 (it follows at once from $|Su| = |u|$). | States it as known. | True, so optional: "(eigenvalues of unitary operators, since $|Sv| = |\lambda||v|$)". |
| 6 | info | Flashcard "Unitary operator": "Then the null space is zero, $S^\dagger S = I$ (so $S^\dagger$ is the inverse)" | Notes (7.37)–(7.40): invertibility needs surjectivity in infinite dimensions; the transcript (p. 6) assumes left inverse = right inverse. | Unqualified. | Fine in finite dimensions; optionally add "(surjective, in infinite dimensions)". |
| 7 | info | "Position states": "(transcript pp. 8–9; notes chapter 4, eq. (3.87))" for the $|ax\rangle$ vs $a|x\rangle$ remark | The remark is in the text just after (3.87) (notes p. 11). | Cites the equation number. | Acceptable; "after eq. (3.87)" would be exact. |

All other citations were checked against the extracted text and are correct:
- Notes chapter 3: (7.31)–(7.32) real eigenvalues; (7.34)–(7.36) orthogonality (the notes also write $(\lambda_1 - \lambda_2)(v_1, v_2) = 0$ after computing $(v_2, v_1)$, as the page does); (7.37) definition, with surjectivity required "to be useful even for infinite dimensional spaces" (page states this correctly); (7.39)–(7.40) $U^\dagger U = I$; (7.43) orthonormal basis mapped to orthonormal basis; (7.45) same matrix elements in both bases, with the puzzle "Can you find an explanation for this result?". The chain $(f_k, Uf_i) = (Ue_k, Uf_i) = (e_k, f_i) = (e_k, Ue_i)$ matches (7.45) exactly.
- Notes chapter 4: (3.88) $\langle x|y\rangle = \delta(x - y)$; (3.89)–(3.90) completeness and the check on $|y\rangle$; (3.91) $\hat x|x\rangle = x|x\rangle$; (3.94) $\psi(x) = \langle x|\psi\rangle$; (3.95) superposition; (3.96)–(3.97) overlap and $\hat x$ matrix element; (3.98) momentum basis with $\langle p'|p\rangle = \delta(p - p')$; (3.100) $\langle x|p\rangle = e^{ipx/\hbar}/\sqrt{2\pi\hbar}$; (3.107) Fourier transform with $e^{-ipx/\hbar}$; (3.112) $\langle x|\hat p|\psi\rangle = (\hbar/i)\,d\psi/dx$; (3.113) $i\hbar\,d\tilde\psi/dp$. Each matches in content and notation. "Normalisation chosen to match the delta functions" is (3.101)–(3.102). The calcs file's (3.109) for $p\langle x|p\rangle = (\hbar/i)\,d/dx\,\langle x|p\rangle$ is right.
- The derivation of $(x, \hat p\psi)$ on the page (insert momentum states, $\hat p$ on eigenstates, $p$ as $(\hbar/i)\,d/dx$, derivative out of the $p$ integral because nothing else depends on $x$, remove the identity) follows (3.108)–(3.112) and transcript pp. 13–14 step by step.
- Notes chapter 5: (1.2) definition $\Delta A(\psi) = |(A - \langle A\rangle I)\psi|$ for normalised $\psi$; (1.3)–(1.5) the iff proof; (1.9) $(\Delta A)^2 = \langle A^2\rangle - \langle A\rangle^2$, reached by moving the Hermitian $A - \langle A\rangle I$ across ((1.6)–(1.8)) as the page says; (1.10) $\langle A^2\rangle \ge \langle A\rangle^2$; (1.11)–(1.12) projector $|\psi\rangle\langle\psi|$ and projection $\langle A\rangle\psi$; (1.13) $\psi_\perp$. All correct.
- Transcript: 2×2 homework on the Lecture 8 theorem (p. 1); Hermitian ⇔ real expectation values, bracket form (pp. 1–2); diagonalisation postponed (p. 2); Theorem 1 (pp. 2–3); Theorem 2, degeneracy "makes life really interesting" (pp. 3–4); proof with $(v_2, Tv_1)$ using real eigenvalues (p. 4); unitary definition, "isometry" (p. 5); $\lambda I$, $|\lambda| = 1$ (p. 5); null space zero, invertible (pp. 5–6); $S^\dagger S = I$ and the left/right-inverse assumption (p. 6); inner products preserved, orthonormal bases, same matrix elements as a puzzle (p. 7); student question on unitary relation between orthonormal bases, answered "Yes" (p. 8); Dirac notation prevents a confusion (p. 8); $|ax\rangle$, $|-x\rangle$, 3D label (p. 9); non-denumerable (pp. 9–10); delta inner product, not normalisable, identity with no factor, $\hat x$ eigenstates, wavefunction (p. 10); superposition (p. 11); overlap (p. 11) and $\hat x$ matrix element (pp. 11–12); momentum states and $\langle x|p\rangle$ (p. 12); Fourier transform (pp. 12–13); $\langle x|\hat p|\psi\rangle$ (pp. 13–14); "delta functions", big circle, unbounded operators (pp. 14–15); uncertainty needs a state (p. 16); norm as definition (p. 17); iff and normalisation remark (pp. 17–18); squaring (pp. 18–19); standard deviation remark and $\langle A^2\rangle \ge \langle A\rangle^2$ (p. 20); picture (pp. 20–21), "suggestive", "not very well known" (p. 20); Schwarz inequality with $f$, $g$ (p. 22). All page citations correct.

## Arithmetic and answer checks
Recomputed by hand:
- $(\psi, \psi) = 9/25 + 16/25 = 1$. $A\psi = (3/5, -4/5)$; $\langle A\rangle = 9/25 - 16/25 = -7/25$. Correct.
- $A^2 = I$, $\langle A^2\rangle = 1$, $(\Delta A)^2 = 1 - 49/625 = 576/625$, $\Delta A = 24/25$. Correct. Independent check: outcomes $\pm 1$ with probabilities $9/25$, $16/25$ give variance $4 \cdot (9/25)(16/25) = 576/625$.
- $\langle A\rangle\psi = (-21/125, -28/125)$; $\psi_\perp = (75/125 + 21/125, -100/125 + 28/125) = (96/125, -72/125)$. Correct.
- $(\psi, \psi_\perp) = (3 \cdot 96 - 4 \cdot 72)/625 = (288 - 288)/625 = 0$. Correct.
- $|\psi_\perp|^2 = (9216 + 5184)/15625 = 14400/15625$; $\sqrt{14400}/125 = 120/125 = 24/25$. Correct, matches $\Delta A$.
- Quiz 1 (answer 0, real): correct; explanation correct (see finding 5 for the unitary remark).
- Quiz 2 (answer 0, $S^\dagger S = I$): correct; the explanation's use of the complex-space theorem is right. Distractors are false in general ($S = iI$ is unitary, not Hermitian, $S^2 = -I$, and a non-diagonal rotation is a counterexample to the last).
- Quiz 3 (answer 0): correct (transcript p. 9). Note that even at $x = 0$, $2|0\rangle \ne |0\rangle$, so "Only for $x > 0$" is rightly wrong.
- Quiz 4 (answer 0, exactly eigenstates): correct; explanation correct for normalised states.
- Flashcards: all three correct (see finding 6).
- `calcs/8.05/hermitian-unitary-position-states.yaml`: nine entries, all match the page; `npm run calc:test -- -k hermitian-unitary`: 9 passed. Thin spot (info): the components of $\langle A\rangle\psi = (-21/125, -28/125)$ are only checked implicitly through `ex-psi-perp-1/2`, whose `shown` for entry 2 points at the $\langle A\rangle\psi$ string; optional to add direct entries.

## Coverage and order
- The page follows the transcript's order exactly: Lecture 8 theorem recap and homework → Hermitian real expectation values → Theorem 1 → Theorem 2 with degeneracy → unitary operators (definition, $\lambda I$, invertible, $S^\dagger S = I$, inner products, orthonormal bases, matrix-element puzzle, student question) → position states → momentum states and $\langle x|p\rangle$ → Fourier transform → $\langle x|\hat p|\psi\rangle$ → Q&A on delta functions and unbounded operators → uncertainty definition → iff → squared form → geometric picture → pointer to the Schwarz-inequality proof.
- Left out (minor): the second Q&A on Hilbert vs Banach spaces and convergence (p. 15); Zwiebach's request to read the notes (p. 8).
- Notes material not in the lecture and not on the page: $\hat x$ Hermitian (3.92)–(3.93), the delta-function justification (3.101)–(3.106) (summarised in one clause), $UU^\dagger = I$ from surjectivity (part of (7.40)). Acceptable.
- Added: the worked example (page's own).
- `leadsTo` 8.05 Lecture 10 ("The uncertainty principle, proved with the Schwarz inequality") matches transcript p. 22 ("We'll do it next time") and the Lecture 10 opening, which recaps this uncertainty definition before proving the principle.
- Prerequisites `adjoints-hermitian-operators` and `position-momentum-stern-gerlach` exist in `content/year-3/8.05/`. Source URL matches the `_course.json` Lecture 9 entry.

## Licensing
- Neither the Lecture 9 transcript nor notes chapters 3, 4, 5 carries an "All rights reserved" or "Courtesy of" notice (grep on all four texts): only the standard OCW Creative Commons header/footer. Nothing needs `courtesy:`.
- The page has no images. No OpenStax or LibreTexts material.
- No near-verbatim sentences found. Short quoted phrases ("makes life interesting", attributed) and standard terms ("non-denumerable", "isometry", "if and only if") are fine. Closest paraphrases: the 3D label/ket sentence (notes p. 11, rewritten) and "Zwiebach finds this picture suggestive, though he suspects it is not widely known" (transcript p. 20, attributed, rewritten). The worked example is original: neither source computes an uncertainty for a concrete 2×2 matrix.
- No em dashes on the page (grep for "—" found none).

## Notes
- The Dirac-brackets-in-prose convention with $(u, v)$ inside formulas is deliberate (read-aloud) and stated in the opening paragraph; not a finding.
- No `Callout kind="cosmology"`, appropriate for this lecture.
- "the only inequality relating norms to an inner product is the Schwarz inequality": Zwiebach says it is "the only inequality that can possibly give you the answer" (p. 22). The page's wording is slightly stronger than his but harmless in context; optionally attribute ("Zwiebach notes that…").
- The statement that position states cannot be normalised and are idealisations combines transcript p. 10 and notes p. 11; both support it.

## Resolution (2026-11-17, by the page author)

- Warning 1: the uncertainty proof now names the step explicitly: "the step from zero uncertainty to an eigenstate uses that only the zero vector has zero length".
- Warning 2: the switch from S to U is now announced (transcript p. 6).
- Info: the opening line cites notes chapter 3 eqs. (7.31)–(7.45); quiz 1's remark about unitary eigenvalues is marked as not shown here; the unitary flashcard mentions surjectivity in infinite dimensions; the |ax⟩ remark cites "after eq. (3.87)"; the orthogonality check cites the text after (1.13) and transcript p. 21. The calcs file is unchanged.
