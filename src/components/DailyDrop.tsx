import Image from "next/image";
import { dailyDrops, getTodayDrop, lempiras, waLink } from "@/lib/site";

export default function DailyDrop() {
  const today = getTodayDrop(new Date());

  return (
    <section id="daily" className="scroll-mt-24 border-t border-white/10 bg-[#100e0c] py-20 md:py-28">
      <div className="px-5 md:px-10">
        <p className="brush text-5xl text-[#e30613] md:text-7xl">Daily Drop</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display max-w-3xl text-[clamp(3.2rem,7vw,6.4rem)]">
            Cada día una
            <br />
            promo diferente
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            De lunes a viernes, con papas fritas y refresco. Válido únicamente para consumo en restaurante.
          </p>
        </div>
      </div>

      <div className="mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:px-10">
        {dailyDrops.map((drop) => {
          const current = today?.id === drop.id;
          return (
            <article
              key={drop.id}
              className={`w-[78vw] shrink-0 snap-start sm:w-[340px] ${current ? "ring-2 ring-[#e30613]" : ""}`}
            >
              <div className="relative aspect-[4/5] bg-[#1b1814]">
                <Image src={drop.image} alt={drop.alt} fill sizes="340px" className="object-cover" />
                {current ? (
                  <p className="absolute top-3 left-3 bg-[#e30613] px-3 py-1 text-xs font-semibold tracking-[0.22em] text-[#f6f1e6] uppercase">
                    Hoy
                  </p>
                ) : null}
              </div>
              <div className="flex items-center justify-between gap-3 border border-white/10 border-t-0 px-4 py-4">
                <div>
                  <p className="kicker text-white/45">{drop.day}</p>
                  <p className="mt-1 text-lg leading-tight">{drop.name}</p>
                </div>
                <p className="display text-4xl text-[#e30613]">{lempiras(drop.price)}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="px-5 pt-8 md:px-10">
        <a
          className="btn"
          href={waLink(
            today
              ? `Hola Callejero, vengo de la web. Quiero el Daily Drop de hoy: ${today.name}, con papas y refresco.`
              : "Hola Callejero, vengo de la web. Quiero ver el Daily Drop de esta semana.",
          )}
        >
          {today ? `Pedí el de ${today.day.toLowerCase()}` : "Preguntá el drop"}
        </a>
      </div>
    </section>
  );
}
