"""
    @author = MATHIEU Thomas
    @author = GARCIA Jérémy
        
    Cette page permet d'inscrire nos models que l'on va créer dans la base de données de  
    django
"""

from django.contrib import admin
from .models import Post


admin.site.register(Post) 