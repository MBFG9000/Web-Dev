from django.urls import path
from . import views

"""
/api/products - List of all Products
/api/products/<int:id>/ - Get one Product
/api/categories/ - List of all Categories
/api/categories/<int:id>/ - Get one Category
/api/categories/<int:id>/products/ - List of Products by Category
"""

apipatterns = [
    path('products/', views.product_list, name='product_list'),
    path('products/<int:id>/', views.product_detail, name='product_detail'),
    path('categories/', views.category_list, name='category_list'),
    path('categories/<int:id>/', views.category_detail, name='category_detail'),
    path('categories/<int:id>/products/', views.category_product_list, name='category_product_list'),
]
