from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	bio = models.CharField(max_length=500, blank=True)
	time_zone = models.CharField(max_length=100, default='America/Los_Angeles')