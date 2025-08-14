import { palette } from "../data/palette";
import { TechIcon } from "./tech";

// components/tech-stack-color-row.tsx

export default function TechStackColorRow({
  items,
  compact = false,
}: {
  items: { slug: string; label: string }[];
  compact?: boolean;
}) {
  return (
    <ul className={`mt-6 flex flex-wrap gap-2 ${compact ? "-mb-2" : ""}`}>
      {items.map((i) => (
        <li
          key={i.slug}
          className={`flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm
            bg-gradient-to-br ${palette[i.slug] ?? "text-neutral-300 border-neutral-700/50 from-neutral-700/20 to-neutral-600/10"}
            shadow-[0_0_0_1px_rgba(255,255,255,0.02)]`}
        >
          <TechIcon slug={i.slug} className="h-4 w-4" />
          <span className="font-medium">{i.label}</span>
        </li>
      ))}
    </ul>
  );
}
