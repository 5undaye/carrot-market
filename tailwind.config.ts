import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        carrot: {
          orange: '#FF7E36',
          white: '#FFFFFF',
          black: '#333333',
          gray: '#F2F3F5',
          lightOrange: '#FFA366',
        },
      },
    },
  },
  plugins: [],
};
export default config;
