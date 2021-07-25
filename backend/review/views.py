from rest_framework.response import Response
from rest_framework import status, filters
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from django.contrib.auth import get_user_model
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated

from luna_backend.permissions import IsOwnerOrReadOnly
from restaurant.models import Restaurant
from review.models import Review
from review.serializers.mainserializer import MainReviewSerializer

User = get_user_model()


class CreateReviewView(CreateAPIView):
    """
        post:
        Create a Review

        Body must contain:
        - 'content' and 'rating' (1-10),
    """
    serializer_class = MainReviewSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer, restaurant):
        serializer.save(user=self.request.user, restaurant=restaurant)

    def create(self, request, *args, **kwargs):
        restaurant = Restaurant.objects.get(id=self.kwargs["pk"])

        if self.request.user == restaurant.owner:
            return Response({"error": "Owner can not create a review of his/her restaurant"},
                            status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer, restaurant)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ListReviewsByRestaurantView(ListAPIView):
    """
        get:
        Get the list of the reviews for a single restaurant
     """
    serializer_class = MainReviewSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        restaurant_id = self.kwargs["pk"]
        return Review.objects.filter(restaurant=restaurant_id).order_by("-created")


class ListReviewsByUserView(ListAPIView):
    """
        get:
        Get the list of the reviews by a single user
     """
    serializer_class = MainReviewSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        user_id = self.kwargs["pk"]
        return Review.objects.filter(user=user_id).order_by("-created")


class RetrieveUpdateDestroyReviewView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = MainReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]


class ToggleReviewLikesView(UpdateAPIView):
    """
        patch:
        Toggle logged in users likes on review

        - Note: Cannot like own posts!
        - patch is preferred method for toggling likes
     """
    queryset = Review.objects.all()
    serializer_class = MainReviewSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        review = self.get_object()
        user = self.request.user

        if user == review.user:
            return Response({'error': 'Cannot like own post'},
                            status=status.HTTP_400_BAD_REQUEST)

        if user in review.liked_by.all():
            review.liked_by.remove(user)
            return Response({'success': f'Unliked post {review.id}'}, status=status.HTTP_200_OK)
        else:
            review.liked_by.add(user)
            return Response({'success': f'Liked post {review.id}'}, status=status.HTTP_200_OK)


class ListReviewsLikedByMyUserView(ListAPIView):
    """
        get:
        Get the list of the reviews the current user liked.
     """
    serializer_class = MainReviewSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        liked = self.request.user.liked_reviews.all()
        return Review.objects.filter(id__in=liked).order_by("-created")


class ListReviewsCommentedByMyUserView(ListAPIView):
    """
        get:
        Get the list of the reviews the current user commented.
     """
    serializer_class = MainReviewSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(comments__user=user).order_by("-created")


class ListReviewsView(ListAPIView):
    """
        get:
        List all / searches review

        Use-case:
        - Base-URL: returns all restaurants, with optional pagination
            - for pagination, you must include limit and offset parameters in url

        - Search-URL: Searches posts by 'rating', 'user' and 'restaurant'.
            - must include 'search' parameter in url
                - ex:
                https://luna-sagittarius.propulsion-learn.ch/backend/api/reviews/?search=apple

        - Combination: Adds pagination and search functionality together
            - ex:
            https://luna-sagittarius.propulsion-learn.ch/backend/api/reviews/?search=apple&limit=25&offset=0
    """
    pagination_class = LimitOffsetPagination
    queryset = Review.objects.all()
    serializer_class = MainReviewSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['rating', 'user', 'restaurant']
