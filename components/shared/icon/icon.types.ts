import { iconRegistry } from "./icon.registry";

export type IconName = keyof typeof iconRegistry;
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  strokeWidth?: number;
}
