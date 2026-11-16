<!--
Sync Impact Report

Version change: 1.0.0 → 1.1.0

Modified principles:
- I. Simplicidade e Escopo Mínimo → I. Idioma e comunicação (renamed and scope refocused)
- II. Contratos e Interfaces Reprodutíveis → IV. Contratos e comunicação com a API (reordered/expanded)
- III. Testes e Validação → VII. Testes e critérios de qualidade (expanded)
- IV. Reprodutibilidade Local → (merged into Restrições Técnicas / Desenvolvimento & Fluxo)
- V. Documentação e Especificação → (merged into Governance / Development)

Added sections:
- I. Idioma e comunicação (new mandatory principle)
- III. Tecnologias e arquitetura (expanded technical constraints)
- V. Validação e tratamento de estados (explicit UI/state requirements)
- VI. Qualidade e manutenção do código (explicit coding guidance)

Removed sections:
- (no deletions; content reorganized and expanded)

Follow-up TODOs:
- None
-->

# Catálogo de Livros Constitution

## Core Principles

### I. Idioma e comunicação
- Toda comunicação pública do projeto DEVEM ser em Português do Brasil.
- Planos, especificações, relatórios, e documentação DEVEM estar em português.
- Comentários no código DEVEM ser escritos em português; termos técnicos (nomes de
  bibliotecas, métodos HTTP, tecnologias) podem permanecer no idioma técnico.
Racional: garante consistência para avaliadores e integrantes do grupo.

### II. Respeito ao escopo do projeto
- O sistema DEVEM permitir apenas as funcionalidades aprovadas: consultar e cadastrar
  livros.
- Não DEVEM ser implementadas por iniciativa própria: login, busca, edição, exclusão
  ou capas de livros.
- Qualquer alteração de escopo DEVEM ser discutida, registrada na especificação e
  aprovada pelo grupo.
Racional: preserva foco e viabilidade da entrega.

### III. Tecnologias e arquitetura
- Stack oficial: React + Vite + JavaScript.
- API local DEVEM usar JSON Server; persistência em `db.json`.
- Requisições HTTP DEVEM ser feitas com `fetch`.
- Organização recomendada: `src/api`, `src/components`, `src/pages`.
- Evitar dependências externas desnecessárias; justificar adição de qualquer nova
  dependência.
Racional: padroniza o ambiente e reduz atrito entre integrantes.

### IV. Contratos e comunicação com a API
- Centralizar chamadas HTTP em `src/api`.
- Usar o recurso `/livros` com métodos `GET` e `POST` para listagem e cadastro.
- O objeto `livro` DEVEM respeitar o contrato: `id`, `titulo`, `autor`.
- Tratar erros de rede e respostas HTTP com erro, expondo mensagens de falha
  claras para a interface.
Racional: contratos previsíveis facilitam testes e integração com o front.

### V. Validação e tratamento de estados
- Campos `titulo` e `autor` DEVEM ser obrigatórios; não aceitar vazios ou apenas
  espaços.
- A interface DEVEM apresentar estados de: carregamento, lista vazia, sucesso e
  erro.
- Em caso de falha no cadastro, os dados digitados DEVEM ser preservados e o usuário
  DEVEM poder tentar novamente.
Racional: assegura experiência previsível e evita perda de dados do usuário.

### VI. Qualidade e manutenção do código
- Preferir componentes funcionais e Hooks do React.
- Manter responsabilidades separadas entre páginas, componentes e módulo de API.
- Evitar duplicação; usar nomes descritivos e consistência estrutural.
- Priorizar soluções simples e legíveis que facilitem manutenção.
Racional: reduz custo de revisão e facilita correções antes da entrega.

### VII. Testes e critérios de qualidade
- Validar requisitos descritos na especificação (`specs/001-catalogo-livros/spec.md`).
- Testar cenários de sucesso, campos inválidos e falhas da API.
- Verificar integração entre frontend e API e que os dados persistem após reload.
- Garantir que o projeto continue compilando com `npm run build`.
- Revisões DEVEM checar evidências e checklist descrito em `specs/.../checklists`.
Racional: critérios claros evitam regressões e garantem condição mínima de aceitação.

## Restrições Técnicas

- Stack: React + Vite + JavaScript.
- API local: JSON Server; `db.json` para persistência.
- Scripts principais: `npm install`, `npm run api`, `npm run dev` DEVEM funcionar
  conforme README.
- Organização de código conforme princípio III.

## Desenvolvimento & Fluxo

- Tarefas e responsáveis DEVEM estar em `specs/001-catalogo-livros/tasks.md`.
- PRs DEVEM referenciar as especificações e incluir checklist de validação e
  evidências (screenshots, logs de teste ou descrições de como validar).
- Revisores DEVEM verificar conformidade com esta constituição antes de aprovar.

## Governance

Emendas:

1. Propor mudança via PR que edite `.specify/memory/constitution.md` com motivo,
   impacto e plano de migração (se aplicável).
2. Notificar integrantes listados em `tasks.md`; emenda requer aprovação
   majoritária dos membros ativos antes de mesclar.
3. Atualizar a versão conforme a política e preencher `Last Amended` com a data.

Política de versionamento:
- MAJOR: remoção ou redefinição incompatível de princípios.
- MINOR: adição de novos princípios ou expansão material das regras.
- PATCH: correções redacionais e clarificações não substantivas.

Conformidade e auditoria:
- PRs DEVEM declarar como as mudanças cumprem esta constituição.
- Fazer ao menos uma revisão de conformidade antes da entrega final.

**Version**: 1.1.0 | **Ratified**: 2026-11-16 | **Last Amended**: 2026-11-16
