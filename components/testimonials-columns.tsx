"use client";

import React from "react";
import { motion } from "framer-motion";

import type { Testimonial } from "@/types";
import {User} from "lucide-react";

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

export function TestimonialsColumn({ className, testimonials, duration = 14 }: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((item, i) => (
              <article key={`${item.name}-${i}`} className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-700">{item.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0146AE]/10 text-sm font-semibold text-[#0146AE]">
                    <User className="size-4 text-[#0146AE]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold leading-5 text-slate-900">{item.name}</p>
                    <p className="text-xs leading-5 text-slate-500">
                      {item.role} - {item.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsColumnsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(1, 5);

  return (
    <div className="relative mt-8 grid max-h-[560px] grid-cols-1 gap-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
      <TestimonialsColumn testimonials={firstColumn} duration={18} />
      <TestimonialsColumn testimonials={secondColumn.length ? secondColumn : testimonials} duration={14} className="hidden md:block" />
      <TestimonialsColumn testimonials={thirdColumn.length ? thirdColumn : testimonials} duration={20} className="hidden lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
