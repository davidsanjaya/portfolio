const base = `
inline-flex
items-center
justify-center
gap-2
rounded-xl
px-6
py-3
text-lg
font-medium
transition-colors
`;

export const buttonStyles = {
  primary: `
        ${base}
        bg-primary
        text-primary-foreground
        hover:opacity-90
    `,

  secondary: `
        ${base}
        border
        border-border
        bg-card
        text-card-foreground
        hover:bg-accent
    `,

  outline: `
        ${base}
        border
        border-border
        text-foreground
        hover:bg-accent
    `,

  ghost: `
        ${base}
        text-foreground
        hover:bg-accent
    `,

  link: `
        ${base}
        p-0
        underline-offset-4
        hover:underline
    `,
};

export const buttonSizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};
