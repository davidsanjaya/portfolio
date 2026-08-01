export const experienceCardStyles = {
  card: `
        border
        shadow-sm
        hover:shadow-lg
    `,

  header: `
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-start
        md:justify-between
    `,

  headerContent: `
        max-w-3xl
    `,

  company: `
        text-2xl
        font-bold
        text-foreground
    `,

  role: `
        mt-1
        text-lg
        font-semibold
        text-primary
    `,

  date: `
        text-sm
        font-medium
        text-muted-foreground
        whitespace-nowrap
    `,

  summary: `
        mt-6
        max-w-3xl
        leading-7
        text-muted-foreground
    `,

  highlights: `
        mt-8
    `,

  highlightsTitle: `
        text-xs
        font-semibold
        uppercase
        tracking-[0.2em]
        text-muted-foreground
    `,

  list: `
        mt-4
        space-y-3
    `,

  listItem: `
        flex
        items-start
        gap-3
    `,

  icon: `
        mt-0.5
        shrink-0
        text-primary
    `,

  footer: `
        mt-8
    `,

  technologies: `
        flex
        flex-wrap
        gap-2
    `,

  badge: `
        rounded-full
        border
        border-border
        bg-muted/40
        px-3
        py-1
        text-sm
        font-medium
        text-muted-foreground
        transition-colors
        hover:bg-accent
    `,
};
