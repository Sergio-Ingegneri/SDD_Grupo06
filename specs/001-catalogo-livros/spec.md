# Especificação de Feature: Catálogo de Livros

**Feature Branch**: `001-catalogo-livros`  
**Criada em**: 2026-11-16  
**Status**: Em revisão

## Objetivo

Permitir que uma pessoa consulte os livros cadastrados pela turma e cadastre um novo livro em uma única página. Cada livro possui título e autor.

## Histórias de usuário

### US1 — Consultar o catálogo (Prioridade: P1)

Como visitante, quero ver os livros cadastrados para consultar o catálogo.

**Por que esta prioridade**: consultar os livros é a finalidade principal da página e deve funcionar mesmo antes de qualquer novo cadastro.

**Teste independente**: abrir a página com a API disponível e verificar que cada registro é apresentado com título e autor.

**Cenários de aceitação**:

1. Dado que a API responde com livros, quando a página é aberta, então a lista exibe o título e o autor de cada livro.
2. Dado que a API responde com uma lista vazia, quando a página é aberta, então a tela exibe `Nenhum livro cadastrado`.
3. Dado que a consulta está em andamento, então a tela exibe um estado breve de carregamento.

### US2 — Cadastrar um livro (Prioridade: P1)

Como visitante, quero informar título e autor para acrescentar um livro ao catálogo.

**Por que esta prioridade**: o cadastro é a segunda ação essencial do catálogo e completa o ciclo de manter a lista disponível para a turma.

**Teste independente**: preencher os dois campos, enviar o formulário e verificar o novo item na lista e após recarregar a página.

**Cenários de aceitação**:

1. Dado que título e autor foram preenchidos, quando o formulário é enviado e a API confirma, então o livro retornado aparece na lista e os campos são limpos.
2. Dado que título ou autor está vazio ou contém apenas espaços, quando o formulário é enviado, então a tela informa a validação e nenhum POST é realizado.
3. Dado que o cadastro falha, então a tela informa a falha e preserva título e autor para nova tentativa.

### US3 — Recuperar falhas da consulta (Prioridade: P2)

Como visitante, quero tentar novamente quando a API estiver indisponível para continuar usando o catálogo.

**Por que esta prioridade**: a recuperação evita uma tela sem saída, mas depende da consulta principal e por isso vem depois dos fluxos de leitura e cadastro.

**Teste independente**: desligar a API, abrir ou recarregar a página, conferir a mensagem de erro, religar a API e clicar em `Tentar novamente`.

**Cenários de aceitação**:

1. Dado que a consulta falha por rede ou HTTP, então a tela mostra uma mensagem de erro e o botão `Tentar novamente`.
2. Dado que a API voltou a responder, quando a pessoa clica em `Tentar novamente`, então a lista é carregada.

## Casos-limite

- Espaços antes ou depois de título e autor são removidos antes do envio.
- A resposta HTTP que não for bem-sucedida é tratada como falha, mesmo que contenha corpo.
- Um cadastro confirmado usa o `id` retornado pela API para identificar o item na lista.
- Login, busca, edição, exclusão, capas e múltiplas páginas estão fora desta versão.

## Comportamento da interface

- Ao iniciar uma consulta, a interface informa que os livros estão sendo carregados.
- Durante o cadastro, o botão `Cadastrar` fica desabilitado para evitar envios duplicados.
- Depois de um cadastro confirmado, o novo livro aparece na lista sem exigir recarregamento.
- Mensagens de erro devem ser compreensíveis e não depender de detalhes técnicos do navegador.
- O botão `Tentar novamente` deve disparar uma nova consulta.

## Acessibilidade e usabilidade

- Cada campo deve possuir um rótulo visível associado ao respectivo controle.
- Os controles devem ser utilizáveis por teclado e manter uma ordem de foco coerente.
- Mensagens de validação e erro devem ficar próximas do formulário ou da lista afetada.

## Requisitos funcionais

- **RF-001**: A página deve consultar os livros ao ser aberta.
- **RF-002**: A página deve exibir título e autor dos livros retornados.
- **RF-003**: A página deve informar quando não houver livros.
- **RF-004**: O formulário deve possuir campos identificados como `Título` e `Autor` e um botão `Cadastrar`.
- **RF-005**: O formulário deve impedir o envio quando título ou autor, após `trim`, estiver vazio.
- **RF-006**: O cadastro deve enviar somente `{ titulo, autor }` e acrescentar à lista o livro confirmado pela API.
- **RF-007**: A consulta deve exibir erro e permitir nova tentativa.
- **RF-008**: O cadastro deve exibir erro e preservar os valores digitados quando falhar.
- **RF-009**: Os livros devem permanecer disponíveis após recarregar a página, por meio da persistência da API local.

## Entidades e contrato

**Livro**: registro do catálogo com `id` gerado pela API, `titulo` e `autor`.

- `GET /livros` → `{ id, titulo, autor }[]`
- `POST /livros` recebe `{ titulo, autor }` e retorna `{ id, titulo, autor }`

## Critérios de sucesso

- **CS-001**: Os livros iniciais aparecem ao abrir a página com a API ativa.
- **CS-002**: Um livro cadastrado aparece sem nova consulta e permanece após recarregar.
- **CS-003**: Nenhum POST é enviado para título ou autor vazio ou só com espaços.
- **CS-004**: Os fluxos de falha da consulta e do cadastro permitem recuperação sem perder os dados digitados.
- **CS-005**: O projeto gera build de produção com `npm run build`.

## Requisitos não funcionais

- **RNF-001**: A página deve funcionar em um navegador moderno na viewport usada na demonstração.
- **RNF-002**: A interface deve ser compreensível sem exigir conhecimento dos endpoints ou do JSON Server.
- **RNF-003**: A página não deve realizar cadastro duplicado enquanto o envio estiver em andamento.
- **RNF-004**: A solução deve manter o escopo de uma página e não depender de autenticação ou serviços externos.

## Premissas e dependências

- A pessoa usuária acessa a página sem login.
- A API local estará disponível em `http://localhost:3000` durante o fluxo normal.
- O JSON Server será responsável por gerar o `id` e persistir os registros no `db.json`.
- O ambiente possui Node.js e permite instalar as dependências do projeto.
- O catálogo é pequeno e destinado à demonstração acadêmica; paginação e busca não são necessárias.

## Decisões registradas

- O cadastro acrescenta o objeto devolvido pelo POST à lista, pois a resposta já contém o `id` gerado.
- A página coordena o estado da lista e as chamadas HTTP; os componentes recebem dados e callbacks por props.
- A API local usa `db.json` como fonte persistente para a demonstração.
