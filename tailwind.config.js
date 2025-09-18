import vectorConfig from '@vector/tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
  ...vectorConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  darkMode: 'class',
}
