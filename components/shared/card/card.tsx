import { cn } from "@/lib/utils";
import { cardPadding, cardBorder, cardHover, cardVariant } from "./card.styles";
import { CardProps } from "./card.types";

export function Card({
  children,
  padding = "md",
  hover = false,
  bordered = true,
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardPadding[padding],
        cardBorder[String(bordered) as "true" | "false"],
        cardHover[String(hover) as "true" | "false"],
        cardVariant[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
