import { HTMLAttributes, ReactNode } from "react";

export type SectionSpacing = "sm" | "md" | "lg" | "xl";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  spacing?: SectionSpacing;
}
