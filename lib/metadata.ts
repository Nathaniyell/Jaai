import type { Metadata } from "next";

const siteName = "Jenneh Autism Awareness International";
const siteUrl = "https://jaai.org";
const description =
  "Jenneh Autism Awareness International (JAAI) promotes autism awareness, inclusive education, and caregiver support across communities.";

export function buildMetadata(
  title: string,
  pageDescription: string = description,
  path = "/",
): Metadata {
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: `${title} | ${siteName}`,
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: `${title} | ${siteName}`,
      description: pageDescription,
      url: canonicalUrl,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description: pageDescription,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export const defaultSiteDescription = description;
