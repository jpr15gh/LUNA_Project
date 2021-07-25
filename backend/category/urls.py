from django.urls import path
from category.views import ListCategoriesView


urlpatterns = [
    path('category/list/', ListCategoriesView.as_view()),
]
