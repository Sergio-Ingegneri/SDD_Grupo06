# Plano de Implementação: Catálogo de Livros

**Branch**: `001-catalogo-livros` | **Data**: 2026-11-16 | **Spec**: [spec.md](./spec.md)

## Resumo

Construir uma página React que coordena a consulta e o cadastro de livros. A camada `src/api/livros.js` encapsula `fetch` para o JSON Server; `CatalogoLivros` controla lista, carregamento e erro; os componentes de lista e formulário cuidam apenas da apresentação e das interações recebidas por props.

## Contexto técnico

- **Linguagem**: JavaScript (ES modules)
- **Frontend**: React com Vite
- **API local**: JSON Server em `http://localhost:3000`
- **Persistência**: `db.json`, recurso `livros`
- **Testes**: validação manual dos critérios e `npm run build`
- **Plataforma**: navegador durante o desenvolvimento local
- **Escala**: catálogo pequeno para demonstração acadêmica

## Verificação da constituição

O plano atende aos princípios: mantém o escopo de uma tela, explicita os contratos, trata estados de carregamento/erro, valida entradas, usa a solução mínima prevista e inclui revisão/checklist antes da entrega.

## Contratos e fluxo

```text
CatalogoLivros
├── listarLivros() -> Livro[]
├── ListaLivros(livros, carregando, erro, aoTentarNovamente)
└── FormularioLivro(aoCadastrar({ titulo, autor }))
    └── cadastrarLivro({ titulo, autor }) -> Livro
```

`listarLivros` e `cadastrarLivro` verificam `response.ok` e rejeitam em falhas de rede ou HTTP. O formulário controla seus próprios campos, aplica `trim`, desabilita o botão durante o envio e só limpa após sucesso.

## Estrutura prevista

```text
db.json
src/
├── api/livros.js
├── components/
│   ├── ListaLivros.jsx
│   └── FormularioLivro.jsx
├── pages/CatalogoLivros.jsx
└── App.jsx
specs/001-catalogo-livros/
├── spec.md
├── plan.md
├── contracts/livros.md
├── quickstart.md
├── tasks.md
└── checklists/validacao.md
```

## Decisão de simplicidade

Não serão adicionados gerenciador global de estado, roteamento, autenticação, banco real ou abstração de repositório: nenhum é necessário para os dois endpoints e o fluxo definido.
