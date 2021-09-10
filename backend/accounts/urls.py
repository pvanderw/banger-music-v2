from django.urls import include, path, re_path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from accounts import views as views

urlpatterns = [
    path("login/", views.LoginView.as_view(), name="login"),
    path("signup/", views.RegistrationView.as_view(), name="signup"),
    path("jwt/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("jwt/verify/", TokenVerifyView.as_view(), name="token_verify"),

    path("users/", views.UserListView.as_view(), name="users"),
]
