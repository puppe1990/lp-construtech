
import React, { useState, useEffect } from 'react';
import { loadPosts, BlogPost } from '../utils/loadPosts';

// Cache para os posts carregados
let cachedPosts: BlogPost[] | null = null;

const BlogCard: React.FC<{ post: BlogPost; onReadMore: (post: BlogPost) => void }> = ({ post, onReadMore }) => {
  const categoryColors: Record<string, string> = {
    'Gestão': 'bg-[#12B886]',
    'Compliance': 'bg-[#FF6B2C]',
    'Financeiro': 'bg-[#0B1F36]',
    'Tecnologia': 'bg-[#8FB4D9]',
    'Integração': 'bg-[#FFC857]'
  };

  return (
    <article className="group bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#F5F2EB] hover:border-[#FF6B2C] hover:-translate-y-2"
      style={{ padding: '24px', borderRadius: '12px' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className={`${categoryColors[post.category] || 'bg-[#5F6B7A]'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {post.category}
        </span>
        <span className="text-sm text-[#5F6B7A]">{post.readTime}</span>
      </div>
      
      <h3 className="text-2xl font-bold text-[#0B1F36] mb-3 group-hover:text-[#FF6B2C] transition-colors">
        {post.title}
      </h3>
      
      <p className="text-[#5F6B7A] leading-relaxed mb-4">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-[#F5F2EB]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0B1F36] flex items-center justify-center">
            <span className="text-white text-xs font-bold">A+</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0B1F36]">{post.author}</p>
            <p className="text-xs text-[#5F6B7A]">{post.date}</p>
          </div>
        </div>
        <button
          onClick={() => onReadMore(post)}
          className="text-[#FF6B2C] font-semibold hover:text-[#0B1F36] transition-colors flex items-center gap-2 cursor-pointer"
        >
          Ler mais
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        if (cachedPosts && cachedPosts.length > 0) {
          console.log('[Blog] Usando cache com', cachedPosts.length, 'posts');
          setPosts(cachedPosts);
          setLoading(false);
        } else {
          console.log('[Blog] Carregando posts...');
          const loadedPosts = await loadPosts();
          console.log('[Blog] Posts carregados:', loadedPosts.length, loadedPosts);
          cachedPosts = loadedPosts;
          setPosts(loadedPosts);
          setLoading(false);
        }
      } catch (error) {
        console.error('[Blog] Erro ao carregar posts:', error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleReadMore = (post: BlogPost) => {
    // Redireciona para a página do blog com o artigo
    window.location.hash = `#blog/${post.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mostra apenas os 3 primeiros artigos na landing page
  const featuredPosts = posts.slice(0, 3);
  
  console.log('[Blog] Total de posts:', posts.length);
  console.log('[Blog] Featured posts:', featuredPosts.length);

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-[#5F6B7A]">Carregando artigos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#F5F2EB] rounded-full">
            <span className="text-sm font-semibold text-[#0B1F36]">Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F36] mb-4">
            Conteúdo <span className="text-[#FF6B2C]">Estratégico</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-[#5F6B7A]">
            Artigos, cases e insights sobre gestão de canteiros, compliance e tecnologia na construção civil
          </p>
        </div>
        
        {featuredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.slug || index} post={post} onReadMore={handleReadMore} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#5F6B7A] text-lg">
              Nenhum artigo encontrado. Verifique o console para mais detalhes.
            </p>
          </div>
        )}
        
        <div className="text-center">
          <a 
            href="#blog"
            className="btn-secondary font-bold py-4 px-10 rounded-xl inline-block transform hover:scale-105 transition-all duration-300"
          >
            Ver Todos os Artigos
          </a>
        </div>
      </div>
    </section>
  );
};

// Exporta função para obter posts (usado em outros componentes)
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }
  const posts = await loadPosts();
  cachedPosts = posts;
  return posts;
}

