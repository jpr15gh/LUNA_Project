from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        try:
            # restaurant
            return obj.owner == request.user
        except AttributeError:
            pass

        try:
            # review
            return obj.user == request.user
        except AttributeError:
            pass

        try:
            # user
            return obj.username == request.user.username
        except AttributeError:
            pass
