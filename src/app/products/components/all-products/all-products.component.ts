import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { Product } from '../../../_models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  isLoading: Boolean = false;

  CartProduct: { data: Product; quantity: number }[] = [];

  constructor(private prdService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategories();
  }

  getProducts() {
    this.isLoading = true;
    this.prdService.getAllProducts().subscribe(
      (res: any) => {
        // console.log(res);
        this.products = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        console.log(error.message);
        this.isLoading = false;
      }
    );
  }

  getAllCategories() {
    this.isLoading = true;
    this.prdService.getAllCategories().subscribe(
      (res: any) => {
        // console.log(res);
        this.categories = res;
        this.isLoading = false;
      },
      (error: Error) => {
        console.log(error.message);
        this.isLoading = false;
      }
    );
  }

  filterCategory(e: Event) {
    this.isLoading = true;
    let filterKey = (e.target as HTMLInputElement).value;
    console.log(filterKey);

    if (['all', 'All'].includes(filterKey)) {
      console.log('All');
      this.getProducts();
    } else {
      this.getProductByCategory(filterKey);
    }
  }

  getProductByCategory(keyword: string) {
    this.isLoading = true;
    this.prdService.getProductsByCategory(keyword).subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
        this.isLoading = false;
      },
      (error: Error) => {
        console.log(error.message);
        this.isLoading = false;
      }
    );
  }

  /**
   * Add Product to Cart (Save product to localStorage)
   * @param p Product data (data, quantity)
   */
  addProductToCart(p: any) {
    console.log(p);

    if ('cartProduct' in localStorage) {
      /**
       * If the product added already to the cardProduct localStorage
       */
      if (this.CartProduct.find((item) => item.data.id == p.data.id)) {
        alert('This product is already added to cart previously !');
      } else {
        // Get the product Saved in the localStorage
        this.CartProduct = [
          ...JSON.parse(localStorage.getItem('cartProduct')!),
        ];

        // push the newly added product to the CartProduct
        this.CartProduct.push(p);

        // Save the Updated CartProduct ot the localStorage again
        localStorage.setItem('cartProduct', JSON.stringify(this.CartProduct));
      }
    } else {
      // Create cartProduct localStorage
      this.CartProduct.push(p);
      localStorage.setItem('cartProduct', JSON.stringify(this.CartProduct));
    }

    console.log(this.CartProduct);
  }
}
