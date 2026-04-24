import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/section-wrapper";
import { TypewriterEffect } from "@/components/typewriter-effect";

export function CTASection() {
  const words = [
    { text: "Help" },
    { text: "Us" },
    { text: "Build" },
    { text: "Inclusive", className: "text-[#FFC001]" },
    { text: "Futures", className: "text-[#FFC001]" },
  ];

  return (
    <SectionWrapper className="pb-20">
      <div className="rounded-3xl bg-[#05070b] p-8 text-white shadow-lg sm:p-10">
        <TypewriterEffect words={words} />
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          Your support helps families access life-changing autism resources, training, and community-based care.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/donate" aria-label="Donate to support JAI Network impact">
            <Button variant="secondary">Donate</Button>
          </Link>
          <Link href="/get-involved" aria-label="Get involved through volunteering or partnership">
            <Button variant="outline" className="border-white/60 bg-white/10 text-white hover:bg-white/20">
              Get Involved
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
