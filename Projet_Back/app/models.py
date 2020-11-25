"""
    @author = MATHIEU Thomas
    @author = GARCIA Jérémy
    
    Cette page permet de générer les models que l'on veut créer, les models
    sont en quelques sortes les nouvelles tables que l'on veut inscrire dans la base
    de données de django.
"""

from django.db import models

class PorteFeuille(models.Model):
    username = models.CharField(max_length=30, primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    nombre_action = models.IntegerField()
    valeur = models.IntegerField()
    