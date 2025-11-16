
import React from 'react';
import { CheckCircleIcon } from './Icons';

const segments = [
    {
        title: "PME",
        employees: "Até 50 funcionários",
        color: "from-teal-500 to-teal-600",
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
        color: "from-cyan-500 to-cyan-600",
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
        color: "from-teal-600 to-cyan-600",
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
        <section id="segments" className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-teal-100 rounded-full">
                        <span className="text-sm font-semibold text-teal-700">Segmentos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Para todos os <span className="gradient-text">tamanhos</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-slate-600">Soluções adaptadas para cada segmento do mercado</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {segments.map((segment, index) => (
                        <div 
                            key={segment.title} 
                            className="group bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-teal-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <span className="text-2xl font-bold text-white">{index + 1}</span>
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">{segment.title}</h3>
                            <p className="text-slate-500 mb-6 font-medium">{segment.employees}</p>
                            <ul className="space-y-4 flex-grow">
                                {segment.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <div className="bg-teal-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="h-5 w-5 text-teal-600" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature}</span>
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
