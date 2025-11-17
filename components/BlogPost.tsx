
import React from 'react';

interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
  content?: string;
}

interface BlogPostProps {
  post: BlogPostData;
  onBack: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const categoryColors: Record<string, string> = {
    'Gestão': 'bg-[#12B886]',
    'Compliance': 'bg-[#FF6B2C]',
    'Financeiro': 'bg-[#0B1F36]',
    'Tecnologia': 'bg-[#8FB4D9]',
    'Integração': 'bg-[#FFC857]'
  };

  // Conteúdo baseado no slug
  const getPostContent = (slug: string) => {
    const contentMap: Record<string, string> = {
      'reduzir-perdas-rastreabilidade': `
# Como reduzir perdas em canteiros de obra com rastreabilidade

As perdas em canteiros de obra representam um dos maiores desafios da construção civil brasileira. Estudos indicam que o desperdício médio pode chegar a 30-40% dos materiais, resultando em prejuízos bilionários anuais.

## O problema das perdas não rastreadas

Sem um sistema adequado de rastreabilidade, as construtoras enfrentam:

- **Desperdício de materiais**: Materiais perdidos ou não localizados
- **Roubo e extravio**: Falta de controle sobre equipamentos e ferramentas
- **Retrabalho**: Necessidade de refazer serviços por falta de materiais
- **Multas**: Perda de documentos e não conformidades

## A solução: Rastreabilidade Híbrida

A rastreabilidade híbrida combina três tecnologias complementares:

### 1. QR Code
- **Baixo custo**: Etiquetas acessíveis
- **Fácil implementação**: Escaneamento via smartphone
- **Ideal para**: EPIs, ferramentas manuais, documentos

### 2. RFID
- **Leitura à distância**: Até 10 metros
- **Durabilidade**: Resistente a intempéries
- **Ideal para**: Equipamentos pesados, containers, veículos

### 3. IoT
- **Monitoramento em tempo real**: Sensores conectados
- **Dados contínuos**: Temperatura, umidade, localização
- **Ideal para**: Materiais sensíveis, estruturas temporárias

## Resultados comprovados

Empresas que implementaram rastreabilidade híbrida reportaram:

- **Redução de perdas**: Até R$ 60.000 por obra
- **Payback**: 3-6 meses
- **Redução de retrabalho**: 11 pontos percentuais
- **Multas evitadas**: R$ 20.000+ por obra

## Como implementar

1. **Mapear ativos críticos**: Identifique os itens de maior valor
2. **Escolher tecnologia adequada**: QR para baixo custo, RFID para durabilidade, IoT para monitoramento
3. **Treinar equipe**: Capacitação é essencial para adoção
4. **Integrar com sistemas**: Conecte com ERP e sistemas de gestão
5. **Monitorar resultados**: Acompanhe métricas de redução de perdas

## Conclusão

A rastreabilidade híbrida não é mais um diferencial, mas uma necessidade para construtoras que buscam eficiência e redução de custos. Com payback rápido e resultados mensuráveis, é um investimento que se paga rapidamente.
      `,
      'compliance-nr18-automatizacao': `
# Compliance NR-18: Automatize e evite multas de até R$ 44.007

A Norma Regulamentadora 18 (NR-18) estabelece condições e meio ambiente de trabalho na indústria da construção. O não cumprimento pode resultar em multas que chegam a R$ 44.007 por infração.

## O custo do não compliance

Multas por não conformidade com NR-18 podem incluir:

- **Multa por infração grave**: R$ 44.007,00
- **Paralisação da obra**: Perdas diárias significativas
- **Danos à reputação**: Impacto negativo na marca
- **Responsabilidade criminal**: Em casos de acidentes

## Desafios do compliance manual

O processo tradicional de compliance apresenta várias dificuldades:

### Documentação dispersa
- Planilhas em Excel
- Documentos físicos
- Falta de versionamento
- Dificuldade de auditoria

### Controle de prazos
- EPIs vencidos não identificados
- Treinamentos atrasados
- Inspeções não realizadas
- Multas por falta de documentação

## A solução: Compliance automatizado

Sistemas automatizados de compliance oferecem:

### Dossiês digitais automáticos
- **Organização centralizada**: Todos os documentos em um só lugar
- **Versionamento**: Histórico completo de alterações
- **Acesso rápido**: Busca instantânea por qualquer critério

### Alertas inteligentes
- **EPIs vencidos**: Notificações automáticas antes do vencimento
- **Treinamentos pendentes**: Lembretes para reciclagem
- **Inspeções**: Agendamento e acompanhamento automático

### Trilha de auditoria
- **LGPD compliant**: Rastreamento de todas as ações
- **Relatórios automáticos**: Geração de documentos para fiscalização
- **Comprovação**: Evidências digitais com timestamp

## Benefícios mensuráveis

Empresas que automatizaram o compliance reportaram:

- **Multas evitadas**: R$ 20.000+ por obra
- **Tempo economizado**: 80% menos tempo em documentação
- **Conformidade**: 100% de conformidade em auditorias
- **Produtividade**: Mais tempo para atividades operacionais
      `,
      'roi-construcao-tecnologia': `
# ROI em construção: Como calcular o retorno de investimento em tecnologia

Investir em tecnologia para construção civil requer análise cuidadosa do retorno sobre investimento (ROI). Neste artigo, você aprenderá a calcular o ROI e entenderá como soluções como o Ativo+ oferecem payback rápido.

## Por que calcular o ROI?

O cálculo de ROI ajuda a:

- **Justificar investimentos**: Demonstrar valor para stakeholders
- **Comparar soluções**: Avaliar diferentes opções de tecnologia
- **Medir sucesso**: Acompanhar resultados ao longo do tempo
- **Tomar decisões**: Baseadas em dados, não em intuição

## Fórmula básica de ROI

\`\`\`
ROI = (Ganho - Investimento) / Investimento × 100
\`\`\`

### Exemplo prático

**Investimento**: R$ 50.000 (solução tecnológica)
**Ganho anual**: R$ 200.000 (redução de perdas, multas evitadas, etc.)

\`\`\`
ROI = (200.000 - 50.000) / 50.000 × 100
ROI = 300%
\`\`\`

## Caso real: Ativo+

### Investimento
- **Plano Operations**: R$ 4.000-6.000/mês
- **Implementação**: R$ 10.000 (one-time)
- **Total primeiro ano**: R$ 58.000-82.000

### Retorno
- **Redução de perdas**: R$ 60.000/obra
- **Multas evitadas**: R$ 20.000/obra
- **Eficiência**: R$ 15.000/obra
- **Total**: R$ 95.000/obra

### ROI
\`\`\`
ROI = (95.000 - 82.000) / 82.000 × 100
ROI = 15,8% no primeiro ano
Payback: 3-6 meses
\`\`\`
      `,
      'offline-first-canteiros': `
# Offline-First: Por que sua solução precisa funcionar sem internet

Em canteiros de obra, a conectividade é frequentemente instável ou inexistente. Soluções offline-first garantem que a operação continue mesmo sem internet.

## O problema da dependência de internet

Muitas soluções tecnológicas dependem completamente de conexão, causando:

- **Paralisação**: Sem internet, o sistema não funciona
- **Perda de dados**: Informações não salvas são perdidas
- **Frustração**: Equipe não consegue trabalhar
- **Custos**: Necessidade de melhorar infraestrutura de rede

## A solução: Offline-First

Sistemas offline-first funcionam completamente sem internet e sincronizam quando a conexão é restabelecida.

### Benefícios

- **Continuidade**: Operação ininterrupta
- **Confiabilidade**: Dados sempre salvos localmente
- **Produtividade**: Equipe trabalha sem interrupções
- **Economia**: Não requer investimento em infraestrutura de rede

## Como funciona

1. **Armazenamento local**: Dados salvos no dispositivo
2. **Sincronização automática**: Quando internet volta, sincroniza
3. **Resolução de conflitos**: Sistema gerencia conflitos automaticamente
4. **Transparência**: Usuário não percebe a diferença
      `,
      'integracao-bim-erp': `
# Integração BIM e ERP: Conectando o projeto à execução

A integração entre modelos BIM e sistemas ERP elimina retrabalho e melhora a comunicação entre projeto e obra.

## O desafio da desconexão

Projeto e execução frequentemente trabalham com sistemas desconectados:

- **Retrabalho**: Informações duplicadas em diferentes sistemas
- **Erros**: Dados desatualizados entre sistemas
- **Tempo perdido**: Transferência manual de informações
- **Falta de visibilidade**: Dificuldade de acompanhar progresso

## A solução: Integração nativa

Sistemas integrados conectam BIM e ERP automaticamente.

### Benefícios

- **Sincronização automática**: Dados sempre atualizados
- **Redução de erros**: Eliminação de entrada manual
- **Visibilidade completa**: Acompanhamento em tempo real
- **Eficiência**: Menos tempo em tarefas administrativas

## Casos de uso

### Ingestão BIM
- Importação automática de modelos IFC
- Extração de quantitativos
- Comparação projeto vs. execução

### Sincronização ERP
- Integração com Sienge, TOTVS, Protheus
- Sincronização bidirecional
- Relatórios unificados
      `,
      'dashboards-financeiros-decisoes': `
# Dashboards financeiros: Transformando dados em decisões estratégicas

Dashboards financeiros oferecem visibilidade completa sobre a rentabilidade de cada obra e ativo.

## O problema da falta de visibilidade

Sem dashboards adequados, gestores enfrentam:

- **Decisões baseadas em intuição**: Falta de dados concretos
- **Análise demorada**: Tempo gasto coletando informações
- **Oportunidades perdidas**: Não identificação de problemas rapidamente
- **ROI desconhecido**: Dificuldade de medir retorno

## A solução: Dashboards inteligentes

Dashboards financeiros transformam dados brutos em insights acionáveis.

### Métricas principais

- **ROI por ativo**: Retorno de cada equipamento
- **Desperdício evitado**: Economia mensurável
- **Uso de EPIs**: Conformidade e custos
- **Benchmarks**: Comparação com mercado

## Benefícios

- **Decisões rápidas**: Dados em tempo real
- **Identificação de problemas**: Alertas automáticos
- **Otimização**: Identificação de oportunidades
- **Comunicação**: Relatórios claros para stakeholders
      `
    };

    return contentMap[slug] || 'Conteúdo do artigo em breve...';
  };

