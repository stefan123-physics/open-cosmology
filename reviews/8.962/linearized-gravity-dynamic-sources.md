---
page: content/year-5/8.962/linearized-gravity-dynamic-sources.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/74c32c0e424e0f751ce90b937405cb41_Oxk2nnuC130.pdf (read: Lecture 15 transcript, all 15 PDF pages, via the local text extraction; "transcript p. N" = N-th PDF page)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-15-linearized-gravity-ii-dynamic-sources/ (not opened separately; the lecture has no slides or notes, only the video and transcript)
  - https://arxiv.org/abs/gr-qc/0501041 (read: Flanagan & Hughes, "The basics of gravitational wave theory", Sec. 2 and 2.2, Eqs. (2.1)-(2.65), via pdftotext of the arXiv PDF)
  - content/year-5/8.962/_course.json, content/year-5/8.902/linear-perturbations.mdx, content/year-5/8.962/linearized-gravity-static-limit.mdx (read, for leadsTo and notation consistency)
verdict: pass-with-notes
---

# Review: Linearized gravity: dynamic sources and the true degrees of freedom

Board equations are mostly not read aloud in the transcript, so formulas were checked against what Hughes says, against Flanagan & Hughes (2005) Sec. 2.2, and by direct derivation in signature (−,+,+,+).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formulas "Scalar-vector-tensor split", "Gauge transformation of the new functions", "The gauge-invariant fields" (cite `flanagan-hughes`, "Sec. 2") and flashcards 3–4 | The lecture (transcript p. 8) names $h_{tt} = -2\phi$, which the page follows. The cited paper uses the opposite sign: Eq. (2.29) $h_{tt} = 2\phi$, Eq. (2.38) $\phi \to \phi - \dot A$, Eq. (2.45) $\Phi \equiv -\phi + \dot\gamma - \frac12\ddot\lambda$. | $h_{tt} = -2\phi$, $\phi \to \phi + \dot A$, $\Phi = \phi + \dot\gamma - \frac12\ddot\lambda$, all cited to the paper. The page's set is internally consistent (checked below) and agrees with the lecture, but a reader who opens the cited section finds different signs. | Add one bracketed sentence after the split, e.g. "[Hughes writes $h_{tt} = -2\phi$ in the lecture; the paper writes $h_{tt} = 2\phi$, so its $\phi$ is minus ours and its $\Phi$ reads $-\phi + \dot\gamma - \frac12\ddot\lambda$. $\Phi$ itself is the same.]" |
| 2 | warning | `leadsTo` 8.902 Lecture 13 | 8.902 Lecture 13 page (`linear-perturbations.mdx`) treats a Newtonian density contrast $\delta$ with fluid equations and Poisson's equation; it has no scalar-vector-tensor decomposition, no vector or tensor modes and no gauge discussion (grep for scalar/vector/tensor/gauge/decompos: no hits). | "A decomposition of the same scalar-vector-tensor kind, applied to an expanding universe, organises the linear perturbations from which structure grows." | Reword so the claim matches what that page contains, e.g. "8.902 follows the growth of the Newtonian density perturbation $\delta$ in an expanding universe: the scalar part of this split, in the limit where Poisson's equation holds." |
| 3 | warning | Callout `kind="cosmology"` and section "Splitting the metric" | Hughes (transcript pp. 7–8) credits Bertschinger, "sort of the grandfather of this idea", for cosmological perturbations. The paper itself (Sec. 2.2) says its presentation "is essentially the flat-spacetime limit of Bardeen's gauge-invariant cosmological perturbation formalism", with Bertschinger's lecture notes cited as "a similar treatment", and traces the radiative/coordinate distinction back to Eddington (1922). | Callout: "Bertschinger's version for an expanding universe is where the idea came from." (stated as fact). | Attribute it: "Hughes credits the idea to Bertschinger's work on cosmological perturbations; the paper describes its version as the flat-space limit of Bardeen's (1980) gauge-invariant formalism." |
| 4 | info | Reference `flanagan-hughes` `location: "Section 2"` and every `at="Sec. 2; …"` | The material is in Sec. 2.2 ("Global spacetimes with matter sources"): split Eqs. (2.29)–(2.36), gauge laws (2.37)–(2.44), invariants (2.45)–(2.47), source split (2.48)–(2.58), Einstein tensor (2.59)–(2.61), field equations (2.62)–(2.65). | "Section 2" / "Sec. 2". | Use "Sec. 2.2, Eq. (2.29)–(2.31)" etc. so each citation points at its equation numbers (AGENTS.md rule 2 asks for section/equation numbers). |
| 5 | info | Formula "A Coulomb field in a strange gauge" (cite reading1, transcript p. 6) | Hughes's potential uses a plane-wave phase $\sin(\vec k\cdot\vec r - \omega t)$, a length parameter $R$, and writes the time component as $+q/r$; a component falls as $1/r^3$ (p. 6). | Own version with a spherical phase $\sin(kr - \omega t)/r$ and $A_t = -q/r$; the text says "The page's own version of this". | Fine as is (it is clearly labelled as the page's own and is correct for lower-index $A_t$ in (−,+,+,+)). Optionally write `at="after transcript p. 6"` so the citation is not read as Hughes's exact expression. |
| 6 | info | Section "Splitting the metric" | "a paper that Eanna Flanagan … and I wrote about 16 years ago" (p. 8). The paper is New J. Phys. 7, 204 (2005); the lecture is Spring 2020, so about 15 years. | "about 16 years earlier" | Optional: "(published in 2005)" instead of repeating Hughes's round number. |
| 7 | info | Section "Is everything radiation?", last paragraph | "there's almost like a conservation of pain principle here" (p. 6), Hughes's phrase. | "There is almost a conservation of pain:" (unattributed). | Optional: "Hughes speaks of an almost 'conservation of pain'". |

