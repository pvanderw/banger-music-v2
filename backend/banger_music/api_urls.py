from django.urls import include, path, re_path

urlpatterns = [
    path('auth/', include('accounts.urls')),
]
