from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

# Create your views here.


# def january(request):
#     return HttpResponse("This works")
# def february(request):
#     return HttpResponse("this is february")
# def march(response):
#     return HttpResponse("this is march")
monthly_challanges = {
    "january": "January Page",
    "february": "february Page",
    "march": "march Page",
    "april": "april Page",
    "may": "may Page",
    "june": "june Page",
    "july": "July Page",
    "august": "August Page",
    "september": "September Page",
    "october": "october Page",
    "november": "november Page",
    "december": "december Page",
}


def monthly_challange(request, month):
    try:
        challange_text = monthly_challanges[month]
    except :
        return HttpResponseNotFound("this month is not supported")
    return HttpResponse(challange_text)


def monthly_number_challange(response, month):
    return HttpResponse(month)
