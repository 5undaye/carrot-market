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
          gray: '#525252',
          lightOrange: '#FFA366',
        },
      },
    },
  },
  plugins: [],
};
export default config;
