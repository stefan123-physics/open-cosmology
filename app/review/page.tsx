import type { Metadata } from "next";
import Link from "next/link";
import { shareMetadata } from "@/lib/share";
import { ReviewDeck } from "@/components/review/ReviewDeck";

const DESCRIPTION = "Review the flashcards that are due today from every lesson, with spaced repetition. Progress stays in your browser.";

export const metadata: Metadata = {
  title: "Review",
  description: DESCRIPTION,
  ...shareMetadata("Review", DESCRIPTION, "website"),
};

export default function Review() {
  return (
    <div className="page-narrow prose">
      <h1>Review</h1>
      <p className="lead">The flashcards that are due today, from every lesson you have practised.</p>
      <p>
        After turning a card over, rate how well you knew it. <strong>Again</strong> brings it back later today;{" "}
        <strong>Hard</strong>, <strong>Good</strong> and <strong>Easy</strong> bring it back after a growing number of days, so
        cards you know well come back less often (spaced repetition). Words you saved in the{" "}
        <Link href="/glossary">glossary</Link> (My words) come up here too. Nothing is sent anywhere: see{" "}
        <Link href="/privacy">Privacy</Link>.
      </p>
      <ReviewDeck />
    </div>
  );
}
