---
page: content/year-4/8.286/magnetic-monopoles.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-22-game-plan/ (read; lecture page, instructor listed as Scott Hughes, title "Lecture 22: The Higgs Field and the Cosmological Magnetic Monopole Problem"; no slides for this lecture)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3ef27cdafbe29bfb9991e9265544754e_seBwiL9InII.pdf (read; transcript pp. 13–23 compared in full, printed footer = PDF page)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/2aa1ecae1246c3e9b9fca11aefb81dcb_PsfyE1-s9Rs.pdf (read; Lecture 23 transcript, pp. 21–22 only, to check the cosmology callout)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/0901d77a7d2668fcffd6d10360ab3d56_MIT8_286F13_ps10.pdf (read; Problem Set 10, Problem 1 "The magnetic monopole problem", to check the worked example and the "two years" remark)
  - Problem Set 10 solutions (could not find on OCW; not read)
verdict: needs-changes
---

# Review: Topological defects and the magnetic monopole problem

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step (c) | (Not in the lecture. Standard physics, and PS10 quoting Lecture Notes 6 Eq. (6.48): $u = g\,\frac{\pi^2}{30}\frac{(kT)^4}{(\hbar c)^3}$; photons have $g = 2$.) | "For black-body photons, $\rho = \frac{\pi^2}{30}\frac{(kT)^4}{(\hbar c)^3c^2}$" and then $t \approx 2.4\times10^{-38}$ s, horizon $1.5\times10^{-29}$ m, $n_M \approx 3\times10^{86}$ m⁻³, ratio $\sim10^{-8}$, $\rho_M \approx 10^{-8}$ kg/m³, about $10^{18}\rho_c$. These numbers are all consistent with $g = 1$, i.e. half the photon energy density. | Use $\rho = \frac{\pi^2}{15}\frac{(kT)^4}{(\hbar c)^3c^2}$ (two polarisations). Then $t \approx 1.7\times10^{-38}$ s, $\ell_h = 2ct \approx 1.0\times10^{-29}$ m, $n_M \approx 9\times10^{86}$ m⁻³, $n_\gamma(10^{16}\,\text{GeV}) \approx 3.2\times10^{94}$ m⁻³, $n_M/n_\gamma \approx 3\times10^{-8}$, $\rho_M \approx 3\times10^{-8}$ kg/m³, about $3\times10^{18}\rho_c$ (with $\rho_c = 8.6\times10^{-27}$ kg/m³). The closing sentence ("towards $10^{21}$" with many species) still holds: $g\sim200$ gives about $3\times10^{21}$. |
| 2 | warning | Worked example, step (c) | PS10 Problem 1 (a)–(d) is exactly this exercise: Kibble's $n_M\sim1/\xi^3$, $\xi$ = horizon distance, radiation-dominated flat universe, $t_\text{GUT}$, $n_M$, $n_M/n_\gamma$, ratio preserved to today, contribution to $\Omega$ (there with $g_\text{GUT}\sim200$, $kT_c = 10^{16}$ GeV, $M_Mc^2 = 10^{18}$ GeV). | Same sequence of steps, with photons only. | Writing rule 1 says worked examples must be original. Either change the situation (e.g. a different transition temperature, or ask a different question such as "at what $\xi$ would monopoles just equal $\rho_c$?") or say openly that this follows the structure of Guth's PS10 Problem 1 and cite it in `references`. Not copied verbatim, so not a licence problem, but it duplicates the course's graded homework. |
| 3 | warning | "Seeds and domains", LIGO example | p. 14: "100 kilogram mirrors of very pure either Sapphire or silicon dioxide", crystals grown carefully. | Repeats this as the lecturer's example. | Lecturer slip: Advanced LIGO test masses are about 40 kg of fused silica (amorphous glass, not a grown crystal); sapphire was considered but not used. Per writing rule 4, add a short bracket, or drop the LIGO detail and keep only the crystal-seeding analogy. (From general knowledge, not an MIT source.) |
| 4 | warning | Summary, bullet 2 | p. 18: domain-wall GUTs are "observationally disfavored". p. 19: cosmic strings as the *seeds of structure* are "pretty highly disfavored", and if they exist they contribute little to the mass budget. | "domain walls and cosmic strings (some grand unified theories, now observationally disfavoured)" | The body text gets this right, but the summary makes cosmic strings themselves sound ruled out. Suggest: "domain walls (now observationally disfavoured) and cosmic strings (no longer favoured as seeds of structure)". |
| 5 | warning | "Too many monopoles", bracket on "two years old" | p. 23: "this tells us that we are at 10 to the 20 of the critical density. And a consequence is that the universe is approximately two years old." No more explanation. Lecture 23 (pp. 21–22) and PS10 do not explain it either. | Reads it as the age at which so dense a universe would reach today's temperature: $\rho = 10^{20}\rho_c \Rightarrow H = 10^{10}H_0$, $t = 2/(3H) \approx 1$ yr. | Arithmetic checked: with $H_0 = 67.7$–70 km/s/Mpc, $t = 2/(3H) = 0.93$–0.96 yr and $1/H = 1.4$ yr. "About one year" is right, and it matches "two years" to within the precision of a $10^{20}$ estimate. The reading is plausible and properly hedged ("Presumably"), but **unverified**: no MIT source gives it. Keep the hedge and maybe add "(not explained in the lecture)". Also note that an Ω of $10^{20}$ with today's $T$ is not a universe with today's $H_0$, so "critical density" here must mean today's measured value. The bracket says this implicitly; one clause would make it clearer. |
| 6 | info | "Seeds and domains", student question | p. 14: the student's question ("could the symmetry break in different ways in different places?") comes *before* the crystal analogy. | Put in brackets after the event-2 description. | Fine as rewriting, but strictly it is out of order. Optionally move it to the start of the section. |
| 7 | info | Domain walls, item 1 | p. 18: such a wall "could be somewhere out gigaparsecs away". | "possibly gigaparsecs across" | Change to "possibly gigaparsecs away" or "possibly enormous". The lecturer gave a distance, not a size (for walls; "gigaparsecs long" is what he said for strings, p. 18). |
| 8 | info | Gravitational-lensing anecdote | p. 20: "two quasars that looked absolutely identical" at the right separation, later shown with better telescopes to be unrelated. | Repeats "a pair of identical-looking quasars". | Uncertain: the best-known candidate (CSL-1, 2003; resolved by HST in 2006) was a pair of galaxy images, not quasars. If the page keeps the anecdote, attribute it ("the lecturer recalled…") or drop the word "quasars". Not checked against an MIT source. |
| 9 | info | Opening paragraph / sources | Lecture 23 p. 21: "originally Kibble argued … one of these monopoles to form per horizon volume". PS10 also credits T.W.B. Kibble. | One monopole per horizon volume is not attributed. | Add "(an estimate due to Kibble, as Guth notes in Lecture 23)". |
| 10 | info | Throughout | OCW lists the Lecture 22 instructor as Scott Hughes (substituting for Guth). | "the lecturer" | Optionally name him once, e.g. "the substitute lecturer, Scott Hughes". This makes the "Guth's notes" references clearer. |

