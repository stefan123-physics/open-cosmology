/**
 * "Listen to this graph": plays a curve as a rising and falling pitch with the Web Audio API.
 * Nothing is fetched or stored. Low values → low pitch, high values → high pitch (log scale, 220–880 Hz);
 * where the curve has no value (a gap) the sound is silent. Only ever started by the reader.
 *
 * The start of a sound used to be cut off on a first press: a new audio context starts suspended (iOS) or with
 * a long output delay (Android, Bluetooth), and the first note was scheduled only 0.05 s ahead. Now one context
 * is kept for the page, resumed inside the reader's press, and the curve starts after the device's real output
 * latency.
 */
export type Sonification = { stop: () => void; done: Promise<void> };

let shared: AudioContext | null = null;
function context(): AudioContext | null {
  const AC: typeof AudioContext | undefined =
    typeof window === "undefined" ? undefined : window.AudioContext ?? (window as any).webkitAudioContext;
  if (!AC) return null;
  if (!shared || shared.state === "closed") {
    shared = new AC();
    // Release the audio device when the page goes away.
    window.addEventListener("pagehide", () => shared?.close().catch(() => {}), { once: true });
  }
  return shared;
}

export function playCurve(ys: number[], yRange: [number, number], seconds = 3): Sonification | null {
  if (ys.length < 2) return null;
  const ctx = context();
  if (!ctx) return null;
  // Called synchronously inside the press, so browsers allow the context to start.
  const resumed = ctx.state === "running" ? Promise.resolve() : ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.connect(gain).connect(ctx.destination);
  gain.gain.setValueAtTime(0, ctx.currentTime);

  const [lo, hi] = yRange[1] > yRange[0] ? yRange : [yRange[0] - 1, yRange[0] + 1];
  const fLo = 220;
  const fHi = 880;
  const pitch = (y: number) => {
    const u = Math.min(1, Math.max(0, (y - lo) / (hi - lo)));
    return fLo * Math.pow(fHi / fLo, u);
  };

  let finish: () => void = () => {};
  const done = new Promise<void>((resolve) => (finish = resolve));
  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    try {
      osc.stop();
    } catch {}
    osc.disconnect();
    gain.disconnect();
    finish();
  };
  osc.onended = close;

  resumed
    .catch(() => {})
    .then(() => {
      if (closed) return;
      // Start after what the device needs to get sound out (Bluetooth can take 0.2 s), with a short fade-in.
      const latency = (ctx.baseLatency || 0) + ((ctx as AudioContext & { outputLatency?: number }).outputLatency || 0);
      const t0 = ctx.currentTime + Math.max(0.15, latency + 0.05);
      const dt = seconds / (ys.length - 1);
      const level = 0.18;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      ys.forEach((y, k) => {
        const t = t0 + k * dt;
        if (Number.isFinite(y)) {
          osc.frequency.setValueAtTime(pitch(y), t);
          gain.gain.setTargetAtTime(level, t, 0.01);
        } else {
          gain.gain.setTargetAtTime(0, t, 0.01);
        }
      });
      const end = t0 + seconds;
      gain.gain.setTargetAtTime(0, end, 0.02);
      osc.start(t0);
      osc.stop(end + 0.15);
    });
  return { stop: close, done };
}
