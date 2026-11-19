# Checklist de validação — Catálogo de Livros

Marque os itens após executar com `npm run api` e `npm run dev` em terminais separados.

- [x] Com a API ativa, os livros iniciais aparecem ao abrir a página.
- [x] Com `livros: []` no `db.json`, aparece `Nenhum livro cadastrado`.
- [x] Um livro válido aparece após o cadastro e continua após recarregar.
- [x] Título vazio, autor vazio e valores só com espaços não realizam POST.
- [x] Com a API parada, a consulta mostra erro e `Tentar novamente`.
- [x] Após religar a API, `Tentar novamente` recupera a lista.
- [x] Com a API parada durante o cadastro, a mensagem aparece e título/autor são preservados.
- [x] Após religar a API, o cadastro pode ser reenviado.
- [x] Caso adicional do grupo: espaços antes e depois de título/autor removidos antes do POST.
- [x] `db.json` restaurado ao estado inicial.
- [x] `npm run lint` executado: sem erros (2 avisos pré-existentes em `src/api/livros.js`).
- [x] `npm run build` executado: sucesso, `dist/` gerado.

## Resultado observado

- **Data**: 2026-11-18
- **Responsável**: Grupo 06 (SDD)
- **Correções realizadas**: integração T009–T011 concluída (`CatalogoLivros` e `App.jsx`); consulta inicial ajustada para evitar setState síncrono no efeito.
