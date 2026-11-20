---
page: content/year-3/8.044/white-dwarfs.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l20/ (read: the 32-page slide PDF mit8_044s13_l20.pdf; text extraction garbled for formulas, so slides 6, 7, 8, 9, 11, 14 and 16 were checked as images, l20-NN.png)
  - content/year-3/8.044/_course.json (read, Lecture 20 and 21 entries)
  - content/year-4/8.286/supernova-evidence.mdx (read, for the cosmology callout)
  - calcs/8.044/white-dwarfs.yaml (read; every number recomputed independently in Python; `pytest tests/calc -k white` run: 13 passed)
verdict: needs-changes
---

# Review: White dwarfs and the Chandrasekhar limit

Slide numbering: the PDF interleaves astronomical photographs (APOD, Chandra, Wikimedia) with the slides. PDF page → printed label: 6 → L20B1, 7 → B2, 9 → B3, 11 → B4, 12 → B5, 14 → B6, 15 → B7, 17 → B8, 18 → B9, 19 → B10, 20 → B11, 21 → B12, 22 → B13, 23 → B14, 24 → B15, 25 → B16, 26 → B17, 27 → B18, 29 → B19; PDF page 32 is the OCW notice. The page cites the printed labels 1–19, which is correct. There is no transcript for this lecture on OCW; only the slides were compared.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Relativistic Fermi energy", `at="slide 11"` | $\epsilon_F = c\hbar(3\pi^2N/V)^{1/3}$ is derived and stated on slide 10 (with $k_F$); slide 11 derives $\#(\epsilon)$ and $D(\epsilon) = \frac{V}{\pi^2}\left(\frac{1}{c\hbar}\right)^3\epsilon^2$. | Both results cited to slide 11 only. | `at="slides 10–11"`. |
| 2 | warning | "Sirius B" paragraph | Slide 8: "our model" $R = 7.1 \times 10^6$ m. Slide 9: "Our model of Sirius B implies $n_e = 8.6 \times 10^{29}$ cm⁻³, $\epsilon_F = 4.7 \times 10^{-7}$ ergs". Recomputed: $n_e = 8.6 \times 10^{29}$ cm⁻³ corresponds to the **observed** radius, $5.60 \times 10^6$ m, not the model radius. At $R = 7.1 \times 10^6$ m, $n_e = 4.2 \times 10^{29}$ cm⁻³ and the non-relativistic $\epsilon_F = 3.3 \times 10^{-7}$ erg ($T_F \approx 2.4 \times 10^9$ K). The slide's $4.7 \times 10^{-7}$ erg matches neither radius (5.3 × 10⁻⁷ erg at the observed radius); its origin is uncertain. | Quotes the slide's $n_e$ and $\epsilon_F$ as "the slide's figures for the electrons" directly after the model radius, with no remark. A reader comparing with the worked example (c), $3.8 \times 10^{29}$ cm⁻³ for a $1.0M_\odot$ model dwarf, sees an unexplained factor of about 2. | Add a bracketed note: the slide's $n_e$ corresponds to the observed radius (at the model radius, $n_e \approx 4.2 \times 10^{29}$ cm⁻³ and $\epsilon_F \approx 3.3 \times 10^{-7}$ erg, still 40% of $m_ec^2$, so the conclusion "relativity is needed" stands either way). Add the recomputed values to the calcs file. |
| 3 | warning | "Sirius B" paragraph | Slide 9: "($T_{\text{surface}} \sim 2 \times 10^7$ K)". | "far above the surface temperature of about $2 \times 10^7$ K". Sirius B's surface (effective) temperature is about 25 000 K; $\sim 10^7$ K is the order of a white dwarf's interior temperature. This looks like a slip on the slide (writing rule 4). The argument ($T \ll T_F$) holds a fortiori for either value. | "far above the star's temperature (the slide gives $2 \times 10^7$ K, labelled as the surface; that is an interior value, the surface is about 25 000 K)". Uncertain only in the exact interior figure. |
| 4 | warning | Formula "Kinetic energy of the electrons", `at="slide 6"` | Slide 6's last line: $E_K = \frac35\left(\frac{9\pi}{2}\right)^{2/3}\frac{\hbar^2}{m_e}\left(\frac{M}{m_\alpha}\right)^{2/3}\frac{1}{R^2}$, exponent **2/3** (a typo: the factor $N_e = 2M/m_\alpha$ was dropped; slide 7's result needs $M^{5/3}$). | $\frac35\left(\frac{9\pi}{2}\right)^{2/3}\frac{\hbar^2}{m_em_\alpha^{5/3}}\frac{M^{5/3}}{R^2}$, which is correct (independently derived) but differs from the slide without saying so. | Add "(the slide's last line has the exponent 2/3, a slip; with $N_e = 2M/m_\alpha$ it is 5/3, as slide 7's result requires)". |
| 5 | warning | Cosmology callout | (Not on the MIT 8.044 slides.) The site's 8.286 page `supernova-evidence` reports Guth: the equal-power assumption "rests on observation and some guesswork; there is no good theory behind it", and the brightnesses are corrected by light-curve shape (MLCS). | "Because they explode near a common mass, these supernovae have similar peak brightness, which is what let astronomers use them as standard candles." Stated as an established cause; peak brightnesses in fact vary by a factor of a few and are standardised with the light-curve shape. | Hedge and align with the 8.286 page: "Exploding near a common mass is thought to be why their peak brightnesses are similar; after a correction for the shape of the light curve, astronomers use them as standard candles." Mark it as this page's own link, not Greytak's. |
| 6 | info | Formula "Radius of a white dwarf", `at="slide 7"` | Slide 7: $MR_0^3 = 2(9\pi)^2\frac{\hbar^6}{G^3m_e^3m_\alpha^5} = 0.74 \times 10^{51}$ kg-m³. | $8\left(\frac{9\pi}{2}\right)^2\dots$, which is identical ($8 \cdot 81\pi^2/4 = 2 \cdot 81\pi^2$). | Optional: write the slide's form $2(9\pi)^2$, or keep and note "(= $2(9\pi)^2$ on the slide)". |
| 7 | info | Same formula, value | Slide: $0.74 \times 10^{51}$ kg m³. | Same. Recomputed with CODATA constants and $m_\alpha = 6.6447 \times 10^{-27}$ kg: $0.755 \times 10^{51}$ (rounds to 0.76); with $m_\alpha = 4m_p$: $0.729 \times 10^{51}$. The slide's figure is within 2%. | None needed (it is the slide's value); calcs tolerance 0.02e51 just covers it. |
| 8 | info | "Normal stars" | Slide 3: radiation pressure "helps and dominates above about $10M_\odot$". | Stated as fact. Standard stellar models give radiation pressure about 10–20% of the total at $10M_\odot$; it dominates only well above that. | Optional: attribute ("Greytak's slide puts the crossover near ten solar masses"). Uncertain how the slide intended "dominates". |
| 9 | info | "The Chandrasekhar limit" | Slide 17 gives the formula only; no mention of a density profile. | "The full calculation, with a realistic density profile, gives…". True (Chandrasekhar's $n = 3$ polytrope), but not on the slide. | Optional: "The full calculation (Chandrasekhar's, solving for the star's density profile) gives…". |
| 10 | info | Same section | Slide 17: "$Z/A = 0.5$ ($\alpha$ particles)". | "(helium, carbon or oxygen)". Correct extension (C-12, O-16 also have $Z/A = 0.5$). | None. |
| 11 | info | "Neutron stars and beyond" | Slide 18: $MR_0^3 \propto \hbar^6/G^3m_n^8$, $R_0 \approx 15$ km for $1.4M_\odot$; $M \lesssim 2M_\odot$. | Same, plus "nothing known stops the collapse to a black hole" (own addition, fine). The 15 km is the slide's figure: the page's simple model with one neutron per $m_n$ gives about 11 km; literally reusing the white-dwarf prefactor gives about 35 km. | Optional: "(the slide's estimate)". Add the 15 km and $2M_\odot$ to calcs as `kind: fact`. |

## Formula citations (all checked against the slide images)
- $E_K = \frac35N_e\epsilon_F = \frac35N_e\frac{\hbar^2}{2m_e}(3\pi^2N_e/V)^{2/3}$, $N_e = 2M/m_\alpha$, $V = \frac43\pi R^3$: slide 6. Correct (final form: see #4).
- $E_P = -\frac35GM^2/R$: slide 6. Correct.
- $MR_0^3$, $R_0 \propto M^{-1/3}$, "Stable for any $M$": slide 7. Correct (see #6). Independently derived: minimum of $AM^{5/3}/R^2 - \frac35GM^2/R$ at $R_0 = 2AM^{5/3}/(\frac35GM^2)$ gives the page's expression.
- $\epsilon = c\hbar|\vec k|$, $k_F = (3\pi^2N/V)^{1/3}$: slide 10. Correct.
- $\epsilon_F$, $D(\epsilon)$: slides 10–11 (see #1). Expressions correct.
- $N = \frac13a\epsilon_F^3$, $E = \frac14a\epsilon_F^4 = \frac34N\epsilon_F$: slide 12. Correct.
- $P = -(\partial E/\partial V)_{N,S} = \frac14(N/V)\epsilon_F \propto (N/V)^{4/3}$, $dS = 0$ at $T = 0$, "rises less steeply": slide 13. Correct (checked: $\epsilon_F \propto V^{-1/3}$ gives $\partial E/\partial V = -\frac13E/V$).
- Relativistic $E_K = \frac32(9\pi/2)^{1/3}c\hbar(M/m_\alpha)^{4/3}/R$: slide 14, identical. Independently derived.
- $E_K = a/R$, $E_P = -b/R$, never stable, $a = b$ the dividing line: slide 15. Correct.
- $M \sim (c\hbar/Gm_\alpha^2)^{3/2}m_\alpha$: slide 16, identical.
- $M_{\text{Ch}} = 0.20(Z/A)^2(ch/Gm_p^2)^{3/2}m_p$: slide 17, identical, with $h$ (not $\hbar$), correctly kept. Quiz 4 and flashcards write $hc$, the same thing.
- Slides 1–5, 18, 19: prose only; content matches (self-gravitating, self-consistent; planets held by atomic forces; $P = nkT$ and $P = \frac13u(T)$; four end states in order of mass; nuclear spacing ~1/100 of a solid, $P \propto n^{5/3}/m_e$, white → grey → brown; neutron stars; densities 1, $10^6$, $10^{14}$ g/cm³).

## Arithmetic and answer checks
- Sirius B model radius: $(0.7555 \times 10^{51}/2.1 \times 10^{30})^{1/3} = 7.11 \times 10^6$ m (7.1). Correct.
- $4.7 \times 10^{-7}$ erg$/k = 3.40 \times 10^9$ K. Correct. $m_ec^2 = 8.19 \times 10^{-7}$ erg. Correct.
- Slide 9's $n_e$ and $\epsilon_F$: see #2.
- Chandrasekhar: $0.20 \times 0.25 \times (hc/Gm_p^2)^{3/2}m_p = 2.90 \times 10^{30}$ kg $= 1.459M_\odot$ ("about 1.4"; the standard value $5.83/\mu_e^2 = 1.457M_\odot$ agrees). With $\hbar$ instead of $h$ it would be $0.093M_\odot$, so $h$ is essential and the page has it right.
- Order-of-magnitude estimate $(c\hbar/Gm_\alpha^2)^{3/2}m_\alpha = 0.117M_\odot$ (page quotes no number; consistent with "same form", smaller prefactor).
- Worked example: (a) $(0.74 \times 10^{51}/1.989 \times 10^{30})^{1/3} = 7.192 \times 10^6$ m (7.19); (b) $\rho = 1.276 \times 10^9$ kg/m³ (1.28; $1.3 \times 10^6$ g/cm³); a 5 mL teaspoon $\approx 6.4$ t ("several tonnes"); (c) $n_e = 2\rho/m_\alpha = 3.841 \times 10^{35}$ m⁻³ $= 3.8 \times 10^{29}$ cm⁻³; (d) $2^{1/3} = 1.260$. All correct. The example (solar mass, density, teaspoon, mass doubling) is the page's own, not a copy of slides 8–9.
- Graph: total $1/r^2 - 2/r$ has its minimum at $r = 1$ with value $-1$; there $E_K = 1$, $E_P = -2$ (virial ratio, correct for $1/R^2$ vs $-1/R$). Caption accurate; generated from formulas.
- Quiz 1–4: all marked answers (0) correct; explanations correct.
- Flashcards 1–3: correct.
- calcs/8.044/white-dwarfs.yaml: all 13 entries match my recomputation and pass. Not covered: Sirius B $n_e$, $\epsilon_F$, $T_{\text{surface}}$, "better model" $8.6 \times 10^6$ m, $10M_\odot$, neutron star 15 km and $2M_\odot$, densities 1 / $10^6$ / $10^{14}$ g/cm³, $1.3 \times 10^6$ g/cm³ and $3.8 \times 10^{29}$ cm⁻³ conversions, teaspoon mass. Suggest `kind: fact` entries for the slide figures. Minor: `ex-b` cites `mit` slide 19 for a page-own calculation.

## Coverage and order
- The page follows slides 1–19 in order and covers every slide. Slide 10's $D_{\text{wavevectors}}$/$D_{\text{states}}$ and slide 11's $\#(\epsilon)$ step are summarised ("the counting of states is unchanged"), which is adequate.
- Additions not on the slides: grey-to-brown fading explained, "nothing known stops the collapse", the cosmology callout, the worked example. All fine.
- `leadsTo`: 8.044 Lecture 21 ("Interesting and counter-intuitive examples" in `_course.json`; "More surprising applications" fits) and 8.286 Lecture 20 (`supernova-evidence.mdx` is Lecture 20). Correct.

## Licensing
- No images from the PDF are used; the page draws its one graph from formulas. The APOD, Chandra and Wikimedia photographs (PDF pages 1–5, 8, 10, 13, 16, 28, 30, 31) are not reused or described in detail, and the page's opening says so. No "All rights reserved" or "Courtesy of" notices on the slides.
- No OpenStax or LibreTexts material.
- No near-verbatim sentences. Closest: "which rises less steeply with density than the non-relativistic $(N/V)^{5/3}$" (slide 13: "This pressure rises less steeply with density, $(N/V)^{4/3}$, than is the case for the non-relativistic gas") and "the same form as the estimate" (slide 17: "it has the same form as our expression"); short phrases, acceptable.
- No em dashes found on the page.

## Notes
- Cosmology callout: the type Ia mechanism is hedged ("is then thought to explode"), and the 1998 acceleration result and the link to 8.286 Lecture 20 are correct; see #5 for the standard-candle sentence. Single-degenerate accretion is not the only proposed channel (white-dwarf mergers also), so "thought to" is the right register.
- Sirius B's mass ($2.1 \times 10^{30}$ kg) and radius ($5.6 \times 10^6$ m) are the slide's; modern values ($\approx 1.02M_\odot$, $\approx 5.8 \times 10^6$ m) are close, no change needed.
- Neutron star maximum "of order $2M_\odot$" matches the slide and current observations (heaviest known about 2.0–2.3 $M_\odot$).

## Resolution (2026-11-17, by the page author)

- Error 1: "Relativistic Fermi energy" now cites slides 10–11.
- Warning 2: a note in brackets explains that the slide's n_e matches the observed radius, and gives the model-radius values (about half the density, ε_F ≈ 3.3 × 10⁻⁷ erg). The conclusion is unchanged.
- Warning 3: the slide's 2 × 10⁷ K is now described as its comparison temperature, with a note that Sirius B's surface is nearer 25 000 K.
- Warning 4: the slide 6 slip, (M/m_α)^{2/3} for (M/m_α)^{5/3}, is noted.
- Warning 5: the supernova callout is hedged: there is no complete theory of the brightness, which is calibrated empirically from the light-curve shape, as on the 8.286 page.
- Info: the radiation-pressure claim and the neutron-star 15 km are attributed to the slides; the "realistic profile" remark is now explicit about what the slide leaves out.
