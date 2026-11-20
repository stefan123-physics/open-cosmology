import type { Metadata } from "next";
import { OfflineLibrary } from "@/components/offline/OfflineLibrary";

export const metadata: Metadata = { title: "Offline", robots: { index: false } };

/** Shown by public/sw.js when a page is requested without a connection and no copy is saved. */
export default function Offline() {
  return (
    <div className="page-narrow prose">
      <h1>You are offline</h1>
      <p className="lead">This page has not been saved on this device, so it needs an internet connection.</p>
      <OfflineLibrary />
      <p className="muted small">
        Links to MIT OpenCourseWare, arXiv and PhET&apos;s own pages always need a connection.
      </p>
    </div>
  );
}
