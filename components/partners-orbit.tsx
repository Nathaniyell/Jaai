"use client";

import { useEffect, useState } from "react";
import { Building2, HandHeart, Handshake, Megaphone, Users } from "lucide-react";
import { motion } from "framer-motion";

type PartnerNode = {
  id: number;
  name: string;
};

type PartnersOrbitProps = {
  partners: PartnerNode[];
};

export function PartnersOrbit({ partners }: PartnersOrbitProps) {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.2) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const orbitIcons = [Megaphone, Handshake, Users, Building2, HandHeart];

  return (
    <div className="relative mx-auto mt-4 flex h-[36rem] w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-[#05070b] p-6 text-white">
      <div className="pointer-events-none absolute h-[23rem] w-[23rem] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute h-[31rem] w-[31rem] rounded-full border border-white/10" />

      <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] via-[#2563eb] to-[#06b6d4]">
        <div className="h-7 w-7 rounded-full bg-white/55 backdrop-blur" />
      </div>

      <div className="absolute inset-0">
        {partners.map((partner, index) => {
          const angle = ((index / partners.length) * 360 + rotationAngle) % 360;
          const radius = 210;
          const radian = (angle * Math.PI) / 180;
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);
          const Icon = orbitIcons[index % orbitIcons.length];

          return (
            <motion.div
              key={partner.id}
              className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
              whileHover={{ scale: 1.08 }}
              aria-label={`${partner.name} orbit node`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 bg-black text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] transition hover:border-white">
                <Icon size={16} />
              </div>
              <p className="mt-2 whitespace-nowrap text-sm font-medium text-white/75">{partner.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
