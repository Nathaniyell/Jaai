import { Settings2, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const coreValues = [
  {
    title: "Our Mission",
    description:
      "To raise global autism awareness and provide support systems for children with special needs and their families through education, advocacy, and community engagement.",
    icon: Zap,
  },
  {
    title: "Our Vision",
    description:
      "To create a world where individuals with autism and special needs are fully understood, accepted, and empowered to live fulfilling lives.",
    icon: Settings2,
  },
  {
    title: "Our Principles",
    description:
      "Inclusivity, empathy, education, collaboration, and sustainability remain at the center of every initiative we design and deliver.",
    icon: Sparkles,
  },
] as const;

export function CoreValuesSection() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold text-slate-900 lg:text-5xl">Our Core Values</h2>
          <p className="mt-4 text-slate-600">Our work is guided by inclusion, empathy, dignity, and community-driven action.</p>
        </div>
        <div className="mx-auto mt-8 grid max-w-sm gap-6 md:mt-14 md:max-w-none md:grid-cols-3">
          {coreValues.map((item) => (
            <Card key={item.title} className="group shadow-black-950/5">
              <CardHeader className="pb-3 text-center">
                <CardDecorator>
                  <item.icon className="size-6 text-[#0146AE]" aria-hidden />
                </CardDecorator>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden className="relative mx-auto size-28 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
      <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border border-slate-300 bg-white">
        {children}
      </div>
    </div>
  );
}
