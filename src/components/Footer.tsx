import { Link } from "@tanstack/react-router";
import { Coffee, Instagram, Phone, MessageCircle } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Beranda" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/menu", label: "Menu" },
  { to: "/lokasi", label: "Lokasi" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-coffee-dark text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-amber" />
              <span className="font-serif text-lg font-bold">Kopi Nusantara</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
              Cita rasa kopi asli Indonesia dalam setiap tegukan. Nikmati langsung di kedai atau pesan dari meja Anda.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold">Navigasi</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold">Hubungi Kami</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-amber"
                >
                  <MessageCircle className="h-4 w-4" />
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kopinusantara.id"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-amber"
                >
                  <Instagram className="h-4 w-4" />
                  @kopinusantara.id
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@kopinusantara"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-amber"
                >
                  <Phone className="h-4 w-4" />
                  @kopinusantara
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Kopi Nusantara. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
