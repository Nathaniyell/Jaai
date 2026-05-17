import Link from "next/link";
import Image from "next/image";
// import { Leaf } from "lucide-react";

import logo from "@/public/images/jai-logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Legacy prop kept for compatibility; default branding uses full PNG on inner pages. */
  light?: boolean;
  variant?: "default" | "hero";
};

export function Logo({ variant = "default" }: LogoProps) {
  if (variant === "hero") {
    return (
      <Link href="/" className="inline-flex shrink-0 items-center gap-3 py-2 sm:py-0" aria-label="JAI Network homepage">
       
        <Image src={logo} alt="JAI Network logo" priority className={cn("h-auto w-[40px] sm:w-[45px] rounded-full")} />
        <span className="text-lg font-bold tracking-tight text-white drop-shadow-sm sm:text-xl">JAI Network</span>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center gap-2 py-2 sm:py-0" aria-label="JAI Network homepage">
      <Image src={logo} alt="JAI Network logo" priority className={cn("h-auto w-[40px] sm:w-[45px] rounded-full")} />
      <span className="text-lg font-bold tracking-tight text-blue-700 drop-shadow-sm sm:text-xl">JAI Network</span>
    </Link>
  );
}
