
import React from 'react';
import { CheckCircleIcon } from './Icons';

const segments = [
    {
        title: "PME",
        employees: "Até 50 funcionários",
        color: "#12B886",
        features: [
            "RDO digital offline",
            "Controle de EPIs",
            "Compliance NR-18",
            "Relatórios básicos"
        ]
    },
    {
        title: "Médio Porte",
        employees: "50-250 funcionários",
        color: "#FF6B2C",
        features: [
            "Controle de ativos completo",
            "Integração ERP",
            "Dashboards financeiros",
            "Múltiplas obras"
        ]
    },
    {
        title: "Grande Porte",
        employees: "250+ funcionários",
        color: "#0B1F36",
        features: [
            "BIM integrado",
            "IoT e sensores",
            "ESG completo",
            "Multiestado"
        ]
    }
];

export const Segments: React.FC = () => {
    return (
        <section id="segments" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-[#F5F2EB] rounded-full">
                        <span className="text-sm font-semibold text-[#0B1F36]">Segmentos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F36] mb-4">
                        Para todos os <span className="text-[#FF6B2C]">tamanhos</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-[#5F6B7A]">Soluções adaptadas para cada segmento do mercado</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {segments.map((segment, index) => (
                        <div 
                            key={segment.title} 
                            className="group bg-white border-2 border-[#F5F2EB] p-6 shadow-lg hover:shadow-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6B2C]"
                            style={{ padding: '24px', borderRadius: '12px' }}
                        >
                            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: segment.color }}>
                                <span className="text-2xl font-bold text-white">{index + 1}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-[#0B1F36] mb-2">{segment.title}</h3>
                            <p className="text-[#5F6B7A] mb-6 font-medium">{segment.employees}</p>
                            <ul className="space-y-4 flex-grow">
                                {segment.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <div className="bg-[#F5F2EB] rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="h-5 w-5 text-[#12B886]" />
                                        </div>
                                        <span className="text-[#0B1F36] font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
