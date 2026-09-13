"use client";

import { Filter, RefreshCw, Search } from "lucide-react";
import type React from "react";
import { CATEGORIAS } from "@/lib/mockData";

interface ProductFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  totalResults: number;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  totalResults,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200/80 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Buscador de Texto */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre de planta (ej. Wisullo, Matico) o malestar..."
            className="w-full pl-12 pr-4 py-3.5 bg-stone-50 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#1E4D3B] focus:ring-2 focus:ring-emerald-900/10 font-medium text-sm text-stone-800 transition-all placeholder:text-stone-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-600 bg-stone-200 rounded-full px-2 py-0.5"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Contador de Resultados */}
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 whitespace-nowrap bg-stone-100 px-4 py-3 rounded-2xl">
          <Filter className="w-4 h-4 text-emerald-700" />
          <span>
            {totalResults}{" "}
            {totalResults === 1 ? "planta encontrada" : "plantas encontradas"}
          </span>
        </div>
      </div>

      {/* Categorías / Filtros rápidos en formato Pill Tabs */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
          Filtrar por Especialidad Tradicional:
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                type="button"
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-[#1E4D3B] text-white shadow-md scale-105"
                    : "bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-900"
                }`}
              >
                {cat.nombre}
              </button>
            );
          })}

          {(selectedCategory !== "todos" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("todos");
                setSearchQuery("");
              }}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> Restablecer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
