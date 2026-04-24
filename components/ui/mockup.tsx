import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Mockup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl", className)}>
      {children}
    </div>
  );
}
