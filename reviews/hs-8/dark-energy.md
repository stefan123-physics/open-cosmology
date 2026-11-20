---
page: content/year-0/hs-8/dark-energy.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/fe429f4326945aa8e12f2eaf56219446_MKPswx4hjec.pdf (read: the writer's local copy src-cmb/l18.pdf, 26 pages, text extracted page by page; printed footer number = PDF page, checked; pp. 16–25 read in full)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/02cf009d0b92e400bc2ef271443c465f_RgScJ20EnW8.pdf (read: local copy src-817/l20.pdf, 28 pages; footer = PDF page; pp. 5–17 read in full)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (read: local copy src-817/lec10.pdf; PDF pages 1–9 carry printed pages 61–69; printed pp. 64, 68, 69 read in full. p. 64 has a plot marked "© Geek3, CC BY-SA 4.0 ... excluded from our Creative Commons license": not used by the page)
  - https://science.nasa.gov/universe/the-universe-is-expanding-faster-these-days-and-dark-energy-is-responsible-so-what-is-dark-energy/ (read; C. Gohd, JPL, last updated 12 August 2026)
  - https://science.nasa.gov/dark-matter/ (read; section "What is Dark Matter?" and image caption, last updated 12 August 2026)
  - Earlier lessons on disk (0.9, 2.11, 8.3, 8.6, 8.8, 8.10–8.16, 6.x) and content/year-4/8.286 (cosmological-constant, supernova-evidence, vacuum-energy-puzzle, age-with-vacuum-energy) for terms, overlap and leadsTo; calcs/values.yaml
verdict: pass-with-notes
---

# Review: Dark energy and the accelerating universe (8.17)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Why fainter means speeding up", 2nd and 3rd sentence; flashcard 2 | Lecture 20 p. 8: "the redshift is basically a measure of the velocity, or at least it's strongly influenced by the velocity of the object" | "Its redshift tells us how fast its galaxy was moving away when the light left (lesson 8.11)" | Stated more firmly than Guth, and in conflict with the page's own correct sentence two sections earlier ("you know how much the universe has stretched since the light left"). The cosmological redshift measures the total stretching during the trip, not the speed at emission. Rephrase through stretching, which gives the same conclusion: "If the expansion has sped up, it was slower in the past, so while the light from a supernova at a given distance was on its way, the universe stretched less: its redshift is smaller. Turned round, a given redshift belongs to a farther, fainter supernova." Flashcard 2 can keep "moved away more slowly" if it adds "so the universe stretched less while the light travelled". |
| 2 | warning | "The cosmic budget and the age of the universe", 2nd paragraph | Lesson 8.12 (and its source) give 13.8 billion years from the CMB maps with Planck's H₀ ≈ 67; the flat ΛCDM age for H₀ = 70, Ω_m = 0.3, Ω_vac = 0.7 is 13.5 billion years (my computation: t₀ = (2/3)(977.8/70)/√0.7 × asinh √(0.7/0.3) = 13.47 Gyr) | "With H₀ = 70 km/s/Mpc a flat universe of matter alone would be only ... 9.3 billion years old ... With dark energy included, the computed age becomes about 13.8 billion years" | The comparison reads as if the same H₀ = 70 gave 13.8. Either write "for the same H₀ = 70 with Ω_m = 0.3 and Ω_vac = 0.7 it becomes about 13.5 billion years, and the measured values give 13.8 (lesson 8.12)" (13.5 is already in calcs/values.yaml with the role "computed: flat age for Ω_m = 0.3, Ω_Λ = 0.7, h = 0.70"; add a calcs entry), or drop "computed" and say "the measured age, 13.8 billion years". |
| 3 | warning | Quiz 4 | Lesson 8.16 quiz: "NASA gives dark matter as about 27% of the universe and ordinary matter as about 5%. About how many times more dark matter than ordinary matter is there?" | "NASA gives dark energy as about 68% of the universe and ordinary matter as about 5%. About how many times more dark energy than ordinary matter is there?" | Same question with one number changed, one lesson apart. Replace with a question this lesson teaches, e.g. "Dark energy and dark matter are both 'dark'. Which statement is right?" (dark matter clumps and pulls; dark energy is spread evenly and speeds the expansion up), or the acceleration condition for the High-Z values (a = (0.24/1.52)^{1/3} = 0.54). Update calcs `quiz-de-to-ordinary`. |
| 4 | warning | Worked example 1 (Problem, step "Check"); section "The cosmic budget" | Site convention: numbers with units inside maths | "lies 2000 Mpc away", "the flux at 2000 Mpc", "With $H_0 = 70$ km/s/Mpc" | Write $2000\ \text{Mpc}$ and $H_0 = 70\ \text{km/s/Mpc}$. |
| 5 | info | Formula "Matter compared with vacuum energy" (`at=` "divided (this lesson's own step)") and worked example 2 (a) | 8.902 notes p. 69, eqs. (303)–(305): matter–Λ equality "when ρ_Λ = ρ_m", a = 1/∛2.3 (the notes print "z ≈ 1.3", which is evidently 1 + z) | The ratio and the equality are presented as the page's own step | The notes already do this calculation; cite eqs. (303)–(305), p. 69 as well. The page's z = 0.33 is right; do not copy the notes' "z ≈ 1.3". |
| 6 | info | "Open questions", 1st bullet | Lecture 20 p. 13: "why is it that most physicists say it's the least understood issue in physics?" | "Guth calls the vacuum energy the least understood issue in physics" | "Guth says most physicists call it ..." |
| 7 | info | "What gravity should do", last sentence | Lecture 18 p. 17: "when these guys started to make these measurements they were just simply trying to figure out how fast the universe was slowing down" | "Guth remembers that the supernova teams set out just to measure ..." | "remembers" suggests a personal memory; "Guth notes". |
| 8 | info | "Open questions", last paragraph | NASA page: Euclid launched 2023; Roman "set to launch by August 2026"; Rubin expected operational in 2025 | Euclid, Roman and Rubin "are mapping billions of galaxies" | "are mapping, or will soon map, ...": the NASA page does not say Roman is observing. |
| 9 | info | "Supernovae that were too faint", 1st paragraph | Lecture 20 p. 6: at these distances the inverse square law defines the luminosity distance d_L | "the inverse square law F = L/(4πd²) gives its distance" | Acceptable simplification at VWO level; optionally add "(at such distances this is what astronomers call the luminosity distance)". |
| 10 | info | Worked example 1, step "Check" | — | "A difference in brightness that the eye could hardly notice" | 25% (0.3 magnitude) can be seen side by side, and these supernovae are far below naked-eye visibility anyway; "A modest difference in brightness". |
| 11 | info | Quiz 2 | Lecture 18 p. 23: the vacuum wins "if it doesn't turn around": a closed universe can recollapse first | "Why does vacuum energy always win in the end in an expanding universe?" | Covered by "in an expanding universe"; fine as is. |

## Formulas and citations
- ρ_m ∝ 1/a³, ρ_vac = constant (`reading3`, p. 64 and eqs. (298)–(299), p. 68): verified on printed p. 64 ("matter density is proportional to a⁻³ ... radiation density ... a⁻⁴. The dark energy Λ is constant") and p. 68 (ρ_m = Ω_m,0 ρ_crit,0 a⁻³, ρ_Λ = Ω_Λ,0 ρ_crit,0). The text before it cites Lecture 18 p. 20 for "a region of vacuum stays vacuum" (verified: "What else could it become?", p. 20).
- ρ_m/ρ_vac = (Ω_m/Ω_vac)/a³: correct division of (298)–(299); see row 5 for the extra citation.
- ä/a = −(4πG/3)(ρ_m − 2ρ_vac) (`reading1`, p. 21 board): verified. Guth substitutes p_vac = −ρ_vac c² (p. 21) into the second-order Friedmann equation (p. 18) and collects the vacuum pieces into "minus 2 rho vac" (p. 21). With p_matter = 0 and radiation left out, the page's form follows; the calcs identity `acceleration-identity` checks it. The page says this is taken as given and that the university course derives it.
- **Is taking the acceleration equation as given acceptable at VWO level?** Yes. It is stated as a result of general relativity, its sign logic is explained in words (matter pulls, the vacuum pushes twice as hard), and it is used only for the condition ρ_m = 2ρ_vac, which a VWO student can handle. The negative pressure is mentioned as a GR result with a citation (Lecture 18 pp. 20–21), not derived. "Pushes twice as hard as the same density of matter pulls" is the page's correct reading of the factor 2.
- Lecture 18: 1998, Nobel, two groups, about 52 astronomers (p. 16); High-Z team, SCP at Berkeley led by Perlmutter (pp. 16–17); Type Ia standard candles, faster than about five billion years ago, everyone expected slowing, CMB confirmation, the simplest explanation vacuum energy = cosmological constant, "the one that most of us take seriously" (p. 17); Einstein 1917, static universe, collapse (p. 18); Λ, "a kind of universal gravitational repulsion" (p. 19); quantum vacuum and the uncertainty principle (pp. 19–20); ρ_vac constant (p. 20); 1/a³, 1/a⁴, the vacuum wins, exponential growth (p. 23, completed on p. 24). All verified at the cited pages.
- Lecture 20: High-Z best fit Ω_vac = 0.76, Ω_m = 0.24, flat (pp. 6–7); 20% to 30% dimmer (pp. 8 and 9); why dimmer means accelerating (pp. 8–9); dust: no reddening, no extra spread (pp. 9–10); evolution (p. 11); CMB confirmation (pp. 11–12); quintessence, "the minority point of view", "up for grabs" (p. 12); least understood issue (p. 13); off by about 120 orders of magnitude (p. 16). All verified.
- 8.902 p. 64: "roughly 30% ... matter, 70% is dark energy" verified; p. 69, eq. (300): Ω_m,0 = 0.315 ± 0.007, Ω_Λ,0 = 0.6847 ± 0.0073 (Planck 2018) verified.
- NASA *What is Dark Energy?*: gravity first slowed the expansion, later sped up; "We don't know"; 68.3 to 70%; 1998, two teams, dimmer, so farther; Riess, Perlmutter, Schmidt, 2011 Nobel Prize in Physics; dust and other factors accounted for; vacuum energy, cosmological constant, "my biggest blunder" as reported by Gamow, the cosmological constant problem, quintessence, modified gravity; Euclid, Roman, Rubin. All verified (row 8 for tense).
- NASA *Dark Matter*: 5% / 27% / 68% verified (section "What is Dark Matter?" and the image caption).
- Page numbers are printed footer numbers (footer = PDF page for both transcripts; the 8.902 notes print 61–69 on PDF pages 1–9, and the page cites the printed numbers).

## Arithmetic and answer checks
Recomputed by hand and in Python; `npm run calc:test -- -k "dark-energy or inflation"`: 96 passed. `npm run content:check`: 0 errors, the only message for this page is the missing review file.
- WE 1: 1/√0.75 = 1.1547 ✓; 2000 × 1.1547 = 2309 ("2310") ✓; 15% farther ✓; (2000/2310)² = 0.7496 ✓.
- Today 0.7/0.3 = 2.33 ✓.
- WE 2 (a): 0.3/0.7 = 0.4286 ✓, ∛ = 0.754 ✓ ("0.75"), z = 0.326 ✓ ("0.33"). (b): 0.3/1.4 = 0.2143 ✓, ∛ = 0.598 ✓ ("0.60"), z = 0.672 ✓ ("0.67"). Check: 1/0.6³ = 4.63 ✓, 0.3 × 4.63 = 1.39 ✓ ("1.4").
- Planck: (0.315/0.6847)^{1/3} = 0.772 ✓ ("0.77"); z ≈ 0.30, "in the last few billion years" fits (NASA: speeding up began about 9 billion years after the start, about 5 billion years ago).
- Plot: curves 0.3/x³, 0.7, 1.4 ✓; point (0.754, 0.7) ✓; matter at a = 0.5 is 2.4, inside the range 2.5 ✓; at a = 2: 0.0375 ✓ and 0.7/0.0375 = 18.7 ("about 19") ✓.
- Matter-only age: (2/3) × 977.8/70 = 9.31 ✓ (row 2 for the 13.8 that follows).
- Quiz 0: 1/1.1² = 0.826, 17.4% fainter ✓ (answer 0); 10% (no square), 1.21 (21% brighter), 1/√1.1 = 0.953 (4.7%, "5%") ✓; the other choices are wrong ✓.
- Quiz 1: 1/0.5³ = 8, vacuum unchanged ✓ (answer 0); the others wrong ✓.
- Quiz 2: answer 0 ✓; the others wrong ✓.
- Quiz 3: (0.24/0.76) = 0.316 ✓, ∛ = 0.681 ✓ ("0.68", answer 0); 0.32, √ = 0.562 ("0.56"), inverse ∛ = 1.468 ("1.47") ✓.
- Quiz 4: 68/5 = 13.6 ✓ (row 3 for the duplication).
- Flashcards: all true.
- **Invented supernova numbers (2000 Mpc, 25% fainter):** acceptable. They are marked "(The numbers are chosen for this example.)", 25% lies inside Guth's 20% to 30% (Lecture 20 pp. 8–9), and a luminosity distance of 2000 Mpc is a realistic distance for the 1998 samples. They are not the source's numbers (the source has no worked example of this kind).

## Values (calcs/values.yaml)
- Ω_m = 0.3, Ω_vac = 0.7: role "example: the round present-day value" ✓.
- Ω_m = 0.24, Ω_vac = 0.76: "historical: the High-Z team's 1998 best fit" ✓.
- Ω_m = 0.315, Ω_vac = 0.6847: "later: Planck 2018" ✓, and the page marks them "a later development" ✓.
- H₀ = 70: "example" ✓. Age 13.8: "Guth 2013: Planck 2013, rounded (the site's standard figure)" ✓ (the calcs entry calls it later-data from NASA; harmless). See row 2.

## Only earlier terms
- Type Ia supernova, standard candle, inverse square law, luminosity, flux, Mpc (8.10); redshift, Hubble's law (8.11, 5.13); age puzzle, 977.8/H₀ (8.12); scale factor, a = 1 today, 1 + z = 1/a (8.13, line 115); CMB ripples (8.15); density parameter Ω_m, 5/27/68% (8.16); E = mc² (8.3); uncertainty principle (8.6); general relativity (8.8); G (2.11); exponential growth (0.9); acceleration (1.x). All on disk and in `prerequisites`.
- Pressure: lesson 4.1 "Density and pressure" is planned on the other PC (§4 row 4.1 covers pressure): counts as introduced.
- Fields that fluctuate: electric and magnetic fields (Block 6, on disk) and 8.6.
- Defined on the page: dark energy, vacuum energy, cosmological constant Λ, Ω_vac, ä ("a double dot", with a symbol meaning scoped to this page), quintessence, the cosmological constant problem.
- No term used before introduction found.

## Coverage
- §4 row 8.17 (dark energy and the accelerating universe; NASA *What is Dark Energy?*; leads to `8-286/supernova-evidence`, `8-286/cosmological-constant`; the OpenStax sources named there are rightly replaced by MIT 8.286 and 8.902): covered at VWO level: the expected slowing, the 1998 supernova result and why fainter means accelerating, the checks (dust, evolution, CMB), the name dark energy, vacuum energy and Λ with Einstein's history, 1/a³ against constant, the acceleration condition with worked numbers, the budget, the age, and the open questions.
- Left out: the future of the universe (exponential growth is mentioned; the fate is left to 8.19), the equation of state w (not needed at this level), Hubble tension (8.19). Nothing required is missing.
- No PhET sim; §4 names none.

## Where this leads
- `8.286` lecture 18 → `cosmological-constant` (and, at lecture level, `cmb-spectrum`, which is not about dark energy; unavoidable with lecture-level links). The "why" (negative pressure, acceleration, the vacuum wins) matches Lecture 18 pp. 20–24 ✓.
- `8.286` lecture 20 → `supernova-evidence` and `vacuum-energy-puzzle` ✓; the "why" (luminosity distance and magnitudes, three models, dimmer means accelerating, dust and evolution) matches Lecture 20 pp. 5–11 ✓.
- Both §4 targets are present. Optional: lecture 19 (`age-with-vacuum-energy`), since the page uses the age argument.
- `towards: false` ✓ (8.19 is the block's last lesson).

## Overlap with 8.12, 8.15, 8.16
- 8.12 already says that dark energy makes the age 13.8 billion years; 8.17 repeats it as the third line of evidence. Fine, but see row 2.
- 8.16 already gives the 5/27/68% budget and the "dark matter pulls, dark energy speeds up" contrast; 8.17 repeats both deliberately (introduction and "A name for what we do not know"). Acceptable as reinforcement; the quiz duplicate (row 3) is not.
- 8.15: the CMB confirmation is only referred to. No conflict.

## Licensing and AI terms
- No sentence copied from a source: an 8-word n-gram check against the Lecture 18 and 20 transcripts and the 8.902 notes found no shared run; the longest shared phrases are short standard ones ("faster today than about five billion years ago" also on the 8.286 site page, "what else could it become" is Guth's question, reworded in a sentence of the page's own).
- No figure copied: the one graph is a generated Plot. The 8.902 p. 64 plot ("© Geek3 ... excluded from our Creative Commons license") is not used.
- Worked examples and quiz questions are the page's own; the 8.286 site pages use different examples ("How much dimmer at z = 0.5?", "How much vacuum energy?").
- NASA: cited by page title, no insignia. Wording such as "NASA's page says plainly that we do not know" reports a verified statement of the page and is acceptable; the "(NASA Science, *What is Dark Energy?*)" style used elsewhere on the page is safer.
- No ESO text; no forbidden source cited or used (grep for OpenStax, LibreTexts, Khan, CK-12, IOPSpark: none). No em dashes.

## Notes
- Writer's question on the invented supernova numbers: acceptable (see "Arithmetic").
- The 8.902 notes' "z ≈ 1.3" for matter–Λ equality (p. 69) looks like 1 + z; the page's value is correct.

## Resolution (2026-11-20, by the page author)

1. Fixed. "Why fainter means speeding up" now argues through stretching: the redshift measures how much the universe stretched while the light travelled; a universe that sped up was slower in the past, so for a supernova at a given distance it stretched less and the redshift is smaller; turned round, a given redshift belongs to a farther, fainter supernova. Cited as Lecture 20, p. 8 (checked: the "other way round" argument is on p. 8), with a bracketed note that Guth puts the middle step in terms of velocity. Flashcard 2 rewritten the same way.
2. Fixed. The age paragraph now says that the same H0 = 70 km/s/Mpc with Omega_m = 0.3 and Omega_vac = 0.7 gives about 13.5 billion years (13.47, value already in calcs/values.yaml as computed), and that the Planck 2018 values (H0 = 67.4 km/s/Mpc, Omega_m = 0.315, Omega_vac = 0.6847; 8.902 p. 69, eq. (300), marked a later development) give about 13.8 billion years (13.80), the age of lesson 8.12. New calcs entries age-flat-lcdm-70 and age-13-8 (the latter now a computation instead of a fact), both using the flat age formula with asinh.
3. Fixed. Quiz 4 replaced by the High-Z acceleration onset: a^3 = 0.24/1.52 = 0.158, a = 0.54; distractors 0.68 (no factor 2, equal densities), 0.86 (factor 2 on the wrong side), 0.16 (no cube root). Calcs quiz-de-to-ordinary removed; new entries quiz-highz-accel-a3, quiz-highz-accel-a (quiz: 4), quiz-highz-accel-wrong-side, quiz-highz-accel-no-root. The budget-dark-energy entry no longer names quiz 4.
4. Fixed. 2000 Mpc and 2310 Mpc in worked example 1 and H0 = 70 km/s/Mpc in the age paragraph are now in maths with \text units.
5. Fixed. The formula "Matter compared with vacuum energy" now cites eqs. (298)–(299), p. 68, divided, and matter–Lambda equality eqs. (303)–(305), p. 69 (checked on the local copy of the notes). The page keeps z = 0.33.
6. Fixed: "Guth says that most physicists call the vacuum energy the least understood issue in physics (Lecture 20, p. 13), and gives the factor of about 10^120 (Lecture 20, p. 16)".
7. Fixed: "Guth notes".
8. Fixed: "are mapping, or will soon map, billions of galaxies".
9. Fixed: added "(at such distances astronomers call this the luminosity distance)".
10. Fixed: "A modest difference in brightness means a sizeable difference in distance."
11. No change (fine as is, as the review says).
Where this leads: added 8.286 lecture 19 (age-with-vacuum-energy; checked: its sections "The age integral", "A flat universe with matter and vacuum energy" and "The age problem disappears" match the new why).
Status set to reviewed.

Checks: npm run calc:test -- -k dark-energy: 40 passed. npm run content:check: 0 error(s), no message for this page.
