"""
Calculation tests (docs/CALC_TESTS_PLAN.md).

Every calculation stored in calcs/<course>/<slug>.yaml is recomputed here with physical units and
compared with the value printed on the page. One parametrised test covers all of them, so adding a
calculation never needs new test code.

Run:  npm run calc:test        (or: python -m pytest tests/calc)
"""

from __future__ import annotations

import ast
import math
import operator
import re
import sys
from dataclasses import dataclass
from decimal import Decimal
from pathlib import Path

import pint
import pytest
import yaml

ROOT = Path(__file__).resolve().parents[2]
CALCS = ROOT / "calcs"

ureg = pint.UnitRegistry()
Q = ureg.Quantity
# Guth's comoving coordinate unit (8.286): a length unit of its own, so it never silently cancels.
ureg.define("notch = [comoving_length]")


# ---------------------------------------------------------------- loading

def load_constants() -> dict[str, pint.Quantity]:
    data = yaml.safe_load((CALCS / "constants.yaml").read_text(encoding="utf-8"))
    return {name: Q(str(entry["value"])) for name, entry in data.items()}


CONSTANTS = load_constants()


@dataclass
class Calc:
    file: Path
    page: Path
    entry: dict

    @property
    def id(self) -> str:
        return f"{self.file.parent.name}/{self.file.stem}:{self.entry['id']}"


def load_calcs() -> list[Calc]:
    out: list[Calc] = []
    for f in sorted(CALCS.rglob("*.yaml")):
        if f.name in ("constants.yaml", "values.yaml"):  # shared constants; the value registry (lib/values.ts)
            continue
        data = yaml.safe_load(f.read_text(encoding="utf-8"))
        page = ROOT / data["page"]
        for entry in data.get("calcs", []):
            out.append(Calc(f, page, entry))
    return out


ALL = load_calcs()


def page_parts(page: Path) -> tuple[dict, str]:
    """Frontmatter (parsed) and the raw file text."""
    raw = page.read_text(encoding="utf-8")
    m = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", raw, re.S)
    assert m, f"{page}: no frontmatter"
    return yaml.safe_load(m.group(1)), raw


# ---------------------------------------------------------------- safe formula evaluation

_BINOPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv, ast.Pow: operator.pow}
_UNARY = {ast.USub: operator.neg, ast.UAdd: operator.pos}


def _dimensionless(x) -> float:
    if isinstance(x, pint.Quantity):
        return x.to("dimensionless").magnitude
    return float(x)


_FUNCS = {
    "sqrt": lambda x: x**0.5,
    "log10": lambda x: math.log10(_dimensionless(x)),
    "log": lambda x: math.log(_dimensionless(x)),
    "exp": lambda x: math.exp(_dimensionless(x)),
    "sin": lambda x: math.sin(_dimensionless(x)),
    "cos": lambda x: math.cos(_dimensionless(x)),
    "tan": lambda x: math.tan(_dimensionless(x)),
    "asin": lambda x: math.asin(_dimensionless(x)),
    "acos": lambda x: math.acos(_dimensionless(x)),
    "atan": lambda x: math.atan(_dimensionless(x)),
    "asinh": lambda x: math.asinh(_dimensionless(x)),
    "acosh": lambda x: math.acosh(_dimensionless(x)),
    "sinh": lambda x: math.sinh(_dimensionless(x)),
    "cosh": lambda x: math.cosh(_dimensionless(x)),
    "tanh": lambda x: math.tanh(_dimensionless(x)),
    "erfc": lambda x: math.erfc(_dimensionless(x)),
    "erf": lambda x: math.erf(_dimensionless(x)),
    "abs": abs,
}
_NAMES = {"pi": math.pi, "e": math.e}


# ---------------------------------------------------------------- numerical helpers (tested in test_harness.py)

class NumericError(ValueError):
    """A numerical helper could not produce a trustworthy value: it says so instead of returning a wrong one."""


def _finite(v: float, what: str) -> float:
    if isinstance(v, complex) or not math.isfinite(v):
        raise NumericError(f"{what} is {v}")
    return v


