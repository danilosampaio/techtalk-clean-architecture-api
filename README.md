# Clean Architecture Node.js API
> Projeto criado na TechTalk - Clean Architecture com Node.js

![Build & Test](https://github.com/danilosampaio/techtalk-clean-architecture-api/actions/workflows/node.js.yml/badge.svg)
[![codecov](https://codecov.io/gh/danilosampaio/techtalk-clean-architecture-api/branch/main/graph/badge.svg?token=9HIJK9B435)](https://codecov.io/gh/danilosampaio/techtalk-clean-architecture-api)

## Requisitos

### Requisitos Funcionais
> Devem ser mapeados as funcionalidades com a visão do usuário final.

- Criar usuário
- Listar Usuários


### Requisitos Não-Funcionais
> Devem ser mapeados os requisitos na visão do desenvolvedor para atender as funcionalidades.

- Utilizar express para criação das rotas da API REST
- Utilizar banco de dados relacional para persistir dos dados da aplicação

## Arquitetura

- __Clean Architecture:__
estrutura da aplicação segue os padrões da [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

![Arquitetura](assets/API_Architecture.png)

## Run

Run application using docker (up database and api containers):

```sh
npm start
```

Run application using ts-node-dev (you must have started the database before it):

```sh
npm run dev
```

Start only the database container:

```sh
docker-compose up -d pg_database
```

## Stack

### Geral
> Frameworks e bibliotecas utilizadas na aplicação.

- __Typescript:__
é a linguagem padrão para projetos Node.js, pois permite uma arquitetura mais robusta, padrões de projeto, e boas práticas.

- __Express:__
é o framework utilizado na construção da API REST.

- __Swagger:__
todas os endpoints são documentados utilizando o `Swagger`.

- __Postgresql:__
o SGBD utilizado na camada de dados é o `Postgresql`.

- __TypeORM:__
o ORM utilizado na camada de dados é o `TypeORM`.

### CI/CD
> [Integração Contínua](https://www.atlassian.com/br/continuous-delivery/continuous-integration)

- __Docker:__
A aplicação Node.js and o banco de dados rodam dentro de container `Docker`.

- __ESlint:__
para análise de código (Linting), usando como base o preset `airbnb`.

- __Husky:__
para git hooks, como rodar os testes sempre antes de um git commit.

- __Jest:__
os testes unitários e de integração utilizam o framework `Jest`.


## Author

Danilo Sampaio (jose.sampaio@venturus.org.br)
