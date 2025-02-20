import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        pw: {
          highlight: {
            100: '#FBF0DA',
            200: '#F7E1B5',
            300: '#F4D390',
            400: '#F0C46B',
            500: '#ECB546',
            600: '#B78C36',
            700: '#826427',
            800: '#4D3B17',
            900: '#181207',
            DEFAULT: '#ECB546',
          },
          fg: {
            100: '#D6D5D8',
            200: '#ACABB1',
            300: '#838089',
            400: '#595662',
            500: '#302C3B',
            600: '#25222E',
            700: '#1A1820',
            800: '#100E13',
            900: '#050406',
            DEFAULT: '#302C3B',
          },
          bg: {
            100: '#D4D3D5',
            200: '#A8A7AB',
            300: '#7D7C82',
            400: '#515058',
            500: '#26242E',
            600: '#1D1C24',
            700: '#151419',
            800: '#0C0C0F',
            900: '#040405',
            DEFAULT: '#26242E',
          },
          text: {
            100: '#FBFBFB',
            200: '#F6F7F7',
            300: '#F2F4F2',
            400: '#EDF0EE',
            500: '#E9ECEA',
            600: '#B5B7B5',
            700: '#808281',
            800: '#4C4D4C',
            900: '#171817',
            DEFAULT: '#E9ECEA',
          },
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
