import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Instagram, Mail, MapPin, Clock } from "lucide-react";
import { WhatsAppOrder } from "../components/WhatsAppOrder";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Kopi Nusantara" },
      { name: "description", content: "Hubungi Kopi Nusantara via WhatsApp, Instagram, atau datang langsung ke kedai kami." },
      { property: "og:title", content: "Kontak — Kopi Nusantara" },
      { property: "og:description", content: "Hubungi Kopi Nusantara via WhatsApp, Instagram, atau datang langsung ke kedai kami." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kopinusantara.id",
    href: "https://instagram.com/kopinusantara.id",
  },
  {
    icon: MessageCircle,
    label: "TikTok",
    value: "@kopinusantara",
    href: "https://tiktok.com/@kopinusantara",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@kopinusantara.id",
    href: "mailto:hello@kopinusantara.id",
  },
];

function ContactPage() {
  return (
    <>
      <section className="bg-coffee-dark py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Terhubung dengan Kami</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Dapatkan info promo terbaru, acara harian, dan keseruan lainnya di media sosial kami.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Hubungi Kopi Nusantara</h2>
            <p className="mt-3 text-muted-foreground">
              Punya pertanyaan, saran, atau ingin bekerja sama? Jangan ragu untuk menghubungi kami melalui salah satu kanal di bawah ini.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-coffee/30 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-coffee">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-stone-soft/50 p-6">
              <h3 className="font-serif text-lg font-bold text-foreground">Alamat & Jam Buka</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-coffee" />
                  <p className="text-muted-foreground">Jl. Nusantara No. 45, Kota Utama, Indonesia.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-coffee" />
                  <div className="text-muted-foreground">
                    <p>Senin - Jumat: 08:00 - 22:00 WIB</p>
                    <p>Sabtu - Minggu: 08:00 - 23:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="self-start">
            <WhatsAppOrder defaultMessage="Halo, saya ingin bertanya tentang menu dan promo hari ini." />
          </div>
        </div>
      </section>
    </>
  );
}
