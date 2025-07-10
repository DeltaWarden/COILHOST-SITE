from django.db import models

class Tariff(models.Model):
    name = models.CharField("Название", max_length=255)
    cpu = models.CharField("Процессор", max_length=255)
    ram = models.CharField("ОЗУ", max_length=255)
    storage = models.CharField("Память", max_length=255)
    description = models.TextField("Описание тарифа")
    price = models.DecimalField("Цена", max_digits=10, decimal_places=2)
    region = models.CharField("Регион", max_length=100)

    def __str__(self):
        return self.name
