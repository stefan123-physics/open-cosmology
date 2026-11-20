"""
Independent cross-check of the calculation tests (reviews/calc-audit.md). Not part of `npm run calc:test`.

Recomputes a sample of calculations from many pages with NumPy and SciPy — constants from scipy.constants,
formulas written out here in plain Python — WITHOUT the harness's evaluate(), pint or the formula strings in calcs/.
It reads only each entry's printed `expected` value from calcs/<course>/<slug>.yaml and reports any difference larger
than half a unit in the last printed digit (or the entry's own explicit tolerance, which is printed alongside).

Run:  npm run calc:crosscheck      (or: .venv/Scripts/python scripts/calc-crosscheck.py)
"""

from __future__ import annotations

import math
import pathlib
import re
import sys
from decimal import Decimal

import numpy as np
import yaml
from scipy import constants as K
from scipy.integrate import quad, solve_ivp
from scipy.optimize import brentq, minimize_scalar
from scipy.special import erfc, zeta

ROOT = pathlib.Path(__file__).resolve().parents[1]

# ---- constants (SI), independent of calcs/constants.yaml
c, G, hbar, kB, eV = K.c, K.G, K.hbar, K.k, K.eV
Mpc = 1e6 * K.parsec
yr = K.Julian_year
Gyr = 1e9 * yr
M_sun = 1.98841e30  # IAU 2015 nominal GM_sun / G (same convention the site states)


def kmsMpc(h):  # km/s/Mpc → 1/s
    return h * 1e3 / Mpc


