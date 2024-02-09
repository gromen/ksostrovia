import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  vite: {
    ssr: {
      noExternal: 'cookie'
    }
  },
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()]
});
