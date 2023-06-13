import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  upper: boolean = true;
  changeCase() {
    this.upper = !this.upper;
  }
}
