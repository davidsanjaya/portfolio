import { iconRegistry } from "./icon.registry";
import { IconProps } from "./icon.types";
import { iconSizes } from "./icon.styles";

export function Icon({ name, size, className, strokeWidth }: IconProps) {
  const Component = iconRegistry[name];
  if (!Component) {
    return null;
  }
  return (
    <Component
      size={iconSizes[size ?? "md"]}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
