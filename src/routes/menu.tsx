import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Leaf, UtensilsCrossed, ArrowRight } from "lucide-react";
import { MenuItemCard } from "@/components/MenuItemCard";
import { StickyCartButton } from "@/components/StickyCartButton";
import { menuItems, type MenuItem } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Kopi Nusantara" },
      { name: "description", content: "Lihat menu lengkap Kopi Nusantara: kopi, minuman non-kopi, makanan, dan camilan favorit. Tambahkan langsung ke keranjang." },
      { property: "og:title", content: "Menu — Kopi Nusantara" },
      { property: "og:description", content: "Lihat menu lengkap Kopi Nusantara: kopi, minuman non-kopi, makanan, dan camilan favorit. Tambahkan langsung ke keranjang." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const coffeeMenu = menuItems.filter((i) => i.category === "Kopi");
  const nonCoffeeMenu = menuItems.filter((i) => i.category === "Non-Kopi");
  const foodMenu = menuItems.filter((i) => i.category === "Makanan");

  return (
    <>
      <section className="bg-coffee-dark py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Menu Kopi Nusantara</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Pilihan racikan kopi, minuman segar, dan camilan nikmat untuk menemani momen Anda. Pesanan dari beranda tetap tersimpan di keranjang.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 pb-28">
        <MenuSection
          icon={Coffee}
          title="Menu Kopi"
          subtitle="Racikan kopi lokal pilihan, diseduh dengan penuh perhatian."
          items={coffeeMenu}
        />

        <MenuSection
          icon={Leaf}
          title="Menu Non-Kopi"
          subtitle="Minuman segar dan lezat untuk Anda yang ingin pilihan lain."
          items={nonCoffeeMenu}
        />

        <MenuSection
          icon={UtensilsCrossed}
          title="Makanan & Camilan"
          subtitle="Camilan renyah dan makanan ringan yang pas disantap bersama kopi."
          items={foodMenu}
        />

        <div className="mt-16 rounded-3xl bg-coffee p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Siap Memesan?</h2>
          <p className="mx-auto mt-2 max-w-xl text-primary-foreground/80">
            Pesan langsung dari meja Anda. Cukup masukkan nomor meja dan kirim pesanan via WhatsApp.
          </p>
          <Link
            to="/"
            hash="pesan"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-3.5 font-bold text-coffee-dark shadow-md transition-transform hover:scale-[1.02] hover:bg-amber-dark"
          >
            Pesan Sekarang <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <StickyCartButton />
    </>
  );
}

function MenuSection({
  icon: Icon,
  title,
  subtitle,
  items,
}: {
  icon: typeof Coffee;
  title: string;
  subtitle: string;
  items: MenuItem[];
}) {
  return (
    <div className="mb-16">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee/10 text-coffee">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
