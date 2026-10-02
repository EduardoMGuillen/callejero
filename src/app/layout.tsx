import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Oleo_Script, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileOrderBar from "@/components/MobileOrderBar";
import { restaurant } from "@/lib/site";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const script = Oleo_Script({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-script",
});

const description =
  "Handmade smash burgers en River Plaza, 19 av. 9 calle, San Pedro Sula. De calle pero elegante. Pedí por WhatsApp a Callejero.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Callejero · Handmade smash burgers en San Pedro Sula",
    template: "%s · Callejero",
  },
  description,
  openGraph: {
    title: "Callejero · Handmade smash burgers en San Pedro Sula",
    description,
    siteName: "Callejero",
    locale: "es_HN",
    type: "website",
    images: [{ url: "/food/web/drop-1.jpg", width: 1080, height: 1350, alt: "Smash burger de Callejero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Callejero",
    description,
    images: ["/food/web/drop-1.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#100e0c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  servesCuisine: ["Hamburguesas", "Smash burgers"],
  telephone: restaurant.phoneTel,
  image: "/food/web/drop-1.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.street,
    addressLocality: restaurant.city,
    addressRegion: restaurant.region,
    postalCode: restaurant.postalCode,
    addressCountry: "HN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: restaurant.lat,
    longitude: restaurant.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: restaurant.rating,
    reviewCount: restaurant.reviewCount,
  },
  sameAs: [restaurant.instagramUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "22:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} ${script.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-[#e30613] focus:px-4 focus:py-2 focus:text-black"
        >
          Saltar al contenido
        </a>
        <Header />
        <div id="contenido">{children}</div>
        <Footer />
        <MobileOrderBar />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
