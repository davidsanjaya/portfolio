import { Profile } from "@/types/profile";

export const profile: Profile = {
  hero: {
    greeting: "👋 Hi, I'm",

    name: "David Sanjaya",

    title: "Senior Frontend Software Engineer",

    tagline:
      "Building scalable enterprise applications with Blazor, React, and Next.js.",

    description:
      "Frontend Software Engineer with 11+ years of experience building enterprise web applications using Blazor, React, Next.js, TypeScript, and C#. Experienced in modern UI architecture, reusable component libraries, API integration, and responsive design while working in Agile Scrum environments.",
  },

  contact: {
    location: "Bandung, Indonesia",

    email: "david.sanjaya1@outlook.co.id",

    phone: "+62 859-5645-4998",
  },

  actions: [
    {
      label: "Download Resume",
      href: "/David-Sanjaya-Resume.pdf",
      variant: "primary",
      icon: "download",
      download: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/davidsanjaya",
      variant: "secondary",
      icon: "github",
      download: false,
      target: "_blank",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/david-sanjaya-142430a4",
      variant: "secondary",
      icon: "linkedin",
      download: false,
      target: "_blank",
    },
  ],
  statistics: [
    {
      value: "11+",
      label: "Years Experience",
    },
    {
      value: "Multiple",
      label: "Enterprise Projects",
    },
    {
      value: "5",
      label: "Companies",
    },
  ],
};
