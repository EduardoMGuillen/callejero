import Image from "next/image";
import { burgerOrder, getTodayDrop, restaurant } from "@/lib/site";

export default function Hero() {
  const today = getTodayDrop(new Date());

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#100e0c]">
      <div className="absolute inset-0 md:left-[38%]">
        <Image
          src="/food/web/drop-1.jpg"
          alt="Smash burger de Callejero, handmade, con cheddar"
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover object-[center_72%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c] via-[#100e0c]/40 to-[#100e0c]/25 md:bg-gradient-to-r md:from-[#100e0c] md:via-[#100e0c]/75 md:to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 pb-24 pt-28 md:px-10 md:pb-10">
        <div className="flex items-start justify-between gap-4">
          <p className="kicker text-[#e30613]">{restaurant.line}</p>
          <p className="hidden max-w-64 text-right text-sm text-white/75 md:block">
            {today ? (
              <>
                Hoy en el Daily Drop: <span className="text-[#e30613]">{today.name}</span>
              </>
            ) : (
              <>El Daily Drop vuelve el lunes</>
            )}
          </p>
        </div>

        <div>
          <p className="brush mb-4 text-3xl text-[#e30613] md:text-5xl">{restaurant.tagline}</p>
          <h1 className="display text-[clamp(5.6rem,21vw,16rem)] text-[#f4efe4]">
            <span className="sr-only">Callejero</span>
            <span aria-hidden="true">
              Calle
              <br />
              jero
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-lg leading-snug text-[#f4efe4]/85 md:text-xl">
              Smash burgers en {restaurant.place}. {restaurant.street}, {restaurant.neighborhood}.
            </p>
            <p className="mt-3 text-sm text-white/55">
              {restaurant.rating} en Google · {restaurant.reviewCount} reseñas
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn" href={burgerOrder(today ? today.name : "OG Smash")}>
              {today ? `Pedí el ${today.name}` : "Pedí un OG Smash"}
            </a>
            <a className="btn btn-ghost" href="#combos">
              Ver combos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
