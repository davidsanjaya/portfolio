export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";

export type IconName = "download" | "github" | "linkedin";

export interface Actions {
  label: string;
  href: string;
  variant?: ButtonVariant;
  icon?: IconName;
  download: boolean;
  target?: "_self" | "_blank";
}

export interface Statistics {
  value: string;
  label: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

export interface Hero {
  greeting: string;

  name: string;

  title: string;

  tagline: string;

  description: string;
}

export interface Profile {
  hero: Hero;

  contact: ContactInfo;

  actions: Actions[];
  statistics: Statistics[];
}
