import Link from "next/link";

import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SectionWrapper title="Page Not Found" subtitle="The page you are looking for does not exist or may have moved.">
      <Link href="/" aria-label="Return to homepage">
        <Button>Back to Home</Button>
      </Link>
    </SectionWrapper>
  );
}
