from django.db import models
from restaurant.models import Restaurant


class Category(models.Model):

    name = models.CharField(max_length=20)
    restaurants = models.ManyToManyField(to=Restaurant, related_name='categories', blank=True)

    def __str__(self):
        return self.name
