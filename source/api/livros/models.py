from django.db import models

def upload_image_livro(instance, filename):
    return f"{instance.id}-{filename}"

def upload_image_autor(instance, filename):
    return f"{instance.nome}-{filename}"

def upload_image_categoria(instance, filename):
    return f"{instance.slug}-{filename}"

class Autor(models.Model):
    imagem = models.ImageField(upload_to=upload_image_autor)
    nome = models.CharField(max_length=255, unique=True)
    data_nascimento = models.DateField('data nascimento')
    data_falecimento = models.DateField('data falecimento', null=True)

class Categoria(models.Model):
    imagem = models.ImageField(upload_to=upload_image_categoria)
    slug = models.CharField(max_length=255, unique=True)
    nome = models.CharField(max_length=255, unique=True)

class Livro(models.Model):
    livro_virtual = models.BooleanField('livro virtual', default=False)
    capa = models.ImageField(upload_to=upload_image_livro)
    nome = models.CharField(max_length=255, unique=True)
    data_publicacao = models.DateField('data publicacao')
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)
    categorias = models.ManyToManyField(Categoria)
    quantidade_paginas = models.IntegerField('quantidade paginas')
    quantidade = models.IntegerField(default=1)
    descricao = models.TextField('descricao', max_length=600)
