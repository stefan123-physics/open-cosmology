---
page: content/year-1/8.01/8-01-problem-set-7.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset7/ (read: pdftotext of the PDF, plus its embedded images listed and the Problem 1 image viewed)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter13/ (read: PDF, printed footers checked)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (read: PDF, printed footer checked)
verdict: pass-with-notes
---

# Review: Problem Set 7: work, friction and kinetic energy

## Blind solve

### My answers (written before opening the full page)
- p1a: W_f = -mu m g cos(theta) l = -0.2*4*9.8*cos30*3 = -20.37 J
- p1b: W_g = m g l sin(theta) = 58.80 J
- p1c: K = 58.80 - 20.37 = 38.43 J
- p1d: W = -mu_k m g d
- p1e: d = K/(0.3 m g) = 3.268 m
- p2: x = sqrt( [ m_A^2 v_A^2/(m_A+m_B) - (m_A+m_B) b g d^2 ] / k )
- p3a: W_f = -pi mu m g R cos(phi)
- p3b: T_B = m v0^2/R - 5 m g sin(phi) - 2 pi mu m g cos(phi)

### Comparison (after opening the page and calcs)
- p1-a: page -20.4 J; mine -20.37 J. Agree.
- p1-b: page 58.8 J; mine 58.80 J. Agree.
- p1-c: page 38.4 J; mine 38.43 J. Agree.
- p1-d: page -mu*m*g*d; mine -mu_k m g d. Identical.
- p1-e: page 3.27 m; mine 3.268 m. Agree.
- p2-s: page sqrt((mA^2 vA^2/(mA+mB) - (mA+mB) g b d^2)/k); mine identical term by term.
- p3-a: page -pi mu m g R cos(phi); mine identical.
- p3-b: page m v0^2/R - 5 m g sin(phi) - 2 pi mu m g cos(phi); mine identical.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro paragraph | MIT's PDF has a drawing on p. 1 for Problem 1 (incline with theta = 30 deg, mu_k = 0.2 on the plane, mu_k = 0.3 on the rough floor), as well as drawings for Problems 2 and 3 (pdfimages: images on pages 1, 2 and 3) | "MIT's set comes with drawings for Problems 2 and 3." | Write "MIT's set comes with a drawing for each problem." |
| 2 | info | Problem 1 statement | MIT's drawing shows a sharp corner at the foot of the incline and says nothing about it | States the smooth-join assumption and marks it as ours | None; correctly flagged. |
| 3 | info | Problem 3 statement | Geometry given by MIT's figure | Puts it in words ("Seen from the side, A and B lie on the slope a distance 2R apart"); this helps with the height gain but does not give the result away | None. |
| 4 | info | Problem 1(a) | Notes' Example 13.10 (p. 13-26) prints the friction-work substitution with "(3.0 m)" twice (a typo) but the result -20.4 J | Page gives the correct substitution, -6.79 x 3.0 = -20.4 J | None; the notes' slip is not repeated. |

## Arithmetic and answer checks
- Problem 1: N = 33.95 N, f_k = 6.79 N, W_f = -20.37 J, level-floor check 23.52 J, W_g = 58.8 J, drop 1.5 m, weight 39.2 N, K = 38.43 J, a = 3.20 m/s^2, v^2 = 19.2, v = 4.38 m/s, frictionless 5.42 m/s, floor friction 11.76 N, d = 3.268 m, direct formula 3.268 m, total work 58.8 - 20.4 - 38.4 = 0. All recomputed (Python), all correct.
- Problem 2 example: V = 4.0 m/s, K0 = 24 J, block A alone 36 J (12 J lost), friction work -0.5 x 3.0 x 9.8 x 0.20 x 2.25 = -6.615 J (shown -6.6), 17.385 J (shown 17.4), s = sqrt(2 x 17.385/300) = 0.340 m, mu at x = d is 0.30. Correct.
- Problem 3 example: 9.0 J, gravity -3.92 J, friction -1.067 J, 4.013 J left, v_B = 4.006 m/s, 2K/R = 10.03 N, weight 2.45 N, string 7.58 N; formula 22.5 - 12.25 - 2.667 = 7.58 N. Correct.
- Limits in the checks: p2 b = 0 gives 1/2 k s^2 = K0; p3b phi = 90 deg gives m v0^2/R - 5mg (6mg less than m v0^2/R + mg at the bottom); phi = 0 gives m v0^2/R - 2 pi mu m g. All correct. The claim that T is lowest at B (so T_B > 0 is the taut condition) holds: T(alpha) = m v^2/R + m g sin(phi) cos(alpha), both terms fall from A to B.
- Answer boxes: number values match the solutions and the calcs ids; 1% tolerance accepts 3 s.f. (e.g. -20.37 vs -20.4) and rejects the sign error and the sin/cos swap (-11.76 J). Formula vars ranges keep every answer and every listed mistake finite and real (p2 radicand at its smallest: 64 - 27 > 0; p3b ranges keep T well defined). Each mistake differs from the answer.
- Mistake hints checked one by one against their formulas: p1-d (4), p2-s (6: KE of A before collision, max friction over whole strip = factor 2, only m_B, only m_A, missing root, no strip), p3-a (5: sign, straight 2R, whole weight, sin for cos, full turn), p3-b (6: -4 = whole centripetal force, -3 = weight sign at B, no friction, missing factor 2, v0 at B, whole weight). All are true of the formula they belong to.
- No hint gives a result away; each solution ends with a check (units, limits, numbers).
- calcs/8.01/8-01-problem-set-7.yaml: every answer box (p1-a to p1-e, p2-s, p3-a, p3-b) has an `answer:` entry; the formula answers are checked by numerical integrals or a numerical solve, and every example number on the page has its own entry.

## Coverage and order
- Problems 1 to 3 and parts 1(a)-(e), 3(a)-(b) in MIT's order with the same physics. MIT's sign questions ("Is it positive or negative?") are covered by asking for the signed work.
- Points (16 + 12 + 14 = 42, parts of p1 add to 16, p3 to 14) are ours; MIT gives none, and the page says so.

## Licensing
- No "rights reserved" or "Courtesy of" notice in the problem-set PDF or in Chapters 9 and 13.
- No MIT figure redrawn; situations described in words. Wording is the page's own; no sentences copied from MIT.
- No OpenStax or LibreTexts material.

## Citations
- Eq. (13.5.5) on p. 13-15, Eq. (13.6.1) on p. 13-16, Example 13.10 on pp. 13-25 to 13-27 (normal force p. 13-26, friction and gravity work p. 13-26, total p. 13-27), Eq. (13.11.8) on p. 13-35, Eq. (9.1.2) on p. 9-2: all match the printed footers. Example 13.10 is in Section 13.8, as the readings' location says.
- "Problem 2, p. 2" for mu_k(x) = b x: correct printed page.

## Notes
- Links to work-and-kinetic-energy (L20), work-in-two-and-three-dimensions (L21), conservative-forces (L22) and conservation-of-momentum (L16) resolve to existing pages; covers [20, 21, 22] matches the 8.01 syllabus (Week 7).
- No em dashes; no Summary section giving answers.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-21, by the page author)

1. Warning fixed: the intro now says "MIT's set comes with a drawing for each problem."
Info items need no change. Status set to reviewed.
