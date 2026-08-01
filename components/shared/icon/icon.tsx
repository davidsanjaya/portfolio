import { iconRegistry } from "./icon.registry";
import { IconProps } from "./icon.types";

export function Icon({ name, size, className }: IconProps) {
  const Component = iconRegistry[name];
  if (!Component) {
    return null;
  }
  return <Component size={size} className={className} />;
}
