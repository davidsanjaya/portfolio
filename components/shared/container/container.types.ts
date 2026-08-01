import { ReactNode } from "react";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps {
  children: ReactNode;

  size?: ContainerSize;

  className?: string;
}
