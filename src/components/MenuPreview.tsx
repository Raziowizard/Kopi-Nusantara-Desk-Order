import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MenuItemCard } from "@/components/MenuItemCard";
import { menuCategories, menuItems, type MenuFilter } from "@/lib/menu-data";

const featured = menuItems.filter((i) => i.featured);

export function MenuPreview() {
  const [active, setActive] = useState<MenuFilter>("Semua");
  const filtered = active === "Semua" ? featured : featured.filter((i) => i.category === active);

  return (
    <section id="menu" className="scroll-mt-24 bg-stone-soft/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Menu</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Menu Favorit Kami</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Pilihan racikan kopi, minuman segar, dan camilan nikmat untuk menemani hari Anda.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {menuCategories.map((cat) => (
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
            <MenuItemCard key={item.title} item={item} />
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
