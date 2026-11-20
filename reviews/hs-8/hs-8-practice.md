---
page: content/year-0/hs-8/hs-8-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/58ae3113f8c0144438b1ad474ed34a7b_OtJFD9HNnoc.pdf (read, local PDF: p. 11 t = (2/3)H⁻¹; p. 12 "9.7 plus or minus 0.2 billion years" for 67.3; p. 13 13.8 billion years; pp. 19–20 the integral giving the horizon distance 3ct₀)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (read, local PDF: p. 12 "67.3 plus or minus 1.2")
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/7374706759bab97b9b6d0c4d649faf70_ANCN7vr9FVk.pdf (read, local PDF: p. 7 doubling time 10⁻³⁷ s, about 100 doublings; p. 8 about 10⁻³⁵ s in all)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec20.pdf (read: eq. (490) T ≈ 8 × 10⁸ K, t ≈ 200 s; eq. (491) neutron decay, which the notes give with t₁/₂ = 890 s, really the mean life; n/p ≈ 0.15; Y formula)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read earlier this session, local text: eqs. (4), (22), (24)–(26) present)
  - 8.033 Fall 2006 Lectures 4, 5, 10, 16, 21 slides; 8.20 Lectures 9.2 and 9.4; 22.02 Ch. 1; 22.01 L6; 8.04 notes 3 and 7; 8.701 L1.3; 8.286 L17, L18, L23; 8.902 L10; PDG BBN review and listings; NIST CODATA pages; NASA Sun and Earth Fact Sheets, NASA glossary, COBE FIRAS; 8.901 PS2; Siyavula Gr 12 12.2 and Gr 10 11.5 (not re-read: every locator is copied from the reviewed Block 8 lessons 8.1 to 8.19, checked in their reviews; spot-checked above for the five most numeric ones)
verdict: needs-changes
---

# Review: Practice set: modern physics and the universe

All 67 answer boxes (58 numbers or formulas, 9 choices) agree with an independent blind solve: no wrong number, no wrong marked choice, no faulty formula box. Points add up to 166 (12 + 13 + 13 + 12 + 13 + 11 + 13 + 13 + 14 + 14 + 12 + 12 + 14). `npm run calc:test -- -k hs-8-practice`: 139 passed. `npm run test:answers`: 65 passed. `npm run content:check`: 0 errors (only the warning that this review file was missing). No em dashes.

The verdict is needs-changes for one statement in Problem 10 that contradicts lesson 8.13 (the rounded temperature rule is said to hold "in the first minutes"). Everything else is warnings and notes.

## Blind solve

Solved from `pc2-handover/work/hs-8-practice-statements.md` and the Block 8 lessons only, written to the scratchpad file `blind.md` before the page or the calcs file was opened. My answer | the page's:

