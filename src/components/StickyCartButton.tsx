import { ShoppingBag } from "lucide-react";
import type { CartItem } from "@/lib/cart";
import { formatPrice } from "@/lib/cart";

interface StickyCartButtonProps {
  cart: CartItem[];
}

export function StickyCartButton({ cart }: StickyCartButtonProps) {
  if (cart.length === 0) return null;

  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const scrollToSummary = () => {
    document.getElementById("ringkasan")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-5 pointer-events-none">
      <button
        type="button"
        onClick={scrollToSummary}
        className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-coffee px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl transition-transform hover:scale-[1.03] hover:bg-coffee-light focus:outline-none focus:ring-2 focus:ring-amber"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber px-1 text-[11px] font-bold text-coffee-dark">
            {count}
          </span>
        </span>
        Lihat Keranjang
        <span className="rounded-full bg-coffee-dark/40 px-3 py-1 text-xs font-bold tabular-nums">
          {formatPrice(total)}
        </span>
      </button>
    </div>
  );
}
