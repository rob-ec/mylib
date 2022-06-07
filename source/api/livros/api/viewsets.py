from rest_framework import viewsets
#from rest_framework.permissions import IsAuthenticated
from livros.api import serializers
from livros import models

class AutoresViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated, )
    serializer_class = serializers.AutoresSerializer
    queryset = models.Autor.objects.all()

class CategoriasViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated, )
    serializer_class = serializers.ClategoriasSerializer
    queryset = models.Categoria.objects.all()

class LivrosViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated, )
    serializer_class = serializers.LivrosSerializer
    queryset = models.Livro.objects.all()
