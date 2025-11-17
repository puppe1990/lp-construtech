import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import { remarkFrontmatterExport } from './utils/remark-frontmatter-export';
import { mdxFrontmatterPlugin } from './utils/mdx-frontmatter-plugin';
import { sitemapPlugin } from './utils/vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        mdx({
          jsxImportSource: 'react',
          remarkPlugins: [
            remarkFrontmatter, // Parseia o frontmatter primeiro
            remarkFrontmatterExport, // Depois adiciona o export
          ],
          rehypePlugins: [],
        }),
        mdxFrontmatterPlugin(), // Injeta frontmatter após compilação MDX
        sitemapPlugin({
          domain: 'https://ativo-mais.com.br', // Altere para o domínio real do seu site
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
