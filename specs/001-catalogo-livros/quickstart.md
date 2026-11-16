# Quickstart de validação

## Pré-requisitos

- Node.js instalado
- Dependências instaladas com `npm install`

## Executar

Em um terminal:

```bash
npm run api
```

Em outro:

```bash
npm run dev
```

Abra o endereço informado pelo Vite.

## Fluxo mínimo

1. Confirme que o livro inicial aparece.
2. Cadastre um livro com título e autor.
3. Recarregue a página e confirme a persistência.
4. Pare a API e confirme o erro da consulta.
5. Ligue a API novamente e use `Tentar novamente`.
6. Pare a API, tente cadastrar e confirme que os campos permanecem preenchidos.
7. Restaure o `db.json` e execute `npm run build`.

O resultado deve ser registrado em [checklists/validacao.md](checklists/validacao.md).
