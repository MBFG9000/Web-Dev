from django.shortcuts import render
from django.http import HttpRequest, JsonResponse
from .models import Category, Product


def product_list(request: HttpRequest) -> JsonResponse:
    products = Product.objects.all()
    products_data = list(products.values())
    return JsonResponse(products_data, safe=False, json_dumps_params={'ensure_ascii': False})


def product_detail(request: HttpRequest, id: int) -> JsonResponse:
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(
            {
                "name": product.name,
                "price": product.price,
                "description": product.description,
                "count": product.count,
                "is_active": product.is_active,
                "category": product.category.id,
            }
        , json_dumps_params={'ensure_ascii': False})
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


def category_list(request: HttpRequest) -> JsonResponse:
    categories = Category.objects.all()
    category_data = list(categories.values())
    return JsonResponse(category_data, safe=False, json_dumps_params={'ensure_ascii': False})


def category_detail(request: HttpRequest, id: int) -> JsonResponse:
    try:
        category = Category.objects.get(id=id)
        return JsonResponse({"name": category.name}, json_dumps_params={'ensure_ascii': False})
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


def category_product_list(request: HttpRequest, id: int) -> JsonResponse:
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        product_data = list(products.values())
        return JsonResponse(product_data, safe=False, json_dumps_params={'ensure_ascii': False})
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
