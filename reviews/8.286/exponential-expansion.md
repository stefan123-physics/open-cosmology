---
page: content/year-4/8.286/exponential-expansion.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-23-inflation/ (read, local copy of the OCW page; its only PDF link is the transcript cited as reading1)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/2aa1ecae1246c3e9b9fca11aefb81dcb_PsfyE1-s9Rs.pdf (read; 25 pages, printed footer = PDF page number, checked page by page with pdftotext -f N -l N for pp. 10–20 and 25)
  - Lecture 23 slides (not used for comparison; they carry "All rights reserved ... excluded from our Creative Commons license" notices, and the page does not draw on them)
verdict: pass-with-notes
---

# Review: Exponential expansion, de Sitter space and the inflationary scenario

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The scenario", formula "Expansion from the end of inflation to today" (p. 19) | Guth says the expansion factor "would be 10 to the 16 GeV times the Boltzmann constant times 2.7 Kelvin" (p. 19, lines 1–2), then calls it "the ratio of the temperature then to the temperature now". The spoken "times" is a slip; it must be a division. | $10^{16}\,\text{GeV}/(k\cdot 2.7\,\text{K})$ (correct), with no note. | Rule 4 asks for a short bracketed note when the page differs from a lecturer slip, e.g. "[Guth says 'times' $k \cdot 2.7$ K; he means divided by it, the ratio of the two temperatures.]" |
| 2 | info | "The event horizon", paragraph after the plot | Guth: "that is a rigorous theorem of general relativity, this protection" (p. 15). | States it as a fact in the page's own voice: "a rigorous theorem of general relativity". | Matches the transcript. Consider attributing it ("Guth calls this protection a rigorous theorem of general relativity"), as rule 5 suggests. |
| 3 | info | "The scenario", "We need only about $40\times10^9$ light-years" | Guth: "we would want something like 40 times 10 to the 9th light years to explain the present universe" (p. 19). | Same figure, stated in the page's own voice. | Matches the transcript. It is Guth's rough number (the present diameter of the observable universe is closer to $\sim 9\times10^{10}$ ly), so "Guth uses about…" would be fairer. The "about ten times too big" conclusion still holds to within a factor of a few. |
| 4 | info | Callout "Later developments" | Not in the lecture (post-2013). | "If inflation happened near the GUT scale it would produce primordial gravitational waves detectable as B-mode polarisation"; "it turned out to be due to dust"; "caps the energy scale of inflation at about $1.4\times10^{16}$ GeV". | The facts check out (see below). Small wording points: (a) at exactly $10^{16}$ GeV, $r \approx 0.009$, which is below today's limit, so "potentially detectable by coming experiments" is more accurate than "detectable". (b) The joint BICEP2/Keck–Planck analysis (2015) showed the signal *could be explained* by Galactic dust, with no significant primordial detection left. That is a little weaker than "turned out to be due to dust". (c) The cap assumes standard single-field slow roll and applies to the energy scale while CMB-scale modes left the horizon. Optional rewording only. |
| 5 | info | Plot y-axis label | — | "distance covered (Hubble lengths at emission)" | The curve is $a(t_1)\,\Delta r(t_1,t_2)$ in units of $c/\chi$: the coordinate distance covered by the light, expressed as a physical distance at $t_1$. The caption says this correctly. The axis label could read "coordinate distance reached × a(t₁), in units of c/χ" to avoid reading it as the physical path length, which grows without bound. |

All formula citations were checked against the printed page footers:
- Friedmann equation during inflation, p. 11: correct (spoken p. 11, "leave out the curvature term", "for rho, we're just going to put rho sub f").
- $a(t) = \text{const}\,e^{\chi t}$, $\chi = \sqrt{8\pi G\rho_f/3}$, pp. 11–12: correct (the exponential at the foot of p. 11, the definition of $\chi$ at the top of p. 12).
- $\Delta r(t_1,t_2)$, pp. 13–14: correct (defined at the foot of p. 13, integral and result at the top of p. 14). The result $\frac{c}{\text{const}\cdot\chi}(e^{-\chi t_1}-e^{-\chi t_2})$ matches what is spoken and checks by integration.
- $\ell_\text{event} = c\chi^{-1}$, p. 14: correct.
- $\rho_f \sim E^4/(\hbar^3 c^5) \approx 2.3\times10^{81}$ g/cm³, p. 17: correct. Guth first says "energy density" and corrects himself to "mass density". The page uses "mass density", which is right.
- $\chi^{-1} \approx 2.8\times10^{-38}$ s and $c\chi^{-1} \approx 8\times10^{-28}$ cm, p. 17: correct.
- Expansion to today and $450\times10^9$ ly, p. 19: correct page. See finding 1 for the "times/divided by" slip.