Lecturer slips, checked:
- "beta minus one half epsilon" (p. 12, no time derivative) and "theta as 1/2 h minus Laplace operator on lambda" (p. 12, $\frac12$ for $\frac13$): both corrected on the page and flagged in brackets. Correct: the paper's (2.46)–(2.47) have $\frac13$ and $\dot\varepsilon_i$, and only those are invariant (checked below).
- p. 5: "the trace reverse perturbation that is measured at time t and position x prime" (the field point is $\vec x$, not $\vec x'$). The page does not repeat it. No note needed.
- p. 11: Hughes says "I left one out" and then gives only $h^{\text{TT}}$; the $\lambda$ and $\varepsilon_i$ laws are not spoken (probably on the board). The page takes them from the paper (2.42)–(2.43), which is correct. The transcription "H minus 2 nabla square root of c" is an auto-caption error for $\nabla^2 C$.
- The transcript writes the gauge-invariant vector as "psi i"; the paper's $\Xi_i$ (and auto-captions confusing "xi") make it near certain Hughes said "xi". The page's $\Xi_i$ is right.

## Arithmetic and answer checks
- Retarded Green's function: with $\Box = -\partial_t^2 + \nabla^2$ and $\nabla^2(-1/4\pi R) = \delta^3$, $G = -\delta(t - t' - R)/(4\pi R)$ solves $\Box G = \delta(t-t')\delta^3(\vec x - \vec x')$. Correct sign for this signature.
- Prefactor: $\int G\,(-16\pi G_N T) = (-1/4\pi)(-16\pi)G_N\int T(t-R)/R = 4G_N\int T(t-R)/R$. Correct; matches Hughes "multiply by 4G" (p. 5).
- Static limit $\bar h_{00} = 4G\int\rho/R = -4\Phi_N$: consistent with the Lecture 14 page ($\bar h_{00} = -4\Phi$).
- Sun example: $GM_\odot/c^2 = 1.32712\times10^{20}/8.98755\times10^{16} = 1476.6$ m. $4\times1476.6/1.496\times10^{11} = 3.948\times10^{-8} \approx 3.95\times10^{-8}$. $1.496\times10^{11}/2.998\times10^8 = 499.0$ s $= 8.32$ min. All correct.
- Gauge laws (derived independently from $h_{\mu\nu} \to h_{\mu\nu} - \partial_\mu\xi_\nu - \partial_\nu\xi_\mu$, $\xi_t = A$, $\xi_i = B_i + \partial_iC$, with $h_{tt} = -2\phi$): $h_{tt} \to -2\phi - 2\dot A$ gives $\phi \to \phi + \dot A$; $h_{ti} \to \beta_i + \partial_i\gamma - \dot B_i - \partial_i\dot C - \partial_iA$ gives $\beta_i \to \beta_i - \dot B_i$, $\gamma \to \gamma - A - \dot C$; $h_{ij}$ gains $-(\partial_iB_j + \partial_jB_i) - 2\partial_i\partial_jC$, and $\partial_i\partial_jC = (\partial_i\partial_j - \frac13\delta_{ij}\nabla^2)C + \frac13\delta_{ij}\nabla^2C$, giving $\varepsilon_i \to \varepsilon_i - 2B_i$, $\lambda \to \lambda - 2C$, $H \to H - 2\nabla^2C$. All seven match the page.
- Invariants: $\Phi$: $\dot A + (-\dot A - \ddot C) - \frac12(-2\ddot C) = 0$. $\Theta$: $(-2\nabla^2C) - \nabla^2(-2C) = 0$. $\Xi_i$: $-\dot B_i - \frac12(-2\dot B_i) = 0$. All invariant. With Hughes's spoken $\frac12 H$ instead of $\frac13 H$, $\Theta$ is still invariant only if $\nabla^2\lambda$ is also halved, so his spoken form is a slip; without the dot, $\beta_i - \frac12\varepsilon_i$ changes by $-\dot B_i + B_i \ne 0$. The page's corrections are right.
- Field equations: match the paper's (2.62)–(2.65) with $G$ restored. Consistency checks: $G_{tt} = -\nabla^2\Theta = 8\pi G\rho$; $G_{ti}$ divergence-free part $-\frac12\nabla^2\Xi_i = 8\pi GS_i$; the longitudinal part $-\dot\Theta = 8\pi GS$, with $\nabla^2S = \dot\rho$ (paper 2.56), agrees with the time derivative of $\nabla^2\Theta = -8\pi G\rho$. Correct.
- Newtonian check: $ds^2 = -(1+2\Phi_N)dt^2 + (1-2\Phi_N)d\vec x^2$ gives $\phi = \Phi_N$, $\gamma = \lambda = 0$, $H = -6\Phi_N$, $\Theta = -2\Phi_N$; $\nabla^2\Theta = -8\pi G\rho$ then agrees with $\nabla^2\Phi = 4\pi G\rho$. Matches the paper's remark "$\Phi$ reduces to $\Phi_N$, while $\Theta = -2\Phi_N$". Correct.
- Worked example step 3: $A = -\int\phi\,dt$ makes $\dot A = -\phi$, so the new $\phi$ is 0. Correct with the page's sign.
- Conservation relations quoted in words ("$\sigma$ and $\sigma_i$ similarly fixed by $P$, $S$ and $S_i$"): paper (2.57) $\nabla^2\sigma = -\frac32P + \frac32\dot S$, (2.58) $\nabla^2\sigma_i = 2\dot S_i$. Correct.
- Counts: $1+1+2+1+1+2+2 = 10$ (order $\phi, \gamma, \beta, H, \lambda, \varepsilon, h^{\text{TT}}$, as Hughes counts on p. 10); $6-1-3 = 2$; $1+1+2+2 = 6$; source $1+1+2+2 = 6$ free functions. Correct.
- EM gauge example: $\lambda = a\sin(kr-\omega t)/r$ gives $\partial_t\lambda = -a\omega\cos(kr-\omega t)/r$, so $-A_t = q/r + a\omega\cos(kr-\omega t)/r$; at $t = 0$ with $k = \omega$, $q = 1$ this is the plotted `1/r + a*w*cos(w*r)/r`. Caption correct. $\partial_i\lambda = a\,(x_i/r)[k\cos(kr-\omega t)/r - \sin(kr-\omega t)/r^2]$: oscillating, falling as $1/r$ and $1/r^2$, as the text says. $F_{\mu\nu}$ unchanged since partials commute. Default sliders ($a = 0.5$, $\omega = 3$) stay inside the plotted range; extreme sliders ($a = 1$, $\omega = 6$, small $r$) leave the range, which is harmless clipping. (A nice extra point, not required: with $k = \omega$, $\Box\lambda = 0$ away from the origin, so the strange potential still satisfies the Lorenz condition; Lorenz gauge alone does not prevent this.)
- Quiz: Q1 answer index 1 (light-travel time), correct. Q2 index 3 ("Two"), correct, explanation correct. Q3 index 3 ("2"), correct. Q4 index 1 ($F$ unchanged), correct.
- Flashcards: all five agree with the derivations above and the paper.
- Calcs file: entries agree with the page. `green-static` compares $-1/(4\pi r)$ with $-(1/4\pi)/r$, a tautology that tests nothing (info only; it could instead check $\nabla^2$ of $-1/(4\pi r)$ numerically, or be dropped).

