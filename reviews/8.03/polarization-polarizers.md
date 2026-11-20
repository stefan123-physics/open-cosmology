---
page: content/year-2/8.03/polarization-polarizers.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-17/ (read, saved copy of the OCW page; its notes and transcript links match the page's readings)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec17/ (read: notes PDF, 7 pages, p. 7 = OCW credit page; read from the rendered page images because the extracted text is garbled)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/3925f0496a096c9efc1542b43bddf567_TjxR7lAwWhI.pdf (read: transcript, 20 PDF pages, no printed page numbers, so PDF page = page; p. 20 is only "[INAUDIBLE]")
verdict: needs-changes
---

# Review: Polarization and polarizers

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Flashcard "Polarization column vectors" | Notes p. 2: linear examples include $E_0(\cos\theta, \sin\theta)$ (unequal amplitudes, in phase); p. 3: ellipse for $\Delta\phi \neq \pi/2, 3\pi/2$ in the context of equal amplitudes, with case 1 ($\Delta\phi = 0$) linear. | "Elliptical: unequal amplitudes, or a phase difference other than $\pi/2$, $3\pi/2$." This calls in-phase light with unequal amplitudes elliptical, which contradicts the card's own first line ($E_0(\cos\theta,\sin\theta)$ is linear), and calls $\Delta\phi = 0$ or $\pi$ elliptical. | "Elliptical: any phase difference other than $0$ or $\pi$, except equal amplitudes at $\pi/2$ or $3\pi/2$ (circular)." |
| 2 | warning | Frontmatter `summary` ("Unequal amplitudes, or another phase difference, give an ellipse") and `## Summary` bullet 2 ("otherwise elliptical") | Same as above: in phase or in antiphase is linear whatever the amplitudes. | Same imprecision as #1 in milder form (the body, item 4, correctly excludes $0$ and $\pi$). | Say "unequal amplitudes a quarter period apart, or a phase difference other than $0$ or $\pi$, give an ellipse". |
| 3 | warning | Frontmatter `summary`: "a third one at 45° between them lets light through, as microwaves and a laptop screen show" | Transcript p. 17: with the microwaves, the 45° plate "doesn't really work very well. The signal probably is too small"; only the laptop screen showed the three-polarizer effect (pp. 17–18). | The microwaves are cited as showing the 45° effect. (The body, p. 17 paragraph, reports it correctly.) | "... lets light through, as a laptop screen shows (the microwave version gave too small a signal)", or credit the microwaves only with the single-grid blocking and passing. |
| 4 | warning | `## Summary` bullet 4: "A 45° polarizer between crossed ones lets a quarter through: true even for single photons." | Transcript pp. 18–19: the single-photon thought experiment is unpolarized light through an $x$ polarizer and then a 45° polarizer (two polarizers), giving $I_0/4$ of the unpolarized intensity, "not 0 or I over 2". Lee does not discuss single photons through the crossed-plus-45° stack. | Merges the three-polarizer demonstration with the single-photon argument. The physics is not wrong (each photon that passes the first polarizer then passes with probability 1/4), but it is not what Lee argued. | Split: "A 45° polarizer between crossed ones passes a quarter of the light after the first. Single photons through $x$ then 45° give $I_0/4$, the wave answer (Lee)." |
| 5 | warning | `## Polarizers`, first sentence "cancels the electric field at its surface and reflects the wave (transcript, p. 13)"; also the review of Snell's law ("the reflected angle") | Lee repeatedly says "refract" / "refraction" where he means reflect (p. 13 "the plate is going to refract the electromagnetic wave"; p. 14 "it got refracted"; p. 16 "refract that component"; p. 17 "there will be no refraction"; and p. 3 calls θr "the refraction angle"). | Page correctly says "reflect", but does not mention the slip, unlike the other slips it notes (rule 4 in AGENTS.md). | Add a short bracket, e.g. "(Lee says 'refract' here; the wave is reflected.)" |
| 6 | warning | Worked example part (b) | Lee's own example is $n_1 = 1.5$ into vacuum (transcript, pp. 3–4). | Uses the same $n = 1.5$ into air, and repeats quiz question 1 exactly (same numbers, same answer 41.8°). Not copied text, but the numbers are MIT's and the example adds nothing beyond the quiz. | Use own numbers (e.g. a silica core $n = 1.46$ in a cladding $n = 1.44$, $\theta_c \approx 80.5°$, or water to air $n = 1.33$, $\theta_c \approx 48.8°$) and update `calcs/8.03/polarization-polarizers.yaml`. |
| 7 | info | `## Polarization`, item 5 placed before `## Polarizers` | Transcript order: perfect-conductor grid and easy axis (pp. 13–14), then unpolarized light (pp. 14–15), then polarizer matrices after the break (pp. 15–16). Notes order: unpolarized (p. 4), then polarizer (p. 5). | Follows the notes' order, not the lecture's. | Acceptable; optionally say the notes' order is followed. |
| 8 | info | Single-photon paragraph, "(p. 19)" after the Einstein phrase | The "God doesn't play dice with the world" quote is on transcript p. 18; p. 19 has the garbled "the nature of plate dies" (nature plays dice). | Cites p. 19 for the sentence that contains the Einstein phrase. | Cite "pp. 18–19" there. |
| 9 | info | Single-photon paragraph: "neither 0 nor everything" | p. 19: "not 0 or I over 2". | "everything" is ambiguous (everything of $I_0$, or of the $I_0/2$ after the first polarizer). | "neither 0 nor $I_0/2$". |
| 10 | info | Single-photon paragraph: "to probability" | Lee speaks of "nature plays dice" (garbled in the transcript) and a link to quantum mechanics; he does not use the word probability. | Interprets as probability. | Fair reading; could be "to chance (nature 'plays dice')". |
| 11 | info | `## Polarization`, opening: "quoting Feynman, a theory that disagrees with experiment is wrong, however beautiful" | p. 5: Lee quotes Feynman ("It doesn't matter how beautiful your theory is ... is wrong"). | Correctly a short paraphrase, not a long quotation. The subject of "quoting" is unclear. | "as Lee quotes Feynman, ..." |
| 12 | info | Demonstrations: "a grid of vertical metal rods" | p. 16 says only "if I have my polarizer arranged in this direction"; vertical follows from the electrons oscillating "up and down" (p. 17). | States vertical. | Reasonable inference; no change needed. |
| 13 | info | Demonstrations: "With two crossed sheets nothing is seen" | pp. 17–18: the screen (vertical) and a horizontal sheet already black out; Lee then inserts "another identical polarizer ... between these two" and still nothing is seen, then a 45° sheet makes the screen visible. The wording is confusing. | Simplified to two crossed sheets. | Uncertain what exactly was on the bench; the page's simplification matches the physics. No change needed. |
| 14 | info | Item 4: "$\Delta\phi$ not 0, $\pi$, $\pi/2$ or $3\pi/2$" | Notes p. 3: "$\Delta\phi \neq \pi/2, 3\pi/2$ ... otherwise circularly polarized"; transcript p. 11 likewise (and says "delta phi now is greater than 1", a slip for greater than 0). | Adds $0$ and $\pi$ (linear), which is correct and an improvement. | None. |

## Arithmetic and answer checks
- `npm run calc:test -- -k polarization-polarizers`: 12 passed.
- TIR: $\sin\theta_c = 1/1.5 = 0.6667$, $\theta_c = 41.81°$. Quiz 1 answer "About 42°" (index 1) correct; worked example (b) 41.8° correct.
- Quiz 2: $\mathrm{Re}[(1, -i)e^{-i\omega t}] = (\cos\omega t, -\sin\omega t)$, constant length, clockwise for $x$ right / $y$ up. Answer "Circular" (index 1) correct; explanation correct and agrees with notes p. 2 ("Clockwise 'right-handed'", hand-drawn arrow clockwise).
- Quiz 3: $\cos^2 60° = 0.25$; answer $I_0/4$ (index 1) correct.
- Quiz 4: $\cos^2 45° \cdot \cos^2 45° = 1/4$ of the intensity after the first polarizer; answer index 1 correct.
- Worked example (a): $I_0/2 \to 0.75 \times 0.5 = 0.375\,I_0 \to 0.25 \times 0.375 = 0.09375 \approx 0.094\,I_0$; the third polarizer (horizontal) is 60° from the second (30° from vertical). Correct. Without the middle one: crossed, zero. Correct.
- General polarization: $e^{i\phi}(A\cos\theta - iB\sin\theta,\ A\sin\theta + iB\cos\theta) = e^{i\phi}R(\theta)(A, iB)$, an ellipse of semi-axes $A$, $|B|$ rotated by $\theta$. Page statement correct; formula matches notes p. 4.
- $P_\theta$ applied to $(\cos\phi, \sin\phi)$ gives $\cos(\theta-\phi)(\cos\theta, \sin\theta)$, so $I_f = I_0\cos^2$ of the angle: correct. $P_{\pi/4}$ entries $1/2$: correct.
- Flashcards: card 1 elliptical definition wrong (finding #1); card 2 ($P_\theta$) and card 3 (Malus) correct.

## Coverage and order
- Formula citations checked against the notes images: Snell's law (notes p. 1) correct; polarized plane wave with $\psi_1 = A_1e^{i\phi_1}$ and $Z$ (p. 1) correct; circular polarization $E_1$, $E_2$, $Z = E_0(1, -i)$ (p. 2) correct; general polarization with $A \ge |B|$ (p. 4) correct; $P_0$, $P_{\pi/2}$, $P_\theta$, $P_{\pi/4}$ (p. 5) correct; $|E_f| = |E_0|\cos\theta \Rightarrow I_f = I_0\cos^2\theta$ (p. 5) correct. Crossed polarizers giving $I_f = 0$ is on notes p. 6, as cited.
- Prose transcript citations checked page by page: Snell review pp. 1–3, slower wave turns p. 3, $n_1 = 1.5$ with the "$n_1$ equal to $n_2$" slip p. 3, $\sin\theta_2 = 1.5\sin\theta_1$ and "explodes" p. 4, water $n \approx 1.33$ and laser p. 4, fibre demonstration failing and US–Asia cables pp. 4–5, rainbow in PSET 8 p. 5, Feynman p. 5, transverse question p. 6, wave set-up pp. 6–7, case 1 pp. 7–9, rotating axes p. 9, case 2 pp. 9–10 (dropped minus sign and "counter-clockwise" on p. 10, correctly flagged), case 3 pp. 10–11, case 4 pp. 11–12, constant intensity p. 12, conductor p. 13, easy axis "life is easy" p. 14, unpolarized pp. 14–15, circle-and-arrow and matrices pp. 15–16, Malus p. 16, microwave demo pp. 16–17, laptop demo with the "LED" slip p. 17, three sheets pp. 17–18, single photons pp. 18–19, quarter-wave plates next time p. 19. All correct apart from #8.
- Notes coverage: every item on notes pp. 1–6 is on the page (cases 1–5, grid of wires, $P$ matrices, Malus, crossed example).
- Transcript coverage: complete. Not mentioned: Lee's closing remark that the next lecture covers how EM waves are generated "after the midterm next week" (p. 19); the `leadsTo` covers it.
- Order follows the lecture except the unpolarized/polarizer swap (#7), which follows the notes.
- "Opens Part III, optics (from the course site)": confirmed, the OCW URL and course navigation put Lecture 16 in Part II and Lecture 17 first in "Part III: Optics".
- Slips noted on the page (dropped minus sign / counter-clockwise, "$n_1$ equal to $n_2$", LED for LCD) are all real and correctly described. The repeated "refract" for "reflect" is not noted (#5).

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes, transcript or the OCW lecture page; the notes' last page is the standard OCW credit page. No figures reproduced.
- No verbatim copying found beyond short standard phrases. Closest: "Emitted at different time with slightly different frequency" (notes p. 4) vs "waves emitted at different times with slightly different frequencies"; one short clause, acceptable. "life is easy" is quoted and attributed.
- Feynman and Einstein: both given as short paraphrase or a well-known short phrase, attributed to Lee's lecture; nothing quoted at length. No OpenStax or LibreTexts material.

## Notes
- Single-photon passage: presented essentially as Lee presents it. "Lee imagines Einstein arguing" is the right hedge: Lee frames the 50/50 picture as what "Einstein was really happy" with (p. 19), which is Lee's teaching device, not a historical claim. Lee describes the result ("this is the result ... $I_0$ over 4") as a thought experiment with "imaginary" polarizers (p. 18), not an in-class demonstration; the page does not claim a demonstration. See #4, #8–#10 for small fixes.
- Demonstrations vs simulations: all items in the "Demonstrations" paragraph were physical demonstrations in class (microwave source with metal rods and oscilloscope; laptop screen with polarizing sheets; laser in water tank; optical fibre to a camera). No simulations are attributed. Correct.
- `leadsTo` 8.03 Lecture 18: OCW title is "Lecture 18: Wave Plates, Radiation"; Lee says quarter-wave plates and how EM fields are generated come next (p. 19). Correct.
- No cosmology callout. No 8.286 or Year 5 page currently discusses polarization, so none is required; a later CMB-polarization link could be added if such a page appears.
- Possible rendering issue (uncertain, not verified in a browser): in the numbered list under `## Polarization`, the `<Formula>` lines inside items 2 and 4 start at column 0, which may end the list; item 5 follows a plain paragraph and starts a new list. Check that the numbering and indentation render as intended.
- Prerequisite `two-dimensional-waves-snells-law` exists; internal link `/courses/8-03/...` matches the course slug.

## Resolution (2026-11-16, by the page author)

Error: the flashcard now says elliptical means any phase difference other than 0 or π, except equal amplitudes at π/2 or 3π/2 (circular).
Warnings:
1. Frontmatter summary and Summary bullet corrected the same way.
2. The summary now credits only the laptop screen for the three-polarizer effect.
3. The last Summary bullet now separates the three-polarizer demonstration from the single-photon case (x then 45°, I₀/4).
4. Added a note that Lee says "refract" for the reflected wave (pp. 3, 13–17).
5. Worked example (b) now uses n = 1.60 (θc ≈ 38.7°); calcs updated, with a separate entry for the quiz's 41.8°.
Info: the Einstein citation is now pp. 18–19; "neither 0 nor I₀/2"; "to probability" removed; "as Lee puts it, quoting Feynman". Others not changed.
