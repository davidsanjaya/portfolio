const base = `
rounded-2xl
bg-card
transition-all
duration-200
max-w-5xl
bg-slate-900/60
border border-slate-800
backdrop-blur-sm
`;

export const cardPadding = {
  none: `${base}`,
  sm: `${base} p-4`,
  md: `${base} p-6`,
  lg: `${base} p-8`,
};

export const cardBorder = {
  true: `${base} border border-border`,
  false: `${base}`,
};

export const cardHover = {
  true: `${base} hover:shadow-lg hover:-translate-y-1`,
  false: `${base}`,
};

export const cardVariant = {
  default: `
        ${base}
        bg-primary
        text-primary-foreground
    `,

  outlined: `
        ${base}
        border
        border-border
        text-foreground
    `,

  ghost: `
        ${base}
        text-foreground
    `,
};
