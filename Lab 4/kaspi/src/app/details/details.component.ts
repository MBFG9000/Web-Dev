import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product: Product | undefined;

  constructor() {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId.toString()).then((product) => {
      this.product = product;
    });
  }

  getTelegramLink(): string {
    const message = `Здравствуйте, интересует данный товар. У вас он имеется в наличии? \nhttps://kaspi.kz/shop/p/c-${this.product?.id}`;
    return `https://t.me/EraEKV?text=${encodeURIComponent(message)}`;
  }
}
