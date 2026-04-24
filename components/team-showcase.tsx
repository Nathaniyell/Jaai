"use client";

import { useState } from "react";
import { FaBehance, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TeamShowcaseMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

interface TeamShowcaseProps {
  members: TeamShowcaseMember[];
}

export default function TeamShowcase({ members }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <>
      <div className="mx-auto grid w-full max-w-2xl gap-4 px-4 py-8 md:hidden">
        {members.map((member) => (
          <MobileTeamCard key={member.id} member={member} />
        ))}
      </div>

      <div className="mx-auto hidden w-full max-w-5xl select-none flex-col items-start gap-8 px-4 py-8 font-sans md:flex md:flex-row md:gap-10 md:px-6 lg:gap-14">
        <div className="flex flex-shrink-0 gap-2 overflow-x-auto pb-1 md:gap-3 md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[120px] w-[110px] sm:h-[140px] sm:w-[130px] md:h-[165px] md:w-[155px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[48px] flex flex-col gap-2 md:mt-[68px] md:gap-3">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[132px] w-[122px] sm:h-[155px] sm:w-[145px] md:h-[182px] md:w-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[22px] flex flex-col gap-2 md:mt-[32px] md:gap-3">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[125px] w-[115px] sm:h-[146px] sm:w-[136px] md:h-[172px] md:w-[162px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col gap-4 pt-0 sm:grid sm:grid-cols-2 md:flex md:flex-col md:gap-5 md:pt-2">
        {members.map((member) => (
          <MemberRow key={member.id} member={member} hoveredId={hoveredId} onHover={setHoveredId} />
        ))}
      </div>
      </div>
    </>
  );
}

function MobileTeamCard({ member }: { member: TeamShowcaseMember }) {
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div className="group relative h-[280px] overflow-hidden rounded-2xl border border-slate-200">
      <img src={member.image} alt={member.name} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/45" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-lg font-semibold leading-tight">{member.name}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/80">{member.role}</p>

        {hasSocial && (
          <div className="mt-3 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/35"
                aria-label={`${member.name} Twitter`}
              >
                <FaTwitter size={13} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/35"
                aria-label={`${member.name} LinkedIn`}
              >
                <FaLinkedinIn size={13} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/35"
                aria-label={`${member.name} Instagram`}
              >
                <FaInstagram size={13} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/35"
                aria-label={`${member.name} Behance`}
              >
                <FaBehance size={13} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamShowcaseMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn("flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-opacity duration-400", className, isDimmed ? "opacity-60" : "opacity-100")}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.77)",
        }}
      />
    </div>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamShowcaseMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div
      className={cn("cursor-pointer transition-opacity duration-300", isDimmed ? "opacity-50" : "opacity-100")}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
            isActive ? "bg-[#0146AE]/15 text-[#0146AE]" : "bg-foreground/10 text-foreground/35",
          )}
        >
          {isActive ? <ArrowUpRight size={12} /> : null}
        </span>
        <span
          className={cn(
            "text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[20px]",
            isActive ? "text-[#0146AE]" : "text-foreground/80",
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              "ml-0.5 flex items-center gap-1.5 transition-all duration-200",
              isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 pointer-events-none",
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1.5 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-[#0146AE]/10 hover:text-[#0146AE]"
                title="X / Twitter"
              >
                <FaTwitter size={13} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1.5 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-[#0146AE]/10 hover:text-[#0146AE]"
                title="LinkedIn"
              >
                <FaLinkedinIn size={13} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1.5 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-[#0146AE]/10 hover:text-[#0146AE]"
                title="Instagram"
              >
                <FaInstagram size={13} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1.5 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-[#0146AE]/10 hover:text-[#0146AE]"
                title="Behance"
              >
                <FaBehance size={13} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-1.5 pl-[27px] text-[7px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-[10px]">{member.role}</p>
    </div>
  );
}
