from django.urls import path
from . import views

urlpatterns = [path("<int:month>", views.monthly_number_challange),
               path("<str:month>", views.monthly_challange)]
