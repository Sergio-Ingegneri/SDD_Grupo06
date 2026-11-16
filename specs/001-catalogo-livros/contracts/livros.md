# Contrato HTTP: Livros

**Base local**: `http://localhost:3000`

## GET `/livros`

Retorna todos os livros persistidos no `db.json`.

**Resposta de sucesso — 200**

```json
[
  { "id": "1", "titulo": "Dom Casmurro", "autor": "Machado de Assis" }
]
```

**Regra do cliente**: qualquer resposta cujo `response.ok` seja falso ou qualquer falha de rede deve ser sinalizada como erro para a página exibir `Tentar novamente`.

## POST `/livros`

Cria um livro. O cliente envia somente os campos preenchidos; o servidor gera o `id`.

**Requisição — `Content-Type: application/json`**

```json
{ "titulo": "O Cortiço", "autor": "Aluísio Azevedo" }
```

**Resposta de sucesso — 201/200**

```json
{ "id": "2", "titulo": "O Cortiço", "autor": "Aluísio Azevedo" }
```

**Regra do cliente**: qualquer resposta cujo `response.ok` seja falso ou qualquer falha de rede deve rejeitar a operação. A página não deve limpar os campos quando isso acontecer.

## Tipos de dados

| Campo | Tipo | Obrigatório | Regra |
|---|---|---:|---|
| `id` | string ou number | resposta | gerado pela API |
| `titulo` | string | envio e resposta | não pode ser vazio após `trim` |
| `autor` | string | envio e resposta | não pode ser vazio após `trim` |
