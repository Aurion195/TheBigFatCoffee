"""
    @author = MATHIEU Thomas
    @author = GARCIA Jérémy
    
    This page permit subscrive own models who can create in django database
"""

from django.contrib import admin
from .models import Post


admin.site.register(Post) 