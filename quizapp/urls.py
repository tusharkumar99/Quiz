from django.contrib import admin
from django.urls import path, include
from .views import QuizListView, quiz_view


app_name = 'quizapp'

urlpatterns = [
    path('', QuizListView.as_view(), name = 'home'),
    path('<pk>/', quiz_view, name="quiz-view"),
]