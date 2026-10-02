import ComboBuilder from "@/components/ComboBuilder";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MenuStage from "@/components/MenuStage";
import Reviews from "@/components/Reviews";
import Shakes from "@/components/Shakes";
import Visit from "@/components/Visit";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <MenuStage />
      <section className="bg-[#ffb000] px-5 py-16 text-[#16130f] md:px-10 md:py-24">
        <p className="display text-[clamp(4.2rem,13vw,11rem)]">
          Smash.
          <br />
          Rápido.
          <br />
          En la calle.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <p className="text-lg leading-snug">
            La plancha no para. La carne se aplasta, el queso se derrite y el pan se tuesta en el mismo calor.
          </p>
          <p className="text-lg leading-snug">
            El menú es corto y alcanza: smash, línea Gueto, papas y malteada. Nada de carta infinita.
          </p>
          <p className="text-lg leading-snug">
            Pedís en la barra. Sale rápido. Si hay mesa te quedás. Si no, la calle también come.
          </p>
        </div>
        <p className="display mt-10 text-[clamp(3rem,8vw,6rem)]">Esto es Callejero.</p>
      </section>
      <Shakes />
      <ComboBuilder />
      <Visit />
      <Reviews />
    </main>
  );
}
