from rest_framework import serializers
from comment.models import Comment
from user.serializers.mainserializer import MainUserSerializer


class MainCommentSerializer(serializers.ModelSerializer):
    user = MainUserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created', 'modified', 'user', 'review', 'liked_by']
        read_only_fields = ['id', 'created', 'modified', 'user', 'review', 'liked_by']
