import { Card } from "@/components/shared/card";
import { Icon } from "@/components/shared/icon";

import { ProjectCardProps } from "./project-card.types";
import { projectCardStyles } from "./project-card.styles";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover padding="lg" variant="ghost">
      <header className={projectCardStyles.header}>
        <p className={projectCardStyles.category}>{project.category}</p>

        <h3 className={projectCardStyles.name}>{project.name}</h3>
      </header>

      <p className={projectCardStyles.description}>{project.description}</p>

      <section className={projectCardStyles.highlights}>
        <p className={projectCardStyles.highlightsTitle}>Highlights</p>

        <ul className={projectCardStyles.list}>
          {project.highlights.map((item) => (
            <li key={item} className={projectCardStyles.listItem}>
              <Icon name="check" className={projectCardStyles.icon} />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className={projectCardStyles.footer}>
        <div className={projectCardStyles.technologies}>
          {project.technologies.map((technology) => (
            <span key={technology} className={projectCardStyles.badge}>
              {technology}
            </span>
          ))}
        </div>
      </footer>
    </Card>
  );
}
