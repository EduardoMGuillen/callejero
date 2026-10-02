import Image from "next/image";
import { burgerOrder, restaurant } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#100e0c]">
      <div className="absolute inset-0 md:left-[38%]">
        <Image
          src="/food/oklahoma.jpg"
          alt="Smash burger con queso, la Oklahoma de Callejero"
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover object-[center_62%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c] via-[#100e0c]/35 to-[#100e0c]/20 md:bg-gradient-to-r md:from-[#100e0c] md:via-[#100e0c]/72 md:to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 pb-24 pt-28 md:px-10 md:pb-10">
        <div className="flex items-start justify-between gap-4">
          <p className="kicker text-[#ffb000]">San Pedro Sula · Honduras</p>
          <p className="hidden max-w-56 text-right text-sm text-white/75 md:block">
            La del día es la <span className="text-[#ffb000]">Oklahoma</span>
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/70">Para la gente de la calle</p>
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
              Smash burgers, malteadas y combos que armás vos. En la {restaurant.street}.
            </p>
            <p className="mt-3 text-sm text-white/55">
              {restaurant.rating} en Google · {restaurant.reviewCount} reseñas
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn" href={burgerOrder("Oklahoma")}>
              Pedí la Oklahoma
            </a>
            <a className="btn btn-ghost" href="#menu">
              Ver el menú
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
