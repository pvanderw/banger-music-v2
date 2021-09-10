import uuid

from django.contrib.auth.models import User
from django.db import models

from banger_music.models import UUIDModel


class UserProfile(UUIDModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=500, blank=True)
    time_zone = models.CharField(max_length=100, default="America/Los_Angeles")
    jwt_secret = models.UUIDField(default=uuid.uuid4)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"