import { ContactSection } from "@/types/contact";

export const contact: ContactSection = {
  title: "Contact",

  heading: "Let's build something great together.",

  description:
    "I'm currently open to Frontend Software Engineer and Senior Frontend Software Engineer opportunities. If you'd like to discuss a role or collaborate on a project, I'd love to hear from you.",

  actions: [
    {
      label: "Get in Touch",
      href: "mailto:david.sanjaya1@outlook.co.id",
      variant: "primary",
      icon: "mail",
      download: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/davidsanjaya",
      target: "_blank",
      variant: "secondary",
      icon: "github",
      download: false,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/david-sanjaya-142430a4",
      target: "_blank",
      variant: "secondary",
      icon: "linkedin",
      download: false,
    },
  ],
};
