const BASE = 'http://localhost:3000'

export async function listarLivros() {
  try {
    const res = await fetch(`${BASE}/livros`)
    if (!res.ok) {
      // Tratamos respostas HTTP não bem-sucedidas com mensagem amigável em PT-BR
      throw new Error('Não foi possível carregar os livros. Tente novamente.')
    }
    return await res.json()
  } catch (err) {
    // Erros de rede também devem ser apresentados de forma tratável
    throw new Error('Não foi possível carregar os livros. Tente novamente.')
  }
}

export async function cadastrarLivro(livro) {
  try {
    // Enviar somente os campos esperados pelo contrato
    const payload = { titulo: livro.titulo, autor: livro.autor }
    const res = await fetch(`${BASE}/livros`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      throw new Error('Não foi possível cadastrar o livro. Tente novamente.')
    }

    return await res.json()
  } catch (err) {
    throw new Error('Não foi possível cadastrar o livro. Tente novamente.')
  }
}

// Exportações nomeadas permanecem conforme o contrato
