"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

function NavLinks({
  pathname,
  items,
  isHome,
}: {
  pathname: string;
  items: typeof navItems;
  isHome: boolean;
}) {
  return (
    <>
      {items.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "border-b-2 pb-1 text-[15px] font-medium transition",
              isActive
                ? isHome
                  ? "border-[#FFC001] text-white"
                  : "border-[#0146AE] text-[#0146AE]"
                : isHome
                  ? "border-transparent text-white/85 hover:border-[#FFC001]/70 hover:text-white"
                  : "border-transparent text-slate-700 hover:border-[#0146AE] hover:text-[#0146AE]",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const primaryNavItems = navItems.filter((item) => item.href !== "/get-involved");
  const showScrolledNav = scrolled || mobileOpen;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const getInvolvedButton = (
    <Button
      className={cn(
        "gap-2 rounded-full px-5 shadow-lg",
        isHome
          ? "border border-white/15 bg-gradient-to-b from-[#2d4fd8] to-[#1e3ead] text-white hover:from-[#3859e0] hover:to-[#2548c4]"
          : "bg-[#0146AE] text-white hover:bg-[#013b93]",
      )}
    >
      <User className="h-4 w-4 opacity-95" aria-hidden />
      Get Involved
    </Button>
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
          isHome
            ? showScrolledNav
              ? "border-b border-white/10 bg-[#04286b]/90 shadow-sm backdrop-blur-md"
              : "bg-transparent"
            : "border-b border-slate-200 bg-white/95 backdrop-blur-md",
        )}
      >
        <div className={cn("mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-8", isHome ? "max-w-[1280px] py-5" : "max-w-full py-4")}>
        {isHome ? (
          <>
            <Logo variant="hero" />
            <nav className="hidden items-center gap-6 lg:flex lg:gap-8" aria-label="Primary navigation">
              <NavLinks pathname={pathname} items={primaryNavItems} isHome />
              <Link href="/get-involved" aria-label="Go to get involved page">
                {getInvolvedButton}
              </Link>
            </nav>
            <button
              className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </>
        ) : (
          <>
            <Logo />
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
              <NavLinks pathname={pathname} items={primaryNavItems} isHome={false} />
              <Link href="/get-involved" aria-label="Go to get involved page">
                {getInvolvedButton}
              </Link>
            </nav>
            <button
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </>
        )}
        </div>
      </header>

      {!isHome && <div className="h-[73px] shrink-0" aria-hidden />}

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className={cn(
                "fixed left-0 top-0 z-50 flex h-full w-[min(85vw,320px)] flex-col shadow-xl lg:hidden",
                isHome ? "border-r border-white/10 bg-[#04286b]" : "border-r border-slate-200 bg-white",
              )}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <nav className="flex flex-col gap-2 px-4 pb-6 pt-24 sm:px-6" aria-label="Mobile navigation">
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium",
                      isHome ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100 hover:text-[#0146AE]",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/get-involved" className="pt-2" onClick={() => setMobileOpen(false)}>
                  <Button
                    className={cn(
                      "w-full gap-2",
                      isHome
                        ? "bg-gradient-to-b from-[#2d4fd8] to-[#1e3ead] text-white hover:from-[#3859e0] hover:to-[#2548c4]"
                        : "bg-[#0146AE] text-white hover:bg-[#013b93]",
                    )}
                  >
                    <User className="h-4 w-4" aria-hidden />
                    Get Involved
                  </Button>
                </Link>
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
