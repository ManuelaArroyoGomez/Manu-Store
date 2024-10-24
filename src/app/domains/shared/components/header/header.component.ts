import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '@shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @Input({required:true}) cart: Product[] =[];
  hideSideMenu = signal(true);
  // total = signal(0);
  private cartService = inject(CartService)
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart'];
  //   if (cart) {
  //     this.total.set(this.getTotalPrice());
  //   }
  // }

  // getTotalPrice() {
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }
}
