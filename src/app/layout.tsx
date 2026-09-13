import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raíces de Limbani | Saberes Ancestrales & Plantas Medicinales",
  description:
    "Emprendimiento escolar de la I.E.S. San Luis Gonzaga de Limbani (Puno). Rescatamos y difundimos el conocimiento tradicional sobre nuestras plantas medicinales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <meta name="apple-mobile-web-app-title" content="Raíces de Limbani" />
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
