import Link from "next/link";
import { ButtonProps } from "./button.types";
import { buttonStyles } from "./button.styles";

export function Button({
  children,
  href = "#",
  variant = "primary",
  target = "_self",
}: ButtonProps) {
  return (
    <Link href={href} target={target} className={buttonStyles[variant]}>
      {children}
    </Link>
  );
}
