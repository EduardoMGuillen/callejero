import ComboBuilder from "@/components/ComboBuilder";
import DailyDrop from "@/components/DailyDrop";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MenuStage from "@/components/MenuStage";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <MenuStage />
      <section className="bg-[#e30613] px-5 py-16 text-[#f6f1e6] md:px-10 md:py-24">
        <p className="display text-[clamp(4.2rem,13vw,11rem)]">
          De calle.
          <br />
          Pero
          <br />
          elegante.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <p className="text-lg leading-snug">
            Handmade smash burgers. La carne se aplasta, el cheddar se derrite y el pan se tuesta en la misma plancha.
          </p>
          <p className="text-lg leading-snug">
            Daily Drop de lunes a viernes: tu combo, con papas fritas y refresco. Solo para comer en el restaurante.
          </p>
          <p className="text-lg leading-snug">
            OG Duo, Chicken Combo, Smash Experience Trio o Pa&apos; la Family. Reuní a los tuyos.
          </p>
        </div>
        <p className="display mt-10 text-[clamp(3rem,8vw,6rem)]">Esto es Callejero.</p>
      </section>
      <DailyDrop />
      <ComboBuilder />
      <Visit />
      <Reviews />
    </main>
  );
}
