"use client";

import type React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Globe2,
  HandHeart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

type FeatureItem = {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  position: "left" | "right";
};

const features: FeatureItem[] = [
  {
    icon: <Megaphone className="h-6 w-6" />,
    secondaryIcon: <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: "Mission",
    description:
      "Raise global autism awareness and deliver support systems for children with special needs and their families through education, advocacy, and community action.",
    position: "left",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    secondaryIcon: <CheckCircle className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: "Vision",
    description:
      "Create a world where individuals with autism are understood, accepted, and empowered to live fulfilling lives.",
    position: "left",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    secondaryIcon: <Star className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: "Education",
    description:
      "Equip caregivers, educators, and communities with practical knowledge to improve autism support and outcomes.",
    position: "left",
  },
  {
    icon: <HandHeart className="h-6 w-6" />,
    secondaryIcon: <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: "Support for Families",
    description:
      "Provide resources, workshops, and emotional support networks that strengthen family resilience and caregiving confidence.",
    position: "right",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    secondaryIcon: <CheckCircle className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: "Advocacy for Inclusion",
    description:
      "Promote policies and community practices that protect dignity, rights, and inclusion for autistic individuals.",
    position: "right",
  },
  {
    icon: <Users className="h-6 w-6" />,
    secondaryIcon: <Star className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: "Capacity Building",
    description:
      "Train local stakeholders and partners to ensure sustainable, community-owned autism support systems.",
    position: "right",
  },
];

const counters = [
  { icon: <TrendingUp />, value: 5000, label: "Lives Impacted", suffix: "+" },
  { icon: <Globe2 />, value: 5, label: "Countries Reached", suffix: "+" },
  { icon: <Calendar />, value: 4, label: "Years of Service", suffix: "+" },
  { icon: <Users />, value: 250, label: "Volunteers Mobilized", suffix: "+" },
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

export function AboutUsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F7FB] to-white px-4 py-20 text-[#202e44]"
    >
      <motion.div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-[#0146AE]/5 blur-3xl" style={{ y: y1 }} />
      <motion.div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#FFC001]/10 blur-3xl" style={{ y: y2 }} />

      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0.7 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-14 text-center">
          <span className="mb-2 inline-flex items-center gap-2 font-medium text-[#0146AE]">
            <Zap className="h-4 w-4" />
            OUR MISSION IN ACTION
          </span>
          <h2 className="text-4xl font-light md:text-5xl">Mission, Vision &amp; Values</h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#0146AE]" />
          <p className="mx-auto mt-6 max-w-3xl text-slate-600">
            We combine advocacy, education, and direct support to ensure autistic children and their families receive the
            knowledge, resources, and community support they need to thrive.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-12">
            {features
              .filter((item) => item.position === "left")
              .map((item, idx) => (
                <FeatureItem key={item.title} item={item} delay={idx * 0.15} direction="left" />
              ))}
          </div>

          <div className="order-first mb-8 flex items-center justify-center md:order-none md:mb-0">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-xs"
            >
              <div className="overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/images/jai.jpg"
                  alt="JAI Network community support work"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                />
               
              </div>
              <div className="absolute -inset-3 -z-10 rounded-xl border-4 border-[#A9BBC8]" />
            </motion.div>
          </div>

          <div className="space-y-12">
            {features
              .filter((item) => item.position === "right")
              .map((item, idx) => (
                <FeatureItem key={item.title} item={item} delay={idx * 0.15} direction="right" />
              ))}
          </div>
        </div>

        <ReachStatsGrid />
      </motion.div>
    </section>
  );
}

function FeatureItem({ item, delay, direction }: { item: FeatureItem; delay: number; direction: "left" | "right" }) {
  return (
    <motion.div
      className="group flex flex-col"
      initial={{ opacity: 0, x: direction === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <div className="mb-3 flex items-center gap-3">
        <motion.div
          className="relative rounded-lg bg-[#0146AE]/10 p-3 text-[#0146AE] transition-colors duration-300 group-hover:bg-[#0146AE]/20"
          whileHover={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.45 }}
        >
          {item.icon}
          {item.secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-[#202e44] transition-colors duration-300 group-hover:text-[#0146AE]">{item.title}</h3>
      </div>
      <p className="pl-12 text-sm leading-relaxed text-[#202e44]/80">{item.description}</p>
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
