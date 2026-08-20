import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus } from "lucide-react";
import type { CartItem } from "@/lib/cart";
import { parsePrice } from "@/lib/cart";

type MenuItem = {
  title: string;
  price: string;
  desc: string;
  tag: string;
  category: "Kopi" | "Non-Kopi" | "Makanan";
};

const items: MenuItem[] = [
  {
    title: "Es Kopi Susu Nusantara",
    price: "Rp 20rb",
    desc: "Espresso double shot, gula aren asli, dan susu segar pilihan.",
    tag: "Best Seller",
    category: "Kopi",
  },
  {
    title: "Manual Brew Gayo V60",
    price: "Rp 25rb",
    desc: "Single origin Arabika Aceh Gayo dengan aroma fruity notes yang segar.",
    tag: "Single Origin",
    category: "Kopi",
  },
  {
    title: "Americano Dingin",
    price: "Rp 18rb",
    desc: "Espresso murni dengan air dingin, pahit bersih dan menyegarkan.",
    tag: "Klasik",
    category: "Kopi",
  },
  {
    title: "Matcha Cream Latte",
    price: "Rp 22rb",
    desc: "Matcha Jepang premium dengan foam susu yang lembut dan manis pas.",
    tag: "Non-Kopi",
    category: "Non-Kopi",
  },
  {
    title: "Cokelat Panas Artisan",
    price: "Rp 21rb",
    desc: "Cokelat couverture lokal yang creamy, cocok untuk sore hari.",
    tag: "Hangat",
    category: "Non-Kopi",
  },
  {
    title: "Roti Bakar Kaya Butter",
    price: "Rp 17rb",
    desc: "Roti panggang renyah dengan selai srikaya dan butter melimpah.",
    tag: "Camilan",
    category: "Makanan",
  },
  {
    title: "Pisang Goreng Keju",
    price: "Rp 19rb",
    desc: "Pisang raja goreng renyah dengan parutan keju dan susu kental.",
    tag: "Favorit",
    category: "Makanan",
  },
];

const categories = ["Semua", "Kopi", "Non-Kopi", "Makanan"] as const;

interface MenuPreviewProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export function MenuPreview({ cart, setCart }: MenuPreviewProps) {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const filtered = active === "Semua" ? items : items.filter((i) => i.category === active);

  return (
    <section id="menu" className="bg-stone-soft/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Menu</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Menu Favorit Kami</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Pilihan racikan kopi, minuman segar, dan camilan nikmat untuk menemani hari Anda.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "border-coffee bg-coffee text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-coffee hover:text-coffee"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <MenuCard key={item.title} item={item} cart={cart} setCart={setCart} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-coffee px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-coffee-light"
          >
            Lihat Seluruh Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  cart,
  setCart,
}: {
  item: MenuItem;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}) {
  const existing = cart.find((c) => c.title === item.title);
  const qty = existing?.qty ?? 0;

  const add = () => {
    setCart((prev) => {
      const found = prev.find((c) => c.title === item.title);
      if (found) {
        return prev.map((c) => (c.title === item.title ? { ...c, qty: c.qty + 1 } : c));
      }
      return [
        ...prev,
        { title: item.title, price: parsePrice(item.price), priceLabel: item.price, qty: 1 },
      ];
    });
  };

  const update = (delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => (c.title === item.title ? { ...c, qty: Math.max(0, c.qty + delta) } : c))
        .filter((c) => c.qty > 0)
    );
  };

  return (
    <div className="group flex flex-col rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="inline-block rounded-full bg-amber/10 px-2.5 py-1 text-xs font-semibold text-amber-dark">
            {item.tag}
          </span>
          <h3 className="mt-3 font-serif text-xl font-bold text-foreground">{item.title}</h3>
        </div>
        <span className="shrink-0 font-bold text-coffee">{item.price}</span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>

      <div className="mt-6 flex items-center gap-3">
        {qty === 0 ? (
          <button
            type="button"
            onClick={add}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-coffee px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-coffee-light"
          >
            <Plus className="h-4 w-4" />
            Tambah
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => update(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-coffee hover:text-coffee"
              aria-label="Kurangi jumlah"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="flex-1 text-center font-semibold tabular-nums">{qty} di keranjang</span>
            <button
              type="button"
              onClick={add}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-coffee hover:text-coffee"
              aria-label="Tambah jumlah"
            >
              <Plus className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
