import { defineConfig } from '@pandacss/dev';
import { globalCss } from './src/theme/globalCss';

export default defineConfig({
  globalCss,
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/ui/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: { value: '{colors.blue.600}' },
          primaryHover: { value: '{colors.blue.700}' },
          danger: { value: '{colors.red.500}' },
          border: { value: '{colors.gray.300}' },
          textBody: { value: '{colors.gray.900}' },
          textMuted: { value: '{colors.gray.500}' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
