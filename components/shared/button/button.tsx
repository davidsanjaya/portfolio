import Link from "next/link";
import { ButtonProps } from "./button.types";
import { buttonStyles, buttonSizes } from "./button.styles";
import { Icon } from "../icon";
import { Spinner } from "../spinner/spinner";
import { cn } from "@/lib/utils";

export function Button({
  children,
  href,
  target,
  download,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const buttonClassName = `${buttonStyles[variant]} ${buttonSizes[size]} ${className ?? ""} `;
  const content = (
    <span
      className={cn(
        "flex items-center justify-center gap-2",
        loading && "opacity-0",
      )}
    >
      {leftIcon && <Icon name={leftIcon} />}

      <span>{children}</span>

      {rightIcon && <Icon name={rightIcon} />}
    </span>
  );

  if (href && target === "_blank") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        className={buttonClassName}
        aria-disabled={isDisabled}
        onClick={isDisabled ? (e) => e.preventDefault() : undefined}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        download={download}
        className={buttonClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} disabled={isDisabled} {...props}>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </span>
      )}
    </button>
  );
}
