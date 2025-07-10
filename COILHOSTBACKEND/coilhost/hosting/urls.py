from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TariffViewSet

router = DefaultRouter()
router.register(r'tariffs', TariffViewSet)

urlpatterns = [
    path('servers/', include(router.urls)),
]
