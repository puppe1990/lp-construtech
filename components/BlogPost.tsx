
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
  h1: (props: any) => <h1 className="text-3xl md:text-4xl font-bold text-[#0B1F36] mt-12 mb-6 leading-tight tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F36] mt-12 mb-6 leading-tight tracking-tight pt-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-bold text-[#0B1F36] mt-10 mb-4 leading-tight tracking-tight pt-2" {...props} />,
  h4: (props: any) => <h4 className="text-lg md:text-xl font-semibold text-[#0B1F36] mt-8 mb-3 leading-tight" {...props} />,
  p: (props: any) => <p className="mb-6 text-base md:text-lg leading-relaxed text-[#374151] font-normal" style={{ lineHeight: '1.75' }} {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside mb-6 space-y-2 ml-6 text-base md:text-lg leading-relaxed text-[#374151]" style={{ lineHeight: '1.75' }} {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside mb-6 space-y-2 ml-6 text-base md:text-lg leading-relaxed text-[#374151]" style={{ lineHeight: '1.75' }} {...props} />,
  li: (props: any) => <li className="mb-2 pl-2" {...props} />,
  code: (props: any) => (
    <code className="bg-[#F3F4F6] text-[#0B1F36] px-2 py-1 rounded text-sm md:text-base font-mono border border-[#E5E7EB]" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-[#1F2937] text-[#F9FAFB] p-4 md:p-6 rounded-xl overflow-x-auto my-6 font-mono text-sm leading-6 border border-[#374151]" {...props} />
  ),
  strong: (props: any) => <strong className="text-[#0B1F36] font-bold" {...props} />,
  em: (props: any) => <em className="italic text-[#374151]" {...props} />,
  a: (props: any) => (
    <a className="text-[#FF6B2C] hover:text-[#0B1F36] underline underline-offset-2 transition-colors" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[#FF6B2C] pl-6 py-4 my-8 italic text-[#374151] text-base md:text-lg leading-relaxed bg-[#F9FAFB] rounded-r-lg" style={{ lineHeight: '1.75' }} {...props} />
  ),
  hr: (props: any) => <hr className="my-10 border-t-2 border-[#E5E7EB]" {...props} />,
  img: (props: any) => (
    <img className="w-full rounded-xl my-8 shadow-lg" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border-collapse border border-[#E5E7EB] rounded-lg" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-left font-semibold text-[#0B1F36]" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-[#E5E7EB] px-4 py-3 text-[#374151]" {...props} />
  ),
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
    <article className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header do artigo */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#5F6B7A] hover:text-[#0B1F36] transition-colors mb-8 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o blog
          </button>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className={`${categoryColors[post.category] || 'bg-[#5F6B7A]'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {post.category}
            </span>
            <span className="text-sm text-[#5F6B7A]">{post.readTime}</span>
            <span className="text-sm text-[#5F6B7A]">•</span>
            <span className="text-sm text-[#5F6B7A]">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1F36] mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pb-8 border-b-2 border-[#E5E7EB]">
            <div className="w-10 h-10 rounded-full bg-[#0B1F36] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">A+</span>
            </div>
            <div>
              <p className="font-semibold text-[#0B1F36]">{post.author}</p>
              <p className="text-sm text-[#5F6B7A]">{post.date}</p>
            </div>
          </div>
        </div>

        {/* Conteúdo do artigo */}
        <div className="prose prose-lg max-w-none">
          {MDXContent ? (
            <MDXProvider components={components}>
              <div 
                className="blog-content mx-auto" 
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  color: '#374151',
                  lineHeight: '1.75',
                  fontSize: '18px',
                  maxWidth: '680px',
                  padding: '0 1rem'
                }}
              >
                <MDXContent />
              </div>
            </MDXProvider>
          ) : (
            <p className="text-center py-12 text-[#5F6B7A]">
              Conteúdo do artigo não disponível.
            </p>
          )}
        </div>

        {/* CTA no final */}
        <div className="mt-16 pt-8 border-t-2 border-[#E5E7EB] bg-[#F9FAFB] p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-[#0B1F36] mb-4">Quer saber mais?</h3>
          <p className="text-[#374151] mb-6 text-lg leading-7">
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

