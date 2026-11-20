---
page: content/year-2/8.04/de-broglie-waves-group-velocity.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes4/ (read: Zwiebach, Lecture 4 notes, 8 PDF pages, printed pages 1–7; text extracted with pdftotext, page 2 also viewed as an image to check symbols)
  - content/year-4/8.286/cosmological-redshift.mdx and content/year-4/8.286/christoffel-symbols.mdx (read, for the cosmology callout and leadsTo)
verdict: needs-changes
---

# Review: Matter waves under a change of frame, and group velocity

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "The phase seen from S′", `at="notes p. 2, eq. (1.10)"` | Eq. (1.10) is at the top of printed page 3 (page 2 ends with eq. (1.9); checked with `pdftotext -f 3 -l 3`) | p. 2 | Change to `at="notes p. 3, eq. (1.10)"`. The same citation is in `calcs/8.04/de-broglie-waves-group-velocity.yaml` (id `galilean-phase`, `source.at`), so fix it there too. |
| 2 | info | "The de Broglie wavelength in two frames": "velocity $\tilde v$ in S (the notes use a separate symbol for it)" | The notes themselves write the particle's velocity as $\tilde v$ ($p = m\tilde v$, $\tilde v' = \tilde v - v$, eqs. (1.5), Fig. 1 caption) | Wording suggests the page introduced the tilde, or that the notes use a different symbol | Say "as in the notes, $\tilde v$ to keep it apart from the frame velocity $v$". So this is not a change of notation. |
| 3 | info | Formula "The packet slides along unchanged" (eq. (2.31)) | Writes $\frac{d\omega}{dk}\big|_{k_0}$ explicitly in the phase and argument; the text after (2.33) calls it $v_{gr}$ | Uses $v_g$, defined just before as the slope $d\omega/dk$ at $k_0$ | Fine as it is: the substitution is stated in the sentence before. Optional: add "(the notes write $d\omega/dk|_{k_0}$ in full)". |
| 4 | warning | `leadsTo` 8.286 Lecture 5, `why` | 8.286 Lecture 5 (page `cosmological-redshift`) derives the redshift of light only. The massive-particle result ($p \propto 1/a$) is mentioned only on `christoffel-symbols` (Lecture 14) as a homework problem / "standard result". | "the wavelengths of light, and the de Broglie wavelengths of free particles, stretch with the scale factor" | The callout says this correctly (it credits the massive-particle part to the geodesic page and calls it the page's own framing). The `why` line credits both to Lecture 5. Reword it, e.g. "Light's wavelength stretches with the scale factor; the same holds for a free particle's de Broglie wavelength (see the geodesic equation, Lecture 14)". Or add a second leadsTo to 8.286 Lecture 14. |
| 5 | info | "(An exercise in the notes: if $\Phi$ is complex … the packet is shifted but its velocity is unchanged.)" | The notes set the exercise (find the new (2.25), show the velocity is unchanged); they do not state that the packet is shifted | States the shift as part of the exercise | Correct physics ($x = (d\omega/dk)t - d\varphi/dk$ at $k_0$). You could mark "shifted" as the answer to the exercise, but this is optional. |
| 6 | info | Phase velocity: quiz Q3, worked example (c), the plot | The notes' Section 2 is titled "Phase and Group Velocities", but they only define $V = \omega/k$ as the wave velocity (eq. (1.8)) and never compute the free particle's phase velocity $v/2$ | Computes phase velocity $= v/2$ | Correct physics and a fair addition. No change needed. You could mark it as going beyond the notes. |

All other formula citations were checked against the PDF and are correct:
- (1.1), (1.2) and (1.3) on p. 1.
- (1.4)–(1.7) and (1.8) on p. 2.
- (1.11)–(1.13), (1.15), (1.16) and (1.17) on p. 3.
- (1.18)–(1.20) on pp. 3–4, and (1.21), (2.22) and (2.24) on p. 4.
- (2.26), (2.31), (2.32) and (2.33) on p. 5.
- (3.1)–(3.10) on p. 6, and (3.11)–(3.15) on p. 7.

Each formula's content matches the notes. One small difference: in (1.8) the page shows only the middle form $\frac{2\pi}{\lambda}(x - Vt)$, without the notes' $k(x - \frac{\omega}{k}t)$ and the expanded form. That is fine.

## Arithmetic and answer checks
- Example (a):
  - $p = 9.109\times10^{-31}\times10^6 = 9.109\times10^{-25}$ kg m/s.
  - $\lambda = 6.626\times10^{-34}/9.109\times10^{-25} = 7.274\times10^{-10}$ m, which is 0.727 nm. Correct.
  - In S′ the speed is $10^6 - 4\times10^5 = 6.0\times10^5$ m/s, and $\lambda' = 6.626\times10^{-34}/(5.465\times10^{-25}) = 1.212\times10^{-9}$ m, which is 1.21 nm. Correct.
- Example (b): $\lambda = 340/680 = 0.50$ m; $f' = 680(1 - 34/340) = 612$ Hz. Correct. (A cyclist moving with the wave sees the same wavelength and a lower frequency, consistent with (1.11)–(1.12).)
- Example (c): $\omega/k = \hbar k/2m = v/2 = 5.0\times10^5$ m/s and $d\omega/dk = v = 1.00\times10^6$ m/s. Correct.
- Quiz:
  - Q1: answer $h/(p - mv)$. Correct.
  - Q2: same wavelength, lower frequency. Correct ($\omega' = \omega(1 - v/V)$ with $0 < v < V$).
  - Q3: phase velocity $v/2$, group velocity $v$. Correct.
  - Q4: the cosine superposition $2\cos kx\cos\omega t$ vanishes everywhere. Correct.
  - All explanations are right.
- Flashcards: all three are correct.
- Plot: the envelope $e^{-(x-2t)^2/2}$ moves at 2, and the carrier $\cos(6(x - t))$ has phase velocity 1, a ratio of 2 as for $\omega \propto k^2$. These match a dispersion $\omega = k^2/6$ at $k_0 = 6$: phase velocity $k_0/6 = 1$, group velocity $k_0/3 = 2$. The carrier phase $6x - 6t$ is exactly what eq. (2.31) gives for a real Gaussian $\Phi$ centred at $k_0 = 6$ with $\omega(k_0) = 6$, so the plot is a faithful first-order picture.
  - At $t = 4$ the packet peak is at $x = 8$, inside the domain $[-3, 12]$.
  - The caption ("crests slip backwards through the packet") is correct, because crests move slower than the envelope. Its statement that spreading is neglected is accurate.
- The calcs file (`calcs/8.04/de-broglie-waves-group-velocity.yaml`) covers every number on the page; the values agree with the page. Only its `galilean-phase` citation is wrong (finding 1).

## Coverage and order
- The page follows the notes' order: §1 (wavefunction, Galilean transformation, the de Broglie wavelength in two frames, the ordinary-wave calculation, non-measurability, $E = \hbar\omega$ with three pieces of evidence, the de Broglie relations), then §2 (wave packet, stationary phase, group velocity, the exercise, the Taylor-expansion derivation (2.27)–(2.33)), then §3 (four candidate waves, superposition argument, the convention, 3D form).
- No MIT segment is left out. The intermediate steps (2.28)–(2.30) are summarised in words, not displayed. That is acceptable.
- Additions: the phase velocity $v/2$ (quiz, example, plot), the plot, the worked example and the cosmology callout.

## Licensing
- No figure is reproduced. The notes' Figs. 1 and 2 are hand-drawn, and the page does not use them. The plot is generated from formulas.
- The notes carry no "All rights reserved" or "Courtesy of" notices (grep of the extracted text). The transcription credit (Turner and Geller) concerns the notes, not reused material.
- No verbatim copying of paragraphs was found. The "photograph" intuition and "adding a state to itself changes nothing" are close paraphrases of short ideas in the notes, which is acceptable.
- The worked example uses the page's own numbers and situations (electron at $10^6$ m/s, a cyclist and a 680 Hz sound wave); the notes have no numerical example.
- No OpenStax or LibreTexts material.

## Notes
- The cosmology callout is accurate:
  - Free particles' momentum falls as $1/a$, so $\lambda_{dB} \propto a$, like a photon's wavelength.
  - It is fairly attributed: the homework and "standard result" are as stated on `christoffel-symbols.mdx` (lines 60 and 144), and the redshift of light is in 8.286 Lecture 5 (`cosmological-redshift.mdx`, `lecture: 5`).
  - The link paths `/courses/8-286/christoffel-symbols` and `/courses/8-286/cosmological-redshift` match existing slugs. I did not check in a running site that the course id resolves as `8-286`; the format is assumed to match the other pages.
- leadsTo 8.04 Lecture 5 exists in the 8.04 syllabus. The reason ("momentum operator and Schrödinger equation") matches the 8.04 course outline. I did not verify it against the Lecture 5 notes.
- The source URL `…/mit8_04s16_lecnotes4/` matches `_course.json`. I did not fetch the OCW page itself; the PDF supplied was read.

## Resolution (2026-11-17, by the page author)

1. Fixed: "The phase seen from S′" now cites notes p. 3, eq. (1.10); the calcs entry `galilean-phase` too.
2. The remark now says the tilde is the notes' own, keeping the particle's velocity apart from the frames' relative velocity.
3. No change.
4. The 8.286 Lecture 5 `why` now mentions only the redshift of light; a second leadsTo to 8.286 Lecture 14 (geodesic equation, momentum falling as 1/a) added.
5. The exercise sentence now says the answer is worked out on the page, not in the notes.
6. No change.

Status set to `reviewed`.
