
import React from 'react';
import { CheckCircleIcon } from './Icons';

const PricingCard: React.FC<{
    plan: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    ctaAction: () => void;
    popular?: boolean;
}> = ({ plan, price, description, features, cta, ctaAction, popular }) => {
    return (
        <div className={`relative bg-white p-6 flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${popular ? 'border-[#FF6B2C] scale-105 -my-4 z-10' : 'border-[#F5F2EB] hover:border-[#0B1F36]'} hover:-translate-y-2`}
            style={{ padding: '24px', borderRadius: '12px' }}
        >
            {popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B2C] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                        Mais Popular
                    </span>
                </div>
            )}
            <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-6 shadow-lg ${popular ? 'bg-[#0B1F36]' : 'bg-[#5F6B7A]'}`}>
                <span className="text-3xl font-bold text-white">{plan.charAt(0)}</span>
            </div>
            <h3 className="text-3xl font-bold text-[#0B1F36] mb-2">{plan}</h3>
            <p className="text-[#5F6B7A] mb-6 font-medium">{description}</p>
            <div className="mb-8">
                <p className="text-5xl font-extrabold text-[#0B1F36] mb-1">
                    {price}
                    <span className="text-lg font-medium text-[#5F6B7A]">/mês</span>
                </p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
                {features.map(feature => (
                    <li key={feature} className="flex items-start">
                        <div className={`rounded-full p-1 mr-3 flex-shrink-0 mt-0.5 ${popular ? 'bg-[#F5F2EB]' : 'bg-[#F5F2EB]'}`}>
                            <CheckCircleIcon className={`h-5 w-5 ${popular ? 'text-[#12B886]' : 'text-[#5F6B7A]'}`} />
                        </div>
                        <span className="text-[#0B1F36] font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
            <button 
                onClick={ctaAction} 
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 mt-auto ${
                    popular 
                        ? 'btn-primary transform hover:scale-105' 
                        : 'btn-secondary hover:scale-105'
                }`}
            >
                {cta}
            </button>
        </div>
    );
};


export const Pricing: React.FC = () => {
    
    const handleCtaClick = (plan: string) => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            // Optionally, pre-fill the form
            const select = document.getElementById('plano-interesse') as HTMLSelectElement;
            if(select) {
              select.value = plan;
            }
        }
    };

    return (
        <section id="pricing" className="py-24 bg-[#F5F2EB]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full">
                        <span className="text-sm font-semibold text-[#0B1F36]">Preços</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F36] mb-4">
                        Planos que <span className="text-[#FF6B2C]">crescem</span> com você
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-[#5F6B7A]">Escolha o plano ideal para o seu negócio</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto mb-12">
                    <PricingCard
                        plan="Essentials"
                        price="R$ 2k"
                        description="Para pequenas construtoras"
                        features={["RDO digital offline", "Controle de EPIs", "Compliance NR-18 básico", "Até 1 obra ativa"]}
                        cta="Solicitar Demo"
                        ctaAction={() => handleCtaClick('Essentials')}
                    />
                    <PricingCard
                        plan="Operations"
                        price="R$ 4-6k"
                        description="Para médio porte"
                        features={["Tudo do Essentials", "Controle de ativos completo", "Integração ERP", "Dashboards financeiros", "Até 5 obras simultâneas"]}
                        cta="Começar Agora"
                        ctaAction={() => handleCtaClick('Operations')}
                        popular
                    />
                    <PricingCard
                        plan="Enterprise"
                        price="R$ 10-20k"
                        description="Para grandes construtoras"
                        features={["Tudo do Operations", "BIM integrado", "IoT e sensores", "ESG completo", "Obras ilimitadas"]}
                        cta="Falar com Vendas"
                        ctaAction={() => handleCtaClick('Enterprise')}
                    />
                </div>
                <div className="text-center mt-12 bg-white p-8 border border-[#F5F2EB]" style={{ padding: '24px', borderRadius: '12px' }}>
                  <p className="text-lg text-[#5F6B7A] mb-2">Também oferecemos:</p>
                  <p className="text-xl font-bold text-[#0B1F36]">
                    Hardware as a Service • Serviços Profissionais • Contratos Personalizados
                  </p>
                </div>
            </div>
        </section>
    );
};
