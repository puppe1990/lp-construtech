
// Script para extrair metadados dos posts MDX e gerar o mapeamento
// Este script pode ser executado para atualizar automaticamente os metadados

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(__dirname, '../posts');
const outputFile = path.join(__dirname, '../utils/postsMetadata.json');

function extractMetadata() {
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdx'));
  const metadata: Record<string, any> = {};

  files.forEach(file => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    
    const slug = file.replace('.mdx', '');
    
    metadata[slug] = {
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || 'Equipe Ativo+',
      category: data.category || 'Geral',
      readTime: data.readTime || '5 min',
      slug: data.slug || slug
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(metadata, null, 2));
  console.log('Metadados extraídos com sucesso!');
}

extractMetadata();

