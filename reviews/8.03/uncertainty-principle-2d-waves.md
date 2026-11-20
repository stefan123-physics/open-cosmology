---
page: content/year-2/8.03/uncertainty-principle-2d-waves.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-ii-electromagnetic-waves/lecture-15/ (read, saved OCW page; title "Lecture 15: Uncertainty Principle, 2D Waves", links to notes, transcript, problem set and video; no "All rights reserved" or "Courtesy of" notice)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec15/ (read; typed notes with hand-drawn sketches, 7 PDF pages, page 7 is the OCW credit page; read from rendered page images because the extracted text is garbled)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/75e14c13d548e1a2c63664aadde995b4_In0E5_JrPpo.pdf (read; transcript, 17 pages of text, no printed page numbers, so PDF page = page)
verdict: pass-with-notes
---

# Review: The uncertainty principle and waves in two dimensions

No wrong physics, wrong numbers or wrong citations found. Every `<Formula>` citation was checked against the notes images and the transcript; every number and quiz answer was recomputed; `npm run calc:test -- -k uncertainty-principle` passes (13 checks). The findings below are clarity, attribution and slip-reporting points.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The uncertainty principle", bracket after "so $R \geq 0$" | Transcript p. 6: Lee calls the function $\gamma(\kappa, t)$ "r of kappa and t" (small r) and the ratio "capital R"; the "maybe you are Heisenberg" remark refers to the small-r definition | "(Lee calls it $r$; if you cannot see where it comes from …)", placed straight after the sentence about $R$, so "it" reads as $R$ | "(Lee calls $\gamma$ a small $r$; if you cannot see where its definition comes from, …)" |
| 2 | warning | Expansion of $\lvert\gamma\rvert^2$ and $R(\kappa) \geq 0$ | Notes p. 3 write $\lvert\gamma\rvert^2 = \lvert Tf\rvert^2 + \lvert\Omega f\rvert^2 + \dots$ (the $\kappa^2$ is missing; Lee adds it aloud, transcript p. 7: "should have a kappa square in front of it"), and notes pp. 3–4 write $R > 0$ (strict) | $\lvert\kappa\Omega f\rvert^2$ and $R \geq 0$ (both correct) | The page is right but silently differs from the notes. Following the page's own practice for the other notes slips, add a short bracket: "(The notes drop the $\kappa^2$ on the second term, which Lee supplies in the lecture, and write $R > 0$ where $\geq$ is meant.)" |
| 3 | warning | "Does light have a mass?", pulsar facts | Transcript p. 13: Lee says B1937+21 has a period of 1.6 ms and is "16,000 light years away"; p. 13 "somebody actually did this measurement … the mass will be 1.3 × 10⁻⁴⁹ gram" (no reference given) | States the distance and the apparent mass as plain facts | Attribute both: "Lee quotes a distance of about 16,000 light years" and "a measurement Lee quotes gave …". The 1.6 ms period is right (1.558 ms). The distance is uncertain: catalogue estimates for B1937+21 that I am aware of are nearer 3 kpc (about 10,000 light years), so 16,000 ly looks like an older or upper estimate; I could not verify it here and did not check the 1.3 × 10⁻⁴⁹ g figure against a primary paper. |
| 4 | warning | `leadsTo` 8.286 Lecture 23 ("Quantum fluctuations during inflation come from the same uncertainty relation between conjugate quantities.") | The site's Lecture 23 page (`content/year-4/8.286/inflation-solutions.mdx`, line 104) reports Guth saying quantum mechanics is "fundamentally probabilistic", so the uniform classical density becomes almost uniform; it does not mention the uncertainty principle. Guth does name it in Lecture 1 ("the uncertainty principle forbids perfect uniformity", `inflation-overview.mdx`, line 147) | Presents the uncertainty-relation link as what Lecture 23 is about | The physics is fair (a field and its conjugate momentum obey an uncertainty relation), but the wording goes beyond what Lecture 23 says. Either soften it ("Inflation turns quantum fluctuations, which the uncertainty principle makes unavoidable, into the seeds of galaxies") or add a `leadsTo` to 8.286 Lecture 1, where Guth makes the connection explicitly. |
| 5 | warning | End of page | AGENTS.md rule 6: foundation pages end with a `<Callout kind="cosmology">` + `leadsTo` where a real connection exists | Has a `leadsTo` into 8.286 but no cosmology callout | Add a short callout (e.g. the uncertainty principle as the source of primordial fluctuations; the pulsar dispersion measure as a probe of the interstellar electrons), worded as in item 4. Several other 8.03 pages also lack one, so this may be a deliberate choice; flagging for consistency. |
| 6 | info | Summary (frontmatter and `## Summary`), quiz 1, flashcards, prose: "$\Gamma/\pi(\Gamma^2 + \omega^2)$", "$\kappa = 1/2\Delta\omega^2$", "$1/4\Delta\omega^2$", "$1/2\Gamma^3$", "$1/2\Gamma^2$" | Notes write these as stacked fractions | Inline slashes | Strictly these read as $(\Gamma/\pi)(\Gamma^2+\omega^2)$, $(1/2)\Delta\omega^2$, etc. Add brackets: $\Gamma/[\pi(\Gamma^2+\omega^2)]$, $1/(2\Delta\omega^2)$, $1/(4\Delta\omega^2)$, $1/(2\Gamma^3)$, $1/(2\Gamma^2)$. Also matters for read-aloud. |
| 7 | info | "Two-dimensional normal mode" formula, cited `reading1` p. 5 | Notes p. 5 give $Ae^{ik_xx}e^{ik_yy} = Ae^{i\vec k\cdot\vec r}$ for the infinite beaded mesh; the plate argument (translation symmetry in x and y, $\psi = Ae^{ik_xx}e^{ik_yy}$, take the real part) is on the board, transcript p. 15 | Formula introduced for an infinite plate, cited to the notes only | Citation is valid (the equation is on notes p. 5). Optionally cite the transcript p. 15 as well, since the page's context (a plate) is the lecture's, not the notes'. |
| 8 | info | AM radio paragraph | Transcript p. 10: Lee says "3 times 10 to the 4 Hz"; notes p. 4 give $3 \times 10^4$ s⁻¹ | s⁻¹ | Page follows the notes, correctly (an angular frequency). Lee's "Hz" is a small unit slip; no change needed, optional bracket. |
| 9 | info | "Measuring the spreads", AM numbers sentence | Notes p. 1 give "ω₀: 0.3–30 MHz, Δω: 5 kHz" (MIT mixes ω and ν here); transcript pp. 1–2 recall the AM result but give no numbers | Copies the notes' values and cites both | Fine. If desired, note that the "5 kHz" is a bandwidth in ordinary frequency (2π × 5 kHz ≈ 3 × 10⁴ s⁻¹ is what p. 4 uses). |

