import { Injectable } from '@angular/core';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'}
)
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  protected productsList:Product [] = []; 

  constructor() {
  }

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.apiUrl);
    return await data.json() ?? [];
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.apiUrl}/${id}`);
    return await data.json() ?? {};
  }

  
}

