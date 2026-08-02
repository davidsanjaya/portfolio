export const projectCardStyles = {
  header: `
        space-y-2
    `,

  category: `
        text-xs
        font-semibold
        uppercase
        tracking-[0.2em]
        text-muted-foreground
    `,

  name: `
        text-2xl
        font-bold
        text-foreground
    `,

  description: `
        mt-6
        text-base
leading-7
text-muted-foreground
    `,

  highlights: `
        mt-10
    `,

  highlightsTitle: `
        text-sm
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
    justify-start
    gap-x-2
    gap-y-2
`,

  badge: `
    whitespace-nowrap
    rounded-full
    border
    border-border
    bg-muted/40
    px-2
    py-1
    text-[11px]

    sm:px-3
    sm:text-sm

    font-medium
    text-muted-foreground
    transition-colors
    hover:bg-accent
`,
};
