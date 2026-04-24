import Link from "next/link";
import Image from "next/image";
import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";

import { ReachStatsGrid } from "@/components/about-us-showcase";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { SectionWrapper } from "@/components/section-wrapper";
import { TestimonialsColumnsSection } from "@/components/testimonials-columns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Home",
  "JAI Network supports autism awareness, inclusion, and caregiver empowerment.",
);

export default function Home() {
  const homepagePartners = ["Jones Foundation", "BROMCO", "Easy Collection"];

  return (
    <>
      <HeroSection />

      <SectionWrapper title="Who We Are">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-base text-slate-600 text-justify">
            The JAI Network is a US-based non-governmental organization (NGO) dedicated to promoting autism awareness and supporting children with special needs and their families globally, with a special focus on Africa. The vision was initiated in 2021 by Jenneh Kormoh - an autism mum and passionate advocate for social and humanitarian services. Till date, JAI Network’s presence is actively felt in United States of America, Liberia, Nigeria, Sierra Leone, Ghana, Philippines and the India.


            </p>
            <p className="mt-4 text-base text-slate-600 text-justify">
            We are guided by a passion for inclusivity and empowerment, striving to bridge gaps in understanding, resources, and care for autistic and special needs individuals. We leverage advocacy, education, child/tutor/parent empowerment and direct support programs to champion the right to dignity, respect, and quality of life for people living with autism and special needs.
            </p>
            <div className="mt-5">
            <Link href="/about" aria-label="Read more about JAI Network">
                <Button variant="outline">Read More</Button>
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <Image src="/images/jai2.jpg" alt="JAI Network community outreach" width={1200} height={1200} className="h-full w-full object-cover" />
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold text-slate-900 lg:text-5xl">Mission, Vision & Principles</h2>
            <p className="mt-4 text-slate-600">Our work is guided by inclusion, empathy, dignity, and community-driven action.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-sm gap-6 md:mt-14 md:max-w-none md:grid-cols-3">
            {[
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
            ].map((item) => (
              <Card key={item.title} className="group shadow-black-950/5">
                <CardHeader className="pb-3 text-center">
                  <CardDecorator>
                    <item.icon className="size-6 text-[#0146AE]" aria-hidden />
                  </CardDecorator>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05070b] py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-14">
          <div className="relative z-10 mx-auto max-w-2xl space-y-5 text-center">
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">What We Are Working To Achieve</h2>
            <p className="text-slate-300">
              We are building practical support systems that help autistic children and their families access dignity, care, inclusion, and
              opportunity.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl divide-x divide-y divide-white/10 border border-white/10 lg:max-w-5xl sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Increase Awareness",
                description: "Educate communities on autism to reduce stigma and foster understanding.",
                icon: Zap,
              },
              {
                title: "Support Families",
                description: "Provide resources, programs, and support networks for caregivers and parents.",
                icon: Cpu,
              },
              {
                title: "Advocacy for Inclusion",
                description: "Promote policies and systems that protect the rights of autistic individuals.",
                icon: Fingerprint,
              },
              {
                title: "Resource Provision",
                description: "Facilitate supplies and care resources for special-needs homes and communities.",
                icon: Pencil,
              },
              {
                title: "Capacity Building",
                description: "Train caregivers, educators, and local partners to provide practical support.",
                icon: Settings2,
              },
              {
                title: "Community Empowerment",
                description: "Sustain long-term change through collaboration, local action, and shared ownership.",
                icon: Sparkles,
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2 p-8 md:p-10">
                <div className="flex items-center gap-2">
                  <item.icon className="size-4 text-[#FFC001]" />
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper
        title="Our Reach"
        subtitle="Measurable community impact across countries and programs."
      >
        <ReachStatsGrid />
      </SectionWrapper>

      <SectionWrapper
        title="Voices from the Community"
        subtitle="Stories from caregivers, educators, volunteers, and partners."
      >
        <TestimonialsColumnsSection testimonials={testimonials} />
      </SectionWrapper>

      <section className="border-y border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-balance text-4xl font-semibold text-slate-900 lg:text-5xl">Partners</h2>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="flex min-w-max animate-[partners-marquee_20s_linear_infinite] items-center gap-5 py-2">
              {[...homepagePartners, ...homepagePartners, ...homepagePartners].map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex h-16 min-w-[220px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-base font-semibold text-slate-700 shadow-sm grayscale transition hover:grayscale-0"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden className="relative mx-auto size-28 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
      <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border border-slate-300 bg-white">{children}</div>
    </div>
  );
}

