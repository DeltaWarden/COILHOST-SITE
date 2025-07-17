from django.db import models

class Category(models.Model):
    name = models.CharField("Название категории", max_length=100)
    slug = models.SlugField("Слаг", max_length=100, unique=True)

    def __str__(self):
        return self.name

class Tariff(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="tariffs", verbose_name="Категория")
    name = models.CharField("Название", max_length=255)
    cpu = models.CharField("Процессор", max_length=255)
    ram = models.CharField("ОЗУ", max_length=255)
    storage = models.CharField("Память", max_length=255)
    ethernet = models.CharField("Ethernet", max_length=100, blank=True, null=True)
    ddos = models.CharField("DDoS", max_length=100, blank=True, null=True)
    price = models.DecimalField("Цена", max_digits=10, decimal_places=2)
    region = models.CharField("Регион", max_length=100)

    def __str__(self):
        return self.name
