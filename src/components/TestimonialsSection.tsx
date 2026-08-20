import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Send, Star } from "lucide-react";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

const baseTestimonials: Testimonial[] = [
  {
    quote:
      "Es Kopi Susu Nusantara rasanya juara! Manis dari gula arennya pas banget, kopinya tetap kerasa tebal. Tempatnya juga tenang dan wifinya kencang buat WFC.",
    name: "Alya Rahma",
    role: "Pelanggan Setia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Untuk pecinta manual brew wajib coba V60 Gayo-nya. Notes fruity-nya dapet banget dan ditenagai barista yang ramah buat diajak diskusi kopi.",
    name: "Budi Pratama",
    role: "Penikmat Kopi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Pesan via WhatsApp gampang banget, responnya cepat. Roti Bakar Kaya Butter-nya pas banget dipadukan sama Matcha Latte hangat di sore hari!",
    name: "Siti Nurhaliza",
    role: "Karyawan Swasta",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
];

const STORAGE_KEY = "kopi-nusantara-testimoni";

export function TestimonialsSection() {
  const [submitted, setSubmitted] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSubmitted(JSON.parse(raw) as Testimonial[]);
    } catch {
      /* abaikan data rusak */
    }
  }, []);

  const testimonials = useMemo(() => [...submitted, ...baseTestimonials], [submitted]);
  const total = testimonials.length;
  const safeIndex = index % total;

  const visible = useMemo(() => {
    return [0, 1, 2].map((offset) => testimonials[(safeIndex + offset) % total]!);
  }, [testimonials, safeIndex, total]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanQuote = quote.trim();
    if (cleanName.length < 2 || cleanName.length > 60) {
      setError("Nama harus 2-60 karakter.");
      return;
    }
    if (cleanQuote.length < 10 || cleanQuote.length > 400) {
      setError("Ulasan harus 10-400 karakter.");
      return;
    }
    const entry: Testimonial = {
      name: cleanName,
      role: role.trim().slice(0, 60) || "Pelanggan",
      quote: cleanQuote,
      rating,
    };
    const next = [entry, ...submitted].slice(0, 20);
    setSubmitted(next);
    setIndex(0);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* penyimpanan penuh */
    }
    setName("");
    setRole("");
    setQuote("");
    setRating(5);
    setError("");
    setSuccess(true);
    window.setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <section id="testimoni" className="bg-stone-soft/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-coffee">Testimoni</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Kata Pengunjung Kami</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Pengalaman mereka menikmati rasa dan suasana di Kopi Nusantara.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-6 md:grid-cols-3">
            {visible.map((t, i) => (
              <div key={`${t.name}-${safeIndex}-${i}`} className={i === 0 ? "" : "hidden md:block"}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Testimoni sebelumnya"
              onClick={() => setIndex((v) => (v - 1 + total) % total)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-coffee text-coffee transition-colors hover:bg-coffee hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={`dot-${t.name}-${i}`}
                  type="button"
                  aria-label={`Tampilkan testimoni ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === safeIndex ? "w-6 bg-coffee" : "w-2.5 bg-coffee/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Testimoni berikutnya"
              onClick={() => setIndex((v) => (v + 1) % total)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-coffee text-coffee transition-colors hover:bg-coffee hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl bg-card p-6 shadow-sm sm:p-8">
          <h3 className="font-serif text-2xl font-bold text-foreground">Kirim Ulasan Anda</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Bagikan pengalaman Anda menikmati Kopi Nusantara — ulasan akan langsung tampil di carousel di atas.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="testi-nama" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Nama
                </label>
                <input
                  id="testi-nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-coffee"
                />
              </div>
              <div>
                <label htmlFor="testi-peran" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Pekerjaan / Status <span className="font-normal text-muted-foreground">(opsional)</span>
                </label>
                <input
                  id="testi-peran"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  maxLength={60}
                  placeholder="Mahasiswa, Karyawan, ..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-coffee"
                />
              </div>
            </div>

            <div>
              <span className="mb-1.5 block text-sm font-semibold text-foreground">Rating</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-label={`Beri rating ${n} bintang`}
                    onClick={() => setRating(n)}
                    className="text-amber transition-transform hover:scale-110"
                  >
                    <Star className={`h-6 w-6 ${n <= rating ? "fill-current" : "opacity-30"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="testi-ulasan" className="mb-1.5 block text-sm font-semibold text-foreground">
                Ulasan
              </label>
              <textarea
                id="testi-ulasan"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                maxLength={400}
                rows={4}
                placeholder="Ceritakan pengalaman Anda di Kopi Nusantara..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-coffee"
              />
              <p className="mt-1 text-right text-xs text-muted-foreground">{quote.length}/400</p>
            </div>

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            {success && (
              <p className="text-sm font-medium text-coffee">Terima kasih! Ulasan Anda sudah tampil di carousel.</p>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-coffee px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-coffee-light"
            >
              <Send className="h-4 w-4" /> Kirim Testimoni
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
