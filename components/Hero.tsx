
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Torre de Controle para <span className="text-teal-500">Ativos de Canteiro</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          Rastreabilidade híbrida (QR/RFID/IoT), dashboards financeiros de ROI e automação de compliance NR-18/NR-6. Payback de 3-6 meses.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#pricing" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            Começar Agora
          </a>
          <a href="#features" className="bg-white hover:bg-gray-100 text-teal-500 font-bold py-3 px-8 rounded-lg border border-teal-500 shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            Ver Funcionalidades
          </a>
        </div>
      </div>
    </section>
  );
};
