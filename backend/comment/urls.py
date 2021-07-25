from django.urls import path
from comment.views import ListCreateCommentView, DestroyCommentView, CreateCommentView


urlpatterns = [
    path('review/comment/<int:pk>/', ListCreateCommentView.as_view()),
    path('review/comment/new/<int:pk>/', CreateCommentView.as_view()),
    path('review/comment/delete/<int:pk>/', DestroyCommentView.as_view())
]
