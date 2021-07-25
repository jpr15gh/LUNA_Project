from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    REQUIRED_FIELDS = ['email']
    USERNAME_FIELD = 'username'
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=50, blank=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+999999999'. "
                                         "From 9 up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    description = models.TextField(max_length=250, blank=True)
    things_i_love = models.JSONField(blank=True, default=list)
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    profile_banner = models.ImageField(upload_to=user_directory_path, blank=True, null=True)

    def __str__(self):
        return self.username
