import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "jaap",
    title: "Jenneh Autism Awareness Program (JAAP)",
    summary: "A weekly sensitization program that educates communities and caregivers about autism.",
    description:
      "JAAP is a virtual weekly sensitization program designed to educate the global community about autism. Through webinars, live sessions, and practical discussions, it helps parents, educators, and caregivers raise and support autistic children with confidence.",
    category: "Education",
    countries: ["United States", "Liberia", "Nigeria", "Sierra Leone", "Ghana"],
    impactMetric: "5000+ individuals empowered worldwide",
  },
  {
    slug: "thanksgiving-basket-project",
    title: "Thanksgiving Basket Project",
    summary: "Essential items and support for orphanages and special-needs homes.",
    description:
      "This initiative distributes food, hygiene supplies, educational materials, and assistive devices to special-needs homes and orphanages. It is delivered seasonally through local partner organizations and donors.",
    category: "Relief",
    countries: ["United States", "Liberia", "Nigeria", "Sierra Leone", "Ghana"],
    impactMetric: "Cross-country seasonal support across 5 regions",
  },
  {
    slug: "caregiver-workshops",
    title: "Parent and Caregiver Workshops",
    summary: "Interactive workshops that equip families with practical autism-care tools.",
    description:
      "These workshops focus on behavioral management, communication techniques, therapy options, and emotional support. Sessions are delivered virtually and in-person by experienced facilitators and caregivers.",
    category: "Capacity Building",
    countries: ["Nigeria", "Liberia", "United States"],
    impactMetric: "Expert-led practical sessions for caregivers",
  },
  {
    slug: "school-inclusion",
    title: "School Inclusion Initiatives",
    summary: "Helping schools create autism-friendly learning environments.",
    description:
      "JAAI partners with teachers and school leaders to improve inclusive policy, staff confidence, and classroom adaptations for learners with autism.",
    category: "Inclusion",
    countries: ["Ghana", "Sierra Leone"],
    impactMetric: "70+ schools supported",
  },
];