def numeric_integrate(f, a: float, b: float) -> float:
    """∫ₐᵇ f. SciPy's adaptive quad copes with integrable singularities at a limit (1/√x); it never evaluates the
    limits themselves. Raises on NaN or infinity, on SciPy's convergence warnings, or on a large error estimate."""
    import warnings
    from scipy.integrate import IntegrationWarning, quad

    if a == b:
        return 0.0

    def g(x):
        try:
            return _finite(f(x), f"integrand at x = {x}")
        except (ZeroDivisionError, OverflowError, TypeError) as err:
            raise NumericError(f"integrand cannot be evaluated at x = {x}: {err}") from err

    with warnings.catch_warnings():
        warnings.simplefilter("error", IntegrationWarning)
        try:
            value, abserr = quad(g, a, b, limit=500, epsabs=1e-13, epsrel=1e-11)
        except IntegrationWarning as w:
            raise NumericError(f"integral from {a} to {b} does not converge: {str(w).splitlines()[0]}") from w
    _finite(value, f"integral from {a} to {b}")
    if abserr > max(1e-9, 1e-7 * abs(value)):
        raise NumericError(f"integral from {a} to {b} = {value:.6g} is uncertain (error estimate {abserr:.2g})")
    return value


def numeric_deriv(f, x0: float, order: int = 1) -> float:
    """f'(x0) or f''(x0) by Ridders' method: central differences at halving steps, extrapolated to step 0 in a
    full Richardson tableau, each entry with its own error estimate; the entry with the smallest error is the answer.
    The tableau reaches high accuracy at moderate steps, where round-off is negligible, so the result does not depend
    on platform rounding (picking "where neighbouring estimates agree best" at tiny steps did: CI on Linux and
    Windows chose different estimates). Starts with a smaller step if the points of a larger one cannot be evaluated
    (beyond a singularity), and stops before the error grows again. Raises if it never converges."""
    if order not in (1, 2):
        raise ValueError("deriv supports n = 1 or 2")

    def value(x):
        try:
            v = f(x)
        except (ZeroDivisionError, OverflowError, TypeError, ValueError):
            return None
        return None if isinstance(v, complex) or not math.isfinite(v) else v

    f0 = value(x0)
    if f0 is None:
        raise NumericError(f"function cannot be evaluated at x = {x0}")
    scale_x = abs(x0) if x0 != 0 else 1.0

    def central(h):
        lo, hi = value(x0 - h), value(x0 + h)
        if lo is None or hi is None:
            return None
        # The step actually taken: x0 ± h is rounded, and dividing by the intended h would add that rounding error.
        hp, hm = (x0 + h) - x0, x0 - (x0 - h)
        if order == 1:
            return (hi - lo) / (hp + hm)
        return 2 * (hp * lo - (hp + hm) * f0 + hm * hi) / (hp * hm * (hp + hm))

    # Largest step whose points can all be evaluated.
    h = 0.1 * scale_x
    h_min = (1e-6 if order == 1 else 1e-4) * scale_x
    d = central(h)
    while d is None and h >= h_min:
        h /= 2
        d = central(h)
    if d is None:
        raise NumericError(f"derivative at x = {x0}: no points can be evaluated nearby")

    # Ridders' tableau (step ratio 2; both difference formulas have errors in powers of h², hence factors 4^j).
    # At most 8 columns: older, larger steps say nothing more once the function varies on a shorter scale than |x0|
    # (sin at x = 10⁶ starts with steps of many periods), so the tableau slides down with the step.
    COLS = 8
    best, err = d, math.inf
    prev_row = [d]
    while h > h_min / 2**20:
        h /= 2
        d = central(h)
        if d is None:
            break
        row = [d]
        fac = 1.0
        for j in range(1, min(len(prev_row), COLS - 1) + 1):
            fac *= 4.0
            row.append((fac * row[j - 1] - prev_row[j - 1]) / (fac - 1))
            e = max(abs(row[j] - row[j - 1]), abs(row[j] - prev_row[j - 1]))
            if e <= err:
                err, best = e, row[j]
        scale = max(abs(best), abs(f0) / scale_x ** order, 1e-300)
        # Once converged, higher orders getting worse means round-off has taken over: stop.
        if err <= 1e-10 * scale and abs(row[-1] - prev_row[min(len(row), len(prev_row)) - 1]) >= 2 * err:
            break
        prev_row = row

    scale = max(abs(best), abs(f0) / scale_x ** order, 1e-300)
    if not math.isfinite(err) or err > 1e-7 * scale:
        raise NumericError(f"derivative at x = {x0} does not converge (error estimate {err:.2g} on {best:.6g})")
    return best


