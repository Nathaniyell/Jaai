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
            { src: "/images/jai1.jpg", alt: "JAI Network community member 1" },
            { src: "/images/jai2.jpg", alt: "JAI Network community member 2" },
            { src: "/images/jai3.jpg", alt: "JAI Network community member 3" },
            { src: "/images/jai4.jpg", alt: "JAI Network community member 4" },
            { src: "/images/jai5.jpg", alt: "JAI Network community member 5" },
            { src: "/images/jai6.jpg", alt: "JAI Network community member 6" },
            { src: "/images/jai7.jpg", alt: "JAI Network community member 7" },
            { src: "/images/jai8.jpg", alt: "JAI Network community member 8" },
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
