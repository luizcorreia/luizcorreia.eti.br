import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  site: 'https://luizcorreia.eti.br',
  srcDir: './astro',
  publicDir: './static',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        post: fileURLToPath(new URL('./astro/layouts/LegacyPost.astro', import.meta.url))
      }
    }
  }
})
