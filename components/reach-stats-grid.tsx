"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { Calendar, Globe2, TrendingUp, Users } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const counters = [
  { icon: <TrendingUp />, value: 5000, label: "Lives Impacted", suffix: "+" },
  { icon: <Globe2 />, value: 5, label: "Countries Reached", suffix: "+" },
  { icon: <Calendar />, value: 4, label: "Years of Service", suffix: "+" },
  { icon: <Users />, value: 250, label: "Volunteers Mobilized Across more than 5 countries", suffix: "+" },
];

export function ReachStatsGrid() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={statsRef}
      className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {counters.map((counter, idx) => (
        <StatCounter
          key={counter.label}
          icon={counter.icon}
          value={counter.value}
          suffix={counter.suffix}
          label={counter.label}
          delay={idx * 0.12}
        />
      ))}
    </motion.div>
  );
}

function StatCounter({
  icon,
  value,
  label,
  suffix,
  delay,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const springValue = useSpring(0, { stiffness: 50, damping: 12 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <motion.div
      ref={countRef}
      className="rounded-xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0146AE]/10 text-[#0146AE]">{icon}</div>
      <div className="flex items-center justify-center text-3xl font-bold text-[#202e44]">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="mt-1 text-sm text-[#202e44]/70">{label}</p>
    </motion.div>
  );
}