def numeric_solve(f, a: float, b: float) -> float:
    """The root of f between a and b (f must change sign there), by Brent's method. A sign change across a pole
    (tan at π/2) is not a root: the result must make f small compared with its values at a and b."""
    from scipy.optimize import brentq

    fa = _finite(f(a), f"function at x = {a}")
    fb = _finite(f(b), f"function at x = {b}")
    if fa == 0:
        return a
    if fb == 0:
        return b
    if fa * fb > 0:
        raise NumericError(f"no sign change between {a} and {b} (values {fa:.3g} and {fb:.3g})")
    root = brentq(lambda x: _finite(f(x), f"function at x = {x}"), a, b, xtol=1e-15, rtol=4 * sys.float_info.epsilon, maxiter=500)
    if abs(f(root)) > 1e-8 * max(abs(fa), abs(fb)):
        raise NumericError(f"sign change between {a} and {b} is at x = {root:.12g}, but f there is {f(root):.3g}: a pole, not a root")
    return root


def evaluate(formula: str, names: dict):
    """Evaluate a formula with + - * / **, numbers, names and a few functions. Nothing else is allowed."""

    def ev(node):
        if isinstance(node, ast.Expression):
            return ev(node.body)
        if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
            return node.value
        if isinstance(node, ast.BinOp) and type(node.op) in _BINOPS:
            return _BINOPS[type(node.op)](ev(node.left), ev(node.right))
        if isinstance(node, ast.UnaryOp) and type(node.op) in _UNARY:
            return _UNARY[type(node.op)](ev(node.operand))
        if isinstance(node, ast.Name):
            if node.id in names:
                return names[node.id]
            if node.id in _NAMES:
                return _NAMES[node.id]
            if len(node.id) == 1:
                # A one-letter name that is not defined (inputs, samples, vary) is almost always a forgotten variable,
                # and pint would silently read it as a unit (s = second, m = metre, g = gram). Units are spelled out.
                raise NameError(
                    f"{node.id!r} is not defined in this entry (inputs, samples or vary); one-letter names are never read as units"
                )
            try:
                return 1 * ureg(node.id)  # a unit name such as yr or Mpc
            except Exception:
                raise NameError(f"unknown name {node.id!r} in formula")
        if isinstance(node, ast.Call) and isinstance(node.func, ast.Name) and node.func.id in ("deriv", "integrate", "solve"):
            # deriv('expr', 'var', at, n=1|2) · integrate('expr', 'var', lower, upper) · solve('expr', 'var', lower, upper)
            # The expression and variable are quoted; numbers are dimensionless. See the numeric_* helpers above.
            name = node.func.id
            expr, var = node.args[:2]
            assert isinstance(expr, ast.Constant) and isinstance(var, ast.Constant), f"{name} needs a quoted expression and variable"
            f = lambda x: _dimensionless(evaluate(expr.value, {**names, var.value: x}))
            if name == "deriv":
                order = int(ev(node.args[3])) if len(node.args) > 3 else 1
                return numeric_deriv(f, _dimensionless(ev(node.args[2])), order)
            a, b = _dimensionless(ev(node.args[2])), _dimensionless(ev(node.args[3]))
            return numeric_integrate(f, a, b) if name == "integrate" else numeric_solve(f, a, b)
        if isinstance(node, ast.Call) and isinstance(node.func, ast.Name) and node.func.id in _FUNCS and not node.keywords:
            return _FUNCS[node.func.id](*[ev(a) for a in node.args])
        raise ValueError(f"not allowed in a formula: {ast.dump(node)[:80]}")

    return ev(ast.parse(str(formula), mode="eval"))


# ---------------------------------------------------------------- tolerance from printed digits

_NUMBER = re.compile(r"^\s*([-+]?)(\d+)(?:\.(\d+))?(?:[eE]([-+]?\d+))?")


def default_tolerance(expected: str) -> float:
    """Half a unit in the last printed digit. Trailing zeros of a whole number are not significant (3200 → ±50)."""
    m = _NUMBER.match(expected)
    assert m, f"expected value must start with a number: {expected!r}"
    whole, decimals, exponent = m.group(2), m.group(3), int(m.group(4) or 0)
    if decimals:
        place = Decimal(1).scaleb(-len(decimals))
    else:
        zeros = len(whole) - len(whole.rstrip("0")) if whole.strip("0") else 0
        place = Decimal(1).scaleb(zeros)
    return float(place.scaleb(exponent)) / 2


