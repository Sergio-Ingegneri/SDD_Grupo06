# Tarefas: Catálogo de Livros

**Documentos-base**: [spec.md](./spec.md) e [plan.md](./plan.md)

## Preparação e artefatos

- [ ] T001 [P] Revisar a constituição e confirmar o escopo em `.specify/memory/constitution.md`.
- [ ] T002 [P] Revisar `spec.md`, `plan.md` e registrar decisões do grupo.

## API e persistência

- [x] T003 Criar `db.json` com o recurso `livros` e um registro inicial.
- [x] T004 Adicionar JSON Server e o script `npm run api` em `package.json`, versionando `package-lock.json`.
- [x] T005 Implementar `src/api/livros.js` com `listarLivros` e `cadastrarLivro`, incluindo verificação de `response.ok`.
- [x] T006 Testar GET, POST e GET novamente e restaurar o `db.json` antes do commit.

## Componentes

- [ ] T007 [P] [US1] Criar `src/components/ListaLivros.jsx` com carregamento, erro, lista vazia, itens e nova tentativa.
- [ ] T008 [P] [US2] Criar `src/components/FormularioLivro.jsx` com campos controlados, `trim`, validação, estado de envio e preservação em erro.

## Integração

- [ ] T009 [US1][US2] Criar `src/pages/CatalogoLivros.jsx` para coordenar estado, consulta inicial, nova tentativa e cadastro.
- [ ] T010 [US1][US2] Renderizar `CatalogoLivros` em `src/App.jsx`.
- [ ] T011 [US1][US2] Conferir que o livro retornado pelo POST entra na lista e persiste após recarregar.

## Validação e documentação

- [ ] T012 Executar os cenários de `checklists/validacao.md` com API e frontend ativos.
- [ ] T013 [P] Registrar resultado, correções e um caso adicional no checklist.
- [ ] T014 Restaurar dados iniciais, executar `npm run lint` e `npm run build`.
- [ ] T015 Atualizar o README com execução, artefatos, integrantes e reflexão da entrega.

## Dependências

- T003–T006 habilitam a integração, mas T007 e T008 podem ser desenvolvidas em paralelo após o contrato da spec.
- T009–T011 dependem dos contratos de T005, T007 e T008.
- T012–T015 dependem da integração concluída.
