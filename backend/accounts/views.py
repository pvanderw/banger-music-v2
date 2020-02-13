import datetime
import uuid

from django.conf import settings
from django.shortcuts import render
from rest_framework import views, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView


class UserLogoutAllView(views.APIView):
    """
    Use this endpoint to log out all sessions for a given user.
    """

    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user_profile = request.user.userprofile
        user_profile.jwt_secret = uuid.uuid4()
        user_profile.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