- p1-a c = 3.00 × 10⁸ m/s | choice 1 "c": agree
- p1-b 3.571 | 3.57: agree
- p1-c 10.71 h | 10.7: agree
- p1-d 14.0 m | 14.0: agree
- p1-e c√(1 − 1/γ²) | c*sqrt(1 - 1/g^2): agree
- p2-a 8.20 × 10⁻¹⁴ J | 8.20e-14: agree
- p2-b 3.99 (1 + 1.53/0.5124 = 3.986) | 3.99: agree
- p2-c 0.968 | 0.968: agree
- p2-d 2.44c (with 0.5124 MeV; 2.45c with 0.511), impossible | choice 2 "About 2.4c": agree
- p2-e 1 + E_k/(mc²) | 1 + E/(m*c^2): agree
- p3-a 0.00239 u | 0.00239: agree
- p3-b 2.23 MeV | 2.23: agree
- p3-c 2.83 MeV (8.48/3) | 2.83: agree
- p3-d 4.02 MeV (0.00432 u) | 4.02: agree
- p3-e 931.5(Z m_p + N m_n − M)/(Z + N) | same: agree
- p4-a 1.43 × 10³⁹ s⁻¹ | 1.43e39: agree
- p4-b 9.54 × 10¹² kg/s | 9.54e12: agree
- p4-c 6.78 × 10¹⁰ kg/s | 6.78e10: agree
- p4-d 1.32 billion years | 1.32: agree
- p4-e luminosity grows much faster than mass | choice 1: agree
- p5-a 0.180 nm | 0.180: agree
- p5-b diffraction, λ ≈ spacing | choice 1: agree
- p5-c h/√(2meV) | h/sqrt(2*m*e*V): agree
- p5-d 46.5 V (46.3 V with the unrounded 0.1805 nm) | 46.5: agree (both inside 3%)
- p5-e 1.06 × 10⁻²⁰ kg m/s | 1.06e-20: agree
- p6-a +1 | 1: agree
- p6-b 133 | 133: agree
- p6-c 9.89 GeV | 9.89: agree
- p6-d hc/(2πr) | h*c/(2*pi*r): agree
- p7-a 14.4 μs | 14.4: agree
- p7-b redshifted, lower frequency by 4.6 × 10⁻¹³ | choice 0: agree
- p7-c 8.86 mm | 8.86: agree
- p7-d 5.07 × 10⁷ solar masses | 5.07e7: agree
- p7-e 1/3 | 0.333: agree
- p8-a 250 pc | 250: agree
- p8-b 7.72 × 10¹⁸ m | 7.72e18: agree
- p8-c 1.12 × 10³⁰ W | 1.12e30: agree
- p8-d 2.5 Mpc | 2.5: agree
- p8-e d₁√(F₁/F₂) | d1*sqrt(F1/F2): agree
- p9-a 0.0280 | 0.0280: agree
- p9-b 8410 km/s (8400 from the rounded z) | 8400: agree
- p9-c 70.1 km/s/Mpc | 70: agree
- p9-d 14.5 billion years | 14.5: agree
- p9-e dark energy: slowed, then sped up | choice 2: agree
- p9-f 2c/H₀ | 2*c/H: agree
- p10-a 5.0 × 10⁹ K | 5.0e9: agree
- p10-b 5.45 × 10⁻¹⁰ | 5.45e-10: agree
- p10-c 156 s | 156: agree
- p10-d 0.136 (0.837 neutron left, 6.163 protons) | 0.136: agree
- p10-e 0.239 | 0.239: agree
- p10-f no stable mass 5 or 8, Coulomb barriers, cooling and thinning | choice 2: agree
- p11-a 19.1 K | 19.1: agree
- p11-b 0.152 mm (b = 2.9 × 10⁻³ m K from lesson 8.15) | 0.152: agree
- p11-c 1467 (1466.9) | 1467: agree
- p11-d no: opaque until decoupling near z ≈ 1100 | choice 1: agree
- p11-e hcT/b | h*c*T/b: agree
- p12-a 7.57 × 10²⁰ m | 7.57e20: agree
- p12-b 3.68 × 10⁴¹ kg (1.85 × 10¹¹ solar masses) | 3.68e41: agree
- p12-c 4 | 4: agree
- p12-d 83.8 km/s | 83.8: agree
- p12-e 0.78 | 0.78: agree
- p13-a 28.8 | 28.8: agree
- p13-b slowing down (28.8 > 2) | choice 1: agree
- p13-c (2Ω_vac/Ω_m)^(1/3) − 1 (= 0.645) | (2*Ov/Om)^(1/3) - 1: agree
- p13-d 99.7 | 99.7: agree
- p13-e 9.97 × 10⁻³⁶ s | 9.97e-36: agree
- p13-f 5 × 10⁻⁶¹ | 5e-61: agree

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Problem 10 statement | Lesson 8.13: the rule T = 9.98 × 10⁹ K/√t "is only for the era around one second … not an exact clock for all times"; soon after one second the e± pairs are gone and the number in front changes; the real universe reached 10⁹ K "about three minutes" after the start, not at the rule's 100 s. 8.902 L20 eq. (490): 8 × 10⁸ K at t ≈ 200 s | "In the first minutes, the temperature of the universe followed the rounded rule T = 1.0 × 10¹⁰ K/√t" | Reword: "Use the rounded rule of lesson 8.13, T = 1.0 × 10¹⁰ K/√t (t in seconds). It is only a guide after the first second: later the real universe cooled more slowly than the rule says." The 10(c) check already gives the 200 s; add one clause there that the rule runs early because after the electron–positron pairs disappear the number in front grows (lesson 8.13). Answers unchanged |
| 2 | warning | 11(d) answer label | (no source issue) | Question "Could a telescope ever see …?" with label "It could not, because:" | The label gives the yes/no away. Use "Answer:" and add a "Yes, …" choice (for example "Yes, with a large enough telescope, because the light is only very faint") |
| 3 | warning | 11(a) "Check the result" | Not in any lesson | "a gas cloud in that galaxy could not cool below 19.1 K, because the background kept warming it" | As an absolute it is not true: gas can cool below the background temperature by expanding (the Boomerang Nebula today is about 1 K, below the 2.7 K background). Soften: "radiation alone could not cool a gas cloud much below 19 K, because the background kept warming it", or drop the sentence |
| 4 | info | frontmatter, reading 21 location | Lecture 1 p. 8: "about 10 to the minus 35 seconds" (read) | 13(e) cites "reading 21, p. 8", the location lists p. 7 only | Add "p. 8: about 10⁻³⁵ s in all" to the location |

