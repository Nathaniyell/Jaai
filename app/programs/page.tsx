import { ProgramsStickySection } from "@/components/programs-sticky-section";
import { CTASection } from "@/components/cta-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Programs",
  "Explore JAI Network's autism awareness, inclusion, and caregiver support programs.",
  "/programs",
);

export default function ProgramsPage() {
  return(

  <> <ProgramsStickySection />
  <CTASection />
  </>
  )
}
