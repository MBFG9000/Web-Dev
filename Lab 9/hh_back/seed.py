from api.models import Company, Vacancy
from faker import Faker
import random

fake = Faker()

# Очистка старых данных (по желанию)
Vacancy.objects.all().delete()
Company.objects.all().delete()

# Создание 4 компаний
companies = []
for _ in range(4):
    company = Company.objects.create(
        name=fake.company(),
        description=fake.text(max_nb_chars=200),
        city=fake.city(),
        address=fake.address()
    )
    companies.append(company)

# Создание 30 вакансий, случайно распределённых по компаниям
for _ in range(30):
    Vacancy.objects.create(
        name=fake.job(),
        description=fake.text(max_nb_chars=150),
        salary=round(random.uniform(40000, 150000), 2),
        company=random.choice(companies)
    )

print("✅ Успешно создано 4 компании и 30 вакансий.")
