# Writing the High School on two PCs

The High School (113 lessons in nine blocks, `content/year-0/hs-0` … `hs-8`) is written on two PCs at the same time, each with its own Claude Code account (owner decision 2026-11-20). This file is the shared instruction for both. Read [AGENTS.md](../AGENTS.md) and [docs/HIGHSCHOOL-PLAN.md](HIGHSCHOOL-PLAN.md) too: they hold the writing rules, the lesson list (§4) and the sources (§2.0).

## The split

| | Blocks | Lessons | Branches |
|---|---|---|---|
| **PC 1** | 0 Maths toolkit, 1 Motion, 2 Forces and gravity, 3 Energy and momentum, 4 Matter and heat | 57 | `hs-block-0` … `hs-block-4` |
| **PC 2** | 5 Waves, sound and light, 6 Electricity and magnetism, 7 Atoms and radiation, 8 Modern physics, Big Bang, CMB, dark matter | 56 | `hs-block-5` … `hs-block-8` |

Each PC writes its blocks **in order** (PC 1: 0, 1, 2, 3, 4; PC 2: 5, 6, 7, 8), and each block ends with its practice set.

**Never touch the other PC's blocks.** That means its `content/year-0/hs-N/`, `calcs/hs-N/` and `reviews/hs-N/` folders. If something there needs changing, note it for the owner instead.

## Lessons the other PC has not written yet

Every lesson builds only on earlier lessons, listed in `prerequisites`. PC 2's lessons will often need PC 1's lessons, for example `acceleration` (1.4), before those exist. That is allowed:

- `prerequisites` may name **any earlier lesson in the lesson lists** (`content/year-0/hs-N/_course.json` → `syllabus[].slug`), written or not.
- A lesson that is planned but not written yet gives a **warning**, not an error: `prerequisite "acceleration" is planned but not written yet`. On the page, "You need this first" shows it as "coming, not written yet", linked to its place in the block's lesson list.
- A prerequisite that comes **later** in the High School is still an **error**.
- The slugs are fixed: always copy them from `_course.json`, never invent one. They are also listed in §4 of the plan.
- **What "only earlier terms" means across the split:** when PC 2 relies on an idea from a PC 1 lesson that is not written yet, it may use only what that lesson's title and its §4 row promise. If more is needed, explain it briefly in your own lesson. Do not wait for the other PC.

## Setup (once)

**Owner, on PC 1 (this PC):**
1. Create a new **private** repository on GitHub (or GitLab).
2. Connect `001Open-Cosmology-Final` to it and push `main` (Claude can do this when given the address).
3. Once it exists, tell Claude the repository name, so the "Report a mistake" link on every lesson can point to it. It still points to `raimonvibe/open-cosmology` (`app/courses/[course]/[slug]/page.tsx`).

**Owner, on PC 2:**
```powershell
git clone <repository address> 001Open-Cosmology-Final
```
```powershell
cd 001Open-Cosmology-Final; npm ci
```
```powershell
python -m venv .venv; .venv\Scripts\pip install -r requirements-dev.txt
```
`npm ci` also switches on the pre-commit check (content check and calculation tests). Then open the folder in Claude Code, signed in with PC 2's own account, and give it the prompt at the end of this file.

## Writing one block (both PCs)

