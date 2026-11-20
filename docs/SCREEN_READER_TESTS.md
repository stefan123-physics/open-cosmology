# Screen reader tests

A short checklist for testing Open Cosmology with real screen readers. Automated checks cannot do this: run it by hand
after changes to formulas, graphs, popups, flashcards or focus mode, and record the results in the table at the end.

## Set-up

- **NVDA (Windows)**: install from nvaccess.org; use Firefox or Chrome. For maths, NVDA reads MathML directly in recent
  versions; older versions need the free MathCAT add-on (NVDA menu → Tools → Add-on store).
- **Orca (Linux)**: built into GNOME; start with Super + Alt + S. Use Firefox.
- Test on the production build (`npm run build`, then the `prod` launch configuration) or on the live site.
- Pages to use: one maths page (`/courses/18-01/limits-and-continuity`), one physics page with graphs
  (`/courses/8-01/contact-forces`) and one cosmology page (`/courses/8-286/age-of-the-universe`).

## What to check

| # | Check | Expected |
|---|---|---|
| 1 | Move through a lesson by heading (NVDA: H; Orca: H) | Every section is a heading, numbered, in order; "On this page" is a navigation landmark |
| 2 | Read a display formula | It is read as maths (NVDA/MathCAT: "the limit as x approaches …"), not as a list of letters; Down Arrow / interaction mode lets you step through it |
| 3 | Read an inline formula in a sentence | Read as maths within the sentence |
| 4 | Open "In words" under a formula | The words version is read, e.g. "the absolute value of x" |
| 5 | Press the read-aloud button (site's own voice) | Formulas are spoken in words, not as symbols or TeX |
| 6 | Reach a graph | Announced as an image with a label naming its axes and curves, followed by its caption as the description |
| 7 | Press "Show values as a table" | A data table with column headers; table navigation (Ctrl+Alt+arrows) works |
| 8 | Press "Listen to this graph" | The status "Playing … for 3 seconds …" is announced, then "Finished."; the button reads "Stop" while playing |
| 9 | Move a graph slider | Its label and value are announced |
| 10 | Activate a symbol in a formula | A dialog opens with the symbol's name and meaning; Escape closes it and focus returns to the symbol |
| 11 | Answer a quiz question | Choices are a group of radio buttons; the result is announced |
| 12 | Use the flashcards | The card face and the rating buttons are announced; the next card is announced after rating |
| 13 | Focus mode (when built) | Turning it on announces the section shown; Next / Previous move focus to the new section's heading |
| 14 | Single-key shortcuts | With the reading option "Single-key shortcuts" off, typing letters does nothing on the page |

## Results

| Date | Screen reader and version | Browser | Checks passed | Problems found |
|---|---|---|---|---|
| | | | | |
