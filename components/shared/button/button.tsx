import Link from "next/link";
import { ButtonProps } from "./button.types";
import { buttonStyles, buttonSizes } from "./button.styles";

export function Button({
  children,
  href,
  variant,
  size,
  target,
  icon,
  className,
  download,
}: ButtonProps) {
  const isExternalNavigation = target === "_blank";
  const buttonClassName = `${buttonStyles[variant ?? "primary"]} ${buttonSizes[size ?? "md"]} ${className ?? ""}`;
  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (isExternalNavigation) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClassName}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      target={target}
      className={buttonClassName}
      download={download}
    >
      {content}
    </Link>
  );
}
