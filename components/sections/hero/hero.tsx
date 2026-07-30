import { Profile } from "@/types/profile";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { HeroStats } from "./hero-stats";
import { HeroActions } from "./hero-actions";

interface HeroProps {
  data: Profile;
}

export function Hero({ data }: HeroProps) {
  return (
    <Section className="min-h-screen flex bg-black items-center">
      <Container>
        <div className="max-w-3xl gap-3 flex flex-col">
          <p className="text-lg text-white">{data.hero.greeting}</p>

          <h1 className="text-6xl font-bold tracking-tight text-white">
            {data.hero.name}
          </h1>

          <h2 className="text-3xl font-medium text-zinc-700">
            {data.hero.title}
          </h2>
          <p className="text-2xl font-medium text-zinc-700">
            {data.hero.tagline}
          </p>

          <p className="text-xl max-w-2xl text-zinc-700 leading-relaxed">
            {data.hero.description}
          </p>

          <HeroActions socialLinks={data.socialLinks} />

          <HeroStats statistics={data.statistics} />
        </div>
      </Container>
    </Section>
  );
}
