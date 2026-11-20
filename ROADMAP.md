# Roadmap: from a good start to a complete programme (four undergraduate years and a graduate year)

What a full university programme needs, what the site has now, and the plan for each gap. For all plans and decisions in one place, including offline use and the fact-checking script, see [docs/PLAN.md](docs/PLAN.md).
Last updated 2026-11-17.

| Part of a degree | Status | Plan |
|---|---|---|
| Lectures (the explanations) | 414 lessons written, about 450 needed | §1 Volume |
| Exercises: weekly problem sets with solutions | Only worked examples and short quizzes | §2 Exercises |
| Exams | None | §3 Exams |
| Laboratory work | Interactive graphs and a few PhET simulations | §4 Labs |

---

## 1. Volume — about 400 pages

**Now (2026-11-18):** 414 lessons, all reviewed, and 1 problem set (the pilot, a draft). Complete: 8.01, 18.03, 8.044, 8.05, 8.06, 8.286 and 8.902; most other courses lack only their exam-review and exam lectures; 8.962 is not started (per-course counts in [docs/PLAN.md](docs/PLAN.md) §1). The course files list 464 lectures and textbook sections, so with some lectures needing two pages the programme comes to about **450 pages**.

**Plan:**
- Keep the work order in `AGENTS.md`: finish 8.286 (Lectures 13–23, then 1–2), dark matter and structure formation (8.902 and the other sources listed there), then year by year with the maths alongside: 8.01 + 18.01 → 8.02 + 18.02 → 8.03 + 18.03 → 8.033 → 18.06 → 8.04 → 8.044 → 8.05 → 8.06 → 8.962.
- Before starting a course, fill its complete MIT lecture list in `_course.json`.
- Every page goes through the same source → write → independent review → fix process; the review is what keeps quality at university level as volume grows.
- Rough pace: a lecture takes one to two hours of work including review, so the programme is several hundred hours of writing. Working in batches of 2–6 lectures (as so far) is the right size.

## 2. Exercises — problem sets with full solutions

A university course is mostly learned by *doing problems*. MIT OpenCourseWare publishes the weekly problem sets for most of these courses, often with solutions (for example 8.01SC "Problem Set 1…", and 8.286's problem sets and quizzes).

**Plan:**
1. **A new page type, `kind: problems`**, one page per MIT problem set, placed after the lectures it belongs to (frontmatter `kind`, `lecture`, `source` pointing at the problem-set PDF).
2. **Each problem** is rewritten like the lessons: the physics situation in our own words, with **our own numbers** where the original numbers aren't essential, a **hint** (hidden), and a **full solution** using the existing step-by-step `<WorkedExample>`.
3. **Self-checking answers:** a new `<Answer>` component where the student types a number (or picks an option) and the site checks it, with a tolerance and units (e.g. `<Answer value={9.69} tolerance="2%" unit="Gyr" />`). Wrong answers get a nudge toward the hint, not the solution.
4. **Progress:** problem scores feed into the existing study-progress system; a course shows "lessons studied" and "problem sets done".
5. **Licensing:** check every MIT problem set and solution file for "All rights reserved" or third-party material before use (the same rule as for slides); cite the problem set on every problem.
6. **Review:** the checking agent also verifies each solution numerically.

## 3. Exams — practice exams with self-grading

MIT publishes past exams (often with solutions) for many of these courses.

**Plan:**
- **`kind: exam`** pages: a practice exam per MIT midterm/final, rewritten like problem sets.
- **Exam mode:** an optional timer with the original time limit, solutions hidden until "Finish", then **automatic marking** of the `<Answer>` questions and worked solutions for the rest, with a score kept in study progress.
- **Course "completion":** a course counts as completed when its lessons are studied and its final practice exam is passed — the closest a free site can come to a course grade. (No certificates or accreditation: this is self-study.)

## 4. Labs — what a website can and cannot replace

**What can't be replaced:** handling real equipment, building and debugging an apparatus, and doing that safely under supervision. A website cannot teach those hands-on skills, and the site should say so honestly.

**What *can* be done — the parts of a lab that are about thinking:** planning a measurement, collecting data, estimating uncertainties, fitting a model, and judging whether the result agrees with theory. Four kinds of lab pages cover these:

### 4a. Virtual labs (simulated experiments)
Interactive experiments built from the physics, **with realistic measurement noise**, so the student has to take repeated readings and work out an uncertainty rather than read off a perfect answer. Examples: a pendulum to measure *g*; projectiles with air drag; a mass on a spring (resonance, 8.03); an RC circuit (8.02); a double slit (8.03/8.04); the hydrogen spectrum (8.04); blackbody radiation (8.044). These would use the existing graph engine, and PhET simulations where PhET has a good one (CC BY-NC 4.0, credited).

### 4b. Real-data labs (the experiments that cannot be done at home)
Cosmology's "lab" is the sky. Students analyse **real, public datasets** the way researchers did:
- Hubble's 1929 galaxy distances and velocities → measure *H*₀ (and see why it was 7 times too big);
- Type Ia supernova distances → find the accelerating expansion (the 1998 discovery, 8.286 Lecture 20);
- the cosmic microwave background spectrum (COBE/FIRAS) → fit a blackbody and measure its temperature, 2.725 K;
- galaxy redshift surveys → see large-scale structure (the dark matter / structure formation pages).
Each dataset's licence and citation must be checked before use (most NASA and survey data are public; follow each project's citation rules).

### 4c. Home experiments with a smartphone
A phone is a small physics lab: accelerometer, gyroscope, magnetometer, microphone, light and pressure sensors. With a free data-logging app such as **phyphox** (RWTH Aachen University; linked, not embedded), students can do real measurements at home: free fall and *g*, a pendulum, spring oscillations, the Doppler effect with sound, magnetic fields of a wire or coil, the speed of sound. Each page gives the procedure, safety notes, what to measure, and how to analyse it.

### 4d. A data-analysis tool on the site
A small, accessible tool where students **paste or upload their measurements** (CSV), plot them with error bars, fit a straight line or a chosen formula, and get the result with its uncertainty — used by all the lab types above, and runnable entirely in the browser (no data leaves the device).

### 4e. Supporting lessons
A short "Measurement and uncertainty" unit (error bars, propagation of uncertainty, least-squares fitting, writing a lab report), based on MIT material where available, placed in Year I so every later lab can use it.

**Order of work for labs:** first the data-analysis tool (4d) and the uncertainty unit (4e), because everything else builds on them; then real-data labs for cosmology (4b), since cosmology is the destination; then virtual and phone labs course by course, alongside the lessons.

---

## Summary of new building blocks

| Building block | Used for |
|---|---|
| Page `kind`: `lesson` (default), `problems`, `exam`, `lab` | navigation, progress, styling |
| `<Answer>` self-checking answer | problem sets, exams, labs |
| Exam mode (timer, marking) | exams |
| Noisy virtual experiments | virtual labs |
| Data-analysis tool (CSV, plot, fit, uncertainty) | all labs |
| Dataset pages with licence and citation | real-data labs |
| Problem/exam/lab progress | study progress and course completion |