def parse_tolerance(spec, expected: pint.Quantity, expected_text: str) -> float:
    """Tolerance in the units of `expected`. Spec: absent (from digits), '1%' (relative) or a quantity."""
    if spec is None:
        return default_tolerance(expected_text)
    s = str(spec).strip()
    if s.endswith("%"):
        return abs(expected.magnitude) * float(s[:-1]) / 100
    return Q(s).to(expected.units).magnitude


def as_quantity(x) -> pint.Quantity:
    return x if isinstance(x, pint.Quantity) else Q(x, "dimensionless")


# ---------------------------------------------------------------- the tests

KIND_FIELDS = {
    "value": ("formula", "expected"),
    "limit": ("formula", "limit", "vary"),
    "identity": ("formula", "equals", "samples"),
    "units": ("terms",),
    # A quoted figure that is not a calculation (a measurement, a count of parameters): nothing to recompute, but it
    # must still appear on the page exactly as recorded, with its source. Lets a page's numbers all be accounted for.
    "fact": (),
}


def base_names(e: dict) -> dict:
    names = dict(CONSTANTS)
    for name, value in (e.get("inputs") or {}).items():
        names[name] = Q(str(value)) if isinstance(value, str) else value
    return names


def rel_diff(a, b) -> float:
    """Relative difference of two quantities with the same units (absolute when b is ~0)."""
    a, b = as_quantity(a), as_quantity(b)
    assert a.dimensionality == b.dimensionality, f"units differ: {a.units} vs {b.units}"
    av, bv = a.to(b.units).magnitude, b.magnitude
    return abs(av - bv) / max(abs(bv), 1e-300) if abs(bv) > 1e-12 else abs(av - bv)


@pytest.mark.parametrize("calc", ALL, ids=[c.id for c in ALL])
def test_calculation(calc: Calc):
    e = calc.entry
    kind = e.get("kind", "value")
    assert kind in KIND_FIELDS, f"unknown kind {kind!r}"
    for key in ("id", "where", "shown", "source", "origin", *KIND_FIELDS[kind]):
        assert key in e, f"missing field {key!r}"
    assert e["origin"] in {"mit", "page-own", "later-data", "slip"}, f"unknown origin {e['origin']!r}"

    # The page still shows it, and the citation key exists (same rule as scripts/cite-keys.ts).
    front, raw = page_parts(calc.page)
    shown = e["shown"] if isinstance(e["shown"], list) else [e["shown"]]
    for text in shown:
        n = raw.count(text)
        assert n, f"page no longer contains: {text!r}"
        # Each quoted text must point to one place: if it occurred twice, one copy could change unnoticed.
        assert n == 1, f"{text!r} occurs {n} times on the page; quote more of its context so it points to one place"
    keys = {"mit"} | {f"reading{i + 1}" for i in range(len((front.get("source") or {}).get("readings") or []))}
    keys |= set((front.get("references") or {}).keys())
    src = e["source"]
    if "cite" in src:
        assert src["cite"] in keys, f"cite {src['cite']!r} is not a key on the page ({sorted(keys)})"
    else:
        # A later measurement the page quotes without a reference of its own: name the source in words.
        assert e["origin"] == "later-data" and str(src.get("ref", "")).strip(), (
            "source needs `cite` (a key on the page), or `ref` (the source in words) for origin later-data"
        )

    if "answer" in e:
        check_answer_link(e, raw)

    if kind == "fact":
        return
    if kind == "limit":
        check_limit(e)
    elif kind == "identity":
        check_identity(e)
    elif kind == "units":
        check_units(e)
    else:
        check_value(e, front)


