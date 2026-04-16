// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://yerridev.vercel.app',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});
