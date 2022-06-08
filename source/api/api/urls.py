"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

from rest_framework import routers

from livros.api.viewsets
import AutoresViewSet
import CategoriasViewSet
import LivrosViewSet
import LivrosSearchByNomeViewSet
# import LivroViewSet

route = routers.DefaultRouter()

route.register(r'autores', AutoresViewSet, basename='Autores')
route.register(r'categorias', CategoriasViewSet, basename='Categorias')
route.register('livros', LivrosViewSet, basename='Livros')
route.register('buscar/livros', LivrosSearchByNomeViewSet,
               basename='Livros por nome')
# route.register('buscar/livro', LivroViewSet,
#                basename='Livro')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
