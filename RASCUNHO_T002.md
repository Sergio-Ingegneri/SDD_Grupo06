# T002 | Catálogo de Livros

Rascunho para a sessão do grupo. Aprovação da spec: pendente.

## Constituição proposta

1. Entregar uma tela React com Vite, usando JavaScript e as pastas `src/api`, `src/components` e `src/pages`.
2. Usar JSON Server para consumir uma API HTTP e tratar falhas de consulta e de cadastro.
3. Registrar as decisões nos artefatos do Spec Kit. Ler e revisar cada artefato e documentar pelo menos uma alteração própria por etapa.
4. Cada integrante implementa ou conduz sua tarefa e registra a entrega em seu próprio commit.
5. Validar a entrega seguindo os critérios de aceitação e registrar os resultados observados.

## Spec proposta

**Objetivo.** Permitir que a turma consulte e cadastre livros em uma única tela. Cada livro tem título e autor. O catálogo terá listagem e cadastro.

**Contrato.** O recurso `livros` do `db.json` contém registros com `id`, `titulo` e `autor`. A API gera o ID. `GET /livros` devolve a lista. `POST /livros` recebe título e autor e devolve o livro criado.

| Cenário | Ação | Resultado esperado |
|---|---|---|
| Consulta | Abrir a página com livros cadastrados | A lista mostra título e autor de cada livro. |
| Lista vazia | Abrir a página com a coleção vazia | A tela informa que ainda não há livros cadastrados. |
| Cadastro | Informar título e autor e enviar | Após a confirmação da API, o livro aparece na lista e os campos são limpos. Ao recarregar, o livro continua na lista. |
| Validação | Enviar com um campo vazio ou só com espaços | A tela informa qual campo deve ser preenchido e nenhum POST é enviado. |
| Falha na consulta | Abrir a página com a API desligada | A tela informa a falha. Depois que a API voltar, Tentar novamente carrega a lista. |
| Falha no cadastro | Desligar a API com a página aberta e enviar um livro | A tela informa a falha, preserva os campos e permite novo envio. |

## Sessão no OpenCode

1. Depois da instalação do Spec Kit na T001, abra o OpenCode na raiz. Rode `/speckit.constitution` com os princípios acima.
2. Rode `/speckit.specify` com o objetivo, o contrato e os cenários. Leiam a spec em voz alta. Se houver dúvida, usem `/speckit.clarify`. Registrem em `spec.md` uma mudança feita pelo grupo e a decisão tomada. Uma regra para confirmar é quando o formulário limpa os campos e o livro entra na lista.
3. Com a spec aprovada por todos, usem `/speckit.plan` e peçam o fluxo React → camada HTTP → JSON Server, com os contratos de API e componentes. Revisem e ajustem o plano.
4. Usem `/speckit.tasks` e atribuam os IDs gerados aos seis integrantes. As entregas são preparação, artefatos, API, lista, formulário e integração com validação e README. API, lista e formulário podem avançar em paralelo após o acordo sobre suas interfaces.
5. Rodem `/speckit.analyze`, corrijam as inconsistências e façam o commit T002 com a constituição, a spec, o plano e as tarefas geradas. Mensagem: `docs: registra spec, plano e tarefas do catalogo`.

## Preparar a sessão

No terminal integrado, a partir da raiz da base React, com `uv` disponível:

```bash
uv tool install specify-cli
specify version
specify init --here --integration opencode
opencode
```

A primeira inicialização pertence à T001. Se a integração já estiver instalada nessa cópia do projeto, abra diretamente o OpenCode. A base do Vite e os arquivos da integração precisam estar no repositório do grupo para os colegas usarem a mesma versão.

## Prompts prontos para colar

```text
/speckit.constitution Adote os princípios de RASCUNHO_T002.md para o Catálogo de Livros. Registre as decisões, mantenha o escopo de uma tela e peça a revisão do grupo antes da próxima etapa.
```

```text
/speckit.specify Use a seção Spec proposta de RASCUNHO_T002.md para gerar a especificação de uma tela de catálogo com listagem e cadastro de livros. Inclua os seis cenários de aceitação. Apresente as decisões em aberto para discutirmos juntos e pare após gerar a spec.
```

**A partir daqui, aguardem o acordo dos seis sobre a spec.**

```text
/speckit.plan Use a spec aprovada como base. Planeje React com Vite e JavaScript, fetch em src/api/livros.js, componentes em src/components e a página em src/pages. Use JSON Server com db.json e os endpoints GET /livros e POST /livros. Defina as entradas e saídas da camada HTTP e as props de ListaLivros e FormularioLivro para que as três partes possam ser feitas em paralelo. Pare após gerar o plano.
```

```text
/speckit.tasks Agrupe as tarefas em seis entregas, uma por integrante: base, artefatos, API, lista, formulário e integração com validação e README. Identifique arquivos, dependências e critérios de conclusão. Deixe os responsáveis para preenchimento do grupo. Pare após gerar as tarefas.
```

```text
/speckit.analyze
```
