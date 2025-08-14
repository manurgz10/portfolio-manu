// data/impact.ts (o donde tengas este array)
import { ImpactItem } from "../models/ImpactItem";

export const impact: ImpactItem[] = [
  {
    title: "Intranet apps — end-to-end delivery",
    subtitle: "Iberostar Group · Nov 2024 — Present",
    points: [
      "Participation across the full lifecycle (requirements → delivery) with .NET, Sencha, React, Oracle, PostgreSQL...",
      "Collaboration with business teams to align features with real needs.",
      "Azure resource changes: App Service/Functions, App Configuration, Key Vault, Storage, Application Insights (per-environment settings).",
    ],
  },
  {
    title: "Legacy modernization — .NET & database migrations",
    subtitle: "Iberostar Group · Nov 2024 — Present",
    points: [
      "Upgraded legacy services from older .NET versions to modern .NET (LTS), reducing technical debt and easing maintenance.",
      "Planned and executed database migrations from Oracle to PostgreSQL, including schema translation and data pipelines.",
      "Ensured functional parity and performance via testing/monitoring, minimizing downtime during cutover.",
    ],
  },
  {
    title: "Platform modernization (Next.js + React)",
    subtitle: "Habitissimo · Mar 2024 — Jun 2024",
    points: [
      "Helped migrate legacy pages to Next.js with reusable UI patterns.",
      "Contributed to SEO/performance improvements and accessibility tweaks.",
      "Built components and features following SCRUM cadence.",
    ],
  },
  {
    title: "Web Application Development (HND)",
    subtitle: "CIFP Francesc de Borja Moll · 2022 — 2024",
    points: [
        "Backend fundamentals: APIs, databases and application architecture.",
        "Frontend fundamentals: HTML/CSS/JS and modern frameworks.",
        "Agile methodologies (Scrum): teamwork, sprints and ceremonies.",
        "Version control (Git), containerization (Docker) and CI/CD.",
    ],
  }
];
