export const restaurant = {
  name: "Callejero",
  city: "San Pedro Sula",
  region: "Cortés",
  country: "Honduras",
  place: "River Plaza",
  street: "19 av. 9 calle",
  neighborhood: "Bo. Río de Piedras",
  postalCode: "21104",
  tagline: "De calle pero elegante",
  line: "Handmade Smash Burgers",
  phoneDisplay: "+504 3263-1113",
  phoneTel: "+50432631113",
  whatsapp: "50432631113",
  instagram: "callejero.hn",
  instagramUrl: "https://www.instagram.com/callejero.hn/",
  mapsUrl: "https://maps.app.goo.gl/jp36hd4DHvv3dLN37",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=15.5007184,-88.040247&travelmode=driving",
  lat: 15.5007184,
  lng: -88.040247,
  rating: 4.6,
  reviewCount: 75,
  nexusUrl: "https://nexusglobal.dev/",
};

export const hours = [
  { days: "Lunes a jueves", time: "11:00 – 21:00" },
  { days: "Viernes y sábado", time: "11:00 – 22:00" },
  { days: "Domingo", time: "11:00 – 21:00" },
];

export type Burger = {
  id: string;
  index: string;
  name: string;
  tag: string;
  priceLabel: string;
  description: string;
  image: string;
  alt: string;
};

export const burgers: Burger[] = [
  {
    id: "og",
    index: "01",
    name: "OG Smash",
    tag: "Handmade",
    priceLabel: "L.180",
    description:
      "El smash de la casa. Los lunes entra en el Daily Drop, con papas fritas y refresco, para comer en el restaurante.",
    image: "/food/web/drop-2.jpg",
    alt: "Single Smash de Callejero, con cheddar y pan brioche",
  },
  {
    id: "oklahoma",
    index: "02",
    name: "Oklahoma Smash",
    tag: "Miércoles",
    priceLabel: "L.180",
    description:
      "Smash con cebolla a la plancha. El miércoles del Daily Drop, con papas y refresco.",
    image: "/food/web/drop-4.jpg",
    alt: "Single Oklahoma Smash con cebolla y cheddar",
  },
  {
    id: "bbq",
    index: "03",
    name: "BBQ Smash",
    tag: "Viernes",
    priceLabel: "L.180",
    description: "Smash con BBQ y cheddar. El viernes del Daily Drop, con papas y refresco.",
    image: "/food/web/drop-6.jpg",
    alt: "Single BBQ Smash con salsa barbecue y cheddar",
  },
  {
    id: "truffle",
    index: "04",
    name: "Truffle Smash",
    tag: "Para compartir",
    priceLabel: "Trio",
    description:
      "Va en el Smash Experience Trio, junto al OG Smash, el BBQ Smash y las Bacon Cheese Fries.",
    image: "/food/web/combo-4.jpg",
    alt: "Smash Experience Trio con OG Smash, BBQ Smash, Truffle Smash y Bacon Cheese Fries",
  },
  {
    id: "chicken",
    index: "05",
    name: "Chicken Sandwich",
    tag: "Jueves",
    priceLabel: "L.199",
    description: "Pollo crispy y pepinillo. El jueves del Daily Drop, con papas y refresco.",
    image: "/food/web/drop-5.jpg",
    alt: "Chicken Sandwich de Callejero con pollo crispy",
  },
];

