import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {

  products = signal<Product[]>([]);

  @Input() id?: string;
  product = signal<Product | null>(null);

  private productService = inject(ProductService);

  ngOnInit() {
    if(this.id) {
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
        }
      })
    }
  }



}
