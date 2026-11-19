// src/api/livros.js
// Funções para comunicação com a API local de livros
// Contrato esperado:
// - listarLivros() -> retorna array de { id, titulo, autor }
// - cadastrarLivro({ titulo, autor }) -> retorna o livro criado { id, titulo, autor }
// As funções verificam response.ok e lançam Error em falhas de rede/HTTP.

const BASE = 'http://localhost:3000/livros';

export async function listarLivros() {
  try {
    const res = await fetch(BASE);
    if (!res.ok) {
      // inclui status para auxiliar debugging
      throw new Error(`Falha ao listar livros: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch {
    // Re-lançar como erro controlado para a UI tratar (ex: exibir botão "Tentar novamente")
    throw new Error('Falha ao listar livros: erro de rede ou servidor');
  }
}

export async function cadastrarLivro({ titulo, autor }) {
  try {
    const res = await fetch(BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, autor }),
    });
    if (!res.ok) {
      throw new Error(`Falha ao cadastrar livro: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch {
    throw new Error('Falha ao cadastrar livro: erro de rede ou servidor');
  }
}

export default {
  listarLivros,
  cadastrarLivro,
};
