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
        def setUp(self):
                User.objects.create(username="Thomas", password="qwerty")

        def testLogin(self):
                data = {}
                data["username"] = "Thomas"
                data["mdp"] = "qwerty"
                r = login_user(None)
                print(r)
                #self.assertTrue(.is_active)