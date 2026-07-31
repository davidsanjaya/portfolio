export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  target?: "_self" | "_blank";
  download?: boolean;
  icon?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
}