## Formulas and citations
- Every `<Formula>` cite and `at` is the one used for the same formula in lessons 8.1 to 8.19 (compared one by one: 8.2 time dilation slide 4 and contraction slides 12–13 of 8.033 L5; 8.3 rest and total energy 8.20 L9.2/9.4; 8.4 mass defect, 931.5 and Q from 22.02 Ch. 1 and 22.01 L6; 8.6 de Broglie and Heisenberg from 8.04 notes 3 and 7; 8.7 range estimate 8.701 L1.3; 8.8 gh/c² with 8.033 L16 slide 30; 8.9 r_s and v_esc from 8.033 L21; 8.10 to 8.11 from 8.902 L1 eqs. (4), (15), (22), (24)–(26); 8.12 from 8.286 L4 and L8; 8.13 from 8.286 L17; 8.14 from 8.902 L20 and PDG; 8.15 Wien from 8.901 PS2; 8.17 from 8.902 L10 and 8.286 L18 p. 21; 8.18 from 8.286 L1 and L23).
- Spot-checked in the PDFs this session: 8.286 L4 p. 12 (67.3 ± 1.2), L8 p. 11 (t = 2/3 H⁻¹), p. 12 (9.7 billion years), p. 13 (13.8), pp. 19–20 (horizon distance 3ct₀), L1 pp. 7–8 (10⁻³⁷ s, about 100 doublings, about 10⁻³⁵ s), 8.902 L20 eq. (490) (8 × 10⁸ K, 200 s). All correct.
- Formulas marked "(our own step)" are correct rearrangements: v = c√(1 − 1/γ²), γ = 1 + E_k/mc², E_b/A, mc² ≈ hc/(2πr), d₂ = d₁√(F₁/F₂), 2c/H₀, 1 + z = (2Ω_vac/Ω_m)^(1/3), E = hcT/b.
- 8.902 L20 gives the neutron "half-life" as 890 s (that is roughly the mean life); the page rightly uses PDG's 609 s, as lesson 8.14 does, and cites eq. (491) only for the idea that neutrons are lost by decay. Fine.
- Statement citations "reading 14, p. 12", "reading 17, p. 111", "reading 19, eq. (300)", "reading 16, p. 19", "reading 18, p. 2", "reading 18, eq. (24.3)" all point to the right readings in the frontmatter list.

