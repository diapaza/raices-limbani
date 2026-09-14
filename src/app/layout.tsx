import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { defaultMetadata } from "@/lib/seo";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Raíces de Limbani - I.E.S. San Luis Gonzaga",
    url: "https://raices-limbani.vercel.app",
    logo: "https://raices-limbani.vercel.app/images/hero-limbani.jpeg",
    description:
      "Emprendimiento escolar y colectivo botánico dedicado al rescate y comercialización de plantas medicinales y saberes ancestrales de Limbani, Sandia, Puno.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Limbani",
      addressRegion: "Puno",
      addressCountry: "PE",
    },
    knowsAbout: [
      "Plantas Medicinales",
      "Medicina Tradicional Andina",
      "Saberes Ancestrales",
      "Flora Altoandina de Puno",
      "Muña",
      "Chachacoma",
    ],
  };

  return (
    <html
      lang="es"
      className={`${jakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Raíces de Limbani" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD schema.org markup, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="google-site-verification"
          content="02HQfywJE1m0eNRpHnbaHmKCPIbbNMp-tzNxUDb8Ir8"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
