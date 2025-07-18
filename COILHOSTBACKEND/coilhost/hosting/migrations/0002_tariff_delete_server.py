# Generated by Django 5.2.4 on 2025-07-08 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hosting', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tariff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('cpu', models.CharField(max_length=255, verbose_name='Процессор')),
                ('ram', models.CharField(max_length=255, verbose_name='ОЗУ')),
                ('storage', models.CharField(max_length=255, verbose_name='Память')),
                ('description', models.TextField(verbose_name='Описание тарифа')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Цена')),
                ('region', models.CharField(max_length=100, verbose_name='Регион')),
            ],
        ),
        migrations.DeleteModel(
            name='Server',
        ),
    ]
