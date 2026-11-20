---
page: content/year-4/8.09/action-angle-variables-kepler.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: page images of printed pp. 87-91 for every equation, plus the text layer)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_5/ (read: local text layer of Chapter 5, Sections 5.1 and 5.3, for the leadsTo claims)
  - content/year-2/8.033/schwarzschild-orbits-perihelion.mdx (read, for the cosmology callout)
verdict: pass-with-notes
---

# Review: Action-angle variables in several dimensions, and the Kepler problem

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Formula "The three parts of W" (p. 88, unnumbered) | The notes print $W_r = \pm\sqrt{2m(\alpha_1 - V) - \alpha_\theta^2/r^2}\,dr$ with no integral sign (a typo) | Writes $W_r = \pm\int\sqrt{\ldots}\,dr$ | The page is right. Writing rule 4 asks for a short bracketed note when the page differs from the source, e.g. "(the notes leave out the integral sign)". |
| 2 | info | Worked example, "The actions" and "Size and shape" | n/a | $\ell = 6.10\times10^{13}$ is given, but $J_2 = 3.832\times10^{14}$ and $J_2/J_3 = 0.9428$ come from the unrounded $\ell = 6.099\times10^{13}$ (calcs uses $\sqrt{mkp}$). With $\ell = 6.10\times10^{13}$ the values are $3.833\times10^{14}$ and $0.9429$, and $\varepsilon$ comes out as 0.3331. Also, $\sqrt{1 - 0.9428^2}$ taken literally is 0.3334, not 0.3333 | Quote $\ell = 6.099\times10^{13}$ in the problem statement, or say that the unrounded $\ell$ is used. |
| 3 | info | "Several degrees of freedom", last paragraph; "Why this matters" | "the motion through the whole 2n-dimensional phase space need not be periodic in time"; "perturbed by additional forces (like a moon, another planet, general relativistic corrections, and so on)" | Nearly the same clauses ("the motion through the whole $2n$-dimensional phase space need not be periodic at all"; "such as a moon, another planet, or the corrections of general relativity") | These are short and close to standard wording, so acceptable. Rephrase the first one if you want more distance from the notes. |
| 4 | info | Cosmology callout | Section 5.3 of the notes itself works out Mercury's GR precession (42.98 arcseconds/century) with exactly these action-angle variables ($\dot\omega_2$) | Links only to the 8.033 page | Optional: say that 8.09 Section 5.3 (already in `leadsTo`) does the same calculation with these variables. |

I found no errors. I checked every displayed equation against the page images:

- (4.192)-(4.195), (4.200)-(4.202), (4.205)-(4.215) and the two unnumbered displays (p. 88 W parts, p. 91 orbital elements) match the notes.
- The equation numbers and printed pages are right: (4.192)-(4.194) are on p. 87; (4.195)-(4.202) and the W parts on p. 88; (4.203)-(4.211) on p. 89; (4.212)-(4.215) on p. 90; the elements on p. 91.

