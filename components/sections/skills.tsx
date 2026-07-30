import { Section } from "@/components/ui/section";
import { SkillCategory } from "@/types/skills";
import { SectionTitle } from "../ui/section-title";

interface SkillsProps {
  items: SkillCategory[];
}

export function Skills({ items }: SkillsProps) {
  return (
    <Section>
      <SectionTitle title="Skills" />

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
