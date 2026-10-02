import OpenBadge from "@/components/OpenBadge";
import { hours, restaurant } from "@/lib/site";

export default function Visit() {
  return (
    <section id="visita" className="scroll-mt-24 border-t border-white/10 bg-[#f4efe4] text-[#16130f]">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 py-20 md:px-10 md:py-28">
          <p className="kicker text-[#9a6b00]">El local</p>
          <h2 className="display mt-3 text-[clamp(3.8rem,9vw,8rem)]">
            Estamos
            <br />
            en la 19
          </h2>
          <p className="mt-6 max-w-md text-lg leading-snug">
            Un local chico en {restaurant.street}, {restaurant.city}. Pedís en la barra. Si hay mesa, adentro o en la calle, te quedás.
          </p>

          <div className="mt-8 text-[#16130f]">
            <OpenBadge />
          </div>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="kicker text-black/45">Dirección</dt>
              <dd className="mt-1 text-xl">
                {restaurant.street}
                <br />
                {restaurant.city}, {restaurant.region}
              </dd>
            </div>
            <div>
              <dt className="kicker text-black/45">WhatsApp y teléfono</dt>
              <dd className="mt-1 text-xl">
                <a className="underline decoration-black/20 underline-offset-4 hover:decoration-[#ffb000]" href={`tel:${restaurant.phoneTel}`}>
                  {restaurant.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker text-black/45">Horario</dt>
              <dd className="mt-2">
                <ul className="divide-y divide-black/10 border-y border-black/10">
                  {hours.map((slot) => (
                    <li key={slot.days} className="flex justify-between gap-4 py-3">
                      <span>{slot.days}</span>
                      <span>{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <a
            className="btn mt-8"
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cómo llegar
          </a>
        </div>

        <div className="relative min-h-[420px] bg-[#d9d1c3] lg:min-h-full">
          <iframe
            title="Mapa de Callejero en San Pedro Sula"
            src={restaurant.mapEmbed}
            className="absolute inset-0 h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
