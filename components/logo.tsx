import Link from "next/link";
import Image from "next/image";
import logo from "@/public/jai-logo2.png";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 py-2 sm:py-0" aria-label="JAI Network homepage">
      <Image src={logo} alt="JAI Network logo" priority className="h-auto w-[75px] sm:w-[100px]" />
    </Link>
  );
}
