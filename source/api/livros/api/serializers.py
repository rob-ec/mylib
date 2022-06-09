from rest_framework import serializers
from livros import models

class AutoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Autor
        fields = '__all__'

class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Categoria
        fields = '__all__'

class LivrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Livro
        fields = '__all__'
