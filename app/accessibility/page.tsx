import type { Metadata } from "next";
import Link from "next/link";
import { shareMetadata } from "@/lib/share";

const DESCRIPTION =
  "How Open Cosmology works with screen readers, the keyboard, read-aloud, focus mode, graphs you can hear, symbol explanations and spaced-repetition flashcards, and how to switch each one off.";

export const metadata: Metadata = {
  title: "Accessibility",
  description: DESCRIPTION,
  ...shareMetadata("Accessibility", DESCRIPTION, "website"),
};

/** Keep in step with components/a11y/*, components/Plot.tsx, components/plot/sonify.ts, lib/speech.ts,
 *  components/SymbolPopups.tsx, components/Flashcards.tsx and docs/SCREEN_READER_TESTS.md. */
export default function Accessibility() {
  return (
    <div className="page-narrow prose">
      <h1>Accessibility</h1>
      <p className="lead">
        The site aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA, and to go further where it can.
        Everything below works offline once a course is saved, and none of it sends anything anywhere.
      </p>

      <h2 id="reading-options">Reading options</h2>
      <p>
        The &ldquo;Aa&rdquo; button at the top of every page opens the reading options: text size from 90% to 200%, relaxed or
        wide spacing, an easy-to-read font (Atkinson Hyperlegible) or a dyslexia-friendly font (Lexend), high contrast, shorter
        lines, highlighted links, stopping all animations, focus mode and single-key shortcuts. Your choices are remembered in
        this browser; &ldquo;Reset all&rdquo; undoes them. <kbd>Alt</kbd> + <kbd>+</kbd> and <kbd>Alt</kbd> + <kbd>−</kbd> change
        the text size from anywhere.
      </p>

      <h2 id="focus-mode">Focus mode</h2>
      <p>
        For reading without distractions. Switch it on with the <strong>Focus</strong> button next to &ldquo;Listen to this page&rdquo; on a lesson, or under &ldquo;Focus and keyboard&rdquo; in the reading options; when you scroll back up, a slim bar with search and the reading options (&ldquo;Aa&rdquo;) slides in at the top, so they are always one move away. On every
        page the menus, sidebars and footer disappear, your light or dark theme stays a little quieter, and nothing moves; a bar
        at the bottom has <strong>Exit focus</strong>. On lessons and on reading pages such as this one, one part is shown at a
        time (each section, and on a lesson also the quiz and the flashcards), and the bar adds <strong>Previous</strong>,{" "}
        <strong>Next</strong> and a list of all parts; with single-key shortcuts on, <kbd>j</kbd> and <kbd>k</kbd> move to the
        next and previous part.
      </p>
      <ul>
        <li>Links to a section, and read-aloud moving on to the next section, show the right part.</li>
        <li>
          The browser&apos;s <strong>find in page</strong> still searches the whole lesson in Chrome, Edge and recent Firefox, and
          jumps to the part it finds. In other browsers it searches only the part shown; the bar says so.
        </li>
        <li>Printing always prints the whole lesson.</li>
      </ul>

      <h2 id="keyboard">Keyboard</h2>
      <p>
        Everything works without a mouse, with a visible focus outline and a &ldquo;Skip to content&rdquo; link. Press{" "}
        <kbd>?</kbd> for the list of shortcuts: <kbd>/</kbd> or <kbd>Ctrl</kbd> + <kbd>K</kbd> to search, <kbd>n</kbd> and{" "}
        <kbd>p</kbd> for the next or previous lesson, <kbd>j</kbd> and <kbd>k</kbd> in focus mode, <kbd>w</kbd> and{" "}
        <kbd>Shift</kbd> + <kbd>W</kbd> for the next or previous marked word, <kbd>Esc</kbd> to close a panel or stop reading
        aloud.
      </p>
      <p>
        <strong>Single-key shortcuts</strong> (<kbd>?</kbd> <kbd>/</kbd> <kbd>n</kbd> <kbd>p</kbd> <kbd>j</kbd> <kbd>k</kbd>{" "}
        <kbd>w</kbd>)
        can clash with screen reader commands or speech input. Switch them off under &ldquo;Focus and keyboard&rdquo; in the
        reading options; <kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>Esc</kbd> and the buttons keep working. They never fire while you
        are typing in a field.
      </p>
      <p>
        <strong>Confirmations</strong> (importing progress, resetting flashcards, clearing your progress) open the site&apos;s own
        dialog, never a browser pop-up. Focus moves to &ldquo;Cancel&rdquo;, the safe choice, and stays in the dialog;{" "}
        <kbd>Esc</kbd> or &ldquo;Cancel&rdquo; closes it and returns you to the button you pressed. Actions that remove
        something have a red button. A short message confirms what was done, and screen readers announce it.
      </p>

      <h2 id="maths">Maths you can hear</h2>
      <ul>
        <li>
          <strong>Screen readers</strong>: every formula is also given as MathML, which NVDA (with MathCAT), JAWS, VoiceOver and
          Orca can read and let you explore piece by piece.
        </li>
        <li>
          <strong>Read-aloud</strong>: the listen buttons read a whole page, a section, a worked example or selected text with
          your browser&apos;s voices, and say formulas in words: &ldquo;the limit as x goes to x nought from the right of f of
          x&rdquo;, not symbols. Every formula also has an &ldquo;In words&rdquo; panel with the same wording.
        </li>
        <li>
          <strong>Brackets are spoken</strong>: (A + B) + C is read &ldquo;the quantity A plus B, all plus C&rdquo; and A + (B +
          C) &ldquo;A plus the quantity B plus C&rdquo;, so the two never sound the same. Fractions, roots and powers with more
          than one term are closed the same way (&ldquo;…, all over c&rdquo;, &ldquo;…, end of root&rdquo;, &ldquo;…, end of
          power&rdquo;). The site checks every formula for this when it is built.
        </li>
        <li>
          <strong>Symbols are said by name</strong>, the same as in their explanation: H₀ is &ldquo;H nought&rdquo;, ȧ &ldquo;a
          dot&rdquo;. Where a page uses both a capital and a small letter, the capital is &ldquo;capital R&rdquo;, and a symbol
          such as m is never read as the unit metre.
        </li>
        <li>
          The site checks itself: any part of a formula that read-aloud cannot yet put into words is reported when the site is
          built, so it can be fixed.
        </li>
      </ul>

      <h2 id="graphs">Graphs</h2>
      <p>Every graph is drawn from its formula, and each one comes with:</p>
      <ul>
        <li>a short label for screen readers naming its axes and curves, with its caption as the description;</li>
        <li>
          <strong>Show values as a table</strong>: the curves at evenly spaced points, as a data table, with the current slider
          settings;
        </li>
        <li>
          <strong>Listen to this graph</strong>: the curve played as sound for three seconds, with higher pitch for larger values,
          silence where the curve has no value. With several curves, choose which one. It only plays when you press it, can be
          stopped at any time, and stops when you leave the page;
        </li>
        <li>sliders that work with the arrow keys, and announce their value.</li>
      </ul>
      <p>
        Labels on graphs and diagrams grow with your text size and are placed so they stay inside the graph, clear of the
        lines and of each other, on any screen. A label placed a little away from its point is joined to it by a thin line. On a
        narrow screen at a large text size, a long label on a marked point may not fit beside it: the point then shows a small
        number, and the label is listed under the graph.
      </p>

      <h2 id="symbols">Symbols explained</h2>
      <p>
        Tap, click or focus a symbol in a formula to see what it means <em>on that page</em> (a letter can mean different things
        in different lessons), its unit where it has one, and how to say it, with a link to the full{" "}
        <Link href="/symbols">symbols and notation</Link> list. <kbd>Esc</kbd> closes the explanation. Every lesson also lists its
        symbols near the end, under &ldquo;Symbols on this page&rdquo;.
      </p>

      <h2 id="difficult-words">Difficult words explained</h2>
      <p>
        In a lesson, a word with a thin <strong>dotted underline</strong> has an explanation: tap or click it (or press{" "}
        <kbd>Enter</kbd> or <kbd>Space</kbd> on it) to see what it means <em>in that lesson</em>, how to say it, with a Listen
        button, and where the idea is first explained. Links look different: they are in the accent colour with a solid
        underline. Nothing opens when you only point at a word. On a phone the explanation slides up from the bottom and the word
        stays in view above it; on a wider screen it opens next to the word. <kbd>Esc</kbd>, the close button or a tap elsewhere
        closes it, and the keyboard focus goes back to the word.
      </p>
      <p>
        The marked words are not in the <kbd>Tab</kbd> order, so a paragraph full of terms does not cost many key presses: press{" "}
        <kbd>w</kbd> for the next marked word and <kbd>Shift</kbd> + <kbd>W</kbd> for the previous one, then <kbd>Enter</kbd>.
        Every lesson also lists its words near the end, under &ldquo;Words on this page&rdquo;, with its own Listen button;
        reading a page aloud never stops to read definitions. Screen readers find the same words as links to the{" "}
        <Link href="/glossary">glossary</Link>, where every word is a definition with all its meanings.
      </p>
      <p>
        <strong>Switching it off</strong>: under &ldquo;Explain difficult words&rdquo; in the reading options choose the first use
        on each page (the default), every use, only words of academic English, or <strong>Off</strong>. With Off no words are
        marked; &ldquo;Words on this page&rdquo; stays. Press ☆ to save a word to &ldquo;My words&rdquo;: saved words come back as
        flashcards on <Link href="/review">Review</Link> and stay only in this browser.
      </p>

      <h2 id="flashcards">Flashcards with spaced repetition</h2>
      <p>
        At the end of each lesson, and on <Link href="/review">Review</Link> for all lessons together, flashcards help you
        remember. After turning a card over, rate it: <strong>Again</strong> brings it back later today, and{" "}
        <strong>Hard</strong>, <strong>Good</strong> and <strong>Easy</strong> after a growing number of days. Cards that are
        due come first. Review can export your progress to a file and import it again (for another browser or device), or reset
        it.
      </p>

      <h2 id="answer-boxes">Answer boxes on problem sets</h2>
      <p>
        A problem set has boxes that check your answer: a number, a formula in plain typing such as{" "}
        <code>(a + b)/c</code>, or a choice. Every box has a visible label and lists the names you may type. While you type
        a formula, the site shows what it understood as maths and <strong>in words</strong>, so you can hear it before you
        press Check. The result is given as text with a mark (not by colour alone) and is announced politely by a screen
        reader. Nothing is timed. Hints and solutions are ordinary fold-out blocks: they open with Enter or Space, work
        with find-in-page, and read-aloud reads them only once you have opened them. Where a part has no box, you mark your
        own work after reading the solution: Got it, Partly or Not yet. Without JavaScript the boxes are replaced by a line
        that points to the solution.
      </p>

      <h2 id="contrast">Colour, contrast and motion</h2>
      <ul>
        <li>
          Text meets the 4.5:1 contrast standard in light and dark modes, controls have a 3:1 visible border, and information is
          never shown by colour alone. A high-contrast option and Windows high-contrast mode are supported.
        </li>
        <li>
          Your browser&apos;s own settings are respected: zoom, dark mode and &ldquo;reduce motion&rdquo;. &ldquo;Stop
          animations&rdquo; in the reading options does the same on any device.
        </li>
      </ul>

      <h2 id="privacy">What is stored</h2>
      <p>
        Reading options (including focus mode and shortcuts), study progress and flashcard progress are kept only in this
        browser. Nothing is sent anywhere; see <Link href="/privacy">Privacy</Link> for the full list and how to remove it.
      </p>

      <h2 id="feedback">Something not working?</h2>
      <p>
        The site is tested with keyboard only, in light and dark mode, with reduced motion and at screen widths from 320 pixels,
        and it has a checklist for testing with the NVDA and Orca screen readers. If something is hard to use for you, please open
        an issue on{" "}
        <a href="https://github.com/stefan123-physics/open-cosmology/issues">GitHub</a> so it can be fixed.
      </p>
    </div>
  );
}
