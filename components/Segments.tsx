
import React from 'react';
import { CheckCircleIcon } from './Icons';

const segments = [
    {
        title: "PME",
        employees: "Até 50 funcionários",
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
        <section id="segments" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Para todos os tamanhos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Soluções adaptadas para cada segmento do mercado</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {segments.map((segment) => (
                        <div key={segment.title} className="border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col">
                            <h3 className="text-2xl font-bold text-teal-600">{segment.title}</h3>
                            <p className="text-gray-500 mb-6">{segment.employees}</p>
                            <ul className="space-y-4 flex-grow">
                                {segment.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
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
