"use client";

import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrecio,
  } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppConsult = () => {
    if (cart.length === 0) return;
    const itemsList = cart
      .map(
        (item) =>
          `• ${item.producto.nombre} x${item.cantidad} (S/ ${(item.producto.precio * item.cantidad).toFixed(2)})`,
      )
      .join("%0A");

    const message = `¡Hola Equipo Guardianes de la Salud Andina! 🌿%0AQuisiera realizar una consulta/pedido de los siguientes productos de Raíces de Limbani:%0A%0A${itemsList}%0A%0A*Total estimado: S/ ${totalPrecio.toFixed(2)}*%0A%0A¿Me podrían brindar información sobre la entrega? Gracias.`;

    const numeroDestino = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
      /\D/g,
      "",
    );

    const whatsappUrl = numeroDestino
      ? `https://wa.me/${numeroDestino}?text=${message}`
      : `https://wa.me/?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Fondo oscuro traslúcido */}
      <button
        type="button"
        aria-label="Cerrar fondo del carrito"
        className="fixed inset-0 w-full h-full bg-stone-900/60 backdrop-blur-sm transition-opacity border-none cursor-default"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col border-l border-emerald-900/10 animate-slide-left">
          {/* Header del Carrito */}
          <div className="px-6 py-5 bg-[#1E4D3B] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-700/50 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-emerald-200" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Tu Carrito Medicinal</h2>
                <p className="text-xs text-emerald-200">
                  {totalItems}{" "}
                  {totalItems === 1
                    ? "producto seleccionado"
                    : "productos seleccionados"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-emerald-700/60 text-emerald-100 hover:text-white transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lista de Productos */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700">
                  <ShoppingBag className="w-10 h-10 opacity-40" />
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-1">
                  Tu carrito está vacío
                </h3>
                <p className="text-sm text-stone-600 mb-6">
                  Explora nuestros kits y productos ancestrales para añadir tus
                  infusiones medicinales.
                </p>
                <Link
                  href="/productos"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block px-6 py-2.5 bg-[#1E4D3B] text-white font-semibold text-sm rounded-xl shadow-md hover:bg-[#2D7A5D] transition-colors"
                >
                  Explorar Catálogo
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.producto.id}
                  className="flex gap-4 p-3 bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:border-emerald-200 transition-colors"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-emerald-50 flex-shrink-0 border border-stone-100">
                    <Image
                      src={item.producto.imagenUrl}
                      alt={item.producto.nombre}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-stone-900 text-base leading-tight">
                          {item.producto.nombre}
                        </h4>
                        <span className="inline-block text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md mt-1">
                          {item.producto.categoria}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.producto.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors p-1"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.producto.id, item.cantidad - 1)
                          }
                          className="px-2 py-1 hover:bg-stone-200 text-stone-700 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-stone-800">
                          {item.cantidad}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.producto.id, item.cantidad + 1)
                          }
                          className="px-2 py-1 hover:bg-stone-200 text-stone-700 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-bold text-stone-900 text-sm">
                        S/ {(item.producto.precio * item.cantidad).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer del Carrito con Subtotal y Notificación */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200/80 shadow-lg space-y-4">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Modo Vista & Consulta:</strong> Al presionar
                  solicitar, se preparará un mensaje para coordinar la entrega
                  directamente con los estudiantes de Limbani.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-stone-600 font-medium text-sm">
                  Total Estimado
                </span>
                <span className="text-2xl font-extrabold text-[#1E4D3B]">
                  S/ {totalPrecio.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppConsult}
                className="w-full py-3.5 px-4 bg-[#1E4D3B] hover:bg-[#2D7A5D] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.99]"
              >
                <span>Consultar Pedido / Solicitar</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
