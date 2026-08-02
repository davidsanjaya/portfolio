import { Container } from "@/components/shared/container";
import { Section, SectionSpacing } from "@/components/shared/section";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { ExperienceCard } from "@/components/ui/experience-card/experience-card";

import { Experience as ExperienceData } from "@/types/experience";

interface ExperienceProps {
  items: ExperienceData[];
  spacing?: SectionSpacing;
}

export function Experience({ items, spacing }: ExperienceProps) {
  return (
    <Section id="experience" spacing={spacing}>
      <Container>
        <SectionTitle
          eyebrow="Career"
          title="Experience"
          description="My professional journey building enterprise web applications."
        />

        <div className="mt-16 flex flex-col gap-6">
          {items.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.startDate}`}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