# ---- each check: (course/slug, id, unit of the printed value, recomputation in that unit)
CHECKS = [
    # 8.01
    ("8.01/kinematics-2d", "cliff-time", "s", lambda: math.sqrt(2 * 20 / 9.8)),
    ("8.01/kinematics-2d", "kick-range", "m", lambda: 15**2 * math.sin(math.radians(70)) / 9.8),
    ("8.01/acceleration-1d", "landing-time", "s", lambda: (12 + math.sqrt(12**2 + 2 * 9.8 * 1.5)) / 9.8),
    ("8.01/universal-gravitation", "surface-gravity", "m/s**2", lambda: G * 5.97e24 / 6.37e6**2),
    ("8.01/universal-gravitation", "balance-point", "m", lambda: 3.84e8 / (1 + math.sqrt(7.35e22 / 5.97e24))),
    ("8.01/vectors", "c-magnitude", "", lambda: math.hypot(5 * math.cos(math.radians(30)) + 3 * math.cos(math.radians(120)),
                                                            5 * math.sin(math.radians(30)) + 3 * math.sin(math.radians(120)))),
    # 8.01, lessons 9–16 (added 2026-11-15). Where possible by a different route than the page:
    # numerical integration or minimisation instead of the closed-form answer.
    ("8.01/uniform-circular-motion", "drum-acceleration", "m/s**2", lambda: 0.25 * (2 * math.pi * 1200 / 60) ** 2),
    ("8.01/uniform-circular-motion", "moon-acceleration", "m/s**2", lambda: 4 * math.pi**2 * 384400e3 / (27.32 * DAY) ** 2),
    ("8.01/uniform-circular-motion", "sun-period", "yr", lambda: 2 * math.pi * 8178 * K.parsec / 229e3 / yr),
    ("8.01/circular-motion-acceleration", "car-total", "m/s**2", lambda: math.hypot(50 * 0.020, 50 * (0.020 * 10) ** 2)),
    ("8.01/newtons-second-law-circular-motion", "curve-kmh", "km/hour", lambda: math.sqrt(120 * 9.81 * math.tan(math.radians(15))) * 3.6),
    ("8.01/newtons-second-law-circular-motion", "galaxy-mass-suns", "", lambda: (229e3) ** 2 * 8178 * K.parsec / G / M_sun),
    ("8.01/circular-motion-dynamics-examples", "mars-orbit", "m", lambda: (4.2828e13 * (24.6229 * 3600 / (2 * math.pi)) ** 2) ** (1 / 3)),
    ("8.01/circular-motion-dynamics-examples", "double-sun-days", "day", lambda: 2 * math.pi * math.sqrt(K.au**3 / (G * 2 * M_sun)) / DAY),
    ("8.01/circular-motion-dynamics-examples", "earth-moon-difference", "day",
     lambda: (2 * math.pi * math.sqrt(3.82e8**3 / 6.67e-11) * (1 / math.sqrt(5.98e24) - 1 / math.sqrt(5.98e24 + 7.36e22))) / DAY),
    ("8.01/pulleys-and-constraints", "ex1-a1", "m/s**2", lambda: pulley_a1(2.0, 6.0)),
    ("8.01/pulleys-and-constraints", "ex2-TB", "N", lambda: three_block_tension(4.0, 1.0, 2.0)),
    ("8.01/massive-rope", "cable-lambda", "kg/m", lambda: 8000 * 2.0e-4),
    ("8.01/massive-rope", "bollard-force", "N", lambda: capstan(5000, 0.30, 6 * math.pi)),
    ("8.01/massive-rope", "chain-80", "N", lambda: 2.0 * 9.81 / 2 * math.tan(math.radians(80))),
    ("8.01/resistive-forces", "bearing-alpha", "kg/s", lambda: 6 * math.pi * 1.0 * 1.0e-3),
    ("8.01/resistive-forces", "skydiver-kmh", "km/hour", lambda: math.sqrt(80 * 9.81 / 0.42) * 3.6),
    ("8.01/resistive-forces", "skydiver-90", "s", lambda: time_to_fraction(80, 0.42, 0.9)),
    ("8.01/momentum-and-impulse", "tennis-dv", "m/s", lambda: quad(lambda t: triangle_force(t), 0, 4.0e-3, points=[2.0e-3])[0] / 0.058),
    ("8.01/momentum-and-impulse", "bounce-force", "N", lambda: 0.060 * (math.sqrt(2 * 9.81 * 1.2) + math.sqrt(2 * 9.81 * 1.8)) / 5.0e-3 + 0.060 * 9.81),
    ("8.01/conservation-of-momentum", "crossroads-speed", "m/s", lambda: np.linalg.norm(np.array([1200 * 15, 1800 * 10]) / 3000)),
    ("8.01/conservation-of-momentum", "plane-sandbag", "m", lambda: plane_stop()),
    # 18.01, lectures 3–6 and 9–13 (added 2026-11-15)
    ("18.01/derivatives-of-sine-and-cosine", "quotient-error", "", lambda: math.cos(1) - (math.sin(1.001) - math.sin(1)) / 0.001),
    ("18.01/chain-rule-and-higher-derivatives", "plot-slope", "", lambda: central(lambda x: math.sin(x**2), 1.5)),
    ("18.01/implicit-differentiation", "example-arcsin", "", lambda: central(math.asin, 0.5)),
    ("18.01/exponentials-and-logarithms", "e-limit-1000", "", lambda: math.exp(1000 * math.log1p(0.001))),
    ("18.01/linear-and-quadratic-approximations", "fast-clock-day", "s", lambda: (1 / math.sqrt(1 - (8.0 / 3.0e5) ** 2) - 1) * DAY),
    ("18.01/curve-sketching", "xexp-inflection", "", lambda: (lambda x: x * math.exp(-x))(brentq(lambda x: central2(lambda t: t * math.exp(-t), x), 1, 3))),
    ("18.01/max-min-problems", "closed-can-S", "cm**2", lambda: minimize_scalar(lambda r: 2 * math.pi * r**2 + 2 * 1000 / r, bounds=(1, 20), method="bounded").fun),
    ("18.01/max-min-problems", "circle-square-min", "", lambda: minimize_scalar(lambda x: x**2 / 16 + (1 - x) ** 2 / (4 * math.pi), bounds=(0, 1), method="bounded").fun),
    ("18.01/related-rates", "speed-limit", "ft/s", lambda: 65 * K.mile / K.hour / K.foot),
    ("18.01/related-rates", "balloon-rate", "m/s", lambda: 0.010 / central(lambda r: 4 / 3 * math.pi * r**3, 0.20)),
    ("18.01/newtons-method", "sqrt5-err2", "", lambda: newton(lambda x: x * x - 5, lambda x: 2 * x, 2.0, 2) - math.sqrt(5)),
    ("18.01/newtons-method", "cos-x2", "", lambda: newton(lambda x: x - math.cos(x), lambda x: 1 + math.sin(x), 1.0, 2)),
    ("18.01/newtons-method", "ring-x", "m", lambda: ring_lowest(4.0, 1.0, 6.0)[0]),
    ("18.01/newtons-method", "ring-y", "m", lambda: ring_lowest(4.0, 1.0, 6.0)[1]),
    # 8.286
    ("8.286/age-of-the-universe", "age-planck", "Gyr", lambda: 2 / 3 / kmsMpc(67.3) / Gyr),
    ("8.286/age-of-the-universe", "hubble-time-planck", "yr", lambda: 1 / kmsMpc(67.3) / yr),
    ("8.286/horizon-distance", "hubble-length", "Mpc", lambda: c / kmsMpc(67.3) / Mpc),
    ("8.286/robertson-walker-closed", "radius-of-curvature", "Mpc", lambda: c / kmsMpc(67.3) / math.sqrt(0.005) / Mpc),
    ("8.286/open-universe", "open-ht", "", lambda: open_age_units(0.3)),
    ("8.286/open-universe", "open-age", "yr", lambda: open_age_units(0.3) / kmsMpc(67.3) / yr),
    ("8.286/supernova-evidence", "open-hdl", "", lambda: mattig(0.2, 0.5)),
    ("8.286/supernova-evidence", "vacuum-integral", "", lambda: quad(lambda z: 1 / math.sqrt(0.24 * (1 + z) ** 3 + 0.76), 0, 0.5)[0]),
    ("8.286/supernova-evidence", "modulus-difference", "", lambda: 5 * math.log10(
        1.5 * quad(lambda z: 1 / math.sqrt(0.24 * (1 + z) ** 3 + 0.76), 0, 0.5)[0] / mattig(0.2, 0.5))),
    ("8.286/black-body-radiation", "n-gamma", "1/m**3", lambda: 2 * zeta(3) / math.pi**2 * (kB * 2.725 / (hbar * c)) ** 3),
    ("8.286/mass-energy-and-radiation", "one-kg-joules", "J", lambda: 1.0 * c**2),
    ("8.286/neutrinos-and-particle-counting", "t-nu", "K", lambda: (4 / 11) ** (1 / 3) * 2.725),
    ("8.286/temperature-and-decoupling", "kT-1s-lecture", "MeV",
     lambda: (45 * hbar**3 * c**5 / (16 * math.pi**3 * 10.75 * G)) ** 0.25 / (1e6 * eV)),
    ("8.286/cmb-spectrum", "wien-peak-factor", "", lambda: brentq(lambda x: 3 * (1 - math.exp(-x)) - x, 1, 5)),
    ("8.286/age-with-vacuum-energy", "t0", "yr",
     lambda: 2 / (3 * kmsMpc(68) * math.sqrt(0.69)) * math.asinh(math.sqrt(0.69 / 0.31)) / yr),
    ("8.286/cosmological-constant", "hubble-time-vac", "yr", lambda: 1 / (math.sqrt(0.7) * kmsMpc(67)) / yr),
    ("8.286/closed-universe-cycloid", "separated-integral", None, None),  # identity: checked in IDENTITIES below
    # 8.902
    ("8.902/spherical-collapse", "xi-turnaround", "", lambda: (3 * math.pi / 4) ** 2),
    ("8.902/spherical-collapse", "delta-c", "", lambda: 0.6 * (3 * math.pi / 2) ** (2 / 3)),
    ("8.902/spherical-collapse", "virial-overdensity", "", lambda: 18 * math.pi**2),
    ("8.902/spherical-collapse", "r-vir-mpc", "Mpc", lambda: (3 * 1e15 * 1.99e30 / (4 * math.pi * 178 * 9.2e-27)) ** (1 / 3) / Mpc),
    ("8.902/spherical-collapse", "s-z1", "", lambda: cycloid_s(2 / 3 * (0.5 * 2 ** (2 / 3)) ** 1.5)),
    ("8.902/spherical-collapse", "y-z1", "", lambda: (1 - math.cos(cycloid_s(2 / 3 * (0.5 * 2 ** (2 / 3)) ** 1.5))) / 2),
    ("8.902/press-schechter", "fraction-today", "", lambda: erfc(1.686 / 0.5 / math.sqrt(2))),
    ("8.902/press-schechter", "fraction-z1", "", lambda: erfc(1.686 / 0.25 / math.sqrt(2))),
    ("8.902/power-spectrum", "cluster-r0", "", lambda: 5 * 20 ** (1 / 1.8)),
    ("8.902/linear-perturbations", "static-growth", "", lambda: math.exp(7 / math.sqrt(1.5))),
    ("8.902/dark-matter-freeze-out", "hot-time", "s", lambda: rad_time(2 / 3)),
    ("8.902/dark-matter-freeze-out", "hot-horizon", "Mpc", lambda: 2 * c * rad_time(2 / 3) * (2 / 3 * eV / kB / 2.7255) / Mpc),
    ("8.902/why-cold-dark-matter", "jeans-mass", "", lambda: jeans_mass_msun()),
]
CHECKS = [x for x in CHECKS if x[2] is not None]

