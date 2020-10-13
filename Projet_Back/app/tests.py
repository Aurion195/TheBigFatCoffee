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
from django.http import HttpRequest, JsonResponse
from django.core.serializers import serialize
from django.contrib.auth import authenticate
from app.views import login_user
import json
import unittest

# Create your tests here.
class TestUnitaireUser(TestCase):
        def testRegister(self):
                """
                Test register user if he doesn't exist in database
                """
                data = {"username": "legrosgarcia", 
                        "mail" : "tamerelapute@jetebaise.com",
                        "mdp" : "lucien2020",
                        "firstname" : "Charly",
                        "lastname" : "Croupier"}
                
                r = requests.post("Http://localhost:8000/register", data = data)
                data = User.objects.get(username="legrosgarcia")
                self.assertIsNotNone(data)
                
        def testLoginUser(self):
                """
                Test login function
                """
                data = {"username":"legrosgarcia", "mdp":"charly2020"}
                r = requests.post("http://localhost:8000/login_user",  data = data)
                expectResponseJson = {"connected":"True"}
                self.assertEqual(expectResponseJson, r.json())

        def testChangePassword(self):
                """
                Test change password user
                """
                data = {"username":"legrosgarcia", "mdp":"lucien2020", "newMdp" : "charly2020"}
                r = requests.post("http://localhost:8000/change_password", data = data)
                user = User.objects.get(username="legrosgarcia")
                self.assertIsNotNone(user)
                self.assertTrue(user.check_password("charly2020"))