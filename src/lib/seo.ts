import type { Metadata } from "next";

export const baseUrl = "https://raices-limbani.vercel.app";

export const siteConfig = {
  name: "Raíces de Limbani",
  title:
    "Raíces de Limbani | Plantas Medicinales & Saberes Ancestrales de Puno",
  description:
    "Proyecto escolar y colectivo botánico de la I.E.S. San Luis Gonzaga de Limbani (Sandia, Puno). Rescatamos el conocimiento tradicional y comercializamos infusiones naturales y plantas medicinales altoandinas como muña, chachacoma, eucalipto y más.",
  url: baseUrl,
  ogImage: `${baseUrl}/images/hero-limbani.jpeg`,
  keywords: [
    "Limbani",
    "Limbani Puno",
    "Sandia Puno",
    "plantas medicinales",
    "plantas medicinales de Puno",
    "plantas medicinales del Perú",
    "saberes ancestrales",
    "medicina natural tradicional",
    "muña",
    "chachacoma",
    "infusiones medicinales",
    "I.E.S. San Luis Gonzaga",
    "emprendimiento escolar Limbani",
    "Crea y Emprende Limbani",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "I.E.S. San Luis Gonzaga - Limbani" }],
  creator: "Estudiantes y Docentes de I.E.S. San Luis Gonzaga de Limbani",
  publisher: "Raíces de Limbani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: baseUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Plantas Medicinales y Saberes Ancestrales de Limbani, Puno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: baseUrl,
  },
};
