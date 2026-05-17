import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroWithMockupProps {
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  mockupImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
}

function HeroBackdropDecor({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d53c4_0%,#0747ae_42%,#053884_100%)]" />

      {/* Soft vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_15%_30%,rgba(96,165,250,0.35)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.07)_0%,transparent_35%)]" />

      {/* Dashed arcs */}
      <div className="absolute -left-[18%] top-[38%] h-[520px] w-[520px] rounded-full border border-dashed border-white/[0.12]" />
      <div className="absolute right-[-20%] top-[10%] h-[380px] w-[380px] rounded-full border border-dashed border-white/[0.1]" />
      <div className="absolute bottom-[12%] right-[35%] h-[220px] w-[220px] rounded-full border border-white/[0.08]" />

      {/* Puzzle piece – faint watermark */}
      <svg className="absolute right-[6%] top-[22%] h-[clamp(5rem,12vw,7rem)] w-[clamp(5rem,12vw,7rem)] text-white/[0.08]" viewBox="0 0 64 64" fill="none" aria-hidden>
        <path
          stroke="currentColor"
          strokeWidth={1.2}
          d="M12 8h14v8h6v10h10v8H34v10h-8v8H12V42H8V26h4V8z"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function HeroWithMockup({
  title,
  description,
  primaryCta = {
    text: "Donate Now",
    href: "/donate",
  },
  secondaryCta,
  mockupImage,
  className,
}: HeroWithMockupProps) {
  return (
    <section className={cn("relative overflow-hidden text-white", className)}>
      <HeroBackdropDecor />

      <div className="relative mx-auto max-w-full px-4 sm:px-6 pt-8 sm:pt-0 lg:px-0 lg:pl-8">
        <div className="grid items-center gap-10 sm:pb-18 pt-[5.25rem] md:pb-32 md:pt-[6rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:pb-36 lg:pt-[7rem]">
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <h1 className="text-balance text-[1.65rem] text-center md:text-left font-normal leading-[1.42] tracking-tight text-white">
              {title}
            </h1>

            {description ? <p className="mt-5 max-w-xl text-base text-center md:text-left font-medium text-white/85 sm:text-lg">{description}</p> : null}

            <div className="relative z-10 mt-7 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className={cn(
                    "rounded-full bg-[#FFC001] px-9 text-base font-bold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition-all duration-300 hover:bg-[#e4ae00] sm:text-lg",
                  )}
                >
                  {primaryCta.text}
                </Button>
              </Link>

              {secondaryCta ? (
                <Link href={secondaryCta.href}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="rounded-full border border-white/20 bg-white/5 text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    {secondaryCta.icon}
                    {secondaryCta.text}
                  </Button>
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none lg:justify-self-end">
       

            <Image
              src={mockupImage.src}
              alt={mockupImage.alt}
              width={mockupImage.width}
              height={mockupImage.height}
              className="relative z-[1] mx-auto h-auto w-full max-w-[min(100%,560px)] object-contain object-bottom drop-shadow-[0_28px_48px_rgba(0,0,0,0.22)] lg:max-w-[620px]"
              priority
              sizes="(min-width: 1024px) 48vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <HeroWithMockup
      title="A Special Child, A Special Potential. Building autism-friendly communities through awareness, inclusion, caregiver support, and practical action."
      description=""
      primaryCta={{ text: "Donate Now", href: "/donate" }}
      secondaryCta={undefined}
      mockupImage={{
        src: "/images/hero-cropped2.png",
        alt: "Caregiver and child reading together – JAI Network",
        width: 900,
        height: 1100,
      }}
    />
  );
}
