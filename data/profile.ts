import { Profile } from "@/types/profile";

export const profile: Profile = {
  hero: {
    greeting: "👋 Hi, I'm",

    name: "David Sanjaya",

    title: "Frontend Developer",

    tagline:
      "Building scalable enterprise applications with Blazor, React, and Next.js.",

    description:
      "Frontend developer with 5+ years of experience building enterprise web applications. My background spans React, Next.js, TypeScript, Blazor, and C#. I enjoy designing maintainable UI architectures, creating reusable component libraries, and collaborating closely with designers, product owners, and backend teams. Over the years I've worked across multiple industries and helped deliver applications used by internal business teams and enterprise customers.",
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
      value: "5+",
      label: "Years Experience",
    },
    {
      value: "10+",
      label: "Projects Delivered",
    },
    {
      value: "3",
      label: "Companies",
    },
  ],
};
