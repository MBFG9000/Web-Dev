import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service.service'
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  route = inject(ActivatedRoute);
  category?: string;

  productService = inject(ProductService);
  products: Product[] = [];
  filteredProducts: Product[] | undefined;
  
  filterCategory(category: string) : void {
    this.category = category;
    this.filteredProducts = category
      ? this.products.filter((product) => product.category === category)
      : [...this.products];
  }

  constructor() {
    this.category = this.route.snapshot.params['category'];
    this.productService.getAllProducts().then((products: Product[]) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }


  filterResults(text: string) { 
    this.filterCategory(this.category!);
    if (!text) {
      this.filteredProducts = this.products;
      return;
    }
    if(this.category) {
      this.filteredProducts = this.filteredProducts?.filter((product) =>
        product?.title.toLowerCase().includes(text.toLowerCase()),
      );
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product?.title.toLowerCase().includes(text.toLowerCase()),
      );
    }
  }
}
