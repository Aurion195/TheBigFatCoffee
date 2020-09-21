from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpRequest, JsonResponse
from django.core.serializers import serialize
from django.contrib.auth import authenticate
import json

# Create your views here.
def all_user(request):
        data = User.objects.all()
        response = json.loads(serialize('json', data))
      
        return JsonResponse(response, safe=False)

#Fonction permettant à l'utilisateur de se connecter et de se loger
def login_user(request):
        user = authenticate(username=request.POST["username"], password=request.POST["mdp"])
        if user is not None:
                responseJson = {"connected":"True"}
                return JsonResponse(responseJson, safe=False)
        else:
                return JsonResponse({"connected":"False"}, safe=False)