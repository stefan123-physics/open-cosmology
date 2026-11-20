"use client";
import { go } from "@/lib/stale";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { chooseVoice, guessGender, hasBothGenders, languageVoices, loadVoices, type VoiceStyle } from "@/lib/voices";
import { collectChunks, regionLabel, selectionChunks, type Chunk } from "@/lib/read-text";

/**
 * Site-wide read-aloud engine (Web Speech API).
 *
 * - Reads the whole page, one section, one worked example, or the selected text.
 * - Speaks one short chunk at a time and moves on when it ends. Pause = cancel and remember the
 *   position; resume = speak from there. This avoids speechSynthesis.pause()/resume(), which
 *   are unreliable on iOS and Android.
 * - Highlights and scrolls to the part being read.
 * - "Keep reading" continues to the next page of the learning path, so the whole site can be
 *   listened to in order.
 * - Lives in the root layout, so it survives client-side navigation.
 */

type Settings = { style: VoiceStyle; voiceURI: string | null; rate: number; continueNext: boolean };
type Scope = "page" | "section" | "selection";
type Session = { label: string; scope: Scope; total: number };

type Ctx = {
  supported: boolean;
  session: Session | null;
  playing: boolean;
  index: number;
  settings: Settings;
  setSettings: (s: Partial<Settings>) => void;
  voices: SpeechSynthesisVoice[];
  bothGenders: boolean;
  /** Which voice is actually used and whether it matched the requested gender */
  current: { name: string; genderMatched: boolean };
  readPage: () => void;
  readRegion: (root: Element, label?: string) => void;
  readSelection: () => boolean;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  skip: (delta: number) => void;
  preview: () => void;
};

const SpeechContext = createContext<Ctx | null>(null);
export const useSpeech = () => useContext(SpeechContext);

const DEFAULTS: Settings = { style: "a", voiceURI: null, rate: 1, continueNext: false };
const STORE_KEY = "read-aloud-settings";

function pageRoot(): Element {
  return document.querySelector("[data-read-root]") ?? document.querySelector("main") ?? document.body;
}

