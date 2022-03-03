from django.urls import path, include
from backend.views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('notes', NoteViewSet)

urlpatterns = [
    # path('notes/', note_list, name='note_list'),
    # path('notes/<int:pk>/', note_detail, name='note_detail'),
    # path('notes/', NoteList.as_view(), name='note_list'),
    # path('notes/<int:pk>/', NoteDetail.as_view(), name='note_detail'),
    path('', include(router.urls)),
]
