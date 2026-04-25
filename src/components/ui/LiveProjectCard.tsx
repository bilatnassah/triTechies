"use client";

import { useMemo, useState } from "react";
import { MousePointerClick, X } from "lucide-react";

interface LiveProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export function LiveProjectCard({ title, description, url }: LiveProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const normalizedUrl = useMemo(() => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  }, [url]);

  const canPreview = Boolean(normalizedUrl);

  return (
    <>
    <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.5)]">
      <div className="pointer-events-none absolute -left-10 top-8 h-36 w-36 rounded-full bg-accent-light/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-brand-300/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

      <div className="relative h-[250px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-800/60 p-6 flex flex-col justify-between">
        <div className="relative z-20 flex w-full items-center rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 shadow-lg backdrop-blur-md">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 flex-1 truncate text-[10px] font-mono text-white/60 transition-opacity group-hover:opacity-100 opacity-70">
            {url}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
          {canPreview ? (
            <iframe
              src={normalizedUrl}
              title={`${title} website preview`}
              className="absolute inset-0 h-full w-full scale-[1.01] border-0 bg-slate-900"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-center text-4xl font-black tracking-tighter text-slate-300/40">
              {title}
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <a href={normalizedUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-40 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex translate-y-8 items-center gap-2 rounded-full border border-white/20 bg-white/90 px-6 py-3 font-bold text-slate-900 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0">
            <MousePointerClick className="h-5 w-5" /> Visit Site
          </div>
        </a>
      </div>

      <div className="relative z-50 flex flex-1 flex-col bg-slate-950/55 p-7">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="mb-6 flex-1 text-sm md:text-base font-medium leading-relaxed text-slate-300 line-clamp-1">{description}</p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <a
            href={normalizedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 px-3 py-2 text-xs font-bold text-slate-200 transition-colors hover:bg-white/10"
          >
            Open Link
          </a>
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="rounded-xl bg-accent-light px-3 py-2 text-xs font-bold text-slate-900 transition-colors hover:bg-white"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
    {showDetails && (
      <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
          <button
            type="button"
            onClick={() => setShowDetails(false)}
            aria-label="Close details"
            className="absolute right-4 top-4 z-20 rounded-full p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-72 w-full">
            {canPreview ? (
              <iframe
                src={normalizedUrl}
                title={`${title} full website preview`}
                className="h-full w-full border-0 bg-slate-900"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-900 text-4xl font-black text-slate-600">
                {title}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
          <div className="space-y-4 p-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{description}</p>
            <a
              href={normalizedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-light px-4 py-2 text-sm font-bold text-slate-900 transition-colors hover:bg-white"
            >
              <MousePointerClick className="h-4 w-4" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

