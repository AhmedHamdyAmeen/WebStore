import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { Product } from '../../../_models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private prdService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.prdService.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
