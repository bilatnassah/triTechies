"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, AppWindow, Palette, Code2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const services = [
  {
    title: "Business Websites",
    description: "Websites that don’t just look good — they build trust and bring clients. Seamless tracking, hyper-fast load times, and perfect SEO frameworks.",
    icon: <Monitor />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Custom Web Applications",
    description: "We turn your daily operational chaos into structured systems. Admin dashboards, automated tracking grids, and raw data processors built from scratch.",
    icon: <AppWindow />,
    color: "from-brand-500 to-accent-light"
  },
  {
    title: "Mobile Apps & PWA",
    description: "Built natively for real users. Unbreakable offline modes, instantaneous interactions, and pure native hardware connectivity.",
    icon: <Smartphone />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "UI/UX Design",
    description: "Simple matrices that people actually understand. We strip away generic interfaces and build highly aggressive, targeted structural user flows.",
    icon: <Palette />,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Custom Software Solutions",
    description: "Your business model is extremely unique. Your software should be too. We build exact systems customized specifically for your physical workflow.",
    icon: <Code2 />,
    color: "from-emerald-400 to-cyan-500"
  },
];

type ServiceItem = (typeof services)[number];

const EnvelopeCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  const scatterX = index % 2 === 0 ? -24 : 24;
  const scatterY = index % 3 === 0 ? 18 : -18;

  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <motion.article
        initial={{
          opacity: 0,
          scale: 0.72,
          x: scatterX,
          y: scatterY,
          rotate: index % 2 === 0 ? -6 : 6,
          borderRadius: 999,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          borderRadius: 24,
        }}
        viewport={{ once: false, amount: 0.22 }}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative h-full overflow-hidden rounded-3xl bg-slate-900/65 p-6 md:p-7 shadow-xl"
      >
        <div className={`absolute -top-24 -right-20 h-48 w-48 bg-gradient-to-br ${service.color} opacity-20 blur-3xl`} />
        <div className="absolute left-5 top-0 h-4 w-20 -translate-y-1/2 rounded-b-xl bg-slate-800/95" />
        <div className="relative z-10">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-black tracking-[0.18em] text-slate-400">0{index + 1}</span>
            <div className="rounded-full bg-slate-800/80 p-3">
              {React.cloneElement(service.icon, { className: "h-5 w-5 text-accent-light" })}
            </div>
          </div>
          <h3 className="mb-3 text-2xl font-black tracking-tight text-white">{service.title}</h3>
          <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
        </div>
      </motion.article>
    </FadeIn>
  );
};

export function Services() {
  return (
    <section className="py-28 w-full relative isolate overflow-hidden bg-transparent transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-20 py-14 md:py-16">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-14">
            <div className="inline-flex items-center rounded-full border border-accent-light/45 bg-slate-900/90 px-5 py-2 text-sm font-semibold text-accent-light mb-8 shadow-lg shadow-black/30">
              ⚡ OUR ARSENAL
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Engineered Solutions <br />
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-5 md:px-8">
          {services.map((service, idx) => (
            <EnvelopeCard key={service.title} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
