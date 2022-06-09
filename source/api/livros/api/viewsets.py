from rest_framework import viewsets, filters
from livros.api import serializers
from livros import models

class AutoresViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AutoresSerializer
    queryset = models.Autor.objects.all()

class CategoriasViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CategoriasSerializer
    queryset = models.Categoria.objects.all()

class LivrosViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.LivrosSerializer
    queryset = models.Livro.objects.all()

class LivrosSearchByNomeViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.LivrosSerializer
    search_fields = ['nome']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Livro.objects.all()
