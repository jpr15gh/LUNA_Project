from django.db.models import Avg
from rest_framework import serializers

from category.serializers.mainserializer import MainCategorySerializer
from restaurant.models import Restaurant


class MainRestaurantSerializer(serializers.ModelSerializer):
    average = serializers.SerializerMethodField(read_only=True)
    review_count = serializers.SerializerMethodField(read_only=True)
    categories = MainCategorySerializer(many=True)

    def get_average(self, obj):
        return Restaurant.objects.filter(id=obj.id).aggregate(rating=Avg('reviews__rating'))

    def get_review_count(self, obj):
        return obj.reviews.count()

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'country', 'street', 'city', 'zip', 'website',
                  'phone_number', 'email', 'price_level', 'image', 'created', 'modified', 'owner',
                  'average', 'review_count', 'reviews', 'opening_hours', 'categories']
        read_only_fields = ['id', 'email' 'created', 'modified', 'owner', 'average', 'reviews', 'opening_hours']


class CreateRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'country', 'street', 'city', 'zip', 'website',
                  'phone_number', 'email', 'price_level', 'image', 'created', 'modified', 'owner',
                  'reviews', 'opening_hours', 'categories']
        read_only_fields = ['id', 'email' 'created', 'modified', 'owner', 'reviews', 'opening_hours']
