import uuid

from django.db import models


class UUIDModel(models.Model):
    """
    Abstract model with unique identifier field
    """
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)

    class Meta:
        abstract = True