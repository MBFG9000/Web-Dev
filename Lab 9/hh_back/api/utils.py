import json
from .models import Company, Vacancy

class ModelEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Company):
            return {
                'id': obj.id,
                'name': obj.name,
                'description': obj.description,
                'city': obj.city,
                'address': obj.address
            }
        elif isinstance(obj, Vacancy):
            return {
                'id': obj.id,
                'name': obj.name,
                'description': obj.description,
                'salary': obj.salary,
                'company_id': obj.company.id
            }
        return super().default(obj)
