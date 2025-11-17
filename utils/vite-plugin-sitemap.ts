import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SitemapOptions {
  domain?: string;
  routes?: string[];
}

interface BlogPostMetadata {
  slug: string;
  date?: string;
}

interface Route {
  url: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

// Função auxiliar para carregar posts
function loadPosts(): BlogPostMetadata[] {
  const posts: BlogPostMetadata[] = [];
  const postsDir = path.resolve(__dirname, '../posts');

  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdx'));
    
    for (const file of files) {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Extrai o slug do nome do arquivo
      const slug = file.replace('.mdx', '');
      
      // Tenta extrair a data do frontmatter
      let date: string | undefined;
      const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const dateMatch = frontmatter.match(/^date:\s*(.+)$/m);
        if (dateMatch) {
          date = dateMatch[1].trim().replace(/["']/g, '');
        }
      }
      
      posts.push({ slug, date });
    }
  }

  return posts;
}

// Função para gerar o XML do sitemap
function generateSitemap(domain: string, routes: string[]): string {
  const posts = loadPosts();

  // URLs principais
  const mainRoutes: Route[] = [
    { url: domain, changefreq: 'daily', priority: '1.0' },
    { url: `${domain}/#blog`, changefreq: 'weekly', priority: '0.9' }
  ];

  // URLs dos posts do blog
  const blogRoutes: Route[] = posts.map(post => ({
    url: `${domain}/#blog/${post.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: post.date ? new Date(post.date).toISOString().split('T')[0] : undefined
  }));

  // Combina todas as rotas
  const allRoutes: Route[] = [
    ...mainRoutes,
    ...routes.map(route => ({
      url: route.startsWith('http') ? route : `${domain}${route}`,
      changefreq: 'weekly' as const,
      priority: '0.7'
    })),
    ...blogRoutes
  ];

  // Gera o XML do sitemap
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes.map(route => `  <url>
    <loc>${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>${route.lastmod ? `
    <lastmod>${route.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;
}

export function sitemapPlugin(options: SitemapOptions = {}): Plugin {
  const {
    domain = 'https://ativo-mais.com.br', // URL base do site
    routes = []
  } = options;

  let outputDir: string = 'dist';
  let devDomain: string = 'http://localhost:3000';

  return {
    name: 'vite-plugin-sitemap',
    enforce: 'pre', // Executa antes de outros plugins para garantir que o middleware seja registrado primeiro
    configResolved(config) {
      outputDir = config.build.outDir || 'dist';
      
      // Configura o domínio de desenvolvimento baseado na porta do servidor
      const port = config.server?.port || 3000;
      const host = config.server?.host || 'localhost';
      devDomain = `http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`;
    },
    configureServer(server) {
      // Middleware para servir o sitemap durante o desenvolvimento
      server.middlewares.use((req, res, next) => {
        // Remove query string e hash para comparação
        const urlPath = req.url?.split('?')[0]?.split('#')[0];
        if (urlPath === '/sitemap.xml' && req.method === 'GET') {
          console.log(`🗺️  Gerando sitemap dinâmico para desenvolvimento: ${devDomain}`);
          const sitemap = generateSitemap(devDomain, routes);
          res.setHeader('Content-Type', 'application/xml');
          res.setHeader('Cache-Control', 'no-cache');
          res.statusCode = 200;
          res.end(sitemap);
          return; // Não chama next() para interceptar a requisição
        }
        next();
      });
    },
    writeBundle: async () => {
      try {
        // Usa o diretório de saída do Vite
        const distDir = path.resolve(process.cwd(), outputDir);
        const sitemap = generateSitemap(domain, routes);

        // Garante que o diretório existe
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }
        
        const sitemapPath = path.join(distDir, 'sitemap.xml');
        fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
        
        const posts = loadPosts();
        const postsCount = posts.length;
        const routesCount = sitemap.split('<url>').length - 1;
        
        console.log(`✅ Sitemap gerado: ${sitemapPath}`);
        console.log(`   - ${routesCount} URLs incluídas`);
        console.log(`   - ${postsCount} posts do blog`);
      } catch (error) {
        console.error('❌ Erro ao gerar sitemap:', error);
      }
    }
  };
}

