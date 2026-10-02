import OpenBadge from "@/components/OpenBadge";
import RestaurantMap from "@/components/RestaurantMap";
import { hours, restaurant } from "@/lib/site";

export default function Visit() {
  return (
    <section id="visita" className="scroll-mt-24 border-t border-white/10 bg-[#f4efe4] text-[#16130f]">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 py-20 md:px-10 md:py-28">
          <p className="kicker text-[#b42318]">El local</p>
          <h2 className="display mt-3 text-[clamp(3.8rem,9vw,8rem)]">
            River
            <br />
            Plaza
          </h2>
          <p className="mt-6 max-w-md text-lg leading-snug">
            {restaurant.street}, {restaurant.neighborhood}. {restaurant.city}. De calle pero elegante.
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
                <a className="underline decoration-black/20 underline-offset-4 hover:decoration-[#e30613]" href={`tel:${restaurant.phoneTel}`}>
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn" href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
              Cómo llegar
            </a>
            <a className="btn btn-dark" href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer">
              Ver en Google Maps
            </a>
          </div>
        </div>

        <div className="relative isolate h-[72vh] min-h-[480px] bg-[#e4dccb] lg:h-auto lg:min-h-[680px]">
          <RestaurantMap />
          <p className="pointer-events-none absolute top-4 left-4 bg-[#100e0c] px-3 py-2 text-[11px] tracking-[0.18em] text-[#f4efe4] uppercase">
            Arrastrá el mapa · el pin es el local
          </p>
        </div>
      </div>
    </section>
  );
}