## Arithmetic and answer checks
- $C(\omega)$: $\frac{1}{2\pi}\left[\frac{1}{\Gamma+i\omega} + \frac{1}{\Gamma-i\omega}\right] = \frac{1}{2\pi}\frac{2\Gamma}{\Gamma^2+\omega^2} = \frac{\Gamma}{\pi(\Gamma^2+\omega^2)}$. Correct. Notes slips confirmed on notes p. 1: the example is headed $f(t) = e^{\Gamma|t|}$ while the integral uses $e^{-\Gamma|t|}$, and the third line has $\frac{i}{\Gamma - i\omega}$ (stray $i$). The page's bracket reports both correctly.
- $\Gamma$ sequence 0.1, 0.2, 0.5, 1, 2.0, 5 (transcript pp. 2–3): matches "from 0.1 to 5". Notes pp. 1–2 sketch Γ = 2 (narrow) and Γ = 0.5 (wide). Problem set with a Gaussian: transcript p. 3, notes p. 2. Correct.
- Frequency as $i\,\partial/\partial t$ (with $f = \int C e^{-i\omega t}d\omega$, the notes' convention): correct; notes p. 2 item 4.
- Expansion of $\lvert(T - i\kappa\Omega)f\rvert^2$: recomputed, $= \lvert Tf\rvert^2 + \kappa^2\lvert\Omega f\rvert^2 + i\kappa[Tf(\Omega f)^* - (\Omega f)Tf^*]$; with $(\Omega f)^* = -i\partial f^*/\partial t - \langle\omega\rangle f^*$ the $\langle\omega\rangle$ terms cancel and the bracket becomes $\kappa T\,\partial(ff^*)/\partial t$; by parts, $-\kappa\int\lvert f\rvert^2dt$. All correct.
- Minimum: $dR/d\kappa = 2\kappa\Delta\omega^2 - 1 = 0 \Rightarrow \kappa = 1/(2\Delta\omega^2)$; $R_{min} = \Delta t^2 - 1/(4\Delta\omega^2) \geq 0 \Rightarrow \Delta t\,\Delta\omega \geq 1/2$. Correct (notes p. 4, transcript p. 10).
- AM: $2\pi \times 5000 = 3.14 \times 10^4$ s⁻¹; $1/(2 \times 3.14 \times 10^4) = 1.6 \times 10^{-5}$ s, "a few times 10⁻⁵ s". Correct.
- ħ: $1.0546 \times 10^{-34}/1.602 \times 10^{-19} = 6.58 \times 10^{-16}$ eV·s. The notes (p. 5) print $6.6 \times 10^{-10}$ eV·s; the page's "slip for $6.6 \times 10^{-16}$" is correct. "$\approx 1 \times 10^{-34}$ J·s" matches the notes and is right to one figure.
- Massive photon: $E^2 = p^2c^2 + m^2c^4$, $E = \hbar\omega$, $p = \hbar k$ → $\omega^2 = c^2k^2 + (mc^2/\hbar)^2$. Correct; on the board only (transcript p. 12), so `reading2` is the right citation.
- Beaded mesh $\omega^2$: matches notes p. 5 exactly.
- Worked example (a), recomputed: $\int e^{-2\Gamma|t|}dt = 1/\Gamma$; $\int t^2e^{-2\Gamma|t|}dt = 2 \cdot 2/(2\Gamma)^3 = 1/(2\Gamma^3)$; $\Delta t^2 = 1/(2\Gamma^2)$. $\langle\omega\rangle \propto \int f f'\,dt = 0$ for real $f$; $\lvert f'\rvert = \Gamma\lvert f\rvert$ (except at $t = 0$, a single point) gives $\Delta\omega^2 = \Gamma^2$. Cross-check in frequency space: $\int\omega^2(\Gamma^2+\omega^2)^{-2}d\omega \big/ \int(\Gamma^2+\omega^2)^{-2}d\omega = (\pi/2\Gamma)/(\pi/2\Gamma^3) = \Gamma^2$. Product $1/\sqrt2 = 0.707$. Correct, and original (MIT does not compute the spreads for this function).
- Worked example (b): $2\pi \times 9000 = 5.65 \times 10^4$ s⁻¹ → $5.7 \times 10^4$; $1/(2 \times 5.65 \times 10^4) = 8.84 \times 10^{-6}$ s → $8.8 \times 10^{-6}$. Correct; original numbers (9 kHz channel).
- Quiz 1 (answer 1, wider spectrum, narrower pulse): correct. Quiz 2 (answer 1, $\geq 1/2$): correct. Quiz 3 (answer 1, lower frequencies later, as if dispersive): correct; matches transcript pp. 12–14 (for a massive photon the group velocity falls at low ω, and the plasma also delays low frequencies). Quiz 4 (answer 1, nodal lines): correct; matches transcript p. 16.
- Flashcards: all three correct.
- calcs file: all 13 entries pass. Minor: entry `ex-norm` uses as its `shown` text the $\int t^2\lvert f\rvert^2dt$ phrase rather than the "$\int|f|^2dt = 1/\Gamma$" phrase it checks, and $\Delta\omega^2 = \Gamma^2$ has no entry. Optional to fix.

## Coverage and order
- Page order matches the lecture: review of AM/narrow band (transcript pp. 1–2) → $e^{-\Gamma|t|}$ and its transform (pp. 2–3) → intensity, averages, spreads (pp. 3–4) → $\omega \leftrightarrow i\,\partial/\partial t$ (pp. 4–6) → R(κ) proof (pp. 6–10) → AM resolution (pp. 10–11) → Δx Δp (pp. 11–12) → break → photon mass and pulsar (pp. 12–14) → 2D plate and translation symmetry (pp. 14–16) → Chladni demonstration (pp. 16–17).
- Every transcript page citation in the prose was checked and is right.
- The beaded mesh, its $\omega^2$, the "infinitely many modes at fixed ω" point and the wall boundary conditions are in the notes (pp. 5–6) but not in the lecture; the page marks them clearly as "The notes go further". Notes details left out: $L_H = 5a_H$, $L_V = 5a_V$ (4 × 4 beads) and "general solution: linear combination of $\psi_{n_x,n_y}$". Minor; optional.
- Left out from the lecture: Lee's announced three-dimensional waves (not reached in Lecture 15, so nothing missing); the pulsar animation shown in class ("this movie", p. 13) and the remark that the pulsar is near Sagitta. Fine.
- Demonstration vs simulation attributions: the Γ curves are described as "Lee's plots" (a computer visualisation in the lecture, transcript pp. 2–3, plus hand sketches in the notes): fine. The Chladni plate is correctly called a demonstration (a real plate, loudspeaker and sand, transcript p. 16). The binary-pulsar "movie" is not mentioned, so no attribution issue.
- "a topic for a later lecture" (free electrons making space dispersive): Lee says "in the coming lectures" (p. 14); the 8.03 syllabus has Lecture 19 "Waves in Medium", which is presumably where it is covered. Optionally add a `leadsTo` to Lecture 19 once confirmed.
- `leadsTo` 8.03 Lecture 16: correct; Lee says (p. 17) the next lecture does the detailed 2D calculation, and the existing Lecture 16 page covers the mesh, 2D/3D waves and Snell's law.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes, transcript or OCW page; the notes end with the standard OCW credit page.
- No figures reused: the notes' hand-drawn sketches (pulse/spectrum pairs, the "ok / not separable" pulses, the bead mesh) are not reproduced; the page has no images.
- No verbatim copying beyond short standard phrases. "Take home message" and "maybe you are Heisenberg" are short paraphrased quotes, attributed to Lee. Worked examples are original.
- No OpenStax or LibreTexts material.

## Notes
- The three notes slips named in the page (the $e^{\Gamma|t|}$ heading, the stray $i$, ħ in eV·s) were all confirmed on the notes images and are reported accurately.
- The transcript calls ħ "the Planck constant" (p. 11); the page's "ħ = h/2π" follows the notes and is correct; no bracket is needed.
- Pulsar distance and the 1.3 × 10⁻⁴⁹ g figure: marked uncertain above (item 3); I did not consult external catalogues or papers during this review.
- Draft status is appropriate until the warnings are addressed and a Resolution section is appended.

## Resolution (2026-11-16, by the page author)

1. The bracket now says Lee calls γ a small r and the ratio capital R.
2. Added brackets for the notes' missing κ² (which Lee adds aloud, p. 7) and their R > 0 for R ≥ 0.
3. The pulsar figures are now given as quoted by Lee.
4. The 8.286 Lecture 23 `why` now speaks of quantum fluctuations made unavoidable by quantum mechanics, not of the uncertainty relation.
5. Not changed (no callout, as on most 8.03 pages).
Info: calcs `ex-norm` now points to its own phrase, and `ex-domega-gamma` checks Δω² = Γ². Others not changed.
