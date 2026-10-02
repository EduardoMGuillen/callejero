"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { restaurant } from "@/lib/site";

export default function RestaurantMap() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = container.current;
    if (!node) return;

    let map: import("leaflet").Map | undefined;
    let observer: ResizeObserver | undefined;
    let cancelled = false;

    void import("leaflet").then((mod) => {
      if (cancelled || !container.current) return;

      const loaded = mod as typeof import("leaflet") & { default?: typeof import("leaflet") };
      const L = typeof loaded.map === "function" ? loaded : loaded.default;
      if (!L) return;
      const view: [number, number] = [restaurant.lat, restaurant.lng];

      map = L.map(container.current, {
        scrollWheelZoom: false,
        zoomControl: false,
        zoomAnimation: false,
        markerZoomAnimation: false,
        attributionControl: true,
      }).setView(view, 17, { animate: false });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      const icon = L.divIcon({
        className: "calle-pin-wrap",
        html: '<span class="calle-pin"><span>C</span></span>',
        iconSize: [52, 64],
        iconAnchor: [26, 60],
        popupAnchor: [0, -54],
      });

      const marker = L.marker(view, { icon, title: "Callejero", alt: "Callejero, River Plaza, 19 av. 9 calle" }).addTo(map);

      marker.bindPopup(
        `<div class="calle-card">
          <p class="calle-kicker">San Pedro Sula</p>
          <p class="calle-name">Callejero</p>
          <p>River Plaza, 19 av. 9 calle</p>
          <p class="calle-note">De calle pero elegante</p>
          <a href="${restaurant.directionsUrl}" target="_blank" rel="noopener noreferrer">Cómo llegar</a>
        </div>`,
        { className: "calle-popup", closeButton: true, maxWidth: 240 },
      );

      marker.openPopup();

      const enableWheel = () => map?.scrollWheelZoom.enable();
      const disableWheel = () => map?.scrollWheelZoom.disable();
      map.on("focus", enableWheel);
      map.on("click", enableWheel);
      map.on("mouseout", disableWheel);

      let fitted = false;
      const recenter = () => {
        if (!map || !container.current) return;
        map.invalidateSize();
        if (!fitted && container.current.clientWidth > 80) {
          fitted = true;
          map.setView(view, 17, { animate: false });
        }
      };
      observer = new ResizeObserver(recenter);
      observer.observe(container.current);
      window.setTimeout(recenter, 180);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      map?.remove();
      map = undefined;
    };
  }, []);

  return (
    <div
      ref={container}
      className="restaurant-map h-full w-full"
      role="application"
      aria-label="Mapa interactivo de Callejero en River Plaza, 19 avenida 9 calle, San Pedro Sula. Arrastrá para mover y usá los botones para acercar."
    />
  );
}
