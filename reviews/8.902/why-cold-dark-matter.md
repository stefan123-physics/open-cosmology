---
page: content/year-5/8.902/why-cold-dark-matter.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec13.pdf (read: pdftotext plus rendered pages 85–86 to check garbled equations)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec14.pdf (read: pdftotext plus rendered pages 86–88, including both figures)
  - OCW 8.902 lecture-notes index page (read, for lecture titles and numbering)
verdict: pass-with-notes
---

# Review: Why structure formation needs cold dark matter

Printed page numbers checked from the rendered PDFs. Lecture 13 notes = pp. 82–86 (eqs. 376–399). Lecture 14 notes = pp. 86–90 (eqs. 396–414). Lecture 14 starts by repeating p. 86. Every citation below was checked against the rendered page, not only the text extraction.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Sound speed after recombination", text before eq. (395) | Eq. (395), p. 85: $p = \rho/(mkT)$, $T = 2.71\,\text{K}(1+z)$. The pressure law is a typo in the notes; the dimensions are wrong. | $p = \rho kT/m$, $T = 2.7\,\text{K}(1+z)$ | The page's form is the correct one. Following AGENTS.md rule 4, add a short bracketed note saying the notes print $p=\rho/(mkT)$ and the page corrects it. |
| 2 | info | Formula "Baryonic Jeans mass" (eq. 396) | $z \gg 1100$: $M_J \ge 10^{16} M_\odot$; $z<1100$: $M_J \lesssim 10^5 M_\odot$ | $z \gtrsim 1100$: $M_J \gtrsim 10^{16} M_\odot$ | $\gtrsim$ is defensible, because p. 87 says $M_J\sim10^{16}$ at $z\sim1000$. Still, either copy the notes' $z \gg 1100$ or say why the page differs. |
| 3 | info | Formula "Physical horizon", `at="eqs. (399)–(400), pp. 86–87"` | Every expression shown (2ct, 3ct and the $c/\sqrt{G\bar\rho}$ forms) is eq. (399), p. 86. Eq. (400), p. 87 only gives the $H^2$ relations used. | Cites 399–400 | Acceptable. A more exact cite: "eq. (399), p. 86 (using eq. 400, p. 87)". Both expressions recomputed and correct: $2ct=c\sqrt{3/(8\pi G\bar\rho)}$, $3ct=c\sqrt{3/(2\pi G\bar\rho)}$. Side note: eq. (400) in the notes prints the matter case as $4/(at^2)$, a typo for $4/(9t^2)$. The page does not show it, so nothing needs fixing. |
| 4 | info | Silk damping paragraph, quiz Q3, flashcard | p. 87: "all perturbations ∼ $10^{12}M_\odot$ (Silk mass) are damped and erased" | "below about $10^{12}M_\odot$" | "Below" is the correct physics, and the notes' "∼" probably means "≲". Fine as written; optionally add "(the notes write ∼)". |
| 5 | warning | Plot (baryon curve) | No such curve in the notes. Their figures (p. 87 baryons, p. 88 CDM) show a level oscillation after horizon entry and growth ∝ a after recombination. | At horizon entry the baryon curve drops suddenly from 0 to −1 dex. The wiggle has a constant amplitude of 0.15, yet the caption calls it "damped-looking". Just after recombination, $\log_{10}(1-10^{-3.04-x})\to-\infty$, so the curve plunges below the plot floor (−4) at $\log a=-3.04$ before it rises. Computed: −0.92 at −3.05, −1.14 at −3.03, about −2.2 at −3.039, then $-\infty$. | The catch-up law $\delta_b=\delta_c(1-a_\text{rec}/a)$ assumes $\delta_b(a_\text{rec})=0$. That does not match the −1 level drawn just before recombination, and it creates a non-physical spike. Options: (a) use $\delta_b = \delta_c(1-a_\text{rec}/a) + \delta_{b,\text{rec}}\,a_\text{rec}/a$ in linear form, or keep the curve at its pre-recombination level until it meets the CDM curve; (b) make the oscillation amplitude really decrease, e.g. multiply by $e^{-(x-h)}$, or drop the word "damped-looking". |
| 6 | warning | Plot caption | The notes do not contain $\delta_b \approx \delta_c(1-a_\text{rec}/a)$. | The caption gives it as part of "a schematic built from the scaling laws above", but it is not one of the laws above. | Say that this baryon catch-up relation is a standard textbook result that the notes do not derive (or add it to `references` with a source). |
| 7 | info | Plot slider | The notes' p. 88 left figure shows a mode entering after $t_\text{eq}$ that grows all the time, with no stagnation. | Slider maximum −3.7 < $\log a_\text{eq}=-3.53$, so the plot cannot show that case. | Optional: allow $h$ up to about −3.1 and handle super-horizon growth ∝ a after equality, so readers can see both of the notes' cases. |
| 8 | info | "Dark matter: frozen, not erased" | The notes say $\delta\sim$ constant (stagnation). | "stays roughly constant" | Matches the notes. Optionally add that a fuller treatment gives slow logarithmic growth (the Mészáros effect), marked as beyond the notes. |
| 9 | warning | "Not enough time" | "This theory of structure growth is not sufficient." (p. 86) | The same sentence, verbatim, in bold, without quotation marks | Put it in quotation marks and attribute it ("in the notes' words"), or rephrase. The same applies to "Without it, structure formation is not possible" (≈ p. 88 "Without CDM, structure formation is not possible") and "cold dark matter is needed to make structure formation work". Each is one short sentence and is attributed to "the notes", so this is not serious, but a verbatim sentence should be quoted. |
| 10 | info | Callout "Later developments" | — | Mészáros (1974) and Silk (1968) come before the 2023 notes, not after them. | Mészáros (A&A 37, 225, 1974) and Silk (ApJ 151, 459, 1968) are correctly attributed as far as I can check. The title "Later developments" only really fits the non-detection sentence. Consider "Names and later developments". The statement that dark matter has not been detected directly is correct to my knowledge as of 2026 (not checked against a source). |

