from .models import Company, Vacancy
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CompanySerializer, VacancySerializer
from rest_framework import status
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serialized = CompanySerializer(companies, many = True)
    return Response(serialized.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def company_detail(request, id):
    company = get_object_or_404(Company, pk = id)
    serializer = CompanySerializer(company)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def company_vacancies(request, id):
        company = get_object_or_404(Company, pk = id)
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   
@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
@api_view(['GET'])
def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data, status=status.HTTP_200_OK)
@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

