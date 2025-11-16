
import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        plan: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to an API
        alert('Solicitação enviada! Em breve entraremos em contato.');
        setFormData({ name: '', email: '', phone: '', company: '', plan: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Entre em contato</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Nossa equipe está pronta para ajudar você</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Form */}
                    <div className="w-full lg:w-2/3 bg-gray-50 p-8 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Empresa</label>
                                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="plano-interesse" className="block text-gray-700 font-medium mb-2">Plano de Interesse</label>
                                <select id="plano-interesse" name="plan" value={formData.plan} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                    <option value="">Selecione um plano</option>
                                    <option value="Essentials">Essentials</option>
                                    <option value="Operations">Operations</option>
                                    <option value="Enterprise">Enterprise</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300">Enviar Solicitação</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-8">
                         <div className="flex items-start">
                            <div className="bg-teal-100 p-3 rounded-full mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                            <div>
                                <h3 className="text-lg font-semibold">E-mail</h3>
                                <p className="text-gray-600">contato@ativo.plus</p>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <div className="bg-teal-100 p-3 rounded-full mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                            <div>
                                <h3 className="text-lg font-semibold">Telefone</h3>
                                <p className="text-gray-600">(11) 3000-0000</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-teal-100 p-3 rounded-full mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                            <div>
                                <h3 className="text-lg font-semibold">Endereço</h3>
                                <p className="text-gray-600">São Paulo, SP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
