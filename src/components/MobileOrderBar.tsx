import { restaurant, waLink } from "@/lib/site";

export default function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#100e0c]/95 p-3 backdrop-blur md:hidden">
      <a className="btn" href={waLink("Hola Callejero, vengo de la web. Quiero hacer un pedido.")}>
        Pedí ya
      </a>
      <a className="btn btn-ghost" href={`tel:${restaurant.phoneTel}`}>
        Llamar
      </a>
    </div>
  );
}
