import datetime
import uuid

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.conf import settings
from django.shortcuts import render
from rest_framework import views, permissions, status, generics
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.views import TokenObtainPairView

from accounts.serializers import LoginSerializer, RegistrationSerializer, UserSerializer



class RegistrationView(generics.CreateAPIView, TokenObtainPairView):
    serializer_class = RegistrationSerializer
    permission_classes = (permissions.AllowAny,)
    http_method_names = ['post']


class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer
    permission_classes = (permissions.AllowAny,)
    http_method_names = ['post']


class UserListView(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)


