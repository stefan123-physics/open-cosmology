/**
 * Runs the calculation tests (docs/CALC_TESTS_PLAN.md):  npm run calc:test
 * Uses the project's virtual environment (.venv) when it exists, otherwise `python` on the PATH.
 * One-time setup:  python -m venv .venv  then  .venv/Scripts/pip install -r requirements-dev.txt
 *                  (on macOS/Linux: .venv/bin/pip …)
 * Extra arguments go to pytest, e.g.  npm run calc:test -- -k horizon
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const candidates = [path.join(".venv", "Scripts", "python.exe"), path.join(".venv", "bin", "python")];
const python = candidates.find((p) => existsSync(p)) ?? "python";
// --crosscheck: the independent recomputation (scripts/calc-crosscheck.py) instead of the test suite.
const args = process.argv.includes("--crosscheck") ? ["scripts/calc-crosscheck.py"] : ["-m", "pytest", "tests/calc", "-q", ...process.argv.slice(2)];
const result = spawnSync(python, args, { stdio: "inherit", env: { ...process.env, PYTHONIOENCODING: "utf-8" } });
if (result.error) {
  console.error(`Could not run ${python}: ${result.error.message}\nSet up Python first (see the comment at the top of scripts/calc-test.mjs).`);
  process.exit(1);
}
process.exit(result.status ?? 1);
