import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() rmProduct = new EventEmitter<string>();

  shareOnTelegram(link:string) {
    const encodedText = encodeURIComponent(`Check out this product: ${link}`);
    window.open(`https://t.me/share/url?url=${encodedText}`, "_blank");
  }

  onRemove(){
    this.rmProduct.emit(this.product.id)
  }

  increaseLikes(){
    this.product.likes++;
  }  

}
