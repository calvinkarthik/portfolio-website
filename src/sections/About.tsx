// src/sections/About.tsx
import React from "react";
import headshot from "../assets/calvin-headshot.png";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* border-only card, no fill */}
        <div className="rounded-2xl border border-white/10 p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto,1fr]">
            {/* headshot with single accent ring (switch cyan→fuchsia/emerald to match your theme) */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0">
              <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/60" aria-hidden />
              <div className="absolute -inset-1 rounded-full blur-xl opacity-25 shadow-[0_0_60px] shadow-cyan-400/30" aria-hidden />
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <img
                  src={headshot}
                  alt="Calvin Karthik headshot"
                  className="h-full w-full object-cover scale-105"
                  loading="lazy"
                />
                {/* super light vignette to hide edges */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(0,0,0,0.25))]" />
              </div>
            </div>

            {/* your actual about copy */}
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">About</h2>
              <p>
                I’m passionate about creating technology that bridges the digital and physical worlds.
                From PCB design and embedded control systems to AI-powered mobile apps, I build solutions
                that are clean, reliable, and actually get used.
              </p>
              <p>
                I’m a Computer Engineering student at McMaster. I’ve worked on exoskeleton systems,
                biogas research, and a bunch of portfolio projects. I care about shipping polish.
              </p>
              <p>
                When I’m not wiring or coding, I’m exploring HPC, power systems, and full-stack dev.
                Always learning, always building.
              </p>
            </div>
          </div>

          {/* inner divider line */}
          <div className="my-6 border-t border-white/10" />

          {/* Education: heading + pills on one line (wraps nicely on small screens) */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-white font-semibold whitespace-nowrap">Education</h3>

            {/* McMaster pill */}
            <div className="inline-flex items-center rounded-full border px-4 py-2
                            border-cyan-400/30 bg-cyan-400/10 text-sm">
              <span className="font-semibold text-cyan-300">McMaster University</span>
              <span className="mx-2 text-zinc-500">—</span>
              <span className="text-zinc-400">B.Eng Computer Engineering (Co-op)</span>
            </div>

            {/* Dean's Honour Roll pill */}
            <div className="inline-flex items-center rounded-full border px-4 py-2
                            border-amber-400/30 bg-amber-400/10 text-amber-200 text-sm font-semibold">
              Dean&apos;s Honour Roll (2025)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
