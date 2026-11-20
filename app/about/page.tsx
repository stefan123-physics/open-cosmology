import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About & license" };

export default function About() {
  return (
    <div className="page-narrow prose">
      <h1>About Open Cosmology</h1>
      <p>
        Open Cosmology is a free, non-commercial, complete university programme in physics that leads to cosmology: a four-year
        bachelor&apos;s core and a fifth, graduate year. Every lecture of every course is covered, following MIT&apos;s
        undergraduate physics curriculum (and, in Year V, two MIT graduate courses: 8.902 Astrophysics II and 8.962 General
        Relativity) and, inside each course, MIT&apos;s own lecture order. Cosmology is the destination and the largest part, and the earlier courses show where each
        idea is used in cosmology.
      </p>
      <p className="personal-note">
        The site owner&apos;s personal reflections on faith and the beginning, separate from the course material:{" "}
        <Link href="/wonder">Wonder</Link>.
      </p>

      <h2 id="highschool">The High School</h2>
      <p>
        Before Year I comes the <Link href="/highschool">High School</Link>: a pre-university course in physics, at about the
        level of the last years of Dutch secondary school (VWO), for a complete beginner. Its nine blocks run from a maths
        toolkit to the Big Bang, the cosmic microwave background and dark matter, and every block ends with &ldquo;Towards the
        universe&rdquo;. Its pages have their own colours (a school notebook in light mode, aubergine in dark mode), so you can
        see which part of the site you are in; everything else, including your progress and settings, is shared with the
        university years.
      </p>
      <p>
        The High School&apos;s lesson lists are in place and its lessons are being written. Its first lessons were based on
        OpenStax textbooks; they were taken down on 20 November 2026, because OpenStax does not allow its books to be read by AI
        tools without its permission, and will be written again from other sources.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          Pages are rewritten in our own words from <a href="https://ocw.mit.edu">MIT OpenCourseWare</a> lectures and course
          notes, which MIT publishes under{" "}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. Every page credits the course, the
          instructors and the lecture it follows, and every displayed formula links to its source.
        </li>
        <li>
          The dark matter course in Year V follows an open textbook instead of an MIT course: Ignacio Ferreras,{" "}
          <a href="https://doi.org/10.14324/111.9781800084704">
            <em>Fundamentals of Dark Matter</em>
          </a>{" "}
          (UCL Press, 2025), licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>. Its pages are rewritten in our own words
          and credit the book; figures the book uses from other copyright holders are not reused. Sections already covered by
          the MIT courses link to those pages instead of repeating them.
        </li>
        <li>
          Material MIT marks “All rights reserved” is never reused; we draw our own diagrams instead. “Courtesy of …” credits are
          kept wherever such material is referenced.
        </li>
        <li>
          David Tong&apos;s lecture notes and the Feynman Lectures on Physics are used only to fact-check, never copied. OpenStax and
          LibreTexts content is not used.
        </li>
        <li>
          Interactive simulations on early pages are by{" "}
          <a href="https://phet.colorado.edu">PhET Interactive Simulations</a>, University of Colorado Boulder, licensed under CC BY-NC 4.0 (non-commercial use only),
          and are credited where they appear. They run from this site as unmodified copies of PhET&apos;s own files, with the
          version given on each simulation.
        </li>
      </ul>

      <h2 id="offline">Offline use</h2>
      <p>
        Courses can be saved on your device and read without an internet connection: use “Save this course for offline” on a
        course page, or “Save the whole site” in Reading options (the “Aa” button). Pages you have opened are also kept for
        offline reading. Everything stays on your device; use “Remove offline copies” in Reading options to delete it.
      </p>

      <h2 id="review">How the pages are made and checked</h2>
      <p>
        The pages are written with the help of an AI assistant (Anthropic&apos;s Claude), working from MIT&apos;s transcripts,
        slides and notes. Each page is then compared against its MIT lecture notes, slides and transcript by a separate checking
        pass, which records every difference in a review file; the page is published only after all findings are resolved. In
        addition, every number in a worked example, caption or quiz answer is recomputed automatically, and the key formulas are
        tested directly. Mistakes can still slip through: if you find one, please use the &ldquo;Report a mistake&rdquo; link at
        the end of the lesson.
      </p>
      <p>
        Problem sets have answer boxes that check your work in your own browser. The site has no server that could keep the
        answers secret, so they are in the page&apos;s code for anyone who looks. That is fine for self-study: the score is
        for you alone, and a set is most useful when you try each problem before opening its solution. MIT publishes no
        solutions for some problem sets; there the hints and solutions are our own, and they are checked by solving every
        problem a second time without looking at them.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        The site aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA, and to go further where it can. In
        short (the full description, including focus mode, graphs you can hear and spaced-repetition flashcards, is on the{" "}
        <Link href="/accessibility">accessibility page</Link>):
      </p>
      <ul>
        <li>
          <strong>Reading options</strong> (the “Aa” button at the top of every page): text size from 90% to 200%, relaxed or wide
          spacing, an easy-to-read font (Atkinson Hyperlegible) or a dyslexia-friendly font (Lexend), high contrast, shorter lines,
          highlighted links and stopping all animations. Your choices are remembered in this browser.
        </li>
        <li>
          <strong>Listening</strong>: every page, section, worked example or selected text can be read aloud, maths included, with a
          choice of voices and speeds.
        </li>
        <li>
          <strong>Keyboard</strong>: everything works without a mouse, with a visible focus outline. Press <kbd>?</kbd> for
          shortcuts, such as <kbd>/</kbd> to search and <kbd>n</kbd> / <kbd>p</kbd> for the next or previous lesson.
        </li>
        <li>
          <strong>Difficult words</strong>: in lessons, a word with a dotted underline explains itself when you tap it, in plain
          English and with the meaning it has in that lesson. Every word is also in the <Link href="/glossary">glossary</Link>. The
          marks can be reduced or switched off in the reading options.
        </li>
        <li>
          <strong>Screen readers</strong>: pages use proper headings and landmarks, formulas are also provided as MathML, and every
          graph has a “Show values as a table” button that gives its numbers as a data table.
        </li>
        <li>
          <strong>Colour and contrast</strong>: text meets the 4.5:1 contrast standard in light and dark modes, controls have a
          3:1 visible border, and information is never shown by colour alone.
        </li>
        <li>
          <strong>Your browser's own settings</strong> are respected: zoom, dark mode and “reduce motion”.
        </li>
      </ul>
      <p>
        If something is hard to use for you, please open an issue on{" "}
        <a href="https://github.com/raimonvibe/open-cosmology/issues">GitHub</a> so it can be fixed.
      </p>

      <h2 id="privacy">Privacy</h2>
      <p>
        No accounts, cookies, advertising or tracking: what the site remembers for you stays in your browser. Details on the{" "}
        <Link href="/privacy">privacy page</Link>.
      </p>

      <h2 id="licence">Licence</h2>
      <p>
        The site&apos;s content (the lessons, quizzes, diagrams, symbol glossary and review files) is released under{" "}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0</a>,
        as MIT&apos;s licence requires. You may share and adapt it for non-commercial purposes, with attribution, under the same
        licence. The software that builds the site is released under the{" "}
        <a href="https://github.com/raimonvibe/open-cosmology/blob/main/LICENSE">MIT License</a>, so anyone may reuse it. There are no
        paid features on MIT-based content. MIT and the course instructors do not endorse this site.
      </p>
      <p>
        Other material under its own licence: the PhET simulations (CC BY-NC 4.0, see Sources above), the open textbook used for
        the dark matter course (CC BY-NC 4.0, see Sources above), and the social media icons in the footer, which are drawn from{" "}
        <a href="https://fontawesome.com">Font Awesome</a> Free 6 by Fonticons, Inc., licensed under{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> and included here as inline SVG.
      </p>
      <p>
        <Link href="/courses">Go to the programme →</Link>
      </p>
    </div>
  );
}