The bracketed χ vs χ⁻¹ note is accurate. On p. 17 Guth says "chi turns out to be about 2.8 times 10 to the minus 38 seconds". A student objects. Guth first defends it ("Chi inverse is a time ... So I think that's right"), then concludes "This must be chi inverse ... You are right. Yes, that's chi inverse." The page's summary "Guth first labels the time as $\chi$; a student catches it, and he corrects it to $\chi^{-1}$" is fair.

Other claims checked against the transcript:
- Cosmological no-hair (p. 12): matches. It is provable perturbatively and conjectured beyond that, and "locally" is needed: a closed universe stays closed but looks flatter.
- de Sitter, 1917 (pp. 12–13): matches ("1917, I think"). The bracket "which is right" is correct: de Sitter's 1917 MNRAS paper.
- de Sitter space can be sliced as open or closed RW (p. 13): matches.
- Particle vs event horizon (p. 13): matches.
- GUT coupling unification (pp. 15–16): matches. Around 100 GeV, SU(3)×SU(2)×U(1), "decent" in the Standard Model and "much better" in the minimal supersymmetric extension, which is "a piece of evidence in favor of supersymmetry", meeting at about $10^{16}$ GeV.
- Proton comparison (p. 18): matches ("14 orders of magnitude ... So 15 orders of magnitude, maybe"). Independently, $8\times10^{-28}/10^{-13} = 8\times10^{-15}$, so 14–15 orders is correct.
- End patch size "1 to 10 cm or more", where more inflation is no problem (p. 18): matches.
- Reheating description and reheat temperature ~$10^{16}$ GeV (p. 18): matches.
- $10^{-35}$ s quoted at the end of the lecture (p. 25): matches ("times like 10 to the minus 35 seconds after the Big Bang").

## Arithmetic and answer checks
These were recomputed with python3, using CODATA constants in cgs units.
- $\rho_f = E^4/(\hbar^3c^5)$ with $E = 10^{16}$ GeV $= 1.602\times10^{13}$ erg gives $2.32\times10^{81}$ g/cm³. Page: $2.3\times10^{81}$. Correct.
- $\chi^{-1} = (8\pi G\rho_f/3)^{-1/2} = 2.78\times10^{-38}$ s. Page: $2.8\times10^{-38}$ s. Correct.
- $c\chi^{-1} = 8.32\times10^{-28}$ cm. Page: $8\times10^{-28}$ cm, and $8.3\times10^{-28}$ cm in the worked example. Correct.
- $10^{16}\,\text{GeV}/(k \cdot 2.7\,\text{K}) = 4.30\times10^{28}$. Times 10 cm, that is $4.30\times10^{29}$ cm $= 4.54\times10^{11}$ ly. Page and Guth: $450\times10^9$ ly. Correct.
- "Ten times too big": $450/40 \approx 11$. Correct as an order of magnitude.
- Worked example, growth factor: $10/8.3\times10^{-28} = 1.20\times10^{28}$. Page: $1.2\times10^{28}$. Correct.
- Worked example, e-folds: $\ln(1.20\times10^{28}) = 64.66$. Page: 64.7, "about 65". Correct.
- Worked example, duration: $65 \times 2.8\times10^{-38} = 1.82\times10^{-36}$ s (exact e-folds × exact $\chi^{-1}$ gives $1.80\times10^{-36}$ s). Page: $1.8\times10^{-36}$ s. Correct. It is consistent with "over by around $10^{-35}$ s".
- Plot: $a(t_1)\,\Delta r = \frac{c}{\chi}(1 - e^{-\chi(t_2-t_1)})$ follows from the cited formula, because $a(t_1) = \text{const}\cdot e^{\chi t_1}$ cancels the prefactor. The plotted expression `1 - exp(-x)`, with x in units of $1/\chi$ and y in units of $c/\chi$, and the dashed asymptote at 1 are right. The caption is correct.
- Later-developments callout: the BK18 result (BICEP/Keck 2021, with Planck and WMAP) is $r_{0.05} < 0.036$ at 95% CL. Correct. With $A_s \approx 2.1\times10^{-9}$, $V^{1/4} = (\tfrac{3\pi^2}{2}A_s r)^{1/4}M_\text{Pl}$ (reduced Planck mass) gives $1.41\times10^{16}$ GeV for $r = 0.036$. Page: about $1.4\times10^{16}$ GeV. Correct. BICEP2's 2014 announcement and its later attribution to dust are correctly dated and marked as later developments.
- Quiz 1 (answer 2, exponential with $\chi = \sqrt{8\pi G\rho_f/3}$): correct, with a correct explanation.
- Quiz 2 (answer 1, no-hair statement): correct. The explanation matches p. 12.
- Quiz 3 (answer 1, $c\chi^{-1}$): correct. The explanation is right.
- Quiz 4 (answer 1, protection of the interior): correct. The explanation repeats Guth's "rigorous theorem" claim (p. 15).
- Quiz 5 (answer 2, about $2\times10^{81}$ g/cm³): correct. The numbers in the explanation check out.
- Flashcards: all five are correct and consistent with the transcript.

