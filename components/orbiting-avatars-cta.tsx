"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

const Styles = () => {
  const css = `
    @keyframes orbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes counter-orbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    .animate-orbit {
      animation: orbit var(--orbit-duration) linear infinite;
    }
    .animate-counter-orbit {
      animation: counter-orbit var(--orbit-duration) linear infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `;
  return <style>{css}</style>;
};

type Avatar = {
  src: string;
  alt: string;
};

type OrbitingAvatarsCTAProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  actions: {
    text: string;
    href: string;
    buttonProps?: Omit<ButtonProps, "children">;
  }[];
  avatars: Avatar[];
  className?: string;
  orbitRadius?: number;
  orbitDuration?: number;
};

export function OrbitingAvatarsCTA({
  title,
  description,
  actions,
  avatars,
  className,
  orbitRadius = 17,
  orbitDuration = 36,
}: OrbitingAvatarsCTAProps) {
  const radiusInPx = orbitRadius * 16;

  return (
    <>
      <Styles />
      <section className={cn("relative flex h-[50rem] w-full items-center justify-center overflow-hidden rounded-3xl bg-white", className)}>
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/70" />
          <div className="absolute left-1/2 top-1/2 h-[49rem] w-[49rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
          <p className="max-w-md text-slate-600">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {actions.map((action) => (
              <Link key={action.text} href={action.href} aria-label={`Go to ${action.text.toLowerCase()} page`}>
                <Button size="lg" variant={action.text === "Donate" ? "secondary" : "outline"} {...action.buttonProps}>
                  {action.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="absolute inset-0 z-0 animate-orbit"
          style={{ "--orbit-duration": `${orbitDuration}s` } as React.CSSProperties}
        >
          {avatars.map((avatar, i) => {
            const angle = (i / avatars.length) * 2 * Math.PI;
            const x = Math.cos(angle) * radiusInPx;
            const y = Math.sin(angle) * radiusInPx;

            return (
              <div
                key={avatar.alt + i}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
              >
                <div className="relative h-14 w-14 animate-float" style={{ animationDelay: `-${i * 0.8}s` }}>
                  <Image
                    width={56}
                    height={56}
                    src={avatar.src}
                    alt={avatar.alt}
                    className="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md ring-2 ring-white"
                    style={{ "--orbit-duration": `${orbitDuration}s` } as React.CSSProperties}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
