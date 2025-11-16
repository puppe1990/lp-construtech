
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-500 hover:text-teal-600 transition-colors">{children}</a>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold text-teal-600 mb-2">Ativo+</h3>
                        <p className="text-gray-600 max-w-xs">Torre de controle para ativos de canteiro. Transformando a gestão da construção civil.</p>
                    </div>

                    {/* Column 2: Produto */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Produto</h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="#features">Funcionalidades</FooterLink></li>
                            <li><FooterLink href="#benefits">Benefícios</FooterLink></li>
                            <li><FooterLink href="#pricing">Preços</FooterLink></li>
                            <li><FooterLink href="#features">Integrações</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Empresa */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="#">Sobre</FooterLink></li>
                            <li><FooterLink href="#">Blog</FooterLink></li>
                            <li><FooterLink href="#">Carreiras</FooterLink></li>
                            <li><FooterLink href="#contact">Contato</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="#">Privacidade</FooterLink></li>
                            <li><FooterLink href="#">Termos</FooterLink></li>
                            <li><FooterLink href="#">LGPD</FooterLink></li>
                            <li><FooterLink href="#">Compliance</FooterLink></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
                    <p>&copy; 2024 Ativo+. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
