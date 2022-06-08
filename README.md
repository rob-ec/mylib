# mylib
Um projeto de exemplo feito em Django

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