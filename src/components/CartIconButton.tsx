import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartIconButton({ className = "" }: { className?: string }) {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Buka keranjang (${count} item)`}
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-coffee transition-colors hover:border-coffee hover:bg-cream ${className}`}
    >
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber px-1 text-[11px] font-bold text-coffee-dark">
          {count}
        </span>
      )}
    </button>
  );
}
