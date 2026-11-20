---
page: content/year-4/8.286/cosmological-constant.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-18-cosmic-microwave-background-spectrum-and-the-cosmological-constant/ (not opened directly; the transcript it links was read from a local copy)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/fe429f4326945aa8e12f2eaf56219446_MKPswx4hjec.pdf (read from a local copy split by PDF page, t18.pdf / p18.txt; pp. 16–26 read in full. Printed footers on pp. 16, 20, 21, 23, 24 and 26 checked with pdftotext and equal the PDF page numbers.)
  - Lecture 18 slides (local copy, s18.txt). These only summarise Lecture 17 and show CMB data; none of this page's formulas are on them, so "board" is consistent.
  - content/year-4/8.286/_course.json (Lecture 19 and 23 titles)
  - content/year-4/8.286/matter-radiation-equality.mdx (where the energy-conservation equation appears on the site)
verdict: pass-with-notes
---

# Review: The cosmological constant and vacuum energy

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The 1998 discovery", who announced first | p. 16: "which group was first? I think that was the High-Z Supernova-- where are they? Yeah. That was the High-Z Supernova Search Team." Guth hedges. | States as fact that High-Z "announced first, at a meeting of the American Astronomical Society in January 1998". | Attribute it: "Guth recalls that the High-Z team announced first…". Priority between the two teams is a known point of dispute (both presented early results at the January 1998 AAS meeting), so the page should not settle it in its own voice. |
| 2 | warning | "A cosmological constant makes the universe older" | p. 25: "I'm comparing two different theories, both of which are the same age today." This is a slip; the argument (and the next sentence, "We've measured the value of h") needs the same H today. | "two models with the **same** $H$ today" | The page is right, but writing rule 4 asks for a short bracketed note where the page departs from the spoken words for a slip, e.g. "(Guth says 'the same age today'; he means the same H.)" |
| 3 | info | "Einstein's cosmological constant", 1916 note | p. 18: "Einstein invented the theory of general relativity in 1916." | "(published 1916, Guth says; the field equations were completed in November 1915)" | The history is correct (field equations presented 25 Nov 1915; the full review paper published in Annalen der Physik in 1916). But Guth said "invented", not "published", so "published 1916, Guth says" puts a word in his mouth. Suggest: "(Guth says 1916, when the full theory was published; the field equations were completed in November 1915)". |
| 4 | info | "The 1998 discovery", 52 astronomers | p. 16: "something like 52 astronomers… the majority of the astronomers of the world" ("I'm exaggerating slightly"). | "about 52 between them, a large share of those who could have argued with them" | Fair, toned-down paraphrase of a self-declared exaggeration. No change needed. |
| 5 | info | "Negative pressure", "The energy-conservation equation from Lecture 15" | p. 20: "We already derived it. Actually, I think you derived it on the homework". | "from Lecture 15" | Consistent with the site: `matter-radiation-equality` (Lecture 15) derives it at p. 25 (board). No change needed; optionally add "(and on the homework)". |
| 6 | info | Q&A on a changing vacuum | p. 22: the answer is labelled "AUDIENCE" in the transcript, but it is clearly Guth answering. Guth also remarks that in "a completely different context" the laws of physics might change with time, outside physics as we know it. | Attributes the answer to Guth; omits the "laws might change" aside. | Attribution is right (transcript label is a transcription error). The omitted aside is minor; optional one clause. |
| 7 | info | Plot domain | — (page's own plot) | `domain={[-1.1, 1]}`, slider $\Omega_\text{vac}$ up to 0.95 | For $\Omega_\text{vac} > 0.816$ the age exceeds $1.1/H_0$ (1.49/H₀ at 0.95), so the matter+vacuum Big Bang moves off the left edge and the point of the caption ("the Big Bang lies further back") is no longer visible. Suggest domain `[-1.6, 1]` or slider max 0.8. |

### Formula and citation check (all board; the slides contain none of them)
- $u_\text{vac} = \rho_\text{vac}c^2 = \Lambda c^4/8\pi G$, "p. 20 (board)": **correct**. Spoken on p. 20 ("the energy density of the vacuum-- which is also the mass density of the vacuum times c squared-- is equal to Einstein's lambda times c to the fourth, over 8 pi G").
- $\dot\rho = -3(\dot a/a)(\rho + p/c^2)$, $\dot\rho_\text{vac} = 0 \Rightarrow p_\text{vac} = -\rho_\text{vac}c^2$, "pp. 20–21 (board)": **correct**. $\dot\rho_\text{vac}=0$ and the conservation equation on p. 20; $p_\text{vac} = -\rho_\text{vac}c^2$ at the top of p. 21.
- $\ddot a = -\frac{4\pi}{3}G(\rho_n + 3p_n/c^2)a + \frac{8\pi}{3}G\rho_\text{vac}a$, "p. 21 (board)": **correct**. Derivation: $\rho_\text{vac} + 3p_\text{vac}/c^2 = \rho_\text{vac} - 3\rho_\text{vac} = -2\rho_\text{vac}$; $-\frac{4\pi}{3}G(-2\rho_\text{vac})a = +\frac{8\pi}{3}G\rho_\text{vac}a$. Matches Guth's "minus 2 rho vac times a" inside the bracket (p. 21).
- First Friedmann equation with $\rho_\text{vac}+\rho_m+\rho_r$, $\rho_m\propto a^{-3}$, $\rho_r\propto a^{-4}$, "p. 23 (board)": **correct** (all on p. 23).
- $H \to H_\text{vac} = \sqrt{8\pi G\rho_\text{vac}/3}$, $a \propto e^{H_\text{vac}t}$, "pp. 23–24 (board)": **correct**. The limit is at the bottom of p. 23; the name $h_\text{vac}$ and $e^{h_\text{vac}t}$ are on p. 24.

## Arithmetic and answer checks
Recomputed with a Python script (G = 6.674e-11, c = 2.998e8, Mpc = 3.0857e22 m, Gyr = 3.15576e16 s, m_H = 1.6735e-27 kg):
- Plot curves: flat matter-only $H/H_0 = 2/(3(x+2/3))$ and flat matter+Λ $H/H_0 = \sqrt{L}\coth(1.5\sqrt{L}(x+t_0))$ with $t_0 = \frac{2}{3\sqrt L}\operatorname{atanh}\sqrt L$ are the correct standard solutions ($a\propto\sinh^{2/3}(\tfrac32\sqrt{\Omega_\text{vac}}H_0t)$). Both give $H/H_0 = 1.000$ at $x = 0$ for L = 0.05, 0.7, 0.95. **OK.**
- Caption: $t_0 = 0.9641/H_0$ at L = 0.7 (page 0.964); 14.07 Gyr vs 9.73 Gyr for h = 0.67 (page 14.1 and 9.7). Floor $\sqrt{\Omega_\text{vac}}H_0$ correct. The caption honestly says these solutions are not derived in the lecture. **OK.**
- Worked example: $\rho_c = 8.432\times10^{-27}$ kg/m³ (page 8.43; $1.88h^2\times10^{-29}$ g/cm³ gives 8.44e-27, consistent given the rounded 1.88); $\rho_\text{vac} = 5.902\times10^{-27}$ (5.90); 3.53 H atoms/m³ (≈3.5); $u = 5.31\times10^{-10}$ J/m³ (5.3); $\Lambda = 1.10\times10^{-52}$ m⁻² (1.1); $H_\text{vac} = 56.06$ km/s/Mpc (56); $1/H_\text{vac} = 17.44$ Gyr (17.4); $\ln2/H_\text{vac} = 12.09$ Gyr (≈12). **All OK.**
- Quiz 1 (answer 1, accelerating; faster than ~5 Gyr ago): matches p. 17. **OK.**
- Quiz 2 (answer 1, $\dot\rho_\text{vac}=0$ plus conservation): matches pp. 20–21. **OK.**
- Quiz 3 (answer 1, $+\frac{8\pi}{3}G\rho_\text{vac}a$): derived above. **OK.**
- Quiz 4 (answer 2, exponential): pp. 23–24. **OK.**
- Quiz 5 (answer 1, older): pp. 24–25. Explanation ("H was smaller in the past than in a matter-only model") is right for equal $H_0$ — the vacuum curve lies below at all earlier times (Guth: "this curve is always below this curve"). **OK.**
- Flashcards: all four agree with the formulas above. **OK.**

## Coverage and order
- Page follows the transcript order on pp. 16–26: discovery and teams (16–17), Einstein 1917 and static universe (18), Newton (18–19), Λ as repulsion (19), vacuum energy and QFT (19–20), $\Lambda$ relation (20), $p_\text{vac}$ (20–21), $\ddot a$ (21), inflation remark (21–22), harmonic-oscillator Q&A (22), changing vacuum / multiple vacua / tunnelling (22–23), first Friedmann equation and exponential growth (23–24), age argument (24–25), preview of the age integral (25–26). Nothing out of order.
- Omitted: only the aside about laws of physics changing in another context (p. 22) and the brief "where are they?" search for the team name. Not significant.
- Added (clearly marked as the page's own): the exact flat-universe plot, the worked example, the later-developments callout.

## Licensing
- The transcript has no "All rights reserved" or "Courtesy of" notices on pp. 16–26; the page uses no MIT images.
- No verbatim copying beyond short phrases ("What else could it become?" is paraphrased as "what else could it become?" — a four-word phrase, acceptable). The worked example is original (Guth gives no numbers in this part).
- No OpenStax or LibreTexts material.

## Notes
- Later-developments callout: 2011 Nobel Prize in Physics to Saul Perlmutter, Brian Schmidt and Adam Riess — **correct**. "About 70%" is consistent with Planck 2018 ($\Omega_\Lambda \approx 0.685$). "From 2024 on, hints that dark energy might change slowly" — consistent with DESI DR1 (2024) and DR2 (2025) combined with supernova data; correctly hedged as open. The body text's "The discovery earned a Nobel Prize" matches Guth (p. 16) with no year, as required.
- Cosmology callout and `leadsTo` Lecture 19: matches p. 26 (integral for the age in terms of $\Omega_m$, $\Omega_r$ and an $\Omega$ for curvature; "That is what the Planck team uses"). Guth names matter, radiation and curvature explicitly on p. 26; $\Omega_\text{vac}$ is implied by the context but not said in those words. The Lecture 19 transcript was not read, so the actual content of Lecture 19 is **unverified** beyond its title ("The Cosmological Constant, Part II").
- `leadsTo` Lecture 23 "Inflation": title confirmed in `_course.json`; Guth's link on pp. 21–22 ("things like vacuum energy can actually drive the expansion of the universe in the first place in what we call inflation") supports it.
- Prerequisites `radiation-dominated-universe`, `newtons-static-universe`, `age-of-the-universe` all exist.
- Verdict: no errors; two warnings (hedge the High-Z priority claim; bracket Guth's "same age" slip) and minor info items.

## Resolution (2026-11-14, by the page author)

- Warning 1: "who came first" is now Guth's hedged recollection, and the page notes that the priority has been debated.
- Warning 2: added a bracketed note that on p. 25 Guth says "the same age today" but means the same Hubble rate.
- Info (1916): reworded. Guth dates general relativity to 1916, and a bracketed note gives the November 1915 field equations and the 1916 full paper.
- Info (plot domain): widened to [−1.6, 1], so the Big Bang stays on screen up to Ω_vac = 0.95 (age 1.49/H₀).
- Info items left as they are: "Lecture 15" for the energy equation (consistent with the site), and the omitted remark about laws of physics changing.
