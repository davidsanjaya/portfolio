export interface SocialLink {
  name: string;
  url: string;
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

  socialLinks: SocialLink[];
  statistics: Statistics[];
}
