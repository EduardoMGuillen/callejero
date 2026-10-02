"use client";

import { useState, type ReactNode } from "react";
import { burgers, extras, lempiras, shakes, sides, waLink } from "@/lib/site";

export default function ComboBuilder() {
  const [burgerId, setBurgerId] = useState(burgers[0].id);
  const [sideId, setSideId] = useState(sides[0].id);
  const [shakeId, setShakeId] = useState<string | null>(shakes[0].id);
  const [extraIds, setExtraIds] = useState<string[]>([]);

  const burger = burgers.find((item) => item.id === burgerId) ?? burgers[0];
  const side = sides.find((item) => item.id === sideId) ?? sides[0];
  const shake = shakes.find((item) => item.id === shakeId) ?? null;
  const chosenExtras = extras.filter((item) => extraIds.includes(item.id));

  const total =
    burger.price + side.price + (shake?.price ?? 0) + chosenExtras.reduce((sum, item) => sum + item.price, 0);

  function toggleExtra(id: string) {
    setExtraIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  const lines = [
    burger.name,
    ...chosenExtras.map((item) => `Extra: ${item.name.toLowerCase()}`),
    side.name,
    shake ? `Malteada de ${shake.name.toLowerCase()}` : "Sin malteada",
  ];

  const message = `Hola Callejero, vengo de la web. Quiero este combo:\n${lines.map((line) => `• ${line}`).join("\n")}\n\nReferencia: ${lempiras(total)}\n¿Me confirman disponibilidad?`;

  return (
    <section id="combo" className="scroll-mt-24 border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
      <div className="mb-10 max-w-4xl">
        <p className="kicker text-[#ffb000]">Como en la barra</p>
        <h2 className="display mt-3 text-[clamp(3.6rem,9vw,8rem)]">Armá tu combo</h2>
        <p className="mt-4 max-w-xl text-lg text-white/70">
          En el local armás el tuyo. Acá también: burger, extra, papas y malteada. El ticket se va directo a WhatsApp.
        </p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <ChoiceGroup label="01 · Burger">
            {burgers.map((item) => (
              <Choice key={item.id} pressed={item.id === burger.id} onClick={() => setBurgerId(item.id)} name={item.name} price={item.price} />
            ))}
          </ChoiceGroup>
          <ChoiceGroup label="02 · Extra">
            {extras.map((item) => (
              <Choice key={item.id} pressed={extraIds.includes(item.id)} onClick={() => toggleExtra(item.id)} name={item.name} price={item.price} />
            ))}
          </ChoiceGroup>
          <ChoiceGroup label="03 · Papas">
            {sides.map((item) => (
              <Choice key={item.id} pressed={item.id === side.id} onClick={() => setSideId(item.id)} name={item.name} price={item.price} />
            ))}
          </ChoiceGroup>
          <ChoiceGroup label="04 · Malteada">
            <Choice pressed={shakeId === null} onClick={() => setShakeId(null)} name="Sin malteada" price={0} />
            {shakes.map((item) => (
              <Choice key={item.id} pressed={item.id === shakeId} onClick={() => setShakeId(item.id)} name={item.name} price={item.price} />
            ))}
          </ChoiceGroup>
        </div>

        <aside className="receipt sticky top-24 p-6 pt-8 shadow-2xl">
          <p className="mono text-center text-xs tracking-[0.35em]">CALLEJERO</p>
          <p className="mono mt-1 text-center text-[11px] tracking-[0.18em]">19 CALLE SUR · SPS</p>
          <div className="mono my-4 border-t border-dashed border-black/30" />
          <ul className="mono space-y-2 text-sm uppercase">
            <TicketLine label={burger.name} value={burger.price} />
            {chosenExtras.map((item) => (
              <TicketLine key={item.id} label={item.name} value={item.price} />
            ))}
            <TicketLine label={side.name} value={side.price} />
            <TicketLine label={shake ? shake.name : "Sin malteada"} value={shake?.price ?? 0} />
          </ul>
          <div className="mono my-4 border-t border-dashed border-black/30" />
          <div className="flex items-end justify-between">
            <span className="mono text-xs tracking-[0.2em]">TOTAL</span>
            <span className="display text-6xl">{lempiras(total)}</span>
          </div>
          <a className="btn mt-6 w-full" href={waLink(message)}>
            Mandar pedido
          </a>
          <p className="mono mt-3 text-center text-[10px] leading-relaxed tracking-wide text-black/55">
            PRECIO DE REFERENCIA · EL LOCAL CONFIRMA
          </p>
          <div className="mt-5 flex h-12 items-end gap-px" aria-hidden="true">
            {Array.from({ length: 48 }, (_, index) => (
              <span key={index} className="bg-[#16130f]" style={{ width: index % 4 === 0 ? 3 : 1, height: 18 + ((index * 7) % 22) }} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function ChoiceGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="kicker mb-3 text-white/50">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Choice({
  pressed,
  onClick,
  name,
  price,
}: {
  pressed: boolean;
  onClick: () => void;
  name: string;
  price: number;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex items-center justify-between gap-3 border px-3 py-3 text-left transition ${
        pressed ? "border-[#ffb000] bg-[#ffb000] text-[#16130f]" : "border-white/15 text-[#f4efe4] hover:border-white/40"
      }`}
    >
      <span className="text-sm font-semibold uppercase tracking-wide">{name}</span>
      <span className="mono text-xs">{price === 0 ? "—" : lempiras(price)}</span>
    </button>
  );
}

function TicketLine({ label, value }: { label: string; value: number }) {
  return (
    <li className="flex justify-between gap-4">
      <span>{label}</span>
      <span>{value === 0 ? "0" : value}</span>
    </li>
  );
}
