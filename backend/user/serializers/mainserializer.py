from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class MainUserSerializer(serializers.ModelSerializer):
    comment_count = serializers.SerializerMethodField(read_only=True)
    review_count = serializers.SerializerMethodField(read_only=True)

    def get_comment_count(self, obj):
        return obj.comments.count()

    def get_review_count(self, obj):
        return obj.user_reviews.count()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'phone_number',
                  'description', 'things_i_love', 'profile_picture', 'profile_banner', 'comment_count',
                  'review_count', 'comments', 'liked_comments', 'user_reviews', 'liked_reviews',
                  'owned_restaurants', 'date_joined', 'last_login']
        read_only_fields = ['id', 'email', 'comment_count', 'review_count', 'comments', 'liked_comments',
                            'user_reviews', 'liked_reviews', 'owned_restaurants', 'date_joined', 'last_login']