1. **Start from the latest `main`:** `git checkout main`, `git pull`, then `git checkout -b hs-block-N`.
2. **For each lesson of the block, in order:**
   1. `npm run new:page -- hs-N <lesson number> "<title from the lesson list>"`. It takes the slug from the lesson list and sets `towards: true` on the block's last lesson.
   2. **Read the sources** for the lesson from docs/HIGHSCHOOL-PLAN.md §2.0:
      - Mostly Siyavula's online pages for Blocks 0–7, and NASA/ESO for Block 8.
      - Replace the placeholder `source` with the exact page (title and URL).
      - Add any other source to `source.readings` or `references`.
      - **Never** use OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark or Wikiwijs, nor the full text of a paper from ACS, Springer Nature, OUP, IOP/AAS or APS (AGENTS.md, Writing rules 10 and 11).
   3. **Write the lesson in your own words**, at VWO level, following AGENTS.md "Writing rules":
      - Every display formula is a `<Formula>` with `cite` and `at`. No em dashes. End with `## Summary`.
      - Worked examples and quiz questions are your own.
      - Use the PhET sim named for the lesson in §4 and §3.5 (`<PhET id="…" />`); all 46 sims are already in `public/phet/`.
      - `leadsTo` points to the university lectures in §4, written as `{ course: "8.01", lecture: <number>, why: "…" }`. §4 gives them as `8-01/<slug>`: look up that page's course id and lecture number in `content/`.
   4. **Add the calcs file** `calcs/hs-N/<slug>.yaml` for every number (docs/CALC_TESTS_PLAN.md), and a symbol meaning in `data/symbols.json` for every symbol the page uses (AGENTS.md "Symbols").
   5. `npm run content:check` and `npm run calc:test`. Fix every error. Warnings about planned prerequisites and unused PhET sims are expected.
   6. **Review:** run the `highschool-reviewer` agent (`.claude/agents/highschool-reviewer.md`) on the lesson. Fix its findings, add a `## Resolution (date, by the page author)` section to the review file, then set `status: reviewed`.
3. **Write the block's practice set** (`hs-N-practice`, AGENTS.md "Problem sets") and review it blind with the same agent.
4. **Finish the block:**
   - Run `npm run build`; it must show `0 error(s)`.
   - Commit on the block branch, push it (`git push -u origin hs-block-N`), and open a pull request into `main`.
   - Then pull `main` again and start the next block from it.

## Merging (the owner, or Claude on request)

- **Merge one block at a time** into `main`. After every merge, the **other** PC runs `git pull` on `main` and merges `main` into the branch it is working on before it continues.
- **The files both PCs change**, and how to resolve a conflict in each:
  - `data/symbols.json`: **keep both sides**. Add both meanings, or both pages to a meaning's `pages`. Never drop an entry.
  - `calcs/values.yaml`: keep both sides. If the same value appears twice, keep one and tell the owner.
  - `docs/HIGHSCHOOL-PLAN.md`, `AGENTS.md`: change these only when the owner asks, and on `main`, not on a block branch.
- **After a merge,** run `npm run build` on `main`. Planned-prerequisite warnings shrink as blocks arrive; at the end there should be none.
- Rules, sources and the lesson list change only on `main`, and both PCs pull before their next block. The two PCs must never disagree about a rule.

## Prompt for PC 2

Copy this into Claude Code on PC 2:

> Read AGENTS.md, docs/HIGHSCHOOL-PLAN.md (especially §2.0 sources, §3.5 PhET and §4 lesson list) and docs/TWO-PC-WORKFLOW.md. You are PC 2: write the High School Blocks 5, 6, 7 and 8, in that order, each on its own branch `hs-block-N` from the latest `main`, following "Writing one block" in docs/TWO-PC-WORKFLOW.md. Each block includes its lessons, calcs files, symbol meanings, PhET sims, a review of each lesson by the highschool-reviewer agent with the findings fixed, and the block's practice set. Never touch Blocks 0–4 (PC 1 writes those); name their lessons as prerequisites by the slugs in the lesson lists even if they are not written yet. Use only the sources in §2.0, never OpenStax or the other forbidden sources. Commit only when I ask, and run `npm run build` before every commit. Start with Block 5: show me your plan for lesson 5.1 first.

## Prompt for PC 1

> Read AGENTS.md, docs/HIGHSCHOOL-PLAN.md (especially §2.0 sources, §3.5 PhET and §4 lesson list) and docs/TWO-PC-WORKFLOW.md. You are PC 1: write the High School Blocks 0, 1, 2, 3 and 4, in that order, each on its own branch `hs-block-N` from the latest `main`, following "Writing one block" in docs/TWO-PC-WORKFLOW.md. Never touch Blocks 5–8 (PC 2 writes those). Use only the sources in §2.0, never OpenStax or the other forbidden sources. Commit only when I ask, and run `npm run build` before every commit. Start with Block 0: show me your plan for lesson 0.1 first.
