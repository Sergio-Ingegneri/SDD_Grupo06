# Catálogo de Livros

Projeto da atividade de SDD: página React para consultar e cadastrar livros usando uma API local persistida em `db.json`.

**Status atual**: implementação concluída e validada conforme `checklists/validacao.md`.

## Stack e execução

- React + Vite + JavaScript
- JSON Server para `GET /livros` e `POST /livros`
- Linting com `oxlint`

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

## Integrantes e Reflexão

- **Grupo 06**
- **Reflexão**: O projeto permitiu aplicar na prática a integração de um frontend React com uma API REST simples utilizando o JSON Server. O desafio principal foi o gerenciamento do estado em cenários de falha na API, resolvido com a implementação de um mecanismo de `Tentar novamente` e preservação dos dados de formulário durante erros. Os testes de validação confirmaram a robustez da solução frente a cenários de indisponibilidade da API e entrada de dados inválidos.
