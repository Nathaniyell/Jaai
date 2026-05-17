"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { programs } from "@/data/programs";

const cardStyles = [
  { bgColor: "bg-yellow-100", textColor: "text-zinc-700", image: "/images/jaap.jpg" },
  { bgColor: "bg-green-100", textColor: "text-zinc-700", image: "/images/tbp.jpg" },
  { bgColor: "bg-orange-100", textColor: "text-zinc-700", image: "/images/workshop.jpg" },
  { bgColor: "bg-fuchsia-100", textColor: "text-zinc-700", image: "/images/siinnitiative.jpg" },
];

const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

function AnimatedHeader() {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="mb-16 mx-auto max-w-3xl text-center">
      <h2
        ref={headerRef}
        className={`text-4xl font-bold text-gray-900 transition-all duration-700 ease-out md:text-5xl ${
          headerInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Our Programs
      </h2>
      <p
        ref={pRef}
        className={`mt-4 text-lg text-gray-600 transition-all duration-700 ease-out delay-200 ${
          pInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Every program is designed to advance awareness, strengthen caregivers, and create inclusive opportunities for autistic children.
      </p>
    </div>
  );
}

export function ProgramsStickySection() {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="px-[5%]">
        <div className="mx-auto max-w-7xl">
          <section className="flex flex-col items-center py-24 md:py-40">
            <AnimatedHeader />

            <div className="w-full">
              {programs.map((program, index) => {
                const style = cardStyles[index % cardStyles.length];
                return (
                  <div
                    key={program.slug}
                    className={`${style.bgColor} sticky mb-16 grid grid-cols-1 items-center gap-4 rounded-3xl p-8 md:grid-cols-2 md:gap-8 md:p-12`}
                    style={{ top: "160px" }}
                  >
                    <div className="flex flex-col justify-center">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#0146AE]">{program.category}</p>
                      <h3 className="mb-3 mt-2 text-2xl font-bold text-gray-900 md:text-3xl">{program.title}</h3>
                      <p className={`${style.textColor} text-sm`}>{program.summary}</p>
                      <p className={`${style.textColor} mt-3`}>{program.description}</p>
                      <p className="mt-4 text-sm font-semibold text-[#0146AE]">{program.impactMetric}</p>
                    </div>

                    <div className="mt-8 md:mt-0">
                      <Image
                        src={style.image}
                        alt={program.title}
                        width={900}
                        height={600}
                        className="h-auto w-full rounded-lg object-cover shadow-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
