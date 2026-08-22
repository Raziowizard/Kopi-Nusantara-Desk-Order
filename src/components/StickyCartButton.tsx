import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/cart";
import { useCart } from "@/lib/cart-context";

export function StickyCartButton() {
  const { count, total, openCart, isOpen } = useCart();

  if (count === 0 || isOpen) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-5">
      <button
        type="button"
        onClick={openCart}
        className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-coffee px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl transition-transform hover:scale-[1.03] hover:bg-coffee-light focus:outline-none focus:ring-2 focus:ring-amber"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber px-1 text-[11px] font-bold text-coffee-dark">
            {count}
          </span>
        </span>
        Lihat Keranjang
        <span className="rounded-full bg-coffee-dark/40 px-3 py-1 text-xs font-bold">{formatPrice(total)}</span>
      </button>
    </div>
  );
}
