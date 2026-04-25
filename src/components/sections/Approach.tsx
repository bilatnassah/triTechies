"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Search, Scissors, Hammer, TrendingUp } from "lucide-react";

export function Approach() {
  const steps = [
    {
      num: "1",
      title: "Understand",
      desc: "We study how your business actually works.",
      icon: <Search className="w-6 h-6 text-accent-light" />,
    },
    {
      num: "2",
      title: "Simplify",
      desc: "We remove unnecessary steps and confusion.",
      icon: <Scissors className="w-6 h-6 text-accent-light" />,
    },
    {
      num: "3",
      title: "Build",
      desc: "Fast, clean, and reliable systems.",
      icon: <Hammer className="w-6 h-6 text-accent-light" />,
    },
    {
      num: "4",
      title: "Improve",
      desc: "We stay with you after launch.",
      icon: <TrendingUp className="w-6 h-6 text-accent-light" />,
    },
  ];

  return (
    <section className="py-24 px-6 w-full relative overflow-hidden bg-transparent transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-accent-light/80 mb-4">Process Framework</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight transition-colors">
              Our <span className="text-gradient">Approach</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-1 bg-white/10 z-0 rounded-full"></div>

          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={0.15 * idx} direction={idx % 2 === 0 ? "left" : "right"} className="relative z-10">
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-white/30 bg-white/15 dark:bg-slate-900/35 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.28)] flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_40px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-accent-light text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg border border-white/20">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white transition-colors">{step.title}</h3>
                <p className="text-slate-300 font-medium transition-colors">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
