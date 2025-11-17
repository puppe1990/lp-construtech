
import React from 'react';

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Como reduzir perdas em canteiros de obra com rastreabilidade",
    excerpt: "Descubra como a rastreabilidade híbrida (QR/RFID/IoT) pode reduzir perdas em até R$ 60.000 por obra e aumentar a eficiência operacional.",
    date: "15 Jan 2024",
    author: "Equipe Ativo+",
    category: "Gestão",
    readTime: "5 min",
    slug: "reduzir-perdas-rastreabilidade"
  },
  {
    title: "Compliance NR-18: Automatize e evite multas de até R$ 44.007",
    excerpt: "Entenda como automatizar o compliance NR-18 e NR-6 com dossiês digitais, alertas automáticos e trilha de auditoria completa.",
    date: "10 Jan 2024",
    author: "Equipe Ativo+",
    category: "Compliance",
    readTime: "7 min",
    slug: "compliance-nr18-automatizacao"
  },
  {
    title: "ROI em construção: Como calcular o retorno de investimento em tecnologia",
    excerpt: "Aprenda a calcular o ROI de soluções tecnológicas para construção civil e descubra como o Ativo+ oferece payback de 3-6 meses.",
    date: "5 Jan 2024",
    author: "Equipe Ativo+",
    category: "Financeiro",
    readTime: "6 min",
    slug: "roi-construcao-tecnologia"
  },
  {
    title: "Offline-First: Por que sua solução precisa funcionar sem internet",
    excerpt: "Entenda a importância de soluções offline-first em canteiros de obra e como isso impacta a produtividade e confiabilidade dos dados.",
    date: "28 Dez 2023",
    author: "Equipe Ativo+",
    category: "Tecnologia",
    readTime: "4 min",
    slug: "offline-first-canteiros"
  },
  {
    title: "Integração BIM e ERP: Conectando o projeto à execução",
    excerpt: "Saiba como integrar modelos BIM com sistemas ERP para melhorar a comunicação entre projeto e obra, reduzindo retrabalho.",
    date: "20 Dez 2023",
    author: "Equipe Ativo+",
    category: "Integração",
    readTime: "8 min",
    slug: "integracao-bim-erp"
  },
  {
    title: "Dashboards financeiros: Transformando dados em decisões estratégicas",
    excerpt: "Descubra como dashboards financeiros podem ajudar construtoras a tomar decisões baseadas em dados e otimizar a rentabilidade.",
    date: "15 Dez 2023",
    author: "Equipe Ativo+",
    category: "Financeiro",
    readTime: "5 min",
    slug: "dashboards-financeiros-decisoes"
  }
];

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

interface BlogProps {
  onReadMore?: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onReadMore }) => {
  const handleReadMore = (post: BlogPost) => {
    if (onReadMore) {
      onReadMore(post);
    } else {
      // Fallback: scroll para o topo e mostra o artigo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} onReadMore={handleReadMore} />
          ))}
        </div>
        
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

export { blogPosts };

