
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
  module?: any; // Componente MDX compilado
}

interface BlogPostProps {
  post: BlogPostData;
  onBack: () => void;
}

// Componentes customizados para MDX
const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-[#0B1F36] mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-[#0B1F36] mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-[#0B1F36] mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 text-lg leading-relaxed text-[#5F6B7A]" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  code: (props: any) => (
    <code className="bg-[#0B1F36] text-white p-1 rounded" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-[#0B1F36] text-white p-4 rounded-xl overflow-x-auto my-4 font-mono text-sm" {...props} />
  ),
  strong: (props: any) => <strong className="text-[#0B1F36] font-bold" {...props} />,
};

export const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const categoryColors: Record<string, string> = {
    'Gestão': 'bg-[#12B886]',
    'Compliance': 'bg-[#FF6B2C]',
    'Financeiro': 'bg-[#0B1F36]',
    'Tecnologia': 'bg-[#8FB4D9]',
    'Integração': 'bg-[#FFC857]'
  };

  // Renderiza o componente MDX se disponível
  // O módulo pode estar em post.module ou post.module.default
  const MDXContent = post.module?.default || post.module;

  return (
    <article className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header do artigo */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#5F6B7A] hover:text-[#0B1F36] transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o blog
          </button>

          <div className="flex items-center gap-3 mb-6">
            <span className={`${categoryColors[post.category] || 'bg-[#5F6B7A]'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {post.category}
            </span>
            <span className="text-sm text-[#5F6B7A]">{post.readTime}</span>
            <span className="text-sm text-[#5F6B7A]">•</span>
            <span className="text-sm text-[#5F6B7A]">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1F36] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pb-6 border-b border-[#F5F2EB]">
            <div className="w-10 h-10 rounded-full bg-[#0B1F36] flex items-center justify-center">
              <span className="text-white text-sm font-bold">A+</span>
            </div>
            <div>
              <p className="font-semibold text-[#0B1F36]">{post.author}</p>
              <p className="text-sm text-[#5F6B7A]">{post.date}</p>
            </div>
          </div>
        </div>

        {/* Conteúdo do artigo */}
        <div className="text-[#5F6B7A] leading-relaxed">
          {MDXContent ? (
            <MDXProvider components={components}>
              <MDXContent />
            </MDXProvider>
          ) : (
            <p className="text-center py-12 text-[#5F6B7A]">
              Conteúdo do artigo não disponível.
            </p>
          )}
        </div>

        {/* CTA no final */}
        <div className="mt-12 pt-8 border-t border-[#F5F2EB] bg-[#F5F2EB] p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-[#0B1F36] mb-4">Quer saber mais?</h3>
          <p className="text-[#5F6B7A] mb-6">
            Entre em contato conosco e solicite uma demonstração gratuita do Ativo+.
          </p>
          <a 
            href="#contact"
            onClick={onBack}
            className="btn-primary font-bold py-3 px-8 rounded-xl inline-block transform hover:scale-105 transition-all duration-300"
          >
            Solicitar Demo
          </a>
        </div>
      </div>
    </article>
  );
};

