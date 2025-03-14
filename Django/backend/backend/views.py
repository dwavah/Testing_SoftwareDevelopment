# myproject/views.py
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Welcome to the API. Please use /api/users/ and /api/orders/ for functionality."})
