from django.contrib import admin
from .models import Tariff

@admin.register(Tariff)
class TariffAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "region")
    search_fields = ("name", "region", "cpu", "ram", "storage")
    list_filter = ("region",)