  const content = getPostContent(post.slug);

  return (
    <article className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header do artigo */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#5F6B7A] hover:text-[#0B1F36] transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o blog
          </button>

          <div className="flex items-center gap-3 mb-6">
            <span className={`${categoryColors[post.category] || 'bg-[#5F6B7A]'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {post.category}
            </span>
            <span className="text-sm text-[#5F6B7A]">{post.readTime}</span>
            <span className="text-sm text-[#5F6B7A]">•</span>
            <span className="text-sm text-[#5F6B7A]">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1F36] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pb-6 border-b border-[#F5F2EB]">
            <div className="w-10 h-10 rounded-full bg-[#0B1F36] flex items-center justify-center">
              <span className="text-white text-sm font-bold">A+</span>
            </div>
            <div>
              <p className="font-semibold text-[#0B1F36]">{post.author}</p>
              <p className="text-sm text-[#5F6B7A]">{post.date}</p>
            </div>
          </div>
        </div>

        {/* Conteúdo do artigo */}
        <div className="text-[#5F6B7A] leading-relaxed">
          {content.split('\n\n').map((block, blockIndex) => {
            const trimmedBlock = block.trim();
            if (!trimmedBlock) return null;

            // Headers
            if (trimmedBlock.startsWith('# ')) {
              return (
                <h1 key={blockIndex} className="text-4xl font-bold text-[#0B1F36] mt-8 mb-4">
                  {trimmedBlock.substring(2)}
                </h1>
              );
            }
            if (trimmedBlock.startsWith('## ')) {
              return (
                <h2 key={blockIndex} className="text-3xl font-bold text-[#0B1F36] mt-6 mb-3">
                  {trimmedBlock.substring(3)}
                </h2>
              );
            }
            if (trimmedBlock.startsWith('### ')) {
              return (
                <h3 key={blockIndex} className="text-2xl font-bold text-[#0B1F36] mt-4 mb-2">
                  {trimmedBlock.substring(4)}
                </h3>
              );
            }

            // Code blocks
            if (trimmedBlock.startsWith('```')) {
              const codeMatch = trimmedBlock.match(/```\n?(.+?)\n?```/s);
              if (codeMatch) {
                return (
                  <pre key={blockIndex} className="bg-[#0B1F36] text-white p-4 rounded-xl overflow-x-auto my-4 font-mono text-sm">
                    <code>{codeMatch[1]}</code>
                  </pre>
                );
              }
            }

            // Lists
            if (trimmedBlock.includes('\n- ')) {
              const items = trimmedBlock.split('\n').filter(line => line.trim().startsWith('- '));
              return (
                <ul key={blockIndex} className="list-disc list-inside mb-4 space-y-2 ml-4">
                  {items.map((item, itemIndex) => {
                    const cleanItem = item.replace(/^-\s*/, '');
                    // Check for bold text
                    const boldMatch = cleanItem.match(/\*\*(.+?)\*\*: (.+)/);
                    if (boldMatch) {
                      return (
                        <li key={itemIndex} className="mb-2">
                          <strong className="text-[#0B1F36]">{boldMatch[1]}</strong>: {boldMatch[2]}
                        </li>
                      );
                    }
                    return <li key={itemIndex} className="mb-2">{cleanItem}</li>;
                  })}
                </ul>
              );
            }

            // Regular paragraphs
            return (
              <p key={blockIndex} className="mb-4 text-lg leading-relaxed">
                {trimmedBlock.split('\n').map((line, lineIndex) => {
                  // Handle inline bold
                  const parts = line.split(/(\*\*.+?\*\*)/g);
                  return (
                    <React.Fragment key={lineIndex}>
                      {parts.map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={partIndex} className="text-[#0B1F36]">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return <span key={partIndex}>{part}</span>;
                      })}
                      {lineIndex < line.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  );
                })}
              </p>
            );
          })}
        </div>

        {/* CTA no final */}
        <div className="mt-12 pt-8 border-t border-[#F5F2EB] bg-[#F5F2EB] p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-[#0B1F36] mb-4">Quer saber mais?</h3>
          <p className="text-[#5F6B7A] mb-6">
            Entre em contato conosco e solicite uma demonstração gratuita do Ativo+.
          </p>
          <a 
            href="#contact"
            onClick={onBack}
            className="btn-primary font-bold py-3 px-8 rounded-xl inline-block transform hover:scale-105 transition-all duration-300"
          >
            Solicitar Demo
          </a>
        </div>
      </div>
    </article>
  );
};

