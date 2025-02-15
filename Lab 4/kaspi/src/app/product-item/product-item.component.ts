import { Component, Input } from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  standalone: true,
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!:Product;

  shareOnTelegram(link:string) {
    const encodedText = encodeURIComponent(`Check out this product: ${link}`);
    window.open(`https://t.me/share/url?url=${encodedText}`, "_blank");
}
}
