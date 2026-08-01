import { HTMLAttributes } from "react";

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;

  title: string;

  description?: string;

  centered?: boolean;
}
