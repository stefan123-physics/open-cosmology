---
page: content/year-4/8.09/stokes-flow-sphere.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: local copy, rendered page images of printed pp. 123, 129, 135-141 checked equation by equation; pdftotext for the rest)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (not opened separately; it is the resource page of the same PDF)
  - MIT 8.09 Chapter 7 notes (local text copy, read for the leadsTo check)
verdict: pass-with-notes
---

# Review: Stokes flow past a sphere, drag, eddies and turbulence

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Pressure and vorticity", sentence after (6.141) | p. 136: "unlike the ideal fluid case, there is now a non-zero vorticity in the fluid here." Nothing about where the vorticity comes from. | "the viscous flow carries vorticity, made at the sphere's surface (p. 136)" | The clause "made at the sphere's surface" is physically right but not in the notes at that citation. Drop it, or mark it as the page's own remark. |
| 2 | warning | "Stokes' drag", parenthesis after (6.152) and the sentence before (6.153) | (6.152) $F_{Dj}=\int_{\partial V} dS_i(P\delta_{ij}-\sigma_{ij})$, then $d\vec S=\hat r a^2\,d\cos\theta\,d\phi$ and (6.153). The direction of $dS$ is not stated. | Says $dS$ in (6.152) is the fluid boundary's normal pointing into the sphere, so the sign matches (6.117). Then, in the next sentence, uses $d\vec S=\hat r\,a^2\ldots$, which points out of the sphere. | The parenthesis is correct (6.117 has $\mathcal F_i=-n_j(P\delta_{ji}-\sigma_{ji})$ with $\hat n$ out of the body surface, so (6.152) needs $dS=-\hat n\,dA$). But (6.153) is then (6.117) used with $\hat n=\hat r$, i.e. (6.152) with the sign of $dS$ flipped. As written, a reader sees two opposite directions for $dS$ one sentence apart. Add a clause such as "with the outward normal $\hat r$ of the sphere, the integrand is $-n_j(P\delta_{ij}-\sigma_{ij})$ of (6.117):". I checked (6.153) term by term: $-P\cos\theta+\sigma_{rr}\cos\theta+\sigma_{r\theta}(\hat\theta\cdot\hat x)$ with $\hat\theta\cdot\hat x=-\sin\theta$. It is correct and gives $+6\pi\eta au$ downstream. |
| 3 | info | (6.150) and the bracket after it | p. 137 prints $f=ka/2r+ka^3/6r^3$, "integration constant set to zero to satisfy the boundary condition at $r=\infty$", then "$f(1)=1$ … requires $k=-3/2$". | $f=1+ka/2r+ka^3/6r^3$ under the (6.150) citation, with a bracket explaining the slip. | Verified independently: $f'=(k/2)(-x^{-2}-x^{-4})$ from (6.144) and (6.149), so $f=C+(k/2)(1/x+1/3x^3)$. $f\to1$ needs $C=1$, and no slip needs $f(1)=0$, so $k=-3/2$. The notes' own (6.151) has $f=1-3a/4r-a^3/4r^3$, which equals the corrected $f$ at $k=-3/2$. The notes' printed version ($C=0$, $f(1)=1$) would give $k=+3/2$. The corrected formula under the citation is acceptable because the bracket follows at once and says what differs (AGENTS rule 4). Optional: add "corrected" to the `at=` text, e.g. `at="Section 6.8, eq. (6.150), p. 137 (constant 1 restored)"`. |
| 4 | info | "Stokes' drag", lift sentence | p. 138: lift forces "that are tangential to direction of the fluid flow". | Lift is perpendicular to the oncoming flow, with a bracket noting the notes' wording. | Verified: lift is by definition the force component perpendicular to the oncoming flow. The bracket is correct. No change needed. |
| 5 | info | Sentence before (6.149) | p. 137: "This fixes $C_0 = 0$ and $C_5$" (the text writes $C_5$; the equation is $C_{-5}=-k/2$). | $C_0 = 0$ and $C_{-5}=-k/2$ | The page silently corrects the typo $C_5\to C_{-5}$. It is harmless and does not need a bracket. |
| 6 | info | "Eddies…", $10\lesssim R\lesssim100$ bullet | "As R increases, the flow … looses its steady nature, with the time dependence emerging … through oscillations of the vortices." | "Towards the top of the range the flow stops being steady and the vortices begin to oscillate" | This is a fair reading. "Towards the top of the range" is an interpretation (the notes only say "as R increases"). Acceptable. |

