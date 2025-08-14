// components/impact.tsx
import { HiCheckCircle } from "react-icons/hi2";
import { ImpactItem } from "../models/ImpactItem";

export default function Impact({ items }: { items: ImpactItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((it, idx) => (
        <article
          key={idx}
          className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
        >
          <h3 className="text-base md:text-lg font-semibold">{it.title}</h3>
          <p className="mt-1 text-xs text-neutral-400">{it.subtitle}</p>
          <ul className="mt-3 space-y-2">
            {it.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-200">
                <HiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400/90" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
