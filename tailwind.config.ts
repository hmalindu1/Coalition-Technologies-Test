import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#F6F7F8',
        navBarActive: '#01F0D0',
        patientListSelect: '#D8FCF7',
        chartBackground: '#F4F0FE',
        Systolic: '#E66FD2',
        Diastolic: '#8C6FE6',
        respiratoryRate: '#E0F3FA',
        temperature: '#FFE6E9',
        heartRate: '#FFE6F1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      nocompatible: true,
    }),
  ],
}
export default config
