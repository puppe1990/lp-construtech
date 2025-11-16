
import React from 'react';

const StatItem: React.FC<{ value: string, label: string, index: number }> = ({ value, label, index }) => (
    <div 
        className="text-center p-6 group hover:scale-105 transition-all duration-300"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
        <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            {value}
        </p>
        <p className="text-sm md:text-base text-slate-600 font-medium">{label}</p>
        <div className="mt-3 mx-auto w-12 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
);


export const Stats: React.FC = () => {
  const stats = [
    { value: 'R$ 60k', label: 'Economia média por obra' },
    { value: '3-6', label: 'Meses de payback' },
    { value: '-11pp', label: 'Redução de retrabalho' },
    { value: 'R$ 20k+', label: 'Multas evitadas' },
  ];
  return (
    <section className="relative -mt-16 pb-20 z-20">
        <div className="container mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 border border-slate-100">
                {stats.map((stat, index) => (
                    <StatItem key={stat.label} value={stat.value} label={stat.label} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};