## Arithmetic and answer checks
- **Slip (4.205), confirmed.** The notes integrate from $\pi/2$ to $\theta_0$. Since $\sin\theta_0 = \cos\gamma$ gives $\theta_0 = \pi/2 - \gamma \le \pi/2$, a positive integrand over reversed limits gives a negative result, while (4.207) is positive. The page's bracketed note is correct.
- **Slip (4.213), confirmed.** $\partial/\partial J\,[-2\pi^2k^2m J^{-2}] = 4\pi^2k^2mJ^{-3}$. The notes' middle expression $4\pi^2k^2(\ldots)^{-3}$ is missing $m$. The final form $(1/\pi k)\sqrt{-2E^3/m}$ is right: substituting $J = \pi k\sqrt{2m/(-E)}$ gives $(\sqrt2/\pi k)(-E)^{3/2}/\sqrt m$.
- **(4.207).** $\int_0^\infty du/(1+u^2) = \pi/2$ and $\int_0^\infty \cos^2\gamma\,du/(1+u^2\cos^2\gamma) = \cos\gamma\,\pi/2$, so $J_\theta = 2\pi\alpha_\theta(1-\cos\gamma)$. Correct.
- **Elements.** $J_3^2/(4\pi^2mk) = -k/2E$. $(J_2/J_3)^2 = -2E\ell^2/(mk^2)$, so $\varepsilon = \sqrt{1+2E\ell^2/(mk^2)}$, which matches Section 4.5. $\nu \propto (-E)^{3/2} \propto a^{-3/2}$, so $\nu^2 \propto a^{-3}$. All correct.
- **$\gamma = i$ (symbols entry for γ).** $\cos\gamma = \alpha_\varphi/\alpha_\theta = J_1/J_2 = \cos i$ (with $J_1 = 2\pi\alpha_\varphi$, $J_2 = 2\pi\alpha_\theta$), and both angles lie in $[0, \pi]$, so they are equal. Correct. The page itself never states $\gamma = i$, only the two cosine relations.
- **Worked example.** I recomputed it in Python:
  - $J_3 = 4.0649\times10^{14}$ ✓, $J_2 = 3.8327\times10^{14}$ (see #2), $J_1 = 3.319\times10^{14}$ ✓, $J_r = 2.32\times10^{13}$ ✓.
  - $a = 1.0501\times10^7$ m ✓ (equal to $-k/2E$, and the mean of 7000 and 14000 km is 10500 km ✓).
  - $\varepsilon = 0.333$ ✓ (see #2).
  - $\nu = 9.338\times10^{-5}$ Hz ✓, $1/\nu = 1.0708\times10^4$ s = 2.975 h ✓. $2\pi\sqrt{a^3/GM} = 1.0708\times10^4$ s ✓.
  - The inputs $E$ and $\ell$ agree with the reviewed Section 4.5 page.
- **Lissajous graph.** At ratio 3/2, $y = \cos(3\pi s)$ has period 2/3 and $x$ has period 1, so the path closes at $s = 2$, two periods of $x$ ✓. A ratio of 1.41 = 141/100 closes only after 100 periods of $x$, so "not closed after twelve periods" is true ✓. The domain $s\in[0,12]$ is twelve periods of $x$ ✓. The irrational case filling the rectangle is a correct addition that the notes do not make.
- **Quiz.**
  - Q1 (rational ratio) ✓.
  - Q2 (sum $J_\theta + J_\varphi$) ✓, and the distractors are wrong ✓.
  - Q3 ✓: $J^2 = 2\pi^2k^2m/(-E)$. The distractor $-k^2m/(2J^2)$ would be right only for Delaunay's $L = J/2\pi$, so it is wrong as the question is stated ✓.
  - Q4 ($i$, $\Omega$) ✓.
- **Flashcards.** All four agree with the notes and the checks above ✓.

## Coverage and order
- The page follows the notes' order: multiple variables (4.192)-(4.195), the 2D oscillator (4.196)-(4.197), Kepler W, $J_\varphi$, $J_\theta$ with the $\gamma$ substitution, (4.208), $J_r$, the degeneracy (4.210), (4.211)-(4.213), W in actions, angle variables (4.214), five constants (4.215), the L/E/LRL remark, Figure 4.9 elements, relations on p. 91, $J_2 = 2\pi\ell$, and the perturbation outlook. Nothing is left out.
- The long expression for $W(r,\theta,\varphi,J)$ on p. 90 is summarised in words. The page says it is "written out on p. 90 of the notes", and the dependences it gives for $\omega_r, \omega_\theta, \omega_\varphi$ match (4.214). That is acceptable.
- The notes' remark "$\sin(\theta)^{-2}$ is even about $\pi/2$" is rendered as "the integrand is symmetric about $\theta = \pi/2$" ✓.
- **Additions:** the explanation that degeneracy means a fixed orbital plane, closure of the orbit, Kepler's third law, the dense-rectangle remark, and the worked example. All are correct.

## Licensing
- Figure 4.9 is not redrawn. The elements are described in words only ✓.
- The Lissajous graph is generated from a formula and the worked example is original (it reuses the site's own Section 4.5 satellite) ✓.
- No courtesy or rights-reserved notices exist in the source (per the course lead; I did not see any on pp. 87-91). No OpenStax or LibreTexts material.
- Paraphrase is generally independent. See #3 for two close clauses (minor).

## Notes
- **Forward links.**
  - `leadsTo` 5.3 is supported: ch5 Section 5.3 uses $J_1, J_2, J_3$, $\omega_1, \omega_2$ and finds $\dot\omega_2$, the perihelion precession, with the GR value of 42.98 arcseconds/century.
  - `leadsTo` 5.1 is supported: Section 5.1 says the new variables $(\alpha, \beta)$ are no longer constant under $H_0 + H_1$.
  - The 8.033 link `/courses/8-033/schwarzschild-orbits-perihelion` exists (content/year-2/8.033/schwarzschild-orbits-perihelion.mdx). It covers the Schwarzschild effective potential and Mercury's 43 arcseconds per century, so it supports the callout. Calling GR "the theory on which modern cosmology is built" is fair.
- **Writing rules.** No em dashes on the page. Attribution is to "the notes" throughout. The two slips are marked in brackets ✓.
- **Symbols scoped to this page** (data/symbols.json). Most fit. Points to consider:
  - `\omega` has `unit: rad`. The angle variables here are in cycles ($\dot\omega_i = \nu_i$ in Hz; $2\pi\omega_1$ and $2\pi\omega_2$ are the angles), so the unit applies only to the astronomers' $\omega$. Suggest dropping the unit, or saying "rad for the argument of the pericentre; the angle variable counts cycles". (warning)
  - `\ell` reads "ℓ = |L⃗| = p_ψ = mr²ψ̇", and `\alpha` mentions α_ψ. On this page $\psi$ is the substitution variable of the $J_\theta$ integral (its own entry says so), so a reader of the popup may be confused. Suggest dropping the ψ forms from the meaning for this page, or adding a meaning scoped to this page. (warning)
  - `i` combines "index" and "inclination" in one meaning with `unit: rad`. The unit is wrong for the index use. This is minor. (info)
  - The `\gamma` meaning ("it equals the inclination i") is correct (see above).
  - `\nu` ("the orbital frequency") is also used in $\nu = (1/\pi k)\ldots$. That fits.
- **Uncertain:** I did not run `npm run content:check` or `calc:test`. The numbers above were recomputed independently.

## Resolution (2026-11-19, by the page author)

- Info 1 (W_r without ∫): a bracketed note after the formula says the notes print W_r without its integral sign.
- Info 2 (rounding): the problem now quotes ℓ = 6.099 × 10¹³ kg m²/s, and the ratio is given as J₂/J₃ = 0.94281, so √(1 − 0.94281²) = 0.3333 holds as written (calcs updated).
- Info 3 (close wording): both clauses reworded ("the state as a whole ... may never come back"; "the pull of a third body, say, or a relativistic correction to gravity").
- Info 4 (callout): now adds that Section 5.3 of the notes computes the same precession with these action-angle variables.
- Warning (ω unit): the ω meaning for this page has no unit and says the angle variables count cycles, while the astronomers' ω is in radians.
- Warning (ℓ and α meanings): this page now has its own meanings, ℓ = |L⃗| = α_θ and α₁, α_θ, α_φ as energy, total and z angular momentum, without ψ.
- Info (i unit): removed.
- Status set to reviewed.
