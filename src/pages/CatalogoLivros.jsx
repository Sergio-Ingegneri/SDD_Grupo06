// src/pages/CatalogoLivros.jsx
// Página que coordena a consulta e o cadastro de livros.
// A lista e o formulário continuam responsáveis apenas pela apresentação.
import { useCallback, useEffect, useState } from 'react'
import { listarLivros, cadastrarLivro } from '../api/livros.js'
import ListaLivros from '../components/ListaLivros.jsx'
import FormularioLivro from '../components/FormularioLivro.jsx'

export default function CatalogoLivros() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  const buscarLivros = useCallback(async () => {
    try {
      setLivros(await listarLivros())
      setErro(null)
    } catch (err) {
      setErro(err)
    } finally {
      setCarregando(false)
    }
  }, [])

  // Consulta inicial: a busca é assíncrona e atualiza os estados ao responder.
  useEffect(() => {
    // eslint-disable-next-line react/set-state-in-effect
    buscarLivros()
  }, [buscarLivros])

  // Nova tentativa repete a consulta exibindo o estado de carregamento.
  function tentarNovamente() {
    setCarregando(true)
    setErro(null)
    buscarLivros()
  }

  // O POST devolve o livro com o id gerado pela API; basta acrescentá-lo à lista.
  function aoCadastrar(novoLivro) {
    setErro(null)
    setLivros((atuais) => [...atuais, novoLivro])
  }

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <FormularioLivro enviarLivro={cadastrarLivro} onSucesso={aoCadastrar} />
      <ListaLivros
        livros={livros}
        carregando={carregando}
        erro={erro}
        aoTentarNovamente={tentarNovamente}
      />
    </main>
  )
}
