import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Leaf, UtensilsCrossed, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Kopi Nusantara" },
      { name: "description", content: "Lihat menu lengkap Kopi Nusantara: kopi, minuman non-kopi, makanan, dan camilan favorit." },
      { property: "og:title", content: "Menu — Kopi Nusantara" },
      { property: "og:description", content: "Lihat menu lengkap Kopi Nusantara: kopi, minuman non-kopi, makanan, dan camilan favorit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const coffeeMenu = [
  { name: "Es Kopi Susu Nusantara", price: "Rp 20rb", desc: "Espresso double shot, gula aren asli, dan susu segar pilihan." },
  { name: "Manual Brew Gayo V60", price: "Rp 25rb", desc: "Single origin Arabika Aceh Gayo dengan aroma fruity notes yang segar." },
  { name: "Americano (Hot/Ice)", price: "Rp 18rb", desc: "Espresso racikan house blend dengan rasa tebal, bersih, dan menyegarkan." },
  { name: "Kopi Susu Aren", price: "Rp 22rb", desc: "Espresso dengan gula aren cair dan susu segar, manis alami." },
  { name: "Cappuccino", price: "Rp 23rb", desc: "Espresso, susu steamed, dan foam lembut dengan taburan cokelat." },
  { name: "Kopi Tubruk", price: "Rp 15rb", desc: "Seduhan kopi tradisional dengan biji kopi murni, kental dan aromatik." },
];

const nonCoffeeMenu = [
  { name: "Matcha Cream Latte", price: "Rp 22rb", desc: "Matcha Jepang premium dengan foam susu yang lembut dan manis pas." },
  { name: "Artisan Earl Grey Tea", price: "Rp 18rb", desc: "Seduhan teh hitam aromatik dengan sentuhan rasa citrus yang menenangkan." },
  { name: "Chocolate Mint", price: "Rp 24rb", desc: "Cokelat Belgian dengan sentuhan mint segar dan whipped cream." },
  { name: "Lemon Squash", price: "Rp 19rb", desc: "Perasan lemon segar, soda, dan madu lokal, cocok untuk siang hari." },
];

const foodMenu = [
  { name: "Roti Bakar Kaya Butter", price: "Rp 18rb", desc: "Roti renyah dengan isian selai srikaya khas & mentega gurih meleleh." },
  { name: "Cireng Bumbu Rujak", price: "Rp 15rb", desc: "Camilan khas renyah di luar, lembut di dalam dengan bumbu pedas manis." },
  { name: "Pisang Goreng Keju", price: "Rp 17rb", desc: "Pisang matang dibalut tepung renyah, taburan keju dan susu kental manis." },
  { name: "Kentang Goreng Truffle", price: "Rp 20rb", desc: "Kentang goreng crisp dengan bumbu truffle oil dan parmesan." },
];

function MenuPage() {
  return (
    <>
      <section className="bg-coffee-dark py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Menu Kopi Nusantara</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Pilihan racikan kopi, minuman segar, dan camilan nikmat untuk menemani momen Anda.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
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
  items: { name: string; price: string; desc: string }[];
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-foreground">{item.name}</h3>
                <span className="shrink-0 font-bold text-coffee">{item.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
