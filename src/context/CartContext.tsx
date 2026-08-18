"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types";

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: CartItem) => void;
  hasItem: (id: string) => boolean;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "um-no-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem: (item) =>
        setItems((prev) =>
          prev.some((i) => i.id === item.id) ? prev : [...prev, item]
        ),
      removeItem: (id) =>
        setItems((prev) => prev.filter((i) => i.id !== id)),
      toggleItem: (item) =>
        setItems((prev) =>
          prev.some((i) => i.id === item.id)
            ? prev.filter((i) => i.id !== item.id)
            : [...prev, item]
        ),
      hasItem: (id) => items.some((i) => i.id === id),
      clear: () => setItems([]),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}
