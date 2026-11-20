# Lessons run 12 (2026-11-18)

Branch `lessons-run-12`, from `main` after PR #67 (12:43 to 14:25). Stopped at the owner's request after the lessons in progress (Lectures 13 and 14) were finished. Each lecture is one commit (plus one small correction commit for the second Lecture 13 page), with its calcs file, an independent review (all findings fixed or answered in a Resolution section, `status: reviewed`) and page-scoped symbol meanings. Every commit passed the pre-commit checks (`content:check`, calc tests) and `npm run build`.

## Why 8.06

8.06 (Quantum Physics III, Spring 2018, Zwiebach) is next in the order of work; runs 10 and 11 wrote Lectures 1–8. This run continued in MIT's order with chapter 4 of the notes (time-dependent perturbation theory) and the start of chapter 5 (particles in electromagnetic fields).

## Added

| # | Lecture | Page | What | Review |
|---|---|---|---|---|
| 1 | 9 | `interaction-picture-time-dependent-perturbations` | Why a time-dependent Hamiltonian has no energy eigenstates; the interaction picture and the Heisenberg version of δH; the coupled equations for the coefficients; the two-level system kicked by a delta function (solved through a short pulse); the setup of the perturbation series. Own example: a 2.0 eV two-level system and a 10⁻¹⁷ s kick, exact against first order. Cosmology callout on recombination (8.286 L17) | pass with notes, resolved |
| 2 | 10 | `fermis-golden-rule-constant-perturbations` | Box regularization and the density of states; transitions with a constant perturbation; the sin² lobes and their integral; Fermi's golden rule, its units and validity; helium auto-ionization. Two generated graphs. Own example: a 27.2 eV electron in a 1 cm box, and why L drops out. Cosmology callout on reaction rates and freeze-out (8.902 L19) | needs changes (off-by-one transcript page citations, one symbol unit), fixed |
| 3 | 11 | `harmonic-perturbations-ionization-of-hydrogen` | Harmonic perturbations and the two-peak amplitude; stimulated emission and absorption; the golden rule for E_f = E_i ± ħω; the validity window for ionizing hydrogen; the perturbation, states and the matrix element (checked numerically by the reviewer). Own example: a 500 eV photon, and the fall-off at 1000 eV. Cosmology callout on photoionization and recombination (8.286 L17) | pass with notes, resolved |
| 4 | 12 | `ionization-rate-two-level-atoms-einstein` | The angular distribution and total ionization rate of hydrogen, the (ka₀)⁻⁹ law; two-level atoms, lasers, population inversion; Einstein's argument (B_ab = B_ba, A/B) and A/(BU) = e^{ħω/kT} − 1 (generated graph); the dipole perturbation. Own example: a 500 eV photon in a 10⁹ V/m field, a 10.2 eV line at 6,000 K, the 21 cm line in the CMB. Cosmology callout on thermal radiation (8.286 L16, L18) | pass with notes, resolved |
| 5 | 13 (first part) | `thermal-transition-rates-einstein-coefficients` | Incoherent thermal radiation, the frequency integral and direction average, the thermal rate and B_ab, the A coefficient, lifetimes, selection rules and the decays of hydrogen's n = 3 states (generated graph). Own example: the hydrogen 2p → 1s lifetime (1.60 ns) and stimulated decay at 3,000 K. Cosmology callout on black-body radiation and recombination (8.286 L16, L17) | needs changes (the page had missed video L13.3, see below), fixed and rechecked |
| 6 | 13 (second part) | `charged-particles-em-fields-gauge-invariance` | Fields and potentials, gauge transformations, Wilson loops and flux on a torus, the Schrödinger equation with p − qA/c and the phase transformation of ψ (transcripts only). Own example: one magnetic field in two gauges. Cosmology callout on gauge symmetry (8.286 L21, L22) | pass with notes, resolved |
| 7 | 14 | `gauge-invariance-flux-quantization-landau-levels` | The proof of gauge invariance with the covariant derivative; gauge-invariant observables (p fails, p − qA/c passes); a constant field on a torus and flux quantization Φ_B = n·hc/q; Landau levels in the Landau gauge, the magnetic length and the degeneracy N = Φ_B/Φ₀ (generated graph; transcripts only). Own example: an electron at 10 T, states per cm², flux quanta through a 1 μm torus. Cosmology callout on Dirac's monopole flux and the GUT monopole charge (8.286 L22) | needs changes (8.286 Lecture 22 was taught by a substitute, Scott Hughes, from Guth's notes, not by Guth; the same credit was corrected on the second Lecture 13 page in a separate commit), fixed |

After this run there are 404 pages (403 lessons and 1 problem set), and 8.06 has Lectures 1–14 of 24.

## About the 8.06 source

- The transcripts have no printed page footers, so pages cite the PDF page of each video's transcript, as runs 10 and 11 did. The chapter 4 notes are printed pp. 73–112 (printed page = PDF page + 72).
- Lecture 13 has five videos. Three of them (L13.3–L13.5) have long resource-page slugs (for example `resources/l13-3-einsteins-b-and-a-coefficients-determined/`), so probing `resources/l13-1/`, `l13-2/`, … until a 404 missed them; the review caught it. Take a lecture's videos from the video gallery (`video_galleries/lecture-videos/`). Lectures 9–12 and 14–16 have no such slugs (checked).
- Chapter 5 of the notes (particles in electromagnetic fields) is not on OCW, so the second Lecture 13 page and the Lecture 14 page rely on the transcripts only, and say so.
- Slips noted on the pages (transcript wording): 4π/α "about 1,772" (1722); the lobe integral "over 2π" (πħt₀/2); ∫cos²θ dΩ = 4π (4π/3); t* = "2 Ry over ħ" (ħ/2R_y); A/B with πc³ (π²c³); "spontaneous" for stimulated emission; the total lifetime said to be the sum of the partial ones; the flux quantum quoted as 2.068 × 10⁻¹⁵ Wb, which is h/2e, where the lecture's own hc/q gives h/e. Notes slips: (4.5.2) prints N_a/N_b inverted; (4.5.17) and (4.5.18) each drop a factor that cancels; (4.4.21) and (4.4.24) show +ikr cos θ′ where (4.4.25) has the correct sign.

## Practical notes for the next run

- Read-aloud says `\dots` as "s dot" (it reads it as a dot accent on s); `\ldots` and `\cdots` are read as "and so on". This run's pages use `\cdots` and `\ldots`. The fix in `lib/speech.ts` comes in a separate change after this run; 120 existing pages use `\dots`.
- Writing the next lesson in a staging folder outside the repo, while the previous one is reviewed, worked well: each lesson's symbol changes stay separate, so each commit holds one lecture. Only one lesson at a time is copied into the repo and checked.
- Avoid `\partial_x` style derivatives, `\exp`, `\equiv`, `\sim` and `\rm` where a plain form works: each needs a symbol entry or causes a speech gap.

## Not done / for the owner

- 8.06 Lectures 15–24 remain; next is Lecture 15, "Adiabatic invariants, classical and quantum" (notes chapter 6, sources already checked: four videos).
- The `\dots` read-aloud fix (above).
