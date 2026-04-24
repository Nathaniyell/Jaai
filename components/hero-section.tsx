import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import { Mockup } from "@/components/ui/mockup";
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

export function HeroWithMockup({
  title,
  description,
  primaryCta = {
    text: "Donate Now",
    href: "/donate",
  },
  secondaryCta = {
    text: "Get Involved",
    href: "/get-involved",
    icon: <ArrowUpRight className="mr-2 h-4 w-4" />,
  },
  mockupImage,
  className,
}: HeroWithMockupProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#021a45] px-4 py-12 text-white md:py-24 lg:py-32",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(1,70,174,0.95)_0%,rgba(2,26,69,0.95)_45%,rgba(1,10,32,0.98)_85%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#01091f] via-[#01091f]/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 text-center md:pt-16 lg:gap-12">
          <h1
            className={cn(
              "inline-block max-w-6xl bg-gradient-to-b from-white via-white to-white/75 bg-clip-text text-4xl font-bold leading-[1.1] tracking-tight text-transparent drop-shadow-[0_8px_28px_rgba(1,70,174,0.35)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
            )}
          >
            {title}
          </h1>

          <p className="max-w-[700px] text-base font-medium text-white/80 sm:text-lg md:text-2xl">{description}</p>

          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link href={primaryCta.href}>
              <Button
                size="lg"
                className={cn(
                  "bg-gradient-to-b from-[#1f7dff] to-[#0146AE] px-8 text-white shadow-[0_10px_30px_rgba(1,70,174,0.45)] transition-all duration-300 hover:from-[#3c8fff] hover:to-[#013f9b]",
                )}
              >
                {primaryCta.text}
              </Button>
            </Link>

            <Link href={secondaryCta.href}>
              <Button
                size="lg"
                variant="ghost"
                className="border border-white/20 bg-white/5 text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                {secondaryCta.icon}
                {secondaryCta.text}
              </Button>
            </Link>
          </div>

          <div className="relative w-full px-4 pt-12 sm:px-6 lg:px-8">
            <Mockup className={cn("border-white/10 bg-slate-900/85 shadow-[0_0_80px_-24px_rgba(1,70,174,0.55)]")}>
              <Image
                src={mockupImage.src}
                alt={mockupImage.alt}
                width={mockupImage.width}
                height={mockupImage.height}
                className="h-auto w-full"
                loading="lazy"
              />
            </Mockup>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Glow variant="above" className="opacity-80" />
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <HeroWithMockup
      title="JAAI Network"
      description="A Special Child, A Special Potential. Building autism-friendly communities through awareness, inclusion, caregiver support, and practical action."
      primaryCta={{ text: "Donate Now", href: "/donate" }}
      secondaryCta={{ text: "Get Involved", href: "/get-involved", icon: <ArrowUpRight className="mr-2 h-4 w-4" /> }}
      mockupImage={{
        src: "/images/jai11.jpg",
        alt: "JAAI hero community mockup",
        width: 1400,
        height: 900,
      }}
    />
  );
}
