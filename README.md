# mylib
Um projeto de exemplo feito em Django, ReactJS & PostgreSQL

## Dependências
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/engine/reference/commandline/compose/)
  - [NodeJS](https://nodejs.org)

## Planejamento
### [Projeção e modelagem](docs/UML.pdf)
  Com o pensamento de que linguagens e frameworks são apenas ferramentas para o desenvolvimento de soluções, antes de por a mão no código foram esquematizados [modelos UML](https://pt.wikipedia.org/wiki/UML) ([docs/UML.pdf](docs/UML.pdf)) para realizar o planejamento do que seria efetuado. Os modelos criados foram o Diagrama de Casos de Uso e Diagrama de Modelagem Relacional, devido ao nível de complexidade do projeto e a quantidade de programadores (um) não se viu necessidade de outros modelos. 

### [Design UX/UI](https://www.figma.com/file/U1wCAIwNOQrClsagswuXdY/MyLib_?node-id=0%3A1)
Após compreender o problema e projetar uma solução com [UML](https://pt.wikipedia.org/wiki/UML) o próximo passo para prototipação era o Design UX/UI. Como ferramenta de desenvolvimento foi escolhido o Figma, por ser extremamente completo, ter foco colaborativo e apresentar baixa complexidade de uso foi uma escolha ideal para o projeto. Uma visualização completa do que foi planejado para essa etapa do projeto pode ser encontrada clicando [aqui](https://www.figma.com/file/U1wCAIwNOQrClsagswuXdY/MyLib_?node-id=0%3A1).


### [Execução](source)
Como tecnologias para o projeto foram utilizados Django, ReactJS & PostgreSQL. Todas essas tecnologias foram requisitos obrigatórios, mas vale a reflexão sobre o que pode ser levado em consideração para se escolher tais ferramentas.  

Considerando o mercado brasileiro de tecnologia temos um cenário onde progamadores experientes são levados para fora por empresas de outros países e novos programadores precisam ser ensinados, o que é apenas uma pequena representação da volaticidade do mercado de programação em si. Dito isso, quem contrata desenvolvedores precisa estar preparado para a saída e entrada de profissionais em um períodos inesperados, escolher Python e JavaScript como linguagens principais da empresa é escolher uma curva de aprendizado acessível para novos desenvolvedores sem perder a confiabilidade de tecnologias amplamente utilizadas mundo a fora.
Equanto que a escolha dos Framworks Django e ReactJS, juntamente com PostgreSQL garantem escalabilidade a qualquer projeto.  
A versatilidade e agilidade promovida por escolhas como essa fazem total diferença na produtividade dos times de desenvolvimento.

## Requisitos
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
