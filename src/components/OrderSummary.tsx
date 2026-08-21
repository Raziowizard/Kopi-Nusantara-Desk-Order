import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "@/lib/cart";
import { formatPrice } from "@/lib/cart";

interface OrderSummaryProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export function OrderSummary({ cart, setCart }: OrderSummaryProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const updateQty = (title: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.title === title ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (title: string) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  const clearCart = () => setCart([]);

  return (
    <section id="ringkasan" className="scroll-mt-24 bg-cream/50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-card p-6 shadow-sm md:p-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Ringkasan Pesanan</span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">Pesanan Anda</h2>
            </div>
            <button
              type="button"
              onClick={clearCart}
              className="text-sm font-semibold text-destructive hover:underline"
            >
              Kosongkan Pesanan
            </button>
          </div>

          <div className="mt-8 divide-y divide-border">
            {cart.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.priceLabel} / item · Subtotal {formatPrice(item.price * item.qty)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateQty(item.title, -1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-coffee hover:text-coffee"
                    aria-label="Kurangi jumlah"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-semibold tabular-nums">{item.qty}</span>
                  <button
                    type="button"
                    onClick={() => updateQty(item.title, 1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-coffee hover:text-coffee"
                    aria-label="Tambah jumlah"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(item.title)}
                    className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Hapus item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-end gap-2 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">Total perkiraan</p>
            <p className="font-serif text-3xl font-bold text-coffee">{formatPrice(total)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
