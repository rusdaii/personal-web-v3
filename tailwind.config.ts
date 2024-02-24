import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a855f7',
        secondary: '#f0abfc',
        dark: '#0C1033',
      },
      container: {
        center: true,
      },

      fontFamily: {
        poppins: 'var(--font-poppins)',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-debug-screens')],
};

export default config;
