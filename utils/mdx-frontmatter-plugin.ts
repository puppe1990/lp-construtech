import type { Plugin } from 'vite';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

/**
 * Plugin do Vite que injeta frontmatter nos módulos MDX após a compilação
 */
export function mdxFrontmatterPlugin(): Plugin {
  return {
    name: 'mdx-frontmatter-injector',
    enforce: 'post',
    transform(code, id) {
      // Só processa arquivos MDX
      if (!id.endsWith('.mdx')) {
        return null;
      }

      // Lê o arquivo original para extrair frontmatter
      try {
        const filePath = id.replace(/\?.*$/, ''); // Remove query params
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsed = matter(fileContent);
        
        if (parsed.data && Object.keys(parsed.data).length > 0) {
          // Injeta o export do frontmatter no código gerado
          const frontmatterExport = `\nexport const frontmatter = ${JSON.stringify(parsed.data)};`;
          
          return {
            code: code + frontmatterExport,
            map: null
          };
        }
      } catch (error) {
        console.warn(`[mdxFrontmatterPlugin] Erro ao processar ${id}:`, error);
      }
      
      return null;
    }
  };
}

