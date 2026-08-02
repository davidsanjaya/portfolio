import { Hero } from "@/components/sections/hero/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero spacing="xl" data={portfolio.profile} />

      <Experience items={portfolio.experiences} spacing="lg" />

      <Projects items={portfolio.projects} spacing="lg" />

      <Skills items={portfolio.skillCategories} spacing="lg" />
    </>
  );
}