# Differences already explained on the page (reported, but not counted as new problems).
KNOWN = {
    "8.286/temperature-and-decoupling:kT-1s-lecture": "the lecture rounds 0.8592 up to 0.860; the page says so in a bracket after the formula, "
    "and calcs entry kT-1s-exact checks 0.859",
}


def open_age_units(om):
    y = 2 * math.sqrt(1 - om) / om
    return om / (2 * (1 - om) ** 1.5) * (y - math.asinh(y))


def mattig(om, z):
    return 2 * (om * z + (om - 2) * (math.sqrt(1 + om * z) - 1)) / om**2


def cycloid_s(tau):
    return brentq(lambda s: 2 / (3 * math.pi) * (s - math.sin(s)) - tau, 1e-9, 2 * math.pi - 1e-9)


def rad_time(kT_eV, g=3.36):
    E = kT_eV * eV
    rho = g * math.pi**2 / 30 * E**4 / (hbar * c) ** 3 / c**2
    return 1 / (2 * math.sqrt(8 * math.pi / 3 * G * rho))


def jeans_mass_msun():
    cs, Gr, rho = 5.0e3, 6.67e-11, 3.6e-18  # the page's own rounded inputs
    lam = cs * math.sqrt(math.pi / (Gr * rho))
    return 4 / 3 * math.pi * rho * lam**3 / M_sun


