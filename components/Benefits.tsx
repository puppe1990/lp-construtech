
import React from 'react';

const benefits = [
  { title: "Redução de Perdas", description: "Até R$ 60.000 economizados por obra com controle inteligente de ativos e redução de desperdício." },
  { title: "Menos Retrabalho", description: "Redução de 11 pontos percentuais no retrabalho com RDO digital e comunicação eficiente." },
  { title: "Evite Multas", description: "Proteção contra multas NR-18 de até R$ 44.007 com compliance automatizado e dossiês sempre atualizados." },
  { title: "ROI Comprovado", description: "Payback médio de 3-6 meses com economia imediata em perdas, retrabalho e multas evitadas." }
];

const marketStats = [
    { value: "30-40%", label: "Desperdício Atual", sublabel: "Redução para 5% possível" },
    { value: "R$ 2,4B", label: "Perdas Anuais", sublabel: "Evitáveis no Brasil" },
    { value: "58,5k", label: "Construtoras", sublabel: "Em risco de multas" },
    { value: "R$ 1,17B", label: "Multas Potenciais", sublabel: "Anuais evitáveis" },
];


export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Por que escolher o Ativo+?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Resultados comprovados que transformam a gestão do seu canteiro</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map(stat => (
                <div key={stat.label} className="bg-teal-500 text-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <p className="text-4xl font-bold">{stat.value}</p>
                    <p className="text-lg font-semibold mt-2">{stat.label}</p>
                    <p className="text-teal-100">{stat.sublabel}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
