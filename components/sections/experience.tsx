import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { ExperienceCard } from "@/components/ui/experience-card/experience-card";

import { Experience as ExperienceData } from "@/types/experience";

interface ExperienceProps {
  items: ExperienceData[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experience" spacing="lg">
      <Container>
        <SectionTitle
          eyebrow="Career"
          title="Experience"
          description="My professional journey building enterprise web applications."
        />

        <div className="mt-12 flex flex-col gap-6">
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
