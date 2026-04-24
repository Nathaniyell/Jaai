import Image from "next/image";
import { HeartHandshake, Package, School, Users } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("Donate", "Support JAI Network's programs with one-time or recurring donations.", "/donate");

const options = ["One-time Donation", "Monthly Giving", "In-kind Support", "Corporate Sponsorship"];

export default function DonatePage() {
  return (
    <SectionWrapper
      title="Support Our Mission"
      subtitle="Your contribution helps us reach more children, equip caregivers, and strengthen autism-inclusive communities."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900">Choose How You Give</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {options.map((option) => (
              <div key={option} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                {option}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-[#0146AE]/40 bg-[#0146AE]/5 p-4 text-sm text-slate-700">
            Payment integration placeholder: Stripe / Paystack will be connected here.
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary">Donate Securely</Button>
            <Button variant="outline">Request Donation Info</Button>
          </div>
        </div>

        <div className="rounded-3xl bg-[#0146AE] p-6 text-white shadow-md">
          <h3 className="text-xl font-bold">Why Donate?</h3>
          <div className="mt-4 space-y-3 text-sm text-blue-100">
            <p>Every donation, big or small, helps us sustain critical programs and reach more communities in need.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Package className="mt-0.5 shrink-0 text-[#FFC001]" size={16} /> Provide essential supplies to special-needs homes.
              </li>
              <li className="flex items-start gap-2">
                <School className="mt-0.5 shrink-0 text-[#FFC001]" size={16} /> Educate communities to foster acceptance and reduce stigma.
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-0.5 shrink-0 text-[#FFC001]" size={16} /> Equip families and caregivers with resources and knowledge.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <Image
            src="/infographics/why-donate.png"
            alt="Why donate to JAI Network infographic"
            width={1400}
            height={900}
            className="h-auto w-full"
          />
        </div>
        <div className="rounded-3xl border border-[#0146AE]/20 bg-[#0146AE]/5 p-6 shadow-sm">
          <HeartHandshake className="text-[#0146AE]" aria-hidden />
          <h3 className="mt-4 text-2xl font-bold text-slate-900">To Make a Difference</h3>
          <p className="mt-3 text-slate-600">
            We are committed to creating a world of acceptance and opportunity for autistic and special-needs children and their families. Your support helps us sustain programs and expand new initiatives.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#0146AE]">Donate now and help build an inclusive future for every child.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
