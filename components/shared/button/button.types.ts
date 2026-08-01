import { ButtonHTMLAttributes } from "react";
import { IconName } from "../icon";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;

  target?: "_blank" | "_self" | "_parent" | "_top";

  download?: boolean | string;

  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

  leftIcon?: IconName;

  rightIcon?: IconName;
}
