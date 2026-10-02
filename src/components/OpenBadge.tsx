"use client";

import { useEffect, useState } from "react";
import { getOpenState } from "@/lib/site";

export default function OpenBadge({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => setState(getOpenState(new Date()));
    const start = window.setTimeout(update, 0);
    const tick = window.setInterval(update, 60_000);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(tick);
    };
  }, []);

  const open = state?.open ?? false;

  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase">
      <span
        className={`h-2 w-2 rounded-full ${state && open ? "bg-[#e30613]" : "bg-current opacity-40"}`}
        aria-hidden
      />
      <span>{state ? (open ? "Abierto" : "Cerrado") : "Horario"}</span>
      {state && !compact ? <span className="font-normal tracking-normal normal-case opacity-60">{state.label}</span> : null}
    </span>
  );
}
