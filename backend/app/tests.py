"""
        @author = MATHIEU Thomas
        @author = GARCIA Jérémy
        
        Cette page permet de faire des test unitaires de chaque route URL afin de vérifier son bon
        fonctionnement à travers chaque test
"""
from django.test import TestCase
from django.contrib.auth.models import User
from django.http import HttpRequest, JsonResponse
import requests
from django.contrib.auth.models import User
from django.http import HttpRequest, JsonResponse
from django.core.serializers import serialize
from django.contrib.auth import authenticate
from app.views import login_user
import json

# Create your tests here.

class TestUnitaireUser(TestCase):
        
        """
                Avant chaque appel de fonction, on va faire cette fonction en 
                premier
        """
        def setUp(self):
                User.objects.create(username="Thomas", password="qwerty")
