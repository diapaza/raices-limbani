import { Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#133327] text-stone-200 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/50">
          {/* Columna 1: Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo-brand.svg"
              alt="Logo Raíces de Limbani"
              width={150}
              height={150}
              className="brightness-125"
            />
          </div>

          {/* Columna 2: Info Emprendimiento */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">
              Sobre Nosotros
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Emprendimiento escolar desarrollado por estudiantes de 3.º, 4.º y
              5.º de secundaria de la I.E.S. San Luis Gonzaga de Limbani para
              rescatar y valorar la botánica medicinal ancestral andina.
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Distrito de Limbani, Sandia, Puno</span>
            </div>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wider uppercase">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Inicio & Presentación
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Catálogo de Productos y Hierbas
                </Link>
              </li>
              <li>
                <Link
                  href="/#historia"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Investigación & Yatiris
                </Link>
              </li>
              <li>
                <Link
                  href="/#impacto"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Innovación Pedagógica con QR
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Productos Destacados */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wider uppercase">
              Hierbas Tradicionales
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>• Wisullo (Salud Femenina)</li>
              <li>• Achancara (Molestias de Próstata)</li>
              <li>• Chancapiedra (Cálculos Biliares/Renales)</li>
              <li>• Matico (Tos y Cólicos)</li>
              <li>• Wichullo (Cicatrizante)</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Raíces de Limbani. I.E.S. San Luis Gonzaga.</p>
          <div className="flex items-center gap-1 text-stone-300">
            <span>Hecho con amor y dedicación por la juventud de Limbani</span>
            <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
