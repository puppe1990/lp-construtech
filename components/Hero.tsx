
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-teal-100/80 backdrop-blur-sm rounded-full border border-teal-200">
            <span className="text-sm font-semibold text-teal-700">✨ Payback de 3-6 meses comprovado</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-tight mb-6">
            Torre de Controle para{' '}
            <span className="gradient-text">Ativos de Canteiro</span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
            Rastreabilidade híbrida (QR/RFID/IoT), dashboards financeiros de ROI e automação de compliance NR-18/NR-6.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#pricing" 
              className="group relative bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10">Começar Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#features" 
              className="bg-white hover:bg-slate-50 text-teal-600 font-bold py-4 px-10 rounded-2xl border-2 border-teal-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Ver Funcionalidades
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">ROI Comprovado</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Compliance Automatizado</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Offline-First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
