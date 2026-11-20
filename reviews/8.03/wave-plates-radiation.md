---
page: content/year-2/8.03/wave-plates-radiation.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-18/ (read, saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec18/ (read: notes PDF, 7 pages plus the OCW credit page; checked as rendered images, pp. 4-7 at 200-300 dpi, because the text layer is garbled)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/b19faaa01180fe50a6df15c8a2f6f19a_Dlhma3z57SA.pdf (read: transcript, 24 pages; pp. 21-22 and 22-24 are separate demonstration recordings)
verdict: needs-changes
---

# Review: Wave plates and radiation from accelerated charges

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `leadsTo` 8.03 Lecture 19, "why" | Lecture 19 (transcript and notes) is about the polarization of skylight (scattered sunlight is polarized, so a camera polarizer darkens the sky), then fields in matter and Brewster's angle. "Blue" does not appear in the Lecture 19 transcript or notes. The site's Lecture 19 page (`em-waves-in-matter-brewster`) also covers polarization, not colour | "Why the sky is blue: radiation from charges driven by sunlight." | For example: "Why light from the sky is polarized: sunlight re-radiated by charges in the air, and then light in matter and Brewster's angle." |
| 2 | warning | `leadsTo` 8.286 Lecture 18 | The 8.286 Lecture 18 pages (`cmb-spectrum`, `cosmological-constant`) cover the measured black-body spectrum and the cosmological constant. Free electrons scattering photons until they bind into atoms (recombination and decoupling) is on `temperature-and-decoupling`, 8.286 **Lecture 17** | Lecture 18: "free electrons ... scatter it constantly; only when they bind into atoms does the CMB travel freely." | Point the link to 8.286 Lecture 17, or rewrite the "why" to fit Lecture 18 (for example, scattering keeps radiation and matter in thermal equilibrium, which the CMB's black-body spectrum shows). The physics itself (Thomson scattering by free electrons) is correct. I did not read the 8.286 Lecture 18 transcript, so whether Guth mentions scattering there is unverified. |
| 3 | warning | "Transverse field of the kink" formula, cite `reading1` p. 4 | Notes p. 4 print $E_\perp = -qa_\perp/(4\pi\epsilon_0 r^2 c^2)$, with $r^2$. That is a slip: $-\frac{a_\perp r}{c^2}\cdot\frac{q}{4\pi\epsilon_0 r^2}$ has $r$ to the first power. The transcript (p. 19) and notes p. 5 have $c^2 r$ | Page has the correct $4\pi\varepsilon_0 r c^2$ and cites notes p. 4 without saying that the notes differ | Add a bracketed note as for the other slips, e.g. "(The notes print $r^2$ here; it is $r$, as on p. 5.)" Writing rule 4 asks for this. |
| 4 | warning | Field of a uniformly moving charge | Notes p. 3 and transcript p. 12: $\theta$ is the angle between $\hat r$ and the velocity (not defined explicitly in either source, but that is its meaning) | The page uses $\theta$ in this formula without defining it. Earlier on the page, $\theta$ is defined as the fast-axis angle of $Q_\theta$ | Add "with $\theta$ the angle between $\hat r$ and $\vec u$, and $r$ measured from the charge's present position". |
| 5 | warning | Demonstrations, sugar tube | Transcript p. 9: along the tube the colour changes ("this whole thing is actually changing color"), and the colours vary with distance along the tube. p. 10: a final polarizer selects which colour reaches the wall, and rotating the **incident** polarizer makes the whole tube change colour "like ... the barber shop" | "through a final polarizer the tube glows in changing colours, 'a physics barber shop'" | Separate the effects: the colours vary along the tube; turning the last polarizer picks out different colours on the wall; turning the first one makes the colours on the tube shift, like a barber's pole. |
| 6 | warning | Whole page (end of page) | AGENTS.md rule 6: a foundation page with a real cosmology connection ends with `<Callout kind="cosmology">` plus `leadsTo` | The page has an 8.286 `leadsTo` but no cosmology callout | Add a short cosmology callout (scattering by free electrons before decoupling) that points to the corrected lecture (see #2). |
| 7 | info | The kink, sphere radii | Notes p. 3 figure: charge at B at time $t + \Delta t$, spheres labelled $r = ct$ and $r = ct + \Delta t$. The second label is a units slip for $c(t + \Delta t)$ | Page: charge at B at time $t$, spheres $ct$ and $c(t - \Delta t)$, shell thickness $c\Delta t$ | Physics is consistent, and the labelling matches transcript p. 14 ("now I am looking at the situation at time equal to t where the charge is at position B"). No change needed. If you want, note that the notes label the time differently. |
| 8 | info | Wave plates, first sentence | Notes p. 1: "index of reflection" (slip for refractive index); transcript p. 3 calls $n_x$ "the phase velocity" | Page says "refractive index" | Silent correction is fine; these are small slips. |
| 9 | info | Separate antenna recording | Transcript p. 24: the bulb goes dark at "nodes" as the detector moves away | "which the demonstrator calls nodes" | The hedging is good. You could add that a single dipole in free space has no such nodes, so they come from interference with waves reflected by the room (the source does not say this, so mark it as the page's own explanation). |
| 10 | info | Total power remark | Notes p. 5 write the total power as a triple integral $\iiint \vec S\cdot d A\hat n$ (it is a surface integral) and get $4\pi$ | Page notes the $4\pi$ slip and gives Larmor's $6\pi$ | Correct as it stands. |

## Arithmetic and answer checks
- Phase difference: $2\pi l/\lambda_x - 2\pi l/\lambda_y$ with $\lambda = 2\pi c/(n\omega)$ gives $(n_x - n_y)\omega l/c$. Correct, matches notes p. 1.
- $Q_\theta = R(\theta)\,Q_0\,R(-\theta)$ works out to $\begin{pmatrix}\cos^2\theta + i\sin^2\theta & (1-i)\sin\theta\cos\theta\\ (1-i)\sin\theta\cos\theta & \sin^2\theta + i\cos^2\theta\end{pmatrix}$. This matches the page and notes p. 2.
- Kink ratio $-u_\perp t/(c\Delta t) = -a_\perp t/c = -a_\perp r/c^2$ with $r = ct$: correct (notes p. 4, transcript p. 17).
- $E_\perp = -\frac{a_\perp r}{c^2}\cdot\frac{q}{4\pi\varepsilon_0 r^2} = -\frac{q a_\perp}{4\pi\varepsilon_0 c^2 r}$: correct (see #3 for the notes' $r^2$).
- Larmor: $\varepsilon_0 c\,(qa/4\pi\varepsilon_0c^2)^2\cdot 8\pi/3 = q^2a^2/6\pi\varepsilon_0c^3$, and $\int\sin^2\theta\,d\Omega = 8\pi/3$: correct. The notes' $4\pi$ is indeed a slip.
- Oscillating charge, observer on $y$: $\vec a_\perp = -\hat z d\omega^2\cos\omega t$, so $\vec E_{\rm rad} = +qd\omega^2\cos(\omega(t-R/c))\hat z/(4\pi\varepsilon_0c^2R)$ and $\vec B = \frac1c\hat y\times\vec E \parallel \hat x$ with $c^3$. Correct.
- 30° example: $\hat z - \frac{\sqrt3}{2}(\frac12\hat y + \frac{\sqrt3}{2}\hat z) = \frac14\hat z - \frac{\sqrt3}{4}\hat y$, with magnitude $\frac12$. $\vec E$ points along $\frac12\hat z - \frac{\sqrt3}{2}\hat y$, which is perpendicular to $\hat r$ (dot product 0). "Reduced to half" is correct. The notes do print $8\pi\epsilon_0 c^3 R$ here and $4\pi\epsilon_0 c^3 R$ in Example 2 (notes p. 7); both should be $c^2$, as the page says.
- Ellipse: observers on $x$ and $y$ each see one component of $\vec a_\perp$, so the light is linearly polarized. The observer on $z$ sees components $\sqrt2$ and $1$, a quarter period apart, so the light is elliptically polarized. Correct.
- Worked example (a): $l = 600\times10^{-9}/(4\times0.0090) = 1.667\times10^{-5}$ m, about 17 µm. Correct.
- Worked example (b): $8.99\times10^9\times1.60\times10^{-19}\times10^{15}/8.99\times10^{16} = 1.60\times10^{-11}$ V/m, and half of it is $8.0\times10^{-12}$ V/m. Correct.
- `npm run calc:test -- -k wave-plates`: 8 passed. The calcs file covers every number on the page.
- Quiz 1 (circular): correct. Quiz 2 ($S\propto1/r^4$): correct. Quiz 3 (along the line of motion): correct. Quiz 4 (retarded time): correct. The explanations are right.
- Flashcards: all three are correct.

## Coverage and order
- The page follows the lecture order: polarization recap (summarised in one line), wave plate and $\Delta\phi$ (pp. 2-4), fast and slow axes and the three cases including the student's wrong guess and the 30° case (pp. 5-6), the student question on how a material gets different indices (pp. 6-7), the projector demonstration (pp. 7-8), the sugar tube (pp. 8-10), the break, Hubble and the $1/r$ requirement (pp. 10-11), the stationary charge and the uniformly moving charge (pp. 11-12), Georgi (p. 13), the kink (pp. 13-17), Gauss's law (pp. 18-19), $E_{\rm rad}$ and retarded time (p. 19), and the antenna demonstration (pp. 19-21).
- The notes-only material (the recipe and the examples on notes pp. 5-7, which Lee did not do in class) is placed before the lecture's final antenna demonstration and clearly labelled "Examples from the notes". This is acceptable.
- Small omissions: the student's remark on p. 6 that a $\Delta\phi$ other than $\pi/2$ gives elliptical light. Also on p. 20, the whole setup is rotated with a volunteer. Neither is needed.
- Attributions check out. The in-class demonstrations are cited to pp. 7-10 and 19-21. The separate polarizer and quarter-wave-plate recording is on pp. 21-22: both maxima at about 45°, and the problem set is mentioned on pp. 8 and 21. The separate dipole recording is on pp. 22-24: no light off the end and "nodes". All are labelled as separate recordings. No simulation is involved.
- Georgi page range: the notes say 355-360 and Lee says "page 356 to 360 in George's book" (p. 13). The page states both correctly.

## Licensing
- `grep` finds no "All rights reserved" or "Courtesy of" in the notes, the transcript or the OCW page. No figures are reused, and the Hubble image is mentioned only in words.
- The text is rewritten. Two short quotations are marked as such: "we are sending energy to the edge of the universe" (notes p. 5) and "a physics barber shop" (p. 10). Both are acceptable.
- The worked example (quarter-wave-plate thickness, field of an accelerated electron) is original and does not appear in the notes or transcript.
- The page uses no OpenStax or LibreTexts material.

## Notes
- The physics of the kink derivation is sound. The field outside $ct$ is the static field from A, and the field inside $c(t - \Delta t)$ points from the present position B. The sideways offset $u_\perp t$ is measured perpendicular to the line of sight, and the Gauss pillbox spans the outer surface, so $E_\parallel = E_{\rm out}$ (transcript p. 18). The result holds only for $u \ll c$. The page states this assumption for the kink but not for the final formula. It is optional to add "(non-relativistic)".
- The minus sign is explained on transcript p. 17 and again on p. 19 ("E kink ... pointing in the opposite direction compared to the direction of acceleration"). The page cites p. 17 only. Adding p. 19 is optional.
- Everything else I checked against the notes and transcript is correct: formula citations (notes pp. 1, 2, 3, 4, 5), prose page references, the Q₀ matrix and the moving-charge field.
- After fixing #1-#6, append a Resolution section before setting `status: reviewed`.

## Resolution (2026-11-16, by the page author)

Error: the 8.03 Lecture 19 `why` now reads "Why light from the sky is polarized, and light in matter."
Warnings:
1. The 8.286 link now points to Lecture 17 (temperature and decoupling).
2. Added a bracket for the notes' r² in the kink field's denominator.
3. θ in the moving-charge formula is now defined (angle between r̂ and u).
4. The sugar-tube description now separates the three effects (colours along the tube, final polarizer, first polarizer).
5. Added a cosmology callout on scattering by free electrons, linked to the 8.286 decoupling page.
Info: not changed.
