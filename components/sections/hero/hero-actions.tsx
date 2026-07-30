import { Profile } from "@/types/profile";
import { Button } from "@/components/shared/button";

interface HeroActionProps {
  socialLinks: Profile["socialLinks"];
}

export function HeroActions({ socialLinks }: HeroActionProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 py-6">
      <Button>Download Resume</Button>
      {socialLinks.map((link) => (
        <div
          key={link.name}
          className="bg-white rounded-xl p-6 cursor-pointer text-xl"
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
}
