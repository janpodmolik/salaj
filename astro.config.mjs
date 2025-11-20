// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://janpodmolik.github.io',
  base: '/salaj',
  image: {
    domains: ['picsum.photos', 'images.unsplash.com'],
  },
});
