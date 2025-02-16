import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kaspi';
}
