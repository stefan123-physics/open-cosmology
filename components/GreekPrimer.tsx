import type { GlossaryEntry } from "@/lib/symbols";

/**
 * The Greek alphabet and look-alike symbols, for the /symbols page (docs/SYMBOLS_PLAN.md, items 9–10).
 * Plain Unicode text, so it reads well aloud and scales with the reading options.
 */
const GREEK: [string, string, string, string][] = [
  ["Α", "α", "alpha", "AL-fa"],
  ["Β", "β", "beta", "BAY-ta or BEE-ta"],
  ["Γ", "γ", "gamma", "GAM-a"],
  ["Δ", "δ", "delta", "DEL-ta"],
  ["Ε", "ε, ϵ", "epsilon", "EP-si-lon"],
  ["Ζ", "ζ", "zeta", "ZAY-ta or ZEE-ta"],
  ["Η", "η", "eta", "AY-ta or EE-ta"],
  ["Θ", "θ", "theta", "THAY-ta or THEE-ta"],
  ["Ι", "ι", "iota", "eye-OH-ta"],
  ["Κ", "κ", "kappa", "KAP-a"],
  ["Λ", "λ", "lambda", "LAM-da"],
  ["Μ", "μ", "mu", "MYOO"],
  ["Ν", "ν", "nu", "NEW"],
  ["Ξ", "ξ", "xi", "KSEE or ZYE"],
  ["Ο", "ο", "omicron", "OM-i-kron"],
  ["Π", "π", "pi", "PIE"],
  ["Ρ", "ρ", "rho", "ROW"],
  ["Σ", "σ", "sigma", "SIG-ma"],
  ["Τ", "τ", "tau", "TOW (rhymes with cow)"],
  ["Υ", "υ", "upsilon", "UP-si-lon"],
  ["Φ", "φ, ϕ", "phi", "FYE or FEE"],
  ["Χ", "χ", "chi", "KYE"],
  ["Ψ", "ψ", "psi", "SIGH or PSY"],
  ["Ω", "ω", "omega", "oh-MAY-ga or oh-MEE-ga"],
];

const LOOK_ALIKES: [string, string][] = [
  ["ν and v", "ν is the Greek letter nu (a frequency, or a neutrino); v is the Latin letter v (a speed). Nu comes to a point at the bottom."],
  ["ρ and p", "ρ (rho) is a density; p is a pressure. Both appear in ρ + 3p/c². Rho has a tail below the line."],
  ["κ and k", "κ (kappa) and k (curvature) even appear together: for an open universe κ = −k."],
  ["χ and x", "χ (chi) has a long stroke below the line; x does not."],
  ["ω and w", "ω (omega) is rounded at the bottom; w is pointed."],
  ["ξ and ζ", "ξ (xi) has three bumps stacked up; ζ (zeta) is a single curl."],
  ["ϕ and φ; ε and ϵ", "Two ways of writing the same letter (phi; epsilon). They mean the same thing."],
  ["∝ and α", "∝ means “is proportional to” and sits on the line like =; α is the letter alpha."],
  ["ℓ, l and 1", "ℓ is a script l, used for lengths so that it is not mistaken for the number 1."],
  ["≈, ∼, ≃ and ∝", "≈ and ≃: close in value. ∼: the same order of magnitude (within a factor of a few). ∝: the same shape, up to a constant factor."],
  ["Δ and ∇", "Δ (capital delta) means “a change in”; ∇ (nabla, upside down) is the vector derivative “del”."],
  ["d, ∂ and δ", "d: an ordinary derivative or small step (dx). ∂: a partial derivative, other variables held fixed. δ: a small variation, or the density contrast in 8.902."],
  ["ħ and h", "ħ (h-bar) is Planck's constant divided by 2π."],
];

export function GreekPrimer({ entries, hrefOf }: { entries: GlossaryEntry[]; hrefOf: (id: string) => string }) {
  const usedGlyph = new Map<string, string>();
  for (const e of entries) for (const g of e.glyphs) usedGlyph.set(g, e.id);
  const linkFor = (chars: string) => chars.split(", ").map((c) => usedGlyph.get(c)).find(Boolean);
  return (
    <>
      <section aria-labelledby="greek-title">
        <h2 id="greek-title">The Greek alphabet</h2>
        <p>
          Physics borrows Greek letters when it runs out of Latin ones. Here are all 24, with a guide to saying them (where two
          are given, both are common). Letters used on the site link to their entry in the glossary.
        </p>
        <div>
          <table className="greek-table">
            <thead>
              <tr>
                <th scope="col">Capital</th>
                <th scope="col">Small</th>
                <th scope="col">Name</th>
                <th scope="col">Say it</th>
              </tr>
            </thead>
            <tbody>
              {GREEK.map(([cap, small, name, say]) => {
                const id = linkFor(small) ?? linkFor(cap);
                return (
                  <tr key={name}>
                    <td className="greek-glyph">{cap}</td>
                    <td className="greek-glyph">{small}</td>
                    <td>{id ? <a href={hrefOf(id)}>{name}</a> : name}</td>
                    <td>{say}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="lookalike-title">
        <h2 id="lookalike-title">Symbols that look alike</h2>
        <dl className="lookalikes">
          {LOOK_ALIKES.map(([pair, text]) => (
            <div key={pair}>
              <dt>{pair}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
