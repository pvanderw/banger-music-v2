import uuid

from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from banger_music.models import UUIDModel


def jwt_get_secret_key(user_model):
	return user_model.userprofile.jwt_secret


class UserProfile(UUIDModel):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	bio = models.CharField(max_length=500, blank=True)
	time_zone = models.CharField(max_length=100, blank=True, null=True)
	jwt_secret = models.UUIDField(default=uuid.uuid4)

	def __str__(self):
		return f"{self.user.first_name} {self.user.last_name}"

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
	if created:
		UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
	instance.userprofile.save()