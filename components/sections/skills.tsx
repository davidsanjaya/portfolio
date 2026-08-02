import { Section } from "@/components/shared/section/section";
import { SkillCategory } from "@/types/skills";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { SkillCategoryCard } from "../ui/skill-category-card/skill-category-card";
import { Container } from "../shared/container";
import { SectionSpacing } from "../shared/section";

interface SkillsProps {
  items: SkillCategory[];
  spacing?: SectionSpacing;
}

export function Skills({ items, spacing }: SkillsProps) {
  return (
    <Section id="skills" spacing={spacing}>
      <Container>
        <SectionTitle eyebrow="Skills" title="My expertise." />

        <div className="mt-16 grid gap-6 md:grid-cols-2 items-stretch">
          {items.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
