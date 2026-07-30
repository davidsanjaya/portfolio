import { Hero as HeroData } from "@/types/profile";
import { Section } from "@/components/ui/section";

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <Section>
      <p>{data.greeting}</p>

      <h1>{data.name}</h1>

      <h2>{data.title}</h2>

      <p>{data.tagline}</p>

      <p>{data.description}</p>
    </Section>
  );
}
