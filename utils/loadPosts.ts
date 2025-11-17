
// Função para carregar posts dinamicamente da pasta posts/
export interface BlogPostMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
}

export interface BlogPost extends BlogPostMetadata {
  content?: string;
  module?: any;
}

// Importa todos os posts dinamicamente
const postModules = import.meta.glob('../posts/*.mdx', { eager: true });

// Função para parsear frontmatter YAML simples
function parseFrontmatter(frontmatter: string): Record<string, string> {
  const metadata: Record<string, string> = {};
  
  frontmatter.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex > 0) {
        const key = trimmed.substring(0, colonIndex).trim();
        let value = trimmed.substring(colonIndex + 1).trim();
        
        // Remove aspas se houver
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        
        metadata[key] = value;
      }
    }
  });
  
  return metadata;
}

// Função para extrair metadados do módulo MDX processado
function extractMetadataFromModule(module: any, slug: string): BlogPostMetadata | null {
  // O plugin MDX pode exportar frontmatter
  if (module.frontmatter) {
    const fm = module.frontmatter;
    return {
      title: fm.title || '',
      excerpt: fm.excerpt || '',
      date: fm.date || '',
      author: fm.author || 'Equipe Ativo+',
      category: fm.category || 'Geral',
      readTime: fm.readTime || '5 min',
      slug: fm.slug || slug
    };
  }
  
  // Tenta acessar como propriedade direta
  if (module.title) {
    return {
      title: module.title || '',
      excerpt: module.excerpt || '',
      date: module.date || '',
      author: module.author || 'Equipe Ativo+',
      category: module.category || 'Geral',
      readTime: module.readTime || '5 min',
      slug: module.slug || slug
    };
  }
  
  return null;
}

// Função para ler arquivos MDX e extrair frontmatter em runtime
async function readMDXFile(slug: string): Promise<BlogPostMetadata | null> {
  try {
    // Tenta importar o arquivo como texto raw
    const module = await import(`../posts/${slug}.mdx?raw`);
    const content = typeof module === 'string' ? module : module.default || '';
    
    // Extrai frontmatter usando regex
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const metadata = parseFrontmatter(frontmatter);
      
      return {
        title: metadata.title || '',
        excerpt: metadata.excerpt || '',
        date: metadata.date || '',
        author: metadata.author || 'Equipe Ativo+',
        category: metadata.category || 'Geral',
        readTime: metadata.readTime || '5 min',
        slug: metadata.slug || slug
      };
    }
  } catch (error) {
    console.warn(`Não foi possível ler ${slug}.mdx:`, error);
  }
  return null;
}

// Mapeamento de metadados dos posts (fallback se não conseguir extrair do MDX)
// Este mapeamento é gerado automaticamente dos arquivos MDX na pasta posts/
const postsMetadata: Record<string, BlogPostMetadata> = {
  'reduzir-perdas-rastreabilidade': {
    title: "Como reduzir perdas em canteiros de obra com rastreabilidade",
    excerpt: "Descubra como a rastreabilidade híbrida (QR/RFID/IoT) pode reduzir perdas em até R$ 60.000 por obra e aumentar a eficiência operacional.",
    date: "2024-01-15",
    author: "Equipe Ativo+",
    category: "Gestão",
    readTime: "5 min",
    slug: "reduzir-perdas-rastreabilidade"
  },
  'compliance-nr18-automatizacao': {
    title: "Compliance NR-18: Automatize e evite multas de até R$ 44.007",
    excerpt: "Entenda como automatizar o compliance NR-18 e NR-6 com dossiês digitais, alertas automáticos e trilha de auditoria completa.",
    date: "2024-01-10",
    author: "Equipe Ativo+",
    category: "Compliance",
    readTime: "7 min",
    slug: "compliance-nr18-automatizacao"
  },
  'roi-construcao-tecnologia': {
    title: "ROI em construção: Como calcular o retorno de investimento em tecnologia",
    excerpt: "Aprenda a calcular o ROI de soluções tecnológicas para construção civil e descubra como o Ativo+ oferece payback de 3-6 meses.",
    date: "2024-01-05",
    author: "Equipe Ativo+",
    category: "Financeiro",
    readTime: "6 min",
    slug: "roi-construcao-tecnologia"
  },
  'offline-first-canteiros': {
    title: "Offline-First: Por que sua solução precisa funcionar sem internet",
    excerpt: "Entenda a importância de soluções offline-first em canteiros de obra e como isso impacta a produtividade e confiabilidade dos dados.",
    date: "2023-12-28",
    author: "Equipe Ativo+",
    category: "Tecnologia",
    readTime: "4 min",
    slug: "offline-first-canteiros"
  },
  'integracao-bim-erp': {
    title: "Integração BIM e ERP: Conectando o projeto à execução",
    excerpt: "Saiba como integrar modelos BIM com sistemas ERP para melhorar a comunicação entre projeto e obra, reduzindo retrabalho.",
    date: "2023-12-20",
    author: "Equipe Ativo+",
    category: "Integração",
    readTime: "8 min",
    slug: "integracao-bim-erp"
  },
  'dashboards-financeiros-decisoes': {
    title: "Dashboards financeiros: Transformando dados em decisões estratégicas",
    excerpt: "Descubra como dashboards financeiros podem ajudar construtoras a tomar decisões baseadas em dados e otimizar a rentabilidade.",
    date: "2023-12-15",
    author: "Equipe Ativo+",
    category: "Financeiro",
    readTime: "5 min",
    slug: "dashboards-financeiros-decisoes"
  }
};

// Função auxiliar para formatar data
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  } catch {
    return dateString;
  }
}

// Carrega todos os arquivos MDX da pasta posts/
export async function loadPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  // Itera sobre todos os módulos importados
  for (const path in postModules) {
    const module = postModules[path] as any;
    
    // Extrai o slug do nome do arquivo
    const slug = path
      .replace('../posts/', '')
      .replace('.mdx', '');
    
    // Tenta extrair metadados do módulo MDX processado primeiro
    let metadata = extractMetadataFromModule(module, slug);
    
    // Se não conseguiu, tenta ler o arquivo diretamente
    if (!metadata) {
      metadata = await readMDXFile(slug);
    }
    
    // Se ainda não conseguiu, usa o mapeamento fallback
    if (!metadata) {
      metadata = postsMetadata[slug];
    }
    
    if (metadata) {
      // Preserva a data original para ordenação
      const originalDate = metadata.date;
      
      posts.push({
        ...metadata,
        date: formatDate(originalDate), // Formata a data para exibição
        module: module.default || module
      });
    }
  }
  
  // Ordena por data (mais recente primeiro)
  posts.sort((a, b) => {
    // Usa a data original do metadata para ordenação
    const dateA = new Date(postsMetadata[a.slug]?.date || a.date).getTime();
    const dateB = new Date(postsMetadata[b.slug]?.date || b.date).getTime();
    return dateB - dateA;
  });
  
  return posts;
}

// Carrega um post específico pelo slug
export async function loadPost(slug: string): Promise<BlogPost | null> {
  const posts = await loadPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Função síncrona para obter metadados (útil para casos onde não precisa do módulo)
export function getPostMetadata(slug: string): BlogPostMetadata | null {
  return postsMetadata[slug] || null;
}
