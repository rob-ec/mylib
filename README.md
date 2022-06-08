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