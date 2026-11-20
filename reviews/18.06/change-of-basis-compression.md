---
page: content/year-2/18.06/change-of-basis-compression.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-31-change-of-basis-image-compression/ (read: transcript link, CC BY-NC-SA 4.0 notice, and the note that the videos were recorded in Fall 1999)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/ab1c275d516e1878176ce956af1bf246_0h43aV4aH7I.pdf (read: all 21 pages, text extracted per page with pdftotext -f N -l N; the PDF header reads "ocw-18.06-f99-lec31")
  - Strang, Introduction to Linear Algebra (textbook), section on change of basis / wavelets (could not read; see Licensing)
verdict: pass-with-notes
---

# Review: Change of basis and image compression

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Wavelets", last sentence of the "What makes a basis good" paragraph (JPEG 2000, FBI); also "JPEG: Fourier basis" (FBI story, p. 8) | The lecture was recorded in Fall 1999 (OCW lecture page; PDF header "f99-lec31"). Strang: "JPEG two thousand, which will be the next standard ... will include wavelets"; "the FBI uses a smoother wavelet" (p. 15); FBI digitising and compressing fingerprints, minutes instead of a week (p. 8). | States these without a date. The page cites the course as "Spring 2010", so a reader will take them as 2010 (or present-day) statements. | Attribute in time, per writing rule 5: "In this 1999 lecture Strang says JPEG 2000, then the coming standard, would include wavelets ...". Optionally add, marked as a later development, that JPEG 2000 (published 2000) does use wavelet transforms but did not replace JPEG for everyday photos; the FBI's smoother-wavelet standard is WSQ (I did not verify any FBI developments after 1999; keep any addition to what can be sourced). |
| 2 | warning | "JPEG: Fourier basis, then thresholding", first paragraph | Strang says JPEG uses "the Fourier basis" and points to his earlier lecture on the Fourier matrix with complex columns (p. 5). | Repeats this and links to the complex Fourier matrix page. | JPEG's 8 × 8 transform is the discrete cosine transform (a real, Fourier-type basis of cosines), not the complex Fourier matrix. Add a short bracketed note, e.g. "(strictly, JPEG uses the discrete cosine transform, a real cousin of the Fourier basis)". |
| 3 | warning | Worked example, step "(b) Change of basis": "the familiar $P$" | (not in the lecture) | $P$ is the pixel row $(6, 4, 5, 1)$ in part (a) of the same example, and the page's symbol meaning for $P$ is "A row of pixel values". Calling the projection matrix $P$ two steps later clashes, and the tap-to-explain popup will give the wrong meaning. | Write "the familiar projection matrix $\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$" without the letter $P$. |
| 4 | info | Bracketed note under "Columns of A" | Strang: "a11 down to a18, a21 down to a28, and so on" (p. 19), after writing $T(v_1) = a_{11}v_1 + a_{21}v_2 + \dots + a_{81}v_8$. | Corrects only the first ("its last entry is $a_{81}$"). | The second is the same slip (the second column is $a_{12}$ down to $a_{82}$). Optionally: "(Strang says '$a_{11}$ down to $a_{18}$, $a_{21}$ down to $a_{28}$'; the columns run $a_{11}, \dots, a_{81}$ and $a_{12}, \dots, a_{82}$.)". The note as written is correct. |
| 5 | info | Worked example (b) vs the formula $B = M^{-1}AM$ | p. 17: $B$ from $A$ with $M$ on one side, $M^{-1}$ on the other. | In the main text $A$ is the matrix in the first basis and $B$ in the second; in the example $A$ is the matrix in the new (eigenvector) basis and the standard one is $MAM^{-1}$. Correct, but the roles of $A$ and $B$ are reversed. | Optionally add "(here the standard basis is the first basis, so its matrix is $MAM^{-1}$ and $A = M^{-1}(\text{standard matrix})M$)". |
| 6 | info | "Reconstruction" Formula | Strang: "we take those coefficients, times their basis vectors" (p. 7), for the Fourier basis. | Uses $w_i$, which the page has not yet defined (it becomes the wavelets later), and the symbol meaning for $w_i$ says "(wavelet)". | Optionally say "with $w_i$ the basis vectors" before the formula, or widen the page's $w_i$ meaning to "the i-th basis vector (Fourier or wavelet)". |

