from rest_framework.generics import ListAPIView
from rest_framework.pagination import LimitOffsetPagination

from category.models import Category
from category.serializers.mainserializer import MainCategorySerializer


class ListCategoriesView(ListAPIView):
    """
    get:
    Get the list of all the categories
    """
    queryset = Category.objects.all()
    serializer_class = MainCategorySerializer
    pagination_class = LimitOffsetPagination
