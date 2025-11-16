
import React from 'react';

const benefits = [
  { 
    title: "Redução de Perdas", 
    description: "Até R$ 60.000 economizados por obra com controle inteligente de ativos e redução de desperdício.",
    icon: "💰"
  },
  { 
    title: "Menos Retrabalho", 
    description: "Redução de 11 pontos percentuais no retrabalho com RDO digital e comunicação eficiente.",
    icon: "⚡"
  },
  { 
    title: "Evite Multas", 
    description: "Proteção contra multas NR-18 de até R$ 44.007 com compliance automatizado e dossiês sempre atualizados.",
    icon: "🛡️"
  },
  { 
    title: "ROI Comprovado", 
    description: "Payback médio de 3-6 meses com economia imediata em perdas, retrabalho e multas evitadas.",
    icon: "📈"
  }
];

const marketStats = [
    { value: "30-40%", label: "Desperdício Atual", sublabel: "Redução para 5% possível" },
    { value: "R$ 2,4B", label: "Perdas Anuais", sublabel: "Evitáveis no Brasil" },
    { value: "58,5k", label: "Construtoras", sublabel: "Em risco de multas" },
    { value: "R$ 1,17B", label: "Multas Potenciais", sublabel: "Anuais evitáveis" },
];


export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-100 rounded-full">
            <span className="text-sm font-semibold text-cyan-700">Benefícios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Por que escolher o <span className="gradient-text">Ativo+</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">Resultados comprovados que transformam a gestão do seu canteiro</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-teal-500 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-8 rounded-2xl shadow-2xl text-center transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <p className="text-5xl font-extrabold mb-2">{stat.value}</p>
                    <p className="text-xl font-bold mt-3 mb-1">{stat.label}</p>
                    <p className="text-teal-100 text-sm">{stat.sublabel}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
