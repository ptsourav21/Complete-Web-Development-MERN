from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse
from django.template.loader import render_to_string

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
    "december": None,
}

def monthly_challange(request, month):
    try:
        challange_text = monthly_challanges[month]
        response_data = render_to_string("challanges/challange.html")
        return render(request ,"challanges/challange.html", {
            "text": challange_text,
            "month_name": month,
            })
    except :
        return HttpResponseNotFound("this month is not supported")
    


def monthly_number_challange(request, month):
    
    months= list(monthly_challanges.keys())
    if month>len(months):
        return HttpResponseNotFound("Invalid Month")
    redirect_month=months[month-1]
    redirect_path = reverse("month-challange", args=[redirect_month])
    return HttpResponseRedirect(redirect_path)

def index(request):
    months =list(monthly_challanges.keys())
    return render(request, "challanges/index.html", {
        "months" : months
    })
