
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Pronto para transformar seu canteiro?
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-teal-50 leading-relaxed">
          Agende uma demonstração gratuita e veja como o Ativo+ pode reduzir perdas, evitar multas e aumentar sua rentabilidade.
        </p>
        <div className="mt-10">
          <a 
            href="#contact" 
            className="inline-block bg-white hover:bg-slate-50 text-teal-600 font-bold py-4 px-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Agendar Demo Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};
