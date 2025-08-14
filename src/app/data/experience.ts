import { ExperienceItem } from "../models/ExperienceItem";

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "November 2024 – Present",
    title: "Full-Stack Developer",
    company: "Iberostar Group",
    functions: [
      "Developing and maintaining intranet applications and contributing across multiple projects.",
      "End-to-end involvement: requirements analysis, implementation, collaboration with business teams, and delivery.",
      "Continuous learning in team environments; focus on quality and maintainability.",
    ],
    typeOfContract: "Intern",
    icons: [
      { name: ".NET Core", slug: "dotnet" },  
      { name: "React", slug: "react" },
      { name: "Oracle", slug: "oracle" },  
      { name: "Azure", slug: "azure" }, 
      { name: "PostgreSQL", slug: "postgresql" },   
      { name: "Sencha JS", slug: "sencha" }
    ],
    study: false,
  },
  {
    date: "March 2024 – June 2024",
    title: "Junior Frontend Developer",
    company: "Habitissimo",
    functions: [
      "Worked with the frontend team to modernize the platform using Next.js and React.",
      "Improved SEO and performance metrics.",
      "Built reusable components and features.",
      "Participated in SCRUM ceremonies and daily standups.",
    ],
    typeOfContract: "Internship (3 months)",
    icons: [
      { name: "Next.js", slug: "nextjs" },
      { name: "React", slug: "react" },
      { name: "Tailwind", slug: "tailwind" },
    ],
    study: false,
  },
  {
    date: "September 2024 – Present",
    title: "B.Sc. in Computer Engineering",
    company: "Universitat Oberta de Catalunya (UOC)",
    functions: [],
    typeOfContract: "Degree",
    icons: [],
    study: true,
  },
  {
    date: "September 2022 – June 2024",
    title: "CFGS — Web Application Development",
    company: "CIFP Francesc de Borja Moll",
    functions: [
      "Fundamentals of web development.",
      "Databases (PostgreSQL, MongoDB) and OOP.",
      "Web applications with JavaScript and PHP.",
      "Frameworks such as Vue.js and Laravel.",
      "Git, Docker, and Agile methodologies.",
    ],
    typeOfContract: "Vocational Education (Superior FP)",
    icons: [
      { name: "Vue.js", slug: "vue" },
      { name: "Laravel", slug: "laravel" },
    ],
    study: true,
  },
];

export const splitExperience = (items: ExperienceItem[]) => ({
  work: items.filter((x) => !x.study),
  education: items.filter((x) => x.study),
});
