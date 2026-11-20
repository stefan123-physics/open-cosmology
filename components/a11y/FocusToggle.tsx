"use client";
import { useEffect, useState } from "react";
import { applyOptions, loadOptions, saveOptions } from "@/lib/reading-options";

/**
 * "Focus" in a lesson's toolbar, next to "Listen to this page": switches focus mode on and off (the same reading
 * option as in Reading options). The header it sits in stays visible in focus mode, so it also switches it off.
 */
export function FocusToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const read = () => setOn(html.dataset.focus === "on");
    read();
    const obs = new MutationObserver(read);
    obs.observe(html, { attributes: true, attributeFilter: ["data-focus"] });
    return () => obs.disconnect();
  }, []);
  return (
    <button
      type="button"
      className="secondary focus-toggle"
      aria-pressed={on}
      title="Focus mode: menus hidden, one section at a time (also in Reading options)"
      onClick={() => {
        const o = { ...loadOptions(), focus: on ? ("off" as const) : ("on" as const) };
        applyOptions(o);
        saveOptions(o);
        if (!on) setTimeout(() => document.querySelector<HTMLElement>(".focus-bar button:not([disabled])")?.focus(), 150);
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      </svg>
      {on ? "Exit focus" : "Focus"}
    </button>
  );
}
