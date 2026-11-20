---
page: content/year-4/8.09/moment-of-inertia-tensor.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf (read: rendered images of printed pp. 37-44, plus the text layer)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_2/ (not read separately; it is the landing page of the same PDF)
verdict: needs-changes
---

# Review: The moment of inertia tensor: kinetic energy, angular momentum and principal axes

Source: Stewart's typed notes, Chapter 2, Section 2.3, printed pp. 37-44. There is no video or transcript. I checked every equation against the rendered page images, not the garbled text layer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Principal axes", the sentence after (2.57) | p. 42: "Here $U^\top = [\xi^{(1)}\ \xi^{(2)}\ \xi^{(3)}]$, where the eigenvectors fill out the columns". That is $U^T$ with the eigenvectors as columns, so the eigenvectors are the rows of $U$. This agrees with $I' = UIU^T$ (2.55): $(UIU^T)_{\alpha\beta} = \xi^{(\alpha)}\cdot I\cdot\xi^{(\beta)} = \lambda_\alpha\delta_{\alpha\beta}$. | "(The notes write $U$ itself as having the eigenvectors as columns; with the convention $I' = UIU^T$ of (2.55), the eigenvectors are the rows of $U$.)" | This blames the notes for a slip they do not make. The page's own formula, $U^T = (\xi^{(1)}\ \xi^{(2)}\ \xi^{(3)})$, is exactly what the notes print. Delete the bracketed remark, or replace it with "as in the notes". |
| 2 | warning | "Angular momentum" section, tilted dumbbell (eqs. 2.51-2.53) | The dumbbell example comes after the parallel axis theorem (2.45-2.50), on pp. 40-41, and before the rotation of axes (2.54). | The dumbbell is moved up to straight after (2.44), before (2.45). The equation numbers therefore run 2.44, 2.51-2.53, 2.45-2.50, 2.54, and the page does not say that it changed the order. | Either say briefly that the example is moved up so it sits next to $\vec L = I\cdot\vec\omega$ (the notes give it after the parallel axis theorem), or put it back in the notes' order. |
| 3 | info | "Principal axes", (2.63) and (2.65), marked "(corrected)" | (2.63) prints $I_2 = I_3 = \tfrac{1}{12}ma^2$. (2.65) prints $\tfrac{ma^2}{6}\,\mathrm{diag}(1, \tfrac12, \tfrac12)$, which also means $\tfrac{1}{12}$. | $\tfrac{11}{12}ma^2$, with a note that the notes misprint it. | None. I confirmed the slip independently: the notes' own (2.61) has the double root $\tfrac{11}{12}$; $I\cdot(1,-1,0) = ma^2(\tfrac23 + \tfrac14)(1,-1,0) = \tfrac{11}{12}ma^2(1,-1,0)$; the trace is $3\cdot\tfrac23 = 2 = \tfrac16 + 2\cdot\tfrac{11}{12}$; the parallel axis theorem gives $\tfrac16 + \tfrac34 = \tfrac{11}{12}$. The correction is right and flagged properly. |
| 4 | info | "Principal axes", positivity | p. 41: the $I_\alpha$ are "real and positive". | Real and $\ge 0$; zero for an idealised body lying on one line. | None. This is correct, and the page says how it differs from the notes. |
| 5 | info | Dumbbell set-up | p. 40: "different separations $r_1$ and $r_2$ from the axis of rotation". But (2.51) makes $r_1$ and $r_2$ distances from the origin along the rod. | "at distances $r_1$ and $r_2$ on either side" of the origin. | None. The page silently uses the reading consistent with (2.51). It could add a short bracketed note, but this is not required. |
| 6 | info | Dumbbell, after (2.53) | The notes only say "L is not parallel to ω". Their figure draws $\vec L$ perpendicular to the rod. | Adds three points: $\vec L \propto (0,-\cos\alpha,\sin\alpha)$ is perpendicular to the rod; the bearings must supply a torque; an unbalanced wheel shakes its axle. | None. All three are correct (calcs `dumbbell-L-perp-rod`) and are standard physics, though they go beyond the notes. |
| 7 | info | "Symmetry often shows the axes", cylinder | p. 42: a cylinder with its central axis along $z$, origin drawn at its middle. | "about a point on its axis". | Correct, and slightly more general: rotational symmetry about $z$ keeps the $x$ and $y$ axes principal at any point on the axis. |
| 8 | info | Quiz 3 explanation | Not in the notes. | "The columns of that matrix are the principal axes." | True for the convention $A = ODO^T$, but on this page the matrix that diagonalises is $U$ in $UIU^T$, whose **rows** are the axes. A reader could be confused. Suggest "the columns of $U^T$". |

