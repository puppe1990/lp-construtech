
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Segments } from './components/Segments';
import { Pricing } from './components/Pricing';
import { Blog } from './components/Blog';
import { BlogPage } from './components/BlogPage';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');

  const handleBackToHome = () => {
    setCurrentRoute('home');
    window.history.pushState({}, '', '#');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detecta a rota atual baseada no hash
  useEffect(() => {
    const detectRoute = () => {
      const hash = window.location.hash;
      if (hash === '#blog' || hash.startsWith('#blog/')) {
        setCurrentRoute('blog');
      } else {
        setCurrentRoute('home');
      }
    };

    detectRoute();

    const handleHashChange = () => {
      detectRoute();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Renderiza a página baseada na rota
  if (currentRoute === 'blog') {
    return <BlogPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Benefits />
        <Segments />
        <Pricing />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
