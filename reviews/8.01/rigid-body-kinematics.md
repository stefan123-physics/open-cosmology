---
page: content/year-1/8.01/rigid-body-kinematics.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-10-rotational-motion/28-1-rigid-bodies/ (read; video page with Creative Commons licence, no transcript link, so the video's content could not be checked)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter16/ (read; Chapter 16 PDF extracted with pdftotext -layout; Sections 16.1–16.2 and Example 16.1 compared in full; page numbers checked per PDF page against the printed footers "16-k")
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/91ed3ab09af8e60ea363d4dacf87be16_ZApVXJZF7pE.pdf (read; segment 28.2 transcript, 2 pages; URL confirmed as the transcript link on the 28.2 segment page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/6af7e8b926cf0a4a9dd57cf810dd9c1b_2oK7Eb0YZ9U.pdf (read; segment 28.3 transcript, 2 pages; URL confirmed as the transcript link on the 28.3 segment page)
  - content/year-1/8.01/_course.json and content/year-5/Ferreras/rotation-curves.mdx (read; leadsTo targets)
  - calcs/8.01/rigid-body-kinematics.yaml (read; `npm run calc:test` passed, 1623 tests, and the pytest cache lists this file's ids)
verdict: pass-with-notes
---

# Review: Rigid bodies and rotational kinematics

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout, "Rubin and her colleagues found instead that the orbital speeds stay roughly constant far out, so the angular velocity falls off as 1/r" | The very quotation the callout refers to (notes p. 16-1, Rubin, Ford and Thonnard 1980) says most galaxies show rotation speeds still **rising** at the largest measured radius and only the very largest have flat curves; the mass grows "at least as fast as R". | Flat curves, ω ∝ 1/r | Make the claim match the quotation it cites: "stay roughly constant, or even keep rising, far out, so the angular velocity falls off no faster than 1/r and the enclosed mass keeps growing at least in proportion to r". The dark-matter conclusion is unchanged. |
| 2 | info | Opening, "Segment 28.1 is a short video without a transcript; the notes cover the same ground" | 28.1 page has only the video (no transcript link). | Asserts the notes cover the video's content | That cannot be verified from text sources. Say "the page relies on the notes (Section 16.1, p. 16-1) for it" instead. |
| 3 | info | "measure the angle θ in the plane of rotation, and use a right-handed coordinate system so that k̂ points along the axis (28.3 transcript, p. 1)" | 28.3 p. 1 has the point, the angle θ, r̂, θ̂ and k̂ out of the figure by the right-hand rule; the z-axis as rotation axis and "right-handed coordinate system for an angle θ in the plane of rotation" are notes p. 16-3. | Cites the transcript only | Add "notes, p. 16-3". |
| 4 | info | "Unlike a point mass, a rigid body can have forces applied at different points of it, and where a force acts will matter (p. 16-1)" | p. 16-1 says only that forces can be applied at different points. | Adds "where a force acts will matter" | Correct physics (torque, Lesson 30), but it is the page's own remark; drop the citation from that clause or say "as later lessons show". |
| 5 | info | "in fluids and gases the particles move freely relative to each other" | Notes: particles "very loosely bound", distances between them vary. | "move freely" | Fine for gases, an overstatement for liquids; "are loosely bound and their distances change" is closer. |
| 6 | info | Formula "Angle from angular velocity", `at="p. 2"` | 28.3: θ(t) − θ₀ = ∫ω_z dt′ starts at the foot of p. 1; the form with θ₀ added is on p. 2. | p. 2 | Optionally "pp. 1–2". |
| 7 | info | Constant-α formulas in prose (ω_z = ω_z,0 + α_z t, θ = θ₀ + ω_z,0 t + ½α_z t²) | Not in 28.2–28.3 or notes 16.1–16.2. | Stated as following from the integrals | Correct, and correctly presented as a consequence rather than cited. calcs has no identity check for them; optionally add one (integrate ω_z,0 + α_z s from 0 to t). |

## Arithmetic and answer checks
- Citations: Section 16.1 and 16.2.1 (CD, rigid-body definition) on p. 16-1 ✓; bicycle, handlebars, top, gyroscope, Earth's axis, "fixed axis rotation, with or without translation" and the start of 16.2.2 (elements Δmᵢ, radius rᵢ) on p. 16-2 ✓; Eqs. (16.1.1)–(16.1.2) and the "catch up to or pass" argument on p. 16-3 ✓; Section 16.2.3 and Eq. (16.1.3) on p. 16-4 ✓; Eqs. (16.1.4)–(16.1.5) on p. 16-5 ✓ (checked PDF page by page: PDF p. 5 ends with (16.1.3) and footer 16-4, PDF p. 6 opens with (16.1.4)). The notes number these (16.1.x) although they sit in Section 16.2; the page uses the notes' own numbers ✓.
- Formula contents: ω⃗ = (dθ/dt)k̂ = ω_z k̂ and α⃗ = (d²θ/dt²)k̂ = α_z k̂ match (16.1.1)–(16.1.2) ✓; v_θ,i = rᵢω_z, a_θ,i = rᵢα_z, a_r,i = −v²_θ,i/rᵢ = −rᵢω_z² match (16.1.3)–(16.1.5) ✓. Integral formulas match 28.3 pp. 1–2 (board work; transcript citation is right) ✓.
- 28.2 citations: bicycle wheel, v_cm, ω⃗ by the right-hand rule, CM frame with only rotation, external force accelerating the CM, torque producing angular acceleration and rotational energy: all p. 1, closing sentence p. 2 ✓.
- Sign convention paragraph matches p. 16-4, including "independent of the choice of positive direction" ✓.
- Worked example (a): ω_z = ½ × 1.5 × 16 = 12 rad/s ✓; θ = 1.5 × 64/6 = 16 rad ✓, 16/2π = 2.55 turns ("about 2.5") ✓; rim speed 0.25 × 12 = 3.0 m/s ✓; α_z(4 s) = 6.0 rad/s², a_θ = 1.5 m/s² ✓; a_r = −0.25 × 144 = −36 m/s² ✓, 36/9.8 = 3.7 g ("nearly four times g") ✓.
- Worked example (b): 45 × 2π/60 = 4.712 rad/s ✓; α_z = −0.942 rad/s² ✓; angle ½ × 4.712 × 5.0 = 11.78 rad ✓; 11.78/2π = 1.875 turns ("1.9") ✓.
- Plot: curves 0.75t² and 0.25t³ are bt²/2 and bt³/6 with b = 1.5 ✓; at t = 4: 12 and 16, inside range [0, 17] ✓; caption correct ✓.
- Quiz 1: angular velocity, index 1 ✓; explanation right (both a_r and a_θ grow with r) ✓. Quiz 2: opposite signs, slowing down, index 1 ✓. Quiz 3: 2.0 m/s and 20 m/s², index 0 ✓. Quiz 4: ½ × 3.0 × 4.0 = 6.0 rad, index 1 ✓.
- Flashcards: all four correct and consistent with (16.1.1)–(16.1.5) and p. 16-4.
- calcs/8.01/rigid-body-kinematics.yaml: every entry agrees with my recomputation (record-turns 1.875 vs 1.9 within its 2% tolerance; drum-g 3.67 vs 3.7) ✓. Sources in the file are reasonable (`record-omega` cites Eq. (16.1.1), which defines ω but not the rpm conversion; harmless).

## Coverage and order
- Order follows MIT: rigid bodies (28.1 / notes 16.1, 16.2.1) → translation and rotation (28.2 / p. 16-2) → angular velocity, acceleration, signs and tangential/radial components (notes 16.2.2–16.2.4) → integrating α (28.3). 28.3 is a "review" segment; placing the notes' 16.2.2–16.2.4 before it is a sensible merge.
- Nothing from 28.2 or 28.3 is missing. From notes 16.1–16.2, left out: the CD's motor/resistive-force description (p. 16-1), the remark that the CD of Figure 16.1 has ω⃗ pointing down (p. 16-4), and Example 16.1 (as intended). None is essential.
- Added by the page: constant-α formulas, the plot, the worked example and the cosmology callout.

## Licensing
- Segment pages carry the Creative Commons licence (CC BY-NC-SA 4.0); the page uses the same ✓.
- No "All rights reserved" or "Courtesy of" notice in the transcripts, the chapter text or the segment pages (grep found none). No figure is reused.
- The Vera Rubin quotation that opens Chapter 16 is referred to, not reproduced ✓ (only the paraphrase in the callout; no wording copied).
- No copied paragraphs; short standard phrases only ("fixed-axis rotation", "catch up with or pass", which is a short paraphrase of the notes' "catch up to or pass").
- Worked example (a) (drum with α = bt) is original. Example (b) (record at 45 rpm stopping uniformly in 5.0 s) is the same kind of situation as notes Example 16.1 (turntable at 33 rpm stopping in 8.0 s), with its own numbers and an added part (turns made). Acceptable as rewritten, but it is close in setup; if the author wants clear distance, use another object (e.g. a fan or grinding wheel).
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout physics otherwise right: rigid disc v = rω ✓; mass concentrated in the centre gives Keplerian fall-off as for the outer planets ✓; enclosed mass growing beyond the visible galaxy is evidence for dark matter ✓. See row 1 for flat vs rising. "Rubin and her colleagues" is a fair attribution of the cited 1980 paper; radio (21 cm) observations of flat curves by others are not mentioned, which is acceptable for a callout. Optionally add the Rubin, Ford and Thonnard (1980) reference to `references`.
- leadsTo 8.01 Lecture 29 exists in _course.json ("Moment of Inertia", segment 29.1 "Kinetic Energy of Rotation"); the "why" fits ✓. leadsTo Ferreras 2.2 resolves to rotation-curves.mdx (lecture 2.2) ✓; its "why" agrees with that page. That page notes that disc galaxies rise linearly near the centre, like a rigid body, before flattening; the callout could mention this ("only the inner parts turn like a rigid disc"), which would make the link sharper. Optional.
- Prerequisites circular-motion-acceleration and centre-of-mass exist ✓. No em dashes on the page ✓.
- 28.3 transcript has captioning garbles ("alpha z was the omega z dt", "theta t0 is the integral"); the page correctly reads them as α_z = dω_z/dt and θ(t) − θ₀.
- Symbols were not part of this review.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the callout now says the orbital speeds stay roughly constant or keep rising far out, so the angular velocity falls no faster than 1/r and the enclosed mass grows at least in proportion to r; it adds that only the inner parts of a galaxy turn roughly like a rigid disc.
- Info: the 28.1 sentence no longer claims the notes cover the same ground as the video; the coordinate set-up also cites notes p. 16-3; "where a force acts will matter" is no longer attributed to the notes; fluids and gases are "only loosely bound"; the angle formula cites pp. 1–2. The constant-α formulas and worked example (b) are left as they are.