DAY = 86400.0


def pulley_a1(m1, m2, g=9.81):
    """8.01 Lesson 12: solve m1 g − T = m1 a1, m2 g − 2T = m2 a2, a1 + 2 a2 = 0 as a linear system for (T, a1, a2)."""
    A = np.array([[1, m1, 0], [2, 0, m2], [0, 1, 2]], dtype=float)
    T, a1, a2 = np.linalg.solve(A, [m1 * g, m2 * g, 0])
    return a1


def three_block_tension(m1, m2, m3, g=9.81):
    """Notes Example 8.9: unknowns (T_A, T_B, a1, a2, a3) from the five equations, solved as a linear system."""
    A = np.array([
        [1, 0, m1, 0, 0],     # m1 g − T_A = m1 a1
        [0, 1, 0, m2, 0],     # m2 g − T_B = m2 a2
        [0, 1, 0, 0, m3],     # m3 g − T_B = m3 a3
        [1, -2, 0, 0, 0],     # T_A − 2 T_B = 0
        [0, 0, 2, 1, 1],      # 2 a1 + a2 + a3 = 0
    ], dtype=float)
    TA, TB, *_ = np.linalg.solve(A, [m1 * g, m2 * g, m3 * g, 0, 0])
    return TB


def capstan(TA, mu, theta):
    """Integrate dT/dθ = −μ T numerically from the load to the sailor."""
    sol = solve_ivp(lambda th, T: -mu * T, (0, theta), [TA], rtol=1e-10, atol=1e-12)
    return sol.y[0, -1]


