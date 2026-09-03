import { Profile } from "@/types/profile";
import { Section } from "@/components/shared/section/section";
import { Container } from "@/components/shared/container/container";
import { HeroStats } from "../hero/hero-stats";
import { SectionSpacing } from "@/components/shared/section/section.types";
import { SectionTitle } from "@/components/shared/section-title/section-title";

interface AboutProps {
  data: Profile;
  spacing?: SectionSpacing;
}

export function About({ data, spacing }: AboutProps) {
  return (
    <Section
      spacing={spacing}
      className="
    flex
    items-center
    flex-col
  "
    >
      <Container size="md" className="flex flex-col items-start gap-6">
        <SectionTitle
          eyebrow="About"
          title="Building enterprise applications that stay maintainable as they grow."
        />

        <div className="max-w-5xl space-y-4">
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            {data.hero.description}
          </p>
        </div>

        <HeroStats statistics={data.statistics} />
      </Container>
    </Section>
  );
}
