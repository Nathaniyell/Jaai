import { cn } from "@/lib/utils";

export function Glow({ className, variant = "above" }: { className?: string; variant?: "above" | "center" }) {
  const position = variant === "above" ? "-top-40" : "top-1/2 -translate-y-1/2";

  return (
    <div
      className={cn(
        "absolute left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#0146AE]/20 blur-[120px]",
        position,
        className,
      )}
    />
  );
}
