import { Experience as ExperienceData } from "@/types/experience";
import { Section } from "@/components/shared/section/section";
import { SectionTitle } from "@/components/ui/section-title";

interface ExperienceProps {
  items: ExperienceData[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <Section>
      <SectionTitle title="Experience" subtitle="My professional journey." />

      {items.map((experience) => (
        <div key={experience.company}>
          <h3>{experience.company}</h3>

          <p>{experience.role}</p>

          <p>
            {experience.startDate} - {experience.endDate}
          </p>
        </div>
      ))}
    </Section>
  );
}
