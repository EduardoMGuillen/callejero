import Image from "next/image";
import { lempiras, shakes, waLink } from "@/lib/site";

export default function Shakes() {
  return (
    <section id="malteadas" className="scroll-mt-24 border-t border-white/10 bg-[#100e0c] py-20 md:py-28">
      <div className="mb-8 flex items-end justify-between gap-4 px-5 md:px-10">
        <div>
          <p className="kicker text-[#ffb000]">Para bajar el smash</p>
          <h2 className="display mt-3 text-[clamp(3.4rem,8vw,7rem)]">Tu malteada</h2>
        </div>
        <p className="hidden max-w-xs text-sm text-white/60 md:block">
          El combo americano del local: burger de un lado, malteada del otro.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-5 pb-2 md:px-10">
        {shakes.map((shake) => (
          <article key={shake.id} className="w-[78vw] shrink-0 snap-start sm:w-[340px]">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#1b1814]">
              <Image src={shake.image} alt={shake.alt} fill sizes="340px" className="object-cover" />
            </div>
            <div className="mt-4 flex items-end justify-between gap-3">
              <div>
                <h3 className="display text-5xl">{shake.name}</h3>
                <p className="mt-1 text-sm text-white/60">{shake.note}</p>
              </div>
              <p className="display text-3xl text-[#ffb000]">{lempiras(shake.price)}</p>
            </div>
            <a
              className="btn btn-ghost mt-4 w-full"
              href={waLink(`Hola Callejero, vengo de la web. Quiero una malteada de ${shake.name}.`)}
            >
              Pedir {shake.name}
            </a>
          </article>
        ))}
        <article className="flex w-[78vw] shrink-0 snap-start flex-col justify-between bg-[#ffb000] p-6 text-[#16130f] sm:w-[340px]">
          <p className="display text-6xl leading-none">Papas callejeras</p>
          <div>
            <div className="relative mb-5 aspect-[16/10] overflow-hidden">
              <Image src="/food/papas.jpg" alt="Papas fritas" fill sizes="340px" className="object-cover" />
            </div>
            <p className="text-sm">Corte grueso, sal de la casa. El lado que no se negocia.</p>
            <p className="display mt-3 text-5xl">L. 65</p>
          </div>
        </article>
      </div>
    </section>
  );
}
