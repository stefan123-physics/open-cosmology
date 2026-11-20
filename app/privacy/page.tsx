import type { Metadata } from "next";
import Link from "next/link";
import { shareMetadata } from "@/lib/share";

const DESCRIPTION =
  "What Open Cosmology stores (only on your device), what its host logs, and the one read-aloud setting that can send text elsewhere.";

export const metadata: Metadata = {
  title: "Privacy",
  description: DESCRIPTION,
  ...shareMetadata("Privacy", DESCRIPTION, "website"),
};

/** Keep this page in step with the code: lib/progress.ts, lib/flashcards.ts, lib/saved-words.ts, lib/backup.ts, lib/reading-options.ts, components/speech/SpeechProvider.tsx,
 *  components/ThemeToggle.tsx, components/offline/*, public/sw.js. */
export default function Privacy() {
  return (
    <div className="page-narrow prose">
      <h1>Privacy</h1>
      <p className="lead">
        Open Cosmology has no accounts, no cookies, no advertising and no tracking or visitor statistics. What it remembers for
        you stays in your own browser.
      </p>

      <h2 id="on-your-device">What is stored on your device</h2>
      <p>These are kept in your browser&apos;s storage for this site. They are never sent to the site or to anyone else.</p>
      <ul>
        <li>
          <strong>Your study progress</strong>: which lessons you marked as studied, your best quiz scores and the last lesson
          you opened (for &ldquo;Continue where you left off&rdquo;). On problem sets the same record also holds, for each
          answer box, how often you tried, whether you were right, whether you opened the solution first and how you marked
          your own work, which together give your score. Your typed answers themselves are not kept.
        </li>
        <li>
          <strong>Your flashcard progress</strong>: for each flashcard you have rated, when it is next due and how well you
          knew it (for the spaced repetition on <Link href="/review">Review</Link>).
        </li>
        <li>
          <strong>My words</strong>: the glossary words you saved with &ldquo;Save to my words&rdquo; (☆), each with the
          date you saved it. They appear on the <Link href="/glossary">Glossary</Link> page and as flashcards on{" "}
          <Link href="/review">Review</Link>. Which words you look up is not recorded anywhere.
        </li>
        <li>
          <strong>Your reading options</strong>: text size, spacing, font, contrast, line length, link highlighting, animations,
          focus mode, whether one-key shortcuts are on, and which difficult words are marked in lessons.
        </li>
        <li>
          <strong>Read-aloud settings</strong>: the voice, speed and similar choices.
        </li>
        <li>
          <strong>Light or dark mode</strong>, if you chose one with the theme button.
        </li>
        <li>
          <strong>Offline copies</strong>: courses you saved for offline use, and copies of the last 60 pages you opened (they
          were downloaded anyway, and let you reread them without a connection). A small background script (a service worker)
          serves these when you are offline and keeps saved copies up to date.
        </li>
        <li>
          For the current browser session only: whether you dismissed the &ldquo;new version available&rdquo; notice.
        </li>
      </ul>

      <h2 id="removing">Removing it</h2>
      <ul>
        <li>
          Study progress: &ldquo;Clear my progress&rdquo; on the <Link href="/">home page</Link>.
        </li>
        <li>
          Flashcard progress: &ldquo;Reset flashcard progress&rdquo; on <Link href="/review">Review</Link>. The same page can
          export your progress to a file and import it again; the file is made and read in your browser and never uploaded.
        </li>
        <li>
          My words: the remove button next to each word under &ldquo;My words&rdquo; on the <Link href="/glossary">Glossary</Link>{" "}
          page, or the ★ next to a word. They are included when you export your progress on Review.
        </li>
        <li>Reading options: &ldquo;Reset all&rdquo; in Reading options (the &ldquo;Aa&rdquo; button).</li>
        <li>Offline copies: &ldquo;Remove offline copies&rdquo; in Reading options.</li>
        <li>Everything at once: clear this site&apos;s data in your browser&apos;s settings.</li>
      </ul>

      <h2 id="nothing-else">Nothing loaded from other sites</h2>
      <p>
        Fonts, formulas, graphs, search, the PhET simulations are all served from this
        site itself, so opening a page does not contact any other company. Links to other sites (MIT OpenCourseWare, PhET, arXiv,
        GitHub and others) are only followed when you click them, and they open in a new
        tab without telling the other site which page you came from; those sites then have their own privacy policies.
      </p>
      <p>
        Search runs entirely in your browser. When you search, it downloads small parts of this site&apos;s own search index
        (from <code>/pagefind/</code>) and searches them on your device. What you type is not sent to any server; each part
        covers a range of words, so this site&apos;s host can at most see which part of the index was needed. The parts it
        has used are kept with the site&apos;s other files in your browser&apos;s cache, and saving the site for offline use
        saves the whole index (about 1 MB) so you can search offline too. &ldquo;Remove offline copies&rdquo; deletes them.
      </p>

      <h2 id="read-aloud">Read-aloud voices</h2>
      <p>
        Read-aloud uses the voices of your own browser and device. Most run on the device, but some online voices, such as the
        &ldquo;Google&rdquo; voices in Chrome and the &ldquo;Online&rdquo; voices in Microsoft Edge, send the text being read to
        Google or Microsoft to produce the sound. If you prefer that no text leaves your device, choose a voice without
        &ldquo;Google&rdquo; or &ldquo;Online&rdquo; in its name in the read-aloud settings.
      </p>

      <h2 id="hosting">Hosting</h2>
      <p>
        The site is hosted by <a href="https://vercel.com">Vercel</a>. Like every web host, Vercel&apos;s servers record technical
        information about each request (such as the IP address, the page requested, the time and the browser) to deliver the
        site and protect it against abuse. Open Cosmology does not use these records to identify or follow visitors. See{" "}
        <a href="https://vercel.com/legal/privacy-policy">Vercel&apos;s privacy policy</a> for how it handles them.
      </p>

      <h2 id="feedback">Reporting mistakes and other feedback</h2>
      <p>
        Mistakes and suggestions are collected as issues on{" "}
        <a href="https://github.com/raimonvibe/open-cosmology/issues">GitHub</a>. Issues there are public and need a GitHub
        account; GitHub&apos;s own privacy policy applies. Please do not put personal information in an issue.
      </p>

      <h2 id="changes">Changes</h2>
      <p>
        If the site ever starts storing or sending anything else, for example cookie-free visitor statistics, this page will say
        so first. Last updated 19 November 2026.
      </p>
    </div>
  );
}
