import { Globe2, Target } from "lucide-react";

import { mission, vision } from "@/data/about";

export function MissionVisionSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Mission &amp; Vision
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            The purpose that drives our work and the future we are building for autistic individuals and their families.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          <article className="rounded-2xl border border-[#0146AE]/15 bg-[#0146AE]/5 p-8 shadow-sm">
            <div className="mb-5 inline-flex rounded-lg bg-[#0146AE]/10 p-3 text-[#0146AE]">
              <Target className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{mission}</p>
          </article>

          <article className="rounded-2xl border border-[#FFC001]/30 bg-[#FFC001]/10 p-8 shadow-sm">
            <div className="mb-5 inline-flex rounded-lg bg-[#FFC001]/20 p-3 text-[#0146AE]">
              <Globe2 className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{vision}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
