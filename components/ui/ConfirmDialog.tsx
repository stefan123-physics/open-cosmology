"use client";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * The site's own confirmation dialog, used instead of the browser's confirm() (which cannot be styled and speaks
 * the browser's language). content:check fails the build if confirm(), alert() or prompt() appears in the code.
 *
 *   const [ask, dialog] = useConfirm();
 *   if (await ask({ title: "Reset flashcard progress", message: "…", confirmLabel: "Reset", destructive: true })) …
 *   return <>{…}{dialog}</>;
 *
 * Accessible: role="alertdialog" with a title and description, focus moves to Cancel (the safe choice) and stays in
 * the dialog, Escape, Cancel and a tap outside close it, the rest of the page is inert while it is open, and focus
 * returns to the control that opened it. Centred on wide screens, a bottom sheet on phones (app/globals.css).
 */
export type ConfirmOptions = {
  title: string;
  message?: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  /** Red confirm button for actions that delete or overwrite something */
  destructive?: boolean;
  /** Where focus goes afterwards if the control that opened the dialog has gone (it was part of what was cleared) */
  fallbackFocus?: () => HTMLElement | null;
};

type Open = ConfirmOptions & { resolve: (ok: boolean) => void; opener: HTMLElement | null };

export function useConfirm(): [(options: ConfirmOptions) => Promise<boolean>, ReactNode] {
  const [open, setOpen] = useState<Open | null>(null);
  const ask = useCallback(
    (options: ConfirmOptions) =>
      new Promise<boolean>((resolve) =>
        setOpen({ ...options, resolve, opener: document.activeElement instanceof HTMLElement ? document.activeElement : null })
      ),
    []
  );
  const close = useCallback(
    (ok: boolean) => {
      if (!open) return;
      open.resolve(ok);
      setOpen(null);
      // After the caller has acted on the answer (it may remove the opener), put focus back.
      const { opener, fallbackFocus } = open;
      setTimeout(() => {
        const target = opener?.isConnected ? opener : fallbackFocus?.();
        target?.focus({ preventScroll: false });
      }, 0);
    },
    [open]
  );
  return [ask, open ? <Dialog {...open} onClose={close} /> : null];
}

function Dialog({ title, message, confirmLabel, cancelLabel = "Cancel", destructive, onClose }: Open & { onClose: (ok: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();
  const [host, setHost] = useState<HTMLElement | null>(null);

  // Render on <body>, outside anything focus mode or a closed menu hides.
  useEffect(() => {
    const el = document.createElement("div");
    el.className = "dialog-host";
    document.body.appendChild(el);
    setHost(el);
    return () => el.remove();
  }, []);

  useEffect(() => {
    if (!host) return;
    // Everything else is inert while the dialog is open: no tabbing or reading behind it.
    const others = [...document.body.children].filter((c) => c !== host && !c.hasAttribute("inert")) as HTMLElement[];
    others.forEach((c) => c.setAttribute("inert", ""));
    const root = document.documentElement;
    const overflow = root.style.overflow;
    root.style.overflow = "hidden";
    cancelRef.current?.focus();
    return () => {
      others.forEach((c) => c.removeAttribute("inert"));
      root.style.overflow = overflow;
    };
  }, [host]);

  // Keys are handled here and go no further: the site's shortcuts (n, p, /, Ctrl K …) listen on window and document
  // and must not act behind an open dialog.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === "Escape") {
        e.preventDefault();
        onClose(false);
        return;
      }
      if (e.key !== "Tab") return;
      // Keep focus inside the dialog.
      const items = [...el.querySelectorAll<HTMLElement>("button, [href], input, [tabindex]:not([tabindex='-1'])")];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [host, onClose]);

  if (!host) return null;
  return createPortal(
    <div
      className="dialog-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose(false);
      }}
    >
      <div
        ref={ref}
        className="dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={message ? descId : undefined}
        data-noread
      >
        <h2 id={titleId} className="dialog-title">
          {title}
        </h2>
        {message && (
          <div id={descId} className="dialog-message">
            {message}
          </div>
        )}
        <div className="dialog-actions">
          <button ref={cancelRef} type="button" className="secondary" onClick={() => onClose(false)}>
            {cancelLabel}
          </button>
          <button type="button" className={destructive ? "danger" : undefined} onClick={() => onClose(true)}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>,
    host
  );
}
