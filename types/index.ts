export type NavItem = {
  label: string;
  href: string;
};

export type Program = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  countries: string[];
  impactMetric: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  country: string;
  image?: string;
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  location: string;
};

export type Story = {
  title: string;
  excerpt: string;
  program: string;
};