export function SpeechProvider({ children }: { children: React.ReactNode }) {
  const [supported, setSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [settings, setSettingsState] = useState<Settings>(DEFAULTS);
  const [session, setSession] = useState<Session | null>(null);
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [selBtn, setSelBtn] = useState<{ top: number; left: number } | null>(null);

  const chunksRef = useRef<Chunk[]>([]);
  const indexRef = useRef(0);
  const genRef = useRef(0);
  /** True when the next utterance starts a session and should be preceded by a silent primer (see speakAt). */
  const primeRef = useRef(false);
  const settingsRef = useRef(settings);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const sessionRef = useRef<Session | null>(null);
  const highlighted = useRef<HTMLElement | null>(null);
  const autoReadPath = useRef<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const lang = typeof document !== "undefined" ? document.documentElement.lang || "en-US" : "en-US";

  // ---------- setup ----------
  useEffect(() => {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
    setSupported(true);
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) ?? "null");
      if (saved) setSettingsState({ ...DEFAULTS, ...saved });
    } catch {}
    loadVoices().then((v) => {
      voicesRef.current = v;
      setVoices(v);
    });
    const onChange = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
      setVoices(voicesRef.current);
    };
    window.speechSynthesis.addEventListener?.("voiceschanged", onChange);
    const onUnload = () => window.speechSynthesis.cancel();
    window.addEventListener("pagehide", onUnload);
    return () => {
      window.speechSynthesis.removeEventListener?.("voiceschanged", onChange);
      window.removeEventListener("pagehide", onUnload);
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);

  const clearHighlight = () => {
    highlighted.current?.classList.remove("tts-active");
    highlighted.current = null;
  };
  const highlight = (el: HTMLElement) => {
    if (highlighted.current === el) return;
    clearHighlight();
    if (el === document.body) return;
    el.classList.add("tts-active");
    highlighted.current = el;
    const r = el.getBoundingClientRect();
    const bar = 110; // keep clear of the player bar
    if (r.top < 70 || r.bottom > window.innerHeight - bar) {
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    }
  };

  // ---------- engine ----------
  const finish = useCallback(() => {
    clearHighlight();
    setPlaying(false);
    const s = sessionRef.current;
    const next = document.querySelector<HTMLElement>("[data-next-href]")?.dataset.nextHref;
    if (s?.scope === "page" && settingsRef.current.continueNext && next) {
      autoReadPath.current = next;
      go(next, router.push);
      return;
    }
    sessionRef.current = null;
    setSession(null);
  }, [router]);

  const speakAt = useCallback(
    (i: number) => {
      const synth = window.speechSynthesis;
      const gen = ++genRef.current;
      const chunks = chunksRef.current;
      if (i >= chunks.length) {
        finish();
        return;
      }
      i = Math.max(0, i);
      indexRef.current = i;
      setIndex(i);
      setPlaying(true);
      const c = chunks[i];
      highlight(c.el);
      const st = settingsRef.current;
      const choice = chooseVoice(voicesRef.current, lang, st.style, st.voiceURI);
      const u = new SpeechSynthesisUtterance(c.text);
      if (choice.voice) {
        u.voice = choice.voice;
        u.lang = choice.voice.lang;
      } else u.lang = lang;
      u.pitch = choice.pitch;
      u.rate = st.rate;
      u.onend = () => {
        if (gen === genRef.current) speakAt(i + 1);
      };
      u.onerror = (e) => {
        if (gen !== genRef.current || e.error === "interrupted" || e.error === "canceled") return;
        if (e.error === "not-allowed") {
          // Autoplay blocked (e.g. iOS after navigation): wait for the user to press play.
          setPlaying(false);
          return;
        }
        speakAt(i + 1);
      };
      if (synth.paused) synth.resume();
      // A cold engine (the first press, or after a while: Chrome and Edge, above all their online voices) starts
      // late and cuts off the start of the first utterance, often the one-word page title. So a session opens with a
      // silent primer, queued in the same tap (iOS only lets speech start from one).
      if (primeRef.current && !synth.speaking && !synth.pending) {
        primeRef.current = false;
        const primer = new SpeechSynthesisUtterance(",");
        primer.volume = 0;
        primer.rate = u.rate;
        primer.lang = u.lang;
        if (u.voice) primer.voice = u.voice;
        synth.speak(primer);
        // Voices not loaded yet (Chrome, Android load them late): wait for them, so the voice does not change after
        // the first sentence. The primer above already counts as the tap that allows speech.
        if (!voicesRef.current.length) {
          loadVoices(1500).then((v) => {
            voicesRef.current = v;
            setVoices(v);
            if (gen === genRef.current) speakAt(i);
          });
          return;
        }
        synth.speak(u);
        return;
      }
      if (synth.speaking || synth.pending) {
        synth.cancel();
        // Some engines drop an utterance queued in the same tick as cancel().
        setTimeout(() => gen === genRef.current && synth.speak(u), 60);
      } else {
        synth.speak(u); // synchronous, so it counts as a user gesture on iOS
      }
    },
    [finish, lang]
  );

  const start = useCallback(
    (chunks: Chunk[], label: string, scope: Scope) => {
      if (!chunks.length) return;
      chunksRef.current = chunks;
      primeRef.current = true;
      const s = { label, scope, total: chunks.length };
      sessionRef.current = s;
      setSession(s);
      setSelBtn(null);
      speakAt(0);
    },
    [speakAt]
  );

  const readPage = useCallback(() => {
    const root = pageRoot();
    const title = root.querySelector("h1")?.textContent?.trim() || document.title;
    start(collectChunks(root), title, "page");
  }, [start]);

  const readRegion = useCallback(
    (root: Element, label?: string) => start(collectChunks(root), label || regionLabel(root) || "Section", "section"),
    [start]
  );

  const readSelection = useCallback(() => {
    const chunks = selectionChunks();
    if (!chunks) return false;
    start(chunks, "Selected text", "selection");
    return true;
  }, [start]);

  const pause = useCallback(() => {
    genRef.current++;
    window.speechSynthesis.cancel();
    setPlaying(false);
  }, []);
  const resume = useCallback(() => speakAt(indexRef.current), [speakAt]);
  const stop = useCallback(() => {
    genRef.current++;
    window.speechSynthesis.cancel();
    clearHighlight();
    setPlaying(false);
    sessionRef.current = null;
    setSession(null);
    autoReadPath.current = null;
  }, []);
  const skip = useCallback(
    (delta: number) => {
      const chunks = chunksRef.current;
      let i = indexRef.current;
      // Jump by whole blocks (paragraphs), not sentence pieces.
      const el = chunks[i]?.el;
      if (delta > 0) {
        while (i < chunks.length && chunks[i].el === el) i++;
      } else {
        while (i > 0 && chunks[i - 1].el === el) i--;
        if (i > 0) {
          const prevEl = chunks[i - 1].el;
          i--;
          while (i > 0 && chunks[i - 1].el === prevEl) i--;
        }
      }
      speakAt(Math.min(i, chunks.length));
    },
    [speakAt]
  );

  const setSettings = useCallback(
    (patch: Partial<Settings>) => {
      const next = { ...settingsRef.current, ...patch };
      if (patch.style && !("voiceURI" in patch)) next.voiceURI = null;
      settingsRef.current = next; // the engine reads this synchronously
      setSettingsState(next);
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(next));
      } catch {}
      // Apply a new voice or speed straight away.
      if ((patch.style || "voiceURI" in patch || patch.rate) && sessionRef.current && genRef.current) {
        const synth = window.speechSynthesis;
        if (synth.speaking) speakAt(indexRef.current);
      }
    },
    [speakAt]
  );

  const preview = useCallback(() => {
    if (sessionRef.current) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const st = settingsRef.current;
    const choice = chooseVoice(voicesRef.current, lang, st.style, st.voiceURI);
    const u = new SpeechSynthesisUtterance("This is how the read-aloud voice sounds.");
    if (choice.voice) {
      u.voice = choice.voice;
      u.lang = choice.voice.lang;
    }
    u.pitch = choice.pitch;
    u.rate = st.rate;
    // Silent primer, so a cold engine does not cut off "This" (see speakAt).
    const primer = new SpeechSynthesisUtterance(",");
    primer.volume = 0;
    if (u.voice) primer.voice = u.voice;
    synth.speak(primer);
    synth.speak(u);
  }, [lang]);

  // ---------- navigation ----------
  useEffect(() => {
    if (!supported) return;
    if (autoReadPath.current && pathname === autoReadPath.current.split("#")[0]) {
      autoReadPath.current = null;
      // Wait for the new page's content, then keep reading.
      let tries = 0;
      const t = setInterval(() => {
        const root = document.querySelector<HTMLElement>("[data-read-root]");
        if ((root && root.dataset.path === pathname) || ++tries > 40) {
          clearInterval(t);
          readPage();
        }
      }, 100);
      return () => clearInterval(t);
    }
    if (sessionRef.current) stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, supported]);

  // ---------- selection button ----------
  useEffect(() => {
    if (!supported) return;
    let timer: ReturnType<typeof setTimeout>;
    const onSel = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || sel.toString().trim().length < 2) return setSelBtn(null);
        const range = sel.getRangeAt(0);
        const host = range.commonAncestorContainer.parentElement ?? (range.commonAncestorContainer as Element);
        if (!host?.closest?.("main") || host.closest(".tts-bar")) return setSelBtn(null);
        const r = range.getBoundingClientRect();
        // Half the button's width, which grows with the reader's text size (button is ~11rem wide).
        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        const vw = document.documentElement.clientWidth;
        const half = Math.min(5.75 * rem + 8, vw / 2);
        const left = Math.min(Math.max(r.left + r.width / 2, half), vw - half);
        // Below the selection so it doesn't clash with the phone's own selection menu.
        setSelBtn({ top: r.bottom + window.scrollY + 10, left });
      }, 250);
    };
    document.addEventListener("selectionchange", onSel);
    return () => {
      document.removeEventListener("selectionchange", onSel);
      clearTimeout(timer);
    };
  }, [supported]);

  // Escape stops reading.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sessionRef.current) stop();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stop]);

  const bothGenders = useMemo(() => hasBothGenders(voices, lang), [voices, lang]);
  const current = useMemo(() => {
    const c = chooseVoice(voices, lang, settings.style, settings.voiceURI);
    return { name: c.voice?.name ?? "Default voice", genderMatched: c.genderMatched };
  }, [voices, lang, settings.style, settings.voiceURI]);

  const ctx: Ctx = {
    supported,
    session,
    playing,
    index,
    settings,
    setSettings,
    voices,
    bothGenders,
    current,
    readPage,
    readRegion,
    readSelection,
    pause,
    resume,
    stop,
    skip,
    preview,
  };

  return (
    <SpeechContext.Provider value={ctx}>
      {children}
      {supported && selBtn && !session && (
        <button
          className="tts-selection"
          style={{ top: selBtn.top, left: selBtn.left }}
          onMouseDown={(e) => e.preventDefault()}
          onClick={readSelection}
        >
          <SpeakerIcon /> Read selection
        </button>
      )}
      {supported && session && (
        <PlayerBar ctx={ctx} panelOpen={panelOpen} setPanelOpen={setPanelOpen} lang={lang} />
      )}
    </SpeechContext.Provider>
  );
}

