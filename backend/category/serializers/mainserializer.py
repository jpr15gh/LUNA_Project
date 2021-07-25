from rest_framework import serializers
from category.models import Category


class MainCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'name', 'restaurants']
        read_only_fields = ['id', 'restaurants']
