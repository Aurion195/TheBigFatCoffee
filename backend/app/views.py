"""
        @author = MATHIEU Thomas
        @author = GARCIA Jérémy
        
        Cette page permet de gérer toutes les routes de l'API REST
"""
from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpRequest, JsonResponse
from django.core.serializers import serialize
from django.contrib.auth import authenticate
import json

"""
        Fonction permettant de récuper tous les utilisateurs enregistré
        dans la BDD
"""
def all_user(request):
        data = User.objects.all()
        response = json.loads(serialize('json', data))
      
        return JsonResponse(response, safe=False)

"""
        Fonction permettant de savoir si l'utilisateur peut se connecter,
        la fonction va vérifier que l'individu est inscrit dans la BDD et s'il
        y est il peut se connecter sinon il reste sur l'écran d'acceuil
"""
def login_user(request):
        user = authenticate(username=request.POST["username"], password=request.POST["mdp"])
        
        if user is not None:
                responseJson = {"connected":"True"}
                return JsonResponse(responseJson, safe=False)
        else:
                return JsonResponse({"connected":"False"}, safe=False)