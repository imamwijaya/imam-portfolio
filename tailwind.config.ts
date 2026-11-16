import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { primary: 'var(--color-primary)', secondary: 'var(--color-secondary)', accent: 'var(--color-accent)', deep: 'var(--color-deep)' },
    fontFamily: { display: ['var(--font-display)', 'sans-serif'], head: ['var(--font-head)', 'sans-serif'], sans: ['var(--font-body)', 'sans-serif'] },
  } },
  plugins: [],
};
export default config;
