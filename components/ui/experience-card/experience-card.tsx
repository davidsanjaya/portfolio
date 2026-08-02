import { Card } from "@/components/shared/card";
import { Icon } from "@/components/shared/icon";

import { ExperienceCardProps } from "./experience-card.types";
import { experienceCardStyles } from "./experience-card.styles";

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card
      hover
      padding="lg"
      variant="ghost"
      className={experienceCardStyles.card}
    >
      <header className={experienceCardStyles.header}>
        <div className={experienceCardStyles.headerContent}>
          <h3 className={experienceCardStyles.company}>{experience.company}</h3>

          <p className={experienceCardStyles.role}>{experience.role}</p>
        </div>

        <p className={experienceCardStyles.date}>
          {experience.startDate} – {experience.endDate}
        </p>
      </header>

      <p className={experienceCardStyles.summary}>{experience.summary}</p>

      <section className={experienceCardStyles.highlights}>
        <p className={experienceCardStyles.highlightsTitle}>Highlights</p>

        <ul className={experienceCardStyles.list}>
          {experience.responsibilities.map((item) => (
            <li key={item} className={experienceCardStyles.listItem}>
              <Icon name="check" />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className={experienceCardStyles.footer}>
        {experience.technologies.map((technology) => (
          <span className={experienceCardStyles.badge} key={technology}>
            {technology}
          </span>
        ))}
      </footer>
    </Card>
  );
}
