# TheBigFatCoffee

Un site pour acheter et vendre des actions de café

## Objectifs
Créer un site web en react utilisant un back Django.
> Author : GARCIA Jérémy & MATHIEU Thomas

> Version : 2.20

> Date : 10/01/2021

# Table des matières
0. [Objectifs](#Objectifs)
1. [Installation](#Installation)
2. [Lancement du projet](#Lancement-du-projet)

# Installation

> Django 

- Récupérer le fichier requierement.txt
- Ouvrir un terminal
- Ecrire : _pip3 install -r requierement.txt_

> React

- _npm install_

# Lancement du projet

> Django

- Ouvrir un terminal
- Aller dans le dossier _TheBigFatCoffee/Projet_Back/_
- Ecrire : _python3 manage.py runserver_

Si vous voullez ajouter des personnes dans la base de données avant de lancer le programme

- _python3 manage.py loaddata fixtures/mydata.json_

Si vous voullez supprimer toutes les données de la base de données

- _python3 manage.py flush_

Si vous voullez lancer les test unitaires de Django

- _python3 manage.py test_

> React

- Ouvrir un terminal
- Aller dans le dossier _TheBigFatCoffee/Front/_
- Ecrire : _npm run start_
