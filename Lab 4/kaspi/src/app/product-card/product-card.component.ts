import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() productCard!: Product;

  getTelegramLink(): string {
    const message = `Здравствуйте, интересует данный товар. У вас он имеется в наличии? \nhttps://kaspi.kz/shop/p/c-${this.productCard.id}`;
    return `https://t.me/EraEKV?text=${encodeURIComponent(message)}`;
  }
}
