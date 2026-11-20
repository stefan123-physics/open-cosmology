/**
 * Voice selection for the Web Speech API.
 *
 * Browsers do not report a voice's gender, and every platform ships different voices:
 *  - iPhone / iPad / macOS: named voices (Samantha, Daniel, Karen, …)
 *  - Windows / Edge: "Microsoft Zira", "Microsoft David", "… Online (Natural)" voices
 *  - Chrome desktop: "Google US English", "Google UK English Female/Male"
 *  - Android: often just one voice per language ("English United States"), sometimes
 *    variant ids such as "en-us-x-tpf-local"
 * So we guess the gender from the voice name where that is reliable. When the device has no
 * recognisably female or male voice, we fall back to one voice spoken at a higher or lower
 * pitch, and the interface says "Higher" / "Lower" instead of "Female" / "Male".
 */

export type VoiceStyle = "a" | "b"; // a = female / higher, b = male / lower
export type Gender = "female" | "male" | "unknown";

const FEMALE = new Set(
  (
    "samantha victoria karen moira tessa fiona veena allison ava susan nicky martha catherine serena kate zoe joelle noelle " +
    "matilda isha sangeeta kathy princess vicki agnes shelley flo sandy zira hazel heera linda aria jenny sonia libby michelle " +
    "ana emma natasha clara emily neerja molly luna leah ava jessa sara siri amelie anna alice ellen kyoko mei-jia melina " +
    "paulina monica yuna tingting sinji laura nora ioana mariska zuzana yelda carmit lekha damayanti satu milena"
  ).split(" ")
);
const MALE = new Set(
  (
    "alex daniel fred rishi tom aaron arthur gordon oliver evan nathan lee ralph albert bruce junior grandpa rocko eddy reed " +
    "david mark george ravi james richard guy ryan christopher eric brian andrew steffan roger thomas william liam connor " +
    "prabhat mitchell wayne luke jorge diego juan xander maged yuri otoya thomas luca rocko"
  ).split(" ")
);
/** Android/Google TTS variant codes (best effort; not every device exposes them). */
const ANDROID_FEMALE = /-x-(iob|iog|sfg|tpc|tpf|gba|gbc|gbg|aua|auc|ena|enc)\b/i;
const ANDROID_MALE = /-x-(iol|iom|tpd|gbb|gbd|rjs|aub|aud|end|ene)\b/i;

export function guessGender(v: SpeechSynthesisVoice): Gender {
  const name = v.name.toLowerCase();
  if (/\bfemale\b|\bwoman\b/.test(name)) return "female";
  if (/\bmale\b|\bman\b/.test(name)) return "male";
  if (ANDROID_FEMALE.test(name) || ANDROID_FEMALE.test(v.voiceURI)) return "female";
  if (ANDROID_MALE.test(name) || ANDROID_MALE.test(v.voiceURI)) return "male";
  if (name === "google us english") return "female";
  const words = name.replace(/[()]/g, " ").split(/[\s-]+/);
  for (const w of words) {
    if (FEMALE.has(w)) return "female";
    if (MALE.has(w)) return "male";
  }
  return "unknown";
}

/** Higher is better: natural/neural voices first, then the user's regional variant, then local voices. */
function quality(v: SpeechSynthesisVoice, lang: string): number {
  const n = v.name.toLowerCase();
  let q = 0;
  if (/natural|neural|premium|enhanced|siri/.test(n)) q += 40;
  if (/google/.test(n)) q += 15;
  if (v.lang.toLowerCase() === lang.toLowerCase()) q += 20;
  else if (v.lang.toLowerCase().startsWith("en-us") || v.lang.toLowerCase().startsWith("en-gb")) q += 10;
  if (v.default) q += 5;
  if (v.localService) q += 3; // works offline and starts faster
  // Novelty voices on Apple devices
  if (/bells|boing|bubbles|cellos|whisper|zarvox|trinoids|bad news|good news|organ|jester|superstar|wobble|albert|grandma|grandpa|rocko|eddy|flo|reed|sandy|shelley/.test(n)) q -= 100;
  return q;
}

export type VoiceChoice = {
  voice: SpeechSynthesisVoice | null;
  pitch: number;
  /** true when a voice of the requested gender was found; false when we fall back to pitch */
  genderMatched: boolean;
};

export function languageVoices(voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice[] {
  const base = lang.split("-")[0].toLowerCase();
  return voices
    .filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith(base))
    .sort((a, b) => quality(b, lang) - quality(a, lang));
}

/** Does this device have at least one female and one male voice for the language? */
export function hasBothGenders(voices: SpeechSynthesisVoice[], lang: string): boolean {
  const list = languageVoices(voices, lang);
  return list.some((v) => guessGender(v) === "female") && list.some((v) => guessGender(v) === "male");
}

export function chooseVoice(
  voices: SpeechSynthesisVoice[],
  lang: string,
  style: VoiceStyle,
  exactURI?: string | null
): VoiceChoice {
  const list = languageVoices(voices, lang);
  if (exactURI) {
    const v = voices.find((x) => x.voiceURI === exactURI);
    if (v) return { voice: v, pitch: 1, genderMatched: true };
  }
  const want: Gender = style === "a" ? "female" : "male";
  const match = list.find((v) => guessGender(v) === want);
  if (match && hasBothGenders(voices, lang)) return { voice: match, pitch: 1, genderMatched: true };
  // Fallback: best available voice, pitched up or down.
  return { voice: list[0] ?? null, pitch: style === "a" ? 1.25 : 0.75, genderMatched: false };
}

/** Wait until the browser has loaded its voices (Chrome and Android load them asynchronously). */
export function loadVoices(timeoutMs = 2500): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;
    const now = synth.getVoices();
    if (now.length) return resolve(now);
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      clearInterval(poll);
      synth.removeEventListener?.("voiceschanged", finish);
      resolve(synth.getVoices());
    };
    synth.addEventListener?.("voiceschanged", finish);
    // Safari does not always fire voiceschanged, so poll as well.
    const poll = setInterval(() => synth.getVoices().length && finish(), 150);
    setTimeout(finish, timeoutMs);
  });
}
