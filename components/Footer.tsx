
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-[#8FB4D9] hover:text-[#FF6B2C] transition-colors duration-300 font-medium">{children}</a>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0B1F36] text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-3xl font-bold text-white mb-2">Ativo<span className="text-[#FF6B2C]">+</span></h3>
                        <p className="text-[#8FB4D9] max-w-xs leading-relaxed">Torre de controle para ativos de canteiro. Transformando a gestão da construção civil.</p>
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

                <div className="pt-8 border-t border-[#5F6B7A] text-center">
                    <p className="text-[#8FB4D9]">&copy; 2024 Ativo+. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