def time_to_fraction(m, beta, frac, g=9.81):
    """Integrate m dv/dt = m g − β v² from rest until v reaches frac × the terminal speed."""
    vt = math.sqrt(m * g / beta)
    ev = lambda t, v: v[0] - frac * vt
    ev.terminal = True
    sol = solve_ivp(lambda t, v: [g - beta / m * v[0] ** 2], (0, 100), [0.0], events=ev, rtol=1e-10, atol=1e-12)
    return sol.t_events[0][0]


def triangle_force(t):
    """8.01 Lesson 15: the racket's force, rising linearly to 400 N in 2 ms and falling back to 0 at 4 ms."""
    return 400 * t / 2e-3 if t <= 2e-3 else 400 * (4e-3 - t) / 2e-3


def plane_stop():
    """Notes Example 10.6: momentum conserved in the snag, then integrate the deceleration until the plane stops."""
    mp, ms, v0, F, mu, g = 1000, 120, 40, 1400, 0.4, 9.8
    v1 = mp * v0 / (mp + ms)
    ev = lambda t, s: s[1]
    ev.terminal = True
    ev.direction = -1
    sol = solve_ivp(lambda t, s: [s[1], -(F + mu * ms * g) / (mp + ms)], (0, 1000), [0, v1], events=ev, rtol=1e-10, atol=1e-10)
    return sol.y_events[0][0][0]


def central(f, x, h=1e-6):
    return (f(x + h) - f(x - h)) / (2 * h)


def central2(f, x, h=1e-4):
    return (f(x + h) - 2 * f(x) + f(x - h)) / h**2


def newton(f, df, x, steps):
    for _ in range(steps):
        x = x - f(x) / df(x)
    return x


def ring_lowest(a, b, L):
    """18.01 Lecture 13: the lowest point of the ring, found by minimising y along the constraint curve numerically."""
    def y_of(x):
        length = lambda y: math.hypot(x, y) + math.hypot(a - x, b - y) - L
        return brentq(length, -L, min(0.0, b) - 1e-12)
    r = minimize_scalar(y_of, bounds=(1e-6, a - 1e-6), method="bounded", options={"xatol": 1e-10})
    return r.x, r.fun