// ---------- UI ----------

function PlayerBar({
  ctx,
  panelOpen,
  setPanelOpen,
  lang,
}: {
  ctx: Ctx;
  panelOpen: boolean;
  setPanelOpen: (b: boolean) => void;
  lang: string;
}) {
  const { session, playing, index } = ctx;
  if (!session) return null;
  const pct = Math.round(((index + (playing ? 0.5 : 0)) / session.total) * 100);
  return (
    <div className="tts-bar" role="region" aria-label="Read-aloud player" data-noread>
      <div className="tts-progress" style={{ width: `${pct}%` }} />
      {panelOpen && <VoicePanel ctx={ctx} lang={lang} inBar />}
      <div className="tts-row">
        <div className="tts-info">
          <span className="tts-now">{playing ? "Reading" : "Paused"}</span>
          <span className="tts-label">{session.label}</span>
        </div>
        <div className="tts-controls">
          <button className="icon" onClick={() => ctx.skip(-1)} aria-label="Previous paragraph" title="Previous paragraph">
            ⏮
          </button>
          {playing ? (
            <button className="icon primary" onClick={ctx.pause} aria-label="Pause" title="Pause">
              ❚❚
            </button>
          ) : (
            <button className="icon primary" onClick={ctx.resume} aria-label="Play" title="Play">
              ▶
            </button>
          )}
          <button className="icon" onClick={() => ctx.skip(1)} aria-label="Next paragraph" title="Next paragraph">
            ⏭
          </button>
          <button className="icon" onClick={ctx.stop} aria-label="Stop reading" title="Stop (Esc)">
            ■
          </button>
          <button
            className={`icon ${panelOpen ? "on" : ""}`}
            onClick={() => setPanelOpen(!panelOpen)}
            aria-expanded={panelOpen}
            aria-label="Voice and speed settings"
            title="Voice and speed"
          >
            ⚙
          </button>
        </div>
      </div>
    </div>
  );
}

