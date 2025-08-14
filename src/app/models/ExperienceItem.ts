export type ExperienceItem = {
    date: string;
    title: string;
    company: string;
    functions: string[];
    typeOfContract: string;
    icons?: { name: string; slug?: string }[];
    study?: boolean; 
    };
  