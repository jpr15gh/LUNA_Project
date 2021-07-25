from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.contrib.auth import get_user_model
from restaurant.models import Restaurant

User = get_user_model()


class Review(models.Model):
    content = models.TextField(max_length=300)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, related_name='user_reviews', on_delete=models.CASCADE)
    restaurant = models.ForeignKey(to=Restaurant, related_name='reviews', on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(to=User, related_name='liked_reviews')
