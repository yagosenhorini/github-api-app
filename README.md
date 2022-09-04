Este projeto foi criado com:

- Next.js
- Typescript
- React Hook Form
- Styled Components
- Jest/React Testing Library
- Polished
- Context API
- Octokit Github

## Iniciando o Projeto

Para iniciar o projeto, deve-se rodar o seguinte comando:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) para ter acesso à pagina principal.

Dentro dela, você terá um pequeno formulário de busca para a inserção do nome de usuário que deseja procurar no github.

Após enviar o nome, será criado uma linha do tempo em ordem decrescente, pegando dos repositórios mais novos (datados pelo ano) até os mais antigos, contendo também suas respectivas datas de atualização de url de acesso aos repositórios.

## Suite de testes

Para rodar a suite de testes, tem-se dois comandos:

```bash
yarn test
# ou
yarn test:watch (para rodar em modo watch)
```
