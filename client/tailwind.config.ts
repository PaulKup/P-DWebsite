// Tailwind CSS configuration
// - 'content': files Tailwind scans for class usage (tree-shaking unused styles)
// - 'safelist': utilities to always include (useful for classes built dynamically)
// - 'theme.extend': project design tokens that augment Tailwind's defaults
// - 'plugins': optional Tailwind plugins
// The object uses 'satisfies Config' to keep the config type-safe.
import type { Config } from 'tailwindcss'

export default {
  // Files to scan for Tailwind class names. Update if you add new source folders.
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  safelist: [
    // Keep these grid utilities even if Tailwind doesn't see them in source
    // (e.g., when class names are constructed dynamically at runtime).
    { pattern: /^grid-cols-(1|2|3|4)$/ },
    { pattern: /^sm:grid-cols-(1|2|3|4)$/ },
    { pattern: /^md:grid-cols-(1|2|3|4)$/ },
    { pattern: /^lg:grid-cols-(1|2|3|4)$/ },
  ],
  theme: {
    // Use 'extend' to add tokens/utilities without replacing Tailwind defaults.
    extend: {
      colors: {
        // Project color tokens
        // - brand: primary accents
        // - ink: text/foreground shades
        // - sand: neutrals/backgrounds/surfaces
        // Usage examples: 'text-ink-dark', 'bg-sand-background', 'border-brand-accent'
        brand: {
          primary: '#0055FF', // legacy; keep for now
          secondary: '#00AAFF', // legacy; keep for now
          light: '#F0F7FF', // legacy; keep for now
          dark: '#003399', // legacy; keep for now
          // From colors.json
          accentDeep: '#984D37',
          accentTan: '#AE7B60',
        },
        // From colors.json
        ink: {
          dark: '#2D2A26',
          base: '#000000',
          inverse: '#FFFFFF',
          medium: '#4D4D4D',
          light: '#717171',
        },
        sand: {
          background: '#F5EFE8',
          light: '#EBD9C2',
          surface: '#FFFFFF',
          medium: '#E6E6E6',
          dark: '#CCCCCC',
        },
        overlays: { brown69: 'rgba(174,123,96,0.69)' },
      },

      // Radii for 'rounded-*' utilities.
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      // Typography tokens synced from client/design/tokens/typography.json
      // Note: To fully apply these, import the actual fonts via next/font
      // and/or global CSS. These tokens expose convenient utilities:
      // font-heading1, font-heading2, font-body, font-accent, font-sans, font-mono
      fontFamily: {
        // Use CSS vars provided by next/font in layout.tsx
        heading1: ['var(--font-sans)'],
        heading2: ['var(--font-heading2)'],
        body: ['var(--font-sans)'],
        accent: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      // Font sizes as [fontSize, lineHeight] pairs.
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '30px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '38px'],
        '4xl': ['36px', '44px'],
      },
      // Extend spacing scale (8px baseline)
      spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
      },
      // Standard shadow scale; adjust if Figma specifies custom elevations
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
        md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
        lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
        xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
      },
    },
  },
  // Add Tailwind plugins here (forms, typography, container-queries, etc.).
  plugins: [],
} satisfies Config // Ensures this object conforms to Tailwind's Config type.