## Arithmetic and answer checks
- Every value in the solutions and checks recomputed; all agree to the shown figures (for example 1(c) check 1.11 × 10¹³ m and 3.11 × 10¹² m; 2(d) 2.45c; 3(d) 8.48 − 4.46 = 4.02; 4(a) 0.02871 u × 931.5 = 26.7 MeV; 4(c) 0.0071; 4(d) 10 × 2/16 = 1.25; 5(e) 6.3 × 10⁶ m/s; 6(b) 125/0.94 = 133; 6(c) W range 2.46 × 10⁻¹⁸ m, factor 8.1; 8(b) 816 ly; 8(c) 2930 L☉ (2929); 8(d) 4 × 10⁻⁷ arcsec; 9(f) 2.75 × 10²⁶ m = 2.91 × 10¹⁰ ly; 11(e) 1.31 × 10⁻²¹ J = 8.2 × 10⁻³ eV; 12(d) 168 km/s at 20 000 ly; 13(c) 4.45^(1/3) = 1.645).
- Tolerances are sensible: 3% everywhere except 2(c) 0.5% (0.968 vs 0.9680/0.9681 for either rest energy: fine), 9(a) 1% (0.02804: fine), 6(a) absolute 0.1. A reader who keeps the unrounded 0.5124 MeV of 2(a) or the unrounded 0.1805 nm of 5(a) lands inside the tolerance.
- Formula boxes: every `vars` range keeps the expression finite and real (1(e) g ≥ 1.01; 13(c) positive Ω's; 3(e) Z + N ≥ 2). Every listed mistake differs from the answer and its hint is true (1(e) c/γ: γ = 1 would give v = c, true; 9(f) 3c/H uses t₀ = 1/H₀, true; 13(c) (Om/(2Ov))^(1/3) is a, true).
- Every calcs entry with `answer:` (58, one per number or formula box) matches its box; every shown number found in the calcs file. Cosmological values (67.3, 13.8, 14.5, 2.725, 0.31, 0.69) are in calcs/values.yaml (content:check passes).
- Choice questions: every marked answer right, every other choice wrong (10(f) "too hot for any nucleus" is wrong for the minutes in question; 13(b) "vacuum energy always drives acceleration" wrong while ρ_m > 2ρ_vac).
- Hints: none gives the result away. 13(f)'s hint states the 1/a² law, which is most of a 2-point part (info only); 13(c)'s hint names the condition ρ_m = 2ρ_vac, which the lesson teaches.

## Only earlier terms
- Every problem uses only Block 8 lessons and earlier blocks: Wien's law (7.2, 8.15), half-life (7.9), grating (5.11, checked: content/year-0/hs-5/interference-and-diffraction-of-light.mdx), logarithms (0.9), centripetal force (Block 2). The positive pion and "antiquark has the opposite charge" are defined in the statement; Higgs and W rest energies are in lesson 8.7. Nothing used before it is introduced.

## Coverage
- All 19 lessons are practised: 8.1 (1a), 8.2 (1b–e), 8.3 (2, 4c, 6b), 8.4 (3), 8.5 (4), 8.6 (5), 8.7 (6), 8.8 (7a–b), 8.9 (7c–e), 8.10 (8), 8.11 (9a–c), 8.12 (9d–e), 8.13 (10a–c), 8.14 (10d–f), 8.15 (11), 8.16 (12), 8.17 (13a–c), 8.18 (13d–f), 8.19 (9f). Level is VWO-appropriate; the formula parts are one-line rearrangements.

## Where this leads
- Practice set: no `leadsTo` and not `towards`; nothing to check.

## Licensing and AI terms
- No figures. No copied sentences found. No forbidden source (no OpenStax, LibreTexts, Khan, CK-12, IOPSpark); no Siyavula branding; NASA cited by page title, no "according to NASA", no insignia. No ESO text used.
- Originality: no problem copies an MIT or NASA example. Several follow a lesson's worked example closely with new numbers (our own material, so allowed, noted for variety): 8(d) vs 8.10 "Two Cepheids" (2000 pc, 10⁶ fainter → 250 pc, 10⁸ fainter); 10(d) vs 8.14 "Three minutes of decay" (1:6, 609 s, 180 s → 156 s, same counting); 12(a–e) vs 8.16's flat-rotation-curve example (same three questions, new numbers); 13(d–f) vs 8.18's two examples (10²² → 10³⁰, |Ω − 1| 0.1 → 0.5); 9(a) uses the same Hα line as 8.11's example but runs the other way (distance known, H₀ found). Acceptable; if the writer wants more variety, 10(d) and 12 are the closest.

## Notes
- Problem 4 title "A bright blue-white star": a 2 M☉ main-sequence star is an A star, white rather than blue-white (info).
- Intro: "of the kinds found … in the exercises of Siyavula's chapters": Siyavula Gr 10–12 has no relativity or cosmology chapters; only the eV and photon material comes from it. Consider "MIT's … courses and, for photons and electronvolts, Siyavula's chapters" (info).
- 9(f) "the source of the oldest light we can see is now at 3ct₀": that is the horizon distance; lesson 8.19 adds that the CMB source is a little closer. The statement leans on lesson 8.19, so it is fine; a "(the horizon distance)" would be more exact (info).
- 9(e) solution "comes out close to 1/H₀": 13.8 vs 14.5 billion years, fair.
- 10(c) uses 8.0 × 10⁸ K from the 8.902 notes while lessons 8.13/8.14 say "about 10⁹ K, about three minutes". Not a contradiction (8.14 quotes the notes' 8 × 10⁸ K at 200 s), but see finding 1 for the time.
- calcs: constants from Siyavula (e, h) carry `origin: mit`, as in calcs/hs-7; the vocabulary has no other value for an open source (info).

## Resolution (2026-11-20, by the page author)

1. (error) Problem 10 statement reworded: "Use the rounded rule of lesson 8.13, T = 1.0 × 10¹⁰ K/√t, with t in seconds. The rule is only for the era around one second; later it is a rough guide, not an exact clock (lesson 8.13 explains why)." This follows lesson 8.13's own wording. The 10(c) check now adds that after the first second the rule runs early: the real universe reached about 10⁹ K only about three minutes after the start (lessons 8.13 and 8.14), where the rule says 100 s; the 8.902 notes' 200 s (eq. (490)) stays. The suggested clause that the number in front grows was not used, since lesson 8.13 says only that the number no longer holds. Answers unchanged; new calcs entry hs8p-p10-c-rule100.
2. (warning) 11(d): label is now "Answer:", every choice starts with "No:" or "Yes", and a "Yes, with a large enough telescope: the light from that time is only very faint and very redshifted" choice was added (fourth place). The right answer stays choice 1.
3. (warning) 11(a) check softened: "radiation alone could not cool a gas cloud in that galaxy much below about 19 K, because the background kept warming it".
4. (info) Reading 21's location now ends "p. 8: about 10⁻³⁵ s in all" (checked in the transcript PDF, p. 8).
5. (originality note) 10(d) now asks for the neutrons' share of all nucleons (1/7 × 0.837 = 0.120), using that decay keeps the total number of nucleons, instead of lesson 8.14's counting of neutrons and protons; the check converts it to n/p = 0.136. 10(e) then uses Y = 2(n/p)/(1 + n/p) rewritten as twice the neutron share: Y = 2 × 0.1196 = 0.239 (answer unchanged). Problem 12: (d) now asks for the dark mass in solar masses (1.45 × 10¹¹) instead of lesson 8.16's speed without dark matter, and (e) asks how far out the flat curve must reach for 5.4 times as much dark as visible mass, the ratio of lesson 8.16 (1.11 × 10⁵ light-years) instead of the dark fraction (now in the check: 0.78 inside 80 000 light-years, 0.84 out there). Points unchanged (3 and 2). Calcs: p12-vis and the 83.8 / 168 km/s entries removed; p12-d, p12-d-inner, p12-e-total, p12-e, p12-e-share, p12-e-share-now, p10-d, p10-d-ratio, p10-e rewritten or added.
6. (info) Problem 4 title and the summary say "a bright white star". Intro: Siyavula is now named only "for photons and electronvolts". 13(f) hint now points to lesson 8.18 instead of stating the 1/a² law.
Not changed: the 9(f) "(the horizon distance)" note and the calcs origin note (info, optional).

Symbols: M_vis is no longer used on this page; pc2-handover/work/sym-hs-8-practice-fix.json asks to remove hs-8-practice from the M-vis meaning (the only content:check error until applied).

Checks: npm run calc:test -- -k hs-8-practice: 143 passed. npm run test:answers: 65 passed. npm run content:check: 1 error, the M-vis symbol scope above (cleared by the fix file); no other error or warning for this page. No em dashes.
