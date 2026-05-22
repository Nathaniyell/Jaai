"use client";

import Image from "next/image";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { keyObjectives } from "@/data/about";

export function KeyObjectivesSection() {
  return (
    <section className="bg-white px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-[#05070b]">
            JAI&apos;s Key Objectives
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            As a forward thinking organisation, we are guided by these set of key objectives that helps us execute our
            impact:
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <Accordion
            type="single"
            collapsible
            defaultValue={keyObjectives[0]?.title}
            className="w-full border-t border-gray-200"
          >
            {keyObjectives.map((objective) => (
              <AccordionItem key={objective.title} value={objective.title} className="border-gray-200">
                <AccordionTrigger className="text-base font-semibold text-gray-900 hover:no-underline hover:text-gray-900/90 sm:text-lg [&[data-state=open]]:text-gray-900">
                  {objective.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {objective.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[360px] lg:min-h-full">
            <Image
              src="/images/jai.jpg"
              alt="JAI Network community support"
              width={1000}
              height={1200}
              className="h-full max-h-[520px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
