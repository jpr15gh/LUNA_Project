from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, RetrieveAPIView
from django.contrib.auth import get_user_model
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from luna_backend.permissions import IsOwnerOrReadOnly
from user.serializers.mainserializer import MainUserSerializer

User = get_user_model()


class RetrieveUpdateMyUserProfileView(RetrieveUpdateAPIView):
    """
       get:
       Get profile of logged in user

       patch:
       Update Logged in user's profile (partial change)
    """
    serializer_class = MainUserSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self):
        return User.objects.get(id=self.request.user.id)


class ListUserView(ListAPIView):
    """
        get:
        Get user data

        - Base URL: Returns list of all users
            - Pagination: add limit and offset parameters to request to enable response pagination

        - Search: Searches for instance of user by username, first and last name
            - Add search parameter for appropriate response
            - ex:
            https://luna-sagittarius.propulsion-learn.ch/backend/api/users/?search=waltersobchak@aol.com

        - Combination: Searches for instance of user by search params, with pagination included
            - Add search , offset and limit parameters to enable pagination with search
            - ex:
            https://luna-sagittarius.propulsion-learn.ch/backend/api/users/?search=waltersobchak@aol.com&offset=0&limit=25
     """
    queryset = User.objects.all()
    pagination_class = LimitOffsetPagination
    serializer_class = MainUserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'first_name', 'last_name']

    def get_queryset(self):
        return User.objects.exclude(id=self.request.user.id)


class RetrieveUserByIdProfile(RetrieveAPIView):
    """
       get:
       Get specific user profile by ID

       - must add id to end of url, with slash afterwards
    """
    queryset = User.objects.all()
    serializer_class = MainUserSerializer
