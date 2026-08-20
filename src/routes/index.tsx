import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppOrder } from "../components/WhatsAppOrder";
import { MapPin, Clock, Phone, ArrowRight, Coffee, Leaf, Heart, Star } from "lucide-react";

const heroImage = "/images/hero-coffee-shop.jpg";
const aboutImage = "/images/about-coffee-beans.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kopi Nusantara — Cita Rasa Kopi Asli Indonesia" },
      { name: "description", content: "Landing page resmi Kopi Nusantara. Pesan kopi dan camilan favorit langsung dari meja Anda via WhatsApp." },
      { property: "og:title", content: "Kopi Nusantara — Cita Rasa Kopi Asli Indonesia" },
      { property: "og:description", content: "Landing page resmi Kopi Nusantara. Pesan kopi dan camilan favorit langsung dari meja Anda via WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Coffee, label: "Biji Kopi Lokal", desc: "Petani Nusantara" },
  { icon: Leaf, label: "Seduh Fresh", desc: "Dipesan Baru Dibuat" },
  { icon: Heart, label: "Suasana Nyaman", desc: "Untuk Kerja & Bersantai" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Interior kedai Kopi Nusantara dengan barista sedang menyeduh kopi"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/90 via-coffee-dark/70 to-coffee-dark/40" />
        </div>

        <div className="relative mx-auto flex min-h-[600px] max-w-6xl flex-col items-start justify-center px-4 py-24 md:min-h-[680px]">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/20 px-4 py-1.5 text-sm font-medium text-amber">
            <Coffee className="h-4 w-4" />
            Kopi Lokal Nusantara
          </span>
          <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            Selamat Datang di Kopi Nusantara
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Cita Rasa Kopi Asli Indonesia dalam Setiap Tegukan
          </p>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Nikmati kehangatan biji kopi pilihan langsung dari petani lokal Nusantara yang diseduh dengan keahlian dan rasa bangga.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pesan"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-base font-bold text-coffee-dark shadow-lg transition-transform hover:scale-[1.02] hover:bg-amber-dark"
            >
              <Phone className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-coffee-dark/50 px-6 py-3 text-base font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-coffee-dark/70"
            >
              Lihat Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid w-full max-w-2xl gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-primary-foreground/10 bg-coffee-dark/40 p-4 text-primary-foreground backdrop-blur-sm"
              >
                <item.icon className="h-6 w-6 text-amber" />
                <p className="mt-2 font-semibold">{item.label}</p>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-coffee/10" />
            <img
              src={aboutImage}
              alt="Biji kopi Nusantara segar dalam karung goni"
              width={1024}
              height={768}
              loading="lazy"
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Tentang Kami</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Tentang Kopi Nusantara
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Kopi Nusantara hadir untuk menyajikan keanekaragaman biji kopi lokal terbaik dari Sabang sampai Merauke langsung ke cangkir Anda. Diproses secara presisi oleh barista berpengalaman, kami berkomitmen menghadirkan suasana yang nyaman untuk bekerja, bersantai, maupun berkumpul bersama kawan.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nikmati harmoni cita rasa otentik Indonesia dalam setiap racikan kami.
            </p>
            <Link
              to="/tentang-kami"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-coffee transition-colors hover:text-coffee-light"
            >
              Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Menu preview */}
      <section className="bg-stone-soft/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Menu</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Menu Favorit Kami</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Pilihan racikan kopi, minuman segar, dan camilan nikmat untuk menemani hari Anda.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <MenuCard
              title="Es Kopi Susu Nusantara"
              price="Rp 20rb"
              desc="Espresso double shot, gula aren asli, dan susu segar pilihan."
              tag="Best Seller"
            />
            <MenuCard
              title="Manual Brew Gayo V60"
              price="Rp 25rb"
              desc="Single origin Arabika Aceh Gayo dengan aroma fruity notes yang segar."
              tag="Single Origin"
            />
            <MenuCard
              title="Matcha Cream Latte"
              price="Rp 22rb"
              desc="Matcha Jepang premium dengan foam susu yang lembut dan manis pas."
              tag="Non-Kopi"
            />
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

      {/* Testimonials */}
      <section id="testimoni" className="bg-stone-soft/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Testimoni</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Kata Pengunjung Kami</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Pengalaman mereka menikmati rasa dan suasana di Kopi Nusantara.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Es Kopi Susu Nusantara rasanya juara! Manis dari gula arennya pas banget, kopinya tetap kerasa tebal. Tempatnya juga tenang dan wifinya kencang buat WFC."
              name="Alya Rahma"
              role="Pelanggan Setia"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard
              quote="Untuk pecinta manual brew wajib coba V60 Gayo-nya. Notes fruity-nya dapet banget dan ditenagai barista yang ramah buat diajak diskusi kopi."
              name="Budi Pratama"
              role="Penikmat Kopi"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard
              quote="Pesan via WhatsApp gampang banget, responnya cepat. Roti Bakar Kaya Butter-nya pas banget dipadukan sama Matcha Latte hangat di sore hari!"
              name="Siti Nurhaliza"
              role="Karyawan Swasta"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            />
          </div>
        </div>
      </section>

      {/* Location preview */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl bg-card p-8 shadow-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Lokasi</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Kunjungi Kedai Kami</h2>
              <p className="mt-4 text-muted-foreground">
                Mari mampir dan nikmati kopi hangat langsung di tempat. Suasana nyaman dan pelayanan ramah selalu kami siapkan.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-coffee">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Alamat Store</p>
                    <p className="text-muted-foreground">Kopi Nusantara Store</p>
                    <p className="text-muted-foreground">Jl. Nusantara No. 45, Kota Utama, Indonesia.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-coffee">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jam Operasional</p>
                    <p className="text-muted-foreground">Senin - Jumat: 08:00 - 22:00 WIB</p>
                    <p className="text-muted-foreground">Sabtu - Minggu: 08:00 - 23:00 WIB</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Kopi+Nusantara+Jl.+Nusantara+No.+45+Kota+Utama+Indonesia"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-coffee px-6 py-3 font-semibold text-coffee transition-colors hover:bg-coffee hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" />
                Petunjuk Arah (Google Maps)
              </a>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-muted md:min-h-full">
              <iframe
                title="Peta lokasi Kopi Nusantara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126746.18217249007!2d107.5607546!3d-6.9032734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146b316bec3e5dd9!2sBandung!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%", position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Order */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <WhatsAppOrder />
      </section>
    </>
  );
}

function MenuCard({ title, price, desc, tag }: { title: string; price: string; desc: string; tag: string }) {
  return (
    <div className="group rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <span className="inline-block rounded-full bg-amber/10 px-2.5 py-1 text-xs font-semibold text-amber-dark">
            {tag}
          </span>
          <h3 className="mt-3 font-serif text-xl font-bold text-foreground">{title}</h3>
        </div>
        <span className="font-bold text-coffee">{price}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
