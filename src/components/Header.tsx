import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Coffee, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/menu", label: "Menu" },
  { to: "/lokasi", label: "Lokasi" },
  { to: "/kontak", label: "Kontak" },
  { to: "/", hash: "testimoni", label: "Testimoni" },
  { to: "/", hash: "faq", label: "FAQ" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-coffee-dark transition-opacity hover:opacity-80">
          <Coffee className="h-7 w-7 text-coffee" />
          <span className="font-serif text-xl font-bold tracking-tight">Kopi Nusantara</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.to && !link.hash;
            return (
              <Link
                key={`${link.to}-${link.hash ?? "root"}`}
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-coffee text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-coffee"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/"
          hash="pesan"
          className="hidden rounded-full bg-coffee px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-coffee-light md:inline-flex"
        >
          Pesan Sekarang
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background px-4 pb-4 md:hidden">
          <nav className="mt-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.to && !link.hash;
              return (
                <Link
                  key={`${link.to}-${link.hash ?? "root"}`}
                  to={link.to}
                  hash={link.hash}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    active ? "bg-coffee text-primary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/"
              hash="pesan"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-coffee px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Pesan Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
