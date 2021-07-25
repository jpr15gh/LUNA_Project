from django.db import models
from django.contrib.auth import get_user_model
from review.models import Review

User = get_user_model()


class Comment(models.Model):
    content = models.TextField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, related_name='comments', on_delete=models.CASCADE)
    review = models.ForeignKey(to=Review, related_name='comments', on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(to=User, related_name='liked_comments', blank=True)
