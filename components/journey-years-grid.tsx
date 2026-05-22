import { 
  Flower2,
  Grid3X3,
  Sparkles,
  Sun,
} from "lucide-react";

import { cn } from "@/lib/utils";

export const Component = () => {
  


  const yearCards = [
    {
      year: "2021",
      title: "We make things simple",
      description:
        "JAI Network launched with a focused mission: clear, practical autism support and awareness for families and communities.",
      icon: Flower2,
    },
    {
      year: "2024",
      title: "We focus on real results",
      description:
        "Our outreach scaled through awareness campaigns, helping caregivers and educators access actionable support tools.",
      icon: Sparkles,
    },
    {
      year: "2025",
      title: "We know what works",
      description:
        "Parent and caregiver workshops expanded, backed by proven approaches that improved confidence and care outcomes.",
      icon: Sun,
    },
    {
      year: "2026 - date",
      title: "With you all the way",
      description:
        "Cross-country delivery strengthened partnerships and ensured ongoing support systems for long-term impact.",
      icon: Grid3X3,
    },
  ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-zinc-300 bg-[#efefdf]",
      )}
    >
      <div className="relative px-6 pb-10 pt-12 md:px-12 md:pt-16">
        <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight text-black md:text-6xl">
          Our Journey So Far
        </h1>
        <p className="mx-auto mt-4 max-w-5xl text-justify text-lg text-zinc-800">
        Our journey has been one of growth, impact, and real transformation. From the United States to Liberia, Nigeria, Sierra Leone, and Ghana, we have reached thousands of families, educators, and caregivers with our awareness campaigns, educational programs, and direct support initiatives.
        </p>
        <p className="mx-auto mt-4 max-w-5xl text-justify text-lg text-zinc-800">
        Through the Jenneh Autism Awareness Program (JAAP), we have empowered over 5,000 individuals worldwide with knowledge about autism, equipping them with the tools needed to support autistic children effectively. Our Thanksgiving Basket Project has delivered essential supplies to special needs homes and orphanages across 5 countries in America and Africa, ensuring that children with autism receive the care and resources they deserve.
        </p>
        <p className="mx-auto mt-4 max-w-5xl text-justify text-lg text-zinc-800">
        We have built strong partnerships with local organizations, collaborated with dedicated caregivers, and engaged in advocacy efforts to push for more inclusive policies and environments for autistic individuals. Each step forward has been fueled by the unwavering dedication of our team, supporters, and volunteers who believe in a world where every child regardless of ability has the opportunity to thrive.
        </p>
        <p className="mx-auto mt-4 max-w-5xl text-justify text-lg text-zinc-800">
        Together, we will continue to transform lives, build stronger communities, and create a future where every autistic individual is valued, understood, and supported.
        </p>
      </div>

      <div className="grid border-t border-dashed border-zinc-400 md:grid-cols-2 lg:grid-cols-4">
        {yearCards.map((card) => (
          <div
            key={card.year}
            className="border-dashed border-zinc-400 p-7 lg:border-r last:border-r-0"
          >
            <h4 className="mt-2 text-5xl font-semibold leading-tight text-black">
              {card.year}
            </h4>
            <p className="mt-4 text-lg leading-7 text-zinc-800">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
