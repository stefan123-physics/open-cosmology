"use client";
import { useId, useState, type ReactNode } from "react";

/**
 * The course introduction. On phones (≤ 700px) the lead is cut to three lines and the rest (`more`) is hidden until
 * the reader asks for it, so the sections are reached with little scrolling. On wider screens everything shows and
 * the button is hidden (CSS). The text is always in the page, so search, offline copies and the source keep it.
 */
export function CourseIntro({ lead, more }: { lead: ReactNode; more: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="course-intro" data-open={open ? "" : undefined}>
      <div className="course-intro-lead">{lead}</div>
      <div className="course-intro-more" id={id}>
        {more}
      </div>
      <button type="button" className="course-intro-toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        {open ? "Less about this course" : "More about this course"}
      </button>
    </div>
  );
}
