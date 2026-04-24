import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, title, subtitle, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20", className)}>
      {(title || subtitle) && (
        <div className="mb-8 max-w-3xl mx-auto text-center">
          {title && <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">{title}</h2>}
          {subtitle && <p className="mt-3 text-base text-slate-600 sm:text-xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
