import { SectionWrapper } from "@/components/section-wrapper";
import { OrbitingAvatarsCTA } from "@/components/orbiting-avatars-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Get Involved",
  "Join JAI Network as a volunteer, partner, advocate, or supporter.",
  "/get-involved",
);


export default function GetInvolvedPage() {
  return (
    <SectionWrapper title="Get Involved" subtitle="There are many ways to stand with autistic children and their families.">      
      <div className="mt-10">
        <OrbitingAvatarsCTA
          title="Support Children, Support Families"
          description="Every contribution helps JAI Network expand autism awareness, family support services, and inclusive education."
          actions={[
            { text: "Volunteer", href: "/get-involved" },
            { text: "Partner", href: "/donate" },
            { text: "Donate", href: "/donate" },
          ]}
          orbitRadius={18}
          avatars={[
            { src: "/images/jai-kid.jpg", alt: "JAI Network community member 1" },
            { src: "/images/jai-kid1.jpg", alt: "JAI Network community member 2" },
            { src: "/images/jai-kid2.jpg", alt: "JAI Network community member 3" },
            { src: "/images/jai.jpg", alt: "JAI Network community member 4" },
            { src: "/images/real-jai.jpg", alt: "JAI Network community member 5" },
            { src: "/images/jai-kid3.jpg", alt: "JAI Network community member 6" },         
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
