/** Roman numerals for year labels ("Year II"), in the style of a university calendar. */
export function roman(n: number): string {
  const map: [number, string][] = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [v, s] of map) while (n >= v) { out += s; n -= v; }
  return out;
}

/** "Year II", or "High School" for year 0 (content/year-0), which comes before Year I. */
export function yearName(n: number): string {
  return n === 0 ? "High School" : `Year ${roman(n)}`;
}
