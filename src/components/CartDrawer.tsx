import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatPrice } from "@/lib/cart";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const { items, total, count, isOpen, closeCart, updateQty, removeItem, clearCart } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-coffee-dark/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Keranjang pesanan"
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-coffee" />
            <h2 className="font-serif text-lg font-bold text-foreground">Keranjang Pesanan</h2>
            <span className="rounded-full bg-coffee/10 px-2 py-0.5 text-xs font-bold text-coffee">{count}</span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Tutup keranjang"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream">
                <ShoppingBag className="h-7 w-7 text-coffee" />
              </div>
              <p className="mt-4 font-semibold text-foreground">Keranjang masih kosong</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tambahkan menu favorit Anda dari daftar menu.
              </p>
              <Link
                to="/menu"
                onClick={closeCart}
                className="mt-5 rounded-full bg-coffee px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-coffee-light"
              >
                Lihat Seluruh Menu
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.title} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.priceLabel} · {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.title)}
                      aria-label={`Hapus ${item.title}`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQty(item.title, -1)}
                      aria-label="Kurangi jumlah"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:border-coffee hover:text-coffee"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center font-semibold tabular-nums">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.title, 1)}
                      aria-label="Tambah jumlah"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:border-coffee hover:text-coffee"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total perkiraan</span>
              <span className="font-serif text-2xl font-bold text-coffee">{formatPrice(total)}</span>
            </div>
            <Link
              to="/"
              hash="pesan"
              onClick={closeCart}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-coffee px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-coffee-light"
            >
              Lanjut Pesan via WhatsApp
            </Link>
            <div className="mt-2 flex items-center justify-between">
              <Link
                to="/menu"
                onClick={closeCart}
                className="text-sm font-semibold text-coffee hover:underline"
              >
                Tambah menu lain
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-destructive hover:underline"
              >
                Kosongkan
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
