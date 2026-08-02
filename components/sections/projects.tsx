import { Section } from "@/components/shared/section/section";
import { Project } from "@/types/projects";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { ProjectCard } from "../ui/project-card/project-card";
import { Container } from "../shared/container";
import { SectionSpacing } from "../shared/section";

interface ProjectsProps {
  items: Project[];
  spacing?: SectionSpacing;
}

export function Projects({ items, spacing }: ProjectsProps) {
  return (
    <Section id="project" spacing={spacing}>
      <Container>
        <SectionTitle eyebrow="Projects" title="Selected work." />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
