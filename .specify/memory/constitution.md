# Catálogo de Livros — Constituição do Projeto

## Princípios fundamentais

### I. Escopo orientado ao usuário
Cada entrega deve contribuir para consultar ou cadastrar livros no catálogo. Login, busca, edição, exclusão, capas e outros fluxos não fazem parte desta versão.

### II. Contratos explícitos
As fronteiras entre página, componentes e API devem ser documentadas. O recurso livro usa `id`, `titulo` e `autor`; falhas de HTTP ou de rede devem ser sinalizadas ao chamador.

### III. Estados visíveis e recuperação
A interface deve representar carregamento, lista vazia, sucesso e erro. Erros de consulta oferecem nova tentativa; erros de cadastro preservam os dados digitados.

### IV. Validação verificável
Campos de título e autor não podem ser vazios ou conter apenas espaços. Cada critério da especificação deve ser conferido manualmente no fluxo integrado e registrado no checklist.

### V. Simplicidade e revisão
Usar a solução mínima compatível com o escopo: React com Vite, JavaScript, `fetch` e JSON Server. Artefatos e alterações relevantes devem ser revisados por uma pessoa do grupo antes da entrega.

## Restrições técnicas

O frontend é uma aplicação React/Vite. O JSON Server local persiste os dados em `db.json` e expõe `GET /livros` e `POST /livros`. A entrega deve continuar funcional após `npm run build`.

## Fluxo de qualidade

Antes da entrega, revisar a especificação, o plano, as tarefas e o checklist; validar a persistência após recarregar; conferir os estados de erro; restaurar o `db.json`; e executar o build.

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

Esta constituição orienta os artefatos e a implementação desta feature. Qualquer alteração de escopo deve ser registrada na especificação e revisada pelo grupo.

**Versão**: 1.0.0 | **Ratificada**: 2026-11-16 | **Última alteração**: 2026-11-16
