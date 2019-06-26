from django.urls import include, path, re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from accounts import views as views

urlpatterns = [
    path(
        "auth/",
        include(
            [   
                path("", include('djoser.urls')),
                path("", include('djoser.urls.jwt')),
                path(
                    "user/logout/all/",
                    views.UserLogoutAllView.as_view(),
                    name="user_logout_all",
                ),
            ]
        ),
    )
]
