from django.urls import include, path, re_path

urlpatterns = [
    path('v1/', include('accounts.urls')),
]
