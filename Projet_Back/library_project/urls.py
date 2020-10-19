"""
	@author = MATHIEU Thomas
	@author = GARCIA Jérémy
	
	Create and manage differentes routes for the API.

	ex : 
		path('url d'appel', 'nom fonction', name = 'nom de la fonction')
"""
from django.contrib import admin
from django.urls import path
from app.views import all_user, login_user, change_password, register, chart_coffee

urlpatterns = [
	path('admin/', admin.site.urls),
	path('allUser/', all_user, name='all_user'),
	path('login_user', login_user, name='login_user'),
	path('change_password', change_password, name='change_password'),
	path('register', register, name='register'),
	path('chart_coffee', chart_coffee, name='chart_coffee')
]
