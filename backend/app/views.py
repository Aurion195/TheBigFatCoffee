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

def login(request, *args, **kwargs):
        identifiant = kwargs.get('username')
        mdp = kwargs.get('mdp')
        user = authenticate(username=identifiant, password=mdp)
        
        if user is not None:
                responseJson = {"connected":"True"}
                return JsonResponse(responseJson, safe=False)
        else:
                return JsonResponse(False, safe=False)