All other formulas checked and correct:
- Eq. (394), reading1 p. 85: matches.
- Eq. (395), reading1 p. 85: matches, apart from the corrected typo in row 1.
- Eq. (396), reading1 p. 86: matches, apart from row 2.
- Eq. (397), reading2 p. 86: matches exactly.
- Eq. (398), inline, $\lambda_J=\frac{c}{\sqrt{G\bar\rho}}\sqrt{\pi/3}$: matches p. 86, and equals $c_s\sqrt{\pi/(G\bar\rho)}$ with $c_s=c/\sqrt3$.
- Eq. (401), reading2 p. 88: both time scales and the condition $\tau_\text{Hubble}\ll\tau_\text{Jeans}$ if $\rho_r\gg\rho_m$ match.
- The statement $\ell_\text{horizon}<\lambda_J$ before recombination matches p. 87. Numerically $\sqrt{\pi/3}=1.02 > \sqrt{3/(2\pi)}=0.69 > \sqrt{3/(8\pi)}=0.35$.

## Arithmetic and answer checks
Recomputed with Python, using $k=1.381\times10^{-23}$, $m_p=1.673\times10^{-27}$, $G=6.674\times10^{-11}$, $M_\odot=1.989\times10^{30}$:
- $T = 2.7255\times1101 = 3000.8$ K: correct.
- $c_s = 4.98$ km/s, so "5.0 km/s" is correct.
- $\bar\rho = 0.31\times8.6\times10^{-27}\times1101^3 = 3.56\times10^{-18}$ kg/m³, so "3.6e-18" is correct. $\rho_c=8.6\times10^{-27}$ kg/m³ corresponds to $h\approx0.677$, which is consistent.
- $\lambda_J = 5.72\times10^{17}$ m = 18.6 pc, so "5.7e17 m ≈ 19 pc" is correct.
- $M_J = 1.41\times10^6 M_\odot$, so "1.4e6" is correct.
- The comparison with the notes' $\lesssim10^5$ is described honestly as a convention-dependent factor of ~10.
- Not-enough-time argument: $10^{-5}\times10^3=10^{-2}$, correct and as in the notes.
- Plot constants: $\log_{10}3400=3.53$ and $\log_{10}1100=3.04$, both correct. The CDM curve is continuous at $h$ and at −3.53 and correctly shows $a^2$ / constant / $\propto a$. The baryon curve has the problems listed in rows 5–6.
- Quiz Q1: answer 1 is correct, and so is the explanation (the "~10⁵–10⁶" range combines the notes and the worked example).
- Quiz Q2: answer 1 is correct.
- Quiz Q3: answer 1 is correct, and the explanation (electrons by Thomson scattering, protons by Coulomb attraction) matches p. 87.
- Quiz Q4: answer 1 is correct. The distractor "grows as $a^2$" is wrong after horizon entry, as it should be. The explanation matches eq. (401).
- Flashcards: all four agree with the notes.

