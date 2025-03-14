# orders/urls.py

from django.urls import path
from .views import OrderCreateView, OrderListView

urlpatterns = [
    path('orders/', OrderListView.as_view(), name='list-orders'),
    path('orders/create/', OrderCreateView.as_view(), name='create-order'),
]
