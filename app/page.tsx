import { Hero } from "@/components/sections/hero/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

import { portfolio } from "@/data/portfolio";
import { Contact } from "@/components/sections/contact/contact";
import { About } from "@/components/sections/about/about";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-[520px_1fr] bg-linear-to-b from-slate-950 via-black to-slate-900">
        <Hero spacing="xl" data={portfolio.profile} />

        <main>
          <About spacing="lg" data={portfolio.profile} />
          <Experience items={portfolio.experiences} spacing="lg" />

          <Projects items={portfolio.projects} spacing="lg" />

          <Skills items={portfolio.skillCategories} spacing="lg" />

          <Contact data={portfolio.contact} />
        </main>
      </div>
    </>
  );
}
