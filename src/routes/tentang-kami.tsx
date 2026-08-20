import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Award, Users, Heart } from "lucide-react";

const aboutImage = "/images/about-coffee-beans.jpg";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Kopi Nusantara" },
      { name: "description", content: "Kenali Kopi Nusantara, kedai kopi lokal yang menghadirkan biji kopi terbaik dari Sabang sampai Merauke." },
      { property: "og:title", content: "Tentang Kami — Kopi Nusantara" },
      { property: "og:description", content: "Kenali Kopi Nusantara, kedai kopi lokal yang menghadirkan biji kopi terbaik dari Sabang sampai Merauke." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Coffee,
    title: "Kopi Lokal Berkualitas",
    desc: "Kami bekerja sama langsung dengan petani kopi di berbagai daerah di Indonesia untuk memastikan biji terbaik dan harga adil.",
  },
  {
    icon: Award,
    title: "Seduh dengan Keahlian",
    desc: "Setiap cangkir diseduh oleh barista berpengalaman dengan teknik presisi, menghadirkan cita rasa konsisten dan otentik.",
  },
  {
    icon: Users,
    title: "Ruang untuk Semua",
    desc: "Baik untuk bekerja, bersantai, atau berkumpul, kami menciptakan suasana nyaman dengan pelayanan yang ramah.",
  },
  {
    icon: Heart,
    title: "Dari Hati ke Cangkir",
    desc: "Kami percaya secangkir kopi yang baik lahir dari perhatian pada setiap detail, mulai dari biji hingga penyajian.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-coffee-dark py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Tentang Kopi Nusantara</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Menghadirkan kekayaan rasa kopi Indonesia dalam suasana yang hangat dan nyaman.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl bg-coffee/10" />
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
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Cerita di Balik Secangkir Kopi</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Kopi Nusantara dimulai dari kecintaan mendalam pada keanekaragaman kopi Indonesia. Dari kebun kopi di dataran tinggi Gayo, lereng Gunung Ijen, hingga tanah Papua, kami menjelajahi setiap sudut Nusantara untuk menemukan biji kopi yang menceritakan karakter tanah asalnya.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Di kedai kami, setiap racikan bukan sekadar minuman—ia adalah perjalanan rasa. Kami memanggang biji kopi dalam batch kecil untuk menjaga kesegaran, dan menyeduhnya dengan teknik yang menghormati proses panjang dari petani hingga barista.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Kami percaya bahwa kopi yang baik membawa orang-orang bersama. Itulah mengasa Kopi Nusantara hadir: sebagai ruang untuk berbagi cerita, bekerja dengan tenang, atau sekadar menikmati momen sendiri yang berharga.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-soft/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Nilai Kami</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Mengapa Kopi Nusantara?</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coffee/10 text-coffee">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
