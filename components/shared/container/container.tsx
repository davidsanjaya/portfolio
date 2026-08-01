import { cn } from "@/lib/utils";
import { containerSizes } from "./container.styles";
import { ContainerProps } from "./container.types";

export function Container({
  children,
  size = "xl",
  className,
}: ContainerProps) {
  return <div className={cn(containerSizes[size], className)}>{children}</div>;
}
