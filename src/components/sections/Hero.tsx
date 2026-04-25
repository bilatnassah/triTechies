"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-transparent transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(16,185,129,0.18),transparent_26%),radial-gradient(circle_at_68%_32%,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-[#05070f]/95 px-4 py-2 text-xs font-semibold text-emerald-300 mb-8 shadow-lg shadow-black/30">
            <CheckCircle2 className="h-4 w-4" />
            Custom Systems For Real Business Problems
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight transition-colors">
            We don&apos;t build for looks, <br className="hidden md:block" />
            <span className="text-[#cde9ff]">we build for results.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium transition-colors leading-relaxed">
            We replace messy manual processes with fast, reliable digital systems that help your team work smarter and scale confidently.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 focus:outline-none ring-1 ring-white/20">
            <span>Start Your Project</span>
          </Link>
          <Link href="/work" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 backdrop-blur-xl border border-white/20 px-8 py-4 font-bold text-white transition-all hover:bg-white/10">
            <span className="mr-2">View Work</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <FadeIn delay={0.5} className="w-full max-w-5xl">
          <div className="relative rounded-[2rem] border border-white/10 bg-[#05070f]/95 min-h-[330px] md:min-h-[390px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_68%,rgba(16,185,129,0.20),transparent_22%),radial-gradient(circle_at_82%_34%,rgba(59,130,246,0.16),transparent_26%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-30 [background:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="pointer-events-none absolute left-[16%] top-[23%] h-px w-[28%] bg-gradient-to-r from-transparent via-emerald-400/45 to-transparent" />
            <div className="pointer-events-none absolute right-[16%] top-[23%] h-px w-[28%] bg-gradient-to-r from-transparent via-blue-400/45 to-transparent" />
            <div className="pointer-events-none absolute left-[18%] bottom-[26%] h-px w-[24%] bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent" />
            <div className="pointer-events-none absolute right-[15%] bottom-[26%] h-px w-[25%] bg-gradient-to-r from-transparent via-blue-400/35 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-[30%] w-px h-[40%] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 md:h-36 md:w-36 rounded-[2.1rem] border border-white/15 bg-black/60 shadow-[0_0_0_10px_rgba(255,255,255,0.02),0_24px_65px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <div className="absolute inset-2 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-300 via-accent-light to-indigo-400 opacity-95 shadow-[0_0_30px_rgba(16,185,129,0.35)]" />
            </div>

            <div className="absolute left-[9%] top-[20%] rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur-md">Web Apps</div>
            <div className="absolute left-[14%] bottom-[18%] rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur-md">Automation</div>
            <div className="absolute left-[32%] top-[30%] rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur-md">Dashboards</div>
            <div className="absolute right-[34%] top-[31%] rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur-md">Mobile Apps</div>
            <div className="absolute right-[15%] top-[20%] rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur-md">Business Sites</div>
            <div className="absolute right-[10%] bottom-[18%] rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur-md">Custom Software</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
