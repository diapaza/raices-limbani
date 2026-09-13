"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { PlantaProducto } from "@/lib/mockData";

export interface CartItem {
  producto: PlantaProducto;
  cantidad: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (producto: PlantaProducto, cantidad?: number) => void;
  removeFromCart: (productoId: string) => void;
  updateQuantity: (productoId: string, cantidad: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  totalPrecio: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cargar carrito guardado en localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("raices_limbani_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Error al cargar carrito de localStorage", e);
    }
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    try {
      localStorage.setItem("raices_limbani_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Error al guardar carrito en localStorage", e);
    }
  }, [cart]);

  const addToCart = (producto: PlantaProducto, cantidad = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.producto.id === producto.id,
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].cantidad += cantidad;
        return newCart;
      } else {
        return [...prevCart, { producto, cantidad }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productoId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.producto.id !== productoId),
    );
  };

  const updateQuantity = (productoId: string, cantidad: number) => {
    if (cantidad <= 0) {
      removeFromCart(productoId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.producto.id === productoId ? { ...item, cantidad } : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
  const totalPrecio = cart.reduce(
    (sum, item) => sum + item.producto.precio * item.cantidad,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