## Coverage and order
- The page covers transcript pp. 11 (from "To see what happens next") to 19 (up to "that's basically how the scenario works"), in MIT's order: exponential solution, no-hair, de Sitter, event horizon, protection of the de Sitter region, sample numbers (GUT scale, $\rho_f$, $\chi^{-1}$, $c\chi^{-1}$), the scenario (patch, end size, reheating, coasting, 450 billion ly). The order is the same as the lecture.
- The preceding material on p. 11 (the initial-patch assumption) and pp. 10–11 (creation from nothing, Hartle–Hawking) is on `false-vacuum.mdx`. The material from p. 19 on (solving the horizon, flatness and monopole problems) is on `inflation-solutions.mdx`. No gap and no overlap of substance.
- Guth's side remark that, in the simplified equation, the exponential "is the only solution" (p. 12) is folded into "With the full equations there would be other solutions". This is acceptable.
- Additions not in MIT: the worked example (original, see below), the plot (generated from the cited formula), and the later-developments callout (clearly marked).

## Licensing
- The transcript carries the standard OCW Creative Commons notice. It has no "All rights reserved" or "Courtesy of" notices. The Lecture 23 slides do contain "All rights reserved ... excluded from our Creative Commons license" notices. The page does not use, cite or reproduce the slides, and it has no images.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short standard phrases. Close echoes include "off scale by human standards" and "hot soup of particles ... starting point of the conventional Big Bang". These are short phrases and acceptable.
- The worked example (e-fold count and duration) is original. Guth does not compute e-folds in this lecture.

## Notes
- `leadsTo` points to Lecture 1, with the reason "Eternal inflation and the multiverse grow out of the same exponential expansion". This is plausible from the Lecture 1 title ("Inflationary cosmology: is our universe part of a multiverse?"), but I did not read the Lecture 1 transcript, so the specific claim about eternal inflation there is **unverified**.
- The page has no `Callout kind="cosmology"`. This is appropriate for an 8.286 page.
- The page is still `status: draft`, as it should be until the findings above are addressed and a Resolution section is added.

## Resolution (2026-11-14, by the page author)

- Warning: added a bracket noting Guth says "times" where the temperature ratio is a quotient.
- Info 2: the "rigorous theorem" and the 40e9 ly figure are now attributed to Guth, with the observable universe's diameter (~9e10 ly) noted.
- Info 3: the callout now says "potentially detectable", that the 2015 joint analysis showed BICEP2 could be explained by dust, and that the energy-scale cap assumes single-field models (r ≈ 0.01 at the GUT scale).
- Info 4: plot y-axis label clarified.
