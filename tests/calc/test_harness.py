"""
Regression tests for the calculation harness itself (tests/calc/test_calculations.py): the numerical helpers must
give accurate values in hard cases (singular endpoints, very large or small arguments) or fail loudly — never
return a silently wrong number. Also the quiz-matching rule.

Run with the rest:  npm run calc:test
"""

from __future__ import annotations

import math

import pytest

import test_calculations as tc


# ---------------------------------------------------------------- integrate

@pytest.mark.parametrize("th", [3.0, 3.1, 3.14])
def test_cycloid_integral_near_pi(th):
    """The cycloid's separated integral (closed-universe-cycloid) has an integrable singularity at θ = π:
    ∫₀^{a(θ)} √x/√(2α − x) dx with a(θ) = α(1 − cos θ) must equal α(θ − sin θ). The old fixed Simpson rule
    was 5% wrong at θ = 3.14."""
    alpha = 1.0
    value = tc.evaluate(
        "integrate('sqrt(x) / sqrt(2 * alpha - x)', 'x', 0, alpha * (1 - cos(th)))", {"alpha": alpha, "th": th}
    )
    assert abs(value - alpha * (th - math.sin(th))) <= 1e-6


def test_integrable_endpoint_singularity():
    assert abs(tc.numeric_integrate(lambda x: x**-0.5, 0.0, 1.0) - 2.0) <= 1e-9


def test_infinite_range():
    assert abs(tc.numeric_integrate(lambda x: math.exp(-x * x), 0.0, math.inf) - math.sqrt(math.pi) / 2) <= 1e-9


def test_divergent_integral_fails_loudly():
    with pytest.raises(tc.NumericError):
        tc.numeric_integrate(lambda x: 1.0 / x, 0.0, 1.0)


def test_nan_integrand_fails_loudly():
    with pytest.raises(tc.NumericError):
        tc.numeric_integrate(lambda x: math.nan if x > 0.5 else 1.0, 0.0, 1.0)


def test_integrand_with_domain_error_fails_loudly():
    # sqrt of a negative number gives a complex result in Python: that is an error, not a value.
    with pytest.raises(tc.NumericError):
        tc.evaluate("integrate('sqrt(x - 0.5)', 'x', 0, 1)", {})


# ---------------------------------------------------------------- deriv

@pytest.mark.parametrize(
    "f, x0, order, exact",
    [
        (math.sin, 0.0, 1, 1.0),
        (math.sin, 1e6, 1, math.cos(1e6)),  # large argument, small-scale oscillation
        (lambda x: x ** (2 / 3), 1e-6, 1, (2 / 3) * 1e-6 ** (-1 / 3)),  # close to the cusp at 0
        (lambda x: x ** (2 / 3), 1e8, 1, (2 / 3) * 1e8 ** (-1 / 3)),
        (lambda x: 1 / x, 1e-3, 1, -1e6),  # close to a pole
        (math.exp, 30.0, 2, math.exp(30.0)),  # large values
        (lambda x: x**3, 2.0, 2, 12.0),
        (math.cos, 0.0, 2, -1.0),
    ],
)
def test_deriv_accurate(f, x0, order, exact):
    assert abs(tc.numeric_deriv(f, x0, order) - exact) <= 1e-6 * max(1.0, abs(exact))


@pytest.mark.parametrize(
    "f, df",
    [
        (lambda x: x - math.sin(x), lambda x: 1 - math.cos(x)),
        (lambda x: 1 - math.cos(x), math.sin),
    ],
    ids=["x-sin", "1-cos"],
)
def test_deriv_accurate_along_the_cycloid(f, df):
    # CI on Linux once failed where Windows passed: sin/cos round differently in the last bit, and the old helper,
    # which took the estimate where neighbours agreed best at tiny steps, sometimes picked a round-off coincidence
    # (error ~1e-9). The cycloid energy check magnifies that about 100× against a tolerance of 1e-6. Sweeping many
    # points hits such coincidences on any platform; the answer must be good to 1e-10 everywhere.
    for i in range(60):
        th = 0.05 + i * 0.1
        exact = df(th)
        assert abs(tc.numeric_deriv(f, th) - exact) <= 1e-10 * max(abs(exact), abs(f(th)) / th), f"θ = {th}"


def test_deriv_at_a_cusp_fails_loudly():
    # |x| has no derivative at 0: the left and right slopes disagree, and the helper must say so... or return 0,
    # the symmetric (principal) value — never something else.
    try:
        v = tc.numeric_deriv(abs, 0.0)
    except tc.NumericError:
        return
    assert v == 0.0


def test_deriv_at_undefined_point_fails_loudly():
    with pytest.raises(tc.NumericError):
        tc.numeric_deriv(lambda x: 1 / x, 0.0)


def test_deriv_order_checked():
    with pytest.raises(ValueError):
        tc.numeric_deriv(math.sin, 1.0, 3)


# ---------------------------------------------------------------- solve

def test_solve_root():
    assert abs(tc.numeric_solve(lambda x: math.cos(x), 1.0, 2.0) - math.pi / 2) <= 1e-12


def test_solve_tiny_and_huge_scales():
    assert abs(tc.numeric_solve(lambda x: x - 3e-12, 0.0, 1e-11) - 3e-12) <= 1e-24
    assert abs(tc.numeric_solve(lambda x: x / 1e9 - 7.0, 0.0, 1e11) - 7e9) <= 1e-3


def test_solve_pole_is_not_a_root():
    with pytest.raises(tc.NumericError):
        tc.numeric_solve(math.tan, 1.0, 2.0)  # sign change across the pole at π/2


def test_solve_needs_sign_change():
    with pytest.raises(tc.NumericError):
        tc.numeric_solve(lambda x: x * x + 1, -1.0, 1.0)


def test_solve_cycloid_parameter_near_pi():
    # spherical-collapse: (2/3π)(s − sin s) = τ near collapse (s → 2π) and near turnaround (s = π).
    for tau in (2 / 3, 1.3, 1.333):
        s = tc.numeric_solve(lambda q: 2 / (3 * math.pi) * (q - math.sin(q)) - tau, 0.0, 2 * math.pi)
        assert abs(2 / (3 * math.pi) * (s - math.sin(s)) - tau) <= 1e-12


# ---------------------------------------------------------------- quiz rule

def _quiz_entry(value: str):
    return {"formula": value, "expected": value, "quiz": 0}


def _front(choices, answer):
    return {"quiz": [{"question": "?", "choices": choices, "answer": answer}]}


def test_quiz_marked_answer_alone_matches():
    tc.check_value(_quiz_entry("25"), _front(["$10$", "$25$", "$50$"], 1))


def test_quiz_wrong_answer_marked_fails():
    with pytest.raises(AssertionError):
        tc.check_value(_quiz_entry("25"), _front(["$10$", "$25$", "$50$"], 0))


def test_quiz_two_matching_choices_fail():
    with pytest.raises(AssertionError):
        tc.check_value(_quiz_entry("25"), _front(["$25$ m", "about 25 s", "$50$"], 0))
