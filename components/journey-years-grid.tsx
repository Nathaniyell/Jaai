import Image from "next/image";

import { cn } from "@/lib/utils";

const yearCards = [
  {
    year: "2021",
    description:
      "JAI Network launched with a focused mission: clear, practical autism support and awareness for families and communities.",
  },
  {
    year: "2024",
    description:
      "Our outreach scaled through awareness campaigns, helping caregivers and educators access actionable support tools.",
  },
  {
    year: "2025",
    description:
      "Parent and caregiver workshops expanded, backed by proven approaches that improved confidence and care outcomes.",
  },
  {
    year: "2026 - date",
    description:
      "Cross-country delivery strengthened partnerships and ensured ongoing support systems for long-term impact.",
  },
];

export const Component = () => {
  return (
    <div className={cn("mx-auto max-w-7xl overflow-hidden rounded-2xl border border-zinc-300 bg-[#efefdf] px-4 sm:px-6 lg:px-8")}>
      <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="px-2 pb-10 pt-12 md:px-4 md:pt-16 lg:pb-16">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight text-black lg:mx-0 lg:text-left md:text-5xl lg:text-6xl">
            Our Journey So Far
          </h2>

          <div className="relative mx-auto mt-8 aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg lg:hidden">
            <Image
              src="/images/workshop.jpg"
              alt="JAI Network workshop with caregivers and community members"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden />
          </div>

          <div className="mt-8 space-y-4 text-justify text-lg text-zinc-800 lg:mt-10">
            <p>
              Our journey has been one of growth, impact, and real transformation. From the United States to Liberia,
              Nigeria, Sierra Leone, and Ghana, we have reached thousands of families, educators, and caregivers with our
              awareness campaigns, educational programs, and direct support initiatives.
            </p>
            <p>
              Through the Jenneh Autism Awareness Program (JAAP), we have empowered over 5,000 individuals worldwide
              with knowledge about autism, equipping them with the tools needed to support autistic children effectively.
              Our Thanksgiving Basket Project has delivered essential supplies to special needs homes and orphanages
              across 5 countries in America and Africa, ensuring that children with autism receive the care and resources
              they deserve.
            </p>
            <p>
              We have built strong partnerships with local organizations, collaborated with dedicated caregivers, and
              engaged in advocacy efforts to push for more inclusive policies and environments for autistic individuals.
              Each step forward has been fueled by the unwavering dedication of our team, supporters, and volunteers who
              believe in a world where every child regardless of ability has the opportunity to thrive.
            </p>
            <p>
              Together, we will continue to transform lives, build stronger communities, and create a future where every
              autistic individual is valued, understood, and supported.
            </p>
          </div>
        </div>

        <div className="relative hidden min-h-[520px] lg:block lg:min-h-full">
          <div className="absolute inset-y-8 right-0 left-4 overflow-hidden rounded-2xl border border-zinc-300">
            <Image
              src="/images/hero-cropped2.png"
              alt="JAI Network workshop with caregivers and community members"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 0px"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#efefdf]/80 via-transparent to-transparent" aria-hidden />
          </div>
        </div>
      </div>

      <div className="grid border-t border-dashed border-zinc-400 md:grid-cols-2 lg:grid-cols-4">
        {yearCards.map((card) => (
          <div key={card.year} className="border-dashed border-zinc-400 p-7 lg:border-r last:border-r-0">
            <h4 className="mt-2 text-5xl font-semibold leading-tight text-black">{card.year}</h4>
            <p className="mt-4 text-lg leading-7 text-zinc-800">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
