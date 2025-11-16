
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="bg-teal-600">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Pronto para transformar seu canteiro?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-teal-100">
          Agende uma demonstração gratuita e veja como o Ativo+ pode reduzir perdas, evitar multas e aumentar sua rentabilidade.
        </p>
        <div className="mt-8">
          <a href="#contact" className="bg-white hover:bg-gray-100 text-teal-600 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            Agendar Demo Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};
