import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export const Route = createFileRoute("/lokasi")({
  head: () => ({
    meta: [
      { title: "Lokasi — Kopi Nusantara" },
      { name: "description", content: "Temukan lokasi Kopi Nusantara, jam operasional, dan petunjuk arah ke kedai kami." },
      { property: "og:title", content: "Lokasi — Kopi Nusantara" },
      { property: "og:description", content: "Temukan lokasi Kopi Nusantara, jam operasional, dan petunjuk arah ke kedai kami." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <section className="bg-coffee-dark py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Kunjungi Kedai Kami</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Mari mampir dan nikmati kopi hangat langsung di tempat.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl bg-card p-8 shadow-sm lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold text-foreground">Informasi Kedai</h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-coffee">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alamat Store</p>
                  <p className="mt-1 text-muted-foreground">Kopi Nusantara Store</p>
                  <p className="text-muted-foreground">Jl. Nusantara No. 45, Kota Utama, Indonesia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-coffee">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jam Operasional</p>
                  <p className="mt-1 text-muted-foreground">Senin - Jumat: 08:00 - 22:00 WIB</p>
                  <p className="text-muted-foreground">Sabtu - Minggu: 08:00 - 23:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-coffee">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Kontak</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-muted-foreground transition-colors hover:text-coffee"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Kopi+Nusantara+Jl.+Nusantara+No.+45+Kota+Utama+Indonesia"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coffee px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-coffee-light"
            >
              <Navigation className="h-4 w-4" />
              Petunjuk Arah (Google Maps)
            </a>
          </div>

          <div className="relative min-h-[400px] overflow-hidden rounded-3xl bg-muted lg:col-span-2">
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
      </section>
    </>
  );
}
