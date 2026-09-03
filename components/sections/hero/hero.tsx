import { Profile } from "@/types/profile";
import { Section } from "@/components/shared/section/section";
import { Container } from "@/components/shared/container/container";
import { HeroActions } from "./hero-actions";
import { SectionSpacing } from "@/components/shared/section/section.types";

interface HeroProps {
  data: Profile;
  spacing?: SectionSpacing;
}

export function Hero({ data, spacing }: HeroProps) {
  return (
    <Section
      spacing={spacing}
      className="
lg:sticky
    lg:top-0
    lg:h-screen
    flex
    items-center
"
    >
      <Container size="md" className="flex flex-col items-start gap-6 lg:gap-8">
        <div className="max-w-5xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {data.hero.greeting}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white">
            {data.hero.name}
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
            {data.hero.title}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-muted-foreground">
            {data.hero.tagline}
          </p>

          <HeroActions actions={data.actions} />
        </div>
      </Container>
    </Section>
  );
}
