# mylib
Um projeto de exemplo feito em Django

## Requisitos
:information_source: Alguns dos requisitos foram alterados e alguns dados não solcitados foram adicionados ao projeto final.

### Estruturais
  - [X] Desenvolvimento fullstack - Django;
  - [X] Banco de dados e modelagem relacional - PostgreSQL;
  - [X] Versionamento de código - Git;

### Dados
  - [X] Cadastro de Livros contendo os seguintes campos:  
    (:warning: `somente por api na versão atual`):
    - [X] Nome;
    - [X] Categoria;
    - [X] Capa do livro (imagem);
    - [X] Autor;
    - [X] Data de publicação;
    - [X] Quantidade de páginas;
  - [X] Listar os livros cadastrados;
  - [X] Editar um livro existente  
    (:warning: `somente por api na versão atual`);
  - [X] Deletar um livro  
    (:warning: `somente por api na versão atual`);

### Regras
  - [X] Não é permitido adicionar livros com o mesmo nome;
  - [ ] A Data de publicação dos livros deve está compreendida entre os anos de 1500 á 2022;
  - [X] O usuário precisa ser alertado através de notificações caso esteja infringindo alguma regra
durante o cadastro ou atualização;  
(:warning: `somente por api na versão atual`)

### Outras
  - [X] Listar livros por categoria;  
    (:warning: `somente por api na versão atual`)
  - [ ] Listar livros por data de publicação;  
  - [X] Criação de um front-end desacoplado do projeto (React ou Vue);  
    (:warning: `somente por api na versão atual`)
  - [X] Conteinerização (Docker-compose);

## Dependências
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/engine/reference/commandline/compose/)
  - [NodeJS](https://nodejs.org)

## Setup
Após clonar o repositório  

Entrar na pasta do projeto
```shell
cd mylib
```

Entrar na pasta do código frontend
```shell
cd source/frontend
```

Instalar módulos
```shell
npm install
```

Voltar para a pasta principal
```shell
cd ../..
```

Iniciar docker

```shell
docker-compose up -d
```

Acionar migrations

```shell
docker-compose exec api /usr/local/bin/python manage.py migrate 
```

## Primeiro Acesso

Durante o primeiro acesso não haverão livros, autores ou categorias cadastradas. Logo deve-se cadastrar primeiramente pelo menos um (1) autor, pelo menos uma (1) categoria e depois então se podem cadastrar livros.

Por padrão a url relacionada a cada setor da aplicação é:
  - **frontend**: [localhost:3000](localhost:3000)
  - **api**: [localhost:8000](http://localhost:8000)
  - **db**: [localhost:5432](http://localhost:5432)

Como algumas das funções do frontend não estão finalizadas o cadastro pode ser feito diretamente na api, que quando acessada pelo navegador possui uma interface padrão criada pelo framework.
  - Listagem e cadastro de atores deve estar em:  
    [localhost:8000/autores](http://localhost:8000/autores)
  - Listagem e cadastro de categorias deve estar em:  
    [localhost:8000/categorias](http://localhost:8000/categorias)
  - Listagem e cadastro de livros deve estar em:  
    [localhost:8000/livros](http://localhost:8000/livros)
