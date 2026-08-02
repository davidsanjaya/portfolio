import { cn } from "@/lib/utils";
import { SectionTitleProps } from "./section-title.types";
import { titleAlignment } from "./section-title.styles";

export function SectionTitle({
  eyebrow,

  title,

  description,

  centered = false,

  className,

  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        centered ? titleAlignment.center : titleAlignment.left,

        className,
      )}
      {...props}
    >
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-5xl font-black tracking-tight">{title}</h2>

      {description && (
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
