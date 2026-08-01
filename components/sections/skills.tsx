import { Section } from "@/components/shared/section/section";
import { SkillCategory } from "@/types/skills";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { SkillCategoryCard } from "../ui/skill-category-card/skill-category-card";
import { Container } from "../shared/container";

interface SkillsProps {
  items: SkillCategory[];
}

export function Skills({ items }: SkillsProps) {
  return (
    <Section id="skills" spacing="lg">
      <Container>
        <SectionTitle eyebrow="Skills" title="My expertise." />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