## Coverage and order
- The page follows the notes' order exactly: growth condition and $M_J$ (p. 85) → baryons before and after recombination, eqs. 394–396 → the $10^{-5}\times10^3$ argument → CDM properties (p. 86) → 2.B super-horizon growth (397) → baryon Jeans length (398) → horizon (399–400) → oscillation after entry (p. 87) → Silk damping → CDM stagnation (401) → the two cases, entry before or after $t_\text{eq}$, and the conclusion (p. 88).
- Nothing in eqs. 394–401 is missing. The notes' three figures (pp. 87–88) are replaced by one generated schematic, which is acceptable.
- Not covered: 2.C "Statistical measures of structure" and 2.D "Form of the primordial power spectrum" (eqs. 402–414, pp. 88–90). These are part of the Lecture 14 notes. The caller says they belong to a later page. Because AGENTS.md asks for each lecture to be covered fully, that page should carry `lecture: 14` (order 2), or this page should state that the rest of Lecture 14 continues on the next page. Note also that the `leadsTo` entry for Lecture 15 ("The power spectrum") points to material that actually starts in Lecture 14.
- Eqs. 394–396 also appear in the Lecture 13 notes (p. 85–86). The page cites them there (reading1), which is correct. The companion page `linear-perturbations` (lecture 13) stops at eq. 393, so nothing is duplicated.
- `leadsTo`: Lecture 15 = "Power Spectrum" and Lecture 19 = "Thermal History of Dark Matter" match the OCW lecture-notes index. The prerequisites `linear-perturbations` and `temperature-and-decoupling` both exist.

## Licensing
- Neither PDF has an "All rights reserved" notice. The only credit in these notes is on Lecture 13 p. 82: "Image: NASA / WMAP Science Team. Image is in the public domain." The page does not use that image.
- The notes' own figures (pp. 87–88) are not reproduced. The plot is generated from formulas.
- No OpenStax or LibreTexts material.
- Text is rewritten, except for the short verbatim sentences in row 9 (attributed but not quoted).
- The worked example is original. The notes have no numerical example, and the page uses its own inputs (Planck-like $\Omega_m$, $\rho_c$).

## Notes
- Verdict is pass-with-notes: I found no error in the physics, numbers, citations or licensing. The main fixes are the baryon plot curve (spike and inconsistent catch-up formula, caption wording) and a bracketed note on the $p=\rho/(mkT)$ typo in the notes.
- Uncertain: whether the slider range ($\log a_\text{enter}$ from −6.5 to −3.7) corresponds to masses that Silk damping actually erases (below about $10^{12}M_\odot$). The caption says only the shapes are meant, which covers this, but the 1-dex "Silk" lowering is applied to every entry scale alike.
- `source.url` points to the Lecture 14 PDF, which is the same document as reading2. That is acceptable.

## Resolution (2026-11-14, by the page author)

- Warning 1: the baryon curve is rebuilt: continuous at horizon entry, a genuinely shrinking wiggle (Silk damping, schematic), and after recombination log₁₀(δ_c(1 − a_rec/a) + 1), so it starts from the baryons' own value and never dips to −∞.
- Warning 2: the caption now labels δ_b ≈ δ_c(1 − a_rec/a) as a standard textbook result not in the notes.
- Warning 3: added a bracket for the notes' typo p = ρ/(mkT).
- Warning 4: the near-verbatim sentences are rephrased; one short phrase is quoted.
- Info: eq. (396) now uses z ≫ 1100; the horizon citation is eq. (399), p. 86; the Mészáros stagnation is noted as really a slow logarithmic growth; the callout is retitled "Names and later developments"; the Lecture 15 leadsTo says the power spectrum starts at the end of Lecture 14. Sections 2.C–2.D of Lecture 14 will get their own page (lecture 14, order 2).
