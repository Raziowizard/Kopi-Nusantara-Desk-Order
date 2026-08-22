import { Minus, Plus, ShoppingBag } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem, updateQty, getQty, openCart } = useCart();
  const qty = getQty(item.title);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.title}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-amber-dark backdrop-blur-sm">
          {item.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
          <span className="shrink-0 font-bold text-coffee">{item.price}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>

        <div className="mt-5 flex items-center gap-3">
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => addItem(item)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-coffee px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-coffee-light"
            >
              <ShoppingBag className="h-4 w-4" />
              Tambah ke Keranjang
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => updateQty(item.title, -1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-coffee hover:text-coffee"
                aria-label={`Kurangi ${item.title}`}
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={openCart}
                className="flex-1 rounded-full bg-cream/60 py-2 text-center text-sm font-semibold tabular-nums text-coffee transition-colors hover:bg-cream"
              >
                {qty} di keranjang
              </button>
              <button
                type="button"
                onClick={() => addItem(item)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-coffee hover:text-coffee"
                aria-label={`Tambah ${item.title}`}
              >
                <Plus className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
