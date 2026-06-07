// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://digitaldynamics-mx.github.io',
  base: '/DigitalDynamics',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});
