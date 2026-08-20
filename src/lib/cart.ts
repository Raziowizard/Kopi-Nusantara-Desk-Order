export interface CartItem {
  title: string;
  price: number;
  priceLabel: string;
  qty: number;
}

export function parsePrice(label: string): number {
  const normalized = label.toLowerCase().replace(/[.,]/g, "").replace("rp", "").trim();
  if (normalized.includes("jt")) {
    const value = Number(normalized.replace("jt", ""));
    return Number.isNaN(value) ? 0 : value * 1_000_000;
  }
  if (normalized.includes("rb")) {
    const value = Number(normalized.replace("rb", ""));
    return Number.isNaN(value) ? 0 : value * 1_000;
  }
  const value = Number(normalized);
  return Number.isNaN(value) ? 0 : value;
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}
