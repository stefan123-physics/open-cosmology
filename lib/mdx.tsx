import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeSections from "./rehype-sections";
import rehypeTerms from "./rehype-terms";
import { getSite } from "./content";
import { pageTerms } from "./glossary";
import { pageEntries, termRank } from "./glossary-site";
import { SectionHeading } from "@/components/SectionHeading";
import type { Page } from "./content";
import type { Reference } from "./schema";
import { Formula, type FormulaProps } from "@/components/Formula";
import { pageCapitals } from "./speech";
import { pageTex } from "./tex-scan";
import { Plot } from "@/components/Plot";
import { PhET } from "@/components/PhET";
import { localSim } from "./phet";
import { WorkedExample, Step, Problem } from "@/components/WorkedExample";
import { VectorDiagram } from "@/components/VectorDiagram";
import { Callout } from "@/components/Callout";
import { ExpansionDiagram } from "@/components/ExpansionDiagram";
import { ParallaxDiagram } from "@/components/ParallaxDiagram";
import { Exercise, Part, Hint, type ExerciseProps } from "@/components/exercise/Exercise";
import { Solution } from "@/components/exercise/Solution";
import { Answer, type AnswerProps } from "@/components/exercise/Answer";
import { renderInlineTex } from "./tex";

/** Resolve a citation key used by <Formula cite="…" />. */
export function resolveCite(page: Page, key: string): Reference | undefined {
  if (key === "mit") return { title: page.source.title, url: page.source.url };
  const reading = page.source.readings.find((_, i) => key === `reading${i + 1}`);
  if (reading) return reading;
  return page.references[key];
}

/** Components available inside every MDX page, bound to that page's frontmatter. */
function componentsFor(page: Page) {
  // Capitals said "capital R" on this page, the same as read-aloud and the symbol popups (lib/speech.ts).
  const capitals = pageCapitals(pageTex(page));
  return {
    Formula: (props: FormulaProps) => <Formula {...props} resolved={resolveCite(page, props.cite)} capitals={capitals} />,
    Plot,
    PhET: (props: { id?: string; title?: string; height?: number }) => {
      const id = props.id ?? page.phet;
      const sim = id ? localSim(id) : undefined; // content:check guarantees a local copy exists
      return id && sim ? <PhET {...props} id={id} src={sim.file} version={sim.version} /> : null;
    },
    WorkedExample,
    Step,
    Problem,
    VectorDiagram,
    Callout,
    ExpansionDiagram,
    ParallaxDiagram,
    // Problem sets (docs/PROBLEM-SETS-DESIGN.md). Text that holds maths is rendered here, on the server.
    Exercise: (props: ExerciseProps) => <Exercise {...props} source={{ title: page.source.title, url: page.source.url }} />,
    Part,
    Hint,
    Solution,
    Answer: (props: AnswerProps) => (
      <Answer
        {...props}
        labelHtml={props.label ? renderInlineTex(props.label) : undefined}
        choicesHtml={props.choices?.map(renderInlineTex)}
        namesHtml={props.names && Object.fromEntries(Object.entries(props.names).map(([k, tex]) => [k, renderInlineTex(`$${tex}$`)]))}
      />
    ),
    h2: SectionHeading,
  };
}

export async function renderPage(page: Page) {
  // Glossary words with a meaning on this page are marked in the prose (lib/rehype-terms.ts, docs/GLOSSARY-PLAN.md).
  const site = getSite();
  const entries = pageEntries(pageTerms(site, page).map((t) => t.id));
  const { default: Content } = await evaluate(page.body, {
    ...(runtime as any),
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [rehypeKatex, { throwOnError: false, output: "htmlAndMathml" }],
      rehypeSections,
      [rehypeTerms, { entries, rank: (e: (typeof entries)[number]) => termRank(site, e) }],
    ],
    development: false,
  });
  return <Content components={componentsFor(page)} />;
}
