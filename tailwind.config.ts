import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          dark: {
            '700': '#161618',
            '500': '#1B1B1F',
            '400': '#96969D',
            '200': '#717171',
            '100': '#8b8b8b',
          },
        },
      },
      boxShadow: {
        'sm-blue': '0 1px 2px 0 rgba(59, 130, 246, 0.05)',
        blue: '0 1px 3px 0 rgba(59, 130, 246, 0.1), 0 1px 2px -1px rgba(59, 130, 246, 0.1)',
        'md-blue': '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -2px rgba(59, 130, 246, 0.1)',
        'lg-blue': '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -4px rgba(59, 130, 246, 0.1)',
        'xl-blue': '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
        '2xl-blue': '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      animation: {
        'spin-fast': 'spin-fast 750ms linear infinite',
      },
      keyframes: {
        'spin-fast': {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
