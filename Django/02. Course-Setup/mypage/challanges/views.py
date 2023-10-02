from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse

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


def monthly_number_challange(request, month):
    
    months= list(monthly_challanges.keys())
    if month>len(months):
        return HttpResponseNotFound("Invalid Month")
    redirect_month=months[month-1]
    redirect_path = reverse("month-challange", args=[redirect_month])
    return HttpResponseRedirect(redirect_path)

def index(request):
    list_items =""
    months =list(monthly_challanges.keys())

    for month in months:
        capitalize_month = month.capitalize()
        month_path = reverse("month-challange", args=[month])
        list_items += f"<li><a href =\"{month_path}\">{capitalize_month}</a></li>"
    response_data =f"<ul>{list_items}<ul>"
    return HttpResponse(response_data)
