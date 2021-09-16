from django.urls import include, path, re_path

urlpatterns = [
    path('', include('accounts.urls')),
]
