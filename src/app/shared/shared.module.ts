/** Shared Module have the modules which is global along the app
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    CardComponent,
    FormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
