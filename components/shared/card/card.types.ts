import { HTMLAttributes, ReactNode } from "react";

export type CardPadding = "none" | "sm" | "md" | "lg";
export type CardVariant = "default" | "outlined" | "ghost";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  padding?: CardPadding;

  hover?: boolean;

  bordered?: boolean;

  variant?: CardVariant;
}
