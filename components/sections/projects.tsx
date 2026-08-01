import { Section } from "@/components/shared/section/section";
import { Project } from "@/types/projects";
import { SectionTitle } from "../ui/section-title";

interface ProjectsProps {
  items: Project[];
}

export function Projects({ items }: ProjectsProps) {
  return (
    <Section>
      <SectionTitle title="Projects" subtitle="Selected work." />

      {items.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>

          <p>{project.description}</p>
        </div>
      ))}
    </Section>
  );
}
