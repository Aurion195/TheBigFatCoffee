"""
        @author = MATHIEU Thomas
        @author = GARCIA Jérémy
        
        Cette page permet de gérer toutes les routes de l'API REST
"""
from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpRequest, JsonResponse
from django.core.serializers import serialize
from django.contrib.auth import authenticate, login, logout
import json
from django.core.exceptions import ObjectDoesNotExist
import base64

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
                JsonResponse : JSON response like {'statut' : 'OK'}
        """
        form_data = json.loads(request.body.decode())

        #Si l'utilisateur est dans la base de données on va le connecté
        try :
                user = authenticate(username=form_data["username"], password=form_data["password"])
                
                if user is not None:
                        responseJson = {"statut":"OK"}
                        return JsonResponse(responseJson, safe=False, status=200)
                else:
                        raise ObjectDoesNotExist
        except ObjectDoesNotExist:
                return JsonResponse({"statut":"KO"}, safe=False, status=204)

def change_password(request):
        """
        Function who permit a one user to change his password

        Args:
                request ([type]): Http request

        Returns:
                JsonResponse : JSON response like {'statut' : 'OK', 'motif' : 'exemple motif'}
        """
        form_data = json.loads(request.body.decode())
        identifiant = form_data["username"]
        oldPassword = form_data["mdp"]
        newPassword = form_data["newMdp"]

        user = User.objects.get(username=identifiant)
        
        if user is not None:
                user.set_password(newPassword)
                user.save()
                return JsonResponse({"statut" : "OK"}, status=200)
        else:
                return JsonResponse({"statut" : "KO"}, status=204)

def register(request):
        """
        Register an user in database if he doesn't exist

        Args:
                request ([type]): Http request
        
        Returns:
                JsonResponse : JSON response {'statut' : 'OK', 'motif' : 'exemple motif'}
        """
        
        form_data = json.loads(request.body.decode())
        username = form_data["email"]
        mdp = form_data["password"]
        mail = form_data["email"]
        firstname = form_data["firstname"]
        lastname = form_data["lastname"]

        try:
                userAlreadyExist = User.objects.get(username=mail)
                return JsonResponse({'statut' : 'KO', 'motif' : 'utilisateur existant'}, status=203)
        except ObjectDoesNotExist :
                user = User.objects.create_user(username=username, email= mail, 
                                                password=mdp, first_name= firstname,
                                                last_name=lastname)
                user.save()
                return JsonResponse({'statut' : 'OK', 'motif' : 'utilisateur cree'}, status=200)

def logout(request):
        """
        Logout an user if he is previously login

        Args:
             request ([type]): Http request

        Returns:
                JsonResponse : JSON Response ()   
        """
        logout(request)
        return JsonResponse({'statut' : 'OK', 'motif' : 'utilisateur deconnecter'}, status=200)

def chart_coffee(request):
        """
        Send details to JSON Coffee to front-end 

        Args:
                request ([type]): Http request
        
        Returns:
                JsonResponse : JSON with data-coffee
        """
        f = open("data_coffee/coffe.json")

        data = json.load(f)

        return JsonResponse(data, safe=False, status=200)

def chart_coffee_details(reques, slug):
        """
        This function permit to send differents data in front, with the 
        parameter slug

        Args:
                request ([type]): Http request
                slug ([str]): Name of the coffee supplier
        
        Returns:
                JsonResponse : JSON with data-coffee / JSON error
        """

        try :
                f = open("data_coffee/"+slug+".json")

                data = json.load(f)

                return JsonResponse(data, safe=False, status=200)
        except Exception :
                data = {"Statut":"KO", "Response":"Vous n'avez pas rentré le bon nom"}

                return JsonResponse(data, safe=False, status=204)