## Coverage and order
- The page follows the lecture's order: recap (p. 1), Green's functions and the proof (pp. 2–3), retarded Green's function and light-travel delay (pp. 3–4), exact solution (pp. 4–5), "everything looks radiative" (p. 5), EM parable and conservation of pain (p. 6), punch line 4 + 2 + 4 (pp. 7–8), SVT split and counting (pp. 8–10), gauge laws and $h^{\text{TT}}$ invariance (p. 11), invariant combinations (p. 12), source split and conservation (p. 13), Einstein tensor and field equations (p. 14), conclusions (pp. 14–15).
- Nothing in the lecture is left out. Additions: the Sun worked example and the $\Phi$-invariance worked example (both original), the Newtonian check, and the cosmology callout.
- Citations: every `<Formula>` cites the right transcript page (the Green's function is written at the end of p. 3 and discussed on p. 4; the body text says pp. 3–4, fine).

## Licensing
- No slides or notes exist for this lecture; the transcript has no "All rights reserved" or "Courtesy of" notice. No figure reused; the plot is generated from a formula.
- The Flanagan & Hughes paper is open access (New J. Phys., CC BY); it is used for equations, which are cited, and no text is copied.
- Paraphrase is the page's own; short phrases taken from the lecture ("really dumb gauge" in quotes, "useful fiction", "conservation of pain") are acceptable, though #7 suggests attributing the last.
- No em dashes found. Ends with `## Summary`. Worked examples are original (Hughes gives none).

## Notes
- The page's sign conventions (gauge transformation with a minus sign, $h_{tt} = -2\phi$) agree with the Lecture 14 page and with the lecture; only the cited paper differs in the sign of $\phi$ (finding #1).
- `leadsTo` 8.962 Lectures 16 and 17 ("Gravitational Radiation I/II" in the syllabus): the claims (plane waves, polarizations, test masses; quadrupole formula and energy) are the standard content and match Hughes's own announcement on p. 15 that the next lectures focus on $h^{\text{TT}}$. Not verified against those transcripts, which were not in scope.
- Callout physics (scalars carry density perturbations seen in the CMB; tensor part = primordial gravitational waves inflation may produce) is standard and correctly hedged ("may").

Summary: physics, signs and factors are all correct, every number and quiz answer checks out, and the order and coverage follow the lecture. No errors. Three warnings: the cited paper uses the opposite sign of $\phi$ without the page saying so (#1), the 8.902 Lecture 13 forward link claims an SVT decomposition that page does not contain (#2), and the callout attributes the origin of the idea to Bertschinger as fact where the paper credits Bardeen (#3). Verdict: pass-with-notes.

## Resolution (2026-11-19, by the page author)

- W1: added a bracket noting that the paper uses h_tt = +2φ, which gives φ → φ − Ȧ and Φ = −φ + γ̇ − ½λ̈, while the page follows the lecture's h_tt = −2φ.
- W2: reworded the 8.902 Lecture 13 leadsTo. It now says that 8.902 follows Newtonian density perturbations, whose potential plays the role of Φ.
- W3: the callout now credits Bardeen's gauge-invariant formalism and says Hughes credits Bertschinger as the inspiration.
- Info: the reference and all citations now point to Sec. 2.2. The EM formula is marked as the page's own version of the p. 6 example. "Conservation of pain" is attributed to Hughes. The tautological calcs entry `green-static` is removed. "About 16 years" is left as Hughes's own figure.
- Status set to reviewed.
