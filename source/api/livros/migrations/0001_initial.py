# Generated by Django 3.2.9 on 2022-06-07 07:14

from django.db import migrations, models
import django.db.models.deletion
import livros.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Autor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagem', models.ImageField(upload_to=livros.models.upload_image_autor)),
                ('nome', models.CharField(max_length=255, unique=True)),
                ('data_nascimento', models.DateField(verbose_name='data nascimento')),
                ('data_falecimento', models.DateField(null=True, verbose_name='data falecimento')),
            ],
        ),
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagem', models.ImageField(upload_to=livros.models.upload_image_categoria)),
                ('slug', models.CharField(max_length=255, unique=True)),
                ('nome', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Livro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('livro_virtual', models.BooleanField(default=False, verbose_name='livro virtual')),
                ('capa', models.ImageField(upload_to=livros.models.upload_image_livro)),
                ('nome', models.CharField(max_length=255, unique=True)),
                ('data_publicacao', models.DateField(verbose_name='data publicacao')),
                ('quantidade_paginas', models.IntegerField(verbose_name='quantidade paginas')),
                ('quantidade', models.IntegerField(default=1)),
                ('descricao', models.TextField(max_length=600, verbose_name='descricao')),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='livros.autor')),
                ('categorias', models.ManyToManyField(to='livros.Categoria')),
            ],
        ),
    ]
