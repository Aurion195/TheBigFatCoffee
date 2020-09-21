"""
	@author = MATHIEU Thomas
    	@author = GARCIA Jérémy
	
    	Cette page permet de créer et de gérer les différentes routes
    	qui seront présent tout du lonf de cette API, permet de les identifier
    	et de créer les fonctions qui seront appellé quand on fait appel à cette URL
    
    	ex : 
		path('url d'appel', 'nom fonction', name = 'nom de la fonction')
"""
from django.contrib import admin
from django.urls import path
from app.views import all_user, login_user

urlpatterns = [
    	path('admin/', admin.site.urls),
    	path('allUser/', all_user, name='all_user'),
    	path('login_user', login_user, name='login_user')
]
