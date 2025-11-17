
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F5F2EB] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8FB4D9] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF6B2C] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#12B886] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#0B1F36]/10">
            <span className="text-sm font-semibold text-[#0B1F36]">✨ Payback de 3-6 meses comprovado</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#0B1F36] leading-tight mb-6">
            Torre de Controle para{' '}
            <span className="text-[#FF6B2C]">Ativos de Canteiro</span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-[#5F6B7A] leading-relaxed font-medium">
            Rastreabilidade híbrida (QR/RFID/IoT), dashboards financeiros de ROI e automação de compliance NR-18/NR-6.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#pricing" 
              className="btn-primary font-bold py-4 px-10 rounded-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Começar Agora
            </a>
            <a 
              href="#features" 
              className="btn-secondary font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Ver Funcionalidades
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-[#5F6B7A]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#12B886]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">ROI Comprovado</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#12B886]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Compliance Automatizado</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#12B886]" fill="currentColor" viewBox="0 0 20 20">
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
