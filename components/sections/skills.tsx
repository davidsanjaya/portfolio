import { Section } from "@/components/shared/section/section";
import { SkillCategory } from "@/types/skills";
import { SectionTitle } from "@/components/shared/section-title/section-title";

interface SkillsProps {
  items: SkillCategory[];
}

export function Skills({ items }: SkillsProps) {
  return (
    <Section>
      <SectionTitle eyebrow="Skills" title="My expertise." />

      {items.map((category) => (
        <div key={category.title}>
          <h3>{category.title}</h3>

          <ul>
            {category.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
