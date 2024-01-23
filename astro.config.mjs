import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindIntegration from "@astrojs/tailwind";

import astroExpressiveCode from 'astro-expressive-code'
const astroExpressiveCodeOptions = {
  // You can use any of the themes bundled with Shiki by name,
  // specify a path to JSON theme file, or pass an instance
  // of the `ExpressiveCodeTheme` class here:
  themes: ['github-light'],
  shiki: {
    // You can pass additional plugin options here,
    // e.g. to load custom language grammars:
    langs: [
      // import('./some-exported-grammar.mjs'),
      // async () => JSON.parse(await fs.readFile('some-json-grammar.json', 'utf-8'))
    ]
  },
}
// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: ["rehype-slug", ["rehype-autolink-headings", {
      behavior: "append"
    }], ["rehype-toc", {
      headings: ["h1", "h2"],
      cssClasses: {
        toc: "page-outline toc-wrapper",
        // CSS class for the TOC
        link: "page-link font-toc",
        // CSS class for links in the TOC with green text
        listItem: "page-link font-toc" // CSS class for links in the TOC with green text
      }
    }]],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-light',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  site: 'https://example.com',
  integrations: [astroExpressiveCode(astroExpressiveCodeOptions), mdx(), sitemap(), tailwindIntegration()]
});