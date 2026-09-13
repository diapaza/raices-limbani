"use client";

import React from "react";
import Image from "next/image";
import { PlantaProducto } from "@/lib/mockData";
import { X, Leaf, Sparkles, CheckCircle2, AlertTriangle, Coffee } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  producto: PlantaProducto | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ producto, onClose }) => {
  const { addToCart } = useCart();

  if (!producto) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      {/* Overlay traslúcido */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FDFBF7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 z-10 animate-fade-in my-8">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/20 text-white hover:bg-stone-900/40 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          
          {/* Imagen del Producto */}
          <div className="relative min-h-[260px] sm:min-h-full bg-emerald-950 flex items-center justify-center p-6">
            <Image
              src={producto.imagenUrl}
              alt={producto.nombre}
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <span className="inline-block px-3 py-1 bg-amber-500/90 text-stone-950 font-bold text-xs rounded-full backdrop-blur-md mb-1">
                {producto.categoria}
              </span>
              <p className="text-xs text-stone-200 italic">{producto.nombreCientifico}</p>
            </div>
          </div>

          {/* Detalles e Información Tradicional */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-extrabold text-[#1E4D3B]">
                  {producto.nombre}
                </h2>
                <p className="text-xl font-bold text-amber-700 mt-1">
                  S/ {producto.precio.toFixed(2)}
                </p>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {producto.descripcionCorta}
              </p>

              {/* Beneficios clave */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Beneficios Principales
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {producto.beneficios.map((b, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modo de Preparación Tradicional */}
              <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80 space-y-1.5">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-amber-700" /> Modo de Preparación Tradicional
                </h4>
                <p className="text-xs text-amber-950 leading-relaxed">
                  {producto.preparacion}
                </p>
              </div>

              {/* Aclaración Médica Responsable */}
              <div className="p-3 bg-stone-100 rounded-xl text-[11px] text-stone-600 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  Uso tradicional documentado de la comunidad de Limbani. No reemplaza consulta o tratamiento médico profesional.
                </p>
              </div>
            </div>

            {/* Acciones */}
            <div className="pt-2">
              <button
                onClick={() => {
                  addToCart(producto);
                  onClose();
                }}
                className="w-full py-3.5 px-4 bg-[#1E4D3B] hover:bg-[#2D7A5D] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
              >
                <Leaf className="w-5 h-5 text-emerald-300" />
                <span>Agregar al Carrito (S/ {producto.precio.toFixed(2)})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
