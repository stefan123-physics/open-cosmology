import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, EB_Garamond, Lexend, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { SocialIcons } from "@/components/SocialIcons";
import "katex/dist/katex.min.css";
import "./globals.css";
// The High School's colours, only under html[data-site="highschool"] (/highschool pages); after globals.css on purpose.
import "./theme-highschool.css";
import { SiteSection } from "@/components/SiteSection";
import { SITE_SECTION_SCRIPT } from "@/lib/site-section";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SpeechProvider } from "@/components/speech/SpeechProvider";
import { HeaderListenButton } from "@/components/speech/ReadButtons";
import { Search } from "@/components/Search";
import { SITE_URL } from "@/lib/site-url";
import { Crest } from "@/components/Crest";
import { SiteHeader } from "@/components/SiteHeader";
import { RegisterSW } from "@/components/offline/RegisterSW";
import { UpdateNotice } from "@/components/offline/UpdateNotice";
import { BUILD_VERSION } from "@/lib/offline";
import { getSite, yearHref } from "@/lib/content";
import { yearName } from "@/lib/roman";
import { ReadingOptions } from "@/components/a11y/ReadingOptions";
import { READING_OPTIONS_SCRIPT } from "@/lib/reading-options";
import { Shortcuts, ShortcutsButton } from "@/components/a11y/Shortcuts";
import { ScrollReset } from "@/components/ScrollReset";
import { FocusMode } from "@/components/a11y/FocusMode";
import { SlimBar } from "@/components/SlimBar";
import { Toaster } from "@/components/ui/Toast";

// Classical typefaces, self-hosted by Next.js at build time (no requests to Google from visitors).
const display = EB_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Source_Serif_4({ subsets: ["latin"], variable: "--font-body", display: "swap" });
// Reading-option fonts: only downloaded when a reader chooses them.
const hyperlegible = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-hyperlegible", display: "swap", preload: false });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", display: "swap", preload: false });
// Fallback for maths symbols in plain text (⟨ ⟩ ∇ ⊗ ∫ …) that the text fonts lack, so they never show as boxes on
// systems without a symbol font. Noto Sans Math (SIL OFL 1.1, app/fonts/README.md), limited by unicode-range to the
// maths blocks so that ordinary text and arrows such as → keep their usual fonts and the file is only downloaded on
// pages that use such a symbol. Listed after the text fonts in globals.css (--font-math-fallback).
const mathFallback = localFont({
  src: "./fonts/NotoSansMath-Regular.woff2",
  variable: "--font-math-fallback",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+2200-22FF, U+27C0-27EF, U+2980-29FF, U+2A00-2AFF" }],
});

const description =
  "A free, open path to modern cosmology, rewritten from MIT OpenCourseWare: from vectors and motion to the expanding universe, the CMB, inflation, dark matter and dark energy.";

// Icons (app/favicon.ico, icon.svg, apple-icon.png) and share images (app/opengraph-image.png,
// twitter-image.png) are picked up from the app folder automatically; regenerate them with `npm run icons`.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Open Cosmology", template: "%s · Open Cosmology" },
  description,
  applicationName: "Open Cosmology",
  appleWebApp: { capable: true, title: "Cosmology", statusBarStyle: "black-translucent" },
  openGraph: {
    type: "website",
    siteName: "Open Cosmology",
    title: "Open Cosmology",
    description,
    locale: "en",
  },
  twitter: { card: "summary_large_image", title: "Open Cosmology", description },
};

export const viewport: Viewport = {
  // Lets the page use the whole screen so the safe-area insets are known (globals.css "Installed on an iPhone").
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#10141d" },
  ],
};

