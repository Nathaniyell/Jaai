"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b-2 pb-1 text-lg font-medium transition",
                  isActive
                    ? "border-[#0146AE] text-[#0146AE]"
                    : "border-transparent text-slate-700 hover:border-[#0146AE] hover:text-[#0146AE]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/donate" aria-label="Go to donate page">
            <Button variant="secondary">Donate</Button>
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={cn("border-t border-slate-200 bg-white lg:hidden", mobileOpen ? "block" : "hidden")}>
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0146AE]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/donate" className="pt-2" onClick={() => setMobileOpen(false)}>
            <Button variant="secondary" className="w-full">
              Donate
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
