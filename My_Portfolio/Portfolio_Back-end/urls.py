# portfolio_backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin panel
    path('', include('portfolio.urls')),  # Routes to your app's URLs
]