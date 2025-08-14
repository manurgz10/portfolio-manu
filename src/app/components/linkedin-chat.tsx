// components/linkedin-chat.tsx
"use client";
import Image from "next/image";
import { SiLinkedin } from "react-icons/si";

export default function LinkedInChat({
  url,
  name = "Manu Rodríguez",
  avatarSrc = "/perfil.png",
  time = "19:59",
  message = "Here you can find my LinkedIn:",
  title = "LinkedIn — Manu Rodríguez",
  domainLabel = "linkedin.com",
}: {
  url: string;
  name?: string;
  avatarSrc?: string;
  time?: string;
  message?: string;
  title?: string;
  domainLabel?: string;
}) {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-start gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-800">
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <p className="text-[11px] text-neutral-400">
            {name} <span className="ml-1">{time}</span>
          </p>

          <div className="mt-1 rounded-2xl bg-neutral-200 px-4 py-3 text-neutral-900 shadow-sm">
            <p className="text-sm leading-relaxed">{message}</p>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sky-700 underline break-all"
            >
              {url}
            </a>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-2xl bg-neutral-800 p-3 text-neutral-100"
              aria-label={title}
            >
              <div className="flex items-center gap-3">
                <div className="grid size-14 place-items-center rounded-xl bg-white">
                  <SiLinkedin className="h-7 w-7 text-sky-700" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{title}</p>
                  <p className="text-xs text-neutral-400">{domainLabel}</p>
                </div>
              </div>
            </a>
          </div>

          <p className="mt-1 text-[11px] text-neutral-400">Seen</p>
        </div>
      </div>
    </div>
  );
}
