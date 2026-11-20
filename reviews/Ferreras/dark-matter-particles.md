---
page: content/year-5/Ferreras/dark-matter-particles.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 6 opening and Sections 6.1–6.3, printed pp. 132–143 (read, from fdm.pdf via pdftotext -layout and -raw -enc UTF-8; maths symbols garbled in the extraction and rebuilt from context; the PDF could not be rendered as images because pdftoppm is not installed)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: pass-with-notes
---

# Review: What could dark matter be made of? Hot, warm and cold — and neutrinos

## Differences from the MIT source
(Source here is the Ferreras textbook, not MIT.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | "Neutrinos", text after Eq. (6.6); worked example; quiz 3; summary | Eq. (6.6) ends "≈ 108 N_ν cm⁻³" (p. 142) | "about 112 per cm³ per flavour", without saying the book quotes 108 | Keep 112: it is the correct value (see arithmetic checks; the book's 108 does not even follow from its own T_ν,0 = 1.95 K, which gives about 113). Add a short bracket, e.g. "(Ferreras quotes about 108; the standard value with T_ν = 1.945 K is 112)". It does not change any conclusion: both give a coefficient of about 0.01 in Eq. (6.7) and "about 4 eV". |
| 2 | warning | "A thermal timeline", last paragraph; quiz 1, correct choice | "net matter contribution (Ω_dm,0 h² ≈ 0.12)" (p. 137) | "well below the total matter density Ω_dm h² ≈ 0.12" | 0.12 is the dark matter density, not the total matter density (Ω_m h² ≈ 0.14 including baryons). The book's wording is loose too, but the page should say "the dark matter density Ω_dm h² ≈ 0.12" (or "the total matter density, Ω_m h² ≈ 0.14"). Fix in the text and in quiz 1's choice. |
| 3 | warning | "A particle physics primer", end of first paragraph | Pair production written as a reaction of photons, "γ + γ → e⁺ + e⁻", provided hν ≳ m_e c² (p. 134; reaction symbols garbled, reconstruction likely but uncertain) | "an energetic photon can create an electron–positron pair" | A single photon cannot pair-produce in vacuum (momentum conservation); it needs a second photon or a nucleus. Say "two energetic photons (or a photon near a nucleus) can create an electron–positron pair". |
| 4 | info | Formula "Neutrino and photon temperatures" (Eq. 6.4) | Eq. (6.4) is written as a chain T_ν,2/T_γ,2 ≈ T_ν,2/T_ν,1 … = (g*,s ratio)^{1/3}; the extraction does not show reliably which g*,s is in the numerator (uncertain) | (g*,s,2/g*,s,1)^{1/3} = (4/11)^{1/3} | The page's form is physically right with g*,s counting photons and e± only (11/2 → 2) and reproduces Eq. (6.5). No change needed; noted only because the book's exact form could not be verified. |
| 5 | info | Formula "Cosmic neutrino number density" (Eq. 6.6) | Prefactor partly garbled ("2N_ν (3/4) … /π² T³"); ζ(3) reconstructed | 2N_ν (3/4) ζ(3)/π² T³ | The page's prefactor is the standard one and evaluates to 112 cm⁻³ per flavour; consistent with the book's derivation route (from Eq. 5.16). |
| 6 | info | Formula "Neutrino density parameter" (Eq. 6.7) | Ω_ν,0 ≈ 0.01 h⁻² N_ν (m_ν/eV) | Ω_ν,0 h² ≈ 0.01 N_ν (m_ν/eV) | Equivalent rearrangement; fine. |
| 7 | info | Flashcard 3, worked example step 3 | Book gives only "0.01 N_ν (m/eV)" | "Σm_ν/(94 eV)", "the usual form" | 94 eV is not in the book but is the standard value (consistent with 112 cm⁻³). Fine; optionally say it is the standard form, not Ferreras's. |
| 8 | info | Sterile neutrinos | Describes the electroweak fields W₁, W₂, W₃ and B, weak isospin and hypercharge, charged and neutral currents (p. 143) | Only the doublet/singlet structure (Eqs. 6.8–6.9) | Acceptable condensation; optional one sentence on W±/Z⁰ as mixtures of W₁,₂,₃ and B. Quiz 4's "(and mixing)" is an addition not in the book, but correct. |
| 9 | info | Frontmatter `lecture: 6.2` | — | Page covers 6.1–6.3 | Consistent with `_course.json` (6.1 and 6.3 list this page in `coveredBy`); no change needed. |

All formula citations check out against the printed page headers: Eq. (6.1) p. 133; Eq. (6.2) p. 136; Eq. (6.3) p. 141; Eqs. (6.4)–(6.5) p. 141; Eqs. (6.6)–(6.7) p. 142; Eqs. (6.8)–(6.9) p. 143. Eq. (6.2), n − n̄ = gT³/(6π²)[π²(μ/T) + (μ/T)³], matches the book (reconstructed) and the standard exact result for massless fermions. Eq. (6.3), T³_dec ~ G^{1/2}/G_F² ⇒ ≈ 1 MeV, matches.

## Arithmetic and answer checks
- (4/11)^{1/3} = 0.7138 ≈ 0.714 ✓; × 2.725 K = 1.945 K ≈ 1.95 K ✓ (the book uses 2.73 K → 1.95 K).
- Number density per flavour (ν + ν̄): (3/2)·ζ(3)/π²·(kT/ħc)³ at T = 1.945 K: kT/ħc = 8.494 cm⁻¹, cubed 612.9, × 0.12179 × 1.5 = 112.0 cm⁻³ ✓. At the book's T = 1.95 K: 112.8 cm⁻³. The book's 108 N_ν cm⁻³ is about 4% low.
- ρ_c = 3H²/(8πG) c² with H = 100 km/s/Mpc: 1.0537 × 10⁴ h² eV cm⁻³ ✓ ("1.05 × 10⁴").
- Per flavour: 112/1.0537 × 10⁴ = 0.01063 ≈ 0.0106 ✓. Quiz 3: 0.12/(3 × 0.0106) = 3.77 ≈ 3.8 eV, marked "About 4 eV" ✓ (book: "m ≳ 4 eV" ✓).
- Worked example: 3 × 112 = 336 ✓; 112 × 0.1 = 11.2 eV cm⁻³ ✓ (= 336 × 0.1/3); 11.2/1.05 × 10⁴ = 1.07 × 10⁻³ ≈ 0.0011 ✓; 0.0011/0.12 = 0.9% ≈ "about 1%" ✓; 0.1/94 = 1.06 × 10⁻³ ✓.
- Flashcard 3: 0.12 × 94/3 = 3.8 eV ≈ "about 4 eV per flavour" ✓.
- Quiz 1 (answer 1), quiz 2 (answer 1, k ≈ 0.1 h Mpc⁻¹ from p. 139 ✓), quiz 3 (answer 1), quiz 4 (answer 1, right-handed = zero weak isospin, p. 143 ✓): all marked answers correct. Quiz 1 choice text has the "total matter" mislabel (finding 2).
- Timeline values (3 × 10¹² K, 10⁻⁵ s; 1 MeV, 1 s; e± annihilation "a few seconds later" — book: begins at 4 s; 10⁹ K, few minutes; ~10³ K, ~10⁵ yr, about 300 000 yr) match pp. 136–137 ✓. Photons per baryon ~10⁹ ✓ (p. 135). Pauli 1930 ✓ (p. 140).
- `npm run calc:test` subset (-k for the three pages): 43 passed.

## Coverage and order
- Order follows the book: chapter introduction → 6.1 (Standard Model, antimatter and Eq. 6.2, thermal timeline, baryon argument) → 6.2 (hot/warm/cold, P(k), transfer function, observed spectrum) → 6.3 (history, oscillations, hierarchies, decoupling, CNB temperature, Eqs. 6.6–6.7, N_ν = 3, sterile neutrinos).
- Left out (minor): pion decay at ~10¹² K and decay of heavier leptons in the timeline (p. 136); the remark that weak interactions are the bottleneck for stellar helium production (p. 134); the electroweak field structure (W₁–W₃, B, hypercharge, charged/neutral currents, p. 143); Exercise 6.1 (exercises are not required on lesson pages).
- Added: links to existing 8.286 and 8.902 pages; an original worked example (Σm_ν = 0.1 eV); nothing that contradicts the book.

## Licensing
- Source is CC BY-NC 4.0; adapting it into this CC BY-NC-SA 4.0 page is allowed with attribution. The textbook credit footer (`components/Credit.tsx`, `TextbookCredit`) gives the publisher's attribution, licence link and a statement of changes ✓.
- No figures reproduced: Figure 6.3 (from Planck collaboration, Aghanim et al. 2020) is not used; the page only names the surveys ✓. Figures 6.1–6.2 not used ✓.
- An automated 6-word overlap check against Chapter 6 found only short standard phrases ("baryon or lepton number cannot have been conserved", "many orders of magnitude in scale", "right handed leptons have zero weak isospin"); no copied sentences or paragraphs ✓. The sentence "Hot dark matter would strongly suppress power above about k ≈ 0.1 h Mpc⁻¹, and is firmly rejected" is a close paraphrase of p. 139 but acceptable.
- No OpenStax/LibreTexts material ✓.

## Notes
- Forward links: `leadsTo` Ferreras 6.4 (WIMPs and axions) and 6.6 (detection) are correct and fairly described. No `Callout kind="cosmology"` on the page. Prerequisite slugs and inline links (`/courses/8-286/grand-unified-theories`, `/courses/8-902/dark-matter-freeze-out`, `/courses/8-902/why-cold-dark-matter`, `/courses/8-286/neutrinos-and-particle-counting`) all exist.
- `npm run content:check`: no warnings for this page other than the missing review file (now written).
- Equation reconstructions from the garbled extraction are marked uncertain above where relevant (Eqs. 6.4, 6.6 and the pair-production reaction); none of them is reported as an error.

## Resolution (2026-11-15, by the page author)

- Warning (112 vs the book's 108 per cm³): a bracketed note now says the book's Eq. (6.6) gives about 108, that its own 1.95 K gives 112, and that the difference changes no conclusion.
- Warning (Ω_dm h² called the total matter density): now "the dark matter density" in the text and in quiz 1.
- Warning (pair production): now "two energetic photons (or one photon passing a nucleus) can create an electron–positron pair".
- Info (Eq. 6.4 form, Σm/94 eV, omitted timeline details): no change. The page's form is physically correct and the 94 eV form is the standard one.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
