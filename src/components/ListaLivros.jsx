// src/components/ListaLivros.jsx
// Componente de apresentação para listar livros
// Recebe as props conforme contrato do plano:
// - livros: array de { id, titulo, autor }
// - carregando: boolean
// - erro: qualquer (null ou objeto/string)
// - aoTentarNovamente: função chamada quando o usuário solicita nova tentativa
import React from 'react';

export default function ListaLivros({ livros = [], carregando = false, erro = null, aoTentarNovamente = () => {} }) {
  // Estado de carregamento
  if (carregando) {
    return <p>Carregando livros...</p>;
  }

  // Estado de erro: exibe mensagem e botão de tentar novamente
  if (erro) {
    return (
      <div role="alert">
        <p>Erro ao carregar os livros.</p>
        <button type="button" onClick={aoTentarNovamente}>Tentar novamente</button>
      </div>
    );
  }

  // Lista vazia
  if (!livros || livros.length === 0) {
    return <p>Nenhum livro cadastrado</p>;
  }

  // Exibição da lista de livros com título e autor
  return (
    <ul>
      {livros.map((livro) => (
        <li key={livro.id}>
          <strong>{livro.titulo}</strong> — <span>{livro.autor}</span>
        </li>
      ))}
    </ul>
  );
}
