"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Heart,
  Leaf,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { PLANTAS_INITIAL_DATA, type PlantaProducto } from "@/lib/mockData";

export default function Home() {
  const [selectedProductForModal, setSelectedProductForModal] =
    useState<PlantaProducto | null>(null);

  // Seleccionar plantas destacadas para el Landing Page (ej. Wisullo, Chancapiedra, Matico)
  const plantasDestacadas = PLANTAS_INITIAL_DATA.filter(
    (p) => p.destacado,
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] selection:bg-emerald-200 selection:text-emerald-950">
      <Header />

      <main className="flex-1 pb-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden min-h-[75vh] flex items-center bg-stone-950 py-16 sm:py-24 lg:py-32">
          {/* Imagen utilizada como background del Hero */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Paisaje y naturaleza medicinal de Limbani"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              quality={90}
            />
            {/* Overlay graduado para legibilidad del contenido */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/60 sm:via-stone-950/85" />
            <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
          </div>

          {/* Contenido del Hero */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-bold shadow-md backdrop-blur-md">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  Concurso Crea y Emprende 2026 — I.E.S. San Luis Gonzaga
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  Rescatamos la{" "}
                  <span className="text-emerald-400">SABIDURÍA ANCESTRAL</span>{" "}
                  de las montañas de Limbani.
                </h1>
                <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl">
                  Un emprendimiento escolar desarrollado por estudiantes de 3.º,
                  4.º y 5.º de secundaria. Transformamos los conocimientos
                  ancestrales sobre plantas nativas altoandinas en kits
                  informativos y productos de bienestar con identidad cultural.
                </p>
              </div>

              {/* Botones CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/productos"
                  className="px-8 py-4 bg-[#1E4D3B] hover:bg-[#2D7A5D] text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all transform active:scale-95 group border border-emerald-600/30"
                >
                  <Leaf className="w-5 h-5 text-emerald-300 group-hover:rotate-12 transition-transform" />
                  <span>Ver Catálogo de Plantas</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#historia"
                  className="px-8 py-4 bg-stone-900/60 hover:bg-stone-800/80 text-white font-bold text-base rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center gap-2 transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span>Nuestra Historia</span>
                </a>
              </div>

              {/* Badges de confianza & Ubicación */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 text-xs text-stone-300">
                <div>
                  <span className="block font-black text-2xl text-amber-400">
                    7+
                  </span>
                  <span className="text-stone-300 font-medium">
                    Plantas Validadas
                  </span>
                </div>
                <div>
                  <span className="block font-black text-2xl text-amber-400">
                    100%
                  </span>
                  <span className="text-stone-300 font-medium">
                    Biodegradable
                  </span>
                </div>
                <div>
                  <span className="block font-black text-2xl text-amber-400">
                    QR
                  </span>
                  <span className="text-stone-300 font-medium">
                    Audio Testimonial
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block font-bold text-sm text-emerald-300">
                    Limbani, Sandia
                  </span>
                  <span className="text-stone-300 font-medium">
                    Saberes Yatiris / Hampiris
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN HISTORIA & PROPÓSITO (#historia) */}
        <section
          id="historia"
          className="py-16 bg-[#F3EFE6] border-y border-stone-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                <Heart className="w-3.5 h-3.5 text-amber-700" /> El Proyecto
                Educativo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Guardianes de la Salud Andina
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                El proyecto surge ante la problemática observada en las
                comunidades altoandinas: el progresivo olvido del conocimiento
                ancestral que se transmitía oralmente. Los estudiantes de
                secundaria tomamos la iniciativa de rescatarlo y estructurarlo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tarjeta 1 */}
              <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-4 hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  Entrevistas & Diálogo
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Realizamos entrevistas abiertas en quechua y español a
                  abuelos, *yatiris* y sabios de la comunidad para documentar
                  las propiedades reales de las hierbas silvestres.
                </p>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-4 hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  Secado & Dosificación
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Recolección sostenible y secado a la sombra. Empaquetamos la
                  dosis exacta en bolsitas biodegradables listas para infusionar
                  con trazabilidad origen.
                </p>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-4 hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  Ficha & Audio QR
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Cada kit incluye una ficha didáctica con tipografía clara y un
                  código QR interactivo con testimonios en audio pensados para
                  personas adultas mayores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN PLANTAS DESTACADAS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Selección de Sabiduría Ancestral
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                Plantas Tradicionales de Limbani
              </h2>
            </div>
            <Link
              href="/productos"
              className="text-xs font-bold text-[#1E4D3B] hover:text-emerald-700 flex items-center gap-1 group"
            >
              <span>Ver todas las 7 plantas en el catálogo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plantasDestacadas.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onOpenDetail={(p) => setSelectedProductForModal(p)}
              />
            ))}
          </div>
        </section>

        {/* SECCIÓN INNOVACIÓN & ACCESIBILIDAD (#impacto) */}
        <section
          id="impacto"
          className="py-16 bg-[#F3EFE6] border-y border-stone-200/80 mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full border border-amber-200/60">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />{" "}
                  Accesibilidad e Inclusión Cultural
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                  Pensado para abuelos, familias y hablantes de Quechua
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Entendemos que el conocimiento pertenece a la comunidad. Por
                  eso diseñamos nuestras fichas informativas con texto de alto
                  contraste, dibujos claros y un código QR gratuito que
                  reproduce las explicaciones en audio, facilitando el acceso a
                  personas mayores o quechua-hablantes.
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-medium text-stone-700 pt-2">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-stone-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Fichas
                    impresas en papel reciclado
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-stone-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />{" "}
                    Trazabilidad de origen por comunero
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white text-stone-900 p-6 rounded-3xl shadow-sm text-center space-y-3 max-w-xs border border-stone-200">
                  <Image
                    src="/images/qr.png"
                    alt="Escanea Aquí"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                  <h4 className="font-bold text-sm">Escanea Aquí</h4>
                  <p className="text-[11px] text-stone-600">
                    Accede a la explicación de dosis y preparación en video.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AVISO DE RESPONSABILIDAD MÉDICA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/80 flex items-start gap-4 text-xs text-amber-950">
            <ShieldCheck className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900">
                Nota de Responsabilidad Social y Salud
              </h4>
              <p className="leading-relaxed">
                Este proyecto documenta y difunde el conocimiento tradicional
                tal como lo transmiten las familias y comuneros de Limbani con
                fines educativos y de rescate cultural. Estos usos corresponden
                a la medicina tradicional andina y no reemplazan el diagnóstico
                ni el tratamiento de un profesional de la salud. Ante síntomas
                graves, siempre se debe acudir a un establecimiento médico.
              </p>
            </div>
          </div>
        </section>
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
