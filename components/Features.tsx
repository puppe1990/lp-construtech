
import React from 'react';
import { QrCodeIcon, ChartBarIcon, ShieldCheckIcon, WifiOffIcon, PuzzlePieceIcon, MapPinIcon } from './Icons';

const features = [
  {
    icon: <QrCodeIcon className="h-8 w-8 text-white" />,
    title: "Rastreabilidade Híbrida",
    description: "QR Code, RFID e IoT integrados para rastreamento completo de equipamentos, fôrmas, EPIs e estruturas temporárias."
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-white" />,
    title: "Dashboards Financeiros",
    description: "ROI por ativo, desperdício evitado, uso de EPIs e relatórios ESG completos para tomada de decisão estratégica."
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
    title: "Compliance Automatizado",
    description: "Cockpit NR-18/NR-6/LGPD com dossiês automáticos, trilha de auditoria e alertas de vencimento."
  },
  {
    icon: <WifiOffIcon className="h-8 w-8 text-white" />,
    title: "Modo Offline-First",
    description: "Funciona mesmo sem internet. Sincronização automática quando a conexão é restabelecida."
  },
  {
    icon: <PuzzlePieceIcon className="h-8 w-8 text-white" />,
    title: "Integrações Nativas",
    description: "Conectores para Sienge, TOTVS, Protheus, ingestão BIM (IFC) e hub MQTT para sensores IoT."
  },
  {
    icon: <MapPinIcon className="h-8 w-8 text-white" />,
    title: "Mapas Inteligentes",
    description: "Visualização geográfica de ativos, alertas de ociosidade e manutenção preditiva baseada em localização."
  }
];

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, index: number }> = ({ icon, title, description, index }) => (
  <div 
    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-teal-200 hover:-translate-y-2"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex flex-col">
      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-teal-100 rounded-full">
            <span className="text-sm font-semibold text-teal-700">Funcionalidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Funcionalidades <span className="gradient-text">Completas</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">Tudo que você precisa para controlar seu canteiro de obras de forma inteligente</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
