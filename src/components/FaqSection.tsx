import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Bagaimana cara memesan dari meja saya?",
    a: "Buka form pemesanan di bagian bawah halaman ini, isi nomor meja dan catatan pesanan Anda, lalu klik tombol kirim. Aplikasi WhatsApp akan terbuka dengan pesan yang sudah terisi otomatis — Anda tinggal menekan kirim.",
  },
  {
    q: "Nomor meja saya yang mana?",
    a: "Nomor meja tertera pada stiker kecil di sudut meja Anda (contoh: 12 atau A3). Tulis persis seperti yang tertera agar barista tidak salah antar pesanan.",
  },
  {
    q: "Bagaimana format catatan pesanan yang baik?",
    a: "Tulis nama menu, jumlah, dan preferensi Anda. Contoh: '2x Es Kopi Susu Nusantara (less sugar), 1x Roti Bakar Kaya Butter'. Semakin jelas, semakin cepat pesanan diproses.",
  },
  {
    q: "Apakah bisa pesan tanpa WhatsApp?",
    a: "Bisa. Anda tetap dapat memesan langsung di kasir. Pemesanan via WhatsApp hanya kami sediakan agar Anda tidak perlu meninggalkan meja saat kedai sedang ramai.",
  },
  {
    q: "Berapa lama pesanan saya sampai di meja?",
    a: "Rata-rata 5-10 menit untuk minuman dan 10-15 menit untuk makanan. Saat jam sibuk (12.00-14.00 dan 18.00-20.00) mungkin sedikit lebih lama.",
  },
  {
    q: "Bagaimana cara membayarnya?",
    a: "Pembayaran dilakukan di kasir setelah pesanan diantar, tunai maupun QRIS. Sebutkan nomor meja Anda agar kasir menemukan pesanan dengan cepat.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-coffee">FAQ</span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Pertanyaan Seputar Pesan dari Meja
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Panduan singkat agar Anda tidak bingung saat mengisi nomor meja dan catatan pesanan.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-border/60 bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 text-left"
              >
                <HelpCircle className="h-5 w-5 shrink-0 text-coffee" />
                <span className="font-semibold text-foreground">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 pl-13 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
