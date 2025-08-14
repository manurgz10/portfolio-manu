// components/quick-links.tsx
import { SiGithub } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi2";

export default function QuickLinks({
  github   = process.env.NEXT_PUBLIC_GITHUB   || "https://github.com/",
  ctaText  = "Experience",
  highlightsText = "Highlights",
}: {
  github?: string; highlightsText?: string; ctaText?: string;
}) {
  const pill =
    "inline-flex items-center gap-2 rounded-xl border border-neutral-700/70 px-3 py-1.5 " +
    "text-sm text-neutral-200 hover:bg-neutral-800 transition";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a className={pill} href={github} target="_blank" rel="noopener noreferrer">
        <SiGithub /> GitHub
      </a>
      <a
        href="#experience"
        className={`${pill} pr-3`}
        aria-label={ctaText}
        title={ctaText}
      >
        <HiChevronDown className="text-lg animate-bounce" />
        <span>{ctaText}</span>
      </a>
      <a
        href="#highlights"
        className={`${pill} pr-3`}
        aria-label={highlightsText}
        title={highlightsText}
      >
        <HiChevronDown className="text-lg animate-bounce" />
        <span>{highlightsText}</span>
      </a>
    </div>
  );
}