## Arithmetic and answer checks
- **Equation citations.** All 29 cited equations (2.34)-(2.65) match the notes in content and printed page: (2.34)-(2.35) p. 37; (2.36)-(2.42) p. 38; (2.43)-(2.46) p. 39; (2.47)-(2.51) p. 40; (2.52)-(2.56) p. 41; (2.57)-(2.58) p. 42; (2.59)-(2.64) p. 43; (2.65) p. 44. Page-range citations are also right: dumbbell pp. 40-41, symmetry p. 42, cube pp. 43-44, section pp. 37-44.
- **Formula fidelity.** (2.48): the notes' brackets are ambiguous as typeset; the page writes the expansion correctly. (2.50): the page drops the notes' middle step $MR^2[1-\cos^2\theta]$, which is harmless, and defines $\theta$ consistently with $\hat n\cdot\vec R = R\cos\theta$. (2.52) and (2.53): identical to the notes. Calcs `dumbbell-Izz` and `dumbbell-Iyz` check (2.52) from the positions in (2.51).
- **Cube.** $I_{xx} = 2/3$ and $I_{xy} = -1/4$, in units of $ma^2$, are correct. The characteristic polynomial factors as $(\tfrac{11}{12}-\lambda)^2(\tfrac16-\lambda)$, which I checked by expanding. $(1,1,1)$ belongs to $\tfrac16$, since each row sums to $\tfrac23 - \tfrac12$. $(1,-1,0)$ and $(1,1,-2)$ belong to $\tfrac{11}{12}$ and are orthogonal to each other and to $(1,1,1)$. About the centre, $I = \tfrac16 ma^2\,1$. Corner to centre: $R = \tfrac{\sqrt3}{2}a$, so $R^2 = \tfrac34 a^2$, and $(1,1,1)\perp(1,-1,0)$, which gives $\tfrac16 + \tfrac34 = \tfrac{11}{12}$. The full matrix check also works: $\tfrac16\,1 + (\tfrac34\delta_{ab} - \tfrac14)$ gives $\tfrac23$ on the diagonal and $-\tfrac14$ off it, which is (2.60).
- **Worked example (square plate, page's own).** $I_{xx} = I_{yy} = \tfrac13$, $I_{zz} = \tfrac23$, $I_{xy} = -\tfrac14$, $I_{xz} = I_{yz} = 0$: correct. In-plane eigenvalues are $\tfrac1{12}$ along $(1,1)$ and $\tfrac7{12}$ along $(1,-1)$, and they sum to $\tfrac23 = I_{zz}$. Parallel axis check: $R = (a/2, a/2, 0)$, correction $xx = \tfrac12 - \tfrac14 = \tfrac14$ and $xy = -\tfrac14$, giving $I^{CM}_{xx} = \tfrac1{12}$ and $I^{CM}_{xy} = 0$. All correct. (Not on the page, but consistent: $I^{CM}_{zz} = \tfrac23 - \tfrac12 = \tfrac16$.) The example is original; the notes have no plate example.
- **Plot.** $\hat n\cdot I\cdot\hat n = \tfrac13 - \tfrac12\sin\beta\cos\beta = \tfrac13 - \tfrac14\sin2\beta$. At $\beta = 45°$ this is $0.08333$, the minimum; at $135°$ it is $0.58333$, the maximum. The range $[0, 0.7]$ contains the curve. The caption is correct. "Where the curve is flattest" is loose wording for a stationary point but not wrong.
- **Quiz.** Q1: $\vec L = (I_{xz}, I_{yz}, I_{zz})\,\omega = (0, I_{yz}\omega, I_{zz}\omega)$, so answer 1 is correct. Q2: answer 1 ($\tfrac1{12}$ along the diagonal, $\tfrac7{12}$ across it) is correct. Q3: answer 1 is correct (see row 8 on its explanation). Q4: an edge lies at $a/\sqrt2$ from a parallel axis through the centre, so $I = \tfrac16 + \tfrac12 = \tfrac23$. Answer 2 is correct and equals $I_{zz}$ about the corner. The four choices are all different values ($\tfrac16, \tfrac5{12}, \tfrac23, \tfrac{11}{12}$).
- **Flashcards.** All five are correct and agree with the notes.
- **Frontmatter summary.** "ma²/6 and 11ma²/12 twice" is correct.
- **Calcs file.** I checked each entry against the page by hand; the expected values match. I did not run `npm run calc:test` or `content:check`.

## Coverage and order
- Every part of Section 2.3 is covered:
  - the split of $T$
  - the tensor (discrete and continuous)
  - the matrix form
  - the special case of one rotation axis
  - $\vec L = I\cdot\vec\omega$ and $T_R = \tfrac12\vec\omega\cdot\vec L$
  - the remark that $I$ depends on both origin and orientation
  - the parallel axis theorem and its one-axis form
  - the dumbbell
  - rotated axes
  - diagonalisation and the principal axes as an eigenvalue problem
  - the CM remark
  - the plate, sphere and cylinder symmetry examples
  - the cube, and the centre-of-cube remark
- The order is the notes' order except for the dumbbell (row 2).
- The page adds its own square-plate example and a plot.

## Licensing
- Notes: CC BY-NC-SA. I found no "rights reserved" or "Courtesy of" notice in the Chapter 2 text layer.
- None of the notes' figures is redrawn: not the parallel-axis vectors, dumbbell, plate, sphere, cylinder or cube. The plot is generated from a formula.
- Paraphrase is acceptably distant. The closest passage is the remark that a Hermitian matrix is diagonalised by a unitary one and has real eigenvalues and orthogonal eigenvectors, which echoes the notes' sentence on p. 41 but is restructured and shorter. The remaining sentences are rewritten.
- No OpenStax or LibreTexts material.

## Notes
- The three slips the author flagged:
  - (2.63)/(2.65) $\tfrac1{12}$ vs $\tfrac{11}{12}$: confirmed as a real slip.
  - "Positive" vs non-negative: the page's wording is better.
  - "U with eigenvectors as columns": **not a slip in the notes.** The notes write $U^\top$ with eigenvectors as columns (p. 42), which is consistent with (2.55). See row 1.
- Prerequisite slugs all exist: `rotating-frames-coriolis-force` (8.09), `moment-of-inertia` and `angular-momentum-rigid-body` (8.01), `symmetric-matrices-positive-definite` (18.06). Inline link URLs `/courses/8-01/...` and `/courses/18-06/...` match the slug format used elsewhere.
- The intro says the 8.01 page already noticed that an unsymmetric body can have off-axis angular momentum. That page's summary and quiz do say this, so the claim is correct.
- `leadsTo` targets:
  - 8.09 2.4 is "Euler Equations".
  - 8.09 3.1 is "Simultaneous Diagonalization of T and V".
  - 8.962 Lecture 2 is "Introduction to Tensors".

  Each reason fits its target. The 8.962 claim (a transformation law defines a tensor) matches the notes' own remark after (2.55).
- I found no em dashes on the page.
- Not checked: symbol entries in `data/symbols.json` and the label placement of the plot, because content:check was not run.

## Resolution (2026-11-19, by the page author)

- Error (U with eigenvectors as columns): the bracketed remark blaming the notes is removed; the page now says, as the notes do, that U^T has the eigenvectors as columns, so they are the rows of U.
- Warning (order): the dumbbell example stays next to L = I · ω, with a bracketed note that the notes give it after the parallel axis theorem.
- Info (quiz 3 explanation): now "the principal axes are the columns of the transpose of that matrix".
- Other info items: no change needed.
