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
from django.core.exceptions import ObjectDoesNotExist

def all_user(request):        
        """
        Fonction permettant de récuper tous les utilisateurs enregistré
        dans la BDD
        
        Args:
                request ([type]): requête Http

        Returns:
                JsonResponse : la réponse en JSON de la fonction
        """
        
        data = User.objects.all()
        response = json.loads(serialize('json', data))

        return JsonResponse(response, safe=False)


def login_user(request):
        """
        Fonction permettant de savoir si l'utilisateur peut se connecter,
        la fonction va vérifier que l'individu est inscrit dans la BDD et s'il
        y est il peut se connecter sinon il reste sur l'écran d'acceuil
        
        Args:
                request ([type]): requête Http

        Returns:
                JsonResponse : la réponse en JSON de la fonction
        """
        user = authenticate(username=request.POST["username"], password=request.POST["mdp"])
        print(request.POST["username"])
        print(request.POST["mdp"])
        if user is not None:
                print("coucou")
                responseJson = {"connected":"True"}
                return JsonResponse(responseJson, safe=False)
        else:
                print("nooooooooo")
                return JsonResponse({"connected":"False"}, safe=False)

def change_password(request):
        """
        Fonction permettant de changer le mot de passe pour l'utilisateur

        Args:
                request ([type]): requête Http

        Returns:
                JsonResponse : la réponse en JSON de la fonction
        """
        identifiant = request.POST["username"]
        newPassword = request.POST["mdp"]
        
        user = User.objects.get[identifiant]
        
        if user is not None:
                user.set_password(newPassword)
                return JsonResponse({"statut" : "OK"})
        else:
                return JsonResponse({"statut" : "KO"})

def register(request):
        """
        Fonction permettant d'ajouter un utilisateur dans la base de données, en vérifiant
        s'il n'existe

        Args:
                request ([type]): requête Http
        
        Returns:
                JsonResponse : la réponse en JSON de la fonction
        """
        username = request.POST["username"]
        mdp = request.POST["mdp"]
        mail = request.POST["mail"]
        firstname = request.POST["firstname"]
        lastname = request.POST["lastname"]
        
        try:
                userAlreadyExist = User.objects.get(username=username)
                
                return JsonResponse({'statut' : 'KO', 'motif' : 'utilisateur existant'})
        except ObjectDoesNotExist :
                user = User.objects.create_user(username=username, email= mail, 
                                                password=mdp, first_name= firstname,
                                                last_name=lastname)
                user.save()
                return JsonResponse({'statut' : 'OK', 'motif' : 'utilisateur cree'})