def check_answer_link(e: dict, raw: str):
    """`answer: p1-z` ties an entry to an <Answer id="p1-z"> box on the page (docs/PROBLEM-SETS-DESIGN.md §8): the
    number or formula a reader is marked against must be the one recomputed here. A number answer's `value` equals
    the entry's `expected`; a formula answer's `expr` is the entry's `formula` (the page writes powers as ^)."""
    answer_id = str(e["answer"])
    tags = [t for t in re.findall(r"<Answer\b(?:(?!/>).)*/>", raw, re.S) if re.search(rf'\bid="{re.escape(answer_id)}"', t)]
    assert len(tags) == 1, f'answer {answer_id!r}: the page has {len(tags)} <Answer id="{answer_id}"> boxes, expected one'
    attr = lambda name: (re.search(rf'\b{name}="([^"]*)"', tags[0]) or [None, None])[1]
    squeeze = lambda s: re.sub(r"\s+", "", str(s)).replace("^", "**")
    if attr("expr") is not None:
        assert e.get("kind") in ("identity", "limit"), f"answer {answer_id!r} is a formula: the entry must be an identity or a limit"
        assert squeeze(attr("expr")) == squeeze(e["formula"]), (
            f"answer {answer_id!r}: the page marks against {attr('expr')!r}, this entry checks {e['formula']!r}"
        )
    else:
        assert attr("value") is not None, f"answer {answer_id!r} has neither value nor expr"
        assert e.get("kind", "value") == "value", f"answer {answer_id!r} is a number: the entry must be a value"
        expected = str(e["expected"]).split()[0]
        assert Decimal(attr("value")) == Decimal(expected), (
            f"answer {answer_id!r}: the page marks against {attr('value')}, this entry expects {expected}"
        )


def check_limit(e: dict):
    """`formula` must approach `limit` as the one variable in `vary` runs through its values."""
    (var, values), = e["vary"].items()
    tol = float(e.get("tolerance", 1e-6))
    diffs = []
    for v in values:
        names = {**base_names(e), var: Q(str(v)) if isinstance(v, str) else v}
        diffs.append(rel_diff(evaluate(e["formula"], names), evaluate(e["limit"], names)))
    assert all(b <= a * 1.0001 + 1e-15 for a, b in zip(diffs, diffs[1:])), f"difference does not shrink: {diffs}"
    assert diffs[-1] <= tol, f"at {var} = {values[-1]} the difference is still {diffs[-1]:.3g} (tolerance {tol:g}); steps {diffs}"


def check_identity(e: dict):
    """`formula` and `equals` must agree at every sample point."""
    samples = e["samples"]
    n = len(next(iter(samples.values())))
    assert all(len(v) == n for v in samples.values()), "all sample lists need the same length"
    tol = float(e.get("tolerance", 1e-6))
    for i in range(n):
        names = {**base_names(e), **{k: (Q(str(v[i])) if isinstance(v[i], str) else v[i]) for k, v in samples.items()}}
        d = rel_diff(evaluate(e["formula"], names), evaluate(e["equals"], names))
        assert d <= tol, f"sample {i} ({ {k: v[i] for k, v in samples.items()} }): the two sides differ by {d:.3g}"


def check_units(e: dict):
    """Every term must have the same units (and the given `unit`, if any)."""
    names = base_names(e)
    dims = [(t, as_quantity(evaluate(t, names))) for t in e["terms"]]
    first = dims[0][1]
    for t, q in dims:
        assert q.dimensionality == first.dimensionality, f"term {t!r} has units {q.units}, but {dims[0][0]!r} has {first.units}"
    if "unit" in e:
        assert first.dimensionality == Q(1, e["unit"]).dimensionality, f"terms are {first.units}, expected {e['unit']}"


def check_value(e: dict, front: dict):
    # 1. Recompute with units.
    names = base_names(e)
    result = as_quantity(evaluate(e["formula"], names))
    expected_text = str(e["expected"])
    expected = as_quantity(Q(expected_text))

    # 2. Units must agree.
    assert result.dimensionality == expected.dimensionality, (
        f"units differ: formula gives {result.units}, page value is in {expected.units}"
    )
    value = result.to(expected.units).magnitude
    tol = parse_tolerance(e.get("tolerance"), expected, expected_text)
    assert abs(value - expected.magnitude) <= tol, (
        f"recomputed {value:.6g} {expected.units}, page shows {expected_text} (tolerance ±{tol:.3g})"
    )

    # 3. Quiz: the marked answer matches the recomputed value and no other choice does.
    if "quiz" in e:
        q = front["quiz"][int(e["quiz"])]
        scale_words = {"thousand": 1e3, "million": 1e6, "billion": 1e9, "trillion": 1e12}

        def numbers(text: str) -> list[float]:
            """Numbers in a choice, with '×10^n' and 'thousand/million/billion' applied ('14 billion' → 1.4e10)."""
            text = text.replace("{,}", "").replace(",", "")
            out = []
            pattern = r"(\d+(?:\.\d+)?)(?:\s*\\+times\s*10\^\{?(-?\d+)\}?)?(?:\s+(thousand|million|billion|trillion))?"
            for m in re.finditer(pattern, text):
                n = float(m.group(1))
                if m.group(2):
                    n *= 10 ** int(m.group(2))
                if m.group(3):
                    n *= scale_words[m.group(3)]
                out.append(n)
            return out
        matches = [i for i, ch in enumerate(q["choices"]) if any(abs(n - value) <= tol for n in numbers(ch))]
        assert matches == [q["answer"]], (
            f"quiz {e['quiz']}: choices matching {value:.6g} are {matches}, marked answer is {q['answer']}"
        )


