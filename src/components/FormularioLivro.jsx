// src/components/FormularioLivro.jsx
// Componente de formulário para cadastro de livro.
// Recebe a função enviarLivro por props e não realiza requisições diretamente.
import React, { useState } from 'react'

export default function FormularioLivro({ enviarLivro, onSucesso, onErro, inicial = {} }) {
  const [titulo, setTitulo] = useState(inicial.titulo || '')
  const [autor, setAutor] = useState(inicial.autor || '')
  const [enviando, setEnviando] = useState(false)
  const [erroMensagem, setErroMensagem] = useState(null)

  if (typeof enviarLivro !== 'function') {
    // Falha rápida: o componente foi projetado para receber enviarLivro por prop.
    // Lançar erro em tempo de render permite detectar más integrações rapidamente.
    throw new Error('FormularioLivro: prop "enviarLivro" é obrigatória e deve ser uma função')
  }

  const tituloTrim = titulo.trim()
  const autorTrim = autor.trim()
  const valido = tituloTrim.length > 0 && autorTrim.length > 0

  async function handleSubmit(e) {
    e.preventDefault()
    // Validação local com trim()
    if (!valido) {
      setErroMensagem('Preencha título e autor')
      return
    }

    setEnviando(true)
    setErroMensagem(null)
    try {
      const novo = await enviarLivro({ titulo: tituloTrim, autor: autorTrim })
      // Em caso de sucesso, limpar campos e notificar o pai
      setTitulo('')
      setAutor('')
      setEnviando(false)
      if (typeof onSucesso === 'function') onSucesso(novo)
    } catch (err) {
      // Preservar valores; exibir mensagem de erro e notificar o pai
      const msg = (err && err.message) ? String(err.message) : 'Falha ao cadastrar o livro. Tente novamente.'
      setErroMensagem(msg)
      setEnviando(false)
      if (typeof onErro === 'function') onErro(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={enviando}>
      <div>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          disabled={enviando}
        />
      </div>

      <div>
        <label htmlFor="autor">Autor</label>
        <input
          id="autor"
          name="autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          disabled={enviando}
        />
      </div>

      {erroMensagem && (
        <div role="alert" style={{ color: 'red' }}>
          {erroMensagem}
        </div>
      )}

      <button type="submit" disabled={!valido || enviando} aria-disabled={!valido || enviando}>
        {enviando ? 'Enviando…' : 'Cadastrar Livro'}
      </button>
    </form>
  )
}
