// components/experience-timeline.tsx
import { palette } from "../data/palette";
import { ExperienceItem } from "../models/ExperienceItem";
import { TechIcon } from "./tech";

function Dot({ study }: { study?: boolean }) {
  return (
    <span
      className={`absolute -left-4 top-2 size-2 rounded-full ${study ? "bg-sky-500" : "bg-emerald-500"}`}
      aria-hidden
    />
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-700 px-2.5 py-0.5 text-xs font-medium text-neutral-300">
      {text}
    </span>
  );
}

const chipBase =
  "inline-flex items-center gap-1 rounded-2xl border px-2.5 py-0.5 text-xs " +
  "bg-gradient-to-br shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";

/** Devuelve clases de color o un fallback neutro */
function chipClass(slug?: string) {
  return `${chipBase} ${
    slug && palette[slug] ? palette[slug] : "text-neutral-300 border-neutral-700/60 from-neutral-700/20 to-neutral-600/10"
  }`;
}

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative ml-4 border-l border-neutral-800">
      {items.map((item, idx) => (
        <li key={idx} className="mb-10 pl-6">
          <Dot study={item.study} />

          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base md:text-lg font-semibold leading-tight">
              {item.title} · <span className="font-normal text-neutral-400">{item.company}</span>
            </h3>
            <Pill text={item.date} />
            <Pill text={item.typeOfContract} />
          </div>

          {!!item.functions?.length && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300">
              {item.functions.map((fn, i) => <li key={i}>{fn}</li>)}
            </ul>
          )}

          {!!item.icons?.length && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-400">Stack:</span>
              {item.icons.map((ic, i) => {
                const slug = (ic.slug || ic.name.toLowerCase()).trim();
                return (
                  <span key={i} className={chipClass(slug)} title={ic.name}>
                    <TechIcon slug={slug} className="h-4 w-4" />
                    {ic.name}
                  </span>
                );
              })}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
