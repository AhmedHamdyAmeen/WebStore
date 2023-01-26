/**
 * AppModule is a root module
 * while other modules in the app (ex: SharedModule) is a feature modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // You Should import all the project modules in the root module (AppModule)
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
