from django.contrib import admin
from .models import Tariff, Category

@admin.register(Tariff)
class TariffAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "region", "ethernet", "ddos")
    search_fields = ("name", "region", "cpu", "ram", "storage")
    list_filter = ("region",)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    search_fields = ("name", "slug")