export function VoicePanel({ ctx, lang, inBar = false }: { ctx: Ctx; lang: string; inBar?: boolean }) {
  const { settings, setSettings, voices, bothGenders, current } = ctx;
  const list = languageVoices(voices, lang);
  const hasNext = typeof document !== "undefined" && !!document.querySelector("[data-next-href]");
  const [a, b] = bothGenders ? ["Female", "Male"] : ["Higher", "Lower"];
  return (
    <div className={`tts-panel ${inBar ? "in-bar" : ""}`}>
      <div className="tts-field">
        <span className="tts-field-label">Voice</span>
        <div className="seg" role="radiogroup" aria-label="Voice">
          <button role="radio" aria-checked={settings.style === "a" && !settings.voiceURI} className={settings.style === "a" && !settings.voiceURI ? "on" : ""} onClick={() => setSettings({ style: "a" })}>
            {a}
          </button>
          <button role="radio" aria-checked={settings.style === "b" && !settings.voiceURI} className={settings.style === "b" && !settings.voiceURI ? "on" : ""} onClick={() => setSettings({ style: "b" })}>
            {b}
          </button>
        </div>
      </div>
      {!bothGenders && (
        <p className="tts-hint">
          This device has no separate female and male voices, so the same voice is used at a higher or lower pitch.
        </p>
      )}
      {list.length > 1 && (
        <label className="tts-field">
          <span className="tts-field-label">Exact voice</span>
          <select value={settings.voiceURI ?? ""} onChange={(e) => setSettings({ voiceURI: e.target.value || null })}>
            <option value="">Automatic ({current.name})</option>
            {list.map((v) => {
              const g = guessGender(v);
              return (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} · {v.lang}
                  {g !== "unknown" ? ` · ${g}` : ""}
                </option>
              );
            })}
          </select>
        </label>
      )}
      <label className="tts-field">
        <span className="tts-field-label">Speed</span>
        <select value={settings.rate} onChange={(e) => setSettings({ rate: Number(e.target.value) })}>
          {[0.75, 0.9, 1, 1.15, 1.3, 1.5, 1.75, 2].map((r) => (
            <option key={r} value={r}>
              {r}×
            </option>
          ))}
        </select>
      </label>
      {hasNext && (
        <label className="tts-check">
          <input type="checkbox" checked={settings.continueNext} onChange={(e) => setSettings({ continueNext: e.target.checked })} />
          Keep reading: go on to the next page when this one ends
        </label>
      )}
      {!ctx.session && (
        <button className="secondary small" onClick={ctx.preview}>
          Test voice
        </button>
      )}
    </div>
  );
}

export function SpeakerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}
