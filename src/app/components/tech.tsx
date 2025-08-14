import type { IconType } from "react-icons";
import * as React from "react";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiScrumalliance,
  SiLaravel,
  SiVuedotjs,
  SiDotnet,
  SiOracle,
  SiSencha
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const techMap = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  postgresql: SiPostgresql,
  docker: SiDocker,
  git: SiGit,
  scrum: SiScrumalliance,
  laravel: SiLaravel,
  vue: SiVuedotjs,
  dotnet: SiDotnet,
  azure: VscAzure,
  oracle: SiOracle,
  sencha: SiSencha,

} satisfies Record<string, IconType>;

export type IconSlug = keyof typeof techMap;

export function TechIcon({
  slug,
  label,
  className,
}: {
  slug: IconSlug | string;
  label?: string;
  className?: string;
}) {
  const Cmp = techMap[slug as IconSlug];
  if (!Cmp) {
    return (
      <span className="text-[10px] text-neutral-400 px-1.5 py-0.5 border border-neutral-700 rounded">
        {label ?? slug}
      </span>
    );
  }
  return <Cmp aria-label={label ?? (slug as string)} className={className ?? "h-4 w-4"} />;
}