# ---- identities checked here too (integrals near singular points), independent of the harness
def identities():
    out = []
    for th in (0.8, 2.4, 3.0, 3.1, 3.14):
        a = 1 - math.cos(th)
        v = quad(lambda x: math.sqrt(x) / math.sqrt(2 - x), 0, a, limit=200)[0]
        out.append((f"cycloid integral at θ = {th}", v, th - math.sin(th), 1e-8))
    for t0 in (1e-6, 1.0, 13.8, 1e4):
        v = t0 ** (2 / 3) * quad(lambda t: t ** (-2 / 3), 0, t0)[0]
        out.append((f"horizon integral t0 = {t0:g}", v, 3 * t0, 1e-8))
    for ov in (0.001, 0.5, 0.69, 0.999):
        v = quad(lambda x: x / math.sqrt((1 - ov) * x + ov * x**4), 0, 1)[0]
        out.append((f"age integral Ω_vac = {ov}", v, 2 / (3 * math.sqrt(ov)) * math.asinh(math.sqrt(ov / (1 - ov))), 1e-8))
    # 18.01 derivative results stated on the pages, checked by finite differences (not the harness's deriv)
    for x in (0.5, 1.0, 2.0):
        out.append((f"d/dx x^x = x^x (1 + ln x) at x = {x}", central(lambda t: t**t, x), x**x * (1 + math.log(x)), 1e-6))
        out.append((f"d/dx (x/ln x)'s second derivative at x = {x + 1.5}", central2(lambda t: t / math.log(t), x + 1.5),
                    (2 - math.log(x + 1.5)) / ((x + 1.5) * math.log(x + 1.5) ** 3), 1e-4))
    f = lambda t: math.exp(-3 * t) * (1 + t) ** -0.5
    out.append(("second derivative of e^(−3x)(1+x)^(−1/2) at 0 = 2 × 51/8", central2(f, 0.0), 51 / 4, 1e-4))
    out.append(("Doppler: second derivative of √((1+β)/(1−β)) at 0 = 1", central2(lambda b: math.sqrt((1 + b) / (1 - b)), 0.0), 1.0, 1e-4))
    out.append(("open box: (2V)^(1/3) minimises x² + 4V/x (V = 1)", minimize_scalar(lambda x: x**2 + 4 / x, bounds=(0.1, 5), method="bounded").x,
                2 ** (1 / 3), 1e-5))
    return out


# ---- reading the printed values
_NUM = re.compile(r"^\s*([-+]?)(\d+)(?:\.(\d+))?(?:[eE]([-+]?\d+))?\s*(.*)$")


def printed(course_slug: str, cid: str):
    data = yaml.safe_load((ROOT / "calcs" / f"{course_slug}.yaml").read_text(encoding="utf-8"))
    e = next(x for x in data["calcs"] if x["id"] == cid)
    m = _NUM.match(str(e["expected"]))
    sign, whole, dec, exp, unit = m.groups()
    value = float(f"{sign}{whole}.{dec or '0'}e{exp or 0}")
    if dec:
        place = Decimal(1).scaleb(-len(dec))
    else:
        zeros = len(whole) - len(whole.rstrip("0")) if whole.strip("0") else 0
        place = Decimal(1).scaleb(zeros)
    half = float(place.scaleb(int(exp or 0))) / 2
    return value, half, unit.strip(), e.get("tolerance")


def main() -> int:
    problems = 0
    pages = set()
    print(f"{'page:id':58} {'printed':>14} {'recomputed':>16}  verdict")
    for course_slug, cid, unit, fn in CHECKS:
        pages.add(course_slug)
        value, half, punit, tol = printed(course_slug, cid)
        if punit != unit:
            print(f"{course_slug}:{cid}: unit mismatch (script {unit!r}, calcs {punit!r})")
            problems += 1
            continue
        got = float(fn())
        ok = abs(got - value) <= half * 1.0001
        key = f"{course_slug}:{cid}"
        if not ok and key in KNOWN:
            print(f"{key:58} {value:>14.6g} {got:>16.8g}  known: {KNOWN[key]}")
            continue
        note = "" if ok else (f"  (outside ±{half:g}; the calcs entry allows ±{tol})" if tol else f"  (outside ±{half:g})")
        problems += 0 if ok else 1
        print(f"{key:58} {value:>14.6g} {got:>16.8g}  {'ok' if ok else 'DIFFERS'}{note}")
    print()
    for name, got, exact, tol in identities():
        ok = abs(got - exact) <= tol * max(1, abs(exact))
        problems += 0 if ok else 1
        print(f"{name:58} {exact:>14.8g} {got:>16.10g}  {'ok' if ok else 'DIFFERS'}")
    print(f"\n{len(CHECKS)} values from {len(pages)} pages and {len(identities())} identities · {problems} difference(s)")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
