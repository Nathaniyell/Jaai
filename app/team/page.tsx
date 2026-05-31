import Image from "next/image";

import { SectionWrapper } from "@/components/section-wrapper";
import TeamShowcase, { type TeamShowcaseMember } from "@/components/team-showcase";
import { teamMembers } from "@/data/team";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("Team", "Meet the leaders and country representatives behind JAI Network's work.", "/team");

export default function TeamPage() {
  const founder = teamMembers.find((member) => member.featured);
  const others = teamMembers.filter((member) => !member.featured);
  const showcaseMembers: TeamShowcaseMember[] = others.map((member, index) => ({
    id: String(index + 1),
    name: member.name,
    role: member.role,
    image: member.image ?? "/images/jai8.jpg",
    social: {
      linkedin: "#",
      twitter: index % 2 === 0 ? "#" : undefined,
      instagram: index % 3 === 0 ? "#" : undefined,
    },
  }));

  return (
    <>
      <SectionWrapper title="Founder Spotlight" subtitle="Leadership grounded in lived experience, compassion, and measurable community impact.">
        {founder && (
          <div className="grid gap-6 rounded-3xl border border-[#0146AE]/20 bg-[#0146AE]/5 p-8 shadow-sm lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0146AE]">{founder.role}</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">{founder.name}</h2>
              <p className="mt-4 max-w-3xl text-slate-600 text-justify">{founder.bio}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src={founder.image ?? "/images/jenneh.jpg"}
                alt={`${founder.name} founder spotlight`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper title="Our Team" subtitle="The wider team supporting JAI Network programs across countries and communities.">
        <TeamShowcase members={showcaseMembers} />
      </SectionWrapper>
    </>
  );
}
