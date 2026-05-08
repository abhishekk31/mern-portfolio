import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
      colors: {
        background: 'oklch(0.14 0.03 270)',
        foreground: 'oklch(0.98 0.01 270)',
        card: 'oklch(0.18 0.04 270)',
        'card-foreground': 'oklch(0.98 0.01 270)',
        popover: 'oklch(0.18 0.04 270)',
        'popover-foreground': 'oklch(0.98 0.01 270)',
        primary: 'oklch(0.7 0.2 285)',
        'primary-foreground': 'oklch(0.14 0.03 270)',
        secondary: 'oklch(0.25 0.05 270)',
        'secondary-foreground': 'oklch(0.98 0.01 270)',
        muted: 'oklch(0.22 0.04 270)',
        'muted-foreground': 'oklch(0.7 0.03 270)',
        accent: 'oklch(0.65 0.22 220)',
        'accent-foreground': 'oklch(0.14 0.03 270)',
        destructive: 'oklch(0.62 0.22 29)',
        'destructive-foreground': 'oklch(0.98 0.01 270)',
        border: 'oklch(0.22 0.04 270)',
        input: 'oklch(0.22 0.04 270)',
        ring: 'oklch(0.7 0.2 285)',
      },
    },
  },
  plugins: [],
} satisfies Config
