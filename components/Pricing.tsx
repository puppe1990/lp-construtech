
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
    const cardClasses = `border rounded-lg p-8 flex flex-col h-full shadow-lg ${popular ? 'border-teal-500 border-2 -my-4' : 'border-gray-200'}`;
    const buttonClasses = `w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 mt-auto ${popular ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-white text-teal-500 border border-teal-500 hover:bg-teal-50'}`;
    
    return (
        <div className={cardClasses}>
            {popular && <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full self-center mb-4 -mt-12">Mais Popular</span>}
            <h3 className="text-2xl font-bold text-gray-800 text-center">{plan}</h3>
            <p className="text-center text-gray-500 mb-4">{description}</p>
            <p className="text-4xl font-extrabold text-gray-900 text-center my-4">{price}<span className="text-base font-medium text-gray-500"> /mês</span></p>
            <ul className="space-y-4 mb-8 flex-grow">
                {features.map(feature => (
                    <li key={feature} className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <button onClick={ctaAction} className={buttonClasses}>{cta}</button>
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
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Planos que crescem com você</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Escolha o plano ideal para o seu negócio</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
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
                <div className="text-center mt-12">
                  <p className="text-lg text-gray-600">Também oferecemos:</p>
                  <p className="font-semibold text-gray-800 mt-2">Hardware as a Service • Serviços Profissionais • Contratos Personalizados</p>
                </div>
            </div>
        </section>
    );
};
