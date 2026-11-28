# Answer boxes: preview, read-aloud and acceptance (fix plan, 2026-11-28)

Owner's feedback on https://opencosmology.eu/courses/fundamentals-of-dark-matter/ferreras-problem-set-5 (2026-11-28), to be fixed **after the current 18.06 work, from about 12:00**. The owner asked to treat it as a problem that may occur in many places and in other forms, not as one page's bug.

## 1. What the reader saw

1. **"You typed" preview:** typing `2*pi*(G*M*a)^(1/2)/c^2` in 7.3(B) shows a red `\cdota₀` instead of "· a₀"; typing `…*v^2*M/(m+M)^2` in 6.4(B) shows `\cdotm_N`. The answer itself is accepted; only the display is wrong.
2. **"In words":** wrong at the same places ("G times M sub 0 … c squared": the a and the "over" before the denominator are lost); Ω_m,0 is read "capital omega m," without the 0.
3. **6.3(D):** 1.04 is rejected, although the solution itself says it is the answer with the factor ½ for identical particles.
4. **7.2(B):** typing 5.54e-11 in a box "in units of 10⁻¹¹" is rejected with no explanation.
5. **Tolerance:** 1.65 rejected against 1.71 (3.5%) while 27 is accepted for 26.9: is the policy deliberate?
6. **7.3(C):** the book's 0.3″ is probably the Newtonian deflection without general relativity's factor 2; the solution could say so (content).

## 2. Causes (found 2026-11-28)

- **(1) and (2) are one bug, in shared code.** `lib/answers.ts` `parseFormula(...).tex(names)` (lines ~168–175) asks mathjs for TeX and replaces each symbol by its `names` entry through a `handler`. mathjs writes the operator `\cdot` and then the handler's string with **no separator**, so `\cdot` + `a_0` becomes `\cdota_0`, an unknown command that KaTeX shows in red. The read-aloud text (`texToSpeech` in `components/exercise/Answer.tsx`, preview effect) is made from the same broken TeX, so it loses letters and words after it. **Every** formula box whose `names` maps a letter that can follow `*` is affected: `names` is used on 177 problem-set pages, about 1,480 times. Other operators that end in a letter (`\times`, `\frac`'s arguments, function names like `\sin`) may break the same way and must be checked too.
- **"Ω_m,0" read without the 0:** `lib/speech.ts` probably reads a subscript with a comma (`_{m,0}`) only up to the comma. The same rule is used by read-aloud on every lesson, so lessons may say it wrong as well.
- **(3) and (4)** are design gaps: a number box has one `value` and one `tolerance` (`checkNumber` in `lib/answers.ts`), so it can neither accept a second correct reading nor recognise "right number, wrong power of ten".
- **(5)** is policy: tolerances are set per box by the writer (the 2% habit, the default of half the last printed digit), with no written rule for when to use what.

## 3. Plan

### Step 1. Fix the preview TeX at the source (code, small)
- In `tex(names)`, return each replacement wrapped in braces, `{a_0}`, so no operator can run into it; also make the handler cover `ConstantNode`/`FunctionNode` names that `names` might map.
- After `toTex`, run the result through KaTeX with `throwOnError: true` in a test, and fail on any parse error.
- Look for the same pattern elsewhere: any code that joins TeX pieces from strings (`components/plot/*`, `lib/label-layout.ts` labels, `lib/glossary*`, `lib/speech.ts` `groupTex`), grep for string concatenation after `\\cdot`, `\\times`, `\\frac`, `\\sqrt`.

### Step 2. A site-wide test of every answer box (the real safeguard)
New script, run by `npm run test:answers` (and so by the commit hook):
- For **every** formula box on every page (read from the MDX like `content:check` does): build the preview for the correct `expr`, for every listed mistake, and for a few rewritten but equivalent forms (products reordered, `x^(1/2)` against `sqrt(x)`, `/` against `*(...)^-1`).
- Render each with KaTeX (`throwOnError: true`) and fail on an error, on a red `katex-error` span, or on a literal backslash command glued to a letter (`/\\[a-z]+[a-z]_/`).
- Run `texToSpeech` on each and fail on `speechGaps()` output, on a leftover backslash, or when a symbol of the formula (every `names` value) is missing from the spoken text.
- Report page, box id and the offending string, so a fix is quick.

### Step 3. Read-aloud of subscripts with commas (and similar)
- Fix `lib/speech.ts` so `_{m,0}` is read "sub m comma 0" (or as the symbol's `spoken` name where the registry has one), and run the existing read-aloud checks of `content:check` again on all 820 pages. Add a regression test (`Ω_{m,0}`, `x_{i,j}`, `T_{\mu\nu}`).
- Compare the spoken text for every `names` value with the symbol registry's `spoken` name (data/symbols.json), so the preview says a symbol the same way read-aloud says it on the page.

### Step 4. Number boxes: second readings and powers of ten (code plus content)
- Add `alsoAccept` to `<Answer>` number boxes: a list of `{ value, tolerance, note }` (and the same for formula boxes: `{ expr, note }`), checked after the main answer; a match counts as correct and shows its note ("Correct with the factor ½ for identical particles"). `content:check` and calcs check each `alsoAccept` value like the main one (a calcs entry per value).
- For a box with a unit like "in units of 10⁻¹¹": when the typed number is the right value times a power of ten, answer "Right number, but type only the factor in front of 10⁻¹¹" instead of "Not yet" (not counted as correct). Make it general: any typed value equal to the answer × 10^k for |k| ≥ 2 gets a "check the power of ten" message.
- Content: find every place where a solution names a second valid reading (search solutions for "with the factor", "other reading", "if instead", "alternative") and decide per box whether to add `alsoAccept`. Ferreras Set 5 6.3(D) first.

### Step 5. A written tolerance policy (decision, then a check)
- Write the rule in docs/CONTENT_GUIDE.md "Problem sets", for example: computed results 2% (1% when listed mistakes are within 3%); counts and integers exact; quantities read off a graph or rounded inputs 5%; logarithms an absolute width. Make it the owner's decision.
- Add a `content:check` warning for a number box with no `tolerance` (8.02 Set 1 showed the default can accept a wrong value), and list all boxes whose tolerance is far from the rule for review.

### Step 6. Content fixes on Ferreras Set 5
- 6.3(D): accept 1.04 (with ½) as well, via `alsoAccept`, note "with the factor ½ for identical particles".
- 7.2(B): label and statement say "type only the number in front of 10⁻¹¹ (for example 5.0, not 5.0e-11)".
- 7.3(C): the solution adds the likely origin of the book's 0.3″ (the Newtonian deflection, half the general-relativistic one) as our reading, checked with a calcs entry; also the note the reviewer suggested for the mond-tests lesson.

### Step 7. Verify on the live site
- After the fix is deployed, type the owner's two formulas on Ferreras Set 5 (and one formula on each of 10 other sets from different courses) and check the preview, "In words", and the new messages, in the browser.

## 4. Order and size
Step 1 and Step 2 first (one window: the test will show how many boxes are affected; fixing the code fixes them all at once). Then Step 3 and Step 6. Step 4 needs a small component change and per-box content decisions. Step 5 needs the owner's decision on the rule. Estimated: Steps 1–3 and 6 about half a 5-hour window on Account A; Step 4 about the same; Step 5 after the owner's decision.
