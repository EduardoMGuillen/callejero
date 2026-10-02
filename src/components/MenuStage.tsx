"use client";

import Image from "next/image";
import { useState } from "react";
import { burgerOrder, burgers } from "@/lib/site";

export default function MenuStage() {
  const [activeId, setActiveId] = useState(burgers[0].id);
  const active = burgers.find((burger) => burger.id === activeId) ?? burgers[0];

  return (
    <section id="menu" className="scroll-mt-24 bg-[#100e0c] px-5 py-20 md:px-10 md:py-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker text-[#e30613]">Handmade smash burgers</p>
          <h2 className="display mt-3 text-[clamp(3.2rem,6.4vw,6.4rem)]">
            De la
            <br />
            plancha
          </h2>
        </div>
        <p className="max-w-xs text-sm text-white/60">
          OG, Oklahoma, BBQ, Truffle y el Chicken. El precio del Daily Drop incluye papas y refresco.
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {burgers.map((burger, index) => {
            const selected = burger.id === active.id;
            return (
              <div key={burger.id}>
                {index === 0 ? <Slash /> : null}
                <button
                  type="button"
                  aria-pressed={selected}
                  onMouseEnter={() => setActiveId(burger.id)}
                  onFocus={() => setActiveId(burger.id)}
                  onClick={() => setActiveId(burger.id)}
                  className={`grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-2 text-left transition md:py-3 ${
                    selected ? "text-[#e30613]" : "text-[#f4efe4] hover:text-white"
                  }`}
                >
                  <span className="text-xs tracking-[0.2em] text-current/50">{burger.index}</span>
                  <span className="display text-[clamp(2.6rem,6vw,5.4rem)]">{burger.name}</span>
                  <span className="text-right text-sm leading-tight md:text-base">{burger.priceLabel}</span>
                </button>
                {selected ? <p className="mb-3 max-w-xl text-sm text-white/70 lg:hidden">{burger.description}</p> : null}
                <Slash />
              </div>
            );
          })}
        </div>

        <figure className="sticky top-24 hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#1b1814]">
            <Image
              key={active.id}
              src={active.image}
              alt={active.alt}
              fill
              sizes="40vw"
              className="food-shot object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
              <p className="kicker text-[#e30613]">{active.tag}</p>
              <p className="mt-3 max-w-sm text-lg leading-snug">{active.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="display text-5xl">{active.priceLabel}</p>
                <a className="btn !min-h-11 !text-2xl" href={burgerOrder(active.name)}>
                  Pedir esta
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="relative mt-6 aspect-[4/5] overflow-hidden bg-[#1b1814] lg:hidden">
        <Image key={active.id} src={active.image} alt={active.alt} fill sizes="100vw" className="food-shot object-cover" />
      </div>
      <a className="btn mt-4 w-full lg:hidden" href={burgerOrder(active.name)}>
        Pedir {active.name}
      </a>
    </section>
  );
}

function Slash() {
  return <div className="display text-3xl leading-none text-white/25 md:text-5xl">/</div>;
}
