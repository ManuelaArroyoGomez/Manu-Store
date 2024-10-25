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
        id: '1',
        title: 'Top Bandeau de manga larga',
        description: 'Top estilo Bandeau de manga larga, de material transparente y ajustado. El diseño es sin hombros, lo que le da un toque atrevido y moderno, con las mangas hechas del mismo tejido translúcido. El color es un tono caqui oscuro con un patrón sutil que parece camuflaje, lo que añade un elemento interesante al diseño. El top es corto, terminando justo por encima de la cintura.',
        price: 70,
        image: './../../../../../assets/img/product1.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Falda Caqui',
        description: 'Falda Beige de estilo mini con pliegues amplios, lo que le da un aspecto ligeramente plisado. Es de color caqui, con un corte recto en la cintura, lo que la hace ajustada en esa zona. El diseño es sencillo y casual, adecuado para un look urbano o informal. La longitud es corta, por encima de la rodilla, lo que le aporta un estilo juvenil y moderno.',
        price: 80,
        image: './../../../../../assets/img/product2.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Mini Falda',
        description: 'Mini falda de color gris oscuro con un diseño ajustado y moderno. Tiene aberturas en los costados que se destacan por los detalles de cordones ajustables, permitiendo personalizar el ancho de la abertura lateral. El largo de la falda es corto, por encima de la rodilla, y se ajusta a la cintura, resaltando la figura.',
        price: 100,
        image: './../../../../../assets/img/product3.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: '4',
        title: 'Conjunto: Blusa y falda',
        description: 'Blusa manga larga de color verde, semi transparente',
        price: 200,
        image: './../../../../../assets/img/product4.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: '5',
        title: 'Conjunto: Falda y Botas',
        description: 'Blusa manga larga de color verde, semi transparente',
        price: 260,
        image: './../../../../../assets/img/product5.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: '6',
        title: 'Pantalon',
        description: 'Blusa manga larga de color verde, semi transparente',
        price: 120,
        image: './../../../../../assets/img/product6.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: '7',
        title: 'Conjuto',
        description: 'Blusa manga larga de color verde, semi transparente',
        price: 200,
        image: './../../../../../assets/img/product7.jpg',
        creationAt: new Date().toISOString(),
      },
      {
        id: '8',
        title: 'Blusa',
        description: 'Blusa manga larga de color verde, semi transparente',
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
