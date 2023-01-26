import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartOrder } from './../../_models/cart-order';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}

  submitCartOrder(data: CartOrder) {
    return this.http.post(environment.baseUrl + '/carts', data);
  }
}
