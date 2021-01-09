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
- Ecrire : pip3 install -r requierement.txt

> React

-npm install

# Lancement du projet

> Django

- Ouvrir un terminal
- Aller dans le dossier "TheBigFatCoffee/Projet_Back/"
- Ecrire : python3 manage.py runserver

Si vous voullez ajouter des personnes dans la base de données avant de lancer le programme

- python3 manage.py loaddata fixtures/mydata.json

Si vous voullez supprimer toutes les données de la base de données

- python3 manage.py flush

Si vous voullez lancer les test unitaires de Django

- python3 manage.py test

> React

- Ouvrir un terminal
- Aller dans le dossier "TheBigFatCoffee/Front/"
- Ecrire : npm run start
