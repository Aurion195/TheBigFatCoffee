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
        Check if user can connect on database, function chek if user is register
        on database.
        
        Args:
                request ([type]): Http request

        Returns:
                JsonResponse : JSON response like {'connected' : 'True'}
        """

        user = authenticate(username=request.POST.get("username"), password=request.POST.get("mdp"))
        if user is not None:
                responseJson = {"connected":"True"}
                return JsonResponse(responseJson, safe=False)
        else:
                return JsonResponse({"connected":"False"}, safe=False)

def change_password(request):
        """
        Function who permit a one user to change his password

        Args:
                request ([type]): Http request

        Returns:
                JsonResponse : JSON response like {'statut' : 'OK', 'motif' : 'exemple motif'}
        """
        identifiant = request.POST["username"]
        oldPassword = request.POST["mdp"]
        newPassword = request.POST["newMdp"]
        
        user = User.objects.get(username=identifiant)
        
        if user is not None:
                user.set_password(newPassword)
                user.save()
                return JsonResponse({"statut" : "OK"})
        else:
                return JsonResponse({"statut" : "KO"})

def register(request):
        """
        Register an user in database if he doesn't exist

        Args:
                request ([type]): Http request
        
        Returns:
                JsonResponse : JSON response {'statut' : 'OK', 'motif' : 'exemple motif'}
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