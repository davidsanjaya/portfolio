import { Profile } from "@/types/profile";
import { Button } from "@/components/shared/button";

interface HeroActionProps {
  actions: Profile["actions"];
}

export function HeroActions({ actions }: HeroActionProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 py-6 items-center">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          href={action.href}
          target={action.target}
          download={action.download}
          leftIcon={action.icon}
          // rightIcon={action.icon}
          size="lg"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
