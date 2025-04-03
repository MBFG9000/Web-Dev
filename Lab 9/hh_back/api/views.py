from django.http import JsonResponse
from .models import Company, Vacancy
from .utils import ModelEncoder

def company_list(request):
    companies = list(Company.objects.all())
    return JsonResponse(companies, encoder=ModelEncoder, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
        return JsonResponse(company, encoder=ModelEncoder, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
        vacancies = list(company.vacancies.all())
        return JsonResponse(vacancies, encoder=ModelEncoder, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def vacancy_list(request):
    vacancies = list(Vacancy.objects.all())
    return JsonResponse(vacancies, encoder=ModelEncoder, safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
        return JsonResponse(vacancy, encoder=ModelEncoder, safe=False)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)

def top_ten_vacancies(request):
    vacancies = list(Vacancy.objects.order_by('-salary')[:10])
    return JsonResponse(vacancies, encoder=ModelEncoder, safe=False)
