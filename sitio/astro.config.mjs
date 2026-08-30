// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    // La matematica se escribe entre $ y $$ dentro del .mdx. remark-math la
    // reconoce antes de que MDX toque el texto, asi que el LaTeX va con UNA
    // barra: $\frac{a}{b}$. Eso elimina el error de escapado mas comun.
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
