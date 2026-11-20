import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Apple, Atom, BookOpen, Magnet, Sparkles, Wheat, Zap, type LucideIcon } from "lucide-react";
import { shareMetadata } from "@/lib/share";

/** The site owner's personal reflections. Not a lesson: it is not based on MIT material and is not in content/. */

const DESCRIPTION = "The site owner's personal reflections as a Christian on faith and the beginning of the universe.";

export const metadata: Metadata = {
  title: "Wonder",
  description: DESCRIPTION,
  ...shareMetadata("Wonder", DESCRIPTION, "website"),
};

/** A small decorative line icon. Hidden from screen readers; read-aloud skips SVG anyway (lib/read-text.ts). */
function Icon({ icon: I }: { icon: LucideIcon }) {
  return <I className="wonder-icon" aria-hidden="true" focusable="false" strokeWidth={1.75} />;
}

/** A paragraph or list line with its icon beside it. */
function WithIcon({ icon, children, as: Tag = "p" }: { icon: LucideIcon; children: ReactNode; as?: "p" | "li" }) {
  return (
    <Tag className="with-icon">
      <Icon icon={icon} />
      <span>{children}</span>
    </Tag>
  );
}

export default function Wonder() {
  return (
    <div className="page-narrow prose wonder-page">
      <h1>
        <Icon icon={Sparkles} />
        Wonder
      </h1>
      <p className="personal-note">
        These are my personal reflections as a Christian. They are not part of the MIT course material.
      </p>

      <WithIcon icon={BookOpen}>
        I believe Jesus is God, and that through him all things were made, as the Gospel of John says (John 1:3).
      </WithIcon>
      <WithIcon icon={Wheat}>
        When Jesus fed the 5,000 (<span style={{ whiteSpace: "nowrap" }}>John 6:1–14</span>), a boy offered him five loaves and two fish. Jesus gave thanks and shared them
        out, and there was food for thousands, with twelve baskets left over. All that bread first did not exist. There was
        nothing, and then suddenly it was there.
      </WithIcon>
      {/* Same section as the bread: no second icon, but indented to line up with the text above. */}
      <p className="icon-indent">
        The beginning of the universe is the same wonder. First there was no universe, there was nothing. Then, all at once,
        there was a universe. To me, Jesus made both: the bread out of nothing, and the universe out of nothing.
      </p>

      <h2>Scientists who shared this faith</h2>
      <ul className="wonder-list">
        <WithIcon icon={Apple} as="li">
          <strong>Isaac Newton</strong> believed the order of the heavens pointed to a Creator.
        </WithIcon>
        <WithIcon icon={Magnet} as="li">
          <strong>Michael Faraday</strong>, who discovered the laws of electromagnetic induction, was a devout Christian all his
          life.
        </WithIcon>
        <WithIcon icon={Zap} as="li">
          <strong>James Clerk Maxwell</strong> had Psalm 111:2, &ldquo;Great are the works of the Lord&rdquo;, carved on the door
          of the Cavendish Laboratory in Cambridge.
        </WithIcon>
        <WithIcon icon={Atom} as="li">
          <strong>Georges Lemaître</strong>, a Catholic priest, was the first to propose what we now call the Big Bang. He
          believed God created the universe, but he kept science and faith distinct and said the theory does not prove God.
        </WithIcon>
      </ul>

      <h2>About the icons</h2>
      <ul className="wonder-list wonder-key">
        <WithIcon icon={Sparkles} as="li">
          <strong>Sparkles:</strong> the wonder of creation, something out of nothing.
        </WithIcon>
        <WithIcon icon={BookOpen} as="li">
          <strong>Open book:</strong> the Gospel of John, which says that through Jesus all things were made.
        </WithIcon>
        <WithIcon icon={Wheat} as="li">
          <strong>Wheat:</strong> the bread for the 5,000, a boy&apos;s five loaves became food for thousands.
        </WithIcon>
        <WithIcon icon={Apple} as="li">
          <strong>Apple:</strong> the story of Newton watching an apple fall, which got him thinking about gravity.
        </WithIcon>
        <WithIcon icon={Magnet} as="li">
          <strong>Magnet:</strong> Faraday discovered that a moving magnet can create electricity.
        </WithIcon>
        <WithIcon icon={Zap} as="li">
          <strong>Lightning bolt:</strong> Maxwell&apos;s equations explain electricity, magnetism and light as one thing.
        </WithIcon>
        <WithIcon icon={Atom} as="li">
          <strong>Atom:</strong> Lemaître called his idea of the beginning the &ldquo;primeval atom&rdquo;, the whole universe
          starting from one tiny point.
        </WithIcon>
      </ul>
    </div>
  );
}