Formula citations checked:
- "Gradient energy around a point defect", p. 21: correct. Board/spoken only (there are no slides). The transcript says "the field itself actually goes something like log". The page rightly does not repeat this: for a fixed-magnitude field whose direction changes, $|\nabla h|\sim1/r$ and $|h|$ stays constant.
- "Magnetic charge of a monopole", p. 22: correct. The lecturer says "CGS units", and Gaussian units are fine. $g = e/(2\alpha)$ agrees with the Dirac condition $eg = \hbar c/2$.
- "Monopole mass", p. 22: correct.
- "Monopole number density", p. 23: correct. The lecturer gives $\xi \lesssim$ horizon distance and $n\sim1/\xi^3$, and sets $\xi = $ horizon distance for the lower bound.
- The inline $\nabla\cdot\vec B = 4\pi\rho_m$ is from p. 13 and is correct.

## Arithmetic and answer checks
Recomputed with python3 using $\alpha = 1/137.036$, $\hbar$, $c$, $G$, and 1 GeV $= 1.602\times10^{-10}$ J.
- (a) $g/e = 68.52$; force ratio $68.52^2 = 4695 \approx 4.7\times10^3$. Correct.
- (b) $m_M = 137.036\times10^{16}$ GeV $= 1.37\times10^{18}$ GeV $= 2.44\times10^{-9}$ kg $= 1.46\times10^{18}\,m_p$. The page's 1.4e18 GeV, 2.4e-9 kg, about 2 µg and 1.5e18 proton masses are correct.
- (c) Wrong by a factor of 2 in $\rho$ (see item 1). The page's own numbers match $g = 1$ to the stated precision: $t = 2.42\times10^{-38}$ s, $\ell_h = 1.45\times10^{-29}$ m, $n_M = 3.3\times10^{86}$, $n_M/n_\gamma = 1.0\times10^{-8}$, $\rho_M = 1.0\times10^{-8}$ kg/m³, $\Omega_M\approx1.2\times10^{18}$. With the correct $g = 2$: $1.71\times10^{-38}$ s, $1.03\times10^{-29}$ m, $9.3\times10^{86}$ m⁻³, $2.9\times10^{-8}$, $2.9\times10^{-8}$ kg/m³, $\Omega_M\approx3\times10^{18}$. With $g = 200$: $\Omega_M\approx3\times10^{21}$. Today's $n_\gamma = 4.1\times10^8$ m⁻³ and $\rho_c = 8.6\times10^{-27}$ kg/m³ ($H_0\approx67.7$) are correct.
- Body text: $10^{18}$ protons $= 1.7\times10^{-9}$ kg, "around a microgram", which matches p. 22.
- "Two years" bracket: $t = 2/(3\times10^{10}H_0) \approx 0.96$ yr. Correct as stated (see item 5 for how far the reading itself can be trusted).
- Quiz Q1 (answer 1): correct. Q2 (answer 2, monopoles in all GUTs): correct, p. 19. Q3 (answer 1): correct, pp. 21–22. Q4 (answer 2, about 4,700): correct. Q5 (answer 2, $10^{18}$ GeV): correct. The explanation's $10^{18}$ GeV $\approx 1.8\times10^{-9}$ kg $\approx 2\times10^{-9}$ kg is fine.
- Flashcards: all four are correct. "≈ 1 microgram" matches the lecturer (more exactly 1.8 µg for $10^{18}$ GeV).

