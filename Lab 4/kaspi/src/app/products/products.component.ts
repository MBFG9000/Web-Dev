import { Component, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../models/products.model';
import { ProductsService } from '../products.service';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-products',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Products: Product[] = [];
  ProductService: ProductsService = inject(ProductsService);

  constructor(){
    this.ProductService.getAllProducts().then((Produts:Product[]) => {
      this.Products = Produts;
    })
    console.log('Json', this.Products);
  }
}
