---
page: content/year-1/8.02/interference-and-diffraction.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w14d2/ (read: local copy presentati_w14d2.pdf/.txt, 38 slides "P33- 1" to "P33- 38", slide number = PDF page; this is both `source.url` and reading2)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch14_inter_diffr/ (read: local copy ch14_inter_diffr.pdf/.txt, 35 PDF pages; printed page = PDF page − 1, every cited page confirmed with pdftotext -f N -l N)
  - calcs/8.02/interference-and-diffraction.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k interference-and`: 7 passed)
  - content/year-1/8.02/_course.json (Sessions 34–36), content/year-4/8.286/doppler-effect.mdx (leadsTo check)
  - `npm run content:check`: the only message for this page is the missing review file (the 2 errors in the run belong to content/year-2/18.03/direction-fields.mdx)
verdict: needs-changes
---

# Review: Interference and diffraction

Citation convention checked: course-notes pages are the printed footers (Section 14.1 = printed p. 1 = PDF p. 2); slides by their "P33- N" label. "Rights reserved" / "courtesy" search: the only notice is on slide 14, "Image courtesy of John M. Sullivan, University of Illinois and Technical University of Berlin". The notes chapter has none.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Two sources: Young's double slit", paragraph after the fringe formula | Slide 23: the first dark fringe "is smaller by 10,000 times" (a slip in the slide: with slide 2's values, 15 cm / 6.54 × 10⁻⁵ cm ≈ 2.3 × 10⁵). | "with λ ten thousand times smaller than for microwaves" | The page itself gives 15 cm and 6.5 × 10⁻⁵ cm, which differ by a factor of about 230,000. Write "about 200,000 times smaller than for the 15 cm microwaves" (or "a few hundred thousand times"), and per writing rule 4 add a bracket that the slide says 10,000. Add a calcs entry for the ratio (15 / 6.52e-5 ≈ 2.3e5). |
| 2 | warning | Opening paragraph | Slide 2: "How in the world do we measure 1/10,000 of a cm?" | "How can anyone measure a hundred-thousandth of a centimetre?" | 6.5 × 10⁻⁵ cm is about 1/15,000 cm, nearer a ten-thousandth than a hundred-thousandth (10⁻⁵ cm is 6.5 times smaller than the wavelength). The page's own summary says "smaller than a thousandth of a millimetre" (= 10⁻⁴ cm). Use "less than a ten-thousandth of a centimetre". |
| 3 | warning | "Phase shifts from path differences", **Thin films** | Slide 16: extra path ≈ 2d; 2d = mλ constructive, 2d = (m + ½)λ destructive (the slide also ignores reflection phase and refractive index). | Extra path about 2d; "the condition picks out wavelengths"; no formula; no caveat. | The simple rule is wrong in the cases the page names: a soap bubble (air–film–air) has a half-cycle shift at one reflection, which swaps the bright and dark conditions; a lens coating (air–coating–glass) has the shift at both surfaces, and the wavelength inside the film is λ/n, so the coating is a quarter of λ/n thick. Since the page gives no formula a short bracket is enough, e.g. "(This ignores two effects: reflection from a denser medium flips the wave by half a cycle, and the wavelength inside a film of index n is λ/n. Both change which colours are picked out.)" Also say "near-normal incidence" for "about 2d". |
| 4 | warning | "Diffraction", sentence on the central band; flashcard 3 | Example 14.3 (pp. 14–15) only finds the central maximum's width, w = 2y₁. It does not compare it with the other bands. | "The central bright band ... is twice as wide as the others (Example 14.3, pp. 14–15)." | The physics is right for small angles (the other bright bands lie between successive minima, λL/a apart), but the cited source does not say it. Write "is 2y₁ wide (Example 14.3), twice the width of the other bright bands for small angles", or cite Figure 14.5.2 (p. 14) / slide 31 for the pattern. |
| 5 | warning | **Babinet's principle**, last sentence | Slide 38, Experiment 13 has four parts: (1) λ of red light from four single slits of known width; (2) thickness of a hair; (3) λ again from four double slits of known spacing; (4) CD track spacing as a diffraction grating. | Only parts 1 and 2. | Add parts 3 and 4 in one sentence. Part 4 needs the diffraction grating (row 6). |
| 6 | warning | Coverage | Notes Section 14.8 (pp. 19–21): diffraction grating, d sin θ = mλ (Eq. 14.8.1), maxima sharper as N grows, more precise wavelength measurement. Used in Experiment 13 (CD tracks). | Not mentioned. | Add a short paragraph on the grating (Eq. 14.8.1, p. 20; sharpness ∝ 1/N, pp. 20–21). It is also the natural forward link (see Notes). If it is left out, extend `location` and the coverage note honestly. |
| 7 | info | Babinet paragraph | Slide 37: Case II "fill up slit, get nothing"; E_filling = −E_slit, so I_filling = I_slit. | Adds "away from the straight-through beam". | This is more accurate than the slide (with the slit filled in, the unobstructed beam is still there). Fine. Could say in a bracket that it qualifies the slide. |
| 8 | info | Single-slit paragraph | Slide 30 shows the pairing argument as Δ = (a/2) sin θ = (m + ½)λ, then a sin θ = mλ (labelled "Motivation"; the step does not follow for m > 0). Notes p. 13 do it properly: two halves give λ, four parts give 2λ, and so on. | Follows the notes' version. | Good; not repeating the slide's loose step is correct. "pp. 12–14" could be "p. 13" for the argument itself (14.5 starts on p. 12 and the comparison is on p. 14, so the range is not wrong). |
| 9 | info | Double-slit section | Notes p. 6: the small-angle formula also assumes d ≫ λ. | Only L ≫ d and "small angles". | Optional. |
| 10 | info | Thin films | Slides 15–16: "Oil on Puddles", "Oil on concrete, non-reflective coating on glass". | "oil on puddles ... non-reflective coatings on lenses". | Fine. |

Every formula and prose citation was checked at its cited location:
- Slide 2: 2 GHz → 15 cm; 4.6 × 10¹⁴ Hz → 6.54 × 10⁻⁵ cm. Correct. Slides 2–3 ("we use interference", "how we know light is a wave"). Correct.
- Slides 4–5 (waves vs bullets), slide 6 (definition, coherence, monochromaticity). Correct. Notes Section 14.1 definition p. 1; coherence, monochromatic light, incandescent bulb p. 3. Correct.
- Slide 10 (two causes of a phase shift). Correct. Formula "Phase shift from a path difference", slide 17: sin(k(x + ΔL)) = sin(kx + kΔL) = sin(kx + 2πΔL/λ) ≡ sin(kx + φ). Correct.
- Constructive/destructive ΔL conditions, slides 12–13 and 17. Correct.
- Thin films, slides 14–16. Correct as a citation (see row 3 for the physics).
- Path difference d sin θ: notes Section 14.2, geometry p. 4, Eq. (14.2.4) p. 5; slide 20. Correct.
- "Double-slit maxima" Eq. (14.2.5), p. 5. Correct. Dark fringes Eq. (14.2.6), p. 5. Correct.
- sin θ ≈ tan θ = y/L Eq. (14.2.7), p. 6; slide 21. Correct. "Fringe positions" Eqs. (14.2.8)–(14.2.9), p. 6. Correct (notes write y_b, y_d).
- Slides 22–23 (d about 0.1 mm for light); slides 24–27 (Young's double slit). Correct apart from row 1.
- Intensity: Poynting flux ∝ E², Eqs. (14.3.1)–(14.3.2) p. 7; I_inc = I₁ + I₂, I = 4I₁, I = 0, Eqs. (14.3.3)–(14.3.5) p. 8. "pp. 7–8" correct. Derivation pp. 8–9; "Double-slit intensity" Eq. (14.3.14), p. 9. Correct, same form.
- Diffraction and Huygens: Section 14.4, p. 12; slides 28–29. Correct.
- "Single-slit minima" slide 30: a sin θ = mλ, m = ±1, ±2, …. Correct (also Eq. (14.5.4), p. 13).
- "Looks like the double-slit maximum but means the opposite": p. 14. Correct (also slide 30, "this is DESTRUCTIVE").
- Two finite slits: Section 14.7 starts p. 18; slides 34–35 (a sin θ = λ, d sin θ = λ). Correct. "Double slit with finite width" Eq. (14.7.1), p. 19. Correct, same form.
- Babinet slide 37; Experiment 13 slide 38. Correct as citations.

## Arithmetic and answer checks
- c/f: 3 × 10¹⁰ / 2 × 10⁹ = 15 cm; 3 × 10¹⁰ / 4.6 × 10¹⁴ = 6.52 × 10⁻⁵ cm ≈ 6.5 × 10⁻⁵ cm. Correct.
- Ratio microwave/red: 15 / 6.52 × 10⁻⁵ = 2.3 × 10⁵, not 10⁴ (row 1). Not in calcs.
- Worked example (a): 633 × 10⁻⁹ × 2 / 2.5 × 10⁻⁴ = 5.064 × 10⁻³ m = 5.06 mm; half = 2.53 mm. Correct. sin θ ≈ 2.5 × 10⁻³, so the small-angle formula is fine.
- Worked example (b): 633 × 10⁻⁹ × 2 / 10⁻⁴ = 12.66 mm ≈ 12.7 mm; 2 × 12.66 = 25.32 ≈ 25.3 mm. Correct. sin θ ≈ 6.3 × 10⁻³, small angle fine.
- Plot: u = d sin θ / λ, d = 4a so a sin θ / λ = u/4; cos²(πu) × [sin(πu/4)/(πu/4)]² is Eq. (14.7.1) with I₀ = 1; the 1e-9 shift only avoids 0/0 at u = 0. Fringes at integer u; envelope zero at u = 4 (where cos² = 1), so the fourth fringe is missing; the domain ±5.9 also shows the m = 5 fringe in the next lobe. Range 0–1.05 covers the peak of 1. Caption correct.
- calcs file: 7 entries, all pass, and agree with the page (15, 6.5e-5, 5.06, 2.53, 12.7, 25.3, envelope zero at u = 4).
- Quiz 1 (index 1, cancel): 2.5λ = (2 + ½)λ, destructive. Correct.
- Quiz 2 (index 1, doubles): spacing λL/d. Correct.
- Quiz 3 (index 1, a sin θ = λ): correct; the pairing explanation is right.
- Flashcards: card 1 and 2 correct (card 2's intensity is for very narrow slits, which is how the notes state it). Card 3 correct for small angles (row 4).

## Coverage and order
- Slide order: outline (1) → microwave vs red light (2–3) → waves vs bullets (4–5) → interference, conditions (6) → phase shift, demos (7–10) → extra path length (12–13) → thin films (14–16) → ΔL and φ (17) → two sources, geometry and fringe positions (18–21) → microwave demo estimate (22) → light (23) → Young's double slit (24–27) → diffraction (28–29) → single slit (30–31) → two slits with width (32–36) → Babinet (37) → Experiment 13 (38). The page follows this order exactly, with the notes' intensity material (14.3) inserted at the double slit, which is where the notes put it.
- Left out: the notes' superposition example (Eqs. 14.1.3–14.1.8) and Examples 14.1, 14.2 (three slits) (optional); single-slit intensity (Section 14.6, Eq. 14.6.16) as a formula of its own (it appears inside Eq. 14.7.1 and the plot; optional); Fraunhofer condition (p. 12; optional); the in-class microwave estimate (slide 22, L ≈ 1.16 m, d ≈ 0.24 m; optional); the diffraction grating (Section 14.8, slide 38 part 4: warning, row 6); Experiment 13 parts 3–4 (row 5).
- Added: the worked example and the "away from the straight-through beam" qualification. Nothing else goes beyond the sources.

## Licensing
- Slide 14's image is "courtesy of John M. Sullivan". The page does not use, reproduce or describe that image; it cites slides 14–16 only for the general topic (soap bubbles, butterfly wings, oil). No `courtesy` entry is needed. The plot is generated from Eq. (14.7.1).
- No "All rights reserved" notice in either source.
- No text copied verbatim. Closest paraphrases are short and standard: "combination of waves by superposition" (slide 6), Huygens's principle (notes p. 12), "the bending of waves as they pass obstacles" (slide 29: "the bending of waves as they pass by certain obstacles"). Acceptable.
- Worked example is original: 633 nm, d = 0.25 mm, L = 2 m, a = 0.1 mm do not match Examples 14.1 (833 nm, 0.150 mm, 1.20 m) or 14.3 (600 nm, 0.800 mm) or any solved problem in 14.11 (500 nm with 0.320 mm, 0.100 mm, 2.80 µm, 1.00 cm; 0.800 mm slit at 0.800 m).
- Quiz questions are not taken from the slides' PRS questions (their text is not in the slide extract; slides 11, 26, 33 are titles only), so this could not be compared; the page's questions are generic.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo: [] is acceptable as it stands. Session 34 is problem solving, 35 ("The Structure of Space and Time") has no notes on OCW, 36 is review; 8.03 and 8.04 have no syllabus yet, so there is no target lecture. There is no cosmology callout, which matches the empty list. If the diffraction grating is added (row 6), a fair forward link exists: spectrographs use gratings to measure the wavelengths of spectral lines, which is how redshifts are measured (8.286 Lecture 3, `doppler-effect`). Once 8.04 has a syllabus, the double slit with electrons is another natural link.
- No em dashes on the page.
- Verdict needs-changes because of row 1 (a wrong factor, repeated from a slide slip). Rows 2–6 are worth fixing before `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- Error: the wavelength ratio is now about 2 × 10⁵, with a bracket noting the slide's "ten thousand"; added a calcs entry.
- Warnings: the opening now asks about lengths below a ten-thousandth of a centimetre; thin films now give the near-normal-incidence rule with a bracket on λ/n and the half-cycle flip at reflection; the central band is 2y₁, twice the others for small angles (Fig. 14.5.2; slide 31); Experiment 13 lists all four parts; added the diffraction grating (Section 14.8, Eq. 14.8.1).
- leadsTo: now links to 8.286 Lecture 3 (spectral lines and redshifts).
