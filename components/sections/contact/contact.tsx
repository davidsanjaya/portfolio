import { ContactSection } from "@/types/contact";
import { Section } from "@/components/shared/section/section";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { Container } from "@/components/shared/container/container";
import { Button } from "@/components/shared/button/button";

interface ContactProps {
  data: ContactSection;
}

export function Contact({ data }: ContactProps) {
  return (
    <Section id="contact" spacing="xl">
      <Container>
        <SectionTitle eyebrow={data.title} title={data.heading} />
        <div className="max-w-2xl space-y-8">
          <p className="text-lg text-muted-foreground leading-8">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {data.actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                target={action.target}
                variant={action.variant}
                leftIcon={action.icon}
                download={action.download}
                size="md"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