## Arithmetic and answer checks
- Equations (6.135) to (6.155): each `<Formula>` was compared with the rendered pp. 135-138. The notation, structure and equation numbers match, and the page numbers are right ((6.135)-(6.140) p. 135; (6.141)-(6.147) p. 136; (6.148)-(6.153) p. 137; (6.154)-(6.155) p. 138). The only deliberate difference is (6.150) (row 3).
- Checked independently: $n(n-1)+6n=n(n+5)$ gives the particular solution $C_{-3}=k/2$ and the homogeneous powers $0,-5$. $g(1)=0$ gives $C_{-5}=-k/2$. With $f$ from (6.144), the second equation of (6.146) holds for any $k$. The curl of (6.142) gives $\vec\Omega=(g/a^2-f'/ar)\,\vec u\times\vec r=ka\,\vec u\times\vec r/r^3$, which is consistent with (6.141).
- (6.154) on the sphere: $\partial_r v_r=0$ because $d/dx(1+k/x-k/3x^3)=0$ at $x=1$. $\sigma_{r\theta}=\eta\,\partial_r v_\theta=-\eta u\sin\theta f'(1)/a=-(3\eta/2a)u\sin\theta$, since $f'(1)=-k=3/2$ and the other two terms vanish at $r=a$. $P=P_0+k\eta u\cos\theta/a$. All correct.
- Drag: $a^2\cdot4\pi\cdot3\eta u/2a=6\pi\eta au$. The page's own split is right: pressure $(3\eta u/2a)a^2\,2\pi\int\cos^2\theta\,d\cos\theta=2\pi\eta au$, friction $4\pi\eta au$ (the standard 1/3 : 2/3).
- Plot: on the axis $f+x^2g=1+k/x-k/3x^3=1-3/2x+1/2x^3$ for $k=-3/2$. For the ideal flow, (6.86) on p. 123 (Section 6.4, sphere at rest, far velocity $-\vec u$) gives speed $u(1-R^3/r^3)$ on the axis. The caption's citation is correct. The values stay inside the range: 0 at $x=1$, 0.813 and 0.998 at $x=8$. The Stokes curve rises monotonically. The $1/r$ vs $1/r^3$ remark is correct.
- Droplet: $v=2(10^{-5})^2(1000)(9.81)/(9\cdot1.8\times10^{-5})=0.01211$ m/s (1.2 cm/s). $R=1.2\times0.0121\times10^{-5}/1.8\times10^{-5}=0.0081$. Buoyancy is $1.2/1000=0.12\%$. All correct. $R$ uses the radius, as the notes' $R=\rho ua/\eta$ for the sphere does (Section 6.7). "A droplet 100 times larger … leaves the Stokes regime" is true (Stokes would give 121 m/s and $R\sim10^4$).
- Quiz 1 (answer 1): correct; $\eta u/\rho a^2=(u^2/a)/R$. Quiz 2 (answer 1): correct, and the explanation is right. Quiz 3 (answer 1, 1.2 cm/s): correct; the distractors are far apart. Quiz 4 (answer 1): correct. "Within reach of a golf drive" is the page's own claim. It is plausible: at 70 m/s a golf ball has $R\approx1\times10^5$ (radius) or $2\times10^5$ (diameter), so it is near the smooth-sphere threshold, and dimples move the threshold below it.
- Flashcards: all six agree with the notes and with the checks above.
- Calcs file: every entry recomputed by hand. `g-equation`, `f-from-g`, `f-second-equation`, `k-from-f`, `notes-version-k`, `axis-speed`, `stokes-drag`, `pressure-share`, `droplet-*` and `quiz-droplet` are correct, and their `shown` strings match the page. `shear-on-sphere` checks only the $\partial v_\theta/\partial r$ term. The other two terms of $\sigma_{r\theta}$ vanish at $r=a$ (verified above), so this is fine, but its `where` could say so. `npm run calc:test` was not run (not requested; checks done by hand and with a short Python recomputation).

## Coverage and order
- The page follows Section 6.8 in order: setup and $R\ll1$ (p. 135); (6.135)-(6.137); Laplace for $P$; (6.138)-(6.141); (6.142)-(6.151); the symmetric stream-line figure (described in words, p. 137); drag (6.152)-(6.155); the dimensional-analysis remark; lift; "Dynamic Vortices and Turbulence" with all six $R$ regimes and their ranges (pp. 138-140); the four characteristics of turbulence and the everyday examples (p. 140); the turbulent boundary layer, drag drop, golf balls, baseball and tennis seams (p. 140); turbulence in pipes (pp. 140-141); the unsolved problem (p. 141). Nothing in the section is missing. The chapter ends on p. 141.
- Additions, all marked as the page's own: the on-axis speed plot, the 2π/4π split, the droplet example, the remark on clouds, and the explanation of the sign of $dS$.

## Licensing
- None of the notes' eight flow figures (pp. 137-141, including the pipe-profile sketch) is reproduced. The page describes them in words and says so. The plot is generated from formulas. The pages read carry no "All rights reserved" or "Courtesy of" notice. No OpenStax or LibreTexts material.
- The paraphrase is in the page's own wording throughout. The closest passages are the density remark after (6.137) and the turbulence characteristics (p. 140), which keep the notes' list order but are reworded. Acceptable.

## Notes
- leadsTo 8.09 Section 7.1 (Introduction to Chaos) is valid and exists in `_course.json`. Chapter 7 defines chaos as aperiodic behaviour with sensitive dependence on initial conditions, which fits "turbulence is technically chaotic". "In systems with few variables" is slightly narrow: Section 7.6.3, "Chaos in Fluids", returns to turbulence (Kolmogorov scaling). Optionally add a second leadsTo to 7.6.3, or soften the wording.
- There is no cosmology callout. None is needed for this section.
- The links `/courses/8-09/potential-flow` and `/courses/8-09/viscous-pipe-flow-reynolds` resolve to existing pages (course slug `8-09`). The prerequisites exist.

## Resolution (2026-11-19, by the page author)

1. Dropped "made at the sphere's surface" after (6.141).
2. Added a sentence after the (6.152) parenthesis: in practice one uses the sphere's outward normal r̂ and writes the integrand directly as the force per area (6.117), as in (6.153).
3.–8. No change (slip brackets kept; C₋₅ notation; reading of "as R increases"; calcs entry; golf remark).
9. leadsTo wording softened: Chapter 7 "studies chaos and non-linear dynamics, and returns to fluids at its end".
10. No change.

Status set to reviewed.
