"use client";
import { useRef, useState } from "react";
import { SpeakerIcon, useSpeech, VoicePanel } from "./SpeechProvider";

/** "Listen to this page" with a quick voice switch and a settings popover. Used in page headers. */
export function ReadPageControls() {
  const s = useSpeech();
  const [open, setOpen] = useState(false);
  if (!s?.supported) return null;
  const reading = s.session?.scope === "page";
  const [a, b] = s.bothGenders ? ["Female", "Male"] : ["Higher", "Lower"];
  return (
    <div className="read-controls" data-noread>
      {reading ? (
        <button onClick={s.playing ? s.pause : s.resume}>{s.playing ? "❚❚ Pause" : "▶ Resume"}</button>
      ) : (
        <button onClick={s.readPage}>
          <SpeakerIcon /> Listen to this page
        </button>
      )}
      <div className="seg small" role="radiogroup" aria-label="Voice">
        <button role="radio" aria-checked={s.settings.style === "a"} className={s.settings.style === "a" ? "on" : ""} onClick={() => s.setSettings({ style: "a" })}>
          {a}
        </button>
        <button role="radio" aria-checked={s.settings.style === "b"} className={s.settings.style === "b" ? "on" : ""} onClick={() => s.setSettings({ style: "b" })}>
          {b}
        </button>
      </div>
      <button className="secondary small" aria-expanded={open} onClick={() => setOpen(!open)}>
        ⚙ Voice &amp; speed
      </button>
      {open && <VoicePanel ctx={s} lang={document.documentElement.lang || "en-US"} />}
      <span className="read-hint muted small">Tip: select any text to hear just that part.</span>
    </div>
  );
}

/** Small ▶ button that reads the nearest section, worked example or callout. */
export function ReadSectionButton({ scope = "section, .worked-example, .callout", label }: { scope?: string; label?: string }) {
  const s = useSpeech();
  const ref = useRef<HTMLButtonElement>(null);
  if (!s?.supported) return null;
  return (
    <button
      ref={ref}
      type="button"
      className="read-section"
      data-noread
      aria-label={label ? `Read aloud: ${label}` : "Read this part aloud"}
      title="Read this part aloud"
      onClick={() => {
        const root = ref.current?.closest(scope);
        if (root) s.readRegion(root, label);
      }}
    >
      <SpeakerIcon />
    </button>
  );
}

/** Read "Symbols on this page": opens the list (it is folded away by default, and hidden text is not read), then
 *  reads each symbol's name, meaning and unit. "Listen to this page" leaves the list out. */
export function ReadSymbolsButton() {
  const s = useSpeech();
  const ref = useRef<HTMLButtonElement>(null);
  if (!s?.supported) return null;
  return (
    <button
      ref={ref}
      type="button"
      className="read-section"
      data-noread
      aria-label="Read aloud: Symbols on this page"
      title="Read the symbols aloud"
      onClick={() => {
        const root = ref.current?.closest(".page-symbols");
        if (!root) return;
        const details = root.querySelector("details");
        if (details) details.open = true;
        s.readRegion(root, "Symbols on this page");
      }}
    >
      <SpeakerIcon />
    </button>
  );
}

/** Read "Words on this page" (components/PageTerms.tsx): opens the list, then reads each word and its meaning here.
 *  "Listen to this page" leaves the list out, and never reads definitions in the middle of the text. */
export function ReadTermsButton() {
  const s = useSpeech();
  const ref = useRef<HTMLButtonElement>(null);
  if (!s?.supported) return null;
  return (
    <button
      ref={ref}
      type="button"
      className="read-section"
      data-noread
      aria-label="Read aloud: Words on this page"
      title="Read the words and their meanings aloud"
      onClick={() => {
        const root = ref.current?.closest(".page-terms");
        if (!root) return;
        const details = root.querySelector("details");
        if (details) details.open = true;
        s.readRegion(root, "Words on this page");
      }}
    >
      <SpeakerIcon />
    </button>
  );
}

/** Header button: read the current page (any page on the site). */
export function HeaderListenButton() {
  const s = useSpeech();
  if (!s?.supported) return null;
  const active = !!s.session;
  return (
    <button
      className={`header-listen ${active ? "on" : ""}`}
      onClick={() => (active ? s.stop() : s.readPage())}
      aria-label={active ? "Stop reading aloud" : "Read this page aloud"}
      title={active ? "Stop reading" : "Read this page aloud"}
    >
      <SpeakerIcon />
      <span className="hide-sm">{active ? "Stop" : "Listen"}</span>
    </button>
  );
}
