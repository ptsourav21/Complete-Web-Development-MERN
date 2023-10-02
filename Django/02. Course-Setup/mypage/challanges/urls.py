from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("<int:month>", views.monthly_number_challange),
    path("<str:month>", views.monthly_challange, name="month-challange"),
    ]
