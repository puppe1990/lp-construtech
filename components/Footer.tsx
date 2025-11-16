
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-slate-500 hover:text-teal-600 transition-colors duration-300 font-medium">{children}</a>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">Ativo+</h3>
                        <p className="text-slate-300 max-w-xs leading-relaxed">Torre de controle para ativos de canteiro. Transformando a gestão da construção civil.</p>
                    </div>

                    {/* Column 2: Produto */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">Produto</h4>
                        <ul className="space-y-3">
                            <li><FooterLink href="#features">Funcionalidades</FooterLink></li>
                            <li><FooterLink href="#benefits">Benefícios</FooterLink></li>
                            <li><FooterLink href="#pricing">Preços</FooterLink></li>
                            <li><FooterLink href="#features">Integrações</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Empresa */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">Empresa</h4>
                        <ul className="space-y-3">
                            <li><FooterLink href="#">Sobre</FooterLink></li>
                            <li><FooterLink href="#">Blog</FooterLink></li>
                            <li><FooterLink href="#">Carreiras</FooterLink></li>
                            <li><FooterLink href="#contact">Contato</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
                        <ul className="space-y-3">
                            <li><FooterLink href="#">Privacidade</FooterLink></li>
                            <li><FooterLink href="#">Termos</FooterLink></li>
                            <li><FooterLink href="#">LGPD</FooterLink></li>
                            <li><FooterLink href="#">Compliance</FooterLink></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-700 text-center">
                    <p className="text-slate-400">&copy; 2024 Ativo+. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
