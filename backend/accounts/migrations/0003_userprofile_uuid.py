# Generated by Django 2.1.5 on 2019-01-11 01:32

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_userprofile_jwt_secret'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]