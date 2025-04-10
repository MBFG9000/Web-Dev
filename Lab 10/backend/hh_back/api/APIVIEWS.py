from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Company, Vacancy
from .serializers import VacancySerializer2, CompanySerializer2


"""
/api/companies - List of all Companies
/api/companies/<int:id>/ - Get one Company
/api/companies/<int:id>/vacancies/ - List of Vacancies by Company
/api/vacancies/ - List of all Vacancies
/api/vacancies/<int:id>/ - Get one Vacancy
/api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary

"""

class CompanyListView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)


class CompanyDetailView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return Response({"detail": "Company not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = CompanySerializer2(company)
        return Response(serializer.data)


class VacancyByCompanyView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(pk=id)
        except Company.DoesNotExist:
            return Response({"detail": "Company not found."}, status=status.HTTP_404_NOT_FOUND)

        vacancies = company.vacancies.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)


class VacancyListView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)


class VacancyDetailView(APIView):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return Response({"detail": "Vacancy not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = VacancySerializer2(vacancy)
        return Response(serializer.data)


class TopTenVacanciesView(APIView):
    def get(self, request):
        top_vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer2(top_vacancies, many=True)
        return Response(serializer.data)
