"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

const STORAGE_KEY = "tt-first-visit-popup-seen";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function FirstVisitPopup() {
  const [open, setOpen] = useState(false);
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const frameId = window.requestAnimationFrame(() => {
      const hasSeenPopup = window.localStorage.getItem(STORAGE_KEY) === "true";
      if (!hasSeenPopup) {
        setOpen(true);
      }
    });

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    };
  }, []);

  const closePopup = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setOpen(false);
  };

  const installPWA = async () => {
    if (!installEvent) return;
    await installEvent.prompt();
    await installEvent.userChoice;
    closePopup();
  };

  return (
    <div className="fixed left-3 top-1/2 z-[60] w-[calc(100vw-1.5rem)] max-w-sm -translate-y-1/2 pointer-events-none md:left-6">
      <div
        className={`relative rounded-3xl border border-slate-700/80 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl pointer-events-auto transition-all duration-500 ${
          open ? "translate-x-0 opacity-100" : "-translate-x-[115%] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close welcome popup"
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-xs uppercase tracking-widest text-accent-light font-semibold mb-3">
          PWA Install
        </p>
        <h2 className="text-xl font-bold text-white mb-2">Install triTechies App</h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          This is optional. Install for faster access and app-like experience. You can ignore this card and continue browsing.
        </p>

        <div className="flex flex-wrap gap-2">
          {installEvent && (
            <button
              type="button"
              onClick={installPWA}
              className="inline-flex items-center gap-2 rounded-xl bg-accent-light px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white transition-colors"
            >
              <Download className="h-4 w-4" />
              Install App
            </button>
          )}
          <button
            type="button"
            onClick={closePopup}
            className="rounded-xl border border-slate-600 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
