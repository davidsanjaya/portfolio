import { cn } from "@/lib/utils";
import { sectionSpacing } from "./section.styles";
import { SectionProps } from "./section.types";

const base = `
w-full
`;

export function Section({
  children,
  spacing = "lg",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(base, sectionSpacing[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}
