from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

# Create your views here.


# def january(request):
#     return HttpResponse("This works")
# def february(request):
#     return HttpResponse("this is february")
# def march(response):
#     return HttpResponse("this is march")

def monthly_challange(request, month):
    challange_text = None
    if month =='january':
        challange_text = "January page"
    elif month == "february":
        challange_text= "February Page"
    elif month == "march":
        challange_text="March Page"
    else:
        return HttpResponseNotFound("This month is not supported")
    return HttpResponse(challange_text)

def monthly_number_challange(response, month):
    return HttpResponse(month)