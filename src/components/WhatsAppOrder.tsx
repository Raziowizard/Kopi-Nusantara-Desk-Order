import { useState } from "react";
import { MessageCircle, Minus, Plus, Utensils } from "lucide-react";

interface WhatsAppOrderProps {
  defaultMessage?: string;
}

export function WhatsAppOrder({ defaultMessage = "" }: WhatsAppOrderProps) {
  const [tableNumber, setTableNumber] = useState<number | "">("");
  const [note, setNote] = useState(defaultMessage);

  const adjustTable = (delta: number) => {
    setTableNumber((prev) => {
      const current = typeof prev === "number" ? prev : 0;
      const next = Math.max(1, current + delta);
      return next;
    });
  };

  const handleOrder = () => {
    const table = typeof tableNumber === "number" && tableNumber > 0 ? tableNumber : "-";
    const text = `Halo Kopi Nusantara!\nSaya ingin memesan dari meja *${table}*.\n\n${note || "Mohon ditunjukkan menu yang tersedia."}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="pesan" className="scroll-mt-24">
      <div className="rounded-3xl bg-coffee p-8 text-primary-foreground shadow-xl md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber/20">
            <Utensils className="h-6 w-6 text-amber" />
          </div>
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Pesan dari Meja Anda</h2>
          <p className="mt-2 text-primary-foreground/80">
            Masukkan nomor meja, tulis pesanan, dan kirim langsung ke WhatsApp kami. Praktis, tanpa antre!
          </p>

          <div className="mt-8 flex flex-col items-start gap-6 rounded-2xl bg-coffee-dark/50 p-6 text-left md:flex-row md:items-end">
            <div className="w-full flex-1">
              <label htmlFor="table-number" className="mb-2 block text-sm font-medium text-primary-foreground/90">
                Nomor Meja
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => adjustTable(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coffee-light text-primary-foreground transition-colors hover:bg-coffee-light/80"
                  aria-label="Kurangi nomor meja"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  id="table-number"
                  type="number"
                  min={1}
                  value={tableNumber}
                  onChange={(e) => {
                    const value = e.target.value === "" ? "" : Math.max(1, Number(e.target.value));
                    setTableNumber(value);
                  }}
                  className="h-12 w-24 rounded-xl border border-primary-foreground/20 bg-coffee-dark/50 px-4 text-center text-lg font-semibold text-primary-foreground placeholder:text-primary-foreground/40 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
                  placeholder="Meja"
                />
                <button
                  type="button"
                  onClick={() => adjustTable(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coffee-light text-primary-foreground transition-colors hover:bg-coffee-light/80"
                  aria-label="Tambah nomor meja"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex-[2]">
              <label htmlFor="order-note" className="mb-2 block text-sm font-medium text-primary-foreground/90">
                Catatan Pesanan
              </label>
              <input
                id="order-note"
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: 1 Es Kopi Susu, 1 Roti Bakar..."
                className="h-12 w-full rounded-xl border border-primary-foreground/20 bg-coffee-dark/50 px-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleOrder}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-3.5 text-base font-bold text-coffee-dark shadow-md transition-transform hover:scale-[1.02] hover:bg-amber-dark focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-coffee"
          >
            <MessageCircle className="h-5 w-5" />
            Pesan via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
