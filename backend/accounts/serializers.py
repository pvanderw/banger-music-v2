from django.contrib.auth.models import update_last_login, User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from accounts.models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(read_only=True)
    updated = serializers.DateTimeField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "username", "email", "is_active", "created", "updated"]
        read_only_fields = ["is_active"]


class LoginSerializer(TokenObtainPairSerializer):
    """Validates the user's credentials and returns the user and access/refresh tokens"""

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        data["user"] = UserSerializer(self.user).data
        update_last_login(None, self.user)
        return data


class RegistrationSerializer(UserSerializer):
    email = serializers.EmailField(required=True, write_only=True, max_length=128)
    password = serializers.CharField(
        max_length=128, min_length=8, write_only=True, required=True
    )

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "password",
            "is_active",
            "created",
            "updated",
        ]
        read_only_fields = ["is_active"]


    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data["email"])
        except User.DoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user
