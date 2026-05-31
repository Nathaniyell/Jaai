"use client";

import { BookOpen, Heart, Leaf, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { coreValues } from "@/data/about";

const valueIcons: LucideIcon[] = [Users, Heart, BookOpen, Leaf];

export function CoreValuesSection() {
  return (
    <section className="bg-zinc-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            The principles that shape how we show up for autistic individuals, families, and communities every day.
          </p>
        </div>

        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
        
          {coreValues.map((value, index) => {
            const Icon = valueIcons[index]!;

            return (
              <div
                key={value.title}
                className="grid grid-cols-[minmax(0,220px)_1fr] gap-6 border-b border-slate-200 px-6 py-5 last:border-b-0 transition hover:bg-slate-50/80"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex rounded-md bg-[#0146AE]/10 p-2 text-[#0146AE]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>                   
                    <h3 className="mt-1 font-semibold text-slate-900">{value.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{value.description}</p>
              </div>
            );
          })}
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={coreValues[0]?.title}
          className="mt-12 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:hidden"
        >
          {coreValues.map((value, index) => {
            const Icon = valueIcons[index]!;

            return (
              <AccordionItem key={value.title} value={value.title} className="border-slate-200 px-4">
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="inline-flex rounded-md bg-[#0146AE]/10 p-2 text-[#0146AE]">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    {value.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">{value.description}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
