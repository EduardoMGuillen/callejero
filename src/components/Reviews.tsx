import { restaurant, reviews } from "@/lib/site";

export default function Reviews() {
  return (
    <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker text-[#e30613]">Lo que dicen</p>
          <h2 className="display mt-3 text-[clamp(3.4rem,8vw,7rem)]">
            {restaurant.rating}
            <span className="text-[#e30613]"> ★</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm text-white/60">{restaurant.reviewCount} reseñas públicas en Google, en {restaurant.city}.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <figure key={review.quote} className="border border-white/12 bg-[#171410] p-6 md:p-8">
            <blockquote className="text-2xl leading-snug md:text-3xl">{review.quote}</blockquote>
            <figcaption className="mt-6 text-xs tracking-[0.22em] text-white/45 uppercase">Google · {review.year}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
