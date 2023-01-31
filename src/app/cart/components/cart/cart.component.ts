import { Component, OnInit } from '@angular/core';
import { Product } from './../../../_models/product';
import { CartsService } from './../../services/carts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  CartProduct: { data: Product; quantity: number }[] = [];
  productQuantity: any = 1;
  total: number = 0;
  isOrderSubmitted: boolean = false;

  cartForm: FormGroup = new FormGroup({
    amount: new FormControl(null, Validators.required),
  });

  constructor(private cartSr: CartsService) {}

  getCartProducts() {
    if ('cartProduct' in localStorage) {
      // Get the product Saved in the localStorage
      this.CartProduct = [...JSON.parse(localStorage.getItem('cartProduct')!)];
    } else {
      // Show message "Oh Yah, No Products in Cart Yet!"
    }
    console.log('CartProduct: ', this.CartProduct);
  }

  getCartTotal() {
    this.total = 0;

    for (let i in this.CartProduct) {
      this.total +=
        this.CartProduct[i].data.price * this.CartProduct[i].quantity;
    }
  }

  increaseQuantity(index: number) {
    this.CartProduct[index].quantity++;
    // Save the Updated CartProduct ot the localStorage again
    localStorage.setItem('cartProduct', JSON.stringify(this.CartProduct));

    // Calculate Cart Total again
    this.getCartTotal();
  }

  decreaseQuantity(index: number) {
    if (this.CartProduct[index].quantity <= 1) return; // minimum quantity = 1
    this.CartProduct[index].quantity--;

    // Save the Updated CartProduct ot the localStorage again
    localStorage.setItem('cartProduct', JSON.stringify(this.CartProduct));

    // Calculate Cart Total again
    this.getCartTotal();
  }

  detectQuantityChange() {
    // Save the Updated CartProduct ot the localStorage again
    localStorage.setItem('cartProduct', JSON.stringify(this.CartProduct));
    this.getCartTotal();
  }

  deleteCartItem(index: number) {
    this.CartProduct.splice(index, 1);
    localStorage.setItem('cartProduct', JSON.stringify(this.CartProduct));
    this.getCartTotal();
  }

  clearCart() {
    this.CartProduct = [];
    localStorage.setItem('cartProduct', JSON.stringify(this.CartProduct));
    this.total = 0;
  }

  submitOrder() {
    let products = this.CartProduct.map((product) => {
      return { productId: product.data.id, quantity: product.quantity };
    });

    // console.log('OrderProducts: ', products);

    let data = {
      userId: 5, // Static userId, no login System
      date: new Date(),
      products: products,
    };

    this.cartSr.submitCartOrder(data).subscribe(
      (res) => {
        this.isOrderSubmitted = true;
        console.log('Order Submitted Successfully, Data: ', res);
        this.CartProduct = [];
        this.total = 0;
      },
      (error) => console.log(error.message)
    );
  }

  ngOnInit(): void {
    this.getCartProducts();
    this.getCartTotal();
  }
}

/**
 * * Cart Functionalities:
 * 1- List All Cart Products      ==> Done
 * 2- Get Items Price Total       ==> Done
 * 3- Decrease product Quantity (Amount) ==> Done
 * 4- Increase product Quantity (Amount) ==> Done
 *
 * 5- Detect change is the quantity input-control  ==> Done
 * 6- Delete Product ==> Done
 * 7- Clear Cart. ==> Done
 * 8- Get Cart Products length. ==> Done
 *
 * 9- Send Cart Order to Backend API. ==> Done
 * 10- Show alert when order is successfully sent ==> Done
 */
