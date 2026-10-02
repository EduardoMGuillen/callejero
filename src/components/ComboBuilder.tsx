"use client";

import Image from "next/image";
import { useState } from "react";
import { combos, lempiras, waLink } from "@/lib/site";

export default function ComboBuilder() {
  const [comboId, setComboId] = useState(combos[2].id);
  const combo = combos.find((item) => item.id === comboId) ?? combos[0];
  const message = `Hola Callejero, vengo de la web. Quiero el combo ${combo.name}: ${combo.detail}. Referencia ${lempiras(combo.price)}. ¿Me confirman disponibilidad?`;

  return (
    <section id="combos" className="scroll-mt-24 border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
      <div className="mb-10 max-w-4xl">
        <p className="kicker text-[#e30613]">Para cualquier plan</p>
        <h2 className="display mt-3 text-[clamp(3.6rem,9vw,8rem)]">Combos Callejeros</h2>
        <p className="mt-4 max-w-xl text-lg text-white/70">
          Vengás en pareja, con amigos o en familia: hay un combo para cada antojo. Elegí uno y mandalo al WhatsApp.
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid grid-cols-2 gap-3">
          {combos.map((item) => {
            const selected = item.id === combo.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                aria-label={item.name}
                onClick={() => setComboId(item.id)}
                className={`relative aspect-[4/5] overflow-hidden bg-[#1b1814] text-left ${
                  selected ? "ring-2 ring-[#e30613]" : "ring-1 ring-white/10"
                }`}
              >
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 28vw, 46vw" className="object-cover" />
              </button>
            );
          })}
        </div>

        <aside className="receipt sticky top-24 p-6 pt-8 shadow-2xl">
          <p className="mono text-center text-xs tracking-[0.35em]">CALLEJERO</p>
          <p className="mono mt-1 text-center text-[11px] tracking-[0.18em]">RIVER PLAZA · SPS</p>
          <div className="mono my-4 border-t border-dashed border-black/30" />
          <p className="display text-5xl leading-none">{combo.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{combo.detail}</p>
          <div className="mono my-4 border-t border-dashed border-black/30" />
          <div className="flex items-end justify-between">
            <p className="mono text-xs tracking-[0.2em]">TOTAL</p>
            <p className="display text-6xl">{lempiras(combo.price)}</p>
          </div>
          <a className="btn mt-6 w-full" href={waLink(message)}>
            Pedir este combo
          </a>
          <p className="mono mt-4 text-center text-[10px] tracking-[0.14em] text-black/50">
            PRECIO PUBLICADO EN INSTAGRAM
          </p>
        </aside>
      </div>
    </section>
  );
}
