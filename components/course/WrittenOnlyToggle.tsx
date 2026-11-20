"use client";
import { useEffect, useState } from "react";

/**
 * "Only sections with pages": hides the not-yet-written sections (and chapters with nothing written) by setting
 * data-written-only on the sections block. Not remembered between visits, so nothing new is stored.
 */
export function WrittenOnlyToggle({ target }: { target: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = document.getElementById(target);
    if (!el) return;
    if (on) el.setAttribute("data-written-only", "");
    else el.removeAttribute("data-written-only");
  }, [on, target]);
  return (
    <label className="written-only">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} /> Only sections with pages
    </label>
  );
}
