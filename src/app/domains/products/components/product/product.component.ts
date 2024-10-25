import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';


import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //Input -> del padre al hijo
  @Input({required: true}) product!: Product;
  //Output -> del hijo al padre
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child');
    // este producto es el que quiero que agreges al carrito de compras
    this.addToCart.emit(this.product);
  }
}
