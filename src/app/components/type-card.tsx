// components/type-card.tsx
"use client";
import { useEffect, useState } from "react";

export default function TypeCard({
  lines = [],
  speed = 20,
  loop = false,
  wrap = true, 
}: { lines?: string[]; speed?: number; loop?: boolean, wrap?: boolean;}) {
  const [text, setText] = useState("");
  useEffect(() => {
    let mounted = true;
    const full = lines.join("\n");
    let i = 0;
    function tick() {
      if (!mounted) return;
      setText(full.slice(0, i));
      i++;
      if (i <= full.length) setTimeout(tick, speed);
      else if (loop) setTimeout(() => { i = 0; tick(); }, 1200);
    }
    tick();
    return () => { mounted = false; };
  }, [lines, speed, loop]);


  const wrapClasses = wrap
    ? "whitespace-pre-wrap break-words"
    : "whitespace-pre overflow-x-auto";

  return (
    <pre className={`max-w-full rounded-2xl border border-neutral-800 bg-neutral-950 p-4
                     text-[11px] sm:text-xs leading-relaxed text-neutral-200
                     shadow-[0_0_0_1px_rgba(255,255,255,0.03)] ${wrapClasses}`}>
      <code className="block">{text}</code>
      <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-neutral-400 align-[-2px]" />
    </pre>
  );
}
