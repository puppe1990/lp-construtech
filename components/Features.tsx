
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

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="bg-teal-500 rounded-full p-3 mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Funcionalidades Completas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Tudo que você precisa para controlar seu canteiro de obras de forma inteligente</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};
