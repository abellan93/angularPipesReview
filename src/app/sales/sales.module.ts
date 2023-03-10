import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
