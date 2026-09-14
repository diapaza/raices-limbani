"use client";

import { CheckCircle2, Eye, Leaf, Plus } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useCart } from "@/context/CartContext";
import type { PlantaProducto } from "@/lib/mockData";

interface ProductCardProps {
  producto: PlantaProducto;
  onOpenDetail: (producto: PlantaProducto) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  producto,
  onOpenDetail,
}) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Imagen del Producto usando bolsa-ejemplo.jpeg */}
        <div className="relative h-56 w-full bg-stone-100 overflow-hidden">
          <Image
            src={producto.imagenUrl}
            alt={producto.nombre}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60" />

          {/* Badge de Categoría */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 bg-[#FDFBF7]/90 backdrop-blur-md text-[#1E4D3B] font-bold text-xs rounded-full shadow-sm border border-emerald-100">
              {producto.categoria}
            </span>
          </div>

          {/* Badge de Destacado si aplica */}
          {producto.destacado && (
            <div className="absolute top-3 right-3 z-10">
              <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-extrabold text-[10px] rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Leaf className="w-3 h-3 fill-stone-950" /> Sabiduría Yatiri
              </span>
            </div>
          )}

          {/* Nombre en Overlay inferior */}
          <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
            <h3 className="text-xl font-black drop-shadow-md group-hover:text-amber-300 transition-colors">
              {producto.nombre}
            </h3>
            {producto.nombreCientifico && (
              <p className="text-xs text-stone-200 italic opacity-90">
                {producto.nombreCientifico}
              </p>
            )}
          </div>
        </div>

        {/* Contenido de la Tarjeta */}
        <div className="p-5 space-y-4">
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {producto.descripcionCorta}
          </p>

          {/* Beneficios clave (chips) */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {producto.beneficios.slice(0, 2).map((beneficio) => (
              <span
                key={beneficio}
                className="text-[11px] font-medium bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                {beneficio}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Acciones de la Tarjeta */}
      <div className="p-5 pt-0 space-y-3">
        <div className="flex items-center justify-between border-t border-stone-100 pt-3">
          <div>
            <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider block">
              Empaque tradicional
            </span>
            <span className="text-lg font-extrabold text-[#1E4D3B]">
              S/ {producto.precio.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDetail(producto)}
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
              title="Ver Ficha Completa"
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => addToCart(producto)}
              className="px-3.5 py-2.5 rounded-xl bg-[#1E4D3B] hover:bg-[#2D7A5D] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all transform active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Agregar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
