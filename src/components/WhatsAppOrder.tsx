import { useMemo, useState } from "react";
import { AlertCircle, MessageCircle, Minus, Plus, Utensils } from "lucide-react";
import type { CartItem } from "@/lib/cart";
import { formatPrice } from "@/lib/cart";

interface WhatsAppOrderProps {
  defaultMessage?: string;
  items?: CartItem[];
}

const TABLE_PATTERN = /^[0-9]{1,3}$/;

function buildMessage(table: string, items: CartItem[], note: string) {
  let text = `Halo Kopi Nusantara!\nSaya ingin memesan dari meja *${table || "-"}*.`;

  if (items.length > 0) {
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const lines = items.map(
      (item, index) => `${index + 1}. ${item.title} x${item.qty} — ${formatPrice(item.price * item.qty)}`
    );
    text += `\n\n${lines.join("\n")}\n\nTotal perkiraan: *${formatPrice(total)}*`;
    if (note.trim()) text += `\n\nCatatan tambahan: ${note.trim()}`;
  } else {
    text += `\n\n${note.trim() || "Mohon ditunjukkan menu yang tersedia."}`;
  }

  return text;
}

export function WhatsAppOrder({ defaultMessage = "", items = [] }: WhatsAppOrderProps) {
  const [tableNumber, setTableNumber] = useState("");
  const [touched, setTouched] = useState(false);
  const [note, setNote] = useState(defaultMessage);

  const error = useMemo(() => {
    const value = tableNumber.trim();
    if (!value) return "Nomor meja wajib diisi.";
    if (!TABLE_PATTERN.test(value)) return "Nomor meja harus berupa angka 1-3 digit (contoh: 12).";
    if (Number(value) < 1) return "Nomor meja minimal 1.";
    return null;
  }, [tableNumber]);

  const showError = touched && error !== null;

  const preview = useMemo(
    () => buildMessage(tableNumber.trim(), items, note),
    [tableNumber, items, note]
  );

  const adjustTable = (delta: number) => {
    setTouched(true);
    setTableNumber((prev) => {
      const current = Number(prev) || 0;
      return String(Math.min(999, Math.max(1, current + delta)));
    });
  };

  const handleOrder = () => {
    setTouched(true);
    if (error) return;
    const encoded = encodeURIComponent(preview);
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
            Masukkan nomor meja, tambahkan catatan jika perlu, dan kirim langsung ke WhatsApp kami. Praktis, tanpa antre!
          </p>

          <div className="mt-8 flex flex-col items-start gap-6 rounded-2xl bg-coffee-dark/50 p-6 text-left md:flex-row md:items-start">
            <div className="w-full flex-1">
              <label htmlFor="table-number" className="mb-2 block text-sm font-medium text-primary-foreground/90">
                Nomor Meja
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => adjustTable(-1)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coffee-light text-primary-foreground transition-colors hover:bg-coffee-light/80"
                  aria-label="Kurangi nomor meja"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  id="table-number"
                  inputMode="numeric"
                  maxLength={3}
                  value={tableNumber}
                  onBlur={() => setTouched(true)}
                  onChange={(e) => {
                    setTouched(true);
                    setTableNumber(e.target.value.replace(/\D/g, "").slice(0, 3));
                  }}
                  aria-invalid={showError}
                  aria-describedby="table-number-error"
                  className={`h-12 w-24 rounded-xl border bg-coffee-dark/50 px-4 text-center text-lg font-semibold text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 ${
                    showError
                      ? "border-red-400 focus:border-red-400 focus:ring-red-400/30"
                      : "border-primary-foreground/20 focus:border-amber focus:ring-amber/30"
                  }`}
                  placeholder="Meja"
                />
                <button
                  type="button"
                  onClick={() => adjustTable(1)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coffee-light text-primary-foreground transition-colors hover:bg-coffee-light/80"
                  aria-label="Tambah nomor meja"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <p id="table-number-error" className="mt-2 min-h-5 text-sm text-red-300">
                {showError && (
                  <span className="inline-flex items-center gap-1.5">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </span>
                )}
              </p>
            </div>

            <div className="w-full flex-[2]">
              <label htmlFor="order-note" className="mb-2 block text-sm font-medium text-primary-foreground/90">
                Catatan Tambahan
              </label>
              <input
                id="order-note"
                type="text"
                maxLength={300}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: gula aren dipisah, es batu terpisah..."
                className="h-12 w-full rounded-xl border border-primary-foreground/20 bg-coffee-dark/50 px-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
              />
            </div>
          </div>

          {/* Preview pesan WhatsApp */}
          <div className="mt-6 rounded-2xl border border-primary-foreground/15 bg-coffee-dark/40 p-5 text-left">
            <p className="mb-3 text-sm font-semibold text-amber">Preview Pesan WhatsApp</p>
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-primary-foreground/90">
              {preview}
            </pre>
          </div>

          <button
            type="button"
            onClick={handleOrder}
            disabled={error !== null}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-3.5 text-base font-bold text-coffee-dark shadow-md transition-transform hover:scale-[1.02] hover:bg-amber-dark focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-coffee disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            <MessageCircle className="h-5 w-5" />
            Pesan via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
