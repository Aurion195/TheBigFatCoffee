# Generated by Django 3.1.2 on 2020-11-25 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PorteFeuille',
            fields=[
                ('username', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('nombre_action', models.IntegerField()),
                ('valeur', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Person',
        ),
    ]