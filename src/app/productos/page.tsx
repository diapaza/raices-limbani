import type { Metadata } from "next";
import ProductosClient from "./ProductosClient";

export const metadata: Metadata = {
  title: "Catálogo de Plantas Medicinales & Infusiones Naturales de Limbani",
  description:
    "Descubre nuestro catálogo de plantas medicinales altoandinas recopiladas en Limbani, Puno. Infusiones de Muña, Chachacoma, Eucalipto y mezclas digestivas y respiratorias preparadas por los estudiantes de la I.E.S. San Luis Gonzaga.",
  keywords: [
    "catálogo plantas medicinales",
    "comprar muña puno",
    "comprar chachacoma",
    "infusiones medicinales limbani",
    "plantas para la digestión",
    "plantas respiratorias altoandinas",
    "medicina natural limbani",
  ],
  openGraph: {
    title: "Catálogo de Plantas Medicinales | Raíces de Limbani",
    description:
      "Explora las propiedades terapéuticas y los usos tradicionales de la medicina natural altoandina de Limbani (Puno).",
    url: "https://raices-limbani.vercel.app/productos",
  },
};

export default function ProductosPage() {
  return <ProductosClient />;
}
