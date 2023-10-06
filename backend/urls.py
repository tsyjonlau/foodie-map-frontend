"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.shortcuts import render

from main.views import SampleView


def render_react(request):
    return render(request, 'index.html')


# The re_path redirect every path that doesn't match to the React front-end.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sample/', SampleView.as_view(), name='sample'),
    re_path(r'^$', render_react),
    re_path(r'^(?:.*)/?$', render_react),
]
