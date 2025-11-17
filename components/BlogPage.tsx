
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BlogPost, getBlogPosts } from './Blog';
import { BlogPost as BlogPostComponent } from './BlogPost';
import { loadPost } from '../utils/loadPosts';

interface BlogPageProps {
  onBackToHome: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome }) => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Carrega posts dinamicamente
  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const loadedPosts = await getBlogPosts();
        setPosts(loadedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', `#blog/${post.slug}`);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.history.pushState({}, '', '#blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Verifica se há um post na URL ao carregar
  React.useEffect(() => {
    async function loadPostFromUrl() {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        try {
          const post = await loadPost(slug);
          if (post) {
            setSelectedPost(post);
          }
        } catch (error) {
          console.error('Erro ao carregar post:', error);
        }
      }
    }
    if (posts.length > 0) {
      loadPostFromUrl();
    }
  }, [posts]);

  // Escuta mudanças no hash
  React.useEffect(() => {
    const handleHashChange = async () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        try {
          const post = await loadPost(slug);
          if (post) {
            setSelectedPost(post);
          }
        } catch (error) {
          console.error('Erro ao carregar post:', error);
        }
      } else if (hash === '#blog' || hash === '') {
        setSelectedPost(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categoryColors: Record<string, string> = {
    'Gestão': 'bg-[#12B886]',
    'Compliance': 'bg-[#FF6B2C]',
    'Financeiro': 'bg-[#0B1F36]',
    'Tecnologia': 'bg-[#8FB4D9]',
    'Integração': 'bg-[#FFC857]'
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <main className="py-24">
          <div className="container mx-auto px-6 text-center">
            <p className="text-[#5F6B7A]">Carregando artigos...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Agrupar posts por categoria
  const postsByCategory = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);

  if (selectedPost) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <BlogPostComponent post={selectedPost} onBack={handleBackToBlog} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        {/* Hero Section do Blog */}
        <section className="bg-[#0B1F36] py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-[#FF6B2C]/20 rounded-full border border-[#FF6B2C]/30">
                <span className="text-sm font-semibold text-[#FF6B2C]">Blog Ativo+</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                Conteúdo <span className="text-[#FF6B2C]">Estratégico</span>
              </h1>
              <p className="text-xl text-[#8FB4D9] leading-relaxed">
                Artigos, cases e insights sobre gestão de canteiros, compliance e tecnologia na construção civil
              </p>
            </div>
          </div>
        </section>

        {/* Lista de Artigos por Categoria */}
        <section className="py-16 bg-[#F5F2EB]">
          <div className="container mx-auto px-6">
            {Object.entries(postsByCategory).map(([category, posts]) => (
              <div key={category} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${categoryColors[category] || 'bg-[#5F6B7A]'} w-1 h-12 rounded-full`}></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F36]">{category}</h2>
                  <span className="text-[#5F6B7A]">({posts.length} {posts.length === 1 ? 'artigo' : 'artigos'})</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article 
                      key={post.slug}
                      className="group bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#F5F2EB] hover:border-[#FF6B2C] hover:-translate-y-2 cursor-pointer"
                      style={{ padding: '24px', borderRadius: '12px' }}
                      onClick={() => handleReadMore(post)}
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
                      
                      <p className="text-[#5F6B7A] leading-relaxed mb-4 line-clamp-3">
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
                        <div className="text-[#FF6B2C] font-semibold flex items-center gap-2">
                          Ler mais
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F36] mb-4">
              Quer receber nossos artigos?
            </h2>
            <p className="text-xl text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              Cadastre-se para receber nossos conteúdos exclusivos sobre gestão de canteiros e tecnologia na construção civil.
            </p>
            <a 
              href="#contact"
              onClick={onBackToHome}
              className="btn-primary font-bold py-4 px-10 rounded-xl inline-block transform hover:scale-105 transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

