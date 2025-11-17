import matter from 'gray-matter';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';

/**
 * Plugin remark que extrai frontmatter e adiciona como export no código MDX
 */
export function remarkFrontmatterExport(): Plugin<[], Root> {
  return (tree, file) => {
    // Tenta obter o frontmatter de diferentes formas
    let frontmatterData: any = null;
    
    // 1. Tenta usar file.data.matter (do remark-frontmatter)
    if ((file.data as any).matter) {
      frontmatterData = (file.data as any).matter;
      console.log('[remarkFrontmatterExport] Frontmatter encontrado em file.data.matter:', frontmatterData);
    }
    
    // 2. Tenta usar file.data.frontmatter
    if (!frontmatterData && (file.data as any).frontmatter) {
      frontmatterData = (file.data as any).frontmatter;
      console.log('[remarkFrontmatterExport] Frontmatter encontrado em file.data.frontmatter:', frontmatterData);
    }
    
    // 3. Tenta parsear manualmente usando file.value
    if (!frontmatterData) {
      const rawContent = (file as any).value || '';
      console.log('[remarkFrontmatterExport] Tentando parsear rawContent, length:', rawContent.length);
      
      if (rawContent && rawContent.includes('---')) {
        try {
          const parsed = matter(rawContent);
          if (parsed.data && Object.keys(parsed.data).length > 0) {
            frontmatterData = parsed.data;
            console.log('[remarkFrontmatterExport] Frontmatter parseado do rawContent:', frontmatterData);
          }
        } catch (e) {
          console.warn('[remarkFrontmatterExport] Erro ao parsear frontmatter:', e);
        }
      }
    }
    
    // Se encontrou frontmatter, adiciona o export
    if (frontmatterData && typeof frontmatterData === 'object') {
      // Adiciona o frontmatter aos dados do arquivo
      (file.data as any).frontmatter = frontmatterData;
      
      // Adiciona um export no início do arquivo usando a sintaxe MDX
      const exportNode = {
        type: 'mdxjsEsm',
        value: `export const frontmatter = ${JSON.stringify(frontmatterData)};`,
      };
      
      // Adiciona o export no início do tree
      if (Array.isArray(tree.children)) {
        tree.children.unshift(exportNode as any);
        console.log('[remarkFrontmatterExport] Export adicionado ao tree');
      }
    } else {
      console.warn('[remarkFrontmatterExport] Nenhum frontmatter encontrado para o arquivo');
    }
  };
}

