
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Segments } from './components/Segments';
import { Pricing } from './components/Pricing';
import { Blog, BlogPost, blogPosts } from './components/Blog';
import { BlogPost as BlogPostComponent } from './components/BlogPost';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Atualiza a URL sem recarregar a página
    window.history.pushState({}, '', `#blog/${post.slug}`);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.history.pushState({}, '', '#blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Verifica se há um post na URL ao carregar
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#blog/')) {
      const slug = hash.replace('#blog/', '');
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, []);

  // Escuta mudanças no hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        const post = blogPosts.find(p => p.slug === slug);
        if (post) {
          setSelectedPost(post);
        }
      } else if (hash === '#blog' || hash === '') {
        setSelectedPost(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        {selectedPost ? (
          <BlogPostComponent post={selectedPost} onBack={handleBackToBlog} />
        ) : (
          <>
            <Hero />
            <Stats />
            <Features />
            <Benefits />
            <Segments />
            <Pricing />
            <Blog onReadMore={handleReadMore} />
            <CTA />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
