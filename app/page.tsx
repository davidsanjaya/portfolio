import { Hero } from "@/components/sections/hero/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero data={portfolio.profile} />

      <Experience items={portfolio.experiences} />

      <Projects items={portfolio.projects} />

      <Skills items={portfolio.skillCategories} />
    </>
  );
}
