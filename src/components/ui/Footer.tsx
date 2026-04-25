"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 md:px-8 pb-6 pt-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-[#05070f] px-7 md:px-14 pt-12 md:pt-16 pb-8">
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_38%_76%,rgba(59,130,246,0.25),transparent_35%)]" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.18em] text-accent-light mb-4">Contact Us</p>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Ready to build systems that drive real business results?
              </h3>
              <div className="mt-10">
                <p className="text-xs text-slate-500 mb-2">Contact triTechies at:</p>
                <a
                  href="mailto:techiestri@gmail.com"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent-light transition-colors duration-300"
                >
                  techiestri@gmail.com
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            <div className="md:pt-16">
              <div className="flex flex-wrap md:flex-col gap-x-8 gap-y-3 text-sm md:text-base">
                <Link href="/services" className="text-slate-300 hover:text-accent-light transition-colors duration-300">Services</Link>
                <Link href="/work" className="text-slate-300 hover:text-accent-light transition-colors duration-300">Our Work</Link>
                <Link href="/about" className="text-slate-300 hover:text-accent-light transition-colors duration-300">About</Link>
                <Link href="/contact" className="text-slate-300 hover:text-accent-light transition-colors duration-300">Contact</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 border-t border-white/10 pt-8">
            <FadeIn delay={0.1} direction="up" className="w-full">
              <h1 className="text-[15vw] md:text-[12vw] leading-none font-black text-white/95 tracking-tighter select-none w-full whitespace-nowrap overflow-hidden">
                triTechies.
              </h1>
            </FadeIn>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} triTechies. All rights reserved.</p>
            <p>Built for results.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
