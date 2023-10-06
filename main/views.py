# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import SampleSerializer


# Create your views here.
class SampleView(APIView):
    serializer_class = SampleSerializer

    def get(self, request):
        detail = []
        return Response(detail)

    def post(self, request):
        serializer = SampleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
