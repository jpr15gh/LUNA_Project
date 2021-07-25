from rest_framework import serializers

from comment.serializers.mainserializer import MainCommentSerializer
from restaurant.serializers.mainserializer import MainRestaurantSerializer
from review.models import Review
from user.serializers.mainserializer import MainUserSerializer


class MainReviewSerializer(serializers.ModelSerializer):
    liked_by = MainUserSerializer(many=True, required=False)
    comments = MainCommentSerializer(many=True, required=False)
    user = MainUserSerializer(read_only=True)
    restaurant = MainRestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'content', 'rating', 'created', 'modified', 'user', 'liked_by',
                  'comments', 'restaurant']
        read_only_fields = ['id', 'created', 'modified', 'liked_by', 'user', 'comments', 'restaurant']
