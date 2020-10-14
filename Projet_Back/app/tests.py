"""
        @author = MATHIEU Thomas
        @author = GARCIA Jérémy
        
        Cette page permet de faire des test unitaires de chaque route URL afin de vérifier son bon
        fonctionnement à travers chaque test
"""
from django.test import TestCase
from rest_framework.test import RequestsClient
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
        def setUp(self):
                self.factory = RequestsClient()
                User.objects.create_user(username="Tibus", password="lucien")

        def testRegister(self):
                """
                Test register user if he doesn't exist in database
                """
                dataBis = {"username": "legrosgarcia", 
                        "email" : "tamerelapute@jetebaise.com",
                        "password" : "lucien2020",
                        "firstname" : "Charly",
                        "lastname" : "Croupier"}
                data = json.dumps(dataBis)
                r = self.factory.post("http://localhost:8000/register", data = data)
                self.assertEqual(r.status_code, 200)

                rBis = self.factory.post("http://localhost:8000/register", data = data)
                self.assertEqual(rBis.status_code, 203)
                
        def testLoginUser(self):
                """
                Test login function
                """
                dataBase = {"username":"Tibus", "password":"lucien"}
                data = json.dumps(dataBase)
                r = self.factory.post("http://localhost:8000/login_user", data = data)
                self.assertEqual(r.status_code, 200)

                dataBaseBis = {"username":"Tybus", "password":"lucerien"}
                dataBis = json.dumps(dataBaseBis)
                rBis = self.factory.post("http://localhost:8000/login_user", data = dataBis)
                self.assertEqual(rBis.status_code, 204)

        def testChangePassword(self):
                """
                Test change password user
                """
                dataBase = {"username":"Tibus", "mdp":"lucien", "newMdp" : "charly2020"}
                data = json.dumps(dataBase)
                r = self.factory.post("http://localhost:8000/change_password", data = data)
                user = User.objects.get(username="Tibus")
                self.assertIsNotNone(user)
                self.assertTrue(user.check_password("charly2020"))