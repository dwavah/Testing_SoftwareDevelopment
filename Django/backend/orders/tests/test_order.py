# orders/tests/test_order.py
import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model

User = get_user_model()

@pytest.mark.django_db
class TestOrderAPI:

    def setup_method(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username="testuser", password="testpass123")
        self.client.force_authenticate(user=self.user)

    def test_create_order(self):
        url = reverse('create-order')
        data = {"item_name": "Laptop", "quantity": 1}
        response = self.client.post(url, data, format='json')
        
        # 🔍 Debugging: Print response to see error details
        print("\nResponse Status:", response.status_code)
        print("Response Data:", response.data)

        assert response.status_code == 201
