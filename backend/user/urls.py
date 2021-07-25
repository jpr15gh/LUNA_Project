from django.urls import path
from user.views import RetrieveUpdateMyUserProfileView, ListUserView, RetrieveUserByIdProfile


urlpatterns = [
    path('me/', RetrieveUpdateMyUserProfileView.as_view()),
    path('users/', ListUserView.as_view()),
    path('users/<int:pk>/', RetrieveUserByIdProfile.as_view()),
]
