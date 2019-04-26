from django.urls import include, path, re_path
from djoser import views as djoser_views
from rest_framework_jwt import views as jwt_views
from accounts import views as views

urlpatterns = [
    path(
        "auth/",
        include(
            [
                path(
                    "user/view/",
                    djoser_views.UserView.as_view(),
                    name="user_view"
                ),
                path(
                    "user/delete/",
                    djoser_views.UserDeleteView.as_view(),
                    name="user_delete",
                ),
                path(
                    "user/create/",
                    djoser_views.UserCreateView.as_view(),
                    name="user_create",
                ),
                path(
                    "user/login/",
                    jwt_views.ObtainJSONWebToken.as_view(),
                    name="user_login",
                ),
                path(
                    "user/login/refresh/",
                    jwt_views.RefreshJSONWebToken.as_view(),
                    name="user_login_refresh",
                ),
                path(
                    "user/logout/all/",
                    views.UserLogoutAllView.as_view(),
                    name="user_logout_all",
                ),
            ]
        ),
    )
]
