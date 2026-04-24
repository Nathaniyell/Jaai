import { AboutUsShowcase } from "@/components/about-us-showcase";
import { Component } from "@/components/journey-years-grid";
import { buildMetadata } from "@/lib/metadata";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata(
  "About",
  "Learn about JAAI's mission, vision, values, journey, and countries of operation.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
    <AboutUsShowcase />  
        <div className="bg-zinc-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold text-slate-900 lg:text-5xl">Why Jenneh Autism Awareness International?</h2>
          </div>
          <div className="mt-8 space-y-4 text-slate-600 text-justify">
            <p>
              Autism Spectrum Disorder (ASD) is a developmental condition that
              affects millions of individuals worldwide, yet misconceptions and
              stigma surrounding autism persist, particularly in many African
              countries. Globally, it is estimated that 1 in 100 children is
              diagnosed with autism, with diagnosis rates increasing due to
              greater awareness and improved diagnostic techniques. However, in
              many African nations, limited awareness, lack of diagnostic
              resources, and inadequate support services mean that countless
              children with autism go undiagnosed and unsupported.
            </p>
            <p>
              Families of autistic children in Africa face immense challenges,
              including social stigma, lack of educational opportunities, and
              absence of specialized healthcare services. Many children are
              mislabeled, misunderstood, or marginalized, preventing them from
              reaching their potential and leading fulϐilling lives. These
              challenges are compounded by a lack of trained professionals,
              support networks, and government policies that promote inclusion
              and acceptance.
            </p>
            <p>
              Jenneh Autism Awareness International (JAAI) was founded to
              address these gaps with a unique, multi-faceted approach that
              combines awareness, education, advocacy, and direct support. By
              operating in both the United States and key African nations, JAAI
              provides culturally relevant programs, virtual sensitization, and
              practical support tailored to each community&apos;s needs. Through
              initiatives like the Jenneh Autism Awareness Program (JAAP) and
              the Thanksgiving Basket Project, JAAI ensures that autistic
              children and their families receive the knowledge, resources, and
              community support necessary to thrive.
            </p>
            <p>
              . JAAI&apos;s intervention is unique because it bridges
              international expertise with local knowledge, fostering
              sustainable change by educating communities, supporting
              caregivers, and advocating for policy changes. JAAI&apos;s vision
              of inclusivity, empathy, and empowerment aims to dismantle
              barriers, reduce stigma, and create a world where every child,
              regardless of their abilities, is valued and supported.
            </p>
          </div>
          </div>
        
        </div>

        <Component />

        <CTASection />
    </>
  );
}
