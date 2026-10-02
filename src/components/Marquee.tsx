import { burgers, shakes } from "@/lib/site";

export default function Marquee() {
  const items = [...burgers.map((burger) => burger.name), ...shakes.map((shake) => `Malteada ${shake.name}`), "Papas callejeras"];
  const loop = [...items, ...items];

  return (
    <div className="marquee border-y border-black/10" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="display flex items-center gap-6 px-3 py-3 text-[clamp(2rem,5vw,4.2rem)]">
            {item}
            <span>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
