import { Package, School, Users } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
// import Partners from "@/components/partners";

export const metadata = buildMetadata(
  "Donate",
  "Support JAI Network's programs with one-time or recurring donations.",
  "/donate",
);

const whatsappDonateUrl = "https://wa.me/+16124721228";

export default function DonatePage() {
  const supportCards = [
    {
      title: "Essential Supplies",
      description: "Provide essential supplies to special-needs homes.",
      icon: Package,
    },
    {
      title: "Community Education",
      description:
        "Educate communities to foster acceptance and reduce stigma.",
      icon: School,
    },
    {
      title: "Family Support",
      description:
        "Equip families and caregivers with resources and knowledge.",
      icon: Users,
    },
  ];

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-balance text-4xl font-semibold text-slate-900 lg:text-5xl">
            Give Today. Transform Autism Support Tomorrow.
          </h1>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Your generosity helps JAI deliver awareness programs, caregiver
            training, and practical resources for children with autism and their
            families across countries and communities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Your Gift Matters
          </h2>
          <p className="mt-3 text-slate-600">
            Every donation, big or small, helps us sustain critical programs and
            reach more communities in need.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {supportCards.map((item) => (
            <Card key={item.title} className="group shadow-black-950/5">
              <CardHeader className="pb-3 text-center">
                <div
                  aria-hidden
                  className="relative mx-auto size-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
                  <div className="absolute inset-0 m-auto flex size-10 items-center justify-center border border-slate-300 bg-white">
                    <item.icon className="size-5 text-[#0146AE]" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-slate-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center w-full">
          <Link
            href={whatsappDonateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate via WhatsApp"
          >
            <Button variant="secondary" className="w-3/4 mx-auto lg:w-1/3">
              Donate
            </Button>
          </Link>
        </div>
        {/* <div className="mt-10 lg:mt-24">
          <Partners />
        </div> */}
      </div>
    </SectionWrapper>
  );
}