# Reference values for every constant in calcs/constants.yaml (docs/CALC_TESTS_PLAN.md §7, item 3).
# Physical constants come from pint's built-in CODATA table; a constant without a CODATA value gives its own
# reference here. Cosmological parameters are deliberately NOT here: pages are checked against the source they
# cite (Guth's 2013 values), not against the latest measurements.
REFERENCE_CONSTANTS = {
    "c": lambda: 1 * ureg.speed_of_light,
    "G": lambda: 1 * ureg.gravitational_constant,
    "hbar": lambda: 1 * ureg.hbar,
    "k_B": lambda: 1 * ureg.boltzmann_constant,
    # IAU 2015 Resolution B3: nominal solar mass parameter GM_sun, divided by G
    "M_sun": lambda: Q("1.3271244e20 m**3/s**2") / ureg.gravitational_constant,
}


@pytest.mark.parametrize("name", sorted(CONSTANTS))
def test_constant_matches_reference(name: str):
    assert name in REFERENCE_CONSTANTS, (
        f"calcs/constants.yaml: {name} has no reference value; add one to REFERENCE_CONSTANTS (CODATA or the cited standard)"
    )
    data = yaml.safe_load((CALCS / "constants.yaml").read_text(encoding="utf-8"))
    text = str(data[name]["value"])
    ours = CONSTANTS[name]
    ref = REFERENCE_CONSTANTS[name]().to(ours.units)
    tol = default_tolerance(text)
    assert abs(ours.magnitude - ref.magnitude) <= tol * 1.0001, (
        f"calcs/constants.yaml: {name} = {text}, but the reference value is {ref:~P} (allowed ±{tol:g} from the printed digits)"
    )


def _registered(quantity_id: str) -> set[float]:
    data = yaml.safe_load((CALCS / "values.yaml").read_text(encoding="utf-8"))
    q = next(x for x in data["quantities"] if x["id"] == quantity_id)
    out = set()
    for key in q["values"]:
        k = str(key).replace("{,}", "")
        if re.fullmatch(r"[\d.]+", k):
            out.add(float(k))
    return out


def test_inputs_use_registered_values():
    """A Hubble constant or CMB temperature used as an input must be one of the values the pages quote with a role
    (calcs/values.yaml), so calculations cannot quietly use a value no page states. H₀ may also be 100 h₀."""
    h0 = _registered("H0") | {round(100 * h, 6) for h in _registered("h0")} | {100.0}
    t0 = _registered("T_CMB")
    bad = []
    for c in ALL:
        for name, v in (c.entry.get("inputs") or {}).items():
            try:
                q = as_quantity(Q(str(v)))
            except Exception:
                continue
            if q.dimensionality == Q("1 km/s/Mpc").dimensionality and "Mpc" in str(v):
                x = round(q.to("km/s/Mpc").magnitude, 6)
                if x not in h0 and name not in ("dH",):  # dH: the quoted uncertainty, not a value of H₀
                    bad.append(f"{c.id}: {name} = {v}")
            elif q.dimensionality == Q("1 K").dimensionality and 2.5 < q.to("K").magnitude < 2.8:
                if round(q.to("K").magnitude, 6) not in t0:
                    bad.append(f"{c.id}: {name} = {v}")
    assert not bad, "inputs not among the registered values in calcs/values.yaml:\n" + "\n".join(bad)


def test_ids_are_unique():
    seen: set[str] = set()
    for c in ALL:
        assert c.id not in seen, f"duplicate calculation id {c.id}"
        seen.add(c.id)


def test_pages_exist():
    for c in ALL:
        assert c.page.exists(), f"{c.file}: page {c.page} does not exist"
