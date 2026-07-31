import { Profile } from "@/types/profile";
import { Button } from "@/components/shared/button";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface HeroActionProps {
  actions: Profile["actions"];
}

export function HeroActions({ actions }: HeroActionProps) {
  const icons: Record<string, React.ReactNode> = {
    download: <Download size={18} />,
    github: <FaGithub size={18} />,
    linkedin: <FaLinkedin size={18} />,
  };

  return (
    <div className="grid gap-4 sm:grid-cols-3 py-6 items-center">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          href={action.href}
          target={action.target}
          download={action.download}
          icon={icons[action.icon ?? ""]}
          size="lg"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
