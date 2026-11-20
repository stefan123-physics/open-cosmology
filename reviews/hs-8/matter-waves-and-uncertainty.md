---
page: content/year-0/hs-8/matter-waves-and-uncertainty.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes3/ (read; PDF f928b8dc…_MIT8_04S16_LecNotes3.pdf, 7 pages; Sec. 3 "Matter Waves" on pp. 6–7; Eq. (2.16) on p. 3; page licensed CC BY-NC-SA, no exclusion notice)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes7/ (read; PDF 6ca5bd79…_MIT8_04S16_LecNotes7.pdf; Sec. 1 pp. 1–3, Eqs. (1.12)–(1.15))
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-05 (not re-read; cited only for E = hf and h, already checked as a CCBY row in the review of mass-and-energy)
  - Earlier lessons on disk (5.3, 5.4, 5.11, 6.4, 7.1, 7.3, 7.4, 7.6, 7.7, 8.3, 8.5) for "only earlier terms"
  - content/year-2/8.04 (lectures 3, 4, 7) for leadsTo
verdict: pass-with-notes
---

# Review: Waves of matter and the uncertainty principle

No errors found. Every formula is in the cited MIT notes at the place named, every number recomputes, and every quiz answer is right. The findings are unsourced statements (all of them correct physics, some simplified) and a few small wording points.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Callout "Uncertainty in the stars and the early universe", white dwarfs | No cited source covers white dwarfs or the early universe | "By the uncertainty principle they then have large momenta, and the pressure this gives holds the dead star up" | Unsourced (writer's flag). The physics is simplified: what confines each electron to a tiny space is that no two electrons can be in the same state (the exclusion principle); uncertainty then gives the large momenta. As written, a reader could think uncertainty alone does it. Add "because no two electrons can share the same state, each is squeezed into a tiny space, and by the uncertainty principle…" and cite a permitted source (a NASA white-dwarf page or an MIT 8.286/8.04 page), or cut the sentence |
| 2 | warning | Same callout, "tiny quantum ripples … seeds of the galaxies" | No cited source | Unsourced; points to lesson 8.18, which is not written yet | The claim is correct and hedged ("are thought to"). Cite a permitted source (e.g. the site's 8.286 inflation lecture or a NASA WMAP/inflation page), or keep it as a forward pointer and add the source when 8.18 exists |
| 3 | warning | End of "The uncertainty principle": "Bohr's rule of lesson 7.4 has a wave picture too: the allowed orbits are those around which a whole number of electron wavelengths fits" | No cited source. Lesson 7.4 says: "Bohr obtained this formula by adding one more rule about which orbits are allowed … we do not need that rule here" | Refers to "Bohr's rule of lesson 7.4" | Lesson 7.4 never stated the size rule, so the reader has not met it. Say instead "Bohr's allowed orbits (lesson 7.4) have a wave picture: …". The physics (2πr = nλ, equivalent to Bohr's rule) is correct; it has no source on the page (writer's flag) |
| 4 | warning | Same paragraph: why the electron does not fall into the nucleus | No cited source | Kinetic energy rises as 1/Δx², faster than the electric attraction supplies it | Correct standard estimate, unsourced (writer's flag). Optional: say the attraction's energy grows only as 1/Δx (lesson 6.4 / 7.1), which makes the "faster" checkable, and cite a permitted source if one is found |
| 5 | warning | "Electron microscopes", first paragraph: light-microscope limit and "a virus, about 100 nm across, is invisible in it" | No cited source; lesson 5.11 has θ ≈ 1.22λ/D for a telescope | Microscope limit "a few hundred nanometres"; virus about 100 nm | Both correct (the limit is about half the wavelength, roughly 200 nm; many viruses are 20–300 nm, e.g. influenza about 100 nm). Unsourced (writer's flag). The step from the telescope's angle to a microscope's smallest detail is the page's own; say so ("the same reasoning gives…") or find a permitted source. "Invisible" is better as "too small to make out" (a microscope can show that something is there but not its shape) |
| 6 | info | "In practice the magnetic lenses … in the best instruments, rows of single atoms." | No cited source | Unsourced (writer's flag) | Correct (modern aberration-corrected electron microscopes resolve single atoms). Leave or cite |
| 7 | info | Worked example "The wavelength in an electron microscope" | (page's own) | Uses ½mv² = p²/2m at 10 keV and says this is good enough (2% of 511 keV) | Checked: the relativistic wavelength is 1.222 × 10⁻¹¹ m against 1.228 × 10⁻¹¹ m, 0.5% shorter. The page's remark is correct and the rounding to 0.012 nm is unchanged. No change needed (writer's flag) |
| 8 | info | "Why a football does not diffract": "in a crystal the atoms sit in neat rows about 0.1 to 0.4 nm apart" | No cited source | Unsourced | Fine as an order of magnitude; distances between neighbouring atoms in metals are about 0.25–0.4 nm (0.1 nm is short for atom spacings, though some crystal-plane spacings are that small). Consider "about 0.2 to 0.4 nm" |
| 9 | info | Flashcard "de Broglie wavelength": "Electrons, protons, atoms and even large molecules have been made to interfere" | MIT notes: electrons (Davisson–Germer, two slits) and molecules of 810 atoms | Adds protons and atoms | Atoms (and neutrons) are well established; I am not certain that proton interference is a standard example. Safer: "Electrons, neutrons, atoms and even large molecules" |
| 10 | info | Quiz 0 explanation: "the third is $p/h$ upside down" | — | Confusing: p/h is the answer h/p turned upside down | "the third is $h/p$ upside down ($p/h$)" |
| 11 | info | Section title "Why a football does not diffract" and flashcard "about 10⁻³⁴ m" for a football | — | Section and worked example use a tennis ball; the football is not computed | Checked: a 0.43 kg football at 25 m/s gives 6.2 × 10⁻³⁵ m, so "about 10⁻³⁴ m" holds. Either compute it in calcs or call the section "Why a tennis ball does not diffract" |

## Formulas and citations
- **Momentum of a photon p = E/c = h/λ** (`mit`, "Sec. 3, Eq. (3.22), quoting Eq. (2.16)"): Eq. (2.16) on p. 3 is p = E/c = hν/c = h/λ; Eq. (3.22) on p. 6 restates λ = h/p for the photon. Supported. The page combines E = hf (lesson 7.2) and E = pc (lesson 8.3, `E = pc` is there as a Formula) correctly.
- **de Broglie λ = h/p = h/mv** (`mit`, Eq. (3.23)): supported (p. 6, "associated to a matter particle with momentum p there is a plane wave of wavelength λ = h/p"). The `at` says p = mv is added by the page. Correct.
- "if Planck's constant were zero, every wavelength would be zero": supported (p. 6, "if h → 0, then λ → 0").
- **λ ≪ a** (`mit`, Eq. (3.24)): supported; the notes write λ/Δx ≪ 1 with Δx the size of the object, as the `at` says.
- Davisson and Germer 1927, peaks at certain angles, interference from the lattice: supported (p. 6). Two slits "one electron at a time": supported. 810 atoms, more than 10 000 amu: supported (p. 6, arXiv:1310.8343, Eibenberger et al.); "reported in 2013" follows from the arXiv number (October 2013), correct.
- **λ = h/√(2meV)** (`mit`, Eq. (3.23) combined with E_k = eV and p²/2m): the `at` says the combination is the page's own. Correct.
- **Δx Δk ≈ 1** (`reading1`, Eq. (1.12)): supported (p. 3). "a property of waves, not of quantum physics": supported ("This uncertainty product is not quantum mechanical; … it follows from properties of Fourier transforms").
- p = ħk: Eq. (1.13). ħ = h/2π = 1.055 × 10⁻³⁴ J s: correct.
- **Δx Δp ≥ h/4π = ħ/2** (`reading1`, Eq. (1.15)): supported (p. 3, "Heisenberg uncertainty product: Δx Δp ≥ ħ/2"). "With Δx and Δp defined precisely, as the spreads in many repeated measurements": the notes say only "defining Δx and Δp precisely"; the page's reading (standard deviations of repeated measurements) is correct.
- Frontmatter `source.title` names "Section 3", while Eq. (2.16) is in Section 2. Harmless; the `at` names it.
- `photon` reference (Siyavula Gr 10, 11.5): used only for E = hf and h; CCBY row (as checked in earlier reviews).

## Arithmetic and answer checks
Recomputed independently (Python); `pytest -k "matter-waves"` on the calcs passes (with curved-spacetime: 68 passed).
- Electron at 2.0 × 10⁶ m/s: p = 1.822 × 10⁻²⁴, λ = 3.64 × 10⁻¹⁰ m = 0.36 nm. "A few times the size of an atom" (10⁻¹⁰ m): OK.
- Tennis ball 0.058 kg, 50 m/s: p = 2.9, λ = 2.29 × 10⁻³⁴ m; proton 10⁻¹⁵ m / 2.29 × 10⁻³⁴ = 4.4 × 10¹⁸, "more than 10¹⁸": OK.
- Microscope 10 kV: E_k = 1.6 × 10⁻¹⁵ J; p = 5.399 × 10⁻²³; λ = 1.228 × 10⁻¹¹ m ≈ 0.012 nm; 500 nm / 0.01228 nm = 40 700 ≈ 41 000, "about forty thousand": OK. 10/511 = 2.0%: OK. Relativistic λ = 1.222 × 10⁻¹¹ m (finding 7).
- Flashcard "about 0.01 nm … tens of thousands of times shorter than visible light": OK.
- Dust: h/(4π × 10⁻¹⁵ × 10⁻⁶) = 5.28 × 10⁻¹⁴ m/s; 1 mm takes 1.90 × 10¹⁰ s = 601 years, "about 600 years": OK. 10⁻¹⁵ / 9.11 × 10⁻³¹ = 1.1 × 10¹⁵, "10¹⁵ times lighter": OK.
- Atom, Δx = 10⁻¹⁰ m: Δp = 5.28 × 10⁻²⁵; Δv = 5.79 × 10⁵ m/s, "nearly 600 km/s": OK; E_k = 1.53 × 10⁻¹⁹ J = 0.95 eV, "about 1 eV": OK.
- Quiz 0: λ = 6.63 × 10⁻³⁴ / 1.67 × 10⁻²³ = 3.97 × 10⁻¹¹ → 4.0 × 10⁻¹¹ m, correct. Distractors: electron mass 7.28 × 10⁻⁸; p/h 2.52 × 10¹⁰; h·p 1.11 × 10⁻⁵⁶: all as explained, all in calcs.
- Quiz 1: answer 0 correct; others wrong.
- Quiz 2: twice the speed halves λ, fringe spacing Δy = λL/d (lesson 5.11) halves: answer 0 correct.
- Quiz 3: 5.28 × 10⁻²⁶ → 5.3 × 10⁻²⁶ correct; h/Δx = 6.6 × 10⁻²⁵, ħ/Δx = 1.06 × 10⁻²⁵ → 1.1 × 10⁻²⁵, h/4π × Δx = 5.3 × 10⁻⁴⁴: as explained.
- Quiz 4: answer 0 correct; explanation true.
- Plot: cos(2πx)·exp(−x²/2s²) with its envelope, range ±1.4 contains ±1: OK. Caption describes it correctly.

## Only earlier terms
- Present in earlier lessons: E = hf and h (7.2), wave–particle duality (7.3, which even promises that electrons interfere), E = pc (8.3), p = mv (3.6), ½mv² (3.2), E_k = eV and the electronvolt (6.4), keV (7.8, 8.4), 511 keV rest energy (8.3), sine waves (5.3), superposition and wavenumber k = 2π/λ (5.4, explicitly called "wavenumber"), fringe spacing, grating and the telescope limit 1.22λ/D (5.11), atom 10⁻¹⁰ m and proton about 10⁻¹⁵ m and the collapse puzzle (7.1), energy levels and 13.6 eV (7.4), white dwarf (7.6, 8.5), atomic mass unit (7.7).
- Introduced on this page: de Broglie wavelength, wave packet, ħ, uncertainty principle, electron microscope.
- Bohr's orbit-size rule: not in lesson 7.4 (finding 3).
- `prerequisites` omit lessons whose ideas the page uses: the-nucleus (7.7, amu), colours-of-stars (7.6) or how-stars-shine (8.5) (white dwarf), magnetic-fields-and-force (6.9, "focused by magnetic fields"). Info: add if the prerequisite box should list them.
- Lesson 8.18 (inflation) is referred to forward in the callout; it is described plainly, which is acceptable, but see finding 2.

## Coverage
- §4 row 8.6: matter waves and the uncertainty principle, PhET quantum-wave-interference (present, pinned file in `public/phet/manifest.json`). Covered: de Broglie wavelength, when wave effects matter, Davisson–Germer, single-electron two-slit, electron microscope, wave packets, Δx Δp ≥ h/4π, confinement estimate.
- Not covered: the energy–time form of the uncertainty principle, and a particle in a box (standing matter waves with E = n²h²/8mL²) or tunnelling. Info: the owner may want to check whether the VWO "quantum world" topics expect the particle in a box here or in another lesson; I did not consult the syllabus.

## Where this leads
- 8.04 lecture 4 (de-broglie-waves-group-velocity): its summary matches the `why` (frames disagree about λ, group velocity equals particle velocity). OK.
- 8.04 lecture 7 (wave-packets-uncertainty): matches (Δx Δk ≈ 1, Δx Δp ≳ ħ, spreading of a free packet). OK.
- Info: 8.04 lecture 3 (photoelectric-compton-de-broglie) is built on the very notes this page cites (Lecture Notes 3, Sec. 3) and ends with λ = h/p; consider adding it as the first `leadsTo`.
- `towards: false` correct (lesson 6 of 19).

## Licensing and AI terms
- No sentence copied: the Davisson–Germer, two-slit and wave-packet passages are rewritten (e.g. source "at certain angles there are peaks in the intensity of the scattered electrons"; page "at certain angles many more of them came back than at others").
- No figures copied (the notes' Fig. 4 obstacle and Figs. 1–3 packets are not reproduced; the page's packet is a generated Plot).
- Worked examples and quiz questions are the page's own; the MIT notes have no numerical examples in these sections.
- MIT 8.04 notes: CC BY-NC-SA, no "excluded" or "All rights reserved" notice on the resource pages.
- No NASA, ESO or Siyavula branding. No forbidden source cited.

## Notes
- All statements the writer flagged were checked: none is wrong physics; findings 1–6 ask for a source or a clearer wording.
- Uncertain: whether proton interference is an established example (finding 9).

## Resolution (2026-11-20, by the page author)

1. Fixed. The white-dwarf callout now says what holds the star up: the exclusion principle (named as a rule met at university) allows at most two electrons per energy state, so quantum physics, not fusion, holds the star up. This is cited to a new reference `nasawd`, NASA Imagine the Universe!, "White Dwarf Stars" (https://imagine.gsfc.nasa.gov/science/objects/dwarfs2.html, read 2026-11-20, checked: Pauli exclusion principle, two electrons per energy level, the degenerate star cannot be compressed further and is held up by quantum mechanics). The link to the uncertainty principle (confined electrons have large momenta) is marked as "our own simplified link". Lessons 7.6 and 8.5 are named for the white dwarf.
2. Fixed. The quantum-ripples sentence is removed; the callout (now titled "Uncertainty in the stars") ends with a plain forward pointer: quantum physics also played a part in the very early universe, a story lesson 8.18 takes up.
3. Fixed. The page now says that lesson 7.4 mentioned Bohr needed one more rule to fix the orbit sizes, and gives the wave picture (a whole number of wavelengths around the orbit) explicitly as the page's own step.
4. Fixed. The atoms-not-collapsing argument is marked as the page's own rough reasoning, not from the MIT notes, and now says why the kinetic energy wins: it grows as 1/Δx², the energy from the attraction only as 1/Δx (potential energy of two charges goes as one over the distance, lesson 6.4).
5. Fixed. The microscope limit is marked as "the same reasoning, applied by this page to a light microscope", and the virus is now "too small to make out" instead of "invisible".
6. Left as is (info; correct, as the reviewer says).
7. No change needed.
8. Fixed: "about 0.2 to 0.4 nm apart".
9. Fixed: flashcard now says "Electrons, neutrons, atoms and even large molecules".
10. Fixed: "the third is h/p upside down (p/h)".
11. Fixed: the section is now "Why a tennis ball does not diffract", the flashcard asks about a tennis ball, and the intro says "the wave of a tennis ball" (the tennis ball is the object computed on the page).
12. Fixed: prerequisites now include magnetic-fields-and-force (6.9), the-nucleus (7.7, atomic mass unit) and how-stars-shine (8.5, white dwarf).
13. (Coverage: particle in a box, energy-time form) Not changed: an owner decision on the syllabus, outside this fix.
14. (leadsTo 8.04 lecture 3) Not changed: optional; the two existing links match.

Checks: `npm run calc:test -- -k matter-waves-and-uncertainty`: 35 passed. `npm run content:check`: 0 error(s), no warnings for this page. No numbers changed, so the calcs file is unchanged. No symbol changes needed.
