from django.contrib.auth.models import User
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from accounts.models import UserProfile


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, raw, using, update_fields, **kwargs):
    print("signal")
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_delete, sender=UserProfile)
def delete_user(sender, instance, using, **kwargs):
    instance.user.delete()