Every formula and page citation was checked against the printed transcript pages:
- $x \in \mathbf{R}^n$, $n = 512^2$, p. 2: said on p. 2 ("x is a vector in R^n ... n is five hundred and twelve squared"). Correct. $2^9 \times 2^9$, 0 to 255, $2^8$, 8 bits, all p. 2; colour three times as long and "couldn't send out the image ... without compressing it", p. 3. Correct.
- $x \to c \to \hat c$, pp. 6–7: lossless change of basis and 64 in/64 out on p. 6, thresholding and "c hat ... with many zeroes" on p. 7. Correct.
- Reconstruction, p. 7: correct (said, not clear whether written).
- Haar basis of $\mathbf{R}^8$, pp. 9–10: first four vectors p. 9, the four $(1, -1)$ pairs p. 10. Correct.
- $P = Wc$, $c = W^{-1}P$, pp. 11–12: the combination $c_1w_1 + \dots + c_8w_8$ and $W$'s columns on p. 11, "P = W C ... W inverse P" on p. 12. Correct.
- $x = Wc$, p. 15: correct.
- $B = M^{-1}AM$, p. 17: Strang states it in words ("M on one side, and M inverse on the other ... M will be the change-of-basis matrix"); "admittedly, compressed" also p. 17; "M could be the same as the W" p. 18. Correct.
- Columns of $A$, p. 19: correct, including "sixty four numbers".
- Eigenvector basis, $A = \Lambda$, p. 20 (setup at the end of p. 19): correct; "too expensive", "something cheaper", p. 20. Correct.

Other claims checked: compressed lectures, jerky motion, board clear (p. 1); data sources and lossless vs lossy (p. 2); JPEG name, correlated neighbouring pixels, blue shirt, board (p. 3); "lousy", all-ones and checkerboard vectors (p. 4); half and half, "billion-dollar decision", DC vector, 8 × 8 blocks (p. 5); all-ones coefficient usually large, high frequency barely present, 3 of 64 terms, 21 to 1 (p. 7); FBI (p. 8); video prediction and correction (pp. 8–9); wavelets as "the competition for Fourier" (p. 9); checkerboard = sum of last four wavelets (p. 10); FFT and fast wavelet transform (p. 12); ones, minus ones, zeros, orthogonal, dot product of first two is zero, lengths $\sqrt8$, $\sqrt4$, $\sqrt2$ (p. 13); orthonormal so inverse = transpose, 90% of pixels thrown away darkens the picture, dropping $c_5, \dots, c_8$ loses only small blips (p. 14); rotation as the example of $T$ (p. 16). All agree with the transcript.

## Arithmetic and answer checks
- `npm run calc:test -- -k change-of-basis`: 14 passed.
- $512^2 = 2^{18}$; $256 = 2^8$; $8 \times 8 = 64$; $64/3 = 21.3$ ("about 21 to 1"). Correct.
- Worked example (a), recomputed: $w_1^TP = 16$, $/4 = 4$; $w_2^TP = 6 + 4 - 5 - 1 = 4$, $/4 = 1$; $w_3^TP = 2$, $/2 = 1$; $w_4^TP = 4$, $/2 = 2$. $4w_1 + w_2 + w_3 + 2w_4 = (6, 4, 5, 1)$. Correct. The four wavelets are mutually orthogonal (checked all six dot products), so $c_i = w_i^TP/w_i^Tw_i$ is valid.
- "Keep only the two largest": $c_1 = 4$ and $c_4 = 2$ are the two largest, both as raw coefficients and by energy $c_i^2\lVert w_i\rVert^2$ (64, 4, 2, 8), so the choice is the same either way. $\hat P = (4, 4, 6, 2)$; error $P - \hat P = (2, 0, -1, -1) = w_2 + w_3$. Correct.
- Worked example (b): $(1,1)/\sqrt2$ lies on the 45° line (eigenvalue 1), $(1,-1)/\sqrt2$ is perpendicular (eigenvalue 0), so $A = \operatorname{diag}(1, 0)$. $M$ is symmetric and orthogonal, $M^{-1} = M$. $MAM^{-1} = \frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$, the standard projection onto the line through $(1, 1)$. Correct.
- calcs file: every entry matches the page. `ex-proj` only checks entry (1, 1) and `ex-error` encodes two components as one number; acceptable, though a check of all four entries of $MAM^{-1}$ would test more.
- Quiz 1: answer 1. Correct; explanation matches p. 14.
- Quiz 2: answer 2 (thresholding). Correct (pp. 6–7).
- Quiz 3: answer 1 (sum of the four shortest wavelets). Correct (p. 10). Distractor 3 gives $(-1, -1, -1, -1, 3, 3, 3, 3)$, not the checkerboard; fair.
- Quiz 4: answer 1 ($B = M^{-1}AM$). Correct (p. 17).
- Flashcards: all four correct.

