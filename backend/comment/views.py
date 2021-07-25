from rest_framework import status
from rest_framework.generics import ListAPIView, DestroyAPIView, CreateAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from comment.models import Comment
from comment.serializers.mainserializer import MainCommentSerializer
from review.models import Review


class ListCreateCommentView(ListAPIView):
    """
    get:
    List all comments for a specific review

    This will list all comments related to a specific Review. Review ID must be passed in URL.
    """
    serializer_class = MainCommentSerializer
    pagination_class = LimitOffsetPagination

    def get(self, request, *args, **kwargs):
        queryset = Comment.objects.filter(user=self.kwargs['pk'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CreateCommentView(CreateAPIView):
    """
        post:
        Create a comment

        Review ID must be passed in URL, and body must contain:
        - 'content'
    """
    serializer_class = MainCommentSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        user = self.request.user
        review = Review.objects.get(id=self.kwargs['pk'])
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=user, review=review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class DestroyCommentView(DestroyAPIView):
    queryset = Comment.objects.all()
    permission_classes = [IsAuthenticated]
