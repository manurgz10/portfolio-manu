// components/chat-bubble.tsx
import Image from "next/image";

export default function ChatBubble({
  name = "Manu Rodríguez",
  avatarSrc = "/perfil.png",
  time = "19:59",
  text,
}: {
  name?: string;
  avatarSrc?: string;
  time?: string;
  text: string;
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
            <p className="text-sm leading-relaxed">{text}</p>
          </div>
          <p className="mt-1 text-[11px] text-neutral-400">Seen</p>
        </div>
      </div>
    </div>
  );
}
