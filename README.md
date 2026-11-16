# Catálogo de Livros

Projeto da atividade de SDD: página React para consultar e cadastrar livros usando uma API local persistida em `db.json`.

**Status atual**: especificação e planejamento registrados; a implementação da tela e da API ainda está pendente.

## Stack e execução

- React + Vite + JavaScript
- JSON Server para `GET /livros` e `POST /livros`

```bash
npm install
npm run api   # terminal 1
npm run dev   # terminal 2
```

## Artefatos do Spec Kit

- [Especificação](specs/001-catalogo-livros/spec.md)
- [Plano](specs/001-catalogo-livros/plan.md)
- [Tarefas](specs/001-catalogo-livros/tasks.md)
- [Contrato HTTP](specs/001-catalogo-livros/contracts/livros.md)
- [Quickstart](specs/001-catalogo-livros/quickstart.md)
- [Checklist de validação](specs/001-catalogo-livros/checklists/validacao.md)
- [Constituição](.specify/memory/constitution.md)

A integração do Spec Kit com o OpenCode está versionada em `.specify/` e `.opencode/`.

## Escopo

Inclui listagem, cadastro, persistência, validação de campos e tratamento de falhas. Login, busca, edição, exclusão e capas não fazem parte desta entrega.

## Integrantes

Preencher com os seis integrantes do grupo e seus respectivos responsáveis em `tasks.md` antes da entrega.
