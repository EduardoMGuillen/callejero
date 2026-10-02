import Link from "next/link";
import { restaurant, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0a09] px-5 pt-16 pb-28 md:px-10 md:pb-12">
      <a
        href={restaurant.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="display block text-[clamp(3rem,12vw,9rem)] leading-none transition hover:text-[#e30613]"
      >
        @{restaurant.instagram}
      </a>
      <p className="mt-3 max-w-lg text-white/60">Seguí la plancha, los combos y lo que sale cada semana.</p>

      <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-6xl">Callejero</p>
          <p className="mt-3 max-w-sm text-sm text-white/60">
            {restaurant.line} en {restaurant.place}, {restaurant.street}, {restaurant.city}.
          </p>
        </div>
        <div>
          <p className="kicker text-white/40">En la web</p>
          <ul className="mt-4 space-y-2 text-lg">
            <li><Link href="/#menu" className="hover:text-[#e30613]">Menú</Link></li>
            <li><Link href="/#daily" className="hover:text-[#e30613]">Daily Drop</Link></li>
            <li><Link href="/#combos" className="hover:text-[#e30613]">Combos</Link></li>
            <li><Link href="/carta" className="hover:text-[#e30613]">Carta</Link></li>
            <li><Link href="/#visita" className="hover:text-[#e30613]">Local</Link></li>
          </ul>
        </div>
        <div>
          <p className="kicker text-white/40">Contacto</p>
          <ul className="mt-4 space-y-2 text-lg">
            <li>
              <a href={waLink("Hola Callejero, vengo de la web.")} target="_blank" rel="noopener noreferrer" className="hover:text-[#e30613]">
                WhatsApp {restaurant.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e30613]">
                Instagram
              </a>
            </li>
            <li>
              <a href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e30613]">
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-end md:justify-between">
        <div>
          <p>© {new Date().getFullYear()} Callejero · {restaurant.city}</p>
          <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/40">
            Precios y fotos salen de las publicaciones de @callejero.hn. El Daily Drop es solo para comer en el restaurante. Confirmá disponibilidad por WhatsApp.
          </p>
        </div>
        <a
          href={restaurant.nexusUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-baseline gap-2 text-[#f4efe4]"
        >
          <span className="text-[10px] tracking-[0.28em] text-white/45 uppercase">Powered by</span>
          <span className="display text-3xl tracking-wide group-hover:text-[#e30613]">
            Nexus <span className="text-white/70 group-hover:text-[#e30613]">Global</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
