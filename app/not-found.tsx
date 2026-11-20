import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-narrow">
      <h1>Page not found</h1>
      <p>
        This page does not exist (yet). Try <Link href="/courses">the programme</Link>.
      </p>
    </div>
  );
}
