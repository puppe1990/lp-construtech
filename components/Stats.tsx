
import React from 'react';

const StatItem: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="text-center p-4">
        <p className="text-3xl md:text-4xl font-bold text-teal-500">{value}</p>
        <p className="text-sm md:text-base text-gray-600 mt-1">{label}</p>
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
    <section className="bg-gray-50 pb-20">
        <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
                {stats.map(stat => (
                    <StatItem key={stat.label} value={stat.value} label={stat.label} />
                ))}
            </div>
        </div>
    </section>
  );
};
