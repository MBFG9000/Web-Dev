import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable({
  providedIn: 'root',
})

export class ProductService {
  url = 'http://localhost:3000/products';

  async getAllProducts(): Promise<Product[]> {
    try {
      const data = await fetch(this.url);
      return (await data.json()) ?? [];
      
      // const data = await response.json();

      // let allProducts: Product[] = [];
      // for (const categoryProducts of Object.values(data)) {
      //   const products = Object.values(categoryProducts as Record<string, Product>);
      //   allProducts.push(...products);
      // }

    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  

  async getProductById(id: string): Promise<Product | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

}