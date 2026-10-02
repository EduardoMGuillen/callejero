export const restaurant = {
  name: "Callejero",
  city: "San Pedro Sula",
  region: "Cortés",
  country: "Honduras",
  street: "19 Calle Sur",
  postalCode: "21104",
  phoneDisplay: "+504 3263-1113",
  phoneTel: "+50432631113",
  whatsapp: "50432631113",
  instagram: "callejero.hn",
  instagramUrl: "https://www.instagram.com/callejero.hn/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=15.500718,-88.040247",
  mapEmbed:
    "https://maps.google.com/maps?q=15.500718,-88.040247&z=16&hl=es&output=embed",
  lat: 15.500718,
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
  price: number;
  description: string;
  image: string;
  alt: string;
};

export const burgers: Burger[] = [
  {
    id: "oklahoma",
    index: "01",
    name: "Oklahoma",
    tag: "La que vuelve",
    price: 195,
    description:
      "Doble smash, cheddar, cebolla a la plancha y pepinillo. La que piden cuando ya vinieron una vez.",
    image: "/food/oklahoma.jpg",
    alt: "Hamburguesa con queso derretido, estilo smash",
  },
  {
    id: "gueto",
    index: "02",
    name: "Gueto",
    tag: "Línea fuerte",
    price: 220,
    description:
      "Doble carne, bacon, jalapeño y salsa picante. La opción grande de la carta.",
    image: "/food/gueto.jpg",
    alt: "Hamburguesa con bacon crujiente",
  },
  {
    id: "bacon",
    index: "03",
    name: "Bacon Street",
    tag: "Crujiente",
    price: 185,
    description: "Smash, tiras de bacon, cheddar y cebolla crujiente.",
    image: "/food/bacon.jpg",
    alt: "Hamburguesa clásica con queso y vegetales",
  },
  {
    id: "callejera",
    index: "04",
    name: "Callejera",
    tag: "De la casa",
    price: 165,
    description:
      "Smash sencillo, queso americano, salsa de la casa y pepinillo. El punto de partida.",
    image: "/food/callejera.jpg",
    alt: "Hamburguesa smash con queso y semillas de ajonjolí",
  },
  {
    id: "doble",
    index: "05",
    name: "Doble Calle",
    tag: "Para el hambre",
    price: 230,
    description: "Dos smash, doble cheddar y la salsa que se queda en los dedos.",
    image: "/food/doble.jpg",
    alt: "Hamburguesa doble con queso",
  },
  {
    id: "clasica",
    index: "06",
    name: "Clásica",
    tag: "Sin vueltas",
    price: 145,
    description:
      "Carne, queso, lechuga, tomate y salsa. La de siempre, bien hecha.",
    image: "/food/clasica.jpg",
    alt: "Hamburguesa con papas fritas",
  },
];

export const sides = [
  {
    id: "papas",
    name: "Papas callejeras",
    price: 65,
    note: "Corte grueso y sal de la casa",
    image: "/food/papas.jpg",
  },
  {
    id: "queso",
    name: "Papas con queso",
    price: 95,
    note: "Cheddar caliente por encima",
    image: "/food/papas.jpg",
  },
  {
    id: "aros",
    name: "Aros de cebolla",
    price: 75,
    note: "Crujientes, con dip",
    image: "/food/papas.jpg",
  },
];

export const shakes = [
  {
    id: "vainilla",
    name: "Vainilla",
    price: 85,
    note: "Helado, leche y vainilla.",
    image: "/food/vainilla.jpg",
    alt: "Malteada de vainilla con crema",
  },
  {
    id: "chocolate",
    name: "Chocolate",
    price: 85,
    note: "Espesa, oscura, popote ancho.",
    image: "/food/chocolate.jpg",
    alt: "Malteada de chocolate",
  },
  {
    id: "fresa",
    name: "Fresa",
    price: 90,
    note: "Dulce, fría, color de cartel.",
    image: "/food/fresa.jpg",
    alt: "Malteada de fresa",
  },
];

export const extras = [
  { id: "doble", name: "Doble carne", price: 40 },
  { id: "bacon", name: "Bacon extra", price: 30 },
  { id: "jalapeno", name: "Jalapeño", price: 15 },
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
