import { LoaderCircle } from "lucide-react";
import { SpinnerProps } from "./spinner.types";
import { cn } from "@/lib/utils";
import { spinnerSizes } from "./spinner.styles";

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <LoaderCircle
      className={cn(spinnerSizes[size], "animate-spin", className)}
    />
  );
}
