// app/page.tsx
import Image from "next/image";
import { ExperienceTimeline } from "./components/experience-timeline";
import { EXPERIENCE, splitExperience } from "./data/experience";
import ChatBubble from "./components/chat-bubble";
import ContactBubble from "./components/contact-bubble";
import LinkedInChat from "./components/linkedin-chat";
import TypeCard from "./components/type-card";
import QuickLinks from "./components/quick-links";
import Impact from "./components/impact";
import { impact } from "./data/impact";

export default function Home() {
  const { work, education } = splitExperience(EXPERIENCE);

  return (
    <main>
      <header className="relative w-full min-h-[100svh]">
  <div className="mx-auto max-w-5xl px-4 md:pr-[420px] pt-16 pb-10 h-full flex flex-col">
    <div className="flex items-center gap-4">
      <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-neutral-800">
        <Image
          src="/perfil.png"
          alt="Manu Rodríguez"
          fill
          sizes="80px"
          className="object-cover object-[50%_85%] transform-gpu scale-[1.15]"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-neutral-400">Portfolio</p>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Manu Rodríguez</h1>
        <p className="text-sm text-neutral-400">Full-Stack Developer</p>
      </div>
    </div>

    <p className="mt-6 max-w-2xl text-base md:text-lg text-neutral-300">
  Currently at Iberostar Group and pursuing a
  Computer Engineering degree at UOC.
</p>
  <div className="space-y-4">
    <TypeCard
      lines={[
        "const manu = {",
        "  role: 'Software Developer',",
        "  stack: ['React','Next.js','.NET','Azure','PostgreSQL', 'Oracle', 'Sencha'],",
        "  hobbies: ['gaming', 'traveling', 'reading', 'music', 'foodie'],",
        "  current: {",
        "    company: 'Iberostar Group',",
        "  },",
        "  location: 'Spain',",
        "}",
      ]}
      speed={10}
    />
    <QuickLinks />
  </div>
</div>


  <aside className="hidden md:block absolute right-6 top-16 w-[380px]">
    <div className="space-y-4">
      <ChatBubble text="Hello there! Welcome to my profile :)" />
      <LinkedInChat url={process.env.NEXT_PUBLIC_LINKEDIN ?? 'https://linkedin.com'} />
      <ContactBubble to={process.env.NEXT_PUBLIC_EMAIL ?? 'you@example.com'} />
    </div>
  </aside>

<div className="mt-6 space-y-4 md:hidden">
  <ChatBubble text="Hello there! Welcome to my profile :)" />
  <LinkedInChat url={process.env.NEXT_PUBLIC_LINKEDIN ?? "https://linkedin.com"} />
  <ContactBubble to={process.env.NEXT_PUBLIC_EMAIL ?? "you@example.com"} />
</div>

</header>
      {/* Experience — split into Work / Education */}
      <section id="experience" className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h2>
          <p className="mt-2 text-sm md:text-base text-neutral-400">
            Here are some highlights from my professional journey, including work experience and education.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Work</h3>
              <ExperienceTimeline items={work} />
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Education</h3>
              <ExperienceTimeline items={education} />
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="py-12 md:py-20">
  <div className="mx-auto max-w-5xl px-4">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Highlights & Impact</h2>
    <p className="mt-2 text-sm md:text-base text-neutral-400">
      A selection of outcomes and contributions across roles and studies.
    </p>
    <div className="mt-8">
      <Impact items={impact} />
    </div>
  </div>
</section>
      <footer className="mx-auto max-w-5xl px-4 pb-16 text-xs text-neutral-500">
        © {new Date().getFullYear()} Manu Rodríguez. Built with Next.js + Tailwind.
      </footer>
    </main>
  );
}
