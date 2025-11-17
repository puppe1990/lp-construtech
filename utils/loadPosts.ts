
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
  originalDate?: string; // Data original do frontmatter para ordenação
}

// Importa módulos MDX processados para renderização
// @ts-ignore - import.meta.glob é uma feature do Vite
const postModules = import.meta.glob('../posts/*.mdx', { 
  eager: true
}) as Record<string, any>;

// Importa arquivos raw para extrair frontmatter
// Nota: ?raw deve fazer o Vite retornar o conteúdo como string
// @ts-ignore - import.meta.glob é uma feature do Vite
const postRawModules = import.meta.glob('../posts/*.mdx?raw', { 
  eager: true
}) as Record<string, string>;

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
  // Verifica todas as propriedades do módulo
  const moduleKeys = Object.keys(module || {});
  const allModuleProps: any = {};
  
  // Coleta todas as propriedades do módulo para debug
  moduleKeys.forEach(key => {
    allModuleProps[key] = module[key];
  });
  
  console.log(`[extractMetadataFromModule] Verificando módulo para ${slug}:`, {
    hasFrontmatter: !!module.frontmatter,
    hasTitle: !!module.title,
    keys: moduleKeys,
    moduleType: typeof module,
    moduleDefault: typeof module.default,
    moduleDefaultKeys: module.default ? Object.keys(module.default) : [],
    allProps: allModuleProps
  });
  
  // O plugin MDX exporta frontmatter como propriedade nomeada do módulo
  if (module.frontmatter) {
    const fm = module.frontmatter;
    console.log(`[extractMetadataFromModule] Frontmatter encontrado diretamente para ${slug}:`, fm);
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
  
  // Tenta acessar via module.default.frontmatter (caso o export esteja no componente)
  if (module.default && typeof module.default === 'object' && module.default.frontmatter) {
    const fm = module.default.frontmatter;
    console.log(`[extractMetadataFromModule] Frontmatter encontrado em default para ${slug}:`, fm);
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
  
  console.log(`[extractMetadataFromModule] Nenhum metadado encontrado para ${slug}. Módulo completo:`, module);
  return null;
}

// Função para ler arquivos MDX e extrair frontmatter
function readMDXFile(path: string): BlogPostMetadata | null {
  try {
    // Procura o conteúdo raw no glob
    const rawContent = postRawModules[path];
    
    if (!rawContent || typeof rawContent !== 'string') {
      console.warn(`[readMDXFile] Conteúdo raw não encontrado para: ${path}`);
      return null;
    }
    
    // Extrai frontmatter usando regex
    const frontmatterMatch = rawContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
    if (!frontmatterMatch) {
      console.warn(`[readMDXFile] Frontmatter não encontrado em: ${path}`);
      return null;
    }
    
    const frontmatter = frontmatterMatch[1];
    const metadata = parseFrontmatter(frontmatter);
    
    // Extrai slug do caminho
    const slug = path
      .replace(/^.*posts\//, '')
      .replace(/\.mdx$/, '');
    
    return {
      title: metadata.title || '',
      excerpt: metadata.excerpt || '',
      date: metadata.date || '',
      author: metadata.author || 'Equipe Ativo+',
      category: metadata.category || 'Geral',
      readTime: metadata.readTime || '5 min',
      slug: metadata.slug || slug
    };
  } catch (error) {
    console.warn(`[readMDXFile] Erro ao ler ${path}:`, error);
  }
  return null;
}


// Função auxiliar para formatar data
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  } catch {
    return dateString;
  }
}


// Carrega todos os arquivos MDX da pasta posts/
export async function loadPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  const modulePaths = Object.keys(postModules);
  const rawPaths = Object.keys(postRawModules);
  console.log('[loadPosts] Módulos encontrados:', modulePaths.length, modulePaths);
  console.log('[loadPosts] Arquivos raw encontrados:', rawPaths.length, rawPaths);
  
  // Itera sobre todos os módulos processados
  for (const path in postModules) {
    const module = postModules[path] as any;
    
    // Extrai o slug do caminho
    let slug = path
      .replace(/^.*posts\//, '')
      .replace(/\.mdx$/, '');
    
    console.log('[loadPosts] Processando:', slug);
    
    // Tenta extrair metadados do módulo primeiro (caso o MDX exporte frontmatter)
    let metadata = extractMetadataFromModule(module, slug);
    
    // Se não conseguiu, tenta ler o arquivo raw usando readMDXFile
    if (!metadata) {
      metadata = readMDXFile(path);
    }
    
    // Se ainda não conseguiu, pula este arquivo
    if (!metadata) {
      console.warn(`[loadPosts] Não foi possível extrair metadados de ${slug}.mdx - arquivo será ignorado`);
      continue;
    }
    
    // Preserva a data original para ordenação
    const originalDate = metadata.date;
    
    posts.push({
      ...metadata,
      date: formatDate(originalDate), // Formata a data para exibição
      originalDate: originalDate, // Mantém data original para ordenação
      module: module?.default || module || null
    });
    
    console.log(`[loadPosts] Post adicionado: ${metadata.title}`);
  }
  
  console.log(`[loadPosts] Total de posts carregados: ${posts.length}`);
  
  // Ordena por data (mais recente primeiro)
  // Usa a data original do frontmatter para ordenação correta
  posts.sort((a, b) => {
    const dateA = a.originalDate ? new Date(a.originalDate).getTime() : 0;
    const dateB = b.originalDate ? new Date(b.originalDate).getTime() : 0;
    return dateB - dateA; // Mais recente primeiro
  });
  
  return posts;
}

// Carrega um post específico pelo slug
export async function loadPost(slug: string): Promise<BlogPost | null> {
  const posts = await loadPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Função síncrona para obter metadados (útil para casos onde não precisa do módulo)
// Nota: Esta função é assíncrona na prática, mas mantém interface síncrona para compatibilidade
export async function getPostMetadata(slug: string): Promise<BlogPostMetadata | null> {
  try {
    const post = await loadPost(slug);
    return post ? {
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      author: post.author,
      category: post.category,
      readTime: post.readTime,
      slug: post.slug
    } : null;
  } catch {
    return null;
  }
}
