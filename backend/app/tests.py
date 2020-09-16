from django.test import TestCase
from django.contrib.auth.models import User
import requests

# Create your tests here.

class TestUnitaireUser(TestCase):
        def setUp(self):
                User.objects.create(username="Thomas", password="qwerty")

        def testLogin(self):
                data = {"username":"Thomas", "mdp":"qwerty"}
                r = requests.get("http://localhost:8000/login/Thomas/qwerty",  data = data)
                print(r.text)
                print(r.url)