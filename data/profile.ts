import { Profile } from "@/types/profile";

export const profile: Profile = {
  hero: {
    greeting: "👋 Hi, I'm",

    name: "David Sanjaya",

    title: "Frontend Software Engineer",

    tagline: "Building responsive enterprise web applications.",

    description:
      "Frontend Software Engineer with nearly 11 years of professional experience specializing in Blazor, React, and Next.js.",
  },

  contact: {
    location: "Bandung, Indonesia",

    email: "david.sanjaya1@outlook.co.id",

    phone: "+62 859-5645-4998",
  },

  socialLinks: [
    {
      name: "GitHub",

      url: "https://github.com/davidsanjaya",
    },

    {
      name: "LinkedIn",

      url: "https://linkedin.com/in/david-sanjaya-142430a4",
    },
  ],
  statistics: [
    {
      value: "11+",
      label: "Years Experience",
    },
    {
      value: "20+",
      label: "Projects",
    },
    {
      value: "5",
      label: "Companies",
    },
  ],
};
