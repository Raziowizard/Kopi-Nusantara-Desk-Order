import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem } from "@/lib/cart";
import { parsePrice } from "@/lib/cart";
import type { MenuItem } from "@/lib/menu-data";

const STORAGE_KEY = "kopi-nusantara-cart";

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: MenuItem) => void;
  updateQty: (title: string, delta: number) => void;
  removeItem: (title: string) => void;
  clearCart: () => void;
  getQty: (title: string) => number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed as CartItem[]);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const addItem = useCallback((item: MenuItem) => {
    setItems((prev) => {
      const found = prev.find((c) => c.title === item.title);
      if (found) {
        return prev.map((c) => (c.title === item.title ? { ...c, qty: c.qty + 1 } : c));
      }
      return [
        ...prev,
        { title: item.title, price: parsePrice(item.price), priceLabel: item.price, qty: 1 },
      ];
    });
  }, []);

  const updateQty = useCallback((title: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((c) => (c.title === title ? { ...c, qty: Math.max(0, c.qty + delta) } : c))
        .filter((c) => c.qty > 0)
    );
  }, []);

  const removeItem = useCallback((title: string) => {
    setItems((prev) => prev.filter((c) => c.title !== title));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0);
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    return {
      items,
      count,
      total,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQty,
      removeItem,
      clearCart,
      getQty: (title: string) => items.find((i) => i.title === title)?.qty ?? 0,
    };
  }, [items, isOpen, openCart, closeCart, addItem, updateQty, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
