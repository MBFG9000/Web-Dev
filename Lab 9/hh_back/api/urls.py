from django.urls import path
from . import views

"""
/api/companies - List of all Companies
/api/companies/<int:id>/ - Get one Company
/api/companies/<int:id>/vacancies/ - List of Vacancies by Company
/api/vacancies/ - List of all Vacancies
/api/vacancies/<int:id>/ - Get one Vacancy
/api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary
"""

apipatterns = [
    path("companies/", views.company_list, name="company-list"),
    path("companies/<int:id>/", views.company_detail, name="company-detail"),
    path("companies/<int:id>/vacancies/", views.company_vacancies, name="company-vacancies"),
    path("vacancies/", views.vacancy_list, name="vacancy-list"),
    path("vacancies/<int:id>/", views.vacancy_detail, name="vacancy-detail"),
    path("vacancies/top_ten/", views.top_ten_vacancies, name="vacancy-top-ten"),
]