export const combos = [
  {
    id: "duo",
    name: "OG Duo",
    price: 415,
    detail: "2 OG Smash y 2 papas fritas",
    image: "/food/web/combo-2.jpg",
    alt: "OG Duo: dos OG Smash y dos papas fritas, L.415",
  },
  {
    id: "chicken",
    name: "Chicken Combo",
    price: 240,
    detail: "1 Chicken Sandwich y 4 nuggets",
    image: "/food/web/combo-3.jpg",
    alt: "Chicken Combo: Chicken Sandwich y cuatro nuggets, L.240",
  },
  {
    id: "trio",
    name: "Smash Experience Trio",
    price: 650,
    detail: "1 OG Smash, 1 BBQ Smash, 1 Truffle Smash y Bacon Cheese Fries",
    image: "/food/web/combo-4.jpg",
    alt: "Smash Experience Trio con tres smash y Bacon Cheese Fries, L.650",
  },
  {
    id: "family",
    name: "Pa' la Family",
    price: 1065,
    detail:
      "3 OG Smash, 1 Chicken Sandwich, Bacon Cheese Fries XL, Parmesan Truffle Fries XL y 8 chicken nuggets",
    image: "/food/web/combo-5.jpg",
    alt: "Combo Pa' la Family de Callejero, L.1065",
  },
];

export const dailyDrops = [
  {
    id: "lunes",
    day: "Lunes",
    name: "Single Smash",
    price: 180,
    note: "Papas + refresco",
    image: "/food/web/drop-2.jpg",
    alt: "Daily Drop del lunes: Single Smash con papas y refresco, L.180",
  },
  {
    id: "martes",
    day: "Martes",
    name: "Boneless",
    price: 199,
    note: "Papas + refresco",
    image: "/food/web/drop-3.jpg",
    alt: "Daily Drop del martes: Boneless con papas y refresco, L.199",
  },
  {
    id: "miercoles",
    day: "Miércoles",
    name: "Single Oklahoma Smash",
    price: 180,
    note: "Papas + refresco",
    image: "/food/web/drop-4.jpg",
    alt: "Daily Drop del miércoles: Single Oklahoma Smash, L.180",
  },
  {
    id: "jueves",
    day: "Jueves",
    name: "Chicken Sandwich",
    price: 199,
    note: "Papas + refresco",
    image: "/food/web/drop-5.jpg",
    alt: "Daily Drop del jueves: Chicken Sandwich, L.199",
  },
  {
    id: "viernes",
    day: "Viernes",
    name: "Single BBQ Smash",
    price: 180,
    note: "Papas + refresco",
    image: "/food/web/drop-6.jpg",
    alt: "Daily Drop del viernes: Single BBQ Smash, L.180",
  },
];

export const reviews = [
  {
    quote:
      "La burger que elegí, la Oklahoma, tiene un excelente sabor, consistencia y tamaño, y no es la más cara.",
    year: "2025",
  },
  {
    quote: "Best burgers in SPS.",
    year: "2024",
  },
  {
    quote:
      "Muy al estilo americano: malteadas con hamburguesas y las opciones Gueto, de muy buena presentación y sabor.",
    year: "2024",
  },
  {
    quote:
      "Excellent burger spot in San Pedro Sula. El local está bien decorado y la comida estaba deliciosa.",
    year: "2025",
  },
];

export function lempiras(value: number) {
  return `L. ${value.toLocaleString("es-HN")}`;
}

export function waLink(message: string) {
  return `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function burgerOrder(name: string) {
  return waLink(
    `Hola Callejero, vengo de la web. Quiero una ${name}. ¿Me confirman disponibilidad?`,
  );
}

const weekdayIndex: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export function getOpenState(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Tegucigalpa",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    weekday: "short",
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Sun";
  const day = weekdayIndex[weekday] ?? 0;
  const closeHour = day === 5 || day === 6 ? 22 : 21;
  const mins = hour * 60 + minute;
  const open = mins >= 11 * 60 && mins < closeHour * 60;

  let label = "abre mañana a las 11:00";
  if (open) label = `hasta las ${closeHour}:00`;
  else if (mins < 11 * 60) label = "abre a las 11:00";

  return { open, label, closeHour };
}

const dropByWeekday: Record<string, string> = {
  Mon: "lunes",
  Tue: "martes",
  Wed: "miercoles",
  Thu: "jueves",
  Fri: "viernes",
};

export function getTodayDrop(date: Date) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Tegucigalpa",
    weekday: "short",
  }).format(date);
  const id = dropByWeekday[weekday];
  return dailyDrops.find((drop) => drop.id === id) ?? null;
}
