import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center px-6 pt-24 text-center">
      <div>
        <p className="kicker text-[#e30613]">San Pedro Sula</p>
        <h1 className="display mt-3 text-[clamp(6rem,22vw,14rem)]">404</h1>
        <p className="mt-2 text-xl">Esa calle no existe.</p>
        <Link href="/" className="btn mt-8">
          Volver al local
        </Link>
      </div>
    </main>
  );
}