// Applies a saved theme before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const site = getSite();
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hyperlegible.variable} ${lexend.variable} ${mathFallback.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript + SITE_SECTION_SCRIPT + READING_OPTIONS_SCRIPT }} />
      </head>
      <body>
        <SpeechProvider>
          <a className="skip" href="#main">
            Skip to content
          </a>
          <div className="top-band">
            <span>
              <Link className="top-band-beta" href="/about#review" title="The site is new: mistakes can remain. Corrections are welcome.">
                Beta
              </Link>
            </span>
            <span>Free courseware</span>
            <span className="hide-sm">Rewritten from MIT OpenCourseWare</span>
            <span>CC BY-NC-SA 4.0</span>
          </div>
          <SiteHeader
            years={site.years.map((y) => ({
              number: y.number,
              label: yearName(y.number),
              short: y.short ?? y.title,
              // A year with a single course (Year IV: 8.286) links straight to that course.
              href: y.courses.length === 1 ? y.courses[0].href : yearHref(y.number),
              rowHref: yearHref(y.number),
            }))}
            tools={[
              { label: "Reading", node: <ReadingOptions /> },
              { label: "Search", node: <Search /> },
              { label: "Listen", node: <HeaderListenButton /> },
              { label: "Theme", node: <ThemeToggle /> },
            ]}
          />
          <main id="main">{children}</main>
          <ScrollReset />
          <SiteSection />
          <FocusMode />
          <SlimBar />
          <Toaster />
          <Shortcuts />
          <RegisterSW />
          <UpdateNotice />
          <footer className="site-footer">
            <div className="footer-grid">
              <div className="footer-col footer-about">
                <div className="footer-brand">
                  <Crest size={34} />
                  <span>Open Cosmology</span>
                </div>
                <p>
                  A free, non-commercial programme in physics leading to cosmology: a High School course for beginners, four
                  undergraduate years and a graduate year, the university years rewritten from the lectures of MIT OpenCourseWare.
                </p>
              </div>
              <div className="footer-col">
                <h2>The Programme</h2>
                <ul>
                  {site.years.map((y) => (
                    <li key={y.number}>
                      <Link href={yearHref(y.number)}>
                        {yearName(y.number)} · {y.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-col">
                <h2>Information</h2>
                <ul>
                  <li>
                    <Link href="/about">About the programme</Link>
                  </li>
                  <li>
                    <Link href="/symbols">Symbols and notation</Link>
                  </li>
                  <li>
                    <Link href="/glossary">Glossary of difficult words</Link>
                  </li>
                  <li>
                    <Link href="/wonder">Wonder</Link>
                  </li>
                  <li>
                    <Link href="/about#sources">Sources &amp; review</Link>
                  </li>
                  <li>
                    <Link href="/about#licence">Licence</Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/accessibility">Accessibility</Link>
                  </li>
                  <li>
                    <ShortcutsButton />
                  </li>
                  <li>
                    <a href="https://ocw.mit.edu">MIT OpenCourseWare</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-social">
              <SocialIcons />
            </div>
            <p className="footer-colophon">
              Site content licensed <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. Course
              material rewritten from <a href="https://ocw.mit.edu">MIT OpenCourseWare</a>; MIT does not endorse this site.
            </p>
            <p className="footer-beta">
              Open Cosmology is in beta. Every page is checked against its source and its numbers are recomputed, but mistakes
              can remain. If you find one, please use “Report a mistake” at the end of the lesson.{" "}
              <Link href="/about#review">How pages are checked</Link>
            </p>
            {/* The version this page was built from (next.config.ts): the root layout does not re-render on client
                navigation, so it is also the version of the code this tab or installed app is running. */}
            <p className="footer-version">
              {BUILD_VERSION.startsWith("local-") ? (
                "Version: local build"
              ) : (
                <>
                  Version{" "}
                  <a href={`https://github.com/raimonvibe/open-cosmology/commit/${BUILD_VERSION}`}>
                    <code>{BUILD_VERSION.slice(0, 7)}</code>
                  </a>
                </>
              )}
            </p>
          </footer>
        </SpeechProvider>
      </body>
    </html>
  );
}
