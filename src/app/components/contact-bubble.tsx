// components/contact-bubble-mailto.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { Button } from "./ui/button";

type Props = {
  to: string;                
  name?: string;
  avatarSrc?: string;
  time?: string;
  subjectPrefix?: string;     
};

export default function ContactBubble({
  to,
  name = "You",
  avatarSrc = "/perfil.png",
  time = "Now",
  subjectPrefix = "I've seen your portfolio!",
}: Props) {
  const [message, setMessage] = useState("");
  const [fromEmail, setFromEmail] = useState("");

  const subject = useMemo(
    () => `${subjectPrefix}${fromEmail ? ` from ${fromEmail}` : ""}`,
    [subjectPrefix, fromEmail]
  );

  const body = useMemo(() => {
    const trimmed = message.slice(0, 1500);
    const reply = fromEmail ? `\n\nReply to: ${fromEmail}` : "";
    return `${trimmed}${reply}`;
  }, [message, fromEmail]);

  const mailtoHref = useMemo(() => {
    const normalizeCRLF = (s: string) => s.replace(/\r?\n/g, "\r\n");
    const sub = encodeURIComponent(subject);
    const bod = encodeURIComponent(normalizeCRLF(body));
    return `mailto:${to}?subject=${sub}&body=${bod}`;
  }, [to, subject, body]);
  
  const onSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    window.location.href = mailtoHref;
  };

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

            <form
            onSubmit={onSend}
            className="mt-1 rounded-2xl bg-green-200/80 px-4 py-3 text-neutral-900 shadow-sm"
            >
            <p className="mb-2 flex items-center gap-1 text-sm font-medium">
            <HiOutlineMail /> Contact me 
            </p>

            <div className="flex gap-2">
              <input
              required
              placeholder="Your message :)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 rounded-xl border border-neutral-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-neutral-500"
              />
              <Button
              type="submit"
              disabled={!message.trim()}
              className="rounded-xl"
              >
              Send
              </Button>
            </div>
            </form>

          <p className="mt-1 text-[11px] text-neutral-400">Seen</p>
        </div>
      </div>
    </div>
  );
}
