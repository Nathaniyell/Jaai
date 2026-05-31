import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PUZZLE_PATH = "M12 8h14v8h6v10h10v8H34v10h-8v8H12V42H8V26h4V8z";

const puzzlePieces = [
  { className: "left-[3%] top-[12%] h-10 w-10 rotate-[-12deg] text-white/[0.1] sm:h-12 sm:w-12" },
  { className: "left-[18%] top-[8%] hidden h-14 w-14 rotate-[8deg] text-[#FFC001]/[0.14] sm:block md:h-16 md:w-16" },
  { className: "right-[4%] top-[18%] h-[clamp(4rem,10vw,6rem)] w-[clamp(4rem,10vw,6rem)] rotate-[15deg] text-white/[0.09]" },
  { className: "right-[22%] top-[6%] hidden h-11 w-11 rotate-[-20deg] text-white/[0.07] lg:block" },
  { className: "left-[5%] top-[42%] hidden h-12 w-12 rotate-[22deg] text-white/[0.08] md:block" },
  { className: "right-[6%] top-[48%] h-10 w-10 rotate-[-8deg] text-[#FFC001]/[0.11] sm:h-12 sm:w-12" },
  { className: "left-[8%] bottom-[14%] h-16 w-16 rotate-[-15deg] text-[#FFC001]/[0.12] md:h-20 md:w-20" },
  { className: "left-[28%] bottom-[6%] hidden h-11 w-11 rotate-[10deg] text-white/[0.06] lg:block" },
  { className: "right-[12%] bottom-[10%] h-14 w-14 rotate-[18deg] text-white/[0.08] md:h-16 md:w-16" },
  { className: "right-[32%] bottom-[4%] hidden h-10 w-10 rotate-[-25deg] text-white/[0.05] xl:block" },
  { className: "left-[42%] top-[4%] hidden h-9 w-9 rotate-[6deg] text-white/[0.06] xl:block" },
  { className: "left-[55%] bottom-[8%] hidden h-12 w-12 rotate-[-12deg] text-[#FFC001]/[0.1] lg:block" },
];

function PuzzlePiece({ className }: { className: string }) {
  return (
    <svg className={cn("absolute", className)} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path stroke="currentColor" strokeWidth={1.2} d={PUZZLE_PATH} strokeLinejoin="round" />
    </svg>
  );
}

function HeroNetworkGraphic() {
  return (
    <svg
      className="absolute left-1/2 top-[46%] h-[min(55vw,420px)] w-[min(55vw,420px)] -translate-x-1/2 -translate-y-1/2 text-white/[0.12] sm:top-[48%] md:h-[min(48vw,460px)] md:w-[min(48vw,460px)] lg:top-[50%]"
      viewBox="0 0 360 360"
      fill="none"
      aria-hidden
    >
      <circle cx="180" cy="180" r="130" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
      <circle cx="180" cy="180" r="88" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 10" opacity="0.7" />
      <path
        d="M180 50 L240 130 L320 150 L260 230 L280 310 L180 270 L80 310 L100 230 L40 150 L120 130 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.45"
      />
      {[
        [180, 50],
        [240, 130],
        [320, 150],
        [260, 230],
        [280, 310],
        [180, 270],
        [80, 310],
        [100, 230],
        [40, 150],
        [120, 130],
        [180, 180],
      ].map(([cx, cy], i) => (
        <g key={i}>
          {i > 0 && i < 10 ? (
            <line x1="180" y1="180" x2={cx} y2={cy} stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
          ) : null}
          <circle cx={cx} cy={cy} r={i === 10 ? 10 : 6} fill="currentColor" fillOpacity={i === 10 ? 0.22 : 0.14} />
          <circle cx={cx} cy={cy} r={i === 10 ? 4 : 2.5} fill="#FFC001" fillOpacity={i === 10 ? 0.55 : 0.35} />
        </g>
      ))}
    </svg>
  );
}

function HeroBackdropDecor({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d53c4_0%,#0747ae_42%,#053884_100%)]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Soft vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_15%_30%,rgba(96,165,250,0.35)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.07)_0%,transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_85%,rgba(255,192,1,0.08)_0%,transparent_60%)]" />

      <HeroNetworkGraphic />

      {/* Flow lines – community reach */}
      <svg className="absolute inset-0 h-full w-full text-white/[0.07]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path d="M0 620 C 280 540, 420 760, 720 680 S 1180 520, 1440 600" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M0 720 C 320 660, 520 820, 820 740 S 1240 600, 1440 680" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M120 0 C 400 180, 600 80, 900 220 S 1300 360, 1440 280" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>

      {/* Dashed arcs */}
      <div className="absolute -left-[18%] top-[38%] h-[520px] w-[520px] rounded-full border border-dashed border-white/[0.12]" />
      <div className="absolute right-[-20%] top-[10%] h-[380px] w-[380px] rounded-full border border-dashed border-white/[0.1]" />
      <div className="absolute bottom-[12%] right-[35%] h-[220px] w-[220px] rounded-full border border-white/[0.08]" />

      {/* Puzzle pieces – scattered around */}
      {puzzlePieces.map((piece) => (
        <PuzzlePiece key={piece.className} className={piece.className} />
      ))}

      {/* Infinity / inclusion loop */}
      <svg
        className="absolute right-[14%] top-[14%] hidden h-28 w-28 text-white/[0.07] lg:block xl:h-36 xl:w-36"
        viewBox="0 0 120 60"
        fill="none"
        aria-hidden
      >
        <path
          d="M30 30 C30 12 48 12 60 30 C72 48 90 48 90 30 C90 12 72 12 60 30 C48 48 30 48 30 30Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

interface HeroWithMockupProps {
  title: string;
  description: string;
  titleClassName?: string;
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
  titleClassName,
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
            <h1 className={cn("text-balance text-[1.65rem] text-center md:text-left font-normal leading-[1.42] tracking-tight text-white", titleClassName)}>
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
      title="A Special Child, A Special Potential..."
      titleClassName="italic"
      description="Building autism-friendly communities through awareness, inclusion, caregiver support, and practical action."
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