## Coverage and order
- The page follows Strang's order: compressed lectures (p. 1), image as a vector (pp. 2–3), standard basis vs better basis (pp. 3–5), JPEG with 8 × 8 blocks, lossless then lossy (pp. 5–7), FBI and video (pp. 8–9), Haar wavelets (pp. 9–10), $P = Wc$ (pp. 10–12), fast and good (pp. 12–15), change of coordinates (p. 15), similar matrices (pp. 16–18), matrix of $T$ recap (pp. 18–19), eigenvector basis (pp. 19–20).
- Small omissions (info only): the "giant politics" of TV vs movie people over the basis (p. 5); the reason $\pm1$, 0 entries are fast ("just in binary", p. 13); high frequency described as noise or jitter (p. 7); the FBI's facility in West Virginia (p. 8). None is needed.
- Additions: the worked example only.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched both text files). The OCW lecture page shows CC BY-NC-SA 4.0.
- No OpenStax or LibreTexts material.
- Quoted phrases ("lousy", "a billion-dollar decision", "admittedly, compressed" in paraphrase) are short and attributed; no verbatim paragraphs.
- Worked example: the lecture has no numerical example, so it is not copied from the transcript. **Uncertain:** I have a recollection (not verified, the textbook was not read and a web search failed) that Strang's *Introduction to Linear Algebra*, in its change-of-basis/wavelet section, uses a four-pixel Haar example with the same signal $(6, 4, 5, 1)$ and coefficients $(4, 1, 1, 2)$. If so, part (a) would be too close to Strang's book. Since this cannot be ruled out, consider changing the pixel values (for example $(7, 5, 2, 2)$, giving $c = (4, 2, 1, 0)$) and updating the calcs file. Part (b) is a standard exercise and is not a concern.

## Notes
- `leadsTo` 18.06 Lecture 33 with "(Lecture 32 is a quiz review)" matches `_course.json` and p. 21 ("quiz review on Wednesday").
- Prerequisites `linear-transformations-matrices`, `complex-matrices-fft`, `similar-matrices-jordan-form` all exist.
- No `Callout kind="cosmology"`; no cosmology claims to check.
- No em dashes on the page.
- Symbol meanings for the page exist in `data/symbols.json`; the only problem found is the $P$ clash in finding 3 (and $w_i$ in finding 6).

## Resolution (2026-11-16, by the page author)

1. The JPEG 2000 and FBI remarks are now dated: "in this lecture, recorded in 1999", "as of 1999".
2. Added that JPEG strictly uses the discrete cosine transform, and that Strang does not go into the details of the Fourier basis.
3. The worked example's last step now says "the familiar projection matrix of the last lecture" instead of the letter P.
4. The slip note now covers both columns (a₁₈ for a₈₁ and a₂₈ for a₈₂).
5. Added that in the example the eigenvector basis plays the role of the first basis.
6. w_i is now introduced in the text, and its meaning reads "basis vector (Fourier or wavelet)".
7. The pixel row is now (7, 5, 2, 2), with coefficients (4, 2, 1, 0) and compressed row (6, 6, 2, 2); calcs updated to match.

Status set to reviewed.
