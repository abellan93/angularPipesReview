import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'raúl';
  value = 22000;
  obj = {
    name: 'Raúl Abellán'
  }

  showFullName(){
    this.name = 'raúl abellán mercado'
  }
}
