import { Component, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../models/products.model';
import { ProductsService } from '../products.service';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryBarComponent } from '../category-bar/category-bar.component';
@Component({
  standalone: true,
  selector: 'app-products',
  imports: [ProductItemComponent, CommonModule, CategoryBarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Products: Product[] = [];
  SortedProducts: Product[] = [];
  ProductService: ProductsService = inject(ProductsService);

  constructor(){
    this.ProductService.getAllProducts().then((Produts:Product[]) => {
      this.Products = Produts;
      this.Products.forEach(p => {
        p.likes = 0;
      })
      this.SortedProducts = this.Products;

    })
  }

  sortProducts(selectedCategory:string){
    this.SortedProducts = this.Products.filter(p => {
      return p.category.includes(selectedCategory)
    })
    
  } 

  removeProduct(id: string) {
    this.Products = this.Products.filter(product => product.id !== id);
    this.SortedProducts = this.SortedProducts.filter(product => product.id !== id);
    console.log(`Product with ${id} deleted`);
  }
}
