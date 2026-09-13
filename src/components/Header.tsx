"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Leaf, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-emerald-900/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo de la marca usando logo-xl.svg */}
        <Link href="/" className="flex items-center transition-transform hover:scale-[1.02]" aria-label="Raíces de Limbani - Inicio">
          <Image
            src="/logo-xl.svg"
            alt="Logo Raíces de Limbani"
            width={160}
            height={52}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-stone-700 hover:text-[#1E4D3B] font-medium text-sm transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/#historia"
            className="text-stone-700 hover:text-[#1E4D3B] font-medium text-sm transition-colors"
          >
            Saberes Ancestrales
          </Link>
          <Link
            href="/productos"
            className="text-stone-700 hover:text-[#1E4D3B] font-semibold text-sm transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-emerald-50 text-emerald-900"
          >
            <Leaf className="w-4 h-4 text-emerald-600" /> Catálogo de Productos
          </Link>
          <Link
            href="/#impacto"
            className="text-stone-700 hover:text-[#1E4D3B] font-medium text-sm transition-colors"
          >
            Impacto Escolar
          </Link>
        </nav>

        {/* Acciones (Boton Carrito + Menú Móvil) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-[#1E4D3B] text-white hover:bg-[#2D7A5D] shadow-md transition-all flex items-center gap-2 group"
            aria-label="Abrir Carrito"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline font-bold text-xs">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FDFBF7] shadow-sm animate-bounce">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Menú Móvil desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-stone-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-semibold"
          >
            Inicio
          </Link>
          <Link
            href="/#historia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-semibold"
          >
            Saberes Ancestrales
          </Link>
          <Link
            href="/productos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-emerald-800 font-bold bg-emerald-50 px-3 rounded-lg"
          >
            Catálogo de Productos
          </Link>
          <Link
            href="/#impacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-semibold"
          >
            Impacto Escolar
          </Link>
        </div>
      )}
    </header>
  );
};
