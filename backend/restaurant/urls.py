from django.urls import path
from restaurant.views import CreateRestaurantsView, ListRestaurantsView, RetrieveUpdateDestroyRestaurantView, \
    ListRestaurantsByUserView, ListRestaurantsByCategoryView, ListBestFourRestaurantsView


urlpatterns = [
    path('restaurants/new/', CreateRestaurantsView.as_view()),
    path('restaurants/', ListRestaurantsView.as_view()),
    path('restaurants/<int:pk>/', RetrieveUpdateDestroyRestaurantView.as_view()),
    path('restaurants/user/<int:pk>/', ListRestaurantsByUserView.as_view()),
    path('restaurants/category/<int:pk>/', ListRestaurantsByCategoryView.as_view()),
    path('home/', ListBestFourRestaurantsView.as_view()),
]
