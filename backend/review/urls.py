from django.urls import path
from review.views import CreateReviewView, ListReviewsByRestaurantView, ListReviewsByUserView, \
    RetrieveUpdateDestroyReviewView, ToggleReviewLikesView, ListReviewsLikedByMyUserView, \
    ListReviewsCommentedByMyUserView, ListReviewsView


urlpatterns = [
    path('reviews/new/<int:pk>/', CreateReviewView.as_view()),
    path('reviews/restaurant/<int:pk>/', ListReviewsByRestaurantView.as_view()),
    path('reviews/user/<int:pk>/', ListReviewsByUserView.as_view()),
    path('reviews/<int:pk>/', RetrieveUpdateDestroyReviewView.as_view()),
    path('reviews/like/<int:pk>/', ToggleReviewLikesView.as_view()),
    path('reviews/likes/', ListReviewsLikedByMyUserView.as_view()),
    path('reviews/comments/', ListReviewsCommentedByMyUserView.as_view()),
    path('reviews/', ListReviewsView.as_view())
]
