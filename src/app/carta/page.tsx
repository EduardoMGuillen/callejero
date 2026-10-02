import type { Metadata } from "next";
import Link from "next/link";
import { burgers, lempiras, shakes, sides, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carta",
  description: "Carta de Callejero en San Pedro Sula: smash burgers, papas y malteadas.",
};

export default function CartaPage() {
  return (
    <main className="px-5 pt-28 pb-20 md:px-10">
      <p className="kicker text-[#ffb000]">San Pedro Sula</p>
      <h1 className="display mt-3 text-[clamp(4.5rem,12vw,9rem)]">La carta</h1>
      <p className="mt-4 max-w-xl text-white/65">
        Precios de muestra para esta demo. El local confirma al pedir.
      </p>

      <MenuBlock title="De la plancha" items={burgers.map((item) => ({ name: item.name, note: item.description, price: item.price }))} />
      <MenuBlock title="Para acompañar" items={sides.map((item) => ({ name: item.name, note: item.note, price: item.price }))} />
      <MenuBlock title="Malteadas" items={shakes.map((item) => ({ name: item.name, note: item.note, price: item.price }))} />

      <div className="mt-12 flex flex-wrap gap-3">
        <a className="btn" href={waLink("Hola Callejero, vengo de la web. Quiero ver qué hay disponible hoy.")}>
          Pedir por WhatsApp
        </a>
        <Link href="/#combo" className="btn btn-ghost">
          Armar combo
        </Link>
      </div>
    </main>
  );
}

function MenuBlock({
  title,
  items,
}: {
  title: string;
  items: { name: string; note: string; price: number }[];
}) {
  return (
    <section className="mt-12">
      <h2 className="display text-5xl text-[#ffb000]">{title}</h2>
      <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
        {items.map((item) => (
          <li key={item.name} className="grid gap-2 py-5 md:grid-cols-[1fr_auto] md:items-baseline">
            <div>
              <p className="display text-4xl">{item.name}</p>
              <p className="mt-1 max-w-xl text-sm text-white/60">{item.note}</p>
            </div>
            <p className="display text-3xl">{lempiras(item.price)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