## Coverage and order
- The page follows transcript pp. 13–23 in order: monopole consequence and $\nabla\cdot B$ (p. 13); non-simultaneous breaking and crystal seeding with LIGO (p. 14); events 1 and 2 with $h=(1,i)$ and $(i,-1)$ (pp. 15–16; the transcript's "h1 is equal to y" is a transcription of "i", and the page reads it correctly); domains meeting and "parametrise our ignorance" (p. 16); matching across the boundary and SU(5) embeddings (p. 17); domain walls (p. 18); cosmic strings (pp. 18–19); point defects and monopoles in all GUTs (p. 19); 1D-wall question and gravitating defects/lensing (pp. 19–20); $h=0$ theorem and gradient energy (pp. 20–21); gauge coupling and magnetic charge (pp. 21–22); $g$ and mass (p. 22); Kibble estimate and $10^{20}\rho_c$ (p. 23).
- Left out (all minor): the student question on p. 18 about how far apart the seed regions are (deferred to PSET 10); the remark on p. 20 that string-forming theories still leave a knot of residual mismatch; the "$100,000" paperweight cost; the lecturer's "field goes like log". None of these leaves a gap.
- Added beyond the lecture: the worked example (see items 1–2) and the later-developments callout.

## Licensing
- The Lecture 22 transcript has only the standard CC notice and no "All rights reserved" or "Courtesy of" text (checked with grep). No figures are reused.
- Short quoted phrases ("the world's prettiest paperweight", "parametrise their ignorance", "the universe is approximately two years old") are marked as quotes and are short. The rest is rewritten, and I found no copied paragraphs.
- No OpenStax or LibreTexts material.
- The worked example follows the structure of PS10 Problem 1 (item 2). This is an originality issue under writing rule 1, not a licence breach (CC BY-NC-SA material, not copied verbatim).

## Notes
- Later-developments callout: the claim is correct. No confirmed detection exists, and MACRO (final results 2002) and IceCube (2013 onward) set flux limits far below the unsuppressed prediction. Two small points:
  - MACRO ran before the 2013 lecture, so "Later developments" is only partly accurate. Consider "Beyond the lecture".
  - `references` is empty. Add a citation for the MACRO and IceCube limits (and optionally mention Cabrera's single unconfirmed 1982 candidate event). I checked these from general knowledge, not against the papers.
- Cosmology callout and `leadsTo` (Lecture 23): supported. Lecture 23 transcript pp. 21–22: Guth recalls the Kibble estimate and says inflation after monopole formation dilutes them (volume factor about $10^{84}$ in his sample numbers). Lecture 23 also covers the horizon and flatness solutions. Describing this as stretching one causally connected region over the observable universe is a fair summary.
- Prerequisites `higgs-field` and `horizon-problem` exist, and the "third consequence" wording matches the higgs-field page's list of three consequences.
- Verdict is `needs-changes` only because of the factor-2 error in the worked example. Everything else is a warning or info.

## Resolution (2026-11-14, by the page author)

- Error (step c) and Warning 2 (copies the homework): step (c) is replaced by an original question — the monopole number density that alone would equal the critical density (about 3.5e-18 per m³, one per ~660 km cube) — and the page says openly that the abundance estimate is on Guth's problem set, quoting the lecturer's ~10^20.
- Warning 3: the LIGO example now has a bracket: Advanced LIGO test masses are about 40 kg of fused silica, not 100-kg grown crystals.
- Warning 4: the summary now says domain walls are strongly limited and cosmic strings disfavoured as seeds of structure.
- Warning 5: the "two years old" bracket is kept, hedged as before.
- Info: "gigaparsecs away"; the one-monopole-per-domain estimate credited to Kibble; the MACRO/IceCube callout now says searches before and since the lecture. The lecturer's name stays as on the Higgs page; the quasar story is kept as the lecturer told it.
