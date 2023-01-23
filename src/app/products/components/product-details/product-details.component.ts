import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../../_models/product';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any = [];
  id: string = '';
  isLoading = true;

  constructor(
    private prdService: ProductsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!; // return static params
    // this.router.paramMap.subscribe((params) => {
    //   this.id = params.get('id')!;
    // });  // return Observable<paramMap>

    this.prdService.getSingleProductByID(this.id).subscribe(
      (data: any) => {
        this.product = data;
        console.log(data);
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error.message);
        this.isLoading = false;
      }
    );
  }
}
