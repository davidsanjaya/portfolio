import { Card } from "@/components/shared/card";
import { SkillCategoryCardProps } from "./skill-category-card.types";
import { skillCategoryCardStyles } from "./skill-category-card.styles";

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <Card hover padding="lg" variant="ghost">
      <header className={skillCategoryCardStyles.header}>
        <p className={skillCategoryCardStyles.category}>{category.title}</p>
      </header>

      <div className={skillCategoryCardStyles.badges}>
        {category.skills.map((skill) => (
          <span key={skill} className={skillCategoryCardStyles.badge}>
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}
