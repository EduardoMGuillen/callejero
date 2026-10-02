"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import OpenBadge from "@/components/OpenBadge";
import { restaurant, waLink } from "@/lib/site";

const links = [
  { href: "/#menu", label: "Menú" },
  { href: "/#daily", label: "Daily Drop" },
  { href: "/#combos", label: "Combos" },
  { href: "/#visita", label: "Local" },
  { href: "/carta", label: "Carta" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-colors ${
        scrolled || open ? "bg-[#100e0c]/92 backdrop-blur-md" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="display text-4xl leading-none tracking-wide text-[#f4efe4]" aria-label="Callejero, inicio">
          Callejero
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#f4efe4]/80 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#e30613]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden xl:inline">
            <OpenBadge />
          </span>
          <a className="btn hidden !min-h-11 !px-4 !text-2xl sm:inline-flex" href={waLink("Hola Callejero, vengo de la web. Quiero hacer un pedido.")}>
            Pedí ya
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span className={`h-0.5 bg-[#f4efe4] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-[#f4efe4] transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-[#f4efe4] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-movil" className="grid min-h-[calc(100svh-4.25rem)] content-between px-6 pb-28 pt-6 lg:hidden" aria-label="Móvil">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-t border-white/10">
                <Link href={link.href} className="display block py-3 text-6xl" onClick={() => setMenuPath(null)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <OpenBadge />
            <a className="btn w-full" href={waLink("Hola Callejero, vengo de la web.")}>
              WhatsApp {restaurant.phoneDisplay}
            </a>
            <a className="btn btn-ghost w-full" href={`tel:${restaurant.phoneTel}`}>
              Llamar {restaurant.phoneDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
