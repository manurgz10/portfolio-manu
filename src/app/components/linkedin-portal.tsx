"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/app/components/ui/button";

export function LinkedInPortal({ url }: { url: string }) {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const openLink = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (holding) {
      timer.current = setInterval(() => {
        setProgress((p) => {
          const next = Math.min(p + 4, 100);
          if (next === 100) {
            clearInterval(timer.current!);
            setHolding(false);
            setTimeout(openLink, 120);
          }
          return next;
        });
      }, 40);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [holding]);

  return (
    <div className="flex items-center gap-3">
      <div
        role="button"
        aria-label="Press and hold to open LinkedIn"
        className="relative grid place-items-center h-14 w-14 rounded-full border border-neutral-700 overflow-hidden select-none"
        onPointerDown={() => { setProgress(0); setHolding(true); }}
        onPointerUp={() => setHolding(false)}
        onPointerLeave={() => setHolding(false)}
      >
        <div className="absolute inset-0 bg-gradient-radial from-sky-600/40 via-sky-500/10 to-transparent animate-pulse" />
        <div
          className="absolute bottom-0 left-0 h-1 bg-sky-500 transition-[width]"
          style={{ width: `${progress}%` }}
        />
        <span className="text-xs text-neutral-300">Hold</span>
      </div>

      <Button
        variant="outline"
        className="border-neutral-700 hover:bg-neutral-800"
        onClick={openLink}
      >
        Open LinkedIn
      </Button>
    </div>
  );
}
