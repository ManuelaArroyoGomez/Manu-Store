import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.model'
import { HeaderComponent } from '@shared/components/header/header.component'
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);
  private cartService = inject(CartService)
  private productService = inject(ProductService)

  // ngOnInit() {
  //   this.productService.getProducts()
  //   .subscribe({
  //     next: (products) => {
  //       this.products.set(products);
  //     },
  //     error: () => {

  //     }
  //   })
  // }

  constructor() {
    const initProduct: Product[] = [
      {
        id: Date.now(),
        title: 'Blusa de manga larga',
        price: 70,
        image: './../../../../../assets/img/product1.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Falda Beige',
        price: 80,
        image: './../../../../../assets/img/product2.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Falda Gris',
        price: 100,
        image: './../../../../../assets/img/product3.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Conjunto: Blusa y falda',
        price: 200,
        image: './../../../../../assets/img/product4.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Conjunto: Falda y Botas',
        price: 260,
        image: './../../../../../assets/img/product5.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pantalon',
        price: 120,
        image: './../../../../../assets/img/product6.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Conjuto',
        price: 200,
        image: './../../../../../assets/img/product7.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Blusa',
        price: 60,
        image: './../../../../../assets/img/product8.jpg',
        creationAt: new Date().toISOString(),
      }
    ];
    this.products.set(initProduct);
  }

  addToCart(product: Product) {
    //Nos envian informacion
    // this.cart.update(prevState => [...prevState, product])
    this.cartService.addToCart(product)
  }

}
