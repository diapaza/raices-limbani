"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilter } from "@/components/ProductFilter";
import { ProductModal } from "@/components/ProductModal";
import { PLANTAS_INITIAL_DATA, PlantaProducto } from "@/lib/mockData";
import { supabase } from "@/lib/supabaseClient";
import { Leaf, Sparkles, AlertCircle } from "lucide-react";

export default function ProductosPage() {
  const [productos, setProductos] = useState<PlantaProducto[]>(PLANTAS_INITIAL_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedProductForModal, setSelectedProductForModal] = useState<PlantaProducto | null>(null);
  const [loading, setLoading] = useState(false);

  // Intentar cargar productos desde Supabase si el cliente está disponible
  useEffect(() => {
    async function fetchFromSupabase() {
      if (!supabase) return;
      try {
        setLoading(true);
        const { data, error } = await supabase.from("productos").select("*");
        if (error) {
          console.warn("Supabase query warn (usando fallback mockData):", error.message);
        } else if (data && data.length > 0) {
          const mapped: PlantaProducto[] = data.map((item) => ({
            id: item.id,
            nombre: item.nombre,
            nombreCientifico: item.nombre_cientifico,
            categoria: item.categoria,
            categoriaSlug: item.categoria_slug || "todos",
            descripcionCorta: item.descripcion_corta,
            usosTradicionales: item.usos_tradicionales,
            preparacion: item.preparacion,
            precio: item.precio,
            imagenUrl: item.imagen_url || "/images/bolsa-ejemplo.jpeg",
            destacado: item.destacado,
            beneficios: item.beneficios || ["Uso Tradicional Limbani"],
          }));
          setProductos(mapped);
        }
      } catch (err) {
        console.error("Error conectando a Supabase", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFromSupabase();
  }, []);

  // Filtrar productos por búsqueda y categoría
  const filteredProducts = productos.filter((p) => {
    const matchesSearch =
      p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.descripcionCorta.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoria.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.beneficios.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "todos" || p.categoriaSlug === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
        
        {/* Banner Encabezado del Catálogo */}
        <div className="bg-gradient-to-r from-[#133327] via-[#1E4D3B] to-[#2D7A5D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full border border-emerald-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Catálogo Interactivo & Fichas Medicinales
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Botánica & Saberes Tradicionales de Limbani
            </h1>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Explora las especies medicinales altoandinas cuidadosamente seleccionadas, secadas y dosificadas por los estudiantes de la I.E.S. San Luis Gonzaga. Filtra por malestar o busca la infusión adecuada para tu bienestar.
            </p>
          </div>
        </div>

        {/* Componente de Búsqueda y Filtros */}
        <ProductFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          totalResults={filteredProducts.length}
        />

        {/* Grilla de Productos */}
        {loading ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-stone-600 font-medium text-sm">Cargando plantas medicinales...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200/80 max-w-lg mx-auto my-12 space-y-4">
            <AlertCircle className="w-12 h-12 text-stone-400 mx-auto" />
            <h3 className="text-lg font-bold text-stone-800">No encontramos coincidencias</h3>
            <p className="text-sm text-stone-600">
              Intenta buscando con otro término o seleccionando la opción &quot;Todos&quot; en los filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("todos");
              }}
              className="px-5 py-2.5 bg-[#1E4D3B] text-white font-bold text-xs rounded-xl shadow-md hover:bg-[#2D7A5D] transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onOpenDetail={(p) => setSelectedProductForModal(p)}
              />
            ))}
          </div>
        )}

        {/* Nota Informativa al pie del catálogo */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-amber-950">
          <div className="p-3 bg-amber-200/60 rounded-xl flex-shrink-0">
            <Leaf className="w-6 h-6 text-amber-800" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-amber-900 mb-0.5">Empaque e Identidad Cultural</h4>
            <p>
              Cada bolsita del kit está sellada con la hierba dosificada e incluye una ficha informativa con un código QR que permite escuchar testimonios en audio y explicaciones tradicionales grabadas por la comunidad.
            </p>
          </div>
        </div>

      </main>

      {/* Modal con la Ficha de la Planta */}
      <ProductModal
        producto={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />

      <Footer />
    </div>
  );
}
