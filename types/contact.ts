import { IconName } from "@/components/shared/icon";
import { ButtonVariant } from "./profile";

export interface Actions {
  label: string;
  href: string;
  variant?: ButtonVariant;
  icon?: IconName;
  download: boolean;
  target?: "_self" | "_blank";
}

export interface ContactSection {
  title: string;

  heading: string;

  description: string;

  actions: Actions[];
}
