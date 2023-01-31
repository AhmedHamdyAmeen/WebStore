import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('cardData') cardData: any = [];
  @Output() cartProduct: EventEmitter<any> = new EventEmitter(); // Product added to cart

  isAmountAdded: boolean = false;
  productAmount: number = 1;

  productForm: FormGroup = new FormGroup({
    amount: new FormControl(null, Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  /**
   * Add Product to Cart
   * @param e event variable
   */

  addToCart() {
    this.cartProduct.emit({
      data: this.cardData,
      quantity: this.productAmount,
    });
  }
}
