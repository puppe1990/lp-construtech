
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Segments } from './components/Segments';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Benefits />
        <Segments />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
