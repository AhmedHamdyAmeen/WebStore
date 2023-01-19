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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
