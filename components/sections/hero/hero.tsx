import { Profile } from "@/types/profile";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/shared/container/container";
import { HeroStats } from "./hero-stats";
import { HeroActions } from "./hero-actions";

interface HeroProps {
  data: Profile;
}

export function Hero({ data }: HeroProps) {
  return (
    <Section className="min-h-screen flex items-center">
      <Container size="md" className="flex flex-col items-start gap-6">
        <div className="max-w-5xl space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {data.hero.greeting}
          </p>

          <h1 className="text-7xl font-black tracking-tight text-foreground">
            {data.hero.name}
          </h1>

          <h2 className="text-3xl font-semibold text-primary">
            {data.hero.title}
          </h2>

          <p className="text-xl font-medium text-muted-foreground">
            {data.hero.tagline}
          </p>

          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            {data.hero.description}
          </p>

          <HeroActions actions={data.actions} />

          <HeroStats statistics={data.statistics} />
        </div>
      </Container>
    </Section>
  